import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as fromRecipe from '../store/recipe.reducers'
import * as RecipeActions from '../store/recipe.actions'
// import 'rxjs/add/operator/take';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  //@Input() currentItem : Recipe;
  recipeState: Observable<fromRecipe.State>
  id: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromRecipe.featureState>) { }

  ngOnInit() {
    // This will always execute when there is a change in the URL
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'] // it will listem all the time
        //this.recipeState = this.recipeService.getRecipe(+params['id']);
        this.recipeState = this.store.select('recipes')

      })
  }

  onAddingToShoppingList() {
    this.store.select('recipes')
      .pipe(take(1))
      .subscribe((recipeState: fromRecipe.State) => {
        this.store.dispatch(new ShoppingListActions.AddIngredients(recipeState.recipes[this.id].ingredients))
      })
    //this.recipeService.addIngredientsToShoppingList(this.currentItem.ingredients)
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route })
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo : this.route})
  }

  onDelete() {
    this.store.dispatch( new RecipeActions.DeleteRecipe(this.id))
    //this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes'])
  }

}

import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import {  Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

// import { Recipe } from "src/app/recipes/recipes.model";
// import { RecipeService } from "src/app/recipes/recipes.service";
import * as fromRecipe from '../store/recipe.reducers'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //recipes: Recipe[] = [];
  recipeState: Observable<fromRecipe.State>;

  //subcription: Subscription
  constructor(
    //private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromRecipe.featureState>) { }

  ngOnInit() {
    this.recipeState = this.store.select('recipes');
    // this.subcription = this.recipeService.recipeChanged.
    //   subscribe(
    //     (recipe: Recipe[]) => {
    //       this.recipes = recipe;
    //     }
    //   )
    // this.recipes = this.recipeService.getRecipes();
  }

  // currentItemClicked(item : Recipe){
  //   this.recipeService.recipeItemEvent.emit(item)
  // }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }
  // ngOnDestroy() {
  //   this.subcription.unsubscribe();
  // }

}

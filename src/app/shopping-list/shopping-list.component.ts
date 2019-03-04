import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from "src/app/shared/ingredient.model";
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from './store/shopping-list.actions'
import * as fromApp from '../store/app.reducers';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingListState: Observable<{ ingredients: Ingredient[] }>;
  private subscription: Subscription
  constructor(
    // Store type would be (which type of data we want to retrive)
    private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    //shoppingListState is an Observable
    this.shoppingListState = this.store.select('shoppingList');
    // this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
    //   (ingredient : Ingredient[]) => {
    //     this.ingredients = ingredient
    //   }
    // )
  }

  onEditItem(index: number) {
    //this.shoppingListService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index))
  }
  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }
}

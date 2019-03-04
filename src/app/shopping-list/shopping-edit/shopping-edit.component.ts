import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
//import { Ingredient } from "src/app/shared/ingredient.model";
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromApp from '../../store/app.reducers';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  //@Output() addItemEvent = new EventEmitter<Ingredient>()
  // @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('f') editForm: NgForm;
  editMode = false; // Edit mode is set to false initially
  indexEdit: number;
  editedItem: Ingredient;
  subscription : Subscription;
  constructor(
    private store : Store<fromApp.AppState>) { }

  ngOnInit() {

    this.subscription = this.store.select('shoppingList')
    .subscribe(
      data => {
        if(data.editedIngredientIndex > -1) {
          this.editMode = true;// edit mode is on here
          this.editedItem = data.editedIngredient;
          this.editForm.setValue({ // setValue is used to set the values of the form 
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }else{
          this.editMode = false;// edit mode is off here
        }
       }
    )


    //  this.shoppingListService.startedEditing
    //   .subscribe((index: number) => {
    //     this.indexEdit = index;
    //     this.editMode = true;// edit mode is on here
    //     this.editedItem = this.shoppingListService.getIngredient(index);
    //     this.editForm.setValue({ // setValue is used to set the values of the form 
    //       name: this.editedItem.name,
    //       amount: this.editedItem.amount
    //     })
    //   })
  }

  onSubmit(form: NgForm) {
    let formValue = form.value;
    if ((formValue.name !== "") && (formValue.amount !== "")) {
      const newIngredient = {
        name: formValue.name,
        amount: formValue.amount
      }
      if(this.editMode){
        this.store.dispatch(new ShoppingListActions.UpdateIngredient({
            ingredient :newIngredient
          }));

        //this.shoppingListService.updateIngredient(this.indexEdit,newIngredient);
      }else{
        //Passing new(AddIngredient)  Ingredients to the Actions
        // Dispatch means Emit. // new instance of Action is passed
        this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
      }
    }
    this.editMode = false;
    form.reset();
  }
  onDelete(){
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    //this.shoppingListService.deleteIngredient(this.indexEdit);
    this.onClear()
  }
  onClear(){
    this.editForm.reset();
    this.editMode = false; // This is to make sure that we are no longer in edit mode
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit())// This is used to exit from the exit mode
  }
}

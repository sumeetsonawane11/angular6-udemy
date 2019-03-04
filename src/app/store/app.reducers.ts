import { ActionReducerMap } from '@ngrx/store';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducers';
import * as fromAuth from '../auth/store/auth.reducers';

//Application wise States should be set here
export interface AppState {
    shoppingList : fromShoppingList.State,
    auth: fromAuth.State
}

//Application wise reducers (function defined in reducer) should be set here
export const reducers : ActionReducerMap <AppState> =  {
    shoppingList: fromShoppingList.shoppingListReducers,
    auth: fromAuth.authReducer
}
import { Effect, Actions } from "@ngrx/effects";
import * as RecipeActions from '../store/recipe.actions';

import { switchMap, withLatestFrom, map } from 'rxjs/operators';
import { Store } from "@ngrx/store";
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Recipe } from "../recipes.model";
import { Injectable } from "@angular/core";
import * as fromRecipe from '../store/recipe.reducers'

@Injectable()
export class RecipeEffects {

    constructor(private actions$: Actions,
        private httpClient: HttpClient,
        private store: Store<fromRecipe.featureState>) { }


    @Effect()
    recipeFetch = this.actions$ // All the actions
        .ofType(RecipeActions.FETCH_RECIPES)
        .pipe(
            switchMap((action: RecipeActions.FetchRecipes) => { // Actions dispatched will be received here
                return this.httpClient.get<Recipe[]>('https://ng-recipe-book-ff9a9.firebaseio.com/recipes.json', {
                    observe: 'body',
                    responseType: 'json'
                })
            }),

            map(
                (recipes) => {
                    // It directly returns/extracts the body, in earlier version i.e Angular < 4.2, we need to extract it manually like 'response.json()'
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            console.log(recipe)
                            recipe['ingredients'] = [];
                        }
                    }
                    //return recipes;
                    //Return Object into new action and dispatch automatically
                    return {
                        type: RecipeActions.SET_RECIPES,
                        payload: recipes
                    }
                }
            )
        )


    @Effect({ dispatch: false })
    recipeStore = this.actions$ // All the actions
        .ofType(RecipeActions.STORE_RECIPES)
        .pipe(
            withLatestFrom(this.store.select('recipes')),//It takes an Observable, also combine with an Action
            switchMap(([action, state]) => { // Actions dispatched will be received here
                //Multiple progress upload and download event by using the below method, Can be used for progress bar
                const req = new HttpRequest('PUT', 'https://ng-recipe-book-ff9a9.firebaseio.com/recipes.json',
                    state.recipes,
                    {
                        reportProgress: true
                    })
                return this.httpClient.request(req);
            })
        )

}
// import { Injectable } from "@angular/core";
// import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";
// import { RecipeService } from "../recipes/recipes.service";
// import { Recipe } from "../recipes/recipes.model";
// import 'rxjs/Rx';
// // import { AuthService } from "../auth/auth.service";
// //import 'rxjs/add/operator/map';

// @Injectable()
// export class DataStorageService {

//   constructor(private httpClient: HttpClient,
//     //private authService: AuthService
//     private recipeService: RecipeService,
//     ) { }

//   storeRecipes() {
//     //const headers = new HttpHeaders().set('Authorization', 'Bearer tokennn')

//     //Return the Observable
//     // return this.httpClient.put(
//     //   ('https://ng-recipe-book-ff9a9.firebaseio.com/recipes.json'),
//     //   this.receipeService.getRecipes(),{
//     //     observe : 'body',
//     //     headers : headers,
//     //     params : new HttpParams().set('auth',token)
//     //   }
//     // )

//     //Multiple progress upload and download event by using the below method, Can be used for progress bar
//     const req = new HttpRequest('PUT', 'https://ng-recipe-book-ff9a9.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
//       reportProgress : true
//     })
//     return this.httpClient.request(req);
//   }
//   getRecipes() {
//     //Return the Observable
//     // return this.httpClient.get<Recipe[]>('https://ng-recipe-book-ff9a9.firebaseio.com/recipes.json', {
//     //   observe: 'body',
//     //   responseType: 'json'
//     // })
//     //   .map(
//     //     (recipes) => {
//     //       // It directly returns/extracts the body, in earlier version i.e Angular < 4.2, we need to extract it manually like 'response.json()'
//     //       for (let recipe of recipes) {
//     //         if (!recipe['ingredients']) {
//     //           console.log(recipe)
//     //           recipe['ingredients'] = [];
//     //         }
//     //       }
//     //       return recipes;
//     //     }
//     //   ).subscribe(
//     //     (recipes: Recipe[]) => {
//     //       this.receipeService.setRecipes(recipes)
//     //     }
//     //   )
//   }

// }
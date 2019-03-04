import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from "./core/home/home.component";


const appRoutes: Routes = [
  { path: '', component : HomeComponent },
  { path: 'recipes', loadChildren : './recipes/recipes.module#RecipeModule' },//Lazy loaded
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  //Preload All the modules after the app is loaded initally to not have a delay when visit to lazy loaded route
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy : PreloadAllModules})],
  exports : [RouterModule]
})
export class AppRoutingModule {

} 
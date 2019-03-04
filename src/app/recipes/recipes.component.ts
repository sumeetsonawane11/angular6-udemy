import { Component, OnInit } from '@angular/core';
import { Recipe } from "src/app/recipes/recipes.model";


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  //providers : []
})
export class RecipesComponent implements OnInit {
  //currentItem : Recipe
  //constructor(private recipeService : RecipeService) { }
  constructor() { }


  ngOnInit() {
      // this.recipeService.recipeItemEvent.subscribe((recipe : Recipe) => {
      //     this.currentItem = recipe;
      // })
  }
}

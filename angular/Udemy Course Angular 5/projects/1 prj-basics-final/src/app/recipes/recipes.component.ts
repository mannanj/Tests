import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  recipeSelected: Recipe;
  constructor(private recipeService: RecipeService) { }
  ngOnInit() {
    // get saved recipes, load first one and subscribe to selection changes
    this.recipes = this.recipeService.recipes;
    this.recipeSelected = this.recipes[0];
    this.recipeService.selectRecipe
      .subscribe(
        (recipe: Recipe) => {
          this.recipeSelected = recipe;
        }
      );
  }

}

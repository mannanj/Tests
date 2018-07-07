import {Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingService} from '../../shared/shopping.service';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private shoppingService: ShoppingService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.id = +params['id'];
      } else {
        this.id = 0;
      }
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }
  addToShopping(ingredients: Ingredient[]) {
    let i = 0;
    for (i = 0; i < ingredients.length; i++) {
      this.shoppingService.addIngredient(ingredients[i]);
    }
    alert('Added ingredients to cart!');
  }
}

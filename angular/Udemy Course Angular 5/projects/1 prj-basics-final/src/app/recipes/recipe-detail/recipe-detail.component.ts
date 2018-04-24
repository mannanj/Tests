import {Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingService} from '../../shared/shopping.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {}
  addToShopping(ingredients: Ingredient[]) {
    let i = 0;
    for (i = 0; i < ingredients.length; i++) {
      this.shoppingService.addIngredient(ingredients[i]);
    }
    alert('Added ingredients to cart!');
  }
}

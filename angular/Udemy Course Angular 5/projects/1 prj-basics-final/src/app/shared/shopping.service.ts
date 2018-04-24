import {Ingredient} from './ingredient.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingService {
  private ingredients: Ingredient[] = [
    new Ingredient('Chicken', 6, 'oz'),
    new Ingredient('Steak', 6, 'oz'),
    new Ingredient('Olive Oil', 1, 'g'),
    new Ingredient('Thyme', 1, 'g'),
  ];
  getIngredients() {
    return this.ingredients;
  }
  addIngredient(ingredient: Ingredient) {
    // TODO: consolidate duplicates: find ingredient, convert units
    this.ingredients.push(ingredient);
  }
}

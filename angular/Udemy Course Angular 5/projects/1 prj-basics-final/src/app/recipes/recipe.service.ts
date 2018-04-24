import { Injectable, EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  selectRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Steak',
      'Sous vide to juicy perfection with twigs of thyme, salt, and pepper.',
      'assets/Steak.jpg',
      10,
      [
        new Ingredient('Ribeye steak', 6, 'oz'),
        new Ingredient('Thyme', 1, 'g'),
        new Ingredient('Grapeseed oil', 2, 'tbsp'),
      ]
    ),
    new Recipe(
      'Chicken',
      'Sous vide to juicy perfection with twigs of thyme, salt, and pepper.',
      'assets/Chick-Thigh.jpg',
      5.99,
      [
        new Ingredient('Chicken thigh', 6, 'oz'),
        new Ingredient('Thyme', 1, 'g'),
        new Ingredient('Olive oil', 1, 'tbsp'),
      ]
    ),
  ];
}

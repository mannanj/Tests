import {Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingService} from '../../shared/shopping.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  // id: number;

  constructor(
    private shoppingService: ShoppingService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // // const id = this.route.snapshot.params.id; // one time use only
    // this.route.params.subscribe((params: Params) => {
    //   this.id = +params['id'];
    // });
  }
  addToShopping(ingredients: Ingredient[]) {
    let i = 0;
    for (i = 0; i < ingredients.length; i++) {
      this.shoppingService.addIngredient(ingredients[i]);
    }
    alert('Added ingredients to cart!');
  }
}

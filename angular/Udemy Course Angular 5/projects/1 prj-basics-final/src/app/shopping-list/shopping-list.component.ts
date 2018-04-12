import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Chicken', 6, 'oz'),
    new Ingredient('Steak', 6, 'oz'),
    new Ingredient('Olive Oil', 1, 'g'),
    new Ingredient('Thyme', 1, 'g'),
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Steak', 'Sous vide to juicy perfection with twigs of thyme, salt, and pepper.', 'assets/Steak.jpg', 10),
    new Recipe('Chicken', 'Sous vide to juicy perfection with twigs of thyme, salt, and pepper.', 'assets/Chick-Thigh.jpg', 5.99)
  ];

  constructor() { }

  ngOnInit() {
  }

}

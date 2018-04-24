import {Component, EventEmitter, OnInit, Output, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingService} from '../../shared/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }
  addIngredient(name: string, amount: number, units: string) {
    const ingredient = new Ingredient(name, amount, units);
    this.shoppingService.addIngredient(ingredient);
  }
  delIngredient() {
    console.log('skeleton: deleted ingredient');
  }
  resetIngredientForm() {
    console.log('skeleton: cleared form');
  }


}

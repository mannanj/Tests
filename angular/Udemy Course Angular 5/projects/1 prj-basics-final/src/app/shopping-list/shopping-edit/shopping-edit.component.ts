import { MaterialModule } from './../../modules/material.module';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../../shared/shopping.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  newIngredientForm: FormGroup;
  units = [
    { value: 'grams', symbol: 'g' },
    { value: 'ounces', symbol: 'oz' },
    { value: 'pounds', symbol: 'lbs' },
    { value: 'teaspoons', symbol: 'tsp' },
    { value: 'tablespoons', symbol: 'tbsp' }
  ];
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.newIngredientForm = new FormGroup({
      'name': new FormControl(''),
      'amount': new FormControl(''),
      'units': new FormControl('g'),
    });
  }
  addIngredient() {
    console.log(this.newIngredientForm.value);
    const ingredient = new Ingredient(this.newIngredientForm.value.name,
      this.newIngredientForm.value.amount,
      this.newIngredientForm.value.units);
    this.shoppingService.addIngredient(ingredient);
  }
  delIngredient() {
    console.log('skeleton: deleted ingredient');
  }
  resetIngredientForm() {
    console.log('skeleton: cleared form');
  }


}

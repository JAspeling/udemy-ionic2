import { Ingredient } from './../../classes/Ingredient';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../../services/shopping-list.service';

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: './shopping-list.html'
})
export class ShoppingListPage {
  amount: number = 0;
  ingredient: string = '';
  ingredients: Ingredient[] = [];

  constructor(public shoppingListService: ShoppingListService) {}

  ionViewWillEnter() {
    this.loadItems();
  }

  onAddItem(form: NgForm): void {
    this.shoppingListService.addIngredient(
      new Ingredient({ name: form.value.name, amount: form.value.amount })
    );

    form.reset();
    this.loadItems();
  }

  loadItems(): void {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  removeIngredient(ingredient: Ingredient): void {
    this.shoppingListService.removeIngredient(ingredient);
    this.loadItems();
  }
}

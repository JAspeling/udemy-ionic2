import { Ingredient } from '../classes/Ingredient';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [];

  addIngredient(ingredient: Ingredient): void {
    const foundIngredient = this.ingredients.find(i => i.name == ingredient.name);
    if (foundIngredient) {
      foundIngredient.amount = +foundIngredient.amount + +ingredient.amount;
    } else {
      this.ingredients.push(ingredient);
    }
  }

  addIngredients(ingredients: Ingredient[]): void {
    ingredients.forEach(ingredient => {
      const foundIngredient = this.ingredients.find(i => i.name == ingredient.name);
      if (foundIngredient) {
        foundIngredient.amount = +foundIngredient.amount + +ingredient.amount;
      } else {
        this.ingredients.push(ingredient);
      }
    });
  }

  removeIngredient(ingredient: Ingredient): void {
    const pos = this.ingredients.findIndex(i => i.name == ingredient.name);
    if (pos >= 0)
      this.ingredients.splice(pos, 1);
  }

  getIngredients() : Ingredient[] {
    return this.ingredients.slice();
  }
}

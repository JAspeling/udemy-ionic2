import { Injectable } from '@angular/core';

import { Recipe } from '../classes/recipe';
import { Ingredient } from './../classes/Ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [];

  addRecipe(
    title: string,
    description: string,
    difficulty: string,
    ingredients: Ingredient[]
  ): void {
    this.recipes.push(
      new Recipe({
        title: title,
        description: description,
        difficulty: difficulty,
        ingredients: ingredients.slice()
      })
    );

    console.log(this.recipes);
  }

  getRecipies(): Recipe[] {
    return this.recipes.slice();
  }

  updateRecipe(
    index: number,
    title: string,
    description: string,
    difficulty: string,
    ingredients: Ingredient[]
  ) {
    this.recipes[index] = new Recipe({
      title: title,
      description: description,
      difficulty: difficulty,
      ingredients: ingredients.slice()
    });
  }

  removeRecipe(index: number): void {
    this.recipes.splice(index, 1);
  }
}

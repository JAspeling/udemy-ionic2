import { Recipe } from './../../classes/recipe';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { RecipeService } from '../../services/recipe.service';
import { EditRecipePage } from './edit-recipe/edit-recipe';
import { RecipePage } from './recipe/recipe';

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: './recipes.html'
})
export class RecipesPage {
  recipes: Recipe[] = [];

  constructor(
    private navController: NavController,
    private recipeService: RecipeService
  ) {}

  ionViewWillEnter(): void {
    this.initializeRecipes();
  }

  initializeRecipes(): any {
    this.recipes = this.recipeService.getRecipies();
  }

  onNewRecipe(): void {
    this.navController.push(EditRecipePage, { mode: 'New' });
  }

  onLoadRecipe(recipe: Recipe, index: number): void {
    this.navController.push(RecipePage, { recipe: recipe, index: index });
  }
}

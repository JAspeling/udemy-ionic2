import { ShoppingListPage } from './../../shopping-list/shopping-list';
import { RecipeService } from './../../../services/recipe.service';
import { EditRecipePage } from './../edit-recipe/edit-recipe';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Recipe } from '../../../classes/recipe';
import { ShoppingListService } from '../../../services/shopping-list.service';

@IonicPage()
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html'
})
export class RecipePage implements OnInit {
  recipe: Recipe = new Recipe();
  index: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.recipe = this.navParams.get('recipe');
    this.index = this.navParams.get('index');
  }

  ionViewDidLoad(): void {
    console.log('ionViewDidLoad NewRecipePage');
  }

  onAddIngredient(): void {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
    this.navCtrl.popTo(ShoppingListPage);
  }

  onEditRecipe(): void {
    this.navCtrl.push(EditRecipePage, {
      mode: 'Edit',
      recipe: this.recipe,
      index: this.index
    });
  }

  onRemoveRecipe(): void {
    this.recipeService.removeRecipe(this.index);
    this.navCtrl.popToRoot();
  }
}

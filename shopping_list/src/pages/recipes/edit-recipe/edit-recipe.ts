import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Alert, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular/components/action-sheet/action-sheet-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

import { Recipe } from './../../../classes/recipe';
import { RecipeService } from './../../../services/recipe.service';

/**
 * Generated class for the EditRecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html'
})
export class EditRecipePage implements OnInit {
  mode: string = 'New';
  selectOptions: string[] = ['Easy', 'Medium', 'Hard'];
  recipeForm: FormGroup;
  recipe: Recipe;
  index: number;

  ngOnInit(): void {
    this.mode = this.navParams.get('mode');
    if (this.mode == 'Edit') {
      this.recipe = this.navParams.get('recipe');
      this.index = this.navParams.get('index');
    }
    this.initializeForm();
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    public toastController: ToastController,
    public recipeService: RecipeService
  ) {}

  private initializeForm(): void {
    let title = undefined;
    let description = undefined;
    let difficulty = 'Medium';
    let ingredients = [];

    if (this.mode == 'Edit') {
      title = this.recipe.title;
      description = this.recipe.description;
      difficulty = this.recipe.difficulty;
      this.recipe.ingredients.forEach(ingredient => {
        ingredients.push(new FormControl(ingredient.name, Validators.required));
      });
      // ingredients = this.recipe.ingredients.map(ingredient => {

      // });
    }

    this.recipeForm = new FormGroup({
      title: new FormControl(title, Validators.required),
      description: new FormControl(description, Validators.required),
      difficulty: new FormControl(difficulty, Validators.required),
      ingredients: new FormArray(ingredients)
    });
  }

  onManageIngredients(): void {
    const actionSheet = this.actionSheetController.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Add Ingredient',
          handler: () => {
            this.createNewIngredientAlert().present();
          }
        },
        {
          text: 'Remove all Ingredients',
          role: 'destructive', // Make the button red.
          handler: () => {
            const fArray: FormArray = <FormArray>this.recipeForm.get(
              'ingredients'
            );
            fArray.controls = [];
            const toast = this.toastController.create({
              message: 'All ingredients deleted',
              duration: 1500,
              position: 'bottom'
            });
            toast.present();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {}
        }
      ]
    });
    actionSheet.present();
  }

  private createNewIngredientAlert(): Alert {
    const newIngredientAlert = this.alertController.create({
      title: 'Add Ingredient',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            if (data.name == undefined || data.name.trim() == '') {
              const toast = this.toastController.create({
                message: 'Please enter a valid value',
                duration: 1500,
                position: 'bottom'
              });
              toast.present();
              return;
            }
            (<FormArray>this.recipeForm.get('ingredients')).push(
              new FormControl(data.name, Validators.required)
            );
            const toast = this.toastController.create({
              message: 'Item added',
              duration: 1500,
              position: 'bottom'
            });
            toast.present();
          }
        }
      ]
    });

    return newIngredientAlert;
  }

  onSubmit(): void {
    const value = this.recipeForm.value;
    let ingredients = [];
    // map the values
    if (value.ingredients && value.ingredients.length > 0) {
      ingredients = value.ingredients.map(name => {
        return {
          name: name,
          amount: 1
        };
      });
    }

    switch (this.mode) {
      case 'New':
        this.recipeService.addRecipe(
          value.title,
          value.description,
          value.difficulty,
          ingredients
        );
        break;
      case 'Edit':
        this.recipeService.updateRecipe(
          this.index,
          value.title,
          value.description,
          value.difficulty,
          ingredients
        );
        break;
    }
    this.recipeForm.reset();
    this.navCtrl.popToRoot();
  }
}

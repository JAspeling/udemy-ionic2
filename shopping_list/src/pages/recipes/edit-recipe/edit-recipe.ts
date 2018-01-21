import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActionSheetController } from 'ionic-angular/components/action-sheet/action-sheet-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

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
export class EditRecipePage {
  mode: string = 'New';
  selectOptions: string[] = ['Easy', 'Medium', 'Hard'];
  recipeForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController
  ) {
    this.initializeForm();
  }

  ionViewDidLoad() {
    this.mode = this.navParams.data.mode;
  }

  private initializeForm(): void {
    this.recipeForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      difficulty: new FormControl('Medium', Validators.required),
      ingredients: new FormArray([])
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
          handler: () => {}
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
          handler: (data) => {
            if (data.name == undefined || data.name.trim() == '') {
              return;
            }
            (<FormArray>this.recipeForm.get('ingredients')).push(new FormControl(data.name, Validators.required))
          }
        }
      ]
    });

    return newIngredientAlert;
  }

  onSubmit(): void {
    console.log(this.recipeForm);
  }
}
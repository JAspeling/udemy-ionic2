import { RecipesPage } from './recipes';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
@NgModule({
  declarations: [
    RecipesPage
  ],
  imports: [
    IonicPageModule.forChild(RecipesPage)
  ],
  entryComponents: [
    RecipesPage
  ]
})
export class RecipesPageModule {}
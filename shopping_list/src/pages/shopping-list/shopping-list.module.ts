import { IonicPageModule } from 'ionic-angular';
import { ShoppingListPage } from './shopping-list';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    ShoppingListPage
  ],
  imports: [
    IonicPageModule.forChild(ShoppingListPage)
  ],
  entryComponents: [
    ShoppingListPage
  ]
})
export class ShoppingListPageModule {}
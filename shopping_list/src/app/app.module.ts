import { RecipeService } from './../services/recipe.service';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { ShoppingListPageModule } from '../pages/shopping-list/shopping-list.module';
import { RecipesPageModule } from './../pages/recipes/recipes.module';
import { TabsPageModule } from './../pages/tabs/tabs.module';
import { MyApp } from './app.component';
import { RecipePageModule } from '../pages/recipes/recipe/recipe.module';
import { EditRecipePageModule } from '../pages/recipes/edit-recipe/edit-recipe.module';
import { ShoppingListService } from '../services/shopping-list.service';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TabsPageModule,
    RecipesPageModule,
    RecipePageModule,
    ShoppingListPageModule,
    EditRecipePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ShoppingListService,
    RecipeService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

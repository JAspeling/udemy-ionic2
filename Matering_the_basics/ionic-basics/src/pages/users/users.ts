import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { UserPage } from './user/user';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  constructor(private navCtrl: NavController) {}

  onLoadUser(name: string): void {
    this.navCtrl.push(UserPage, { userName: name });
  }

  // ion-life cycle hooks are only executed on pages loaded via the navController
  ionViewCanEnter(): boolean | Promise<boolean> {
    console.log('ionViewCanEnter');
    
    const rnd = Math.random();
    return rnd > 0.5;
  }

  // Loads initially if the page is not cached by Ionic (Exists in the stack of pages)
  ionViewDidLoad(): void {
    console.log('ionViewDidLoad');
  }

  ionViewWillEnter(): void {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.log('ionViewDidEnter')
  }

  ionViewCanLeave(): boolean | Promise<void> {
    console.log('ionViewcCanLeave 1');
    const promise = new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        console.log('ionViewcCanLeave 2');
        
        resolve();
      }, 1000);
    });

    return promise;
  }

  // Unloads the page if the page is removed from the stack of pages.  
  ionViewWillUnload(): void {
    console.log('ionViewWillUnload');
  }
}

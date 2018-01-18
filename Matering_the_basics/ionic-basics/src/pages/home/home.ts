import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onGoToUsers() : void {
    let err = (e) => {
      console.log('Access Denied, argument was ' + e);
    }
    this.navCtrl.push(UsersPage).then((result) => {
      if (result) {
        console.log('Can enter');
      } else {
        err(result);
      }
    })
    // push request was rejected
    .catch((error) => {
      console.log('from Catch');
      err(error);
    });
  }
  
}

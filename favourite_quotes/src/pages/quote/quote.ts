import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person: string;
  text: string;
  
  // ViewController controls the currnelty visible/active page 
  constructor(private viewController : ViewController, private navParams : NavParams) {

  }

  onClose(remove = false): void {
    // Can be used instead of pop
    this.viewController.dismiss(remove);
  }

  ionViewDidLoad(): void {
    this.person = this.navParams.data.person;
    this.text = this.navParams.data.text;
  }
}

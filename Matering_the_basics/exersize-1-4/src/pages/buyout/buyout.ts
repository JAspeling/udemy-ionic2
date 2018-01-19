import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';
@Component({
  selector: 'buyout-page',
  templateUrl: './buyout.html'
})
export class BuyoutPage implements OnInit{
  products: string[] = [];
  
  constructor(private navCtrl : NavController, private navParams: NavParams) {
    
  }

  onGoToHome(): void {
    this.navCtrl.popToRoot();
  }

  public ngOnInit(): void {
    this.products.push(this.navParams.data.product)
  }
}
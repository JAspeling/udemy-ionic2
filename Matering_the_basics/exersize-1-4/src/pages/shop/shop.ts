import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { BuyoutPage } from '../buyout/buyout';

@Component({
  selector: 'shop-page',
  templateUrl: './shop.html'
})
export class ShopPage {
  constructor(public navCtrl: NavController) {
    
  }

  onGoToBuyout() : void {
    this.navCtrl.push(BuyoutPage);
  }

  onAddProduct(product: string) : void {
    this.navCtrl.push(BuyoutPage, { product: product })
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { IQuote } from '../../data/quote.interface';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { QuotesService } from '../../services/quotes.service';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage {
  quoteGroup: { category: string; quotes: IQuote[]; icon: string };

  constructor(
    public navParams: NavParams,
    private alertController: AlertController,
    private quotesService: QuotesService
  ) {
    this.quoteGroup = navParams.data;
  }

  onAddToFavourites(quote: IQuote): void {
    const alert = this.alertController.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to favourite the Quote?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.quotesService.addQuoteToFavourites(quote);
          }
        },
        {
          role: 'cancel',
          text: 'No',
          handler: () => {
          }
        }
      ]
    });

    alert.present();
  }

  onRemoveFromFavourites(quote): void {
    this.quotesService.removeQuoteFromFavourites(quote);
  }

  isFavourite(quote: IQuote) : boolean {
    return this.quotesService.isQuoteFavourite(quote);
  }
}

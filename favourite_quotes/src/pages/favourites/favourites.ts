import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { QuotesService } from '../../services/quotes.service';
import { IQuote } from '../../data/quote.interface';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { QuotePage } from '../quote/quote';

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
  quotes: IQuote[] = [];

  constructor(private modalController: ModalController, private quotesService: QuotesService) {
    
  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavouriteQuotes();
  }

  onViewQuote(quote: IQuote): void {
    const modal = this.modalController.create(QuotePage, quote);

    modal.present();
    modal.onDidDismiss((remove: boolean, role) => {
      if (remove) {
        this.quotesService.removeQuoteFromFavourites(quote); 
        const foundPosition = this.quotes.findIndex(q => q.id == quote.id);
        this.quotes.splice(foundPosition, 1);
      }
    });
  }
}

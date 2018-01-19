import { Injectable } from '@angular/core';
import { IQuote } from '../data/quote.interface';

@Injectable()
export class QuotesService {
  private favouriteQuotes: IQuote[] = [];

  addQuoteToFavourites(quote: IQuote): void {
    this.favouriteQuotes.push(quote);
  }

  removeQuoteFromFavourites(quote: IQuote): void {
    const position = this.favouriteQuotes.findIndex((q: IQuote) => {
      return q.id == quote.id;
    });
    this.favouriteQuotes.splice(position, 1);
  }

  getFavouriteQuotes() : IQuote[] {
    return this.favouriteQuotes.slice();
  }

  isQuoteFavourite(quote: IQuote) : boolean {
    return this.favouriteQuotes.find(q => q == quote) != undefined;
  }
}

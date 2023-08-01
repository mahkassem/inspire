import { Component } from '@angular/core';
import { Quote } from 'src/app/models/quote.model';
import * as quotesData from 'src/assets/json/quotes.json'

@Component({
  selector: 'app-all-qoutes',
  templateUrl: './all-qoutes.component.html',
  styleUrls: ['./all-qoutes.component.scss']
})
export class AllQoutesComponent {
  quotes: Quote[];

  constructor() {
    // convert to array
    this.quotes = Object.values(quotesData);
  }

  deleteQuote(event: Quote) {
    this.quotes = this.quotes.filter(quote => quote.id !== event.id);
  }
}

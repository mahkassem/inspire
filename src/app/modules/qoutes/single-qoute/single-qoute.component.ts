import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quote } from 'src/app/models/quote.model';

@Component({
  selector: 'app-single-qoute',
  templateUrl: './single-qoute.component.html',
  styleUrls: ['./single-qoute.component.scss']
})
export class SingleQouteComponent {
  @Input({ required: true }) quote!: Quote;
  @Output() deleteQuoteEvent = new EventEmitter<Quote>();

  constructor() { }

  deleteQuote() {
    this.deleteQuoteEvent.emit(this.quote);
  }
}

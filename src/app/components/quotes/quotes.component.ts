import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  quotes = [
    { id: 1, quote: 'My 1st quote of the day', author: 'Joe' },
    { id: 2, quote: 'My 2nd quote of the day', author: 'Jack' },
    { id: 3, quote: 'My 3rd quote of the day', author: 'Jim' },
  ];

  removeQuote(id: number): void {
    console.log('removeQuote', id);
  }

  // title: string = 'Quotes-App';

  constructor() {}

  ngOnInit(): void {}
}

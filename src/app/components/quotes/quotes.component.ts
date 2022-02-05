import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  quotes = [
    { quote: 'My 1st quote of the day', author: 'Joe' },
    { quote: 'My 2nd quote of the day', author: 'Jack' },
    { quote: 'My 3rd quote of the day', author: 'Jim' },
  ];

  // title: string = 'Quotes-App';

  constructor() {}

  ngOnInit(): void {}
}

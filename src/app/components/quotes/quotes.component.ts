import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  quotes = [
    'My 1st quote of the day',
    'My 2nd quote of the day',
    'My 3rd quote of the day',
  ];

  constructor() {}

  ngOnInit(): void {}
}

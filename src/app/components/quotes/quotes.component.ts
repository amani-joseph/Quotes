import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  quotes = [
    {
      id: 1,
      upVotes: 0,
      downVotes: 0,
      quote: 'My 1st quote of the day',
      author: 'Joe',
    },
    {
      id: 2,
      upVotes: 0,
      downVotes: 0,
      quote: 'My 2nd quote of the day',
      author: 'Jack',
    },
    {
      id: 3,
      upVotes: 0,
      downVotes: 0,
      quote: 'My 3rd quote of the day',
      author: 'Jim',
    },
  ];
  upVote(upVotes: number): any {
    let newUpVotes = upVotes + 1;
    return newUpVotes;
    console.log(newUpVotes);
  }
  downVote(upVotes: number): void {
    upVotes -= 1;
  }

  removeQuote(id: number): void {
    this.quotes = this.quotes.filter((quote) => quote.id !== id);
  }

  // title: string = 'Quotes-App';

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  InputQuote: string = '';
  InputAuthor: string = '';
  upVotes: number = 0;
  downVotes: number = 0;
  quotes = [
    {
      id: 1,
      upVotes: 0,
      downVotes: 0,
      quote: 'The purpose of our lives is to be happy.',
      author: 'Joe',
    },
    {
      id: 2,
      upVotes: 0,
      downVotes: 0,
      quote: 'Life is what happens when you’re busy making other plans.',
      author: 'Jack',
    },
    {
      id: 3,
      upVotes: 0,
      downVotes: 0,
      quote: 'Get busy living or get busy dying',
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
  setNewQuote(Quote: string): void {
    this.InputQuote = Quote;
    console.log('setNewQuote', Quote);
  }

  // setNewAuthor() {}

  addQuote(): void {
    const uniqueId: number = Math.trunc(Math.random() * 1000);
    const newQuote = {
      id: uniqueId,
      upVotes: 0,
      downVotes: 0,
      quote: this.InputQuote,
      author: this.InputAuthor,
    };
    this.quotes.push(newQuote);
    console.log(uniqueId);
  }
  // title: string = 'Quotes-App';

  constructor() {}

  ngOnInit(): void {}
}

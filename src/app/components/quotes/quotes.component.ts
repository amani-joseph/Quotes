import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  InputQuote: string = '';
  InputAuthor: string = '';
  // timeCreated = Date.now();

  quotes = [
    {
      id: 1,
      Votes: 0,
      quote: 'The purpose of our lives is to be happy.',
      author: 'Joe',
    },

    {
      id: 2,
      Votes: 10,
      quote: 'The purpose of our lives is to be happy.',
      author: 'Joe',
    },
    // {
    //   id: 2,
    //   upVotes: 0,
    //   downVotes: 0,
    //   quote: 'Life is what happens when you’re busy making other plans.',
    //   author: 'Jack',
    // },
    {
      id: 3,
      upVotes: 0,
      downVotes: 0,
      quote: '3 wise words are two words too many',
      author: 'Amani',
    },
  ];

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
      Votes: 0,
      quote: this.InputQuote,
      author: this.InputAuthor,
    };
    this.quotes.push(newQuote);
    this.InputQuote = '';
    this.InputAuthor = '';

    console.log(uniqueId);
  }

  // title: string = 'Quotes-App';

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css'],
})
export class VotesComponent implements OnInit {
  Votes: number = 0;
  upVotes: number = 0;
  downVotes: number = 0;

  upVote() {
    console.log('upVote');
    this.Votes = this.Votes += 1;
    this.upVotes = this.upVotes += 1;
  }
  downVote() {
    console.log('downVote');
    this.Votes = this.Votes += 1;
    this.downVotes = this.downVotes += 1;
  }

  constructor() {}

  ngOnInit(): void {}
}

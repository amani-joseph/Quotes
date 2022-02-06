import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css'],
})
export class VotesComponent implements OnInit {
  Votes: number = 0;

  upVote() {
    console.log('upVote');
    this.Votes = this.Votes += 1;
  }
  downVote() {
    console.log('downVote');
    this.Votes = this.Votes -= 1;
  }

  constructor() {}

  ngOnInit(): void {}
}

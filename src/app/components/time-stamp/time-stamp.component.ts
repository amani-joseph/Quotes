import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-stamp',
  templateUrl: './time-stamp.component.html',
  styleUrls: ['./time-stamp.component.css'],
})
export class TimeStampComponent implements OnInit {
  timeCreated: string = Date.now().toString();

  constructor() {}

  ngOnInit(): void {}
}

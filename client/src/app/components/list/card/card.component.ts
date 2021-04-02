import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() card: any;

  // card: Object = {
  //   item: 'popcorn',
  //   amount: 1,
  //   status: 'buy',
  //   who: 'you',
  //   obs: 'obs'
  // }

  ngOnInit() {
  }

}

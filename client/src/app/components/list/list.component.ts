import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  cards = [
    {
      item: 'Item',
      amount: 'Amout',
      status: 'Status',
      who: 'Who',
      obs: 'Obs'
    },
    {
      item: 'popcorn',
      amount: 1,
      status: 'buy',
      who: 'you',
      obs: 'obs'
    }
  ]

  ngOnInit() {
  }

}

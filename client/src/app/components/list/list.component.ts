import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private sendcard: RequestService
  ) { 
    sendcard.card.subscribe((data,err)=>{
      if (err) console.log (err);
      data.amount=data.quantidade;
     this.cards.push(data)
    })
  }

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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  todo = ['Fix Car', 'Buy Milk', 'Call Sam', 'Find Keys for Villa', 'Make reservation for b-day'];

  suggestions = [
    {name: 'asd12',
  url: 'https://placeimg.com/150/150/any'},
  {name: 'asfdsdasdf ',
  url: 'https://placeimg.com/150/150/animals'},
  {name: 'tut jgnv',
  url: 'https://placeimg.com/150/150/arch'},
  {name: 'kio fx',
  url: 'https://placeimg.com/150/150/nature'},
  {name: 'ddfdfdh',
  url: 'https://placeimg.com/150/150/people'},
  {name: 'poi njekn m',
  url: 'https://placeimg.com/150/150/tech'},
  {name: 'asde, oio',
  url: 'https://placeimg.com/150/150/grayscale'},
  {name: 'jashdkjahdja ',
  url: 'https://placeimg.com/150/150/sepia'},
  {name: '154er ir',
  url: 'https://placeimg.com/150/150/animals'},
  {name: 'poip 45t',
  url: 'https://placeimg.com/150/150/arch'},
  {name: 'ader46 hjh',
  url: 'https://placeimg.com/150/150/nature'},
  {name: 'asasd 2',
  url: 'https://placeimg.com/150/150/people'},
  ];

  user = {
    firstname: 'Uncle',
    lastname: 'Charlie',
    email: 'lastname@forname.com',
    mobile: '+359878717171',
    suggestions: this.suggestions,
    todo: this.todo
  };

  constructor() { }

  ngOnInit() {
  }

}

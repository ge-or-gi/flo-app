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
  url: 'https://placeimg.com/100/100/any'},
  {name: 'asfdsdasdf ',
  url: 'https://placeimg.com/100/100/animals'},
  {name: 'tut jgnv',
  url: 'https://placeimg.com/100/100/arch'},
  {name: 'kio fx',
  url: 'https://placeimg.com/100/100/nature'},
  {name: 'ddfdfdh',
  url: 'https://placeimg.com/100/100/people'},
  {name: 'poi njekn m',
  url: 'https://placeimg.com/100/100/tech'},
  {name: 'asde, oio',
  url: 'https://placeimg.com/100/100/grayscale'},
  {name: 'jashdkjahdja ',
  url: 'https://placeimg.com/100/100/sepia'},
  {name: '154er ir',
  url: 'https://placeimg.com/100/100/animals'},
  {name: 'poip 45t',
  url: 'https://placeimg.com/100/100/arch'},
  {name: 'ader46 hjh',
  url: 'https://placeimg.com/100/100/nature'},
  {name: 'asasd 2',
  url: 'https://placeimg.com/100/100/people'},
  ];

  user = {
    firstname: 'Uncle',
    lastname: 'Charlie',
    email: 'lastname@forname.com',
    mobile: '+359878717171',
    passportnumber: '456789123',
    image: 'https://placeimg.com/100/100/people',
    suggestions: this.suggestions,
    todo: this.todo,
    transactions: [],
    usersettings: []
  };

  constructor() { }

  ngOnInit() {
  }

}

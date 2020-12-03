import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  transactions = [
    {currency: 'USD', ammount: '12345', date: '12-12-2020'},
    {currency: 'BGN', ammount: '785', date: '11-1-2020'},
    {currency: 'CAD', ammount: '658', date: '10-2-2020'},
    {currency: 'NZD', ammount: '159875', date: '9-3-2020'},
    {currency: 'USD', ammount: '25468', date: '8-4-2020'},
    {currency: 'EUR', ammount: '258', date: '7-5-2020'},
    {currency: 'EUR', ammount: '123654', date: '6-6-2020'},
    {currency: 'USD', ammount: '74125', date: '5-7-2020'},
    {currency: 'GBP', ammount: '2587', date: '4-8-2020'},
    {currency: 'GBP', ammount: '3652', date: '3-9-2020'},
    {currency: 'USD', ammount: '9854', date: '2-1-2020'},
  ];

  settings = {
    mail: true,
    desktop: true,
    sms: false
  };

  user = {
    firstname: 'Uncle',
    lastname: 'Charlie',
    email: 'lastname@forname.com',
    mobile: '+359878717171',
    passportnumber: '456789123',
    image: 'https://placeimg.com/150/150/people',
    // suggestions: this.suggestions,
    // todo: this.todo,
    transactions: this.transactions,
    usersettings: this.settings
  };

  constructor() { }

  ngOnInit() {
  }

}

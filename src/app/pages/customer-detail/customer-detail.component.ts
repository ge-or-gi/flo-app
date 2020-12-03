import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  todo = ['Fix Car', 'Buy Milk', 'Call Sam', 'Find Keys for Villa', 'Make reservation for b-day'];

  constructor() { }

  ngOnInit() {
  }

}

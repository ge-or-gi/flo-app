import { DataSource } from '@angular/cdk/table';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-history',
  templateUrl: './account-history.component.html',
  styleUrls: ['./account-history.component.scss']
})
export class AccountHistoryComponent implements OnInit {

  @Input() transactions: DataSource<any>;

  constructor() { }

  ngOnInit() {
  }

}

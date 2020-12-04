import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-feedback',
  templateUrl: './account-feedback.component.html',
  styleUrls: ['./account-feedback.component.scss']
})
export class AccountFeedbackComponent implements OnInit {

  @Input() email: string;

  constructor() { }

  ngOnInit() {
  }

}

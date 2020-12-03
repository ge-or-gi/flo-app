import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {

  @Input() suggestions: Suggestion[];

  constructor() { }

  ngOnInit() {
  }

}

export interface Suggestion{
  name: string;
  url: string;
}



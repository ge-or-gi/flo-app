import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


type size = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-flo-button',
  templateUrl: './flo-button.component.html',
  styleUrls: ['./flo-button.component.scss']
})
export class FloButtonComponent implements OnInit {

  @Output() clicked: EventEmitter<any> = new EventEmitter<any>();
  @Input() btnSize: size;
  @Input() disabled;

  constructor() { }

  ngOnInit() {
    this.btnSize = this.btnSize || 'medium';
  }

}

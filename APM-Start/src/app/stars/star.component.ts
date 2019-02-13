import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pm-star-component',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  starWidth: number;
  @Input() rating: number;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>(); //we want to pass a string.

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.starWidth = this.rating * 75 / 5;
  }

  onClick(){
    this.notify.emit(`The rating ${this.rating} was clicked`);
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit {

  @Input() demographics: any[];
  @Output() onRemove = new EventEmitter();

  // ageFilter: number;
  constructor() { }

  ngOnInit() {
  }

  // onKeyUp(event){
  //   this.ageFilter = event.target.valueAsNumber;
  // }

}

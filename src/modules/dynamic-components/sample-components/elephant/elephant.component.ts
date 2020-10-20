import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from '../../dynamic-component';

@Component({
  selector: 'app-elephant',
  templateUrl: './elephant.component.html',
  styleUrls: ['./elephant.component.sass']
})
export class ElephantComponent implements OnInit, DynamicComponent {

  constructor() { }
  data: any;

  ngOnInit(): void {
  }

}

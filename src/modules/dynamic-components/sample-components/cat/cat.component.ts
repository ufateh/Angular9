import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from '../../dynamic-component';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.sass']
})
export class CatComponent implements OnInit, DynamicComponent {

  constructor() { }
  data: any;

  ngOnInit(): void {
  }

}

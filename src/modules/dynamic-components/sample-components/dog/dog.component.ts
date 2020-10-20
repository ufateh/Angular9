import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from '../../dynamic-component';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.sass']
})
export class DogComponent implements OnInit, DynamicComponent {

  constructor() { }
  data: any;

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ComponentServiceService } from 'src/modules/dynamic-components/component-service.service';
import { DynamicComponentInfo } from 'src/modules/dynamic-components/dynamic-component-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'angular-lab';
  data: DynamicComponentInfo[];
  constructor(private componentService: ComponentServiceService){}
  ngOnInit(): void {
    this.data = this.componentService.getComponents();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentService } from 'src/modules/dynamic-components/component.service';
import { DynamicComponentInfo } from 'src/modules/dynamic-components/dynamic-component-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'angular-lab';
  data: DynamicComponentInfo[];
  constructor(private componentService: ComponentService, private router: Router){}
  ngOnInit(): void {
    this.data = this.componentService.getComponents();
  }

}

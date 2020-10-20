import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { AncorDirective } from '../ancor.directive';
import { DynamicComponent } from '../dynamic-component';
import { DynamicComponentInfo } from '../dynamic-component-info';
import { ComponentServiceService } from '../component-service.service';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.sass']
})
export class PlaceholderComponent implements OnInit {

  // view child to pick up a directive selector having viewContainerRef property, and use it to inject new content
  @ViewChild(AncorDirective, { static: true }) appAncor: AncorDirective;

  // List of components along with config
  @Input() components: DynamicComponentInfo[];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  selectView(index: number) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.components[index].component);
    this.appAncor.viewContainerRef.clear();
    // all components passed here should inherit a common interface in case their data is used in parent.
    // This DynamicComponent can be removed
    this.appAncor.viewContainerRef.createComponent<DynamicComponent>(componentFactory);
  }

}

import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAncor]'
})
export class AncorDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}

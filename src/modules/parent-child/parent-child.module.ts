import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [ParentComponent, ChildComponent],
  exports: [ParentComponent],
  imports: [
    CommonModule
  ]
})
export class ParentChildModule { }

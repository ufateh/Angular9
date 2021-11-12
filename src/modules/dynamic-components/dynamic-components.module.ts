import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AncorDirective } from './ancor.directive';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { ComponentService } from './component.service';



@NgModule({
  declarations: [AncorDirective, PlaceholderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PlaceholderComponent
  ],
  providers: [ComponentService],
})
export class DynamicComponentsModule { }

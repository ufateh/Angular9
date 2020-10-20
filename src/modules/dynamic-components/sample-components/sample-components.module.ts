import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogComponent } from './dog/dog.component';
import { CatComponent } from './cat/cat.component';
import { ElephantComponent } from './elephant/elephant.component';



@NgModule({
  declarations: [DogComponent, CatComponent, ElephantComponent],
  imports: [
    CommonModule
  ],
  exports:[]
})
export class SampleComponentsModule { }

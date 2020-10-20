import { Injectable } from '@angular/core';
import { DynamicComponentConfig } from './dynamic-component-config';
import { DynamicComponentInfo } from './dynamic-component-info';
import { CatComponent } from './sample-components/cat/cat.component';
import { DogComponent } from './sample-components/dog/dog.component';
import { ElephantComponent } from './sample-components/elephant/elephant.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentServiceService {

  constructor() { }

  getComponents(){
    return [
      new DynamicComponentInfo(CatComponent,new DynamicComponentConfig('Cat')),
      new DynamicComponentInfo(DogComponent,new DynamicComponentConfig('Dog')),
      new DynamicComponentInfo(ElephantComponent,new DynamicComponentConfig('Elephant'))
    ];
  }
}

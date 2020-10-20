import { Component, Type } from '@angular/core';
import { DynamicComponentConfig } from './dynamic-component-config';

export class DynamicComponentInfo {
    constructor(public component: Type<any>,public config: DynamicComponentConfig){}
}

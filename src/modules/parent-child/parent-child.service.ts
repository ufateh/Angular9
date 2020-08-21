import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParentChildService {

  constructor() { }

  get Data() {
    return [
      {
        name: 'fateh',
        age: 27
      },
      {
        name: 'rao',
        age: 28
      },
      {
        name: 'sanjay',
        age: 26
      },
      {
        name: 'sufi',
        age: 27
      },
      {
        name: 'umer sufyan',
        age: 30
      },
      {
        name: 'zain',
        age: 25
      },
      {
        name: 'haseeb',
        age: 35
      }
    ];
  }
}

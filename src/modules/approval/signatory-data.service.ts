import { Injectable } from '@angular/core';
import { Signatory, ApprovalStatus } from './models';
import * as chance from 'chance';

@Injectable()
export class SignatoryDataService {

  constructor() { }

  getSignatoryLists(size: number) :Array<Signatory>{
    let generator = new chance();
    let sigList = new Array<Signatory>();
    for (let index = 0; index < size; index++) {
      let sig: Signatory = {
        id: generator.word(),
        email: generator.email({domain: "halliburton.com"}),
        name: generator.name(),
        comment: generator.sentence({ words: 5 }),
        commentDate: generator.date(),
        status: generator.integer({ min: 0, max: 2 })
      }
      sigList.push(sig);
    }

    return sigList;
  }

}

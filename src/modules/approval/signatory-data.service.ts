import { Injectable } from '@angular/core';
import { Signatory, ApprovalStatus } from './models';

@Injectable()
export class SignatoryDataService {

  constructor() { }

  getSignatoryLists(size: number) :Array<Signatory>{
    let sigList = new Array<Signatory>();
    for (let index = 0; index < size; index++) {
      let sig: Signatory = {
        id: (index%2)==0? 'ali': 'fateh',
        email: 'ufateh@outlook.com',
        name: 'fateh ullah',
        comment: 'asfasfasfdsafdsafasdf',
        commentDate: null,
        status: ApprovalStatus.Pending
      }
      sigList.push(sig);
    }

    return sigList;
  }

}

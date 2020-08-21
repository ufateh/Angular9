import { Component, OnInit } from '@angular/core';
import { SignatoryDataService } from '../signatory-data.service';
import { Signatory } from '../models';

@Component({
  selector: 'app-signatory-list',
  templateUrl: './signatory-list.component.html',
  styleUrls: ['./signatory-list.component.sass'],
  providers : [SignatoryDataService]
})
export class SignatoryListComponent implements OnInit {

  signatoryList: Array<Signatory>;

  constructor(private sigService: SignatoryDataService) {
  }

  ngOnInit() {
    this.signatoryList = this.sigService.getSignatoryLists(50);
  }

}

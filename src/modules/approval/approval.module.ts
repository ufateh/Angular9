import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignatoryComponent } from './signatory/signatory.component';
import { SignatoryListComponent } from './signatory-list/signatory-list.component';
import { SignatoryDataService } from './signatory-data.service';

@NgModule({
  declarations: [
    SignatoryComponent,
    SignatoryListComponent
  ],
  exports: [
    SignatoryListComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  providers: [
    SignatoryDataService
  ]
})
export class ApprovalModule { }

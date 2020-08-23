import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignatoryComponent } from './signatory/signatory.component';
import { SignatoryListComponent } from './signatory-list/signatory-list.component';
import { SignatoryDataService } from './signatory-data.service';
import {FontAwesomeModule,FaIconLibrary} from '@fortawesome/angular-fontawesome';

import { faCircle } from '@fortawesome/free-solid-svg-icons';

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
export class ApprovalModule { 
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faCircle);
  }
}

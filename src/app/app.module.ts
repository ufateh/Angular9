import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ParentChildModule} from '../modules/parent-child/parent-child.module';
import {ApprovalModule} from '../modules/approval/approval.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParentChildModule,
    ApprovalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

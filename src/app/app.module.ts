import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ParentChildModule } from '../modules/parent-child/parent-child.module';
//import { ApprovalModule } from '../modules/approval/approval.module';
import { DynamicComponentsModule } from '../modules/dynamic-components/dynamic-components.module';
import { ComponentService } from 'src/modules/dynamic-components/component.service';
//import { PaymentModule } from 'src/modules/payment/payment.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SampleComponentsModule } from '../modules/dynamic-components/sample-components/sample-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //ParentChildModule,
    //ApprovalModule,
    DynamicComponentsModule,
    SampleComponentsModule,
    HttpClientModule,
    ReactiveFormsModule,
    //PaymentModule
  ],
  providers: [ComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

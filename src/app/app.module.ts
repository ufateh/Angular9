import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ParentChildModule } from '../modules/parent-child/parent-child.module';
import { ApprovalModule } from '../modules/approval/approval.module';
import { DynamicComponentsModule } from '../modules/dynamic-components/dynamic-components.module';
import { ComponentServiceService } from 'src/modules/dynamic-components/component-service.service';
import { PaymentModule } from 'src/modules/payment/payment.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { SampleComponentsModule } from '../modules/dynamic-components/sample-components/sample-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //ParentChildModule,
    ApprovalModule,
    DynamicComponentsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PaymentModule
  ],
  providers: [ComponentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

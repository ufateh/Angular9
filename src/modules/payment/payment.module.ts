import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentService } from './payment.service';
import { PaymentComponent } from './payment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DefaultComponent } from './default/default/default.component';



@NgModule({
  declarations: [PaymentComponent, DefaultComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [PaymentService]
})
export class PaymentModule { }

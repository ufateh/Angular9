import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentService } from './payment.service';
import { PaymentComponent } from './payment.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [PaymentService]
})
export class PaymentModule { }

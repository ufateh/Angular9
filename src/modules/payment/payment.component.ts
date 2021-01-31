import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PastDateValidator } from './past-date-validator.directive';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass'],
  providers : [PaymentService]
})
export class PaymentComponent implements OnInit {

  paymentForm: FormGroup = this._initPaymentFormGroup();
  result : any;

  constructor(private fb: FormBuilder,private paymentService : PaymentService) {
  }

  ngOnInit(): void {
  }

  _initPaymentFormGroup() {
    
    return this.fb.group({

      creditCardNumber: ['1234123412341234',
      [Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16)
      ]],
      cardHolder: ['',
      Validators.required
      ],
      expirtionDate: [,
      [Validators.required,
      //custom validator
      PastDateValidator()
      ]],
      securityCode: [,
      [Validators.minLength(3),
      Validators.maxLength(3)
      ]],
      amount: [,
      [Validators.required,
      Validators.min(1)
      ]]
    });
  }

  onSubmit() {
    console.warn(this.paymentForm.value);
    this.paymentService.doPayment(this.paymentForm.value).subscribe(res => {
      this.result = "Service call succeeded: " + JSON.stringify(res);
    }, err => {
      this.result = "Error during service call: " + JSON.stringify(err);
    });
  }

}

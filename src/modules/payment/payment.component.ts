import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PastDateValidator } from './past-date-validator.directive';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent implements OnInit {

  paymentForm: FormGroup = this._initPaymentFormGroup();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  _initPaymentFormGroup() {
    
    return this.fb.group({

      creditCardNumber: ['',
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
      securityCode: [null,
      [Validators.minLength(3),
      Validators.maxLength(3)
      ]],
      amount: [0,
      [Validators.required,
      Validators.min(1)
      ]]
    });
  }

  onSubmit() {
    console.warn(this.paymentForm.value);
  }

}

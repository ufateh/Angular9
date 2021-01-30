import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private paymentUrl: '/api/makePayment';
  
  constructor(private http: HttpClient) { }

  doPayment(dto: Payment) {
    this.http.post(this.paymentUrl, dto).subscribe(res => {
      return res;
    }, err => {
      return err;
    })
  }
}

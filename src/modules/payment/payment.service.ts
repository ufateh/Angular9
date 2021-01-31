import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from './payment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private paymentUrl: string = '/api/makePayment';

  constructor(private http: HttpClient) { }

  doPayment(dto: Payment) : Observable<any> {
    return this.http.post(this.paymentUrl, dto);
  }
}

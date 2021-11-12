import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DefaultComponent } from 'src/modules/payment/default/default/default.component';
// import { PaymentComponent } from 'src/modules/payment/payment.component';
//import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', component: DefaultComponent },
  // { path: 'payment', component: PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

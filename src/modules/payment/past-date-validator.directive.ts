/**
 * will do validation on the credit card expiry date. will reject if the date is in past
 */

import { AbstractControl, ValidatorFn } from "@angular/forms";
import * as moment from "moment";

export function PastDateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {

    if(control.value){
      const date = moment(control.value);
      const today = moment();
      if(date.isBefore(today)){
        return {invalid :true};
      }
    }
    return null;
  }
}
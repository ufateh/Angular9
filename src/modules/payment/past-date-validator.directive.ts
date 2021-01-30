/**
 * will do validation on the credit card expiry date. will reject if the date is in past
 */

import { AbstractControl, ValidatorFn } from "@angular/forms";

export function PastDateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    
    const valid = control.value.getTime() > new Date().getTime();
    
    return valid ? { invalid: { value: control.value } } : null;
  }
}
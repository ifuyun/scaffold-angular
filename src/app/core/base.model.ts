import { FormGroup } from '@angular/forms';
import { BaseBizComponent } from './base-biz.component';

export abstract class BaseModel extends BaseBizComponent {
  validateForm(form: FormGroup) {
    Object.keys(form.controls).forEach((key) => {
      form.controls[key].markAsDirty();
      form.controls[key].updateValueAndValidity();
    });
    return {
      value: form.value,
      rawValue: form.getRawValue(),
      valid: form.valid
    };
  }

  resetForm(form: FormGroup, reset: boolean = true) {
    if (reset) {
      // reset form, include values
      form.reset();
    } else {
      Object.keys(form.controls).forEach((key) => {
        form.controls[key].markAsPristine();
        form.controls[key].markAsUntouched();
        form.controls[key].updateValueAndValidity();
      });
    }
  }
}

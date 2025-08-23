import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RegisterFormField } from '../../interfaces/register/register-form-field.interface';
import { REGISTER_FORM_FIELDS } from '../../consts/register/register-form-field.constant';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
})
export class Register {
  readonly formFields: RegisterFormField[] = REGISTER_FORM_FIELDS;
  formSubmitted = false;

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.formSubmitted = true;
      form.resetForm();
    }
  }

}

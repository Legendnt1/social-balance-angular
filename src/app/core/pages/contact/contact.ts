import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CONTACT_FORM_FIELDS } from '../../consts/contact/contact-form-field.const';
import { ContactFormField } from '../../interfaces/contact/contact-form-field.interface';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
})
export class Contact {
  formFields: ContactFormField[] = CONTACT_FORM_FIELDS;
  formSubmitted = false;
  formAttempted = false;
  captchaChecked = false;

  onSubmit(form: NgForm) {
    this.formAttempted = true;

    if (form.valid && this.captchaChecked) {
      this.formSubmitted = true;

      form.resetForm();
      this.captchaChecked = false;

      // Ocultar el mensaje después de unos segundos
      setTimeout(() => {
        this.formSubmitted = false;
        this.formAttempted = false;
      }, 5000);
    }
  }

}

import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {phoneNumberValidator} from "../../utils";
import {AuthService, RegistrationModel} from "../../core";
import {BehaviorSubject, catchError} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    phoneNumber: ['', [Validators.required, phoneNumberValidator]]
  })

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) { }

  submit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value as RegistrationModel;

      this.authService.register(formData).pipe(catchError((x) => {
          return new BehaviorSubject({});
        })).subscribe();
    }
  }

  isWrongField(fieldName: string): boolean {
    let control = this.registerForm.get(fieldName);
    if (control == null)
      return true;

    return control.value != '' && control.invalid;
  }

}

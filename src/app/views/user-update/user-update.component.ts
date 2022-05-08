import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {phoneNumberValidator} from "../../utils";
import {AuthService, RegistrationModel} from "../../core";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnDestroy {

  registerForm = this.formBuilder.group({
    name: ['' , Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, phoneNumberValidator]],
    photo: null,
  })

  private _destroy: Subject<void> = new Subject();

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {
    authService.currentUser$
      .pipe(
        takeUntil(this._destroy)
      )
      .subscribe(user => {
        this.registerForm.get('name')!.setValue(user?.name);
        this.registerForm.get('email')!.setValue(user?.email);
        this.registerForm.get('phoneNumber')!.setValue(user?.phoneNumber);
        this.registerForm.get('photo')!.setValue(null);
      })
  }

  submit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value as RegistrationModel;

      console.log(formData);
    }
  }

  isWrongField(fieldName: string): boolean {
    let control = this.registerForm.get(fieldName);
    if (control == null)
      return true;

    return control.value != '' && control.invalid;
  }

  ngOnDestroy(): void {
    this._destroy.next();
    this._destroy.complete();
  }
}

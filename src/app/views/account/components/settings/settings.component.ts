import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {UserModel, UserService, UserUpdate} from "../../../../store";
import {imgContent} from "../../../../utils";
import {AuthService} from "../../../../core";
import {concatMap, filter, map, take} from "rxjs";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  form = this.formBuilder.group({
    email: '',
    name: '',
    password: '',
    phoneNumber: '',

  })

  img: null | ArrayBuffer = null;

  constructor(private formBuilder: FormBuilder,
              private auth: AuthService,
              private users: UserService) { }

  changeImg(images: ArrayBuffer[]):void {
    this.img = images[0];
  }

  submit(): void {
    const userUpdate: UserUpdate = {}

    if (this.img) {
      userUpdate.photo = imgContent(this.img);
    }

    const formValues = this.form.value;

    if (formValues.email)
      userUpdate.email = formValues.email;

    if (formValues.name)
      userUpdate.name = formValues.name;

    if (formValues.password)
      userUpdate.password = formValues.password;

    if (formValues.phoneNumber)
      userUpdate.phoneNumber = formValues.phoneNumber;


    this.auth.currentUser$.pipe(
      filter(x => x !== null),
      // @ts-ignore
      map(({id}) => id),
      concatMap(id => this.users.updateUser(id, userUpdate)),
      take(1)
    )
    .subscribe(() => console.log("Updated"));
  }
}

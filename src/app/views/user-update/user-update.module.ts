import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserUpdateComponent } from './user-update.component';
import {UserUpdateRoutingModule} from "./user-update-routing.module";
import {UserService} from "./services";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedComponentsModule} from "../../shared/shared-components/shared-components.module";



@NgModule({
  declarations: [
    UserUpdateComponent
  ],
  imports: [
    CommonModule,
    UserUpdateRoutingModule,
    ReactiveFormsModule,
    SharedComponentsModule,
  ],
  providers: [
    UserService
  ]
})
export class UserUpdateModule { }

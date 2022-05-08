import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import {UploadRoutingModule} from "./upload-routing.module";
import {SharedComponentsModule} from "../../shared/shared-components/shared-components.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    UploadComponent
  ],
  imports: [
    CommonModule,
    UploadRoutingModule,
    SharedComponentsModule,
    ReactiveFormsModule
  ]
})
export class UploadModule { }

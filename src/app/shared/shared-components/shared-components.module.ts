import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UploadButtonComponent } from './photo-upload/components/upload-button/upload-button.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { ImageComponent } from './photo-upload/components/image/image.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";
import { EmptyImgComponent } from './photo-upload/components/empty-img/empty-img.component';



@NgModule({
  declarations: [
    PhotoUploadComponent,
    UploadButtonComponent,
    ImageComponent,
    HeaderComponent,
    EmptyImgComponent
  ],
  exports: [
      PhotoUploadComponent,
      HeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ]
})
export class SharedComponentsModule { }

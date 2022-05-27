import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AnnouncementService, CreateAnnouncement} from "../../store";
import {imgContent} from "../../utils";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  uploadForm = this.formBuilder.group({
    description: '',
    title: ''
  });

  images: ArrayBuffer[] = []

  constructor(private formBuilder: FormBuilder,
              private announcementService: AnnouncementService) { }


  saveImages(images: ArrayBuffer[]) {
    this.images = images;
  }

  onSubmit(): void {
    const photos = this.images.map(imgContent);
    const value = {...this.uploadForm.value, photos, address: 'Prin Romania', hourPrice: 200} as CreateAnnouncement;
    console.log(value);
    this.announcementService.create(value)
      .subscribe();
  }
}

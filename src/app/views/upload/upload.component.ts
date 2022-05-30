import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AnnouncementService, CreateAnnouncement} from "../../store";
import {imgContent} from "../../utils";
import {Router} from "@angular/router";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  uploadForm = this.formBuilder.group({
    description: '',
    title: '',
    address: '',
    hourPrice: 0
  });

  images: ArrayBuffer[] = []

  constructor(private formBuilder: FormBuilder,
              private announcementService: AnnouncementService,
              private router: Router) { }


  saveImages(images: ArrayBuffer[]) {
    this.images = images;
  }

  onSubmit(): void {
    const photos = this.images.map(imgContent);
    const value = {...this.uploadForm.value, photos} as CreateAnnouncement;

    this.announcementService.create(value)
      .subscribe(({ id }) => this.router.navigate([`/announcements/${id}`]));
  }
}

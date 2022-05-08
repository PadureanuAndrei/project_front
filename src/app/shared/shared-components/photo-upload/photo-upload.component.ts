import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent {
  @Input()
  multiple: boolean = true;

  @Input()
  images: ArrayBuffer[] = [];

  @Input()
  size: number = 1;

  @ViewChild('file')
  private fileInput!: ElementRef<HTMLInputElement>;

  @Output()
  uploaded = new EventEmitter<ArrayBuffer[]>();

  upload(arrayBuffer: ArrayBuffer) {
    this.images.push(arrayBuffer);

    if (this.size && this.images.length > this.size) {
      this.images.splice(0, this.images.length - this.size);
    }

    this.uploaded.emit(this.images);
  }

  removeImage(index: number): void {
    this.images.splice(index, 1);

    this.uploaded.emit(this.images);
  }

  openUploadPopup() {
    this.fileInput.nativeElement.click();
  }

  async loadFile(): Promise<void> {
    const files = this.fileInput.nativeElement.files as FileList;
    if (files.length) {
      const file = files[0];
      const buffer = await file.arrayBuffer();

      this.upload(buffer);
    }
  }
}

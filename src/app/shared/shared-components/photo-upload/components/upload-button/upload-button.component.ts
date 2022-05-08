import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-upload-button',
  templateUrl: './upload-button.component.html',
  styleUrls: ['./upload-button.component.css']
})
export class UploadButtonComponent {
  @ViewChild('file')
  private fileInput!: ElementRef<HTMLInputElement>;

  @Output()
  onUpload = new EventEmitter<ArrayBuffer>();

  openUploadPopup() {
    this.fileInput.nativeElement.click();
  }

  async loadFile(): Promise<void> {
    const files = this.fileInput.nativeElement.files as FileList;
    if (files.length) {
      const file = files[0];
      const buffer = await file.arrayBuffer();

      this.onUpload.emit(buffer)
    }
  }
}

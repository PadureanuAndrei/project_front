import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-empty-img',
  templateUrl: './empty-img.component.html',
  styleUrls: ['./empty-img.component.css']
})
export class EmptyImgComponent {

  @Output()
  onUpload = new EventEmitter<void>();

  upload(): void {
    this.onUpload.emit();
  }
}

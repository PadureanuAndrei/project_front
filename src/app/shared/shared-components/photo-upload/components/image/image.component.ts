import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter, HostListener,
  Input,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements AfterViewChecked {

  @Input()
  image!: ArrayBuffer;

  @Output()
  onRemove = new EventEmitter<void>();

  @ViewChild('imageContainer')
  imageContainer!: ElementRef<HTMLImageElement>;

  canRemove = false;

  @HostListener('mouseenter')
  mouseenter() {
    this.canRemove = true;
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.canRemove = false;
  }

  ngAfterViewChecked(): void {
    this.render();
  }

  remove(): void {
    this.onRemove.emit();
  }

  private render(): void {
    const blob = new Blob([this.image]);

    this.imageContainer.nativeElement.src = URL.createObjectURL(blob);
  }
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  constructor() { }

  @Input()
  images: number[] = [];

  selected = 0

  selectImage(index: number): void {
    this.selected = index;
  }

  next(): void {
    this.selected = (this.selected + 1) % this.images.length;
  }

  prev(): void {
    this.selected = this.selected - 1;
    if (this.selected < 0)
        this.selected = this.images.length - 1;
  }
}

import {Component, Input} from '@angular/core';
import {Announcement} from "../../../../store";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {

  @Input()
  announcement!: Announcement

}

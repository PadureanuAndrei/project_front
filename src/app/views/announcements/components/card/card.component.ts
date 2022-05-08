import {Component, HostListener, Input} from '@angular/core';
import {Announcement} from "../../../../store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  announcement!: Announcement;

  constructor(private router: Router) {}

  @HostListener('mouseclick')
  navigateToAnnouncement() {
    void this.router.navigate([`/announcements/${this.announcement.id}`]);
  }

}

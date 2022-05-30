import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {concatMap, map, take} from "rxjs";
import {AnnouncementService} from "../../../../store";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  startDateControl = new FormControl()
  endDateControl = new FormControl()

  get maxDate(): Date {
    return new Date(this.minDate.getTime() + 1000 * 60 * 60 * 24 * 30);
  }

  get minDate(): Date {
    const date =  new Date();
    date.setSeconds(0, 0);

    return date;
  }

  constructor(private activeRoute: ActivatedRoute, private announcements: AnnouncementService) {
  }


  submit(): void {
    const startDate = this.startDateControl.value as Date;
    const endDate = this.endDateControl.value as Date;

    this.activeRoute.params
      .pipe(
        map(({ id }) => id),
        concatMap(id => this.announcements.addBooking(startDate, endDate, id)),
        take(1)
      )
      .subscribe(() => {
        this.startDateControl.reset();
        this.endDateControl.reset();
      });
  }
}

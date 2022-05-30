import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {AnnouncementBookings, AnnouncementService} from "../../../../store";
import {Subject, take, takeUntil} from "rxjs";

@Component({
  selector: 'app-my-announcements',
  templateUrl: './my-announcements.component.html',
  styleUrls: ['./my-announcements.component.css']
})
export class MyAnnouncementsComponent implements OnDestroy {

  dataSource = new MatTableDataSource<AnnouncementBookings>();

  private destroy = new Subject<void>();

  constructor(private announcements: AnnouncementService) {
    announcements.getUserAnnouncements()
      .pipe(takeUntil(this.destroy))
      .subscribe(announcements => this.dataSource.data = announcements);
  }

  ngOnDestroy(): void {
    this.destroy.next();
  }

}

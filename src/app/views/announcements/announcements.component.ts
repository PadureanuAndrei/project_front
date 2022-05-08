import { Component, OnInit } from '@angular/core';
import {Announcement, AnnouncementService} from "../../store";
import {exhaustMap, Observable} from "rxjs";
import {SearchService} from "./services/search/search.service";

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent {
  announcements$: Observable<Announcement[]>;

  constructor(private announcements: AnnouncementService,
              private search: SearchService) {
    this.announcements$ = this.search.searchCriteria$.pipe(
      exhaustMap(criteria => this.announcements.getByCriteria(criteria))
    );
  }

}

import { Component, OnInit } from '@angular/core';
import {concatMap, map, Observable, tap} from "rxjs";
import {Announcement, AnnouncementService} from "../../store";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent {

  announcement$: Observable<Announcement>;

  constructor(private announcementService: AnnouncementService,
              private route: ActivatedRoute) {

    this.announcement$ = this.route.params.pipe(
      concatMap(({ id }) => announcementService.getById(id)),
    )
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Announcement, AnnouncementSearchCriteria, CreateAnnouncement} from "./types";
import {map, Observable, of} from "rxjs";
import {announcementById, announcements, getFile} from "../../api";

@Injectable()
export class AnnouncementService {

  constructor(private http: HttpClient) {}

  update(id: number, announcement: CreateAnnouncement): Observable<Announcement> {
    throw new Error("not implemented");
  }

  create(announcement: CreateAnnouncement): Observable<Announcement> {
    return this.http.post<Announcement>(announcements(), announcement)
      .pipe(
        map(({ photos, ...rest}) => ({
          photos: photos.map(getFile),
          ...rest
        }))
      );
  }

  getByCriteria(criteria: AnnouncementSearchCriteria): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(announcements())
      .pipe(
        map(announcements => announcements.map(({ photos, ...rest}) => ({
          photos: photos.map(getFile),
          ...rest
        })))
      );
  }

  getById(id: number): Observable<Announcement> {
    return this.http.get<Announcement>(announcementById(id))
      .pipe(
        map(({ photos, ...rest}) => ({
          photos: photos.map(getFile),
          ...rest
        }))
      );
  }
}

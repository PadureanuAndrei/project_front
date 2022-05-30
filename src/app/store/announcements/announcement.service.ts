import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Announcement, AnnouncementBookings, AnnouncementSearchCriteria, CreateAnnouncement} from "./types";
import {map, Observable, of} from "rxjs";
import {addBooking, announcementById, announcements, getFile, userAnnouncements} from "../../api";

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
    return this.http.get<Announcement[]>(announcements() + `/?criteria=${criteria.criteria || ''}&location=${criteria.location || ''}`)
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

  getUserAnnouncements(): Observable<AnnouncementBookings[]> {
    return this.http.get<AnnouncementBookings[]>(userAnnouncements())
      .pipe(
        map(as => as.map(a => ({
          ...a,
          bookings: a.bookings.map(b => ({
            ...b,
            start: new Date(b.start),
            end: new Date(b.end)
          }))
        })))
      );
  }

  addBooking(start: Date, end: Date, announcementId: number) {
    return this.http.post<any>(addBooking(), {
      start: start, end, announcement: announcementId
    })
  }
}

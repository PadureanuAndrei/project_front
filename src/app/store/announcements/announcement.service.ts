import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Announcement, AnnouncementSearchCriteria, CreateAnnouncement} from "./types";
import {Observable, of} from "rxjs";
import {announcementById, announcements} from "../../api";

@Injectable()
export class AnnouncementService {

  constructor(private http: HttpClient) {}

  update(id: number, announcement: CreateAnnouncement): Observable<Announcement> {
    throw new Error("not implemented");
  }

  create(announcement: CreateAnnouncement): Observable<Announcement> {
    return this.http.post<Announcement>(announcements(), announcement)
  }

  getByCriteria(criteria: AnnouncementSearchCriteria): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(announcements());
    // return of([
    //   {
    //     id: 1,
    //     title: 'Frigidere „Samsung”- generatie actuala, la 50% din pretul pietei.',
    //     description: 'Descriere',
    //     address: 'Stefn cel Mare 4',
    //     hourPrice: 200,
    //     publisher: 1,
    //     photos: []
    //
    //   },
    //   {
    //     id: 1,
    //     title: 'Frigidere „Samsung”- generatie actuala, la 50% din pretul pietei.',
    //     description: 'Descriere',
    //     address: 'Stefn cel Mare 4',
    //     hourPrice: 200,
    //     publisher: 1,
    //     photos: []
    //
    //   },
    //   {
    //     id: 1,
    //     title: 'Frigidere „Samsung”- generatie actuala, la 50% din pretul pietei.',
    //     description: 'Descriere',
    //     address: 'Stefn cel Mare 4',
    //     hourPrice: 200,
    //     publisher: 1,
    //     photos: []
    //
    //   },
    //   {
    //     id: 1,
    //     title: 'Frigidere „Samsung”- generatie actuala, la 50% din pretul pietei.',
    //     description: 'Descriere',
    //     address: 'Stefn cel Mare 4',
    //     hourPrice: 200,
    //     publisher: 1,
    //     photos: []
    //
    //   },
    //   {
    //     id: 1,
    //     title: 'Frigidere „Samsung”- generatie actuala, la 50% din pretul pietei.',
    //     description: 'Descriere',
    //     address: 'Stefn cel Mare 4',
    //     hourPrice: 200,
    //     publisher: 1,
    //     photos: []
    //
    //   },
    //   {
    //     id: 1,
    //     title: 'Frigidere „Samsung”- generatie actuala, la 50% din pretul pietei.',
    //     description: 'Descriere',
    //     address: 'Stefn cel Mare 4',
    //     hourPrice: 200,
    //     publisher: 1,
    //     photos: []
    //
    //   },
    // ]);
  }

  getById(id: number): Observable<Announcement> {
    return this.http.get<Announcement>(announcementById(id));
    // return of(
    //   {
    //     id: 1,
    //     title: 'Frigidere „Samsung”- generatie actuala, la 50% din pretul pietei.',
    //     description: 'Descriere',
    //     address: 'Stefn cel Mare 4',
    //     hourPrice: 200,
    //     publisher: 1,
    //     photos: []
    //
    //   },
    // )
  }
}

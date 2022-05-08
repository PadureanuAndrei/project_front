import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {AnnouncementSearchCriteria} from "../../../../store";

@Injectable()
export class SearchService {
  private _searchCriteria$ = new BehaviorSubject<AnnouncementSearchCriteria>({});

  get searchCriteria$(): Observable<AnnouncementSearchCriteria> {
    return this._searchCriteria$.asObservable();
  }

  setSearchCriteria(criteria: AnnouncementSearchCriteria): void {
    this._searchCriteria$.next(criteria);
  }
}

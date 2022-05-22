import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {UserModel, UserUpdate} from "./types";
import {getFile, getUserById} from "../../api";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  getById(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(getUserById(id))
      .pipe(
        map(({ photo, ...rest }) => ({
          ...(photo ? {photo: getFile(photo)} : {}),
          ...rest
        }))
      )
  }

  updateUser(id: number, user: UserUpdate): Observable<UserModel> {
    return this.http.put<UserModel>(getUserById(id), user)
      .pipe(
        map(({ photo, ...rest }) => ({
          ...(photo ? {photo: getFile(photo)} : {}),
          ...rest
        }))
      )
  }
}

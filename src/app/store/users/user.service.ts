import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel, UserUpdate} from "./types";
import {getUserById} from "../../api";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  getById(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(getUserById(id));
  }

  updateUser(id: number, user: UserUpdate): Observable<any> {
    return this.http.put(getUserById(id), user);
  }
}

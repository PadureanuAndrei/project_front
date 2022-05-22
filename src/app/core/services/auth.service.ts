import {Injectable} from "@angular/core";
import {LoginModel, RegistrationModel, UserModel} from "./types";
import {HttpClient} from "@angular/common/http";
import {getUserByEmail, loginApi, registerApi} from "../../api";
import {BehaviorSubject, concatMap, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUser$: BehaviorSubject<UserModel | null> = new BehaviorSubject<UserModel | null>(null);
  private _authToken: string | null = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWlAcGFkdXJlYW51IiwiZXhwIjoxNjUzMjYyNjM0LCJpYXQiOjE2NTMyNDQ2MzR9.uDQY0Iv71DdKReeKkEisJIKdpge5vk8EU8VK9pLA7ihpyuDm9PdJphQNJA-rKFMmr7Tx90HfpUksQbUOxT95bg";
  constructor(private http: HttpClient) {
  }

  login(login: LoginModel): Observable<UserModel> {
    return this.http.post<{jwtToken: string}>(loginApi(), login).pipe(
      tap(({jwtToken}) => this._authToken = jwtToken),
      concatMap(() => this.http.get<UserModel>(getUserByEmail(), {
        params: {
          email: login.email
        }
      })),
      tap(user => this._currentUser$.next(user))
    );
  }

  register(registration: RegistrationModel): Observable<UserModel> {
    return this.http.post<UserModel>(registerApi(), registration);
  }

  get currentUser$(): Observable<UserModel | null> {
    return this._currentUser$.asObservable();
  }

  get isAuthenticated(): boolean {
    return this._authToken !== null;
  }

  get authToken(): string | null {
    return this._authToken;
  }

  logout(): void {
    this._authToken = null;
    this._currentUser$.next(null);
  }

}

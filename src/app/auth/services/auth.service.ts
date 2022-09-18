import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth(): Auth | undefined {
    if (this._auth) {
      return { ...this._auth }
    } else {
      return undefined;
    }
  }

  constructor(private http: HttpClient) { }

  public login (): Observable<Auth> {
    return this.http.get<Auth>(`${this._baseUrl}/users/1`)
      .pipe(
        tap(response => this._auth = response)
      );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public login (): Observable<Auth> {
    return this.http.get<Auth>(`${this._baseUrl}/users/1`);
  }
}

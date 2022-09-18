import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../interfaces/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private _baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  public createHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this._baseUrl}/heroes`, hero);
  }

  public updateHero(id:string, hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`${this._baseUrl}/heroes/${id}`, hero);
  }

  public getHereos(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this._baseUrl}/heroes`);
  }

  public getHereosByQuery(query: string, page: number = 5): Observable<Hero[]> {
    const params: HttpParams = new HttpParams()
      .set('q', query)
      .set('limit', page);

    return this.http.get<Hero[]>(`${this._baseUrl}/heroes`, {params});
  }

  public getHereosById(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this._baseUrl}/heroes/${id}`);
  }
}

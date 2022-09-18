import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

type BooleanType = Observable<boolean> | Promise<boolean> | boolean;

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor (private authService: AuthService, private router: Router) {}

  private _securitytest(): BooleanType {
    return this.authService.verifyAuthentication()
      .pipe(
        tap(isAuthenticated => {
          if (!isAuthenticated) {
            this.router.navigate(['./auth/login']);
          }
        })
      );
  }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): BooleanType {
      return this._securitytest();
   }

  public canLoad(
    route: Route,
    segments: UrlSegment[]): BooleanType  {
      return this._securitytest();
  }
}

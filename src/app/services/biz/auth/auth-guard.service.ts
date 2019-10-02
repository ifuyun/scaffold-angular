import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, CanLoad, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { RouterService } from '../..';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad, CanActivateChild {
  constructor(
    private auth: AuthService,
    private router: RouterService
  ) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLoginAndAuth(state.url);
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    return this.checkLoginAndAuth();
  }

  private checkLoginAndAuth(url?: string): boolean {
    if (!this.auth.checkLogin()) {
      this.router.toLogin();
      return false;
    }
    if (url && !this.auth.checkAuth()) {
      this.router.toForbidden();
      return false;
    }
    return true;
  }
}

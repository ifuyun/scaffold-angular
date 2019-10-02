import { Injectable } from '@angular/core';
import { RouterService } from '../..';
import { BaseService } from '../../../core/base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  constructor(
    private router: RouterService
  ) {
    super();
  }

  checkLogin(): boolean {
    // todo
    return true;
  }
  checkAuth(): boolean {
    // todo
    return true;
  }

  login() {
    // todo
  }

  logout() {
    this.clear();
    this.router.toLogin();
  }

  protected init(): void {
  }

  private clear() {
    // todo
  }
}

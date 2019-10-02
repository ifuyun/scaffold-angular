import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from '../../core/base.service';

@Injectable({
  providedIn: 'root'
})
export class RouterService extends BaseService {
  constructor(
    private router: Router,
    private location: Location
  ) {
    super();
  }

  toLogin() {
    this.router.navigateByUrl('/login');
  }

  toForbidden() {
    this.router.navigateByUrl('/forbidden');
  }

  redirect(url: string) {
    this.router.navigateByUrl(url, {skipLocationChange: true});
    this.location.replaceState(url);
  }

  protected init(): void {
  }
}

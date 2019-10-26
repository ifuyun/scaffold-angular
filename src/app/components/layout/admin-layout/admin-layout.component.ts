import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '../../../core/base.component';
import { RouterService } from '../../../services';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.less']
})
export class AdminLayoutComponent extends BaseComponent {
  constructor(
    private router: Router,
    private routerService: RouterService
  ) {
    super();
    this.initRedirect();
  }

  protected init(): void {
  }

  protected initAction(): void {
  }

  private initRedirect() {
    this.router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if (e.urlAfterRedirects === '/admin') {
          // todo: should replace with real path
          this.routerService.redirect('/admin/demo');
        }
      }
    });
  }
}

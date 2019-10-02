import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BaseBizService } from '../../core/base-biz.service';
import { Breadcrumb } from '../../interfaces/common';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService extends BaseBizService {
  private breadcrumbSource = new Subject<Breadcrumb[]>();
  breadcrumb$ = this.breadcrumbSource.asObservable();

  updateBreadcrumb(breadcrumbs: Breadcrumb[]) {
    this.breadcrumbSource.next(breadcrumbs);
  }

  protected init(): void {
  }
}

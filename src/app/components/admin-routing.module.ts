import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { APP_CONF } from '../core/app.conf';
import { BreadcrumbService } from '../services';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DemoComponent } from './pages/demo/demo.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'demo',
        component: DemoComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  constructor(
    private router: Router,
    private breadcrumb: BreadcrumbService,
    private title: Title
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        breadcrumb.updateBreadcrumb([]);

        const titles = [APP_CONF.siteTitle];
        // todo
        title.setTitle(titles.join(' - '));
      }
    });
  }
}

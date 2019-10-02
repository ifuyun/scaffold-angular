import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AppCommonModule } from './common/app-common.module';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DemoComponent } from './pages/demo/demo.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    DemoComponent
  ],
  imports: [
    AppCommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {
}

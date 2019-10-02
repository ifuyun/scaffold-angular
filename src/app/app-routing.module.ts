import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './components/errors/forbidden/forbidden.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { ServerErrorComponent } from './components/errors/server-error/server-error.component';
import { AuthGuardService } from './services/biz/auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'admin',
    canLoad: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    loadChildren: './components/admin.module#AdminModule'
  },
  {path: '', redirectTo: '/admin', pathMatch: 'full'},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: 'error', component: ServerErrorComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

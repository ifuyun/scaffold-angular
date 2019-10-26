import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';
import { SafePipe } from '../../pipes/safe.pipe';
import { ForbiddenComponent } from '../errors/forbidden/forbidden.component';
import { NotFoundComponent } from '../errors/not-found/not-found.component';
import { ServerErrorComponent } from '../errors/server-error/server-error.component';

@NgModule({
  declarations: [
    ForbiddenComponent,
    NotFoundComponent,
    ServerErrorComponent,
    SafePipe,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SafePipe,
    SafeHtmlPipe
  ]
})
export class AppCommonModule {
}

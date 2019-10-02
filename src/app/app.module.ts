import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCommonModule } from './components/common/app-common.module';
import { ResizeService } from './services';
import { HTTP_INTERCEPTOR_PROVIDERS } from './services/interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    AppCommonModule
  ],
  providers: [
    HTTP_INTERCEPTOR_PROVIDERS,
    ResizeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

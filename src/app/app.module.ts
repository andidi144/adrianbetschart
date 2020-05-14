import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MartialartsComponent } from './martialarts/martialarts.component';

import {NgxTypedJsModule} from 'ngx-typed-js';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MartialartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

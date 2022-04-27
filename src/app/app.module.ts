import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstagramDashboardComponent } from './instagram-dashboard/instagram-dashboard.component';
import { LoginInstaComponent } from './login-insta/login-insta.component';

@NgModule({
  declarations: [
    AppComponent,
    InstagramDashboardComponent,
    LoginInstaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

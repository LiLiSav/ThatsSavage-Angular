import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    HomeComponent,
    AboutUsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecaptchaV3Module,
  ],
  exports:[
    RecaptchaV3Module,
  ],
  providers: [
  { provide: RECAPTCHA_V3_SITE_KEY, useValue: '6Leho8QZAAAAABEYI32nzn9hhzqLR2EDyOw6tOjx' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

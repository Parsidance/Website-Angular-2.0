import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { LineupComponent } from './lineup/lineup.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { AboutComponent } from './about/about.component';

import { HeaderComponent } from './components/header/header.component';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

import { CarouselModule } from 'primeng/carousel';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { VerkoopsvoorwaardenComponent } from './verkoopsvoorwaarden/verkoopsvoorwaarden.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    LineupComponent,
    SponsorsComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    VerkoopsvoorwaardenComponent,
    PrivacypolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToolbarModule,
    CarouselModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {   
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faChevronDown,
      faFacebook,
      faInstagram,
      faYoutube,
      faEnvelope
    );
  }
}

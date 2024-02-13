import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { LineupComponent } from './lineup/lineup.component';
import { AzComponent } from './lineup/az/az.component';
import { FridayComponent } from './lineup/friday/friday.component';
import { SaturdayComponent } from './lineup/saturday/saturday.component';

import { SponsorsComponent } from './sponsors/sponsors.component';
import { AboutComponent } from './about/about.component';

import { HeaderHomepageComponent } from './components/headerHomepage/headerHomepage.component';
import { HeaderComponent } from './components/header/header.component';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

import { CarouselModule } from 'primeng/carousel';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp, faEnvelope, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { VerkoopsvoorwaardenComponent } from './verkoopsvoorwaarden/verkoopsvoorwaarden.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { faFacebook, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

import {CdkAccordionModule} from '@angular/cdk/accordion';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    LineupComponent,
    SponsorsComponent,
    AboutComponent,
    HeaderHomepageComponent,
    HeaderComponent,
    FooterComponent,
    VerkoopsvoorwaardenComponent,
    PrivacypolicyComponent,
    AzComponent,
    FridayComponent,
    SaturdayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToolbarModule,
    CarouselModule,
    FontAwesomeModule,
    CdkAccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {   
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faChevronDown,
      faChevronUp,
      faFacebook,
      faInstagram,
      faTiktok,
      faYoutube,
      faEnvelope,
      faBars,
      faXmark
    );
  }
}

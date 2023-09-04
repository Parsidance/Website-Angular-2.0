import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { LineupComponent } from './lineup/lineup.component';
import { SponsersComponent } from './sponsers/sponsers.component';
import { AboutComponent } from './about/about.component';

import { HeaderComponent } from './components/header/header.component';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    LineupComponent,
    SponsersComponent,
    AboutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { LineupComponent } from './lineup/lineup.component';
import { SponsersComponent } from './sponsers/sponsers.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'lineup', component: LineupComponent },
  { path: 'sponsers', component: SponsersComponent },
  { path: 'about-parsidance', component: AboutComponent },
  { path: '*', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { LineupComponent } from './lineup/lineup.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { AboutComponent } from './about/about.component';
import { AftermovieComponent } from './aftermovie/aftermovie.component';
import { VerkoopsvoorwaardenComponent } from './verkoopsvoorwaarden/verkoopsvoorwaarden.component';
import { NotFoundComponent } from './not-found/not-found.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'lineup', component: LineupComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'about-parsidance', component: AboutComponent },
  { path: 'aftermovie', component: AftermovieComponent },
  { path: 'verkoopsvoorwaarden', component: VerkoopsvoorwaardenComponent },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

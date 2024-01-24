import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { InfoComponent } from './info/info.component';
// import { LineupComponent } from './lineup/lineup.component';
// import { SponsorsComponent } from './sponsors/sponsors.component';
// import { AboutComponent } from './about/about.component';
import { VerkoopsvoorwaardenComponent } from './verkoopsvoorwaarden/verkoopsvoorwaarden.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'verkoopsvoorwaarden', component: VerkoopsvoorwaardenComponent },
  { path: 'privacypolicy', component: PrivacypolicyComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

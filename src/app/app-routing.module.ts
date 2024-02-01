import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { LineupComponent } from './lineup/lineup.component';
import { AzComponent } from './lineup/az/az.component';
import { FridayComponent } from './lineup/friday/friday.component';
import { SaturdayComponent } from './lineup/saturday/saturday.component';

// import { SponsorsComponent } from './sponsors/sponsors.component';
// import { AboutComponent } from './about/about.component';
import { VerkoopsvoorwaardenComponent } from './verkoopsvoorwaarden/verkoopsvoorwaarden.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'line-up', 
    component: LineupComponent,
    data: { title: 'Line-up' },
    children:[
      {
        path:'a-z',
        component: AzComponent,
      },
      {
        path:'friday',
        component: FridayComponent,
        data: { title: 'Line-up Friday' },
      },
      {
        path:'saturday',
        component: SaturdayComponent,
        data: { title: 'Line-up Saturday' },
      },
    ] 
  },
  { path: 'verkoopsvoorwaarden', component: VerkoopsvoorwaardenComponent },
  { path: 'privacypolicy', component: PrivacypolicyComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

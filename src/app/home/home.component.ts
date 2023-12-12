import { Component } from '@angular/core';
import { routeTransition } from '../animations';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router'; // Import the Router

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routeTransition],
})

export class HomeComponent {
  constructor(private router: Router) {} // Inject the Router
  images: any[] = [
    { url: 'assets/homepage/home-1.jpg' },
    { url: 'assets/homepage/Bunker.jpg' },
    { url: 'assets/homepage/home-4.jpg' },
    { url: 'assets/homepage/home-7.jpg' },
    { url: 'assets/homepage/main_stage.jpg' },

  ];

  artists: string[] = ['USED' , 'Amber Broos', 'Eagl', 'Skyve ft Flo Windey', 'BLVCKPRINT', 'Séa', 'De Bromeo\'s ', 'Bassbrain', 'TDB'];

  logos = [
    {url: 'assets/sponsorLogos/beeuwsaert.png', alt: 'Beeuwsaert'},
    {url: 'assets/sponsorLogos/maselis.png', alt: 'Maselis'},
    {url: 'test', alt: 'Lunette'},
    {url: 'test', alt: 'test2'},
    {url: 'test', alt: 'test3'},
    {url: 'test', alt: 'test4'},
    {url: 'test', alt: 'test5'},
    {url: 'test', alt: 'test6'},
    {url: 'test', alt: 'test7'},
    {url: 'test', alt: 'test8'},
  ]

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images: any[] = [
    { url: 'assets/homepage/home-1.jpg' },
    { url: 'assets/homepage/Bunker.jpg' },
    { url: 'assets/homepage/home-4.jpg' },
    { url: 'assets/homepage/home-7.jpg' },
    { url: 'assets/homepage/main_stage.jpg' },

  ];

  artists: string[] = ['Artist 1', 'Artist 2', 'Artist 3', 'Artist 4'];

  logos = [
    {url: 'assets/sponserLogos/beeuwsaert.png', alt: 'Beeuwsaert'},
    {url: 'assets/sponserLogos/maselis.png', alt: 'Maselis'},
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

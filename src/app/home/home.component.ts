import { Component } from '@angular/core';
import { ViewportScroller } from "@angular/common";

declare var FlipDown: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {
  constructor(private scroller: ViewportScroller) {}

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


  ngAfterViewInit(): void {
    var ticketVerkoop = new Date("2023-12-15T18:00:00").getTime() / 1000;
    new Date().getTime
    new FlipDown(ticketVerkoop, 
      {theme: "darkSelfMade",}).start();
  }


  goToAftermovie() {
    this.scroller.scrollToAnchor("aftermovie");
  }
}

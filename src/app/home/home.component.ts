import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images: any[] = [
    { url: 'assets/home-1.jpg' },
    { url: 'assets/Bunker.jpg' },
    { url: 'assets/home-4.jpg' },
    { url: 'assets/home-7.jpg' },
    { url: 'assets/main_stage.jpg' },

  ];
}

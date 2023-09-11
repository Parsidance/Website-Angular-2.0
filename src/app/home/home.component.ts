import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images: any[] = [
    { url: 'path/to/your/image1.jpg' },
    { url: 'path/to/your/image2.jpg' },
    { url: 'path/to/your/image3.jpg' },
    // ... add more images as needed
  ];
}

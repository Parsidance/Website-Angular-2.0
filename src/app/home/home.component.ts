import { Component, Input } from '@angular/core';
import { ViewportScroller } from "@angular/common";

declare var FlipDown: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {
  constructor(
    private scroller: ViewportScroller,
    ) {}


  // ngAfterViewInit(): void {
  //   var ticketVerkoop = new Date("2023-12-15T18:00:00").getTime() / 1000;
  //   new Date().getTime
  //   new FlipDown(ticketVerkoop, 
  //     {theme: "darkSelfMade",}).start();
  // }


  goToAftermovie() {
    this.scroller.scrollToAnchor("aftermovie");
  }


  // Progress bar
  @Input() progressFriday: number = 0; // Default progress set to 0 initially
  @Input() progressSaturday: number = 0; // Default progress set to 0 initially

  ngOnInit() {
    // Simulate progress animation on component initialization
    this.animateProgressBar();
  }

  animateProgressBar() {
    // Set progress to 80% over a specific duration (e.g., 2 seconds)
    setTimeout(() => {
      this.progressFriday = 75;
    }, 1000); // Change the time duration as needed
    setTimeout(() => {
      this.progressSaturday = 100;
    }, 1000);
  }
}

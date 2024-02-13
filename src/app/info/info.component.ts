import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  hovered = [false, false, false, false, false];

  titles = ['Tickets', 'Herbruikbare Bekers', 'Parking', 'Food & Drinks', 'Lockers']
  explanations = [
    // Tickets
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis \
    excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis \
    veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?',

    // Herbruikbare Bekers
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis \
    excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis \
    veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?', 

    // Parking
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis \
    excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis \
    veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?', 

    // Food & Drinks
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis \
    excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis \
    veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?', 

    // Lockers
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis \
    excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis \
    veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?', 

  ]

  constructor( 
    private title: Title,
    private route: ActivatedRoute,
    private router: Router
    ) {
      route.snapshot.data['title'];
      this.title.setTitle(route.snapshot.data['title'] + ' | Parsidance Festival');
    }
}

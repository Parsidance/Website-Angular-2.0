import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss']
})
export class LineupComponent {
  constructor( 
    private title: Title,
    private route: ActivatedRoute,
    private router: Router
    ) {
      route.snapshot.data['title'];
      this.title.setTitle(route.snapshot.data['title'] + ' | Parsidance Festival');
    }
}

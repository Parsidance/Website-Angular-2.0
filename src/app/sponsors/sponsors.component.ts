import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent {
  constructor( 
    private title: Title,
    private route: ActivatedRoute,
    private router: Router
    ) {
      route.snapshot.data['title'];
      this.title.setTitle(route.snapshot.data['title'] + ' | Parsidance Festival');
    }
}


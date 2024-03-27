import { Component, ViewEncapsulation  } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrl: './timetable.component.scss'
})
export class TimetableComponent {

  constructor( 
    private title: Title,
    private route: ActivatedRoute,
    private router: Router
    ) {
      route.snapshot.data['title'];
      this.title.setTitle(route.snapshot.data['title'] + ' | Parsidance Festival');
    }
}

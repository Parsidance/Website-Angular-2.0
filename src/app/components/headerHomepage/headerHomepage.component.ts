import { Component } from '@angular/core';

@Component({
  selector: 'app-headerHomepage',
  templateUrl: './headerHomepage.component.html',
  styleUrls: ['./headerHomepage.component.scss']
})
export class HeaderHomepageComponent {

  hideMenu() {
    document.getElementById('menu')!.style.left='-400px';
  }  

  showMenu() {
    document.getElementById('menu')!.style.left='0px';
  }
}

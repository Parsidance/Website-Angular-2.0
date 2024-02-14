import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  ngOnInit() {
    this.hideMenu();
  }

  @ViewChild('menuDiv') menuDiv!: ElementRef;
  @ViewChild('openDeskButton') openDeskButton!: ElementRef;
  @ViewChild('openMobButton') openMobButton!: ElementRef;
  @ViewChild('closeButton') closeButton!: ElementRef;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.menuDiv.nativeElement.contains(event.target);
    const clickedOpenDesk = this.openDeskButton.nativeElement.contains(event.target);
    const clickedOpenMob = this.openMobButton.nativeElement.contains(event.target);
    const clickedClose = this.closeButton.nativeElement.contains(event.target);

    if (!clickedInside && (!clickedOpenDesk || !clickedOpenMob)) {
        this.hideMenu();
    }

    if(clickedOpenDesk || clickedOpenMob) {
      this.showMenu();
    }

    if(clickedClose) {
      this.hideMenu();
    }
}

  hideMenu() {
    document.getElementById('menu')!.style.left='-400px';
  }  

  showMenu() {
    document.getElementById('menu')!.style.left='0px';
  }
}

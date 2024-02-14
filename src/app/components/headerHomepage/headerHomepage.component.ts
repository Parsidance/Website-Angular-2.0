import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-headerHomepage',
  templateUrl: './headerHomepage.component.html',
  styleUrls: ['./headerHomepage.component.scss']
})
export class HeaderHomepageComponent {
  ngOnInit() {
    this.hideMenu();
  }

  @ViewChild('menuDiv') menuDiv!: ElementRef;
  @ViewChild('openDeskButton') openDeskButton!: ElementRef;
  @ViewChild('openMobButton') openMobButton!: ElementRef;
  @ViewChild('closeDeskButton') closeDeskButton!: ElementRef;
  @ViewChild('closeMobButton') closeMobButton!: ElementRef;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
      const clickedInside = this.menuDiv.nativeElement.contains(event.target);
      const clickedOpenDesk = this.openDeskButton.nativeElement.contains(event.target);
      const clickedOpenMob = this.openMobButton.nativeElement.contains(event.target);
      const clickedDeskClose = this.closeDeskButton.nativeElement.contains(event.target);
      const clickedMobClose = this.closeMobButton.nativeElement.contains(event.target);

      if (!clickedInside && (!clickedOpenDesk || !clickedOpenMob)) {
          this.hideMenu();
      }

      if(clickedOpenDesk || clickedOpenMob) {
        this.showMenu();
      }

      if(clickedDeskClose || clickedMobClose) {
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

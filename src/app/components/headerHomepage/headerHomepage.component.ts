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
      const clickedCloseDesk = this.closeDeskButton.nativeElement.contains(event.target);
      const clickedCloseMob = this.closeMobButton.nativeElement.contains(event.target);

      if (!clickedInside && (!clickedOpenDesk || !clickedOpenMob)) {
          this.hideMenu();
      }

      if(clickedOpenDesk || clickedOpenMob) {
        this.showMenu();
      }

      if(clickedCloseDesk || clickedCloseMob) {
        this.hideMenu();
      }

      if(clickedOpenMob){
        this.closeMobButton.nativeElement.style.display = 'block';
        this.closeMobButton.nativeElement.parentElement.parentElement.style.display = 'block';
        this.openMobButton.nativeElement.style.display = 'none';
        this.openMobButton.nativeElement.parentElement.parentElement.style.display = 'none';

      }
  
      if(clickedCloseMob){
        this.closeMobButton.nativeElement.style.display = 'none';
        this.closeMobButton.nativeElement.parentElement.parentElement.style.display = 'none';
        this.openMobButton.nativeElement.style.display = 'block';
        this.openMobButton.nativeElement.parentElement.parentElement.style.display = 'block';
      }
  }

  hideMenu() {
    document.getElementById('menu')!.style.left='-400px';
  }  

  showMenu() {
    document.getElementById('menu')!.style.left='0px';
  }
}

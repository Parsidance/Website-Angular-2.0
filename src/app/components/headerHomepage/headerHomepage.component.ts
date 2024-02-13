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
  @ViewChild('openButton') openButton!: ElementRef;
  @ViewChild('closeButton') closeButton!: ElementRef;


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
      const clickedInside = this.menuDiv.nativeElement.contains(event.target);
      const clickedOpen = this.openButton.nativeElement.contains(event.target);
      const clickedClose = this.closeButton.nativeElement.contains(event.target);

      if (!clickedInside && !clickedOpen) {
          this.hideMenu();
      }

      if(clickedOpen) {
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

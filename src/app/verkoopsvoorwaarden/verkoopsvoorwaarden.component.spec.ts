import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerkoopsvoorwaardenComponent } from './verkoopsvoorwaarden.component';

describe('VerkoopsvoorwaardenComponent', () => {
  let component: VerkoopsvoorwaardenComponent;
  let fixture: ComponentFixture<VerkoopsvoorwaardenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerkoopsvoorwaardenComponent]
    });
    fixture = TestBed.createComponent(VerkoopsvoorwaardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

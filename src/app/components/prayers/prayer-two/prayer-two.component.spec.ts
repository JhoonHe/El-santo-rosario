import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerTwoComponent } from './prayer-two.component';

describe('PrayerTwoComponent', () => {
  let component: PrayerTwoComponent;
  let fixture: ComponentFixture<PrayerTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrayerTwoComponent]
    });
    fixture = TestBed.createComponent(PrayerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

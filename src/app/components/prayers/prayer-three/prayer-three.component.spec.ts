import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerThreeComponent } from './prayer-three.component';

describe('PrayerThreeComponent', () => {
  let component: PrayerThreeComponent;
  let fixture: ComponentFixture<PrayerThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrayerThreeComponent]
    });
    fixture = TestBed.createComponent(PrayerThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

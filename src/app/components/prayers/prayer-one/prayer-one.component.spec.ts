import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerOneComponent } from './prayer-one.component';

describe('PrayerOneComponent', () => {
  let component: PrayerOneComponent;
  let fixture: ComponentFixture<PrayerOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrayerOneComponent]
    });
    fixture = TestBed.createComponent(PrayerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

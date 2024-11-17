import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThursdayComponent } from './thursday.component';

describe('ThursdayComponent', () => {
  let component: ThursdayComponent;
  let fixture: ComponentFixture<ThursdayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThursdayComponent]
    });
    fixture = TestBed.createComponent(ThursdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

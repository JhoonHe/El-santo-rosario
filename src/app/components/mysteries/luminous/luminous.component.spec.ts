import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuminousComponent } from './luminous.component';

describe('LuminousComponent', () => {
  let component: LuminousComponent;
  let fixture: ComponentFixture<LuminousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LuminousComponent]
    });
    fixture = TestBed.createComponent(LuminousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

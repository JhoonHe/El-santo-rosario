import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuminousSecondComponent } from './second.component';

describe('LuminousSecondComponent', () => {
  let component: LuminousSecondComponent;
  let fixture: ComponentFixture<LuminousSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LuminousSecondComponent]
    });
    fixture = TestBed.createComponent(LuminousSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

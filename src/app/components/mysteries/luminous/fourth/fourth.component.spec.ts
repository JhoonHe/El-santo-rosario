import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuminousFourthComponent } from './fourth.component';

describe('LuminousFourthComponent', () => {
  let component: LuminousFourthComponent;
  let fixture: ComponentFixture<LuminousFourthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LuminousFourthComponent]
    });
    fixture = TestBed.createComponent(LuminousFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

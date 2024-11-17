import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuminousThirdComponent } from './third.component';

describe('LuminousThirdComponent', () => {
  let component: LuminousThirdComponent;
  let fixture: ComponentFixture<LuminousThirdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LuminousThirdComponent]
    });
    fixture = TestBed.createComponent(LuminousThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

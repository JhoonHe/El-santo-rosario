import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuminousFirstComponent } from './first.component';

describe('LuminousFirstComponent', () => {
  let component: LuminousFirstComponent;
  let fixture: ComponentFixture<LuminousFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LuminousFirstComponent]
    });
    fixture = TestBed.createComponent(LuminousFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

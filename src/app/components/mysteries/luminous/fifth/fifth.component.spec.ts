import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuminousFifthComponent } from './fifth.component';

describe('LuminousFifthComponent', () => {
  let component: LuminousFifthComponent;
  let fixture: ComponentFixture<LuminousFifthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LuminousFifthComponent]
    });
    fixture = TestBed.createComponent(LuminousFifthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

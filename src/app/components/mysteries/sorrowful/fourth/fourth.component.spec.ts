import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorrowFulFourthComponent } from './fourth.component';

describe('SorrowFulFourthComponent', () => {
  let component: SorrowFulFourthComponent;
  let fixture: ComponentFixture<SorrowFulFourthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SorrowFulFourthComponent]
    });
    fixture = TestBed.createComponent(SorrowFulFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

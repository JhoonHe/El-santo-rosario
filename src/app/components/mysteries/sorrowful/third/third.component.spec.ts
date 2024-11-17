import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorrowFulThirdComponent } from './third.component';

describe('SorrowFulThirdComponent', () => {
  let component: SorrowFulThirdComponent;
  let fixture: ComponentFixture<SorrowFulThirdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SorrowFulThirdComponent]
    });
    fixture = TestBed.createComponent(SorrowFulThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

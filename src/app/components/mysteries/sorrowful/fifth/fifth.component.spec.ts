import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorrowFulFifthComponent } from './fifth.component';

describe('SorrowFulFifthComponent', () => {
  let component: SorrowFulFifthComponent;
  let fixture: ComponentFixture<SorrowFulFifthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SorrowFulFifthComponent]
    });
    fixture = TestBed.createComponent(SorrowFulFifthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

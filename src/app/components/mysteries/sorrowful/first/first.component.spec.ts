import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorrowFulFirstComponent } from './first.component';

describe('SorrowFulFirstComponent', () => {
  let component: SorrowFulFirstComponent;
  let fixture: ComponentFixture<SorrowFulFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SorrowFulFirstComponent]
    });
    fixture = TestBed.createComponent(SorrowFulFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

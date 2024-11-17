import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorrowFulSecondComponent } from './second.component';

describe('SorrowFulSecondComponent', () => {
  let component: SorrowFulSecondComponent;
  let fixture: ComponentFixture<SorrowFulSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SorrowFulSecondComponent]
    });
    fixture = TestBed.createComponent(SorrowFulSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

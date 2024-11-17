import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaturdayComponent } from './saturday.component';

describe('SaturdayComponent', () => {
  let component: SaturdayComponent;
  let fixture: ComponentFixture<SaturdayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaturdayComponent]
    });
    fixture = TestBed.createComponent(SaturdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

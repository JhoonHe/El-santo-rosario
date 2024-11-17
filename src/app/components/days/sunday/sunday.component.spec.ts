import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SundayComponent } from './sunday.component';

describe('SundayComponent', () => {
  let component: SundayComponent;
  let fixture: ComponentFixture<SundayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SundayComponent]
    });
    fixture = TestBed.createComponent(SundayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

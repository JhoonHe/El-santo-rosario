import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WednesdayComponent } from './wednesday.component';

describe('WednesdayComponent', () => {
  let component: WednesdayComponent;
  let fixture: ComponentFixture<WednesdayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WednesdayComponent]
    });
    fixture = TestBed.createComponent(WednesdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoyFulFirstComponent } from './first.component';

describe('JoyFulFirstComponent', () => {
  let component: JoyFulFirstComponent;
  let fixture: ComponentFixture<JoyFulFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoyFulFirstComponent]
    });
    fixture = TestBed.createComponent(JoyFulFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

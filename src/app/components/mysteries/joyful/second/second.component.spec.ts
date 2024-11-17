import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoyFulSecondComponent } from './second.component';

describe('JoyFulSecondComponent', () => {
  let component: JoyFulSecondComponent;
  let fixture: ComponentFixture<JoyFulSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoyFulSecondComponent]
    });
    fixture = TestBed.createComponent(JoyFulSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

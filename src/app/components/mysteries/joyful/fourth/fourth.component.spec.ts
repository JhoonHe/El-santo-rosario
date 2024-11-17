import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoyFulFourthComponent } from './fourth.component';

describe('JoyFulFourthComponent', () => {
  let component: JoyFulFourthComponent;
  let fixture: ComponentFixture<JoyFulFourthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoyFulFourthComponent]
    });
    fixture = TestBed.createComponent(JoyFulFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

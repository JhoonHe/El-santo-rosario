import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoyFulThirdComponent } from './third.component';

describe('JoyFulThirdComponent', () => {
  let component: JoyFulThirdComponent;
  let fixture: ComponentFixture<JoyFulThirdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoyFulThirdComponent]
    });
    fixture = TestBed.createComponent(JoyFulThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

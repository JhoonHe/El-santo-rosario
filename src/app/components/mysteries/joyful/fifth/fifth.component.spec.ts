import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoyFulFifthComponent } from './fifth.component';

describe('JoyFulFifthComponent', () => {
  let component: JoyFulFifthComponent;
  let fixture: ComponentFixture<JoyFulFifthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoyFulFifthComponent]
    });
    fixture = TestBed.createComponent(JoyFulFifthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

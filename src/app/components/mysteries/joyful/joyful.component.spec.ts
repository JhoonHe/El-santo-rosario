import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoyfulComponent } from './joyful.component';

describe('JoyfulComponent', () => {
  let component: JoyfulComponent;
  let fixture: ComponentFixture<JoyfulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoyfulComponent]
    });
    fixture = TestBed.createComponent(JoyfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

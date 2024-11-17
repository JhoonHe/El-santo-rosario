import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GloriousComponent } from './glorious.component';

describe('GloriousComponent', () => {
  let component: GloriousComponent;
  let fixture: ComponentFixture<GloriousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GloriousComponent]
    });
    fixture = TestBed.createComponent(GloriousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

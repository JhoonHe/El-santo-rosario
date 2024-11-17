import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GloriousSecondComponent } from './second.component';

describe('GloriousSecondComponent', () => {
  let component: GloriousSecondComponent;
  let fixture: ComponentFixture<GloriousSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GloriousSecondComponent]
    });
    fixture = TestBed.createComponent(GloriousSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

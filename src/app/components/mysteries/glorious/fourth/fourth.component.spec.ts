import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GloriousFourthComponent } from './fourth.component';

describe('GloriousFourthComponent', () => {
  let component: GloriousFourthComponent;
  let fixture: ComponentFixture<GloriousFourthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GloriousFourthComponent]
    });
    fixture = TestBed.createComponent(GloriousFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

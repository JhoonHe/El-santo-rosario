import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GloriousThirdComponent } from './third.component';

describe('GloriousThirdComponent', () => {
  let component: GloriousThirdComponent;
  let fixture: ComponentFixture<GloriousThirdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GloriousThirdComponent]
    });
    fixture = TestBed.createComponent(GloriousThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

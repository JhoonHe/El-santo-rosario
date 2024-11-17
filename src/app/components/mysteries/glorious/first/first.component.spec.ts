import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GloriousFirstComponent } from './first.component';

describe('FirstComponent', () => {
  let component: GloriousFirstComponent;
  let fixture: ComponentFixture<GloriousFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GloriousFirstComponent]
    });
    fixture = TestBed.createComponent(GloriousFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

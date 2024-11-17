import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GloriuosFifthComponent } from './fifth.component';

describe('GloriuosFifthComponent', () => {
  let component: GloriuosFifthComponent;
  let fixture: ComponentFixture<GloriuosFifthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GloriuosFifthComponent]
    });
    fixture = TestBed.createComponent(GloriuosFifthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

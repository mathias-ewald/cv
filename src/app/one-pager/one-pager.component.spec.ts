import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePagerComponent } from './one-pager.component';

describe('OnePagerComponent', () => {
  let component: OnePagerComponent;
  let fixture: ComponentFixture<OnePagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnePagerComponent]
    });
    fixture = TestBed.createComponent(OnePagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHomePComponent } from './display-home-p.component';

describe('DisplayHomePComponent', () => {
  let component: DisplayHomePComponent;
  let fixture: ComponentFixture<DisplayHomePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayHomePComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayHomePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

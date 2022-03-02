import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBarComponent } from './css-bar.component';

describe('CssBarComponent', () => {
  let component: CssBarComponent;
  let fixture: ComponentFixture<CssBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

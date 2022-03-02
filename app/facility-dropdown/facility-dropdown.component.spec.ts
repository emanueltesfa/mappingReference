import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityDropdownComponent } from './facility-dropdown.component';

describe('FacilityDropdownComponent', () => {
  let component: FacilityDropdownComponent;
  let fixture: ComponentFixture<FacilityDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilityDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

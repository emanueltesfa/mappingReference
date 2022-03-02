import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnmappedServiceLinesComponent } from './unmapped-service-lines.component';

describe('UnmappedServiceLinesComponent', () => {
  let component: UnmappedServiceLinesComponent;
  let fixture: ComponentFixture<UnmappedServiceLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnmappedServiceLinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnmappedServiceLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

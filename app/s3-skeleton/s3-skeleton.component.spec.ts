import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3SkeletonComponent } from './s3-skeleton.component';

describe('S3SkeletonComponent', () => {
  let component: S3SkeletonComponent;
  let fixture: ComponentFixture<S3SkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S3SkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(S3SkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

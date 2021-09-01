import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCourseTabsComponent } from './my-course-tabs.component';

describe('MyCourseTabsComponent', () => {
  let component: MyCourseTabsComponent;
  let fixture: ComponentFixture<MyCourseTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCourseTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCourseTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

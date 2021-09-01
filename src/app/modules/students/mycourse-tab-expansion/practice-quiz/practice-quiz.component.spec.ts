import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeQuizComponent } from './practice-quiz.component';

describe('PracticeQuizComponent', () => {
  let component: PracticeQuizComponent;
  let fixture: ComponentFixture<PracticeQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

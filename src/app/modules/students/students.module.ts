import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BaseModule } from 'src/app/components/base/base.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { GalleryDemoModule } from 'src/app/components/gallery/gallery.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CKEditorModule } from 'ngx-ckeditor';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FileUploadModule } from 'ng2-file-upload';
import { ViewActivityComponent } from './view-activity/view-activity.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseStatusComponent } from './course-status/course-status.component';
import {RoundProgressModule,ROUND_PROGRESS_DEFAULTS} from 'angular-svg-round-progressbar';
import { EnrolledCoursesComponent } from './enrolled-courses/enrolled-courses.component';
import { MyCourseTabsComponent } from './my-course-tabs/my-course-tabs.component';
import { MyCourseComponent } from './my-course/my-course.component';
import { LearningContentComponent } from './mycourse-tab-expansion/learning-content/learning-content.component';
import { PracticeQuizComponent } from './mycourse-tab-expansion/practice-quiz/practice-quiz.component';
import { CodingChallengeComponent } from './mycourse-tab-expansion/coding-challenge/coding-challenge.component';
import { AssessmentsComponent } from './mycourse-tab-expansion/assessments/assessments.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddActivityComponent,
    ViewActivityComponent,
    CourseStatusComponent,
    EnrolledCoursesComponent,
    MyCourseTabsComponent,
    MyCourseComponent,
    LearningContentComponent,
    PracticeQuizComponent,
    CodingChallengeComponent,
    AssessmentsComponent
  ],
  imports: [
    CKEditorModule,
    AngularEditorModule,
    SharedModule,
    CommonModule,
    StudentsRoutingModule,
    BaseModule,
    MaterialModule,
    GalleryDemoModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FileUploadModule,
    NgxDatatableModule,
    RoundProgressModule
  ], 
  providers: [{
      provide: ROUND_PROGRESS_DEFAULTS,
      useValue: {
        color: '#f00',
        background: '#0f0'
      }
    }
  ]
})
export class StudentsModule { }

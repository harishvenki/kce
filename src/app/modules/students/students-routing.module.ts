import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { CourseStatusComponent } from './course-status/course-status.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyCourseComponent } from './my-course/my-course.component';
import { ViewActivityComponent } from './view-activity/view-activity.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: "add-activity",
    component: AddActivityComponent
  },
  {
    path: "view-activity",
    component: ViewActivityComponent
  },
  {
    path: 'my-course',
    component: MyCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }

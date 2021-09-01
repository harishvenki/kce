import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ContentLayoutComponent } from './shared/components/layout/content-layout/content-layout.component';
import { FullLayoutComponent } from './shared/components/layout/full-layout/full-layout.component';
import { content } from "./shared/routes/content-routes";
import { full } from './shared/routes/full.routes';
import { AdminGuard } from './shared/guard/admin.guard';
import { CsvViewerComponent } from 'src/app/custom-component/csv-viewer/csv-viewer.component';

const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: () => import('src/app/components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'csv-viewer',
    component: CsvViewerComponent,
  },
  {
    path: 'student',
    loadChildren: () => import('src/app/modules/students/students.module').then(m => m.StudentsModule)
  },
  {
    path: '',
    redirectTo: 'dashboard/default',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('src/app/pages/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [AdminGuard],
    children: content
  },
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [AdminGuard],
    children: full
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

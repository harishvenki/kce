import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ToastrModule } from 'ngx-toastr';

import { AuthService } from './shared/services/firebase/auth.service';
import { AdminGuard } from './shared/guard/admin.guard';
import { SecureInnerPagesGuard } from './shared/guard/SecureInnerPagesGuard.guard';
import { CookieService } from 'ngx-cookie-service';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { CsvViewerComponent } from 'src/app/custom-component/csv-viewer/csv-viewer.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { GalleryDemoModule } from 'src/app/components/gallery/gallery.module';
import { SearchResultModule } from 'src/app/components/search-result/search-result.module';
import { BaseModule } from 'src/app/components/base/base.module';
import { StudentsModule } from './modules/students/students.module';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
   return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CsvViewerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    StudentsModule,
    MaterialModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    GalleryDemoModule,  
    SearchResultModule,
    BaseModule,
    RoundProgressModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [AuthService, AdminGuard, SecureInnerPagesGuard, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

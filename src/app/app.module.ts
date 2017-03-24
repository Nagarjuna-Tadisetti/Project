import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppLogin } from './app.login';
import { AppStudent } from './app.student';
import { AppRegister } from './app.register';
import {AuthGuard} from './app.authguard';
import {AppLoginTeacher} from './app.login-teacher';
import { AppRegisterTeacher } from './app.register-teacher';
import { Activities, Attendance, Homeworks, PersonalDetails, Progress, SchoolDetails, StudentProfile} from './student/index';
import {AppAttendance, AppDetails, AppHomeworks, AppTeacher} from './teacher/index';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: AppLogin },
  { path: 'login_teacher',  component: AppLoginTeacher },
  { path: 'student',  component: AppStudent, canActivate: [AuthGuard],
    children: [
        { path: 'activities', component: Activities },
        { path: 'attendance', component: Attendance },
        { path: 'homeworks', component: Homeworks },
        { path: 'personaldetails', component: PersonalDetails },
        { path: 'progress', component: Progress },
        { path: 'schooldetails', component: SchoolDetails },
        { path: 'profile', component: StudentProfile }
    ]},
  { path: 'teacher',  component: AppTeacher, canActivate: [AuthGuard],
    children: [
        { path: 'attendance', component: AppAttendance },
        { path: 'homeworks', component: AppHomeworks },
        { path: 'details', component: AppDetails },
  ]},
  { path: 'register',  component: AppRegister, canActivate: [AuthGuard]},
  { path: 'register_teacher',  component: AppRegisterTeacher, canActivate: [AuthGuard]}
];


@NgModule({
  declarations: [
    AppComponent,AppLogin,AppStudent,AppRegister,Activities, Attendance, Homeworks, PersonalDetails, Progress, SchoolDetails, AppLoginTeacher, AppRegisterTeacher, StudentProfile, AppAttendance, AppDetails, AppHomeworks, AppTeacher
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
      
  ],
  exports: [ RouterModule ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { Activities, Attendance, Homeworks, PersonalDetails, Progress, SchoolDetails} from './student/index';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: AppLogin },
  { path: 'student',  component: AppStudent, canActivate: [AuthGuard],
    children: [
        { path: 'activities', component: Activities },
        { path: 'attendance', component: Attendance },
        { path: 'homeworks', component: Homeworks },
        { path: 'personaldetails', component: PersonalDetails },
        { path: 'progress', component: Progress },
        { path: 'schooldetails', component: SchoolDetails },
    ]},
  { path: 'register',  component: AppRegister, canActivate: [AuthGuard]}
];


@NgModule({
  declarations: [
    AppComponent,AppLogin,AppStudent,AppRegister,Activities, Attendance, Homeworks, PersonalDetails, Progress, SchoolDetails
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

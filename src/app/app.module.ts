import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppLogin } from './app.login';
import { AppStudent } from './app.student';
import { AppRegister } from './app.register';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: AppLogin },
  { path: 'student',  component: AppStudent },
  { path: 'register',  component: AppRegister }
];


@NgModule({
  declarations: [
    AppComponent,AppLogin,AppStudent,AppRegister
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

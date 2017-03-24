import { Component } from '@angular/core';

@Component({
  selector: 'register-teacher',
  templateUrl: './app.register-teacher.html',
  styleUrls: ['./app.register-teacher.css']
})
export class AppRegisterTeacher {
valid : number;
    constructor() { 
        this.valid =0;
    }
register(): void {
        this.valid=1;
    }
}
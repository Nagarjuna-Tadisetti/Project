import { Component } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './app.register.html',
  styleUrls: ['./app.register.css']
})
export class AppRegister {
valid : number;
    constructor() { 
        this.valid =0;
    }
register(): void {
        this.valid=1;
    }
}
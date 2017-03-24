import { Component } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'login-teacher',
  templateUrl: './app.login-teacher.html',
  styleUrls: ['./app.login-teacher.css']
})
export class AppLoginTeacher {
    
    constructor(private router: Router) { }
  
    login(): void {
        this.router.navigate(['/teacher']);
    }
}

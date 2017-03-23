import { Component } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './app.login.html',
  styleUrls: ['./app.login.css']
})
export class AppLogin {
    
    constructor(private router: Router) { }
  
    login(): void {
        this.router.navigate(['/student']);
    }
}

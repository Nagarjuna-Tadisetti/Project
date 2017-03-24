import { Component } from '@angular/core';

@Component({
  selector: 'attendance',
  templateUrl: './attendance.html',
  styleUrls: ['./attendance.css']
})
export class AppAttendance {
submitted:number;
date:Date;
constructor(){
    this.submitted=0;
    this.date=new Date();
}
submit() : void {
    this.submitted=1;
}
 
}
import { Component } from '@angular/core';

@Component({
  selector: '',
  templateUrl: './student.homeworks.html',
  styleUrls: ['./student.homeworks.css']
})
export class  Homeworks {
submitted:number;
constructor(){
this.submitted=0;
}
submit() : void {
this.submitted=1;
}
  
}
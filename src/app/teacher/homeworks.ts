import { Component } from '@angular/core';

@Component({
  selector: 'homeworks',
  templateUrl: './homeworks.html',
  styleUrls: ['./homeworks.css']
})
export class AppHomeworks {
submitted:number;
constructor(){
    this.submitted=0;
}
submit() : void{
    this.submitted=1;
}
  
}
import { Component } from '@angular/core';

@Component({
  selector: '',
  templateUrl: './student.profile.html',
  styleUrls: ['./student.profile.css']
})
export class StudentProfile {
submitted:number;
    constructor(){
        this.submitted=0;
    }
    submit(): void{
        this.submitted=1;
    }
  
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  weight!:number;
  height!:number;
  bmiValue:number|any;

  bmiConverter(){
    this.bmiValue = this.weight/(this.height*this.height);
  }
}

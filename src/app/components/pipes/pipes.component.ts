import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  dateTitle:string = 'Built in Date Pipes';
  date :  Date = new Date();
  currencyTitle:string ='Currency Pipes';
  currency : number = 2628;
  text:string = 'pursuit Of Happyness'
}

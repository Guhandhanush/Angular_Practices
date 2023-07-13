import { Component } from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent {
  inputValue!:number;
  convertedValue!:number|any;

  usd(){
    this.convertedValue = this.inputValue*82.62+' $';
  }

  euro(){
    this.convertedValue = this.inputValue*90.63+' Euro';
  }
}

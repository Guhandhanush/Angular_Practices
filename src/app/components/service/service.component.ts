import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  countries: any;
  title: string = "Content from Rest Api";
  constructor(private serv: RestApiService) { }
  ngOnInit() {
    this.serv.getProducts().subscribe(
      res => {
        this.countries = res;
      }
    )
  }
}

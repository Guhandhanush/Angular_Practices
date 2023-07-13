import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }
}

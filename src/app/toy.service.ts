import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToyService {

  constructor(private http: HttpClient) { }

  getToys()
  {
    return this.http.get("http://localhost:3000/products");
  }

  getMobile(i){
    return this.http.get(`http://localhost:3000/products/${i}`);
  }
  getLap(){
    return this.http.get("http://localhost:3000/laptops");
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LapService {

  constructor(private ht: HttpClient) { }

  getLap(){
    return this.ht.get("http://localhost:3000/laptops");
  }
}

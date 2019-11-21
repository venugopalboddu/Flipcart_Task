import { Component, OnInit } from '@angular/core';
import { ToyService } from '../toy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  fdata: any;

  constructor(private s: ToyService, private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.s.getToys().subscribe((res) => {
      this.fdata = res;
      console.log("Mobiles", this.fdata);
    });


  }

}

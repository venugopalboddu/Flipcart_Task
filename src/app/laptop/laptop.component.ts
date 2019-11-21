import { LapService } from '../lap.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
  ldata: any;

  constructor(private s: LapService) { }

  ngOnInit() {
    this.getL();
  }
  getL() {
    this.s.getLap().subscribe((resl) => {
      this.ldata = resl;
      console.log("Laptops", this.ldata);
    });

  }
}

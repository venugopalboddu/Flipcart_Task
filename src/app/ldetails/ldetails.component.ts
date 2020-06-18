import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToyService } from '../toy.service';
import { LapService } from '../lap.service';


@Component({
  selector: 'app-ldetails',
  templateUrl: './ldetails.component.html',
  styleUrls: ['./ldetails.component.css']
})
export class LdetailsComponent implements OnInit {
   ldata:any;
  constructor(private ar: ActivatedRoute, private s: LapService ) { }

  ngOnInit() {
    console.log(this.ar.snapshot.params.name);
    var lap = this.ar.snapshot.params.name;
    this.s.getLap(lap).subscribe((res)=>{
      this.ldata = res;
      console.log("Laptops", this.ldata);
    });
    
  }
}

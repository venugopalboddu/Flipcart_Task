import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ldetails',
  templateUrl: './ldetails.component.html',
  styleUrls: ['./ldetails.component.css']
})
export class LdetailsComponent implements OnInit {
   ldata:any;
  constructor(private ar: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.ar.snapshot.params.name, this.ar.snapshot.params.price, this.ar.snapshot.params.img);

    this.ar.params.subscribe((res)=>{
      this.ldata = res;
      console.log('Lap', this.ldata);
    })
  }
}

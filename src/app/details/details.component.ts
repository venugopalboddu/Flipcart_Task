import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToyService } from '../toy.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data: any;

  constructor(private ar: ActivatedRoute, private s: ToyService) { }

  ngOnInit() {
    console.log(this.ar.snapshot.params.id);
    var m = this.ar.snapshot.params.id;

    this.s.getMobile(m).subscribe((res)=>{
      this.data = res;
      console.log("Mobiles", this.data);
    });

  }

}

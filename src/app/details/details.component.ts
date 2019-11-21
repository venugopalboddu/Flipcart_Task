import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data: any;

  constructor(private ar: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.ar.snapshot.params.id, this.ar.snapshot.params.name, this.ar.snapshot.params.img);
    this.ar.params.subscribe((res) => {
      this.data = res;
    });
    console.log(this.data.id, this.data.name);


  }

}

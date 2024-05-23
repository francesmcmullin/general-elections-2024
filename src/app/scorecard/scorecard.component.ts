import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TdService } from '../services/td.service';


@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
  
})
export class ScorecardComponent implements OnInit {

  td:any
  constructor(private tdService:TdService, private route:ActivatedRoute){

  }

  ngOnInit() {
    this.tdService.candidates$.subscribe(
      res => this.td = res.find(c => c.name === this.route.snapshot.params['name']),
      err => { }
    );
  }

}

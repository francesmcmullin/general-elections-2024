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
    this.td = this.tdService.getTd(this.route.snapshot.params['name'])
    
  }

}

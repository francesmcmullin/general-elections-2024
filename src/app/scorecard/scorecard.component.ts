import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event.service';


@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
  
})
export class ScorecardComponent implements OnInit {

  event:any
  constructor(private eventService:EventService, private route:ActivatedRoute){

  }

  ngOnInit() {
    this.event = this.eventService.getEvent(this.route.snapshot.params['name'])
    
  }

}

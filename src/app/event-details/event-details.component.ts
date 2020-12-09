import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event.service';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
  
})
export class EventDetailsComponent implements OnInit {
  event:any

  totalResult:number

  mainResult:number

  // className:any

  constructor(private eventService:EventService, private route:ActivatedRoute){

  }

  ngOnInit() {
    this.event = this.eventService.getEvent(this.route.snapshot.params['name'])
    
    this.mainResult = this.event.tally.positiveVotes + this.event.tally.negativeVotes

    this.totalResult = this.event.tally.positiveVotes + this.event.tally.negativeVotes + this.event.tally.absentVotes

    // if(this.event.moreThan3 = false && this.event.notTdVotes < 21) {
    //   this.className = 'notEnough';
    // }
  
  }

}

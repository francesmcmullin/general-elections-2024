import { Component, Input, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';


@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
  
})
export class EventThumbnailComponent implements OnInit {

  @Input() event:any

  @Input() checkbox:boolean

  events: any[]

  compareEvents: any[]

  constructor(private eventService: EventService) { }
  
  ngOnInit() {
    this.events = this.eventService.getEvents()
  }
  
compareVal(e) {
  if(e.target.checked){
    this.event.comparison=true;
    this.compareEvents = this.events.filter(event => event.comparison == true);

  }
  else{
      this.event.comparison=false;
      this.compareEvents = this.events.filter(event => event.comparison == true);

    }
}


// unTick(compareEvent: any) {
  // this.compareEvents.splice(index,1);
  // const index = this.compareEvents.indexOf(compareEvent);
  // this.compareEvents.splice(index, 1);
// }
}  
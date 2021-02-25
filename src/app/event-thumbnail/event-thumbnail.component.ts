import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { InteractionService } from '../services/interaction.service';


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

  constructor(private eventService: EventService, 
              private _interactionService: InteractionService,
              private scroll: ViewportScroller) { }
  
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

spotChange(){
  this._interactionService.sendMessage('Checkbox Clicked');
}

scrollToTop(){
  this.scroll.scrollToPosition([0,0]);
}

}  
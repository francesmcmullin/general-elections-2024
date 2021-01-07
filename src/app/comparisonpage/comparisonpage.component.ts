import { EventService } from './../services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparisonpage',
  templateUrl: './comparisonpage.component.html',
  styleUrls: ['./comparisonpage.component.css']
})
export class ComparisonpageComponent implements OnInit {
  events: any[]
  compareEvents: any[]

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents()
    this.compareEvents = this.events.filter(event => event.comparison == true);

    // let myItems = myArray.filter(item => item.name === "name");
  }
}

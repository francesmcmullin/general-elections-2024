import { EventService } from '../services/event.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { InteractionService } from '../services/interaction.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html', 
  styleUrls: ['./events-list.component.css']
})

export class EventsListComponent implements OnInit {
  events: any[]
  searchValue: string; //THIS
  compareEvents: any[]

  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event){
    this.pageYoffset = window.pageYOffset;
  }

  constructor(private eventService: EventService, 
              private scroll: ViewportScroller, 
              private _interactionService: InteractionService,
              private router: Router) { }


  ngOnInit() {
    this.events = this.eventService.getEvents()
    this._interactionService.thumbnailMessage$
      .subscribe(
        message => {
          this.compareEvents = this.events.filter(event => event.comparison == true);
        }
      )
    this.compareEvents = this.events.filter(event => event.comparison == true);
  }

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }
  

  openComparison(){
    this.router.navigate(['/app-comparisonpage']);
  }

  untickAll(){   
    this.compareEvents.forEach((event) => {
      event.comparison = false;
    });
    this._interactionService.sendMessage('Checkbox Clicked');
  }

}

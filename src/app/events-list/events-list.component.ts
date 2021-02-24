import { EventService } from '../services/event.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { InteractionService } from '../services/interaction.service';


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

  constructor(private eventService: EventService, private scroll: ViewportScroller, private _interactionService: InteractionService) { }


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

  // myButton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  
  
  // scrollFunction() {
  //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //     this.myButton.style.display = "block";
  //   } else {
  //     this.myButton.style.display = "none";
  //   }
  // }

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }
  
  // When the user clicks on the button, scroll to the top of the document
  // function topFunction() {
  //   document.body.scrollTop = 0; // For Safari
  //   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  // } 

  testMsg(){
    this.compareEvents = this.events.filter(event => event.comparison == true);
    alert(this.compareEvents.length);
    // console.log(this.compareCount);
  }

  updateArray(){ //THIS NEEDS TO BE TRIGGERED BY CHECKBOX
    this.compareEvents = this.events.filter(event => event.comparison == true);
  }
}

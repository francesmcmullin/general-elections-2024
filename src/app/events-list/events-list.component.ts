import { EventService } from '../services/event.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html', 
  styleUrls: ['./events-list.component.css']
})

export class EventsListComponent implements OnInit {
  events: any[]
  searchValue: string; //THIS

  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event){
    this.pageYoffset = window.pageYOffset;
  }

  constructor(private eventService: EventService, private scroll: ViewportScroller) { }

  ngOnInit() {
    this.events = this.eventService.getEvents()
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

}

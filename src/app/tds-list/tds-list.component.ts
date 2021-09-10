import { TdService } from '../services/td.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { InteractionService } from '../services/interaction.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tds-list',
  templateUrl: './tds-list.component.html', 
  styleUrls: ['./tds-list.component.css']
})

export class TdsListComponent implements OnInit {
  tds: any[]
  searchValue: string; //THIS
  compareTds: any[]

  pageYoffset = 0;
  @HostListener('window:scroll', ['$td']) onScroll(event){
    this.pageYoffset = window.pageYOffset;
  }

  constructor(private tdService: TdService, 
              private scroll: ViewportScroller, 
              private _interactionService: InteractionService,
              private router: Router) { }


  ngOnInit() {
    this.tds = this.tdService.getTds()
    this._interactionService.thumbnailMessage$
      .subscribe(
        message => {
          this.compareTds = this.tds.filter(td => td.comparison == true);
        }
      )
    this.compareTds = this.tds.filter(td => td.comparison == true);
  }

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }
  

  openComparison(){
    this.router.navigate(['/app-comparisonpage']);
  }

  untickAll(){   
    this.compareTds.forEach((td) => {
      td.comparison = false;
    });
    this._interactionService.sendMessage('Checkbox Clicked');
  }

}

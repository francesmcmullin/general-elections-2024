import { TdService } from './../services/td.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-comparisonpage',
  templateUrl: './comparisonpage.component.html',
  styleUrls: ['./comparisonpage.component.css']
})
export class ComparisonpageComponent implements OnInit {
  tds: any[]
  compareTds: any[]

  pageYoffset = 0;
  @HostListener('window:scroll', ['$td']) onScroll(td){
    this.pageYoffset = window.pageYOffset;
  }

  constructor(private tdService: TdService,
              private scroll: ViewportScroller,
              private _interactionService: InteractionService) { }

  ngOnInit() {
    this.tdService.candidates$.subscribe(
      res => this.tds = res,
      err => { }
    );
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

  untickAll(){   
    this.compareTds.forEach((td) => {
      td.comparison = false;
    });
    this._interactionService.sendMessage('Checkbox Clicked');
  }
}

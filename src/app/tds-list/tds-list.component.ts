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


  areas = [
    'Carlow-Kilkenny',
    'Cavan-Monaghan',
    'Clare',
    'Cork East',
    'Cork North-Central',
    'Cork North-West',
    'Cork South-Central',
    'Cork South-West',
    'Donegal',
    'Dublin Bay North',
    'Dublin Bay South',
    'Dublin Central',
    'Dublin Fingal East',
    'Dublin Fingal West',
    'Dublin Mid-West',
    'Dublin North-West',
    'Dublin Rathdown',
    'Dublin South-Central',
    'Dublin South-West',
    'Dublin West',
    'Dún Laoghaire',
    'Galway East',
    'Galway West',
    'Kerry',
    'Kildare North',
    'Kildare South',
    'Laois',
    'Limerick City',
    'Limerick County',
    'Longford-Westmeath',
    'Louth',
    'Mayo',
    'Meath East',
    'Meath West',
    'Offaly',
    'Roscommon-Galway',
    'Sligo-Leitrim',
    'Tipperary North',
    'Tipperary South',
    'Waterford',
    'Wexford',
    'Wicklow',
    'Wicklow-Wexford',
    ];


  ngOnInit() {
    this.tdService.candidates$.subscribe(
      res => {
        this.tds = res
        this.compareTds = this.tds.filter(td => td.comparison == true);
      },
      err => { }
    );
    this._interactionService.thumbnailMessage$
      .subscribe(
        message => {
          this.compareTds = this.tds.filter(td => td.comparison == true);
        }
      )
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

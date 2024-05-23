import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TdService } from '../services/td.service';
import { InteractionService } from '../services/interaction.service';


@Component({
  selector: 'app-td-thumbnail',
  templateUrl: './td-thumbnail.component.html',
  styleUrls: ['./td-thumbnail.component.css']
  
})
export class TdThumbnailComponent implements OnInit {

  @Input() td:any

  photoUrl:string
  scoreImage:string

  @Input() checkbox:boolean

  tds: any[]

  compareTds: any[]

  constructor(private tdService: TdService, 
              private _interactionService: InteractionService,
              private scroll: ViewportScroller) { }
  
  ngOnInit() {
    this.tdService.candidates$.subscribe(
      res => {
        this.tds = res
        if(!!this.td.photo_url) {
          this.photoUrl = this.td.photo_url.startsWith('https') ? this.td.photo_url : `https://action.uplift.id/${this.td.photo_url}`
        }
        this.scoreImage = this.td.pledge_status === "pledged" ? './assets/images/positive.jpg' : './assets/images/negative.jpg'
      },
      err => { }
    );
  }
  
compareVal(event) {
  if(event.target.checked){
    this.td.comparison=true;
    this.compareTds = this.tds.filter(td => td.comparison == true);

  }
  else{
      this.td.comparison=false;
      this.compareTds = this.tds.filter(td => td.comparison == true);

    }
}

spotChange(){
  this._interactionService.sendMessage('Checkbox Clicked');
}

scrollToTop(){
  this.scroll.scrollToPosition([0,0]);
}

}  
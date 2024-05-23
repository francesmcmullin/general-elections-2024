import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TdService as TdService } from '../services/td.service';


@Component({
  selector: 'app-td-details',
  templateUrl: './td-details.component.html',
  styleUrls: ['./td-details.component.css']
  
})
export class TdDetailsComponent implements OnInit {
  td:any

  totalResult:number

  mainResult:number
  photoUrl:string

  // className:any

  constructor(private tdService:TdService, private route:ActivatedRoute){

  }

  ngOnInit() {
    this.tdService.candidates$.subscribe(
      res => {
        this.td = res.find(c => c.name === this.route.snapshot.params['name'])
        if(!!this.td.photo_url) {
          this.photoUrl = this.td.photo_url.startsWith('https') ? this.td.photo_url : `https://action.uplift.ie${this.td.photo_url}`
        }
      },
      err => { }
    );
    
    this.mainResult = this.td.tally.positiveVotes + this.td.tally.negativeVotes

    this.totalResult = this.td.tally.positiveVotes + this.td.tally.negativeVotes + this.td.tally.absentVotes

    // if(this.td.moreThan3 = false && this.td.notTdVotes < 21) {
    //   this.className = 'notEnough';
    // }
  
  }

}

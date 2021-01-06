import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
  
})
export class EventThumbnailComponent implements OnInit {

  @Input() event:any

  @Input() checkbox:boolean

  constructor() { }

  ngOnInit(): void {
    // if(this.event.comparison=true){
    //   this.checkbox = checked
    // }
  }
  
  compareValue(){
    // alert("Clicked");
    console.log("Checked!");
  }

//   compareVal(){
//     if(this.checkbox=true){
//       alert("Checked!");
//       console.log("Checked!");
//       this.event.comparison == true;
//         }
//   else {
//        alert("UnChecked!");
//        console.log("UnChecked!");
//        this.event.comparison == false;
//         }
//   }

compareVal(e) {
  if(e.target.checked){
    // alert("Checked!");
    console.log("Checked!");
    this.event.comparison=true;
  }
  else{
      // alert("Unchecked!");
      console.log("UnChecked!");
      this.event.comparison=false;
    }
  }

}

  
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
    // if(this.event.comparison==true){
    //   this.checkbox === true;
    // }
    
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
    this.event.comparison=true;
    // this.event.name="Ticked";
    // this.checkbox.valueOf() == true;
  }
  else{
      this.event.comparison=false;
      // this.event.name="Unticked";
      // this.checkbox.valueOf() == false;
    }
}


// unTick(compareEvent: any) {
  // this.compareEvents.splice(index,1);
  // const index = this.compareEvents.indexOf(compareEvent);
  // this.compareEvents.splice(index, 1);
// }
}  
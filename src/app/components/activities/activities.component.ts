import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  constructor() {   }

  //mang cac hoat dong
  activities: Array<string> = [];

  //bien giu input hoat dong
  inputActivity: string = '';

  ngOnInit(): void {
    this.activities = [
      'Xem phim', 'Hoc bai'
    ]

  
  }

  deleteActivity (id:number) {
    //gan activities bang activities moi sau khi loai di activities[id]
    this.activities = this.activities.filter((value,i) => i !== id);
  }

  addActivity() {
    //them activity vao mang
    this.activities.push(this.inputActivity);
    this.inputActivity = "";
  }


}

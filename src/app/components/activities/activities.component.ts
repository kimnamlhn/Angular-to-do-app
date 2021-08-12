import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  constructor() {   }
  activities: Array<string> = [];

  ngOnInit(): void {
    this.activities = [
      'Xem phim', 'Hoc bai'
    ]

  
  }

  deleteActivity (id:number) {
    //gan activities bang activities moi sau khi loai di activities[id]
    this.activities = this.activities.filter((value,i) => i !== id);
  }


}

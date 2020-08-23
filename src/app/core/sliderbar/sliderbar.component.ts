import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliderbar',
  templateUrl: './sliderbar.component.html',
  styleUrls: ['./sliderbar.component.scss']
})
export class SliderbarComponent implements OnInit {

  constructor() { }

  today:string='day1'
  ngOnInit() {
    this.today=`day${new Date().getDate()}`
  }

}

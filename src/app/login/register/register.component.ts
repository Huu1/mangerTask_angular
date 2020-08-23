import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  items:Array<string>=[]
  ngOnInit(): void {
    for (let i = 1; i <= 8; i++) {
      this.items.push(`avatars:svg-${i}`)      
    }
  }

}

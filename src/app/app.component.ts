import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDark:boolean=false;
  themeToggle(e:boolean){
    this.isDark=e
  }
}

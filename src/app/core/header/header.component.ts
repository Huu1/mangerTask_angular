import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Output() navToggle =new EventEmitter<void>();
  @Output() darkToggle =new EventEmitter<void>();
  ngOnInit(): void {
  }
  openMenu(){
    this.navToggle.emit()
  }
  themeToggle(e: { checked: void; }){
    this.darkToggle.emit(e.checked)
  }
}

import { Component, OnInit, Input, Output ,EventEmitter, HostBinding, HostListener} from '@angular/core';
import { cardAnim } from "src/app/animations/card";
@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations:[
    cardAnim
  ]
})
export class ProjectItemComponent implements OnInit {

  constructor() { }

  @Input() project
  @Output() inviteEmit=new EventEmitter<void>()
  @Output() updateEmit=new EventEmitter<void>()
  @Output() deleteEmit=new EventEmitter<void>()
  @HostBinding('@card') cardState='out'
  @HostListener('mouseenter')
  onmouseEnter(){
    this.cardState='in'
  }
  @HostListener('mouseleave')
  onmouseLeave(){
    this.cardState='out'
  }

  ngOnInit(): void {
  }
  inviteHandle(){
    this.inviteEmit.emit()
  }
  emitUpdate(){
    this.updateEmit.emit()
  }
  emitDelete(){
    this.deleteEmit.emit()
  }

}

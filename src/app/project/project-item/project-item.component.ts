import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  constructor() { }

  @Input() project
  @Output() inviteEmit=new EventEmitter<void>()
  @Output() updateEmit=new EventEmitter<void>()
  @Output() deleteEmit=new EventEmitter<void>()
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

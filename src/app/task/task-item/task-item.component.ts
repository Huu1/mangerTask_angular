import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  constructor() { }

  @Input() item
  @Input() avatar
  @Output() taskUpdate=new EventEmitter<void>()
  ngOnInit(): void {
    this.avatar =
      this.item.avatar ? this.item.owner.avatar : 'unassigned'
  }
  taskUpdateClick(){
    this.taskUpdate.emit()
  }
  stopPropagation(e:Event){
    e.stopPropagation()
  }

}

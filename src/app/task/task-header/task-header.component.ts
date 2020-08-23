import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {

  constructor() { }

  @Input() header="header"
  @Output() newTask=new EventEmitter()
  @Output() moveTask=new EventEmitter()
  @Output() delTask=new EventEmitter()
  @Output() editTask=new EventEmitter()
  ngOnInit(): void {
  }
  onNewTask(){
    this.newTask.emit()
  }
  onMoveAllclick(){
    this.moveTask.emit()
  }
  onDeleteclick(){
    this.delTask.emit()
  }
  onEditAllclick(){
    this.editTask.emit()
  }

}

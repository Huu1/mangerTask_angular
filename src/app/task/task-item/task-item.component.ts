import { Component, OnInit, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
import { itemAnim } from "../../animations/item";
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [itemAnim]
})
export class TaskItemComponent implements OnInit {

  constructor() { }

  @Input() item
  @Input() avatar
  @Output() taskUpdate = new EventEmitter<void>()

  @HostBinding('@item') cardState = 'out'
  widerPriority = 'in'
  @HostListener('mouseenter')
  onmouseEnter() {
    this.widerPriority = 'out'
  }
  @HostListener('mouseleave')
  onmouseLeave() {
    this.widerPriority = 'in'
  }

  ngOnInit(): void {
    this.avatar =
      this.item.avatar ? this.item.owner.avatar : 'unassigned'
  }
  taskUpdateClick() {
    this.taskUpdate.emit()
  }
  stopPropagation(e: Event) {
    e.stopPropagation()
  }

}

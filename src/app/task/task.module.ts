import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { SharedModule } from '../shared/shared.module';
import { TaskRoutingModule } from './task-routing.moudle';
import { NewTaskComponent } from './new-task/new-task.component';
import { CopyTaskComponent } from './copy-task/copy-task.component';
import { NewTaskListComponent } from './new-task-list/new-task-list.component';
@NgModule({
  declarations: [TaskHomeComponent, TaskListComponent, TaskHeaderComponent, TaskItemComponent, NewTaskComponent, CopyTaskComponent, NewTaskListComponent],
  imports: [
    SharedModule,
    TaskRoutingModule
  ],
  entryComponents:[
    NewTaskComponent
  ]
})
export class TaskModule { }

import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskComponent } from '../new-task/new-task.component'
import { CopyTaskComponent } from '../copy-task/copy-task.component'
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component'
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { sliderToTight } from "../../animations/route";
@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [sliderToTight]
})
export class TaskHomeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
  
  @HostBinding('@routeAnim') state
  lists = [
    {
      id: 0,
      name: '进行中',
      tasks: [
        {
          id: 0,
          desc: '代码审查',
          complete: true,
          priority: 1,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatars:svg-10'
          },
          dueDate: new Date()
        },
        {
          id: 1,
          desc: '代码审查',
          complete: false,
          priority: 1,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminer: new Date()
        },
        {
          id: 2,
          desc: '代码审查',
          complete: true,
          priority: 2,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date()
        }
      ]
    },
    {
      id: 0,
      name: '已完成',
      tasks: [
        {
          id: 0,
          desc: '代码审查',
          priority: 0,

          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatars:svg-13'
          },
          dueDate: new Date()
        },
        {
          id: 1,
          desc: '代码审查',
          priority: 2,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatars:svg-13'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '代码审查',
          priority: 2,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatars:svg-13'
          },
          dueDate: new Date()
        }
      ]
    },
  ]
  ngOnInit(): void {
  }
  lunchNewTaskDialog() {
    const dialogRef = this.dialog.open(NewTaskComponent, { data: { title: '新建任务' } })
  }
  lunchCopyTaskDialog() {
    this.dialog.open(CopyTaskComponent, { data: { lists: this.lists } })
  }
  lunchTaskUpdateDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, { data: { title: '修改任务', task } })
  }
  lunchDelTaskDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: '删除任务', content: 'are you sure?' } })
  }
  lunchEditTask() {
    const dialogRef = this.dialog.open(NewTaskListComponent, { data: { title: '更改名称' } })
  }
  addNewListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, { data: { title: '新增列表名称' } })
  }

}

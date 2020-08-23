import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  title=''
  constructor(
    @Inject(MAT_DIALOG_DATA) private data
  ) { }

  items=[
    {
      label:'紧急',
      value:1
    },
    {
      label:'重要',
      value:2
    },
    {
      label:'普通',
      value:3
    },
  ]
  ngOnInit(): void {
    this.title=this.data.title
  }

}

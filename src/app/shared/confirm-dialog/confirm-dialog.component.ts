import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h2 matDialogTitle>{{title}}</h2>
    <div mat-dialog-content>
        {{content}} 
    </div>
    <div mat-dialog-actions>
        <button color='primary' type="button" mat-raised-button (click)="onClick(true)">保存</button>
        <button type="button" mat-button mat-dialog-close (click)="onClick(false)">关闭</button>
    </div>
  `,
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  title=''
  content=''
  constructor(private dialogRef:MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    ) { }
 
  ngOnInit(): void {
    this.title=this.data.title
    this.content=this.data.content
  }
  onClick(flag:boolean){
    this.dialogRef.close(flag)
  }

}

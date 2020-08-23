import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog'
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  title=''
  constructor(
    //读取对话框的数据
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog:MatDialogRef<AddProjectComponent>
  ) { }

  ngOnInit(): void {
    // console.log(this.data);
    this.title=this.data.title
  }
  saveProject(){
    this.dialog.close('ssss')
  }

}

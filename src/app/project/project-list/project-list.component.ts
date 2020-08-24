import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectComponent } from "../add-project/add-project.component"
import { InviterComponent } from '../inviter/inviter.component'
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component'
import { sliderToTight } from "../../animations/route";
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [sliderToTight]
})
export class ProjectListComponent implements OnInit {

  constructor(
    private diaLog: MatDialog
  ) { }

  @HostBinding(`@routeAnim`) state
  projects = [
    {
      name: '企业协作平台',
      desc: "heheeheheheh",
      coverImg: "assets/img/covers/0.jpg"
    },
    {
      name: '企业协作平台2',
      desc: "heheeheheheh",
      coverImg: "assets/img/covers/1.jpg"
    },
  ]
  ngOnInit(): void {
  }

  addNewPrjectDialog() {
    const dialogRef = this.diaLog.open(AddProjectComponent, { data: { title: '新加项目' } })
    dialogRef.afterClosed().subscribe(res => {
      //  console.log(res);
    })
  }
  inviteEmitHandle() {
    this.diaLog.open(InviterComponent)
    //  dialogRef.afterClosed().subscribe(res=>{
    //    console.log(res);
    //  })
  }
  updateEmitHandle() {
    const dialogRef = this.diaLog.open(AddProjectComponent, { data: { title: '编辑项目' } })
  }
  deleteEmitHandle() {
    const dialogRef = this.diaLog.open(ConfirmDialogComponent, { data: { title: '删除项目', content: 'are you sure？' } })
  }
}

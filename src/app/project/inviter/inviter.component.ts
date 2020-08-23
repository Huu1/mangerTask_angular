import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inviter',
  templateUrl: './inviter.component.html',
  styleUrls: ['./inviter.component.scss']
})
export class InviterComponent implements OnInit {

  constructor() { }

  options = [
    {
      name: 'zhangsan',
      id: 1
    },
    {
      name: 'wangwu',
      id: 2
    },
    {
      name: 'lisi',
      id: 3
    },
  ]
  ngOnInit(): void {
  }
  inviteComplete(user: { name: string, id: number }) {
    return user ? user.name : ''
  }
}

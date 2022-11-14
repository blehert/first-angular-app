import { Component, OnInit } from '@angular/core'

import { ActivatedRoute } from '@angular/router'
import { IUser } from 'src/app/models/user.interface'

import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {
  users: IUser[] = []

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['tab'] === '0') {
        this.userService.getAll().subscribe(data => {
          return (this.users = data.filter(user => user.type === 'income'))
        })
      }
      if (params['tab'] === '1') {
        this.userService.getAll().subscribe(data => {
          this.users = data.filter(user => user.type === 'outcome')
        })
      }
      if (params['tab'] === '2') {
        this.userService.getAll().subscribe(data => {
          this.users = data.filter(user => user.type === 'loan')
        })
      }
      if (params['tab'] === '3') {
        this.userService.getAll().subscribe(data => {
          this.users = data.filter(user => user.type === 'investment')
        })
      }
    })
  }
}

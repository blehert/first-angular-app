import { Component, OnInit } from '@angular/core'
import { IUser } from 'src/app/models/user.interface'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent implements OnInit {
  users: IUser[] = []

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe(data => {
      this.users = data
    })
  }
}

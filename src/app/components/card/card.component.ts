import { Component, OnInit } from '@angular/core'
import { IUser } from 'src/app/models/user.interface'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  users: IUser[] = []
  income: IUser[] = []
  outcome: IUser[] = []
  loan: IUser[] = []
  investment: IUser[] = []

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe(data => {
      this.income = data.filter(user => user.type === 'income')
      this.outcome = data.filter(user => user.type === 'outcome')
      this.loan = data.filter(user => user.type === 'loan')
      this.investment = data.filter(user => user.type === 'investment')
    })
  }
}

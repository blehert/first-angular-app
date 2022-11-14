import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { IUser } from '../models/user.interface'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = 'http://localhost:3000/users'

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<IUser[]>(this.API_URL)
  }
}

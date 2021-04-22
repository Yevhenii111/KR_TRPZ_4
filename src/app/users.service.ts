import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  numberOfUsers = 8;

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(
      `https://randomuser.me/api/?inc=gender,name,picture,location&results=${this.numberOfUsers}&nat=gb`
    );
  }

  setNumberOfUsers(num: number) {
    this.numberOfUsers = num;
  }

  getNumberOfUsers() {
    return this.numberOfUsers;
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css'],
})
export class SetupPageComponent implements OnInit {
  numberOfUsers = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.numberOfUsers = this.userService.getNumberOfUsers();
  }

  onChange() {
    if (isNaN(+this.numberOfUsers)) return;

    this.userService.setNumberOfUsers(+this.numberOfUsers);
  }
}

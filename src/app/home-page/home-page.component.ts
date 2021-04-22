import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  users: {}[] = [];
  searchQuery = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users: any) => {
      this.users = users.results.map((user: any) => {
        return {
          name: `${user.name.first} ${user.name.last}`,
          image: user.picture.large,
          geo: `${user.location.city} ${user.location.state} ${user.location.street.name}`,
        };
      });
    });
  }
}

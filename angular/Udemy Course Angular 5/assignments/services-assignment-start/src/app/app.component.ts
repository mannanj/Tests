import { Component, OnInit } from '@angular/core';
import {UserService} from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inactiveUsers = [];
  activeUsers = [];
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.inactiveUsers = this.userService.inactiveUsers;
    this.activeUsers = this.userService.activeUsers;
    console.log('got users', this.inactiveUsers)
  }
}

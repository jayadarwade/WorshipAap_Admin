import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userList:any = [];
  constructor(private user: UserService) {
    this.user.viewUser().subscribe((data) => {
      this.userList = data;
    });
  }

  ngOnInit(): void {}
}

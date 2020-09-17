import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/providers/event.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any;

  constructor(private _userService: EventService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this._userService.getAllusers().subscribe((data: any) => {
      this.users = data['data'];
      console.log(this.users);
    })
  }
}

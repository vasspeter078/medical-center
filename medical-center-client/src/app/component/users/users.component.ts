import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../../dto/userDTO';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users: UserDTO[] = [];

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(email: string) {
    //this.userService.dele
  }
}

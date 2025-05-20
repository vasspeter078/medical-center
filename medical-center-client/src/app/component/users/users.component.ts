import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../../dto/userDTO';
import { UserService } from '../../service/user.service';
import { Long } from 'mongodb';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',

})
export class UsersComponent implements OnInit{
  users: UserDTO[] = [];

  //displayedColumns: string[] = ['id', 'email', 'username', 'role', 'delete'];

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  deleteUser(id: Long) {
    location.reload();
    this.userService.deleteUser(id).subscribe({
      next: () => {console.log("deleted");}
    });
  }
}

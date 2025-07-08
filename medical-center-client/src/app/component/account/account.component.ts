import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../../service/user.service';
import { UserDTO } from '../../dto/userDTO';
import { AuthenticationService } from '../../service/authentication.service';
import { MatListModule } from '@angular/material/list';
import { AppointmentDTO } from '../../dto/appointmentDTO';
import { AppointmentService } from '../../service/appointment.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { Long } from 'mongodb';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [ReactiveFormsModule,
      RouterLink,
      MatListModule,
      MatGridListModule,
      MatCardModule,
      MatGridListModule,
      MatButtonModule,
      MatIconModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit{
  accountForm : FormGroup;

  user: UserDTO | null = null;

  appointments: AppointmentDTO[] = []

  dates: Date[] = []

  constructor(private fb : FormBuilder, private userService: UserService, private authService: AuthenticationService, private appointmentService: AppointmentService) {
    this.accountForm = this.fb.group({
      username: [""],
      email: [""],
    })
  }

  ngOnInit() {
    let id = this.authService.getId();
    if (id != null) {
        this.appointmentService.getAppointmentsByPatient(id).subscribe(data => {
            this.appointments = data;
            for (let i: number = 0; i < this.appointments.length; i++) {
              this.dates.push(new Date(this.appointments[i].time));
            }
          })
        this.userService.getUser(id).subscribe(data => {
          this.user = data;
        })
    }
  }

  changeAccount() {
    const formValue = this.accountForm.value;
    this.userService.updateAccount(formValue.username, formValue.email).subscribe({
      next: (data) => { console.log(data);},
    });
  }

  declineAppointment() {

  }

  editName(id: Long) {

  }

  editEmail(id: Long) {

  }
}

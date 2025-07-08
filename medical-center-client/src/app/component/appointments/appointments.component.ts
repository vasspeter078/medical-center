import { Component, model } from '@angular/core';
import { UserDTO } from '../../dto/userDTO';
import { Long } from 'mongodb';
import { UserService } from '../../service/user.service';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../../service/appointment.service';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { AppointmentDTO } from '../../dto/appointmentDTO';
import {MatSelectModule} from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent {

  doctors: UserDTO[] = [];

  selectedDoctorId: Long | null = null;

  appointments: AppointmentDTO[] = [];

  appointmentDates: Date[] = [];

  onSpecificDayDates: Date[] = [];

  selectedDate: Date | null = null;

  constructor(private userService: UserService, private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.userService.getDoctors().subscribe((data) => {
      this.doctors = data;
    });
  }

  loadAppointments(): void {
    if (this.selectedDoctorId != null) {
      this.appointmentService.getAppointmentsByDoctor(this.selectedDoctorId).subscribe((data) => {
        this.appointments = data;
        this.appointmentDates = [];
        for (let i = 0; i < this.appointments.length; i++) {
          this.appointmentDates.push(new Date(this.appointments[i].time));
        }
      });
    }
  }

  onDateChange(date: Date) {
    this.selectedDate = date;
    this.loadOnSpecificDayDates();
  }

  loadOnSpecificDayDates() {
    this.onSpecificDayDates = this.appointmentDates.filter(date =>
    date.getFullYear() === this.selectedDate?.getFullYear() &&
    date.getMonth() === this.selectedDate?.getMonth() &&
    date.getDate() === this.selectedDate?.getDate())
  }
}

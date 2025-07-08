import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppointmentService } from '../../service/appointment.service';
import { AuthenticationService } from '../../service/authentication.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { Long } from 'mongodb';
import { AppointmentDTO } from '../../dto/appointmentDTO';

@Component({
  selector: 'app-open-appointment',
  standalone: true,
  imports: [ReactiveFormsModule,     MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  MatCardModule],
  templateUrl: './open-appointment.component.html',
  styleUrl: './open-appointment.component.css'
})
export class OpenAppointmentComponent implements OnInit {
  openAppointmentForm : FormGroup;

  appointments: AppointmentDTO[] = [];

  constructor(private fb : FormBuilder, private appointmentService: AppointmentService, private authenticationService: AuthenticationService) {
    this.openAppointmentForm = this.fb.group({
      date: ["", Validators.required],
      time: ["", Validators.required],
    })
  }

  ngOnInit() {
    let doctorId: Long | null = this.authenticationService.getId();
    if (doctorId != null) {
      this.appointmentService.getAppointmentsByDoctor(doctorId).subscribe((data) => {
        console.log(data);
        this.appointments = data;
      });
    }
    
  }

  openAppointment() {
    const dateTime = `${this.openAppointmentForm.value.date}T${this.openAppointmentForm.value.time}:00`;
    const dateObj = new Date(dateTime);
    console.log(dateTime)
    const doctorId = this.authenticationService.getId();
    if (doctorId != null) {
      this.appointmentService.openAppointment(dateTime, doctorId).subscribe({
        next: () => { 
          
          console.log("opened appointment");
        }
      });
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppointmentService } from '../../service/appointment.service';
import { AuthenticationService } from '../../service/authentication.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-open-appointment',
  standalone: true,
  imports: [ReactiveFormsModule,     MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule],
  templateUrl: './open-appointment.component.html',
  styleUrl: './open-appointment.component.css'
})
export class OpenAppointmentComponent {
  openAppointmentForm : FormGroup;


  constructor(private fb : FormBuilder, private appointmentService: AppointmentService, private authenticationService: AuthenticationService) {
    this.openAppointmentForm = this.fb.group({
      date: ["", Validators.required],
      time: ["", Validators.required],
    })
  }

  openAppointment() {
    const dateTime = this.openAppointmentForm.value.date;
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

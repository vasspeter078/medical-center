import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent{
  registerForm : FormGroup;

  constructor(private fb : FormBuilder, private authService : AuthenticationService) {
    this.registerForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", Validators.required],
      patientRole: [false],
      doctorRole: [false],
      adminRole: [false],
    })
  }

  register() {
    const formValue = this.registerForm.value;
    let role: string = "";
    if (formValue.adminRole) {
      role = "ADMIN";
    } else {
      if (formValue.doctorRole) {
        role = "DOCTOR";
      } else {
        if (formValue.patientRole) {
          role = "PATIENT";
        }
      }
    }
    this.authService.register(formValue.firstName, formValue.lastName, formValue.email, formValue.username, formValue.password, role).subscribe({
      next: (data) => { console.log(data);},
    });
  }
}

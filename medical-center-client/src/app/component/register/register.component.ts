import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {ChangeDetectionStrategy,  signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, MatButtonToggleModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent{
  registerForm : FormGroup;

  hide = signal(true);

  constructor(private fb : FormBuilder, private authService : AuthenticationService) {
    this.registerForm = this.fb.group({
      username: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      role: ["", Validators.required]
    })
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  register() {
    const formValue = this.registerForm.value;
    this.authService.register(formValue.username, formValue.email, formValue.password, formValue.role).subscribe({
      next: (data) => { console.log(data);},
    });
  }
}

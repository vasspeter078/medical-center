import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ChangeDetectionStrategy,  signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  loginForm : FormGroup;

  hide = signal(true);

  constructor(private fb : FormBuilder, private authService : AuthenticationService, private router : Router) {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],

    })
  }

    clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  login() {
    const formValue = this.loginForm.value;
      this.authService.login(formValue.email, formValue.password).subscribe({
        next: () => { console.log("user is logged in");
          this.router.navigateByUrl('/');}
      });
  }

  test() {
    this.authService.test().subscribe({
      next: () => {console.log("authorized");}
    });
  }
}

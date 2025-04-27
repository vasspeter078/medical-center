import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm : FormGroup;


  constructor(private fb : FormBuilder, private authService : AuthenticationService, private router : Router) {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],

    })
  }

  login() {
    const formValue = this.loginForm.value;
      this.authService.login(formValue.username, formValue.password).subscribe({
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

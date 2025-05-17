import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  accountForm : FormGroup;

  constructor(private fb : FormBuilder, private userService: UserService) {
    this.accountForm = this.fb.group({
      firstName: [""],
      lastName: [""],
      email: [""],
      username: [""],
    })
  }

  changeAccount() {
    const formValue = this.accountForm.value;
    this.userService.updateAccount(formValue.firstName, formValue.lastName, formValue.email, formValue.username).subscribe({
      next: (data) => { console.log(data);},
    });
  }
}

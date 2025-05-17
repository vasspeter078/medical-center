import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './logout-button.component.html',
  styleUrl: './logout-button.component.css'
})
export class LogoutButtonComponent {

  constructor( private authService : AuthenticationService) {
  }

  logout() {
    this.authService.logout();
  }
}

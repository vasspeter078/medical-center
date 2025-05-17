import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { LoginButtonComponent } from '../login-button/login-button.component';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';
import { LogoutButtonComponent } from '../logout-button/logout-button.component';
import { AccountComponent } from '../account/account.component';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent, AdminNavComponent, LoginButtonComponent, LogoutButtonComponent, AccountComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor( private authService : AuthenticationService) {
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}

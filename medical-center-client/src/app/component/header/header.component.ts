import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';
import { AccountComponent } from '../account/account.component';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';
import { DoctorNavComponent } from '../doctor-nav/doctor-nav.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent, DoctorNavComponent, AdminNavComponent, AccountComponent, RouterLink, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor( private authService : AuthenticationService) {
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  isDoctor() {
    return this.authService.isDoctor();
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  logout() {
    this.authService.logout();
  }
}

import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { LoginButtonComponent } from '../login-button/login-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent, LoginButtonComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

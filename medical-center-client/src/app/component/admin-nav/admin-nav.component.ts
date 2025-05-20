import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-admin-nav',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './admin-nav.component.html',
  styleUrl: './admin-nav.component.css'
})
export class AdminNavComponent {

}

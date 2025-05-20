import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-doctor-nav',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './doctor-nav.component.html',
  styleUrl: './doctor-nav.component.css'
})
export class DoctorNavComponent {

}

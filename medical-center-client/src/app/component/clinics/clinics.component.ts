import { Component } from '@angular/core';

@Component({
  selector: 'app-clinics',
  standalone: true,
  imports: [],
  templateUrl: './clinics.component.html',
  styleUrl: './clinics.component.css'
})
export class ClinicsComponent {
  clinicNames : string[];

  constructor() {
    this.clinicNames = [
      "Audiology",
      "Internal Medicine",
      "Dermatology",
      "Diabetology",
      "Endocrinology",
      "Physiotherapy",
      "Cardiology",
      "Neurology",
      "Rheumatology",
      "Ophthalmology"
    ];
  }
}

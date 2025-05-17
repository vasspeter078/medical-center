import { Component } from '@angular/core';

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.css'
})
export class PricesComponent {
  clinicPrices = [
    ["Audiology", [["Check-Up Appointment", "100 USD"], ["Follow-Up Appointment", "80 USD"], ["Specialist Consultation", "120 USD"]]],
    ["Internal Medicine", [["Check-Up Appointment", "100 USD"], ["Follow-Up Appointment", "80 USD"], ["Specialist Consultation", "120 USD"]]],
    ["Dermatology", [["Check-Up Appointment", "100 USD"], ["Follow-Up Appointment", "80 USD"], ["Specialist Consultation", "120 USD"]]],
    ["Diabetology", [["Check-Up Appointment", "100 USD"], ["Follow-Up Appointment", "80 USD"], ["Specialist Consultation", "120 USD"]]],
    ["Endocrinology", [["Check-Up Appointment", "100 USD"], ["Follow-Up Appointment", "80 USD"], ["Specialist Consultation", "120 USD"]]],
    ["Physiotheraphy", [["Check-Up Appointment", "100 USD"], ["Follow-Up Appointment", "80 USD"], ["Specialist Consultation", "120 USD"]]],
    ["Cardiology", [["Check-Up Appointment", "100 USD"], ["Follow-Up Appointment", "80 USD"], ["Specialist Consultation", "120 USD"]]],
    ["Neurology", [["Check-Up Appointment", "100 USD"], ["Follow-Up Appointment", "80 USD"], ["Specialist Consultation", "120 USD"]]],
    ["Rheumatology", [["Check-Up Appointment", "100 USD"], ["Follow-Up Appointment", "80 USD"], ["Specialist Consultation", "120 USD"]]],
    ["Ophtomalmology", [["Check-Up Appointment", "100 USD"], ["Follow-Up Appointment", "80 USD"], ["Specialist Consultation", "120 USD"]]],
  ]

}

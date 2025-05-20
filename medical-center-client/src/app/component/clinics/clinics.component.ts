import { Component } from '@angular/core';
import { ClinicService } from '../../service/clinic.service';
import { ClinicDTO } from '../../dto/clinicDTO';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-clinics',
  standalone: true,
  imports: [MatCardModule, MatGridListModule],
  templateUrl: './clinics.component.html',
  styleUrl: './clinics.component.css'
})
export class ClinicsComponent {

    clinics: ClinicDTO[] = [];
  
    constructor(private clinicService: ClinicService) {
  
    }
  
    ngOnInit() {
      this.clinicService.getClinics().subscribe(data => {
        this.clinics = data;
        console.log(this.clinics);
      });
    }
}

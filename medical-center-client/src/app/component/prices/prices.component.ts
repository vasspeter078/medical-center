import { Component } from '@angular/core';
import { ServiceDTO } from '../../dto/serviceDTO';
import { ServiceService } from '../../service/service.service';
import { ClinicService } from '../../service/clinic.service';
import { ClinicDTO } from '../../dto/clinicDTO';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, MatListModule, MatDividerModule],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.css'
})
export class PricesComponent {

    services: ServiceDTO[] = [];

    clinics: ClinicDTO[] = []
  
    constructor(private serviceService: ServiceService, private clinicService: ClinicService) {
  
    }
  
    ngOnInit() {
      this.serviceService.getServices().subscribe(data => {
        this.services = data;
        console.log(this.services);
      });
      this.clinicService.getClinics().subscribe(data => {
        this.clinics = data;
      })
    }
}

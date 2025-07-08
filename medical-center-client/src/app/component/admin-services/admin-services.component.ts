import { Component, inject } from '@angular/core';
import { ServiceDTO } from '../../dto/serviceDTO';
import { MatDialog } from '@angular/material/dialog';
import { ServiceService } from '../../service/service.service';
import { Long } from 'mongodb';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddServiceDialogComponent } from '../add-service-dialog/add-service-dialog.component';

@Component({
  selector: 'app-admin-services',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './admin-services.component.html',
  styleUrl: './admin-services.component.css'
})
export class AdminServicesComponent {
  services: ServiceDTO[] = [];

  dialog = inject(MatDialog);
  
  constructor(private serviceService: ServiceService) {

  }

  ngOnInit() {
    this.serviceService.getServices().subscribe(data => {
      this.services = data;
    });
  }

  openAddServiceDialog() {
    this.dialog.open(AddServiceDialogComponent);
  }

  deleteService(id: Long) {
    location.reload();
    this.serviceService.deleteService(id);
  }
}

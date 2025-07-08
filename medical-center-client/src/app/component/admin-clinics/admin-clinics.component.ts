import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ClinicDTO } from '../../dto/clinicDTO';
import { ClinicService } from '../../service/clinic.service';
import { MatIconModule } from '@angular/material/icon';
import { Long } from 'mongodb';
import { AddClinicDialogComponent } from '../add-clinic-dialog/add-clinic-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-clinics',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './admin-clinics.component.html',
  styleUrl: './admin-clinics.component.css',
})
export class AdminClinicsComponent {
  clinics: ClinicDTO[] = [];

  dialog = inject(MatDialog);
  
  constructor(private clinicService: ClinicService) {

  }

  ngOnInit() {
    this.clinicService.getClinics().subscribe(data => {
      this.clinics = data;
    });
  }

  openAddClinicDialog() {
    this.dialog.open(AddClinicDialogComponent);
  }

  deleteClinic(id: Long) {
    location.reload();
    this.clinicService.deleteClinic(id);
  }
}

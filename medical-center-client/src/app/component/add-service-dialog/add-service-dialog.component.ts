import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { ServiceService } from '../../service/service.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-service-dialog',
  standalone: true,
  imports: [MatFormFieldModule,
      MatInputModule,
      FormsModule,
      MatButtonModule,
      MatDialogTitle,
      MatDialogContent,
      MatDialogActions,
      MatDialogClose,
      ReactiveFormsModule],
  templateUrl: './add-service-dialog.component.html',
  styleUrl: './add-service-dialog.component.css'
})
export class AddServiceDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddServiceDialogComponent>);

  addServiceForm : FormGroup;

  constructor(private fb : FormBuilder, private serviceService: ServiceService) {
    this.addServiceForm = this.fb.group({
      name: ["", Validators.required],
      price: ["", Validators.required],
      clinicId: ["", Validators.required],
    })
  }

  addService(): void {
    console.log("service add")
      const formValue = this.addServiceForm.value;
      this.dialogRef.close();
      location.reload();
      this.serviceService.addService(formValue.name, formValue.price, formValue.clinicId).subscribe({
        next: () => { console.log("service added"); }
      });
  }
}
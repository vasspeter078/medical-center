import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ClinicService } from '../../service/clinic.service';

@Component({
  selector: 'app-add-clinic-dialog',
  standalone: true,
  imports: [ MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ReactiveFormsModule],
  templateUrl: './add-clinic-dialog.component.html',
  styleUrl: './add-clinic-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddClinicDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddClinicDialogComponent>);

  addClinicForm : FormGroup;

    constructor(private fb : FormBuilder, private clinicService: ClinicService) {
      this.addClinicForm = this.fb.group({
        name: ["", Validators.required],
        description: ["", Validators.required],
  
      })
    }

  addClinic(): void {
    console.log("clinic add")
      const formValue = this.addClinicForm.value;
      this.dialogRef.close();
      location.reload();
      this.clinicService.addClinic(formValue.name, formValue.description).subscribe({
        next: () => { console.log("clinic added"); }
      });
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAppointmentComponent } from './open-appointment.component';

describe('OpenAppointmentComponent', () => {
  let component: OpenAppointmentComponent;
  let fixture: ComponentFixture<OpenAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenAppointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

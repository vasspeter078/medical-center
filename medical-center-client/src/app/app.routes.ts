import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { MainComponent } from './component/main/main.component';
import { ClinicsComponent } from './component/clinics/clinics.component';
import { PricesComponent } from './component/prices/prices.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ConnectionComponent } from './component/connection/connection.component';
import { AccountComponent } from './component/account/account.component';
import { roleGuard } from './security/role.guard';
import { UsersComponent } from './component/users/users.component';
import { AppointmentsComponent } from './component/appointments/appointments.component';
import { OpenAppointmentComponent } from './component/open-appointment/open-appointment.component';
import { AdminClinicsComponent } from './component/admin-clinics/admin-clinics.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'appointments', component: AppointmentsComponent},
    {path: 'clinics', component: ClinicsComponent},
    {path: 'prices', component: PricesComponent},
    {path: 'aboutus', component: AboutUsComponent},
    {path: 'connection', component: ConnectionComponent},
    {path: 'account', component: AccountComponent},
    {path: 'users', component: UsersComponent, canActivate: [roleGuard], data: { role: ['ROLE_ADMIN']}},
    {path: 'admin-clinics', component: AdminClinicsComponent, canActivate: [roleGuard], data: { role: ['ROLE_ADMIN']}},
    {path: 'open-appointment', component: OpenAppointmentComponent, canActivate: [roleGuard], data: { role: ['ROLE_DOCTOR']}}
];

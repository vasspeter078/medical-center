import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { MainComponent } from './component/main/main.component';
import { ClinicsComponent } from './component/clinics/clinics.component';
import { PricesComponent } from './component/prices/prices.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ConnectionComponent } from './component/connection/connection.component';
import { roleGuard } from './security/role.guard';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'clinics', component: ClinicsComponent},
    {path: 'prices', component: PricesComponent, canActivate: [roleGuard], data: { role: ['ROLE_DOCTOR']}},
    {path: 'aboutus', component: AboutUsComponent, canActivate: [roleGuard], data: { role: ['ROLE_ADMIN', 'ROLE_PATIENT']}},
    {path: 'connection', component: ConnectionComponent, canActivate: [roleGuard], data: { role: ['ROLE_PATIENT']}},
];

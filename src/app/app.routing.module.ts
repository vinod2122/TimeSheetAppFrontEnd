import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './account/login/login.component';
import { SignUpComponent } from './account/sign-up/sign-up.component';
import { AuthGuard } from './helpers/auth-guard';
import { DashboardComponent } from '../app/dashboard/dashboard.component';


const routes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignUpComponent },

    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
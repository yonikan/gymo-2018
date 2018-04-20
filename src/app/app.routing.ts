import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './core/home/home.component';
import { SettingsComponent } from './core/settings/settings.component';
import { ProfileComponent } from './core/profile/profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'training', loadChildren: './training/training.module#TrainingModule', canLoad: [AuthGuard] },
  { path: 'exercises', loadChildren: './exercises/exercises.module#ExercisesModule', canLoad: [AuthGuard] },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canLoad: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}

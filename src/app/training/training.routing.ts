import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingComponent } from './training/training.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';


const routes: Routes = [
  { path: '', component: TrainingComponent },
  { path: 'past-exercises', component: PastTrainingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule {}
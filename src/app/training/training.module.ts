import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { TrainingRoutingModule } from './training.routing';
import { SharedModule } from '../shared/shared.module';
import { StopTrainingComponent } from './current-training/stop-training.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TrainingRoutingModule
  ],
  declarations: [
    TrainingComponent,
    CurrentTrainingComponent, 
    NewTrainingComponent, 
    PastTrainingsComponent,
    StopTrainingComponent
  ],
  entryComponents: [StopTrainingComponent]
})
export class TrainingModule { }

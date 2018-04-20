import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ExercisesRoutingModule } from './exercises.routing';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseComponent } from './exercise/exercise.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ExercisesRoutingModule,
  ],
  declarations: [
    ExercisesComponent,
    ExerciseComponent
  ]
})
export class ExercisesModule { }

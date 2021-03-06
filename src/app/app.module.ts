import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { AppRoutingModule } from './app.routing';
import { MaterialModule } from './shared/material.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

import { UIService } from './shared/ui.service';
import { AuthService } from './auth/auth.service';
import { TrainingService } from './training/training.service';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    CoreModule
  ],
  entryComponents: [
    
  ],
  providers: [
    AuthService, 
    UIService,
    TrainingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

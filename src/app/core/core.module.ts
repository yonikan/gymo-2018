import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app.routing';
import { ReactiveFormsModule } from '@angular/forms';

import { CanvasComponent } from './canvas/canvas.component';
import { HeaderComponent, HeaderDialog } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { UserMenuComponent } from './header/user-menu/user-menu.component';
import { UserDialogComponent } from './header/user-dialog/user-dialog.component';
import { ClickOutsideDirective } from './header/click-outside.directive';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule, // because i want to use <router-outlet> in my core module,
    ReactiveFormsModule
  ],
  declarations: [ 
    CanvasComponent, 
    HeaderComponent, 
    FooterComponent, 
    ContentComponent,
    HomeComponent,
    SettingsComponent,
    ProfileComponent,
    ClickOutsideDirective,
    HeaderDialog,
    UserMenuComponent,
    UserDialogComponent
  ],
  entryComponents: [
    HeaderDialog
  ],
  exports : [
     CanvasComponent
  ]
})
export class CoreModule { }

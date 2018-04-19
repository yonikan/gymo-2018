import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app.routing';

import { CanvasComponent } from './canvas/canvas.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule // because i want to use <router-outlet> in my core module
  ],
  declarations: [ CanvasComponent, HeaderComponent, FooterComponent, ContentComponent ],
  exports : [ CanvasComponent ],
})
export class CoreModule { }

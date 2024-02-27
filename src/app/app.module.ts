import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasComponent } from './metropolis/canvas/metropolis-canvas.component';
import { ObjectInfoComponent } from './metropolis/shared/components/object-info/object-info.component';
import { NavigationInfoComponent } from './metropolis/shared/components/navigation-info/navigation-info.component';
import { LogoCanvasComponent } from './landing-page/canvas/logo-canvas.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    ObjectInfoComponent,
    NavigationInfoComponent,
    LogoCanvasComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

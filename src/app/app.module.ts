import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasComponent } from './metropolis/canvas/metropolis-canvas.component';
import { ObjectInfoComponent } from './metropolis/shared/components/object-info/object-info.component';
import { NavigationInfoComponent } from './metropolis/shared/components/navigation-info/navigation-info.component';
import { LogoCanvasComponent } from './landing-page/canvas/logo-canvas.component';
import { CommonModule } from '@angular/common';
import { GenerateWordService } from './landing-page/shared/generate-word.service';
import { LettersService } from './landing-page/shared/letters.service';
import { CubeService } from './landing-page/shared/objects/cube.service';

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
  providers: [CubeService, LettersService, GenerateWordService],
  bootstrap: [AppComponent],
})
export class AppModule { }

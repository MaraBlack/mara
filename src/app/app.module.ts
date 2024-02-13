import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { ObjectInfoComponent } from './shared/components/object-info/object-info.component';
import { NavigationInfoComponent } from './shared/components/navigation-info/navigation-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    ObjectInfoComponent,
    NavigationInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

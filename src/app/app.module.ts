import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleDemoComponent } from './shared/components/simple-demo/simple-demo.component';
// import { NgxThreeModule } from '../../../node_modules/ngx-three';
import { FormsModule } from '@angular/forms';
import { NgxThreeGeneratedModule } from 'ngx-three';

@NgModule({
  declarations: [
    AppComponent,
    SimpleDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxThreeGeneratedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

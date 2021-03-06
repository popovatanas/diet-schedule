import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DietViewComponent } from './views/diet-view/diet-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
	AppComponent,
	DietViewComponent
  ],
  imports: [
	BrowserModule,
	AppRoutingModule,
	BrowserAnimationsModule,
	FormsModule,
  MatSelectModule,
  ],
  providers: [

  ],
  bootstrap: [
	AppComponent,
  ]
})
export class AppModule { }

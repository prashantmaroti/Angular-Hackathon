import { Http, HttpModule } from '@angular/http';
import { HackathonService } from './hackathon.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [HackathonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

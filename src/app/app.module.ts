import { Http, HttpModule } from '@angular/http';
import { HackathonService } from './hackathon.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from './app-routing';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
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

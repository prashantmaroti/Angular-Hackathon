import { HackathonService } from './hackathon.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from './app-routing';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HackathonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

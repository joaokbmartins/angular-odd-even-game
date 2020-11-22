import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameControlComponent } from './components/game-control/game-control.component';
import { OddComponent } from './components/odd/odd.component';
import { EvenComponent } from './components/even/even.component'; 

@NgModule({
  declarations: [
    AppComponent,
    EvenComponent,
    OddComponent,
    GameControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

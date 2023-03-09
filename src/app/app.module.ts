import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule
  ],
  declarations: [
    AppComponent, 
    HeroesComponent, 
    HeroDetailComponent,
    MessagesComponent
  ],
  exports: [
    HeroesComponent, 
    HeroDetailComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

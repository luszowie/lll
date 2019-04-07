import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {FilmComponent} from "./filmy/film.component";
import {KsiazkaComponent} from "./ksiazki/ksiazka.component";
import {HeaderComponent} from "./header/header.component";

const appRoutes: Routes = [
  {path: 'ksiazka', component: KsiazkaComponent},
  {path: 'film', component: FilmComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    KsiazkaComponent,
    FilmComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

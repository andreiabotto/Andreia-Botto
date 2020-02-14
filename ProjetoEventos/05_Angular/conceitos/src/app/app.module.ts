import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CursosComponent} from "./cursos.component";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

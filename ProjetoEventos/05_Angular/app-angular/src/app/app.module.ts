import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { appRoutes } from './rotas/app.routes'; //deve vir primeiro

import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';

//usado nas rotas
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NotFoundComponent } from './erro/notFound.component'; 

import { EventosService } from './services/eventos.service'; 
import { SubLista } from './filters/sublista.filter';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [ 
    AppComponent, 
    MenuComponent,
    HomeComponent,
    CadastroComponent,
    NotFoundComponent, SubLista

  ], 
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ], 
  providers : [ EventosService ], 
  bootstrap: [AppComponent]
})
export class AppModule { }

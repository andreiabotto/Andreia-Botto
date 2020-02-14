import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './rotas/app.routes'; //deve vir primeiro

import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';

//usado nas rotas
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NotFoundComponent } from './erro/notFound.component'; 

@NgModule({
  declarations: [ AppComponent, MenuComponent ], 
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes)
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ContatosComponent } from './contatos/contatos.component';

const appRoutes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'clientes',      component: ClientesComponent },
  { path: 'contatos',      component: ContatosComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ContatosComponent } from './contatos/contatos.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from '../environments/environment';
import { ListComponent } from '../app/clientes/list/list.component';
import { EditComponent } from '../app/clientes/edit/edit.component';



const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'clientes',      component: ClientesComponent },
  { path: 'contatos',      component: ContatosComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContatosComponent,
    ClientesComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    [RouterModule.forRoot(routes)],
    [ReactiveFormsModule],
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],

  exports: [RouterModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

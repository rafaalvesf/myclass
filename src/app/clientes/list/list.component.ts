import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { DataService } from '../data.service';
import {Observable } from 'rxjs';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  clientes: Observable<any>;

  constructor(private _clienteService: ClientesService,
              private _DataService: DataService)  { }

  ngOnInit() {
  this.clientes = this._clienteService.getAll();
  }

  delete(key: string){
    this._clienteService.delete(key);
  }

  edit(cliente: Cliente, key: string){
    this._DataService.obtemCliente(cliente, key);
  }

}

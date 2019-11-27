import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { DataService } from '../data.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  cliente: Cliente;
  key: string = '';

  constructor(private _clienteService: ClientesService,
              private _DataService: DataService) { }

  ngOnInit() {

    this.cliente = new Cliente();
    this._DataService.clienteAtual.subscribe(data => {
      if(data.cliente && data.key){
        this.cliente = new Cliente();
        this.cliente.nome = data.cliente.nome;
        this.cliente.cpf = data.cliente.cpf;
        this.cliente.telefone = data.cliente.telefone;
        this.key = data.key;
      }
    })
  }

  onSubmit(){
    if(this.key){
      this._clienteService.update(this.cliente, this.key);
    }
    else{
      this._clienteService.insert(this.cliente);
    }

    this.cliente = new Cliente();
    this.key = null;

  }


}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  delete(key: string) {
    throw new Error("Method not implemented.");
  }

  constructor() { }

  private clienteSource = new BehaviorSubject({ cliente: null, key: '' });
  clienteAtual = this.clienteSource.asObservable();

  obtemCliente(cliente: Cliente, key: string){
    this.clienteSource.next({cliente: cliente,key: key})
  }
}

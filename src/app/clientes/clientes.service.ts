import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Cliente } from './cliente';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private _angularFireDatabase: AngularFireDatabase) { }

  insert( cliente: Cliente) {

    this._angularFireDatabase.list("clientesbd").push(cliente)
    .then((result: any) => {
      console.log(result.key);
    })

  }

  update(cliente: Cliente, key: string){
    this._angularFireDatabase.list("clientesbd").update(key, cliente);

  }

  getAll(){

    return this._angularFireDatabase.list("clientesbd")
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(data => ({ key: data.payload.key, ...data.payload.val() }));
      })
    )

  }

  delete(key: string){
    this._angularFireDatabase.object(`funcionario/${key}`).remove();

  }


}

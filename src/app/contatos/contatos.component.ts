import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {
  texto : string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = -19.9746798;
  lng: number = -44.02035534;
  zoom: number = 15;

  constructor() { }

  ngOnInit() {
  }

}

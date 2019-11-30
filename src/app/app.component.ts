import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myclass';
  texto : string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = -19.9746798;
  lng: number = -44.02035534;
  zoom: number = 15;
}

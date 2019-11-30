import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAxhqf2Y0ApcQcEHjDHQ4Kie4j15Sf4ZBY'
    })
  ]
})
export class ContatosModule { }

import { Component } from '@angular/core';
import { Coche } from './coche';


@Component({
  selector: 'coches',
  templateUrl: './coches.component.html'
})
export class CochesComponent {
  public coche: Coche;
  public coches:Array<Coche>;

  constructor() {
    this.coche = new Coche("", "", "");
    this.coches = [
      new Coche("Seat Panda","120","Blanco"),
      new Coche("Renault Clio","110","Rojo"),
    ];
  }

  onSubmit(){
    this.coches.push(this.coche);
    console.log(this.coche);
    this.coche=new Coche("", "", "");
  }
}

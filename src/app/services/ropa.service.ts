import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
  public nombre_prenda = 'Camiseta Nike';
  public coleccion_ropa = ['Pantalones Blancos', 'Camiseta Roja'];

  prueba() {
    return this.nombre_prenda;
  }

  addRopa(nombre_prenda: string): Array<string> {
    this.coleccion_ropa.push(nombre_prenda);

    return this.getropa();
  }

  deleteRopa(index: number) {
    this.coleccion_ropa.splice(index, 1);

    return this.getropa();
  }

  getropa(): Array<string> {
    return this.coleccion_ropa;
  }

}

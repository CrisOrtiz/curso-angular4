import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
  public nombre_prenda = 'Camiseta Nike';

  prueba(){
    return this.nombre_prenda;
  }
}

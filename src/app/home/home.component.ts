import { Component } from '@angular/core';
import { RopaService } from './../services/ropa.service';

@Component({
    selector:'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})

export class HomeComponent{
    public titulo = "Pagina  principal";
    public listado_ropa:Array<string>;
    public prenda_a_guardar:string;

    public fecha;

    constructor(
        private _ropaService: RopaService
    ){
        this.fecha = new Date(2020,2,19);
    }

    ngOnInit(){
        console.log( this.listado_ropa = this._ropaService.getropa());
        console.log(this._ropaService.prueba());
    }

    guardarPrenda(){
        this._ropaService.addRopa(this.prenda_a_guardar);
        this.prenda_a_guardar =null;
    }

    eliminarPrenda(index:number){
        this._ropaService.deleteRopa(index);
    }
}


import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'

})

export class FrutaComponent {
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandias';

    //tipos de datos
    public nombre: String;
    public edad: number;
    public mayor_de_edad: boolean;
    public trabajos: Array<any> = ['carpintero', 77, 'fontanero'];
    comodin: any;

    constructor() {
        this.nombre = 'Cristhian Ortiz';
        this.edad = 24;
        this.mayor_de_edad = true;
        this.comodin = "comodin";


    }

    //ngOnInit se ejecuta despues del constructor
    ngOnInit() {
        this.cambiarnombre();
        this.cambiaredad();
        console.log(this.nombre + ' ' + this.edad);
        //variables y su alcance
            //var define el valor de la variable de manera global
            //let da valor a una variable dentro de el proceso ejem:if for while, etc..
        var uno = 8;
        var dos = 15;

        if(uno === 8){
            let uno = 3;
            var dos = 88;
            console.log('DENTRO: ' + uno);
        }
        console.log('FUERA: ' + uno);

    }

    cambiarnombre() {
        this.nombre = "CristhianO";
    }

    cambiaredad() {
        this.edad = 19;
    }
}
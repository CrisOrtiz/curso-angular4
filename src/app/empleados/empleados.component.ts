import { Component } from '@angular/core';
import {Empleado} from './empleado';
@Component({
    selector: 'empleado-tag',
    templateUrl:'./empleados.component.html'
})

export class EmpleadosComponent{
    public titulo = 'Componente empleados';
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string;


    constructor(){
        this.empleado = new Empleado('David Lopez',45,'Cocinero',true);
        this.trabajadores =[
            new Empleado('Mariano Galindo',19,'mensajero',false),
            new Empleado('Jose Martinez',30,'Administrativo',true),
            new Empleado('Joao Pereira',45,'Gerente',true),
            new Empleado('Mariana Lopez',25,'Asistente de cocina',false)
        ];
        this.trabajador_externo = true;
        this.color='green';
        this.color_seleccionado = '#ccc';

    }

    ngOnInit(): void {
        console.log(this.empleado);
        console.log(this.trabajadores);

    }

    cambiarExterno(valor: boolean){
        this.trabajador_externo = valor;
    }

    logColorSeleccionado(){
        console.log(this.color_seleccionado);
    }

}
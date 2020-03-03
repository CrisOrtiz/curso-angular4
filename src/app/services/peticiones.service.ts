import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class PeticionesService {
    public url:string;

    constructor(private _http:HttpClient){
        this.url="https://jsonplaceholder.typicode.com/posts";
    }
    getPrueba() {
        return 'Hola mundo desde el Servicio';

    }

    getArticulos(): Observable<any>{
        return this._http.get(this.url);
    }
}



//aqui hay un error con json pero la solucion esta en los comentarios del video 


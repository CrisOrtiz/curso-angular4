

import { EmpleadosComponent } from './empleados/empleados.component';
import { FrutaComponent } from './fruta/fruta.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { CochesComponent } from './coches/coches.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConversorPipe } from './pipes/conversor.pipe';
import { PlantillasComponent } from './plantillas/plantillas.component';


@NgModule({
   declarations: [
      AppComponent,
      FrutaComponent,
      EmpleadosComponent,
      HomeComponent,
      ContactoComponent,
      CochesComponent,
      ConversorPipe,
      PlantillasComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      routing
   ],
   providers: [
      appRoutingProviders
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

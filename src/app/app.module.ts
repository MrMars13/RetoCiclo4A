import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './plantilla/barra-navegacion/barra-navegacion.component';
import { PiePaginaComponent } from './plantilla/pie-pagina/pie-pagina.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioEmpleadoComponent } from './plantilla/formulario-empleado/formulario-empleado.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    PiePaginaComponent,
    InicioComponent,
    ErrorComponent,
    FormularioEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

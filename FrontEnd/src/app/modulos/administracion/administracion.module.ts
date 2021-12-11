import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearEmpleadoComponent } from './empleado/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './empleado/editar-empleado/editar-empleado.component';
import { EliminarEmpleadoComponent } from './empleado/eliminar-empleado/eliminar-empleado.component';
import { BuscarEmpleadoComponent } from './empleado/buscar-empleado/buscar-empleado.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearEmpleadoComponent,
    EditarEmpleadoComponent,
    EliminarEmpleadoComponent,
    BuscarEmpleadoComponent,
    CrearProductoComponent,
    EditarProductoComponent,
    EliminarProductoComponent,
    BuscarProductoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }

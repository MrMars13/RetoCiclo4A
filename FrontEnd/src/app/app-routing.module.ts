import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadoComponent } from './modulos/administracion/empleado/crear-empleado/crear-empleado.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { FormularioEmpleadoComponent } from './plantilla/formulario-empleado/formulario-empleado.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path:"",
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path:"formulario-empleado",
    component: FormularioEmpleadoComponent
  },
  {
    path:"crear-empleado",
    component: CrearEmpleadoComponent
  },
  {
    path: 'seguridad',
    loadChildren: ()=> import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
  },
  {
    path: 'administracion',
    loadChildren: ()=> import("./modulos/administracion/administracion.module").then(x => x.AdministracionModule)
  },
  {
    path: 'pedidos',
    loadChildren: ()=> import("./modulos/pedidos/pedidos.module").then(x => x.PedidosModule)
  },
  {
    path:'not-found',
    component:ErrorComponent
  },
  {
    
      path: '**',
      redirectTo:'/not-found'
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

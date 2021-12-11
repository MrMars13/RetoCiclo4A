import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloEmpleado } from 'src/app/modelos/empleado.modelo';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  id:string = '';
  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'Nombres': ['', [Validators.required]],
    'Apellidos': ['', [Validators.required]],
    'Email': ['', [Validators.required]],
    'Edad': ['', [Validators.required]],
    'Telefono': ['', [Validators.required]],
    'Direccion': ['', [Validators.required]],
    'Sueldo': ['', [Validators.required]]   
  });

  constructor(private fb: FormBuilder,
    private servicioEmpleado: EmpleadoService,
    private router: Router,
    private route: ActivatedRoute) { } 

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarEmpleado();
  }

  BuscarEmpleado(){
    this.servicioEmpleado.ObtenerRegistroPorId(this.id).subscribe((datos: ModeloEmpleado)=>{
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["Nombres"].setValue(datos.Nombres);
      this.fgValidador.controls["Apellidos"].setValue(datos.Apellidos);
      this.fgValidador.controls["Email"].setValue(datos.Email);
      this.fgValidador.controls["Edad"].setValue(datos.Edad);
      this.fgValidador.controls["Telefono"].setValue(datos.Telefono);
      this.fgValidador.controls["Direccion"].setValue(datos.Direccion);
      this.fgValidador.controls["Sueldo"].setValue(datos.Sueldo);
    })
  }

  EditarEmpleado(){
    let Nombres = this.fgValidador.controls["Nombres"].value;
    let Apellidos = this.fgValidador.controls["Apellidos"].value;
    let Email = this.fgValidador.controls["Email"].value;
    let Edad = this.fgValidador.controls["Edad"].value;
    let Telefono = this.fgValidador.controls["Telefono"].value;
    let Direccion = this.fgValidador.controls["Direccion"].value;
    let Sueldo = parseInt(this.fgValidador.controls["Sueldo"].value);

    let p = new ModeloEmpleado();

    p.Nombres =Nombres;
    p.Apellidos = Apellidos;
    p.Email = Email;
    p.Edad = Edad;
    p.Telefono = Telefono;
    p.Direccion = Direccion;
    p.Sueldo = Sueldo;
    p.id = this.id;

    this.servicioEmpleado.ActualizarEmpleado(p).subscribe((datos: ModeloEmpleado)=>{
      alert("Empleado Actualizado");
      this.router.navigate(["/administracion/listar-empleados"]);
    },(error: any)=>{
      alert("Error al actualizando el Empleado");
    })
  }

}

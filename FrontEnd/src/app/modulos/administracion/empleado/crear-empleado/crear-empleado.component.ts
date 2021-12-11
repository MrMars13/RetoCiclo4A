import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloEmpleado } from 'src/app/modelos/empleado.modelo';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
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
    private router: Router) { } 



  
  ngOnInit(): void {
  }

  GuardarEmpleado(){
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

    this.servicioEmpleado.CrearEmpleado(p).subscribe((datos: ModeloEmpleado)=>{
      alert("Empleado almacenado");
      this.router.navigate(["/administracion/listar-empleados"]);
    },(error: any)=>{
      alert("Error al almacenar el Empleado");
    })
  }

}



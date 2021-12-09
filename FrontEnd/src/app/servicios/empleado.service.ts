import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloEmpleado } from '../modelos/empleado.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
url = 'http://localhost:3000'
token: String ='';

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros(): Observable<ModeloEmpleado[]>{
    return this.http.get<ModeloEmpleado[]>(`${this.url}/empleados`);
  }
}
  /*CrearEmpleado(empleado: ModeloEmpleado): Observable<ModeloEmpleado>{
    return this.http.post<ModeloEmpleado>(`${this.url}/empleados`, empleado{
      Headers: new HttpHeaders({
        'Authorization':`Bearer${this.token}`
      })
    })
  }

  ActualizarEmpleado(empleado: ModeloEmpleado): Observable<ModeloEmpleado>{
    return this.http.put<ModeloEmpleado>(`${this.url}/empleados`,empleado, {
      Headers: new HttpHeaders({
        'Authorization':`Bearer${this.token}`
      })
    })
  }

  EliminarEmpleado(id: string): Observable<any>{
    return this.http.delete(`${this.url}/empleados/${id}`,{
      Headers: new HttpHeaders({
        'Authorization':`Bearer${this.token}`
      })
    })
  }


 

}

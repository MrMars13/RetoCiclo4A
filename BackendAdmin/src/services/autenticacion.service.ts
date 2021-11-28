import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Llaves} from '../config/keys';
import {Empleado} from '../models';
import {EmpleadoRepository} from '../repositories';
const generador = require("password-generator");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(EmpleadoRepository)              // Con esto se puede acceder a los métodos del repositorio
    public empleadoRepository: EmpleadoRepository
  ) {}

  // Modificacion para integracion
  GenerarClave(){
    let clave = generador(8, false);
    return clave;
  }

  CifrarClave(clave: string){
    let claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }

  //Metodo de identificar:
  IdentificarPersona(usuario: string, clave: string){
    try{
      let p = this.empleadoRepository.findOne({where:{Email: usuario, clave: clave}});
      if(p){
        return p;
      }
      return false;
    }catch{
      return false;
    }
  }

  // Creación de Token:
  GenerarTokenJWT(empleado: Empleado){
    let token = jwt.sign({
      data: {
        id: empleado.id,
        correo: empleado.Email,
        nombre: empleado.Nombres + " " + empleado.Apellidos
      }
    },
    Llaves.claveJWT); //Sign genera la firma del token, ver documentacion. Llaves accede a la info
    return token;
  }

  validarTokenJWT(token: string){
    try{
      let datos = jwt.verify(token, Llaves.claveJWT);  // Verifica el token que llega con la la clave
      return datos;
    }catch{
      return false;
    }
  }
}

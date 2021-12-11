import {Entity, hasMany, model, property} from '@loopback/repository';
import {MensajesEmpleado} from './mensajes-empleado.model';

@model()
export class Empleado extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  Apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  Telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  Direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  Email: string;

  @property({
    type: 'string',
    required: false,
  })
  clave: string;

  @property({
    type: 'string',
    required: true,
  })
  Edad: string;

  @property({
    type: 'date',
    required: false,
  })
  FechaNacimiento: string;

  @property({
    type: 'number',
    required: true,
  })
  Sueldo: number;

  @property({
    type: 'number',
    required: false,
  })
  EsDirectivo: number;

  @property({
    type: 'number',
    required: false,
  })
  EsCliente: number;

  @property({
    type: 'string',
    required: false,
  })
  empresaId?: string;

  @hasMany(() => MensajesEmpleado)
  mensajesEmpleados: MensajesEmpleado[];

  constructor(data?: Partial<Empleado>) {
    super(data);
  }
}

export interface EmpleadoRelations {
  // describe navigational properties here
}

export type EmpleadoWithRelations = Empleado & EmpleadoRelations;

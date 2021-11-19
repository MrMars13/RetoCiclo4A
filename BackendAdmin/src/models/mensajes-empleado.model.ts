import {Entity, model, property} from '@loopback/repository';

@model()
export class MensajesEmpleado extends Entity {
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
  mensajes: string;

  @property({
    type: 'string',
  })
  empleadoId?: string;

  constructor(data?: Partial<MensajesEmpleado>) {
    super(data);
  }
}

export interface MensajesEmpleadoRelations {
  // describe navigational properties here
}

export type MensajesEmpleadoWithRelations = MensajesEmpleado & MensajesEmpleadoRelations;

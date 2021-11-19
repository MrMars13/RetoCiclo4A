import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Empleado,
  MensajesEmpleado,
} from '../models';
import {EmpleadoRepository} from '../repositories';

export class EmpleadoMensajesEmpleadoController {
  constructor(
    @repository(EmpleadoRepository) protected empleadoRepository: EmpleadoRepository,
  ) { }

  @get('/empleados/{id}/mensajes-empleados', {
    responses: {
      '200': {
        description: 'Array of Empleado has many MensajesEmpleado',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(MensajesEmpleado)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<MensajesEmpleado>,
  ): Promise<MensajesEmpleado[]> {
    return this.empleadoRepository.mensajesEmpleados(id).find(filter);
  }

  @post('/empleados/{id}/mensajes-empleados', {
    responses: {
      '200': {
        description: 'Empleado model instance',
        content: {'application/json': {schema: getModelSchemaRef(MensajesEmpleado)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Empleado.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MensajesEmpleado, {
            title: 'NewMensajesEmpleadoInEmpleado',
            exclude: ['id'],
            optional: ['empleadoId']
          }),
        },
      },
    }) mensajesEmpleado: Omit<MensajesEmpleado, 'id'>,
  ): Promise<MensajesEmpleado> {
    return this.empleadoRepository.mensajesEmpleados(id).create(mensajesEmpleado);
  }

  @patch('/empleados/{id}/mensajes-empleados', {
    responses: {
      '200': {
        description: 'Empleado.MensajesEmpleado PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MensajesEmpleado, {partial: true}),
        },
      },
    })
    mensajesEmpleado: Partial<MensajesEmpleado>,
    @param.query.object('where', getWhereSchemaFor(MensajesEmpleado)) where?: Where<MensajesEmpleado>,
  ): Promise<Count> {
    return this.empleadoRepository.mensajesEmpleados(id).patch(mensajesEmpleado, where);
  }

  @del('/empleados/{id}/mensajes-empleados', {
    responses: {
      '200': {
        description: 'Empleado.MensajesEmpleado DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(MensajesEmpleado)) where?: Where<MensajesEmpleado>,
  ): Promise<Count> {
    return this.empleadoRepository.mensajesEmpleados(id).delete(where);
  }
}

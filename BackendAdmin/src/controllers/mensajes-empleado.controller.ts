import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {MensajesEmpleado} from '../models';
import {MensajesEmpleadoRepository} from '../repositories';

export class MensajesEmpleadoController {
  constructor(
    @repository(MensajesEmpleadoRepository)
    public mensajesEmpleadoRepository : MensajesEmpleadoRepository,
  ) {}

  @post('/mensajes-empleados')
  @response(200, {
    description: 'MensajesEmpleado model instance',
    content: {'application/json': {schema: getModelSchemaRef(MensajesEmpleado)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MensajesEmpleado, {
            title: 'NewMensajesEmpleado',
            exclude: ['id'],
          }),
        },
      },
    })
    mensajesEmpleado: Omit<MensajesEmpleado, 'id'>,
  ): Promise<MensajesEmpleado> {
    return this.mensajesEmpleadoRepository.create(mensajesEmpleado);
  }

  @get('/mensajes-empleados/count')
  @response(200, {
    description: 'MensajesEmpleado model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(MensajesEmpleado) where?: Where<MensajesEmpleado>,
  ): Promise<Count> {
    return this.mensajesEmpleadoRepository.count(where);
  }

  @get('/mensajes-empleados')
  @response(200, {
    description: 'Array of MensajesEmpleado model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(MensajesEmpleado, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(MensajesEmpleado) filter?: Filter<MensajesEmpleado>,
  ): Promise<MensajesEmpleado[]> {
    return this.mensajesEmpleadoRepository.find(filter);
  }

  @patch('/mensajes-empleados')
  @response(200, {
    description: 'MensajesEmpleado PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MensajesEmpleado, {partial: true}),
        },
      },
    })
    mensajesEmpleado: MensajesEmpleado,
    @param.where(MensajesEmpleado) where?: Where<MensajesEmpleado>,
  ): Promise<Count> {
    return this.mensajesEmpleadoRepository.updateAll(mensajesEmpleado, where);
  }

  @get('/mensajes-empleados/{id}')
  @response(200, {
    description: 'MensajesEmpleado model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(MensajesEmpleado, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(MensajesEmpleado, {exclude: 'where'}) filter?: FilterExcludingWhere<MensajesEmpleado>
  ): Promise<MensajesEmpleado> {
    return this.mensajesEmpleadoRepository.findById(id, filter);
  }

  @patch('/mensajes-empleados/{id}')
  @response(204, {
    description: 'MensajesEmpleado PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MensajesEmpleado, {partial: true}),
        },
      },
    })
    mensajesEmpleado: MensajesEmpleado,
  ): Promise<void> {
    await this.mensajesEmpleadoRepository.updateById(id, mensajesEmpleado);
  }

  @put('/mensajes-empleados/{id}')
  @response(204, {
    description: 'MensajesEmpleado PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() mensajesEmpleado: MensajesEmpleado,
  ): Promise<void> {
    await this.mensajesEmpleadoRepository.replaceById(id, mensajesEmpleado);
  }

  @del('/mensajes-empleados/{id}')
  @response(204, {
    description: 'MensajesEmpleado DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.mensajesEmpleadoRepository.deleteById(id);
  }
}

import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {MensajesEmpleado, MensajesEmpleadoRelations} from '../models';

export class MensajesEmpleadoRepository extends DefaultCrudRepository<
  MensajesEmpleado,
  typeof MensajesEmpleado.prototype.id,
  MensajesEmpleadoRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(MensajesEmpleado, dataSource);
  }
}

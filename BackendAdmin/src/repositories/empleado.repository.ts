import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Empleado, EmpleadoRelations, MensajesEmpleado} from '../models';
import {MensajesEmpleadoRepository} from './mensajes-empleado.repository';

export class EmpleadoRepository extends DefaultCrudRepository<
  Empleado,
  typeof Empleado.prototype.id,
  EmpleadoRelations
> {

  public readonly mensajesEmpleados: HasManyRepositoryFactory<MensajesEmpleado, typeof Empleado.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('MensajesEmpleadoRepository') protected mensajesEmpleadoRepositoryGetter: Getter<MensajesEmpleadoRepository>,
  ) {
    super(Empleado, dataSource);
    this.mensajesEmpleados = this.createHasManyRepositoryFactoryFor('mensajesEmpleados', mensajesEmpleadoRepositoryGetter,);
    this.registerInclusionResolver('mensajesEmpleados', this.mensajesEmpleados.inclusionResolver);
  }
}

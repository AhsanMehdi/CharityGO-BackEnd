import {DefaultCrudRepository} from '@loopback/repository';
import {ProjectController, ProjectControllerRelations} from '../models';
import {CharitygoMongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProjectControllerRepository extends DefaultCrudRepository<
  ProjectController,
  typeof ProjectController.prototype.projectId,
  ProjectControllerRelations
> {
  constructor(
    @inject('datasources.charitygoMongoDB') dataSource: CharitygoMongoDbDataSource,
  ) {
    super(ProjectController, dataSource);
  }
}

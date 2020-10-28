import {DefaultCrudRepository} from '@loopback/repository';
import {Organization, OrganizationRelations} from '../models';
import {CharitygoMongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrganizationRepository extends DefaultCrudRepository<
  Organization,
  typeof Organization.prototype.organizationId,
  OrganizationRelations
> {
  constructor(
    @inject('datasources.charitygoMongoDB') dataSource: CharitygoMongoDbDataSource,
  ) {
    super(Organization, dataSource);
  }
}

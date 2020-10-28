import {DefaultCrudRepository} from '@loopback/repository';
import {NgoAccountController, NgoAccountControllerRelations} from '../models';
import {CharitygoMongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class NgoAccountControllerRepository extends DefaultCrudRepository<
  NgoAccountController,
  typeof NgoAccountController.prototype.ngoId,
  NgoAccountControllerRelations
> {
  constructor(
    @inject('datasources.charitygoMongoDB') dataSource: CharitygoMongoDbDataSource,
  ) {
    super(NgoAccountController, dataSource);
  }
}

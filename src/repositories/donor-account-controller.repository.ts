import {DefaultCrudRepository} from '@loopback/repository';
import {DonorAccountController, DonorAccountControllerRelations} from '../models';
import {CharitygoMongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DonorAccountControllerRepository extends DefaultCrudRepository<
  DonorAccountController,
  typeof DonorAccountController.prototype.donorId,
  DonorAccountControllerRelations
> {
  constructor(
    @inject('datasources.charitygoMongoDB') dataSource: CharitygoMongoDbDataSource,
  ) {
    super(DonorAccountController, dataSource);
  }
}

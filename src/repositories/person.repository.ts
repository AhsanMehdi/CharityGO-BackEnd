import {DefaultCrudRepository} from '@loopback/repository';
import {Person, PersonRelations} from '../models';
import {CharitygoMongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PersonRepository extends DefaultCrudRepository<
  Person,
  typeof Person.prototype.personId,
  PersonRelations
> {
  constructor(
    @inject('datasources.charitygoMongoDB') dataSource: CharitygoMongoDbDataSource,
  ) {
    super(Person, dataSource);
  }
}

import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'charitygoMongoDB',
  connector: 'mongodb',
  url: 'mongodb+srv://fast12345:fast12345@cluster0.pnaaz.mongodb.net/test?authSource=admin&replicaSet=atlas-x5mbda-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class CharitygoMongoDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'charitygoMongoDB';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.charitygoMongoDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

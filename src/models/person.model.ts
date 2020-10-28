import {Entity, model, property} from '@loopback/repository';

@model()
export class Person extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  personId?: number;

  @property({
    type: 'string',
    required: true,
  })
  FirstName: string;

  @property({
    type: 'string',
    required: false,
  })
  MiddleName: string;

  @property({
    type: 'string',

  })
  LastName: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
  })
  cell?: string;

  @property({
    type: 'string',
    required: true,
  })
  country?: string;

  @property({
    type: 'date',
  })
  DOB?: string;

  @property({
    type: 'string',
    required: true,
  })
  visibility: string;

  @property({
    type: 'string',
  })
  occupation?: string;

  @property({
    type: 'string',
  })
  cnic?: string;


  constructor(data?: Partial<Person>) {
    super(data);
  }
}

export interface PersonRelations {
  // describe navigational properties here
}

export type PersonWithRelations = Person & PersonRelations;

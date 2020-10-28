import {Entity, model, property} from '@loopback/repository';

@model()
export class NgoAccountController extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  ngoId?: number;

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
    required: true,
  })
  ngoName: string;

  constructor(data?: Partial<NgoAccountController>) {
    super(data);
  }
}

export interface NgoAccountControllerRelations {
  // describe navigational properties here
}

export type NgoAccountControllerWithRelations = NgoAccountController & NgoAccountControllerRelations;

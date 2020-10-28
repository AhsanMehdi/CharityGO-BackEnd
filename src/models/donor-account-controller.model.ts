import {Entity, model, property} from '@loopback/repository';

@model()
export class DonorAccountController extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  donorId?: number;

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


  constructor(data?: Partial<DonorAccountController>) {
    super(data);
  }
}

export interface DonorAccountControllerRelations {
  // describe navigational properties here
}

export type DonorAccountControllerWithRelations = DonorAccountController & DonorAccountControllerRelations;

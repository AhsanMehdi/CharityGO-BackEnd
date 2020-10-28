import {Entity, model, property} from '@loopback/repository';

@model()
export class Organization extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  organizationId?: number;

  @property({
    type: 'string',
    required: true,
  })
  NickName: string;

  @property({
    type: 'string',
    required: true,
  })
  BranchId: string;

  @property({
    type: 'number',
    required: true,
  })
  TotalBranches: number;

  @property({
    type: 'number',
    required: true,
  })
  CompletedProjects: number;

  @property({
    type: 'string',
    required: true,
  })
  InterestedDomain: string;

  @property({
    type: 'number',
  })
  AverageReceivedDonationYear?: number;

  @property({
    type: 'string',
    required: true,
  })
  ContactNumber: string;

  @property({
    type: 'string',
    required: true,
  })
  country: string;

  @property({
    type: 'date',
    required: true,
  })
  StartDate: string;

  @property({
    type: 'string',
    required: true,
  })
  visibility?: string;

  @property({
    type: 'string',
  })
  RegisterationNumber?: string;


  constructor(data?: Partial<Organization>) {
    super(data);
  }
}

export interface OrganizationRelations {
  // describe navigational properties here
}

export type OrganizationWithRelations = Organization & OrganizationRelations;

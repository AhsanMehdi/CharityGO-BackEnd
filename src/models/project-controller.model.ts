import {Entity, model, property} from '@loopback/repository';

@model()
export class ProjectController extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  projectId?: number;

  @property({
    type: 'string',
    required: true,
  })
  tittle: string;

  @property({
    type: 'string',
    required: true,
  })
  type: string;

  @property({
    type: 'string',
    required: true,
  })
  projectStatus: string;


  constructor(data?: Partial<ProjectController>) {
    super(data);
  }
}

export interface ProjectControllerRelations {
  // describe navigational properties here
}

export type ProjectControllerWithRelations = ProjectController & ProjectControllerRelations;

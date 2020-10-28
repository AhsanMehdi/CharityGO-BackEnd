import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {ProjectController} from '../models';
import {ProjectControllerRepository} from '../repositories';

export class ProjectControllerController {
  constructor(
    @repository(ProjectControllerRepository)
    public projectControllerRepository : ProjectControllerRepository,
  ) {}

  @post('/project-controllers', {
    responses: {
      '200': {
        description: 'ProjectController model instance',
        content: {'application/json': {schema: getModelSchemaRef(ProjectController)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProjectController, {
            title: 'NewProjectController',
            exclude: ['projectId'],
          }),
        },
      },
    })
    projectController: Omit<ProjectController, 'projectId'>,
  ): Promise<ProjectController> {
    return this.projectControllerRepository.create(projectController);
  }

  @get('/project-controllers/count', {
    responses: {
      '200': {
        description: 'ProjectController model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ProjectController) where?: Where<ProjectController>,
  ): Promise<Count> {
    return this.projectControllerRepository.count(where);
  }

  @get('/project-controllers', {
    responses: {
      '200': {
        description: 'Array of ProjectController model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ProjectController, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ProjectController) filter?: Filter<ProjectController>,
  ): Promise<ProjectController[]> {
    return this.projectControllerRepository.find(filter);
  }

  @patch('/project-controllers', {
    responses: {
      '200': {
        description: 'ProjectController PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProjectController, {partial: true}),
        },
      },
    })
    projectController: ProjectController,
    @param.where(ProjectController) where?: Where<ProjectController>,
  ): Promise<Count> {
    return this.projectControllerRepository.updateAll(projectController, where);
  }

  @get('/project-controllers/{id}', {
    responses: {
      '200': {
        description: 'ProjectController model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ProjectController, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ProjectController, {exclude: 'where'}) filter?: FilterExcludingWhere<ProjectController>
  ): Promise<ProjectController> {
    return this.projectControllerRepository.findById(id, filter);
  }

  @patch('/project-controllers/{id}', {
    responses: {
      '204': {
        description: 'ProjectController PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProjectController, {partial: true}),
        },
      },
    })
    projectController: ProjectController,
  ): Promise<void> {
    await this.projectControllerRepository.updateById(id, projectController);
  }

  @put('/project-controllers/{id}', {
    responses: {
      '204': {
        description: 'ProjectController PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() projectController: ProjectController,
  ): Promise<void> {
    await this.projectControllerRepository.replaceById(id, projectController);
  }

  @del('/project-controllers/{id}', {
    responses: {
      '204': {
        description: 'ProjectController DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.projectControllerRepository.deleteById(id);
  }
}

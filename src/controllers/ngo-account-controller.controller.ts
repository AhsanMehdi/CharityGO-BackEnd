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
import {NgoAccountController} from '../models';
import {NgoAccountControllerRepository} from '../repositories';

export class NgoAccountControllerController {
  constructor(
    @repository(NgoAccountControllerRepository)
    public ngoAccountControllerRepository : NgoAccountControllerRepository,
  ) {}

  @post('/ngo-account-controllers', {
    responses: {
      '200': {
        description: 'NgoAccountController model instance',
        content: {'application/json': {schema: getModelSchemaRef(NgoAccountController)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NgoAccountController, {
            title: 'NewNgoAccountController',
            exclude: ['ngoId'],
          }),
        },
      },
    })
    ngoAccountController: Omit<NgoAccountController, 'ngoId'>,
  ): Promise<NgoAccountController> {
    return this.ngoAccountControllerRepository.create(ngoAccountController);
  }

  @get('/ngo-account-controllers/count', {
    responses: {
      '200': {
        description: 'NgoAccountController model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(NgoAccountController) where?: Where<NgoAccountController>,
  ): Promise<Count> {
    return this.ngoAccountControllerRepository.count(where);
  }

  @get('/ngo-account-controllers', {
    responses: {
      '200': {
        description: 'Array of NgoAccountController model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(NgoAccountController, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(NgoAccountController) filter?: Filter<NgoAccountController>,
  ): Promise<NgoAccountController[]> {
    return this.ngoAccountControllerRepository.find(filter);
  }

  @patch('/ngo-account-controllers', {
    responses: {
      '200': {
        description: 'NgoAccountController PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NgoAccountController, {partial: true}),
        },
      },
    })
    ngoAccountController: NgoAccountController,
    @param.where(NgoAccountController) where?: Where<NgoAccountController>,
  ): Promise<Count> {
    return this.ngoAccountControllerRepository.updateAll(ngoAccountController, where);
  }

  @get('/ngo-account-controllers/{id}', {
    responses: {
      '200': {
        description: 'NgoAccountController model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(NgoAccountController, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(NgoAccountController, {exclude: 'where'}) filter?: FilterExcludingWhere<NgoAccountController>
  ): Promise<NgoAccountController> {
    return this.ngoAccountControllerRepository.findById(id, filter);
  }

  @patch('/ngo-account-controllers/{id}', {
    responses: {
      '204': {
        description: 'NgoAccountController PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NgoAccountController, {partial: true}),
        },
      },
    })
    ngoAccountController: NgoAccountController,
  ): Promise<void> {
    await this.ngoAccountControllerRepository.updateById(id, ngoAccountController);
  }

  @put('/ngo-account-controllers/{id}', {
    responses: {
      '204': {
        description: 'NgoAccountController PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ngoAccountController: NgoAccountController,
  ): Promise<void> {
    await this.ngoAccountControllerRepository.replaceById(id, ngoAccountController);
  }

  @del('/ngo-account-controllers/{id}', {
    responses: {
      '204': {
        description: 'NgoAccountController DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ngoAccountControllerRepository.deleteById(id);
  }
}

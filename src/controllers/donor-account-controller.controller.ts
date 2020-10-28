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
import {DonorAccountController} from '../models';
import {DonorAccountControllerRepository} from '../repositories';

export class DonorAccountControllerController {
  constructor(
    @repository(DonorAccountControllerRepository)
    public donorAccountControllerRepository : DonorAccountControllerRepository,
  ) {}

  @post('/donor-account-controllers', {
    responses: {
      '200': {
        description: 'DonorAccountController model instance',
        content: {'application/json': {schema: getModelSchemaRef(DonorAccountController)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DonorAccountController, {
            title: 'NewDonorAccountController',
            exclude: ['donorId'],
          }),
        },
      },
    })
    donorAccountController: Omit<DonorAccountController, 'donorId'>,
  ): Promise<DonorAccountController> {
    return this.donorAccountControllerRepository.create(donorAccountController);
  }

  @get('/donor-account-controllers/count', {
    responses: {
      '200': {
        description: 'DonorAccountController model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(DonorAccountController) where?: Where<DonorAccountController>,
  ): Promise<Count> {
    return this.donorAccountControllerRepository.count(where);
  }

  @get('/donor-account-controllers', {
    responses: {
      '200': {
        description: 'Array of DonorAccountController model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(DonorAccountController, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(DonorAccountController) filter?: Filter<DonorAccountController>,
  ): Promise<DonorAccountController[]> {
    return this.donorAccountControllerRepository.find(filter);
  }

  @patch('/donor-account-controllers', {
    responses: {
      '200': {
        description: 'DonorAccountController PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DonorAccountController, {partial: true}),
        },
      },
    })
    donorAccountController: DonorAccountController,
    @param.where(DonorAccountController) where?: Where<DonorAccountController>,
  ): Promise<Count> {
    return this.donorAccountControllerRepository.updateAll(donorAccountController, where);
  }

  @get('/donor-account-controllers/{id}', {
    responses: {
      '200': {
        description: 'DonorAccountController model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(DonorAccountController, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(DonorAccountController, {exclude: 'where'}) filter?: FilterExcludingWhere<DonorAccountController>
  ): Promise<DonorAccountController> {
    return this.donorAccountControllerRepository.findById(id, filter);
  }

  @patch('/donor-account-controllers/{id}', {
    responses: {
      '204': {
        description: 'DonorAccountController PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DonorAccountController, {partial: true}),
        },
      },
    })
    donorAccountController: DonorAccountController,
  ): Promise<void> {
    await this.donorAccountControllerRepository.updateById(id, donorAccountController);
  }

  @put('/donor-account-controllers/{id}', {
    responses: {
      '204': {
        description: 'DonorAccountController PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() donorAccountController: DonorAccountController,
  ): Promise<void> {
    await this.donorAccountControllerRepository.replaceById(id, donorAccountController);
  }

  @del('/donor-account-controllers/{id}', {
    responses: {
      '204': {
        description: 'DonorAccountController DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.donorAccountControllerRepository.deleteById(id);
  }
}

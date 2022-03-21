import { PrismaClient } from '@prisma/client';

export class BaseService {
  private client = {} as PrismaClient;

  constructor(prisma = new PrismaClient()) {
    this.client = prisma;
  }

  //   getMany = async (pagination = DEFAULT_PAGINATION, relationships?: string[] | []) => {
  getMany = async (entity: 'order' | 'product' | 'productsOrders') => {

    const result = await this.client[''].findMany()

	https://github.com/prisma/prisma/discussions/7075

	https://github.com/prisma/prisma/issues/5273
  };

  //   getOne = async (
  //     filter: DefaultItemFilterQuery = DEFAULT_FILTER,
  //     relationships?: string[] | [],
  //   ) => {
  //     return this.connection.findOne(
  //       { [filter.field]: filter.value, deleted: false },
  //       // @ts-ignore
  //       { populate: relationships },
  //     );
  //   };

  //   create = async (data: any) => {
  //     const entity = await this.connection.create(data);

  //     await this.connection.persistAndFlush(entity);

  //     return entity;
  //   };

  //   update = async (entity: any, newData: any) => {
  //     wrap(entity).assign(newData, { mergeObjects: true });

  //     await this.connection.flush();

  //     return entity;
  //   };

  //   delete = async (entity: any) => {
  //     const deletedData = { deleted: true, deletedAt: new Date() };

  //     return this.update(entity, deletedData);
  //   };
}

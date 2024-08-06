import db from '@libs/db';
import type { Product } from '@prisma/client';

export type { Option, Option_Value, Product } from '@prisma/client';

export class ProductRepository {
  async create(data: Product) {
    return db.product.create({ data });
  }

  async findMany() {
    return db.product.findMany();
  }

  async findOne(id: string) {
    return db.product.findUnique({ where: { id } });
  }

  async update(id: string, data: Product) {
    return db.product.update({ where: { id }, data });
  }

  async delete(id: string) {
    return db.product.delete({ where: { id } });
  }
}

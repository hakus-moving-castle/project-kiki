import db from '@libs/db';
import type { Category } from '@prisma/client';

export type { Category } from '@prisma/client';

export class CategoryRepository {
  async create(data: Category) {
    return db.category.create({ data });
  }

  async findMany() {
    return db.category.findMany();
  }

  async findOne(id: string) {
    return db.category.findUnique({ where: { id } });
  }

  async update(id: string, data: Category) {
    return db.category.update({ where: { id }, data });
  }

  async delete(id: string) {
    return db.category.delete({ where: { id } });
  }
}

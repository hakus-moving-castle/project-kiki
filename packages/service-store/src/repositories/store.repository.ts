import db from '@libs/db';
import type { Store } from '@prisma/client';

export type { Store } from '@prisma/client';

export class StoreRepository {
  async create(data: Store) {
    return db.store.create({ data });
  }

  async findMany() {
    return db.store.findMany();
  }

  async findOne(id: string) {
    return db.store.findUnique({ where: { id } });
  }

  async update(id: string, data: Store) {
    return db.store.update({ where: { id }, data });
  }

  async delete(id: string) {
    return db.store.delete({ where: { id } });
  }
}

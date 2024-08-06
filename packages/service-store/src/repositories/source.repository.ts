import db from '@libs/db';
import type { Source } from '@prisma/client';

export type { Source } from '@prisma/client';

export class SourceRepository {
  async create(data: Source) {
    return db.source.create({ data });
  }

  async findMany() {
    return db.source.findMany();
  }

  async findOne(id: string) {
    return db.source.findUnique({ where: { id } });
  }

  async update(id: string, data: Source) {
    return db.source.update({ where: { id }, data });
  }

  async delete(id: string) {
    return db.source.delete({ where: { id } });
  }
}

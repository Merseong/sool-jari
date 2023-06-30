import { PrismaClient } from '@prisma/client';

const testDb = new PrismaClient().test;

export { testDb };

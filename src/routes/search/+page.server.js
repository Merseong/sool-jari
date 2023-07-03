import { prismaClient } from '$lib/server/dbBase.js';

const alcDB = prismaClient.alcohol;

export const load = async () => {
  const res = await alcDB.findMany();
  return { alcs: res };
};

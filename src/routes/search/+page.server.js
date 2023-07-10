import { prismaClient } from '$lib/server/dbBase.js';

const alcDB = prismaClient.alcohol;

export const load = async () => {
  const res = await alcDB.findMany();
  return { alcs: res };
};

export const actions = {
  DEFAULT: async ({ cookies, request }) => {
    const formData = await request.formData();

    console.log(formData);

    return { success: true };
  },
};

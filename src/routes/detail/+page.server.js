import { prismaClient } from '$lib/server/dbBase.js';
import { isNaN } from 'lodash-es';
import { fail } from '@sveltejs/kit';

const alcDB = prismaClient.alcohol;

export const actions = {
  create: async ({ cookies, request }) => {
    const formData = await request.formData();
    const toCreate = {};
    for (const [key, val] of formData.entries()) {
      toCreate[key] = val;
    }

    console.log(toCreate);

    try {
      toCreate.degree = parseInt(toCreate.degree, 10);
      if (isNaN(toCreate.degree)) {
        throw new Error('degree is not a number');
      }

      const result = await alcDB.create({
        data: toCreate,
      });
    } catch (err) {
      console.log(err);
      return fail(400, {
        error: err.message,
      });
    }

    return { success: true };
  },
};

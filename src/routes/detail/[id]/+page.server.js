import { prismaClient } from '$lib/server/dbBase.js';
import { error } from '@sveltejs/kit';
import { isNaN } from 'lodash-es';

const alcDB = prismaClient.alcohol;

export const load = async ({ params }) => {
  if (isNaN(params.id)) {
    throw error(404, 'Not Found');
  }

  const res = await alcDB.findUnique({
    where: {
      id: parseInt(params.id, 10),
    },
  });

  if (!res.id) {
    throw error(404, 'Not Found');
  }

  return { alc: res };
};

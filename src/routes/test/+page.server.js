import { prismaClient } from '$lib/server/dbBase';
import { fail } from '@sveltejs/kit';

const testDB = prismaClient.test;

export const load = async () => {
  const res = await testDB.findMany();
  return { tests: res };
};

export const actions = {
  create: async ({ cookies, request }) => {
    const formData = await request.formData();
    const title = formData.get('title');
    const content = formData.get('content');

    if (!title) {
      return fail(400, {
        error: 'Title must be need',
      });
    }

    const result = await testDB.create({
      data: {
        title,
        content,
      },
    });

    console.log(result);

    return { success: true };
  },
};

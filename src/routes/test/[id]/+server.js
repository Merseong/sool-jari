import { prismaClient } from '$lib/server/dbBase';

const testDB = prismaClient.test;

export async function DELETE({ params, cookies }) {
  await testDB.delete({
    where: { id: parseInt(params.id, 10) },
  });

  return new Response(null, { status: 204 });
}

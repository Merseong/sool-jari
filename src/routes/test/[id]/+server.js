import { testDb } from '$lib/server/dbBase';

export async function DELETE({ params, cookies }) {
	await testDb.delete({
		where: { id: parseInt(params.id, 10) }
	});

	return new Response(null, { status: 204 });
}

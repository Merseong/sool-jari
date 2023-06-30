import { testDb } from '$lib/server/dbBase';

export const load = async () => {
	const res = await testDb.findMany();
	return { tests: res };
};

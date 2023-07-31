import type { LayoutServerLoad } from './$types';
export interface MovieDetail {
	box_office?: string;
	chronology?: number;
	cover_url?: string | undefined;
	directed_by?: string;
	duration?: number;
	id: number;
	imdb_id?: string;
	overview: string;
	phase?: number;
	post_credit_scenes?: number;
	release_date?: string;
	saga?: string;
	title: string;
	trailer_url?: string;
}
async function getMCUData() {
	const res = await fetch('https://mcuapi.herokuapp.com/api/v1/movies');
	const data = await res.json();
	return data;
}
export const load = (async () => {
	const { data } = await getMCUData();
	const films: MovieDetail[] = data;

	return { films };
}) satisfies LayoutServerLoad;

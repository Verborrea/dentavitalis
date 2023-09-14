import { categorias } from './data.js';

export function load() {
	return {
		cats: categorias.map((category) => ({
			slug: category.slug,
			name: category.name,
            services: category.services
		}))
	};
}
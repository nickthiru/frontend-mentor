import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			"$gl-styles": "../_styles",
			"$gl-layouts": "../_styles/layouts",
			"$styles": "./src/styles",
			"$layouts": "./styles/layouts",
			"$components": "./src/lib/components",
			"$data": "./src/data"
		}
	},
};

export default config;
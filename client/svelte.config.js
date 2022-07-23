import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: { default: true },
	},
	preprocess: [
		preprocess({
			postcss: true
		}),
		typescript({ sourceMap: false })
	]
};

export default config;

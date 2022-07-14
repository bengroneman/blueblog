import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: [
		preprocess({
			postcss: true
		}),
		typescript({ sourceMap: false })
	]
};

export default config;

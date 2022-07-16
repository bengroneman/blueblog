<script lang="js">
	import ArticleShowcase from '../components/ArticleShowcase.svelte';
	// import P5Playground from '../components/P5Playground.svelte';
	import Hero from '../components/Hero.svelte';

	import { getPayload } from '../lib/utils';
	import { onMount } from 'svelte';

	const url = 'http://localhost:1337/api/homepage?populate=*';
	let heroContent = {};
	onMount(async () => {
		heroContent = await getPayload(url);
	});
</script>

<Hero content={heroContent} />

<ArticleShowcase />

<!--<P5Playground />-->

<script lang="js">
	import ArticleShowcase from '../components/ArticleShowcase.svelte';
	// import P5Playground from '../components/P5Playground.svelte';
	import Hero from '../components/Hero.svelte';

	import { getPayload } from '../lib/utils';
	import { onMount } from 'svelte';

    const host = 'http://localhost:1337/'
	const homepage_endpiont = `${host}api/homepage?populate=*`;
    const articles_endpoint = `${host}api/articles?populate=*`;
	let heroContent = {};
    let articles = [];
    let loading = true;

	onMount(async () => {
		heroContent = await getPayload(homepage_endpiont);
		articles = await getPayload(articles_endpoint);
		loading = false;
	});
</script>

{#if herContent && !loading}
	<Hero content={heroContent} />
{/if}

{#if articles && !loading}
    <ArticleShowcase {articles} />
{/if}

<!--<P5Playground />-->

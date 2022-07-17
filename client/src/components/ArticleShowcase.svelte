<script>
	import { onMount } from 'svelte';
	import ArticleCard from '../components/ArticleCard.svelte';
	import { getPayload } from '../lib/utils.js';

	let articles = [];
	let error = null;
	let loading = true;

	onMount(async () => {
		const url = 'http://localhost:1337/api/articles?populate=*';
		articles = await getPayload(url);
		loading = false;
	});
</script>

{#if articles && !loading}
	<div>
		<div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
			<div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
				<div>
					<h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
						Recent publications
					</h2>
				</div>
				<div class="grid lg:grid-cols-3 sm:grid-cols-1">
					{#if error}
						<p class="text-red">{error.status}</p>
					{:else if loading}
						<p class="text-amber-600 text-bold py-2">Loading...</p>
					{:else}
						{#each articles as article}
							<ArticleCard {article} />
						{/each}
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}

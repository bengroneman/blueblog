<script>
	export let content = {};
</script>

<div class="relative my-12">
	{#if content.attributes}
		<div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
			<div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
				<h1
					class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
				>
					<span class="block xl:inline">{content.attributes.seo.metaTitle}</span>
				</h1>
				<p class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
					{content.attributes.seo.metaDescription}
				</p>
				<div class="mt-10 sm:flex sm:justify-center lg:justify-start">
					<div class="rounded-md shadow">
						<a
							href="/blog"
							class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
						>
							Learn More
						</a>
					</div>
				</div>
			</div>
		</div>
		<div
			class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
		>
			<img
				class="flex m-auto"
				src="http://localhost:1337{content.attributes.media.data.attributes.url}"
				alt={content.attributes.media.data.attributes.alternativeText}
			/>
		</div>
	{/if}
</div>

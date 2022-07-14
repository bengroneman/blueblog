<script lang="js">
	export let article;
</script>

<div class="mt-12">
	<div>
		<a href="/blog/article-{article.id}" class="inline-block">
			<span
				class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
			>
				{article.attributes.title}
			</span>
		</a>
	</div>
	<a href="/blog/article-{article.id}" class="block mt-4">
		<p class="text-xl font-semibold text-gray-900">
			{article.attributes.category.data.attributes.name}
		</p>
		<p class="mt-3 text-base text-gray-500">{article.attributes.description}</p>
	</a>
	<div class="mt-6 flex items-center">
		<div class="flex-shrink-0">
			<a href="#">
				<span class="sr-only">{article.attributes.author.data.attributes.name}</span>
				<img
					class="h-10 w-10 rounded-full"
					src="http://localhost:1337{article.attributes.image.data[0].attributes.url}"
					alt={article.attributes.image.data[0].attributes.alternativeText}
				/>
			</a>
		</div>
		<div class="ml-3">
			<p class="text-sm font-medium text-gray-900">
				<a href="#"> {article.attributes.author.data.attributes.name} </a>
			</p>
			<div class="flex space-x-1 text-sm text-gray-500">
				<time datetime="2020-03-16"> {article.attributes.createdAt} </time>
				<span aria-hidden="true"> &middot; </span>
				<span> 6 min read </span>
			</div>
		</div>
	</div>
</div>

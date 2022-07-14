var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
	for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
	if ((from && typeof from === 'object') || typeof from === 'function') {
		for (let key of __getOwnPropNames(from))
			if (!__hasOwnProp.call(to, key) && key !== except)
				__defProp(to, key, {
					get: () => from[key],
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
	}
	return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
	A: () => ArticleShowcase
});
module.exports = __toCommonJS(stdin_exports);
var import_index_829c628b = require('./index-829c628b.js');
const ArticleCard = (0, import_index_829c628b.c)(($$result, $$props, $$bindings, slots) => {
	let { article } = $$props;
	if ($$props.article === void 0 && $$bindings.article && article !== void 0)
		$$bindings.article(article);
	return `<div class="${'mt-12'}"><div><a href="${
		'/blog/article-' + (0, import_index_829c628b.b)(article.id)
	}" class="${'inline-block'}"><span class="${'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800'}">${(0,
	import_index_829c628b.b)(article.attributes.title)}</span></a></div>
	<a href="${
		'/blog/article-' + (0, import_index_829c628b.b)(article.id)
	}" class="${'block mt-4'}"><p class="${'text-xl font-semibold text-gray-900'}">${(0,
	import_index_829c628b.b)(article.attributes.category.data.attributes.name)}</p>
		<p class="${'mt-3 text-base text-gray-500'}">${(0, import_index_829c628b.b)(
		article.attributes.description
	)}</p></a>
	<div class="${'mt-6 flex items-center'}"><div class="${'flex-shrink-0'}"><a href="${'#'}"><span class="${'sr-only'}">${(0,
	import_index_829c628b.b)(article.attributes.author.data.attributes.name)}</span>
				<img class="${'h-10 w-10 rounded-full'}"${(0, import_index_829c628b.d)(
		'src',
		'http://localhost:1337' + article.attributes.image.data.attributes.url,
		0
	)}${(0, import_index_829c628b.d)(
		'alt',
		article.attributes.image.data.attributes.alternativeText,
		0
	)}></a></div>
		<div class="${'ml-3'}"><p class="${'text-sm font-medium text-gray-900'}"><a href="${'#'}">${(0,
	import_index_829c628b.b)(article.attributes.author.data.attributes.name)}</a></p>
			<div class="${'flex space-x-1 text-sm text-gray-500'}"><time datetime="${'2020-03-16'}">${(0,
	import_index_829c628b.b)(article.attributes.createdAt)}</time>
				<span aria-hidden="${'true'}">\xB7 </span>
				<span>6 min read </span></div></div></div></div>`;
});
const ArticleShowcase = (0, import_index_829c628b.c)(($$result, $$props, $$bindings, slots) => {
	let articles = [];
	return `<div><div class="${'bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'}"><div class="${'relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl'}"><div><h2 class="${'text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'}">Recent publications
				</h2>
				<p class="${'mt-3 text-xl text-gray-500 sm:mt-4'}">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet.
					Sapien tortor lacus arcu.
				</p></div>
			<div class="${'grid lg:grid-cols-3 sm:grid-cols-1'}">${`${`<p class="${'text-amber-600 text-bold py-2'}">Loading...</p>`}`}
				${(0, import_index_829c628b.e)(articles, (article) => {
					return `${(0, import_index_829c628b.v)(ArticleCard, 'ArticleCard').$$render(
						$$result,
						{ article },
						{},
						{}
					)}`;
				})}</div></div></div></div>`;
});

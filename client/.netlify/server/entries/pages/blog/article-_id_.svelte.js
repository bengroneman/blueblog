var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Article_u5Bidu5D,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_829c628b = require("../../../chunks/index-829c628b.js");
async function load({ params, fetch }) {
  const url = `http://localhost:1337/api/articles/${params.id}?populate=*`;
  console.log(url);
  const response = await fetch(url);
  return {
    status: response.status,
    props: {
      article: response.ok && await response.json()
    }
  };
}
const Article_u5Bidu5D = (0, import_index_829c628b.c)(($$result, $$props, $$bindings, slots) => {
  let { article } = $$props;
  if ($$props.article === void 0 && $$bindings.article && article !== void 0)
    $$bindings.article(article);
  return `<div class="${"bg-white overflow-hidden"}"><div class="${"relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"}"><div class="${"hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"}"></div>
		<div class="${"mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none"}"><div><h2 class="${"text-base text-indigo-600 font-semibold tracking-wide uppercase"}">${(0, import_index_829c628b.b)(article.data.attributes.category.data.attributes.name)}</h2>
				<h3 class="${"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"}">${(0, import_index_829c628b.b)(article.data.attributes.title)}</h3></div></div>
		<div class="${"mt-8 lg:grid lg:grid-cols-2 lg:gap-8"}"><div class="${"relative lg:row-start-1 lg:col-start-2"}"><svg class="${"hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"}" width="${"404"}" height="${"384"}" fill="${"none"}" viewBox="${"0 0 404 384"}" aria-hidden="${"true"}"><defs><pattern id="${"de316486-4a29-4312-bdfc-fbce2132a2c1"}" x="${"0"}" y="${"0"}" width="${"20"}" height="${"20"}" patternUnits="${"userSpaceOnUse"}"><rect x="${"0"}" y="${"0"}" width="${"4"}" height="${"4"}" class="${"text-gray-200"}" fill="${"currentColor"}"></rect></pattern></defs><rect width="${"404"}" height="${"384"}" fill="${"url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"}"></rect></svg>
				<div class="${"relative text-base mx-auto max-w-prose lg:max-w-none"}"><figure><div class="${"aspect-w-12 aspect-h-7 lg:aspect-none"}"><img class="${"rounded-lg shadow-lg object-cover object-center"}" src="${"https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"}" alt="${"Whitney leaning against a railing on a downtown street"}" width="${"1184"}" height="${"1376"}"></div>
						<figcaption class="${"mt-3 flex text-sm text-gray-500"}">
							<svg class="${"flex-none w-5 h-5 text-gray-400"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" aria-hidden="${"true"}"><path fill-rule="${"evenodd"}" d="${"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"}" clip-rule="${"evenodd"}"></path></svg>
							<span class="${"ml-2"}">Photograph by ${(0, import_index_829c628b.b)(article.data.attributes.author.data.attributes.name)}</span></figcaption></figure></div></div>
			<div class="${"mt-8 lg:mt-0"}"><div class="${"text-base max-w-prose mx-auto lg:max-w-none"}"><p class="${"text-lg text-gray-500"}">${(0, import_index_829c628b.b)(article.data.attributes.content)}</p></div></div></div></div></div>

${slots.default ? slots.default({}) : ``}`;
});

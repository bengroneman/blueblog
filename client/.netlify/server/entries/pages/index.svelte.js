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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_829c628b = require("../../chunks/index-829c628b.js");
var import_ArticleShowcase_72d64028 = require("../../chunks/ArticleShowcase-72d64028.js");
const Hero = (0, import_index_829c628b.c)(($$result, $$props, $$bindings, slots) => {
  let { content = {} } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  return `<div class="${"relative my-12"}"><div class="${"mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left"}"><div class="${"px-4 lg:w-1/2 sm:px-8 xl:pr-16"}">${content.attributes ? `<h1 class="${"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"}"><span class="${"block xl:inline"}">${(0, import_index_829c628b.b)(content.attributes.hero.title)}</span></h1>` : ``}
			<p class="${"mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"}">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
				Elit sunt amet fugiat veniam occaecat fugiat aliqua.
			</p>
			<div class="${"mt-10 sm:flex sm:justify-center lg:justify-start"}"><div class="${"rounded-md shadow"}"><a href="${"#"}" class="${"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"}">Get started
					</a></div></div></div></div>
	<div class="${"relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"}"><h1>Canvas</h1></div></div>`;
});
const Routes = (0, import_index_829c628b.c)(($$result, $$props, $$bindings, slots) => {
  let heroContent = {};
  return `${(0, import_index_829c628b.v)(Hero, "Hero").$$render($$result, { content: heroContent }, {}, {})}

${(0, import_index_829c628b.v)(import_ArticleShowcase_72d64028.A, "ArticleShowcase").$$render($$result, {}, {}, {})}`;
});

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
  A: () => ArticleShowcase
});
module.exports = __toCommonJS(stdin_exports);
var import_index_829c628b = require("./index-829c628b.js");
const ArticleShowcase = (0, import_index_829c628b.c)(($$result, $$props, $$bindings, slots) => {
  let articles = [];
  let loading = true;
  return `${articles && !loading ? `<div><div class="${"bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"}"><div class="${"relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl"}"><div><h2 class="${"text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"}">Recent publications
					</h2></div>
				<div class="${"grid lg:grid-cols-3 sm:grid-cols-1"}">${`${`<p class="${"text-amber-600 text-bold py-2"}">Loading...</p>`}`}</div></div></div></div>` : ``}`;
});

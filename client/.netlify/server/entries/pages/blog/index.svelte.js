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
  default: () => Blog
});
module.exports = __toCommonJS(stdin_exports);
var import_index_829c628b = require("../../../chunks/index-829c628b.js");
var import_ArticleShowcase_72d64028 = require("../../../chunks/ArticleShowcase-72d64028.js");
const Blog = (0, import_index_829c628b.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_829c628b.v)(import_ArticleShowcase_72d64028.A, "ArticleShowcase").$$render($$result, {}, {}, {})}`;
});

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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_829c628b = require("../../chunks/index-829c628b.js");
var app = /* @__PURE__ */ (() => '/*\n! tailwindcss v3.1.3 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n.pointer-events-none {\n  pointer-events: none;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.sticky {\n  position: -webkit-sticky;\n  position: sticky;\n}\n.inset-0 {\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.inset-y-0 {\n  top: 0px;\n  bottom: 0px;\n}\n.top-0 {\n  top: 0px;\n}\n.right-0 {\n  right: 0px;\n}\n.bottom-0 {\n  bottom: 0px;\n}\n.left-3\\/4 {\n  left: 75%;\n}\n.left-0 {\n  left: 0px;\n}\n.z-40 {\n  z-index: 40;\n}\n.z-10 {\n  z-index: 10;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-12 {\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n}\n.mt-12 {\n  margin-top: 3rem;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.mt-6 {\n  margin-top: 1.5rem;\n}\n.ml-3 {\n  margin-left: 0.75rem;\n}\n.mt-10 {\n  margin-top: 2.5rem;\n}\n.-mr-12 {\n  margin-right: -3rem;\n}\n.ml-1 {\n  margin-left: 0.25rem;\n}\n.mt-5 {\n  margin-top: 1.25rem;\n}\n.ml-2 {\n  margin-left: 0.5rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.-ml-0\\.5 {\n  margin-left: -0.125rem;\n}\n.-mt-0\\.5 {\n  margin-top: -0.125rem;\n}\n.-ml-0 {\n  margin-left: -0px;\n}\n.-mt-0 {\n  margin-top: -0px;\n}\n.mt-8 {\n  margin-top: 2rem;\n}\n.-mt-20 {\n  margin-top: -5rem;\n}\n.-mr-20 {\n  margin-right: -5rem;\n}\n.block {\n  display: block;\n}\n.inline-block {\n  display: inline-block;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.h-64 {\n  height: 16rem;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.h-0 {\n  height: 0px;\n}\n.h-8 {\n  height: 2rem;\n}\n.h-12 {\n  height: 3rem;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.min-h-0 {\n  min-height: 0px;\n}\n.w-10 {\n  width: 2.5rem;\n}\n.w-full {\n  width: 100%;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.w-auto {\n  width: auto;\n}\n.w-14 {\n  width: 3.5rem;\n}\n.w-12 {\n  width: 3rem;\n}\n.w-screen {\n  width: 100vw;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.w-1\\/2 {\n  width: 50%;\n}\n.max-w-lg {\n  max-width: 32rem;\n}\n.max-w-7xl {\n  max-width: 80rem;\n}\n.max-w-md {\n  max-width: 28rem;\n}\n.max-w-xs {\n  max-width: 20rem;\n}\n.max-w-prose {\n  max-width: 65ch;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.flex-none {\n  flex: none;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.shrink {\n  flex-shrink: 1;\n}\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.gap-y-6 {\n  row-gap: 1.5rem;\n}\n.gap-x-4 {\n  -moz-column-gap: 1rem;\n       column-gap: 1rem;\n}\n.gap-y-8 {\n  row-gap: 2rem;\n}\n.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}\n.divide-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-y-reverse: 0;\n  border-top-width: calc(2px * calc(1 - var(--tw-divide-y-reverse)));\n  border-bottom-width: calc(2px * var(--tw-divide-y-reverse));\n}\n.divide-gray-200 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-divide-opacity));\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-y-auto {\n  overflow-y: auto;\n}\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-transparent {\n  border-color: transparent;\n}\n.border-sky-800 {\n  --tw-border-opacity: 1;\n  border-color: rgb(7 89 133 / var(--tw-border-opacity));\n}\n.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\n.bg-indigo-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(224 231 255 / var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-indigo-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(79 70 229 / var(--tw-bg-opacity));\n}\n.bg-gray-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n}\n.bg-sky-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(3 105 161 / var(--tw-bg-opacity));\n}\n.bg-sky-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(7 89 133 / var(--tw-bg-opacity));\n}\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\n.bg-gray-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n}\n.bg-opacity-75 {\n  --tw-bg-opacity: 0.75;\n}\n.object-cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.object-center {\n  -o-object-position: center;\n     object-position: center;\n}\n.p-4 {\n  padding: 1rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-0\\.5 {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\n.py-0 {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.py-16 {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n.py-12 {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.pt-16 {\n  padding-top: 4rem;\n}\n.pb-20 {\n  padding-bottom: 5rem;\n}\n.pt-2 {\n  padding-top: 0.5rem;\n}\n.pt-5 {\n  padding-top: 1.25rem;\n}\n.pb-4 {\n  padding-bottom: 1rem;\n}\n.pl-4 {\n  padding-left: 1rem;\n}\n.pl-1 {\n  padding-left: 0.25rem;\n}\n.pt-1 {\n  padding-top: 0.25rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-extrabold {\n  font-weight: 800;\n}\n.font-bold {\n  font-weight: 700;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.leading-3 {\n  line-height: .75rem;\n}\n.leading-8 {\n  line-height: 2rem;\n}\n.leading-6 {\n  line-height: 1.5rem;\n}\n.tracking-tight {\n  letter-spacing: -0.025em;\n}\n.tracking-widest {\n  letter-spacing: 0.1em;\n}\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\n.text-indigo-800 {\n  --tw-text-opacity: 1;\n  color: rgb(55 48 163 / var(--tw-text-opacity));\n}\n.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\n.text-amber-600 {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.text-indigo-600 {\n  --tw-text-opacity: 1;\n  color: rgb(79 70 229 / var(--tw-text-opacity));\n}\n.text-gray-200 {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity));\n}\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\n.underline {\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\n.decoration-amber-600 {\n  -webkit-text-decoration-color: #d97706;\n          text-decoration-color: #d97706;\n}\n.decoration-teal-600 {\n  -webkit-text-decoration-color: #0d9488;\n          text-decoration-color: #0d9488;\n}\n.decoration-wavy {\n  -webkit-text-decoration-style: wavy;\n          text-decoration-style: wavy;\n}\n.decoration-2 {\n  text-decoration-thickness: 2px;\n}\n.decoration-4 {\n  text-decoration-thickness: 4px;\n}\n.placeholder-gray-500::-moz-placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-placeholder-opacity));\n}\n.placeholder-gray-500:-ms-input-placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-placeholder-opacity));\n}\n.placeholder-gray-500::placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-placeholder-opacity));\n}\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.focus-within\\:ring-2:focus-within {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus-within\\:ring-indigo-500:focus-within {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity));\n}\n.focus-within\\:ring-offset-2:focus-within {\n  --tw-ring-offset-width: 2px;\n}\n.focus-within\\:ring-offset-gray-100:focus-within {\n  --tw-ring-offset-color: #f3f4f6;\n}\n.hover\\:bg-indigo-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(67 56 202 / var(--tw-bg-opacity));\n}\n.hover\\:bg-sky-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(2 132 199 / var(--tw-bg-opacity));\n}\n.hover\\:bg-opacity-75:hover {\n  --tw-bg-opacity: 0.75;\n}\n.hover\\:text-gray-900:hover {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}\n.focus\\:border-indigo-500:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(99 102 241 / var(--tw-border-opacity));\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus\\:ring-2:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-inset:focus {\n  --tw-ring-inset: inset;\n}\n.focus\\:ring-white:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));\n}\n.focus\\:ring-sky-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(14 165 233 / var(--tw-ring-opacity));\n}\n.focus\\:ring-indigo-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity));\n}\n.focus\\:ring-offset-2:focus {\n  --tw-ring-offset-width: 2px;\n}\n.group:hover .group-hover\\:opacity-75 {\n  opacity: 0.75;\n}\n@media (min-width: 640px) {\n\n  .sm\\:mt-4 {\n    margin-top: 1rem;\n  }\n\n  .sm\\:flex {\n    display: flex;\n  }\n\n  .sm\\:h-72 {\n    height: 18rem;\n  }\n\n  .sm\\:grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n\n  .sm\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .sm\\:justify-center {\n    justify-content: center;\n  }\n\n  .sm\\:gap-x-6 {\n    -moz-column-gap: 1.5rem;\n         column-gap: 1.5rem;\n  }\n\n  .sm\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n\n  .sm\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n\n  .sm\\:pl-3 {\n    padding-left: 0.75rem;\n  }\n\n  .sm\\:pt-3 {\n    padding-top: 0.75rem;\n  }\n\n  .sm\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n\n  .sm\\:text-5xl {\n    font-size: 3rem;\n    line-height: 1;\n  }\n\n  .sm\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n\n  .sm\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n}\n@media (min-width: 768px) {\n\n  .md\\:fixed {\n    position: fixed;\n  }\n\n  .md\\:inset-y-0 {\n    top: 0px;\n    bottom: 0px;\n  }\n\n  .md\\:mt-5 {\n    margin-top: 1.25rem;\n  }\n\n  .md\\:flex {\n    display: flex;\n  }\n\n  .md\\:hidden {\n    display: none;\n  }\n\n  .md\\:h-96 {\n    height: 24rem;\n  }\n\n  .md\\:w-64 {\n    width: 16rem;\n  }\n\n  .md\\:max-w-3xl {\n    max-width: 48rem;\n  }\n\n  .md\\:flex-col {\n    flex-direction: column;\n  }\n\n  .md\\:py-4 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .md\\:px-10 {\n    padding-left: 2.5rem;\n    padding-right: 2.5rem;\n  }\n\n  .md\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n\n  .md\\:pl-64 {\n    padding-left: 16rem;\n  }\n\n  .md\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n\n  .md\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n}\n@media (min-width: 1024px) {\n\n  .lg\\:absolute {\n    position: absolute;\n  }\n\n  .lg\\:inset-y-0 {\n    top: 0px;\n    bottom: 0px;\n  }\n\n  .lg\\:right-0 {\n    right: 0px;\n  }\n\n  .lg\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n\n  .lg\\:col-span-3 {\n    grid-column: span 3 / span 3;\n  }\n\n  .lg\\:col-start-2 {\n    grid-column-start: 2;\n  }\n\n  .lg\\:row-start-1 {\n    grid-row-start: 1;\n  }\n\n  .lg\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .lg\\:block {\n    display: block;\n  }\n\n  .lg\\:flex {\n    display: flex;\n  }\n\n  .lg\\:grid {\n    display: grid;\n  }\n\n  .lg\\:h-full {\n    height: 100%;\n  }\n\n  .lg\\:w-1\\/2 {\n    width: 50%;\n  }\n\n  .lg\\:max-w-7xl {\n    max-width: 80rem;\n  }\n\n  .lg\\:max-w-none {\n    max-width: none;\n  }\n\n  .lg\\:flex-shrink-0 {\n    flex-shrink: 0;\n  }\n\n  .lg\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .lg\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .lg\\:grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n\n  .lg\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n\n  .lg\\:items-center {\n    align-items: center;\n  }\n\n  .lg\\:justify-start {\n    justify-content: flex-start;\n  }\n\n  .lg\\:justify-between {\n    justify-content: space-between;\n  }\n\n  .lg\\:gap-8 {\n    gap: 2rem;\n  }\n\n  .lg\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n\n  .lg\\:py-48 {\n    padding-top: 12rem;\n    padding-bottom: 12rem;\n  }\n\n  .lg\\:py-16 {\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n  }\n\n  .lg\\:py-24 {\n    padding-top: 6rem;\n    padding-bottom: 6rem;\n  }\n\n  .lg\\:pt-24 {\n    padding-top: 6rem;\n  }\n\n  .lg\\:pb-28 {\n    padding-bottom: 7rem;\n  }\n\n  .lg\\:text-left {\n    text-align: left;\n  }\n\n  .lg\\:text-5xl {\n    font-size: 3rem;\n    line-height: 1;\n  }\n}\n@media (min-width: 1280px) {\n\n  .xl\\:inline {\n    display: inline;\n  }\n\n  .xl\\:gap-x-8 {\n    -moz-column-gap: 2rem;\n         column-gap: 2rem;\n  }\n\n  .xl\\:pr-16 {\n    padding-right: 4rem;\n  }\n\n  .xl\\:pr-12 {\n    padding-right: 3rem;\n  }\n\n  .xl\\:pl-12 {\n    padding-left: 3rem;\n  }\n\n  .xl\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n}\n')();
const getStores = () => {
  const stores = (0, import_index_829c628b.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Sidebar = (0, import_index_829c628b.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_829c628b.a)(page, (value) => $page = value);
  let navigation;
  navigation = [
    { url: "/", name: "Home", isActive: true },
    {
      url: "/blog",
      name: "Blog",
      isActive: false
    },
    {
      url: "/client-portal",
      name: "Client Portal",
      isActive: false
    },
    {
      url: "/gallery",
      name: "Gallery",
      isActive: false
    },
    {
      url: "/contact",
      name: "Contact",
      isActive: false
    }
  ];
  $$unsubscribe_page();
  return `<div>
	<div class="${"relative z-40 md:hidden"}" role="${"dialog"}" aria-modal="${"true"}"><div class="${"fixed inset-0 bg-gray-600 bg-opacity-75"}"></div>

		<div class="${"fixed inset-0 flex z-40"}"><div class="${"relative flex-1 flex flex-col max-w-xs w-full bg-sky-700"}"><div class="${"absolute top-0 right-0 -mr-12 pt-2"}"><button type="${"button"}" class="${"ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"}"><span class="${"sr-only"}">Close sidebar</span>
						
						<svg class="${"h-6 w-6 text-white"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M6 18L18 6M6 6l12 12"}"></path></svg></button></div>

				<div class="${"flex-1 h-0 pt-5 pb-4 overflow-y-auto"}"><div class="${"flex-shrink-0 flex items-center px-4"}"><img class="${"h-8 w-auto"}" src="${"https://tailwindui.com/img/logos/workflow-logo-sky-300-mark-white-text.svg"}" alt="${"Workflow"}"></div>
					<nav class="${"mt-5 px-2 space-y-1"}">
						${(0, import_index_829c628b.e)(navigation, (nav) => {
    return `<a${(0, import_index_829c628b.d)("href", nav.url, 0)} class="${(0, import_index_829c628b.b)($page.url.pathname !== nav.url ? "bg-sky-800 text-white" : "text-white hover:bg-sky-600 hover:bg-opacity-75") + " group flex items-center px-4 py-2 text-base font-medium rounded-md"}">${$page.url.pathname === nav.url ? `
									<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"}"></path></svg>` : `
									<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"}"></path></svg>`}
								<span class="${"ml-2"}">${(0, import_index_829c628b.b)(nav.name)}</span>
							</a>`;
  })}</nav></div></div>

			<div class="${"flex-shrink-0 w-14"}" aria-hidden="${"true"}"></div></div></div>

	
	<div class="${"hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0"}">
		<div class="${"flex-1 flex flex-col min-h-0 bg-sky-700"}"><div class="${"flex-1 flex flex-col pt-5 pb-4 overflow-y-auto"}"><div class="${"flex items-center flex-shrink-0 px-4 leading-3 tracking-widest font-bold text-2xl"}"><span class="${"text-white decoration-amber-600 decoration-2 underline decoration-wavy mb-2"}">Blue</span> <span class="${"text-white pl-4 underline decoration-4 decoration-teal-600 mt-2"}">G</span></div>
				<nav class="${"mt-5 flex-1 px-2 space-y-1"}">
					${(0, import_index_829c628b.e)(navigation, (nav) => {
    return `<a${(0, import_index_829c628b.d)("href", nav.url, 0)} class="${(0, import_index_829c628b.b)($page.url.pathname === nav.url ? "bg-sky-800 text-white" : "text-white hover:bg-sky-600 hover:bg-opacity-75") + " group flex items-center px-4 py-2 text-base font-medium rounded-md"}">${$page.url.pathname === nav.url ? `
								<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"}"></path></svg>` : `
								<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"}"></path></svg>`}
							<span class="${"ml-2"}">${(0, import_index_829c628b.b)(nav.name)}</span>
						</a>`;
  })}</nav></div>
			<div class="${"flex-shrink-0 flex border-t border-sky-800 p-4"}"></div></div></div>
	<div class="${"md:pl-64 flex flex-col flex-1"}"><div class="${"sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100"}"><button type="${"button"}" class="${"-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"}"><span class="${"sr-only"}">Open sidebar</span>
				
				<svg class="${"h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M4 6h16M4 12h16M4 18h16"}"></path></svg></button></div>
		<main class="${"flex-1"}"><div class="${"py-6"}"><div class="${"max-w-7xl mx-auto px-4 sm:px-6 md:px-8"}"><h1 class="${"text-2xl font-semibold text-gray-900"}">${(0, import_index_829c628b.b)($page.url.pathname.split("/").pop())}</h1></div>
				<div class="${"max-w-7xl mx-auto px-4 sm:px-6 md:px-8"}">${slots.default ? slots.default({}) : ``}</div></div></main></div></div>`;
});
const _layout = (0, import_index_829c628b.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_829c628b.v)(Sidebar, "Sidebar").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});

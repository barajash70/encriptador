(()=>{var n={390:(n,e,t)=>{"use strict";t.d(e,{Z:()=>l});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,'/*\n! tailwindcss v3.0.1 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse;  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;  /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;  /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;  /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n.border {\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n\n.shadow-sm, .shadow-2xl {\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n}\r\n.mx-16 {\n  margin-left: 4rem;\n  margin-right: 4rem;\n}\r\n.mx-10 {\n  margin-left: 2.5rem;\n  margin-right: 2.5rem;\n}\r\n.ml-16 {\n  margin-left: 4rem;\n}\r\n.mt-5 {\n  margin-top: 1.25rem;\n}\r\n.mt-2 {\n  margin-top: 0.5rem;\n}\r\n.mr-20 {\n  margin-right: 5rem;\n}\r\n.mt-6 {\n  margin-top: 1.5rem;\n}\r\n.mt-10 {\n  margin-top: 2.5rem;\n}\r\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\r\n.mt-3 {\n  margin-top: 0.75rem;\n}\r\n.mb-4 {\n  margin-bottom: 1rem;\n}\r\n.mt-4 {\n  margin-top: 1rem;\n}\r\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\r\n.flex {\n  display: flex;\n}\r\n.hidden {\n  display: none;\n}\r\n.h-8 {\n  height: 2rem;\n}\r\n.h-28 {\n  height: 7rem;\n}\r\n.h-3 {\n  height: 0.75rem;\n}\r\n.h-10 {\n  height: 2.5rem;\n}\r\n.w-10 {\n  width: 2.5rem;\n}\r\n.w-56 {\n  width: 14rem;\n}\r\n.w-3 {\n  width: 0.75rem;\n}\r\n.w-72 {\n  width: 18rem;\n}\r\n.w-80 {\n  width: 20rem;\n}\r\n.w-52 {\n  width: 13rem;\n}\r\n.flex-row {\n  flex-direction: row;\n}\r\n.flex-col {\n  flex-direction: column;\n}\r\n.flex-wrap {\n  flex-wrap: wrap;\n}\r\n.items-center {\n  align-items: center;\n}\r\n.justify-center {\n  justify-content: center;\n}\r\n.justify-evenly {\n  justify-content: space-evenly;\n}\r\n.rounded-md {\n  border-radius: 0.375rem;\n}\r\n.rounded-3xl {\n  border-radius: 1.5rem;\n}\r\n.border {\n  border-width: 1px;\n}\r\n.border-slate-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(226 232 240 / var(--tw-border-opacity));\n}\r\n.bg-transparent {\n  background-color: transparent;\n}\r\n.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\n}\r\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\r\n.pl-4 {\n  padding-left: 1rem;\n}\r\n.pt-5 {\n  padding-top: 1.25rem;\n}\r\n.pt-8 {\n  padding-top: 2rem;\n}\r\n.pt-7 {\n  padding-top: 1.75rem;\n}\r\n.text-left {\n  text-align: left;\n}\r\n.text-center {\n  text-align: center;\n}\r\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\r\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\r\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\r\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\r\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\r\n.font-normal {\n  font-weight: 400;\n}\r\n.font-bold {\n  font-weight: 700;\n}\r\n.font-light {\n  font-weight: 300;\n}\r\n.leading-3 {\n  line-height: .75rem;\n}\r\n.leading-7 {\n  line-height: 1.75rem;\n}\r\n.text-blue {\n  --tw-text-opacity: 1;\n  color: rgb(10 56 113 / var(--tw-text-opacity));\n}\r\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity));\n}\r\n.text-violet-900 {\n  --tw-text-opacity: 1;\n  color: rgb(76 29 149 / var(--tw-text-opacity));\n}\r\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\r\n.shadow-2xl {\n  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\r\n.shadow-black {\n  --tw-shadow-color: #000;\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n\r\n\r\n\r\nhtml,\r\nbody {\r\n  background-color: var(--rgba(255,255,255,1));\r\n  background-size: cover;\r\n}\r\n\r\n\r\n\r\n.placeholder\\:text-red-200::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(254 202 202 / var(--tw-text-opacity));\n}\r\n\r\n\r\n\r\n.placeholder\\:text-red-200:-ms-input-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(254 202 202 / var(--tw-text-opacity));\n}\r\n\r\n\r\n\r\n.placeholder\\:text-red-200::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(254 202 202 / var(--tw-text-opacity));\n}\r\n\r\n\r\n\r\n@media (min-width: 768px) {\n\n  .md\\:mx-6 {\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n  }\n\n  .md\\:mx-16 {\n    margin-left: 4rem;\n    margin-right: 4rem;\n  }\n\n  .md\\:ml-6 {\n    margin-left: 1.5rem;\n  }\n\n  .md\\:ml-10 {\n    margin-left: 2.5rem;\n  }\n\n  .md\\:mt-8 {\n    margin-top: 2rem;\n  }\n\n  .md\\:ml-4 {\n    margin-left: 1rem;\n  }\n\n  .md\\:mt-6 {\n    margin-top: 1.5rem;\n  }\n\n  .md\\:ml-16 {\n    margin-left: 4rem;\n  }\n\n  .md\\:mt-16 {\n    margin-top: 4rem;\n  }\n\n  .md\\:ml-2 {\n    margin-left: 0.5rem;\n  }\n\n  .md\\:mt-2 {\n    margin-top: 0.5rem;\n  }\n\n  .md\\:mr-auto {\n    margin-right: auto;\n  }\n\n  .md\\:ml-12 {\n    margin-left: 3rem;\n  }\n\n  .md\\:mt-4 {\n    margin-top: 1rem;\n  }\n\n  .md\\:flex {\n    display: flex;\n  }\n\n  .md\\:h-14 {\n    height: 3.5rem;\n  }\n\n  .md\\:h-36 {\n    height: 9rem;\n  }\n\n  .md\\:w-14 {\n    width: 3.5rem;\n  }\n\n  .md\\:w-2\\/3 {\n    width: 66.666667%;\n  }\n\n  .md\\:w-10\\/12 {\n    width: 83.333333%;\n  }\n\n  .md\\:w-80 {\n    width: 20rem;\n  }\n\n  .md\\:flex-col {\n    flex-direction: column;\n  }\n\n  .md\\:items-start {\n    align-items: flex-start;\n  }\n\n  .md\\:justify-items-stretch {\n    justify-items: stretch;\n  }\n\n  .md\\:pl-10 {\n    padding-left: 2.5rem;\n  }\n\n  .md\\:pt-4 {\n    padding-top: 1rem;\n  }\n\n  .md\\:text-left {\n    text-align: left;\n  }\n}\r\n\r\n\r\n\r\n@media (min-width: 1024px) {\n\n  .lg\\:mx-6 {\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n  }\n\n  .lg\\:mt-5 {\n    margin-top: 1.25rem;\n  }\n\n  .lg\\:ml-1 {\n    margin-left: 0.25rem;\n  }\n\n  .lg\\:mt-20 {\n    margin-top: 5rem;\n  }\n\n  .lg\\:ml-20 {\n    margin-left: 5rem;\n  }\n\n  .lg\\:mb-2 {\n    margin-bottom: 0.5rem;\n  }\n\n  .lg\\:ml-10 {\n    margin-left: 2.5rem;\n  }\n\n  .lg\\:ml-16 {\n    margin-left: 4rem;\n  }\n\n  .lg\\:mt-96 {\n    margin-top: 24rem;\n  }\n\n  .lg\\:mr-auto {\n    margin-right: auto;\n  }\n\n  .lg\\:mt-4 {\n    margin-top: 1rem;\n  }\n\n  .lg\\:mb-1 {\n    margin-bottom: 0.25rem;\n  }\n\n  .lg\\:ml-8 {\n    margin-left: 2rem;\n  }\n\n  .lg\\:mr-10 {\n    margin-right: 2.5rem;\n  }\n\n  .lg\\:mb-0 {\n    margin-bottom: 0px;\n  }\n\n  .lg\\:mt-36 {\n    margin-top: 9rem;\n  }\n\n  .lg\\:flex {\n    display: flex;\n  }\n\n  .lg\\:h-56 {\n    height: 14rem;\n  }\n\n  .lg\\:h-1\\/6 {\n    height: 16.666667%;\n  }\n\n  .lg\\:h-80 {\n    height: 20rem;\n  }\n\n  .lg\\:w-4\\/5 {\n    width: 80%;\n  }\n\n  .lg\\:w-56 {\n    width: 14rem;\n  }\n\n  .lg\\:w-3\\/4 {\n    width: 75%;\n  }\n\n  .lg\\:w-96 {\n    width: 24rem;\n  }\n\n  .lg\\:flex-row {\n    flex-direction: row;\n  }\n\n  .lg\\:flex-wrap {\n    flex-wrap: wrap;\n  }\n\n  .lg\\:justify-items-stretch {\n    justify-items: stretch;\n  }\n\n  .lg\\:pt-32 {\n    padding-top: 8rem;\n  }\n\n  .lg\\:pt-20 {\n    padding-top: 5rem;\n  }\n}\r\n\r\n\r\n\r\n@media (min-width: 1280px) {\n\n  .xl\\:mx-4 {\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n\n  .xl\\:ml-16 {\n    margin-left: 4rem;\n  }\n\n  .xl\\:mt-36 {\n    margin-top: 9rem;\n  }\n\n  .xl\\:ml-32 {\n    margin-left: 8rem;\n  }\n\n  .xl\\:ml-20 {\n    margin-left: 5rem;\n  }\n\n  .xl\\:mt-56 {\n    margin-top: 14rem;\n  }\n\n  .xl\\:ml-3 {\n    margin-left: 0.75rem;\n  }\n\n  .xl\\:mt-2 {\n    margin-top: 0.5rem;\n  }\n\n  .xl\\:mr-auto {\n    margin-right: auto;\n  }\n\n  .xl\\:mr-10 {\n    margin-right: 2.5rem;\n  }\n\n  .xl\\:mb-10 {\n    margin-bottom: 2.5rem;\n  }\n\n  .xl\\:ml-12 {\n    margin-left: 3rem;\n  }\n\n  .xl\\:mt-8 {\n    margin-top: 2rem;\n  }\n\n  .xl\\:mr-24 {\n    margin-right: 6rem;\n  }\n\n  .xl\\:h-12 {\n    height: 3rem;\n  }\n\n  .xl\\:h-2\\/4 {\n    height: 50%;\n  }\n\n  .xl\\:w-80 {\n    width: 20rem;\n  }\n\n  .xl\\:w-8\\/12 {\n    width: 66.666667%;\n  }\n\n  .xl\\:bg-transparent {\n    background-color: transparent;\n  }\n\n  .xl\\:pt-20 {\n    padding-top: 5rem;\n  }\n\n  .xl\\:pt-4 {\n    padding-top: 1rem;\n  }\n\n  .xl\\:pb-32 {\n    padding-bottom: 8rem;\n  }\n\n  .xl\\:text-left {\n    text-align: left;\n  }\n}',""]);const l=a},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var m=[].concat(n[d]);r&&a[m[0]]||(void 0!==i&&(void 0===m[5]||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=i),t&&(m[2]?(m[1]="@media ".concat(m[2]," {").concat(m[1],"}"),m[2]=t):m[2]=t),o&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=o):m[4]="".concat(o)),e.push(m))}},e}},81:n=>{"use strict";n.exports=function(n){return n[1]}},851:(n,e,t)=>{n.exports=t.p+"assets/Vector.svg"},23:(n,e,t)=>{n.exports=t.p+"assets/logo-alura.svg"},379:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],l=0;l<n.length;l++){var s=n[l],d=r.base?s[0]+r.base:s[0],m=i[d]||0,c="".concat(d," ").concat(m);i[d]=m+1;var g=t(c),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==g)e[g].references++,e[g].updater(h);else{var p=o(h,r);r.byIndex=l,e.splice(l,0,{identifier:c,updater:p,references:1})}a.push(c)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var l=t(i[a]);e[l].references--}for(var s=r(n,o),d=0;d<i.length;d++){var m=t(i[d]);0===e[m].references&&(e[m].updater(),e.splice(m,1))}i=s}}},569:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{"use strict";var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),l=t(565),s=t.n(l),d=t(216),m=t.n(d),c=t(589),g=t.n(c),h=t(390),p={};p.styleTagTransform=g(),p.setAttributes=s(),p.insert=a().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=m(),e()(h.Z,p),h.Z&&h.Z.locals&&h.Z.locals,t(23),t(851);const u=document.getElementById("buttonEncriptar"),f=document.getElementById("buttonDesencriptar"),b=document.getElementById("mensaje"),w=document.getElementById("texto"),x=document.getElementById("animacionLlave"),y=document.getElementById("buttonCopy");u.addEventListener("click",(()=>{const n=document.querySelector(".input-texto");let e=n.value;if(""===e)return;n.value="",f.value="";let t=function(n){let e=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];n=n.toLowerCase();for(let t=0;t<e.length;t++)n.includes(e[t][0])&&(n=n.replaceAll(e[t][0],e[t][1]));return n}(e);b.textContent=t,w.classList.add("hidden"),x.classList.add("hidden"),y.classList.remove("hidden")})),f.addEventListener("click",(()=>{let n=document.querySelector(".input-texto").value;if(""===n)return;let e=function(n){let e=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];n=n.toLowerCase();for(let t=0;t<e.length;t++)n.includes(e[t][1])&&(n=n.replaceAll(e[t][1],e[t][0]));return n}(n);b.textContent=e,w.classList.add("hidden"),imagenMunecoHTML.classList.add("hidden"),y.classList.remove("hidden")})),y.addEventListener("click",(()=>{let n=b.textContent;navigator.clipboard.writeText(n)}))})()})();
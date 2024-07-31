import { c as create_ssr_component, a as subscribe, v as validate_component, h as each, n as add_styles, e as escape } from "../../../../../chunks/ssr.js";
import { L as LayoutPage } from "../../../../../chunks/LayoutPage.js";
import { b as storeOnboardMethod } from "../../../../../chunks/stores7.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { T as TabGroup, a as Tab } from "../../../../../chunks/Tab.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
import { t as themes } from "../../../../../chunks/themes.js";
const SectionInstall = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $storeOnboardMethod, $$unsubscribe_storeOnboardMethod;
  $$unsubscribe_storeOnboardMethod = subscribe(storeOnboardMethod, (value) => $storeOnboardMethod = value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1k65sfl">Create Your Project</h2> ${validate_component(TabGroup, "TabGroup").$$render($$result, { regionPanel: "space-y-4" }, {}, {
      panel: () => {
        return ` ${$storeOnboardMethod === "cli" ? `<p data-svelte-h="svelte-1p525o4">We <u>highly recommend</u> the Skeleton CLI for creating new Skeleton projects. This will automatically scaffold a new SvelteKit application,
					install Tailwind, configure Skeleton, and more.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "shell",
            code: `
npm create skeleton-app@latest my-skeleton-app
	- Enable Typescript when prompted (recommended)
cd my-skeleton-app
						`
          },
          {},
          {}
        )}` : `${$storeOnboardMethod === "manual" ? ` <p data-svelte-h="svelte-1m7bt64">First we&#39;ll generate a new <a class="anchor" href="https://kit.svelte.dev/docs/creating-a-project" target="_blank" rel="noreferrer">SvelteKit project</a>. If you already have a SvelteKit project, skip to the next step.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "shell",
            code: `
npm create svelte@latest my-skeleton-app
	- Enable Typescript when prompted (recommended)
cd my-skeleton-app
npm install
		`
          },
          {},
          {}
        )}` : ``}`} `;
      },
      default: () => {
        return ` ${validate_component(Tab, "Tab").$$render(
          $$result,
          {
            name: "cli",
            value: "cli",
            group: $storeOnboardMethod
          },
          {
            group: ($$value) => {
              $storeOnboardMethod = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Skeleton CLI`;
            }
          }
        )} ${validate_component(Tab, "Tab").$$render(
          $$result,
          {
            name: "manual",
            value: "manual",
            group: $storeOnboardMethod
          },
          {
            group: ($$value) => {
              $storeOnboardMethod = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Manual Install`;
            }
          }
        )} `;
      }
    })}</section>`;
  } while (!$$settled);
  $$unsubscribe_storeOnboardMethod();
  return $$rendered;
});
const SectionSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $storeOnboardMethod, $$unsubscribe_storeOnboardMethod;
  $$unsubscribe_storeOnboardMethod = subscribe(storeOnboardMethod, (value) => $storeOnboardMethod = value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1bj1rxx">Install Skeleton</h2> ${validate_component(TabGroup, "TabGroup").$$render($$result, { regionPanel: "space-y-4" }, {}, {
      panel: () => {
        return ` ${$storeOnboardMethod === "cli" ? `<aside class="alert variant-ghost p-4" data-svelte-h="svelte-1ag6r9t"><i class="fa-solid fa-circle-check"></i> <div class="alert-message"><p>The CLI will automatically install Skeleton and the Skeleton Tailwind plugin.</p></div></aside>` : `${$storeOnboardMethod === "manual" ? ` <p data-svelte-h="svelte-1yev3k6">Install the packages for <a class="anchor" href="https://www.npmjs.com/package/@skeletonlabs/skeleton" target="_blank" rel="noreferrer">Skeleton</a> and the <a class="anchor" href="https://www.npmjs.com/package/@skeletonlabs/tw-plugin" target="_blank" rel="noreferrer">Skeleton Tailwind plugin</a>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "shell",
            code: `npm i -D @skeletonlabs/skeleton @skeletonlabs/tw-plugin`
          },
          {},
          {}
        )}` : ``}`} `;
      },
      default: () => {
        return ` ${validate_component(Tab, "Tab").$$render(
          $$result,
          {
            name: "cli",
            value: "cli",
            group: $storeOnboardMethod
          },
          {
            group: ($$value) => {
              $storeOnboardMethod = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Skeleton CLI`;
            }
          }
        )} ${validate_component(Tab, "Tab").$$render(
          $$result,
          {
            name: "manual",
            value: "manual",
            group: $storeOnboardMethod
          },
          {
            group: ($$value) => {
              $storeOnboardMethod = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Manual Install`;
            }
          }
        )} `;
      }
    })}</section>`;
  } while (!$$settled);
  $$unsubscribe_storeOnboardMethod();
  return $$rendered;
});
const SectionTailwind = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $storeOnboardMethod, $$unsubscribe_storeOnboardMethod;
  $$unsubscribe_storeOnboardMethod = subscribe(storeOnboardMethod, (value) => $storeOnboardMethod = value);
  let tabConfigFormat = "ts";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = ` <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-l93gmg">Install Tailwind</h2> ${validate_component(TabGroup, "TabGroup").$$render($$result, { regionPanel: "space-y-4" }, {}, {
      panel: () => {
        return ` ${$storeOnboardMethod === "cli" ? `<aside class="alert variant-ghost p-4" data-svelte-h="svelte-1jz8mwe"><i class="fa-solid fa-circle-check"></i> <div class="alert-message"><p>The CLI will automatically install Tailwind and configure all required settings.</p></div></aside>` : `${$storeOnboardMethod === "manual" ? `<div class="space-y-4"> <p data-svelte-h="svelte-lqaj6c"><a class="anchor" href="https://github.com/svelte-add/tailwindcss" target="_blank" rel="noreferrer">Svelte-Add</a> automates the process of installing Tailwind in SvelteKit.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "shell",
            code: `npx svelte-add@latest tailwindcss
npm install`
          },
          {},
          {}
        )}</div> <h3 class="h3" data-svelte-h="svelte-js8jdc">Tailwind Configuration</h3> <p data-svelte-h="svelte-1q1hg98">Let&#39;s make a few modifications to the <code class="code">tailwind.config.[ts|js|cjs]</code>, found in the root of your project.</p> ${validate_component(TabGroup, "TabGroup").$$render($$result, { regionPanel: "space-y-4" }, {}, {
          panel: () => {
            return ` ${tabConfigFormat === "ts" ? `<p data-svelte-h="svelte-1fjx9ju">For SvelteKit projects using Typescript, install the standard node type definitions.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "shell",
                code: `npm add -D @types/node`
              },
              {},
              {}
            )} <p data-svelte-h="svelte-1u879bz">Then, setup your Tailwind configuration using the <code class="code">.ts</code> file extension.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
import { join } from 'path';
import type { Config } from 'tailwindcss';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {},
	},
	plugins: [
		// 4. Append the Skeleton plugin (after other plugins)
		skeleton
	]
} satisfies Config;

export default config;
						`
              },
              {},
              {}
            )}` : `${tabConfigFormat === "js" ? `<p data-svelte-h="svelte-15ngffj">For SvelteKit projects using Javascript or JSDoc, implement your Tailwind configuration using the <code class="code">.js</code> file extension.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "js",
                code: `
// @ts-check
import { join } from 'path';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

/** @type {import('tailwindcss').Config} */
export default {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {},
	},
	plugins: [
		// 4. Append the Skeleton plugin (after other plugins)
		skeleton
	]
}
						`
              },
              {},
              {}
            )}` : `<aside class="alert variant-ghost-warning" data-svelte-h="svelte-fvqigi"><p>Skeleton no longer recommends the CommonJS format. We&#39;ve included this merely as reference.</p></aside> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "cjs",
                code: `

// @ts-check

// 1. Import the Skeleton plugin
const { skeleton } = require('@skeletonlabs/tw-plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		require('path').join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {},
	},
	plugins: [
		// 4. Append the Skeleton plugin (after other plugins)
		skeleton
	]
}
						`
              },
              {},
              {}
            )}`}`} `;
          },
          default: () => {
            return ` ${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                name: "ts",
                value: "ts",
                group: tabConfigFormat
              },
              {
                group: ($$value) => {
                  tabConfigFormat = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Typescript (.ts)`;
                }
              }
            )} ${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                name: "js",
                value: "js",
                group: tabConfigFormat
              },
              {
                group: ($$value) => {
                  tabConfigFormat = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Javascript (.js)`;
                }
              }
            )} ${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                name: "cjs",
                value: "cjs",
                group: tabConfigFormat
              },
              {
                group: ($$value) => {
                  tabConfigFormat = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `CommonJS (.cjs)`;
                }
              }
            )} `;
          }
        })} <aside class="alert variant-ghost" data-svelte-h="svelte-xk12in"><p>See our <a class="anchor" href="/docs/themes#dark-mode" target="_blank">Themes</a> guide to learn more about using Tailwind&#39;s light
						and dark mode options.</p></aside>` : ``}`} `;
      },
      default: () => {
        return ` ${validate_component(Tab, "Tab").$$render(
          $$result,
          {
            name: "cli",
            value: "cli",
            group: $storeOnboardMethod
          },
          {
            group: ($$value) => {
              $storeOnboardMethod = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Skeleton CLI`;
            }
          }
        )} ${validate_component(Tab, "Tab").$$render(
          $$result,
          {
            name: "manual",
            value: "manual",
            group: $storeOnboardMethod
          },
          {
            group: ($$value) => {
              $storeOnboardMethod = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Manual Install`;
            }
          }
        )} `;
      }
    })}</section>`;
  } while (!$$settled);
  $$unsubscribe_storeOnboardMethod();
  return $$rendered;
});
const SectionThemes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeThemeStylesheet;
  let activeTheme = themes[1];
  activeThemeStylesheet = `
plugins: [
	skeleton({
		themes: { preset: [ "${activeTheme.file}" ] }
	})
]

`;
  return ` <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1atdrsu">Add Themes</h2> <p data-svelte-h="svelte-1exgbe7">Skeleton provides several preset themes out of the box. Select a theme to learn how to implement it.</p>  <div class="space-y-4"><nav class="grid grid-cols-1 md:grid-cols-2 gap-4">${each(themes.slice(1, themes.length), (preset) => {
    return `<button class="card card-hover p-4 text-white hover:ring-surface-500/50 cursor-pointer space-y-4"${add_styles({ "background": preset.surface })}><div class="flex justify-between items-center gap-4"><span class="text-center font-bold">${escape(preset.name)}</span> <ul class="flex justify-center items-center -space-x-1">${each(preset.colors, (color) => {
      return `<li class="aspect-square w-3 xl:w-4 rounded-full"${add_styles({ "background": color })}></li>`;
    })} </ul></div> </button>`;
  })}</nav> <p data-svelte-h="svelte-bui3ph">First, register your preferred theme(s) in <code class="code">tailwind.config.[ts|js|cjs]</code>. This will ensure each theme is
			available to use.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      language: "ts",
      code: activeThemeStylesheet
    },
    {},
    {}
  )} <p data-svelte-h="svelte-yb8pix">Next, open <code class="code">/src/app.html</code> and set the active theme using the <code class="code">data-theme</code>
			attribute.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      language: "html",
      code: `<body data-theme="${activeTheme.file}">`
    },
    {},
    {}
  )}</div>  <div class="card variant-glass p-4" data-svelte-h="svelte-1yyqj0z"><div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4"><p>Learn more about Skeleton themes and customization.</p> <a class="btn variant-filled-secondary" href="/docs/themes">Themes Guide →</a></div></div>  <div class="card variant-glass p-4" data-svelte-h="svelte-1c3p5e9"><div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4"><p>Create a custom theme using the theme generator.</p> <a class="btn variant-filled-secondary" href="/docs/generator">Theme Generator →</a></div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LayoutPage, "LayoutPage").$$render($$result, {}, {}, {
    default: () => {
      return `<header class="space-y-4" data-svelte-h="svelte-173wfby"><h1 class="h1">Get Started</h1>  <p>We recommend at least moderate experience with <a class="anchor" href="https://svelte.dev/tutorial/basics" target="_blank" rel="noreferrer">Svelte</a>, <a class="anchor" href="https://learn.svelte.dev/tutorial/welcome-to-svelte" target="_blank" rel="noreferrer">SvelteKit</a>, and <a class="anchor" href="https://tailwindcss.com/docs/utility-first" target="_blank" rel="noreferrer">Tailwind CSS</a> before you proceed.</p> <aside class="alert variant-ghost"><i class="fa-solid fa-triangle-exclamation"></i> <p>Please be aware that Skeleton only supports <u>SvelteKit applications</u> at this time.</p></aside></header> <hr> ${validate_component(SectionInstall, "SectionInstall").$$render($$result, {}, {}, {})} ${validate_component(SectionSkeleton, "SectionSkeleton").$$render($$result, {}, {}, {})} ${validate_component(SectionTailwind, "SectionTailwind").$$render($$result, {}, {}, {})} ${validate_component(SectionThemes, "SectionThemes").$$render($$result, {}, {}, {})}`;
    }
  })}`;
});
export {
  Page as default
};

import { c as create_ssr_component, v as validate_component, h as each, d as add_attribute, e as escape } from "../../../../../chunks/ssr.js";
import { t as themes } from "../../../../../chunks/themes.js";
import { L as LayoutPage } from "../../../../../chunks/LayoutPage.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { T as Table } from "../../../../../chunks/Table.js";
import { T as TabGroup, a as Tab } from "../../../../../chunks/Tab.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeFonts;
  let activeTheme = themes[1];
  let tabsFontImport = 0;
  const sourceCssProperties = [
    [
      '<code class="code">--theme-font-family-base</code>',
      "Set the font family for your default base text."
    ],
    [
      '<code class="code">--theme-font-family-heading</code>',
      "Set the font family for your heading text."
    ],
    [
      '<code class="code">--theme-font-color-base</code>',
      "Set the default text color for light mode."
    ],
    [
      '<code class="code">--theme-font-color-dark</code>',
      "Set the default text color for dark mode."
    ],
    [
      '<code class="code">--theme-rounded-base</code>',
      "Set the border radius for small elements, such as buttons, inputs, etc."
    ],
    [
      '<code class="code">--theme-rounded-container</code>',
      "Set the border radius for large elements, such as cards, textfields, etc."
    ],
    [
      '<code class="code">--theme-border-base</code>',
      "Set the default border size for elements, including inputs."
    ],
    // Theme On-X Colors
    [
      '<code class="code">--on-[color]</code>',
      "Set an accessible overlapping text or fill color per each theme color."
    ],
    [
      '<code class="code">--color-[color]-[shade]</code>',
      "Defines each color and shade value for your theme."
    ]
  ];
  const tableCssProperties = {
    // A list of heading labels.
    head: ["CSS Property", "Description"],
    // The data visibly shown in your table body UI.
    body: sourceCssProperties
  };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    activeFonts = activeTheme.fonts.length ? activeTheme.fonts : themes[0].fonts;
    $$rendered = `${validate_component(LayoutPage, "LayoutPage").$$render($$result, {}, {}, {
      default: () => {
        return `<header class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4" data-svelte-h="svelte-1449v4v"><div class="space-y-4"><h1 class="h1">Themes</h1>  <p>Skeleton leans into <a class="anchor" href="https://tailwindcss.com/docs/customizing-colors#using-css-variables" target="_blank" rel="noreferrer">Tailwind&#39;s best practices</a> when implementing themes. This includes support for <a class="anchor" href="https://tailwindcss.com/docs/background-color#changing-the-opacity" target="_blank" rel="noreferrer">color opacity</a> and <a class="anchor" href="https://tailwindcss.com/docs/dark-mode" target="_blank" rel="noreferrer">dark mode</a>. Themes also enable Skeleton&#39;s <a class="anchor" href="/docs/tokens" target="_blank">design tokens</a> system.</p></div></header> <hr> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-17v40l8">CSS Custom Properties</h2>  <p data-svelte-h="svelte-bbm985">Skeleton themes are generated using a number of <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*" target="_blank" rel="noreferrer">CSS Custom Properties</a>, also known as as CSS variables.</p> ${validate_component(Table, "Table").$$render($$result, { source: tableCssProperties }, {}, {})} <h3 class="h3" data-svelte-h="svelte-1fggpfj">Overwriting Properties</h3>  <p data-svelte-h="svelte-181e4ce">Similar to variables in other languages, CSS properties can be overwritten. By adding the following snippet in <code class="code">/src/app.postcss</code>, you can overwrite the <em>base</em> and <em>container</em> border radius styles for your active theme.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "css",
            code: `
/* NOTE: set your target theme name (ex: skeleton, wintry, modern, etc) */

:root [data-theme='skeleton'] {
	--theme-rounded-base: 20px;
	--theme-rounded-container: 4px;
}
		`
          },
          {},
          {}
        )} <p data-svelte-h="svelte-jgm90s">Likewise, you can override <em>base</em> and <em>heading</em> font family settings as shown below.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "css",
            code: `
/* NOTE: set your target theme name (ex: skeleton, wintry, modern, etc) */

:root [data-theme='skeleton'] {
    --theme-font-family-base: 'MyCustomFont', sans-serif;
    --theme-font-family-heading: 'MyCustomFont', sans-serif;
}
		`
          },
          {},
          {}
        )}  <p data-svelte-h="svelte-d0aaas">For deeper customization, consider cloning Skeleton&#39;s preset themes, modifying each as desired, then implementing as a custom theme. Follow the <a class="anchor" href="/docs/generator">theme generator implementation guide</a> for more information.</p></section> <hr> <section class="space-y-4" data-svelte-h="svelte-8szr2"><div class="h2 flex items-center gap-2"><h2>CSS-in-JS Format</h2> <span class="badge variant-filled-warning">New in v2</span></div> <p>Skeleton now defines theme settings via the CSS-in-JS format. This allows themes to be easily registered within the Skeleton Tailwind
			plugin, rather than relying on additional stylesheet imports.</p></section> <hr> <section class="space-y-4"><div class="h2 flex items-center gap-2" data-svelte-h="svelte-ns0w3y"><h2 class="h2">Tailwind Plugin Settings</h2> <span class="badge variant-filled-warning">New in v2</span></div> <p data-svelte-h="svelte-b98698">Themes are configured via Skeleton&#39;s Tailwind plugin in your <code class="code">tailwind.config.[ts|js|cjs]</code>, found in your
			project root.</p> <h3 class="h3" data-svelte-h="svelte-wnrx7h">Register Themes</h3> <p data-svelte-h="svelte-1wwlitx">Skeleton provides a number of <a class="anchor" href="/docs/get-started#preset-themes">preset themes</a> out of the box. You&#39;ll need to
			register at least one theme to load them and make them available to use.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `
plugins: [
	skeleton({
		themes: {
			// Register each theme within this array:
			preset: [ "skeleton", "modern", "crimson" ] 
		}
	})
]
	`
          },
          {},
          {}
        )} <p data-svelte-h="svelte-t491h2">Open <code class="code">/src/app.html</code> and define the active theme to display using the <code class="code">data-theme</code> attribute.
			You can modify this attribute to dynamically switch between any registered theme.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `<body data-theme="skeleton">`
          },
          {},
          {}
        )} <h3 class="h3" data-svelte-h="svelte-19b2dt7">Enhancements</h3> <p data-svelte-h="svelte-1mlzcbh">Preset themes may sometimes include additional optional features, such as: heading font weights, background mesh gradients, and more.
			To enable these settings, include <code class="code">enhancements</code> as shown below.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `
plugins: [
	skeleton({
		themes: {
			preset: [
				// Enable 'enhancements' per each registered theme:
				{ name: "skeleton", enhancements: true }
			] 
		}
	})
]
	`
          },
          {},
          {}
        )} <h3 class="h3" data-svelte-h="svelte-1b86zob">Custom Themes</h3> <p data-svelte-h="svelte-x5qjct">View the <a class="anchor" href="/docs/generator">theme generator</a> for more information about implementing custom themes. Note that
			it is possible to mix and match preset and custom themes.</p></section> <hr> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-demgd0">Dark Mode</h2> <p data-svelte-h="svelte-15hwwi6">By default Tailwind opts for light mode. If you wish to default to dark mode, append the following class to the <code class="code">html</code>
			element within <code class="code">/src/app.html</code>. View
			<a class="anchor" href="https://tailwindcss.com/docs/dark-mode" target="_blank">Tailwind&#39;s documentation</a> for more information.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `<html class="dark">`
          },
          {},
          {}
        )} <p data-svelte-h="svelte-z59b1a">Note that Skeleton also provides a <a class="anchor" href="/docs/dark-mode#via-selector" target="_blank">Lightswitch</a> utility if you wish
			toggle between light and dark modes.</p></section> <hr> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-yqtx1i">Backgrounds</h2>  <p data-svelte-h="svelte-1a2z1t2">The background color of your application is automatically set using one of Skeleton&#39;s <a class="anchor" href="https://www.skeleton.dev/docs/tokens">design token</a> styles. By default, this utilizes <code class="code">--color-surface-50</code> for light mode and <code class="code">--color-surface-900</code> for dark mode. Use your global stylesheet <code class="code">app.postcss</code> to modify this.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "css",
            code: `
/* Default setting: */
body { @apply bg-surface-50-900-token; }

/* --- */

/* Example: primary color via a design token: */
body { @apply bg-primary-50-900-token; }

/* Example: secondary color via Tailwind: */
body { @apply bg-secondary-50 dark:bg-secondary-900; }

/* Example: using vanilla CSS: */
body { background: red; }
.dark body { background: blue; }
		`
          },
          {},
          {}
        )} <div class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center" data-svelte-h="svelte-ymnx1e"><div class="space-y-4"><h3 class="h3">Images and Gradients</h3> <p>You may optionally provide a background image, including the use of a CSS mesh gradient. Replace the static color values with
					theme color properties to create a fully adaptive gradient background.</p></div> <div><a class="btn variant-filled font-bold" href="https://csshero.org/mesher/" target="_blank" rel="noreferrer"><span>Create a Mesh</span> <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div></div> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "css",
            code: `
html, body { @apply h-full; }
body {
	background-image:
		radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
		radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
		`
          },
          {},
          {}
        )}</section> <hr> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1ahkjqw">Custom Fonts</h2>  <p data-svelte-h="svelte-1ypfmoz">Fonts may be installed from a local or remote source. For <a class="anchor" href="https://gdpr.eu/" target="_blank" rel="noreferrer">GDPR compliance</a> and optimal performance we recommend installing the fonts locally. For this guide we&#39;ll demonstrate this process using free fonts from <a class="anchor" href="https://fonts.google.com/" target="_blank" rel="noreferrer">Google Fonts</a>.</p> ${validate_component(TabGroup, "TabGroup").$$render($$result, { regionPanel: "space-y-4" }, {}, {
          panel: () => {
            return ` ${tabsFontImport === 0 ? ` <h3 class="h3" data-toc-ignore data-svelte-h="svelte-1o5doyf">1. Download a Font</h3> <p data-svelte-h="svelte-qkif0x">Select a font on Google Fonts, then tap the &quot;Download Family&quot; button near the top-right of the page.</p> <div class="card variant-glass p-4 flex justify-center items-center gap-2">${each(activeFonts, (f) => {
              return `<a class="btn variant-filled-primary"${add_attribute("href", f.url, 0)} target="_blank" rel="noreferrer"><i class="fa-solid fa-download"></i> <span>${escape(f.name)}</span> </a>`;
            })}</div>  <h3 class="h3" data-toc-ignore data-svelte-h="svelte-1ty404a">2. Add the Font Files</h3> <p data-svelte-h="svelte-1w1s4qf">Unzip the downloaded file, then copy all font files to the <code class="code">/static/fonts</code> directory in the root of your
						SvelteKit project. When available we recommend using variable fonts as they require only a single file. Otherwise copy all
						static font file assets to the <code class="code">/static/fonts</code> directory.</p> ${each(activeFonts, (f) => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "shell",
                  code: `/static/fonts/${f.file}`
                },
                {},
                {}
              )}`;
            })}  <h3 class="h3" data-toc-ignore data-svelte-h="svelte-10x89kq">3. Apply @font-face</h3>  <p data-svelte-h="svelte-1y2mnx4">At the top of your global stylesheet <code class="code">/src/app.postcss</code> append the <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face" target="_blank" rel="noreferrer">@font-face</a> settings per each font. The <code class="code">font-family</code> assigns the font&#39;s reference name, while <code class="code">src</code> points to the font file(s) in your <code class="code">/static/fonts</code> directory.</p> ${each(activeFonts, (f) => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "css",
                  code: `
@font-face {
	/* Reference name */
	font-family: '${f.name}';
	/* For multiple files use commas, ex: url(), url(), ... */
	src: url('/fonts/${f.file}');
}
							`
                },
                {},
                {}
              )}`;
            })}  <h3 class="h3" data-toc-ignore data-svelte-h="svelte-16p66zk">4. Set the Font Family.</h3> <p data-svelte-h="svelte-1aithbg">Use CSS Property overrides or open your custom theme to set the font family for <em>base</em> and
						<em>heading</em> properties. Be sure to use the same reference name set above or your font <u>will not work</u>.</p> ${each(activeFonts, (f) => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "css",
                  code: `
/* NOTE: set your target theme name (ex: skeleton, wintry, modern, etc) */

:root [data-theme='skeleton'] {
    --theme-font-family-base: '${f.name}', sans-serif;
    --theme-font-family-heading: '${f.name}', sans-serif;
    /* ... */
}
                        	`
                },
                {},
                {}
              )}`;
            })}  <h3 class="h3" data-toc-ignore data-svelte-h="svelte-gku8ko">5. Preloading Fonts.</h3> <p data-svelte-h="svelte-gegpkx">To avoid your page flickering during hydration, consider preloading fonts within the <code class="code">head</code>
						tag in <code class="code">app.html</code></p> ${each(activeFonts, (f) => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `
<link
	rel="preload"
	href="%sveltekit.assets%/fonts/${f.file}"
	as="font"
	type="font/ttf"
	crossorigin
/>
                        	`
                },
                {},
                {}
              )}`;
            })}` : `${tabsFontImport === 1 ? `<aside class="alert alert-message variant-ghost-warning" data-svelte-h="svelte-1htm6aq"><p><strong>Warning:</strong> please be aware that using remote imports are typically not GDPR compliant.</p></aside>  <h3 class="h3" data-toc-ignore data-svelte-h="svelte-15qvx0r">1. Select a Font</h3> <p data-svelte-h="svelte-pbp2yv">Choose a font on Google Fonts, select each font weight you wish to use, then tap the &quot;View Select Families&quot; icon button at the
						very top-right of the page. Under the &quot;Use on the Web&quot; section, choose <code class="code">@import</code>, then copy the import
						statement.</p> <div class="card variant-glass p-4 flex justify-center items-center gap-2">${each(activeFonts, (f) => {
              return `<a class="btn variant-filled-primary"${add_attribute("href", f.url, 0)} target="_blank" rel="noreferrer"><span>${escape(f.name)}</span> <i class="fa-solid fa-arrow-up-right-from-square"></i> </a>`;
            })}</div> <h3 class="h3" data-toc-ignore data-svelte-h="svelte-ifhr38">2. Set the Import</h3> <p data-svelte-h="svelte-f7bvhg">Open your global stylesheet in <code class="code">/src/app.postcss</code> and paste the import statement at the top of the file,
						above all <code class="code">@tailwind</code> directives.</p> ${each(activeFonts, (f) => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "css",
                  code: `@import url('${f.import}');`
                },
                {},
                {}
              )}`;
            })}  <h3 class="h3" data-toc-ignore data-svelte-h="svelte-1ilwkkl">3. Set the Font Family.</h3> <p data-svelte-h="svelte-87xr7r">Google Fonts also provides a recommend font family set. Copy the provided set, then apply this to either the <em>base</em> or
						<em>heading</em> properties as desired.</p> ${each(activeFonts, (f) => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "css",
                  code: `
/* NOTE: set your target theme name (ex: skeleton, wintry, modern, etc) */

:root [data-theme='skeleton'] {
    --theme-font-family-base: '${f.name}', sans-serif;
    --theme-font-family-heading: '${f.name}', sans-serif;
    /* ... */
}
                        	`
                },
                {},
                {}
              )}`;
            })}` : ``}`} `;
          },
          default: () => {
            return `${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                name: "tab1",
                value: 0,
                group: tabsFontImport
              },
              {
                group: ($$value) => {
                  tabsFontImport = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Local (recommended)`;
                }
              }
            )} ${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                name: "tab2",
                value: 1,
                group: tabsFontImport
              },
              {
                group: ($$value) => {
                  tabsFontImport = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Remote`;
                }
              }
            )} `;
          }
        })}</section>`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};

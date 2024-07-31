import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { T as TabGroup, a as Tab } from "../../../../../chunks/Tab.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
import { L as LightSwitch } from "../../../../../chunks/LightSwitch.js";
const sveldLightSwitch = { "props": [{ "name": "title", "kind": "let", "description": "Customize the `title` attribute for the component.", "type": "string", "value": "'Toggle light or dark mode.'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "bgLight", "kind": "let", "description": "Provide classes to set the light background color.", "type": "string", "value": "'bg-surface-50'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "bgDark", "kind": "let", "description": "Provide classes to set the dark background color.", "type": "string", "value": "'bg-surface-900'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "fillLight", "kind": "let", "description": "Provide classes to set the light SVG fill color.", "type": "string", "value": "'fill-surface-50'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "fillDark", "kind": "let", "description": "Provide classes to set the dark SVG fill color.", "type": "string", "value": "'fill-surface-900'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "width", "kind": "let", "description": "Provide classes to set width styles.", "type": "string", "value": "'w-12'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "height", "kind": "let", "description": "Provide classes to set height styles. Should be half of width.", "type": "string", "value": "'h-6'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "ring", "kind": "let", "description": "Provide classes to set ring styles.", "type": "string", "value": "'ring-[1px] ring-surface-500/30'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "rounded", "kind": "let", "description": "Provide classes to set border radius styles.", "type": "string", "value": "'rounded-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [], "events": [{ "type": "forwarded", "name": "click", "element": "div" }, { "type": "forwarded", "name": "keydown", "element": "div" }, { "type": "forwarded", "name": "keyup", "element": "div" }, { "type": "forwarded", "name": "keypress", "element": "div" }], "typedefs": [] };
const snippetAutoModeWatcher = "<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();<\/script>'}</svelte:head>";
const snippetSetInitClass = "<svelte:head>{@html '<script>(' + setInitialClassState.toString() + ')();<\/script>'}</svelte:head>";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Utility,
    name: "Dark Mode",
    description: `Learn how to use <a class="anchor" href="https://tailwindcss.com/docs/dark-mode" target="_blank" rel="noreferrer">Tailwind's dark mode</a> within your Skeleton application. Skeleton provides two methods for handling dark mode. Choose a method that meets your application's requirements.`,
    // imports: ['LightSwitch'],
    // source: 'packages/skeleton/src/lib/utilities/LightSwitch',
    // aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/switch/',
    components: [
      {
        label: "Lightswitch",
        sveld: sveldLightSwitch
      }
    ],
    keyboard: [
      [
        '<kbd class="kbd">Space</kbd> or <kbd class="kbd">Enter</kbd>',
        "Toggle the switch state."
      ]
    ]
  };
  let tabInterface = 0;
  let osTabs = 0;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
      usage: () => {
        return ` <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-6uqm7k">Via Selector</h2> <p data-svelte-h="svelte-1iksmf7">Allows users to toggle between light and dark mode with an interactive Lightswitch component.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `
// tailwind.config.[ts|js|cjs]

module.exports = {
  darkMode: 'selector', // <--
  // ...
}
			`
          },
          {},
          {}
        )} <p data-svelte-h="svelte-1mjosjp">Then implement the Skeleton Lightswitch component.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `<blockquote class="blockquote" data-svelte-h="svelte-1rc9iyi">TIP: Note this must be present in the DOM on page load in order to operate. For best results insert this in a fixed element that
						appears on every page, such as your header.</blockquote> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `import { LightSwitch } from '@skeletonlabs/skeleton';
						`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<LightSwitch />`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(LightSwitch, "LightSwitch").$$render($$result, {}, {}, {})}`;
          }
        })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1697txz">Via Media</h2> <p data-svelte-h="svelte-1yo3jm6">Skeleton provides a utility method to adjust the mode based on the user&#39;s operating system preference.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `
// tailwind.config.[ts|js|cjs]

module.exports = {
	darkMode: 'media', // <--
	// ...
}
		`
          },
          {},
          {}
        )} ${validate_component(TabGroup, "TabGroup").$$render($$result, { regionPanel: "space-y-4" }, {}, {
          panel: () => {
            return `${osTabs === 0 ? ` <p data-svelte-h="svelte-14z9se0">First, import the following in <code class="code">/src/routes/+layout.svelte</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `import { autoModeWatcher } from '@skeletonlabs/skeleton';`
              },
              {},
              {}
            )} <p data-svelte-h="svelte-19zh7vn">In the same file, add the following at the top of the HTML markup.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: snippetAutoModeWatcher
              },
              {},
              {}
            )}` : `${osTabs === 1 ? ` <p data-svelte-h="svelte-sib1fx">Open <code class="code">/src/routes/+layout.ts</code> and set the <code class="code">ssr</code> value as shown.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `export const ssr = false;`
              },
              {},
              {}
            )} <p data-svelte-h="svelte-14xjtmb">In the <code class="code">+layout.svelte</code> file, add the following inside a <code class="code">script</code> tag.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
import { onMount } from 'svelte';
import { autoModeWatcher } from '@skeletonlabs/skeleton';

onMount(() => {										
	autoModeWatcher();
})`
              },
              {},
              {}
            )}` : ` <p data-svelte-h="svelte-1dsbgbv">If using Skeleton in a framework other than SvelteKit, ensure that <code class="code">autoModeWatcher()</code> is called as a
							script in <code class="code">html</code> head.</p> <aside class="alert alert-message variant-ghost-warning" data-svelte-h="svelte-x3h4pf"><p>Please note this use case is not officially supported by Skeleton.</p></aside>`}`} `;
          },
          default: () => {
            return `${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                name: "interface",
                value: 0,
                group: osTabs
              },
              {
                group: ($$value) => {
                  osTabs = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `SSR Enabled`;
                }
              }
            )} ${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                name: "interface",
                value: 1,
                group: osTabs
              },
              {
                group: ($$value) => {
                  osTabs = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `SSR Disabled`;
                }
              }
            )} ${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                name: "interface",
                value: 2,
                group: osTabs
              },
              {
                group: ($$value) => {
                  osTabs = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Other Frameworks`;
                }
              }
            )}`;
          }
        })}</section> <hr>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1uoozsz">Custom Component</h2> <p data-svelte-h="svelte-xhd86z">If you wish to build a custom Lightswitch component, Skeleton exposes all required utility methods.</p> <aside class="alert alert-message variant-ghost" data-svelte-h="svelte-1bik7m9"><p>Please consult the Skeleton <a class="anchor" href="https://github.com/skeletonlabs/skeleton/tree/master/packages/skeleton/src/lib/utilities/LightSwitch" target="_blank" rel="noreferrer">Lightswitch source code</a> for reference.</p> </aside> <h3 class="h3" data-svelte-h="svelte-105ay4b">Initilize</h3> <p data-svelte-h="svelte-1v02xnc">Import and add the following within your component. This will set the <code class="code">.dark</code> class on the root HTML element
				in a highly performant manner. Please note that the CLI installer inserts <code class="code">class=&quot;dark&quot;</code>
				statically in the <code class="code">html</code> element of app.html and you should remove it when going this route.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `import { setInitialClassState } from '@skeletonlabs/skeleton';`
          },
          {},
          {}
        )} ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: snippetSetInitClass
          },
          {},
          {}
        )} <h3 class="h3" data-svelte-h="svelte-1pkjyrw">Utilities</h3> <p data-svelte-h="svelte-1casrq3">Light mode is represented by <code class="code">true</code>, while dark mode is represented by
				<code class="code">false</code>.</p> ${validate_component(TabGroup, "TabGroup").$$render($$result, { regionPanel: "space-y-4" }, {}, {
          panel: () => {
            return ` ${tabInterface === 0 ? ` ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `import { modeOsPrefers, modeUserPrefers, modeCurrent } from '@skeletonlabs/skeleton';`
              },
              {},
              {}
            )} <div class="table-container" data-svelte-h="svelte-iw28cv"><table class="table table-hover"><thead><tr><th>Store</th> <th>Value</th> <th>Description</th></tr></thead> <tbody><tr><td><code class="code">$modeOsPrefers</code></td> <td><em>true | false</em></td> <td>The current operating system setting preference.</td></tr> <tr><td><code class="code">$modeUserPrefers</code></td> <td><em>true | false | undefined</em></td> <td>The current user&#39;s selected preference.</td></tr> <tr><td><code class="code">$modeCurrent</code></td> <td><em>true | false</em></td> <td>The current currently active mode setting.</td></tr></tbody></table></div>` : `${tabInterface === 1 ? ` ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `import { getModeOsPrefers, getModeUserPrefers, getModeAutoPrefers } from '@skeletonlabs/skeleton';`
              },
              {},
              {}
            )} <div class="table-container" data-svelte-h="svelte-15rrt1m"><table class="table table-hover"><thead><tr><th>Store</th> <th>Return Type</th> <th>Description</th></tr></thead> <tbody><tr><td><code class="code">getModeOsPrefers()</code></td> <td><em>true | false</em></td> <td>Returns the operating system setting preference.</td></tr> <tr><td><code class="code">getModeUserPrefers()</code></td> <td><em>true | false | undefined</em></td> <td>Returns the user&#39;s selected preference.</td></tr> <tr><td><code class="code">getModeAutoPrefers()</code></td> <td><em>true | false</em></td> <td>Returns the user preference if available, else the OS preference.</td></tr></tbody></table></div>` : `${tabInterface === 2 ? ` ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `import { setModeUserPrefers, setModeCurrent } from '@skeletonlabs/skeleton';`
              },
              {},
              {}
            )} <div class="table-container" data-svelte-h="svelte-z5sqcf"><table class="table table-hover"><thead><tr><th>Store</th> <th>Description</th></tr></thead> <tbody><tr><td><code class="code">setModeUserPrefers(value)</code></td> <td>Set the user preference value.</td></tr> <tr><td><code class="code">setModeCurrent(value)</code></td> <td>Set the current active mode value.</td></tr></tbody></table></div>` : ``}`}`} `;
          },
          default: () => {
            return `${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                name: "interface",
                value: 0,
                group: tabInterface
              },
              {
                group: ($$value) => {
                  tabInterface = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Stores`;
                }
              }
            )} ${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                name: "interface",
                value: 1,
                group: tabInterface
              },
              {
                group: ($$value) => {
                  tabInterface = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Getters`;
                }
              }
            )} ${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                name: "interface",
                value: 2,
                group: tabInterface
              },
              {
                group: ($$value) => {
                  tabInterface = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Setters`;
                }
              }
            )} `;
          }
        })}</section> `;
      },
      default: () => {
        return `  `;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};

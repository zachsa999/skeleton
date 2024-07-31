import { c as create_ssr_component, v as validate_component, h as each, e as escape, d as add_attribute } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview, v as variants } from "../../../../../chunks/DocsPreview.js";
import { g as getToastStore } from "../../../../../chunks/stores3.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Element,
    name: "Chips",
    description: "Interactive elements for actions, selection, or filtering.",
    stylesheetIncludes: ["all", "elements"],
    stylesheets: ["elements/chips"],
    source: "packages/plugin/src/styles/components/chips.css",
    classes: [
      ['<code class="code">chip</code>', "", "Provides the standard chip style."],
      ['<code class="code">chip-disabled</code>', "", "Applies disabled styling."]
    ]
  };
  let currentVariant = "variant-filled";
  let color = "red";
  let flavors = {
    vanilla: true,
    chocolate: false,
    strawberry: false
  };
  getToastStore();
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return ` <p data-svelte-h="svelte-14xa349">Apply <code class="code">.chip</code> to any inline element, such as a <em>span</em> or <em>anchor</em> tag.</p> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1lv5kpo">Action Chips</h2> <p data-svelte-h="svelte-goto5r">Use chips to create small related set of actions.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<button class="chip variant-soft hover:variant-filled" on:click={doSomething}>
	<span>(icon)</span>
	<span>Action</span>
</button>
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return ` <div class="flex justify-center space-x-2"><button class="chip variant-soft hover:variant-filled" data-svelte-h="svelte-u39gs8"><i class="fa-solid fa-heart"></i> <span>Like</span></button> <button class="chip variant-soft hover:variant-filled" data-svelte-h="svelte-16o1azb"><i class="fa-solid fa-share"></i> <span>Share</span></button></div>`;
        }
      })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1lp7q8e">State</h2> <p data-svelte-h="svelte-59j21b">Dynamically modify chip classes to represent state. See the examples below using this technique.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `$: chipStateClass = (someCondition) ? 'variant-filled-primary' : 'variant-soft-primary';`
        },
        {},
        {}
      )} ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<span class="chip {chipStateClass}">...</span>`
        },
        {},
        {}
      )}  <h3 class="h3" data-svelte-h="svelte-1ggd9rs">Single Selection</h3> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "ts",
              code: `let color = 'red';`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
{#each ['red', 'blue', 'green'] as c}
	<button
		class="chip {color === c ? 'variant-filled' : 'variant-soft'}"
		on:click={() => { section(c); }}
		on:keypress
	>
		{#if color === c}(<span>(icon)</span>){/if}
		<span>{c}</span>
	</button>
{/each}
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="flex justify-center space-x-2">${each(["red", "blue", "green"], (c) => {
            return ` <button class="${"chip " + escape(color === c ? "variant-filled" : "variant-soft", true)}">${color === c ? `<span data-svelte-h="svelte-7ozlgn"><i class="fa-solid fa-check"></i></span>` : ``} <span>${escape(c)}</span> </button>`;
          })}</div>`;
        }
      })}  <h3 class="h3" data-svelte-h="svelte-jsv0lc">Multiple Selection</h3> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "ts",
              code: `
let flavors: Record<string, boolean> = {
	vanilla: true,
	chocolate: false,
	strawberry: false
};
`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "ts",
              code: `
function toggle(flavor: string): void {
	flavors[flavor] = !flavors[flavor];
}
`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
{#each Object.keys(flavors) as f}
	<button
		class="chip {flavors[f] ? 'variant-filled' : 'variant-soft'}"
		on:click={() => { toggle(f); }}
		on:keypress
	>
		{#if flavors[f]}<span>(icon)</span>{/if}
		<span class="capitalize">{f}</span>
	</button>
{/each}
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="flex justify-center space-x-2">${each(Object.keys(flavors), (f) => {
            return ` <button class="${"chip " + escape(flavors[f] ? "variant-filled" : "variant-soft", true)}">${flavors[f] ? `<span data-svelte-h="svelte-7ozlgn"><i class="fa-solid fa-check"></i></span>` : ``} <span class="capitalize">${escape(f)}</span> </button>`;
          })}</div>`;
        }
      })}</section> `;
    },
    sandbox: () => {
      return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<span class="chip variant-filled">Chip</span>`
            },
            {},
            {}
          )} `;
        },
        footer: () => {
          return `<div class="flex justify-center gap-4"><select class="select w-auto">${each(variants, (vSet) => {
            return `<optgroup${add_attribute("label", vSet.label, 0)}>${each(vSet.list, (v) => {
              return `<option${add_attribute("value", v, 0)}>${escape(v)}</option>`;
            })}</optgroup>`;
          })}</select></div> `;
        },
        preview: () => {
          return `<span class="${"chip " + escape(currentVariant, true)}">Chip</span>`;
        }
      })} `;
    },
    default: () => {
      return ` `;
    }
  })}`;
});
export {
  Page as default
};

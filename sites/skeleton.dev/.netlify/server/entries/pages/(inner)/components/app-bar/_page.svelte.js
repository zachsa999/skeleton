import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { A as AppBar } from "../../../../../chunks/AppBar.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const sveldAppBar = { "props": [{ "name": "background", "kind": "let", "description": "Provide classes to set background color.", "type": "string", "value": "'bg-surface-100-800-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "border", "kind": "let", "description": "Provide classes to set border styles.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "padding", "kind": "let", "description": "Provide classes to set padding.", "type": "string", "value": "'p-4'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "shadow", "kind": "let", "description": "Provide classes to define a box shadow.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "spacing", "kind": "let", "description": "Provide classes to set the vertical spacing between rows.", "type": "string", "value": "'space-y-4'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "gridColumns", "kind": "let", "description": "Provide classes to set grid columns for the main row.", "type": "string", "value": "'grid-cols-[auto_1fr_auto]'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "gap", "kind": "let", "description": "Provide classes to set gap spacing for the main row.", "type": "string", "value": "'gap-4'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionRowMain", "kind": "let", "description": "Provide arbitrary classes to style the top (main) row.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionRowHeadline", "kind": "let", "description": "Provide arbitrary classes to style the bottom (headline) row.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "slotLead", "kind": "let", "description": "Classes to apply to the lead slot container element", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "slotDefault", "kind": "let", "description": "Classes to apply to the default slot container element", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "slotTrail", "kind": "let", "description": "Classes to apply to the trail slot container element", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "label", "kind": "let", "description": "Provide a semantic ID for the ARIA label.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "labelledby", "kind": "let", "description": "Provide the ID of the element that labels the toolbar.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "__default__", "default": true, "slot_props": "{}" }, { "name": "headline", "default": false, "slot_props": "{}" }, { "name": "lead", "default": false, "slot_props": "", "description": "Provides content on the left end of the bar, e.g. a logo." }, { "name": "trail", "default": false, "slot_props": "", "description": "Provides content on the right end of the bar, e.g. navigation elements." }], "events": [], "typedefs": [] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Component,
    name: "App Bar",
    description: 'A header element for the top of your page layout. Pairs well with the <a class="anchor" href="/components/app-shell">App Shell</a>.',
    imports: ["AppBar"],
    source: "packages/skeleton/src/lib/components/AppBar",
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/",
    components: [{ sveld: sveldAppBar }]
  };
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return ` <p data-svelte-h="svelte-wcr00">App Bars can be generated with a number of different configurations by mixing and matching available slots and props.</p>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-qacqs2">Single Row and Title</h2> ${validate_component(DocsPreview, "DocsPreview").$$render(
        $$result,
        {
          background: "neutral",
          regionViewport: "!text-current"
        },
        {},
        {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<AppBar>
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	(title)
	<svelte:fragment slot="trail">(actions)</svelte:fragment>
</AppBar>
`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(AppBar, "AppBar").$$render($$result, { class: "w-full" }, {}, {
              trail: () => {
                return `<i class="fa-solid fa-paperclip text-xl"></i> <i class="fa-regular fa-calendar text-xl"></i> <i class="fa-solid fa-circle-user text-xl"></i> `;
              },
              lead: () => {
                return `<i class="fa-solid fa-arrow-left text-2xl"></i> `;
              },
              default: () => {
                return `<h2 class="h2" data-toc-ignore data-svelte-h="svelte-1fibrc5">Title</h2>`;
              }
            })}`;
          }
        }
      )}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1ut11c">Barebones</h2> ${validate_component(DocsPreview, "DocsPreview").$$render(
        $$result,
        {
          background: "neutral",
          regionViewport: "!text-current"
        },
        {},
        {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<AppBar>(title)</AppBar>`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(AppBar, "AppBar").$$render($$result, { class: "w-full" }, {}, {
              default: () => {
                return `<h2 class="h2" data-toc-ignore data-svelte-h="svelte-1fibrc5">Title</h2>`;
              }
            })}`;
          }
        }
      )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-17x4vu5">Using Grid Layout</h2>  <p data-svelte-h="svelte-1rbcp4x">The main row utilizes a grid-based layout. Utilize Tailwind&#39;s <a class="anchor" href="https://tailwindcss.com/docs/grid-column" target="_blank" rel="noreferrer">grid column</a> utility classes to control column width. Then use
				<a class="anchor" href="https://tailwindcss.com/docs/place-content" target="_blank" rel="noreferrer">place settings</a> to adjust the placement of the slot contents.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
        $$result,
        {
          background: "neutral",
          regionViewport: "!text-current"
        },
        {},
        {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	(title)
	<svelte:fragment slot="trail">(actions)</svelte:fragment>
</AppBar>
`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(AppBar, "AppBar").$$render(
              $$result,
              {
                gridColumns: "grid-cols-3",
                slotDefault: "place-self-center",
                slotTrail: "place-content-end",
                class: "w-full"
              },
              {},
              {
                trail: () => {
                  return `<i class="fa-solid fa-circle-user text-3xl"></i> `;
                },
                lead: () => {
                  return `<i class="fa-solid fa-bars text-2xl"></i> `;
                },
                default: () => {
                  return `<h2 class="h2" data-toc-ignore data-svelte-h="svelte-1fibrc5">Title</h2>`;
                }
              }
            )}`;
          }
        }
      )} <p data-svelte-h="svelte-e136i9">The example above provides an even three column layout with the title centered and actions right-aligned.</p></section> `;
    },
    sandbox: () => {
      return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { regionViewport: "!text-current" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<AppBar>
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	<svelte:fragment slot="trail">(actions)</svelte:fragment>
	<svelte:fragment slot="headline">(headline)</svelte:fragment>
</AppBar>
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `${validate_component(AppBar, "AppBar").$$render($$result, { class: "w-full" }, {}, {
            headline: () => {
              return `<h1 class="h1" data-svelte-h="svelte-144d4vw">Headline</h1> `;
            },
            trail: () => {
              return `<i class="fa-solid fa-paperclip text-xl"></i> <i class="fa-regular fa-calendar text-xl"></i> <i class="fa-solid fa-circle-user text-xl"></i> `;
            },
            lead: () => {
              return `<i class="fa-solid fa-arrow-left text-2xl"></i>`;
            }
          })}`;
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

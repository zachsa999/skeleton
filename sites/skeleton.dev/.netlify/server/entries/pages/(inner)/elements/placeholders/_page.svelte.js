import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { S as SlideToggle } from "../../../../../chunks/SlideToggle.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Element,
    name: "Placeholders",
    description: 'Provides "skeleton" placeholders that can display while content loads.',
    stylesheetIncludes: ["all", "elements"],
    stylesheets: ["elements/placeholders"],
    source: "packages/plugin/src/styles/components/placeholders.css",
    classes: [
      [
        '<code class="code">placeholder</code>',
        "-",
        "Applies the default placeholder style."
      ],
      [
        '<code class="code">placeholder-circle</code>',
        "-",
        "Applies the circular placeholder style."
      ]
    ]
  };
  let animate = true;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
      usage: () => {
        return ` <p data-svelte-h="svelte-1gyi13f">Apply the <code class="code">.placeholder</code> class to any <em>div</em> element.</p>  <div class="space-y-4"><h2 class="h2" data-svelte-h="svelte-13scmv9">Layout</h2>  <p data-svelte-h="svelte-hh7gx5">Use the <a class="anchor" href="https://tailwindcss.com/docs/grid-template-columns" target="_blank" rel="noreferrer">Tailwind column and gap classes</a> to adjust column amount and gap spacing.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<section class="card w-full">
	<div class="p-4 space-y-4">
		<div class="placeholder" />
		<div class="grid grid-cols-3 gap-8">
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
		</div>
		<div class="grid grid-cols-4 gap-4">
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
		</div>
	</div>
</section>
`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `<section class="card w-full"><div class="${["p-4 space-y-4", animate ? "animate-pulse" : ""].join(" ").trim()}" data-svelte-h="svelte-qgwp3g"><div class="placeholder"></div> <div class="grid grid-cols-3 gap-8"><div class="placeholder"></div> <div class="placeholder"></div> <div class="placeholder"></div></div> <div class="grid grid-cols-4 gap-4"><div class="placeholder"></div> <div class="placeholder"></div> <div class="placeholder"></div> <div class="placeholder"></div></div></div></section>`;
          }
        })}</div>  <div class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1dpb3xs">Circular</h2> <p data-svelte-h="svelte-pw9pcq">Apply the <code class="code">.placeholder-circle</code> class and set a width to define the diameter.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<div class="placeholder-circle w-16" />`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `<div class="${["placeholder-circle w-16", animate ? "animate-pulse" : ""].join(" ").trim()}"></div>`;
          }
        })}</div>  <div class="space-y-4"><h2 class="h2" data-svelte-h="svelte-zh5bak">Animated</h2> <p data-svelte-h="svelte-3ymvep">Apply the <code class="code">.animate-pulse</code> utility class provided by Tailwind.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `<div class="placeholder animate-pulse" />`
          },
          {},
          {}
        )}</div> `;
      },
      sandbox: () => {
        return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<div class="placeholder" />`
              },
              {},
              {}
            )} `;
          },
          footer: () => {
            return `<div class="text-center">${validate_component(SlideToggle, "SlideToggle").$$render(
              $$result,
              {
                name: "animated",
                accent: "bg-secondary-500",
                checked: animate
              },
              {
                checked: ($$value) => {
                  animate = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Animated`;
                }
              }
            )}</div> `;
          },
          preview: () => {
            return `<section class="card w-full"><div class="card-header flex justify-between items-center"><div class="${[
              "flex justify-center items-center space-x-4",
              animate ? "animate-pulse" : ""
            ].join(" ").trim()}" data-svelte-h="svelte-1pcojwz"><div class="placeholder-circle w-16"></div> <div class="placeholder-circle w-14"></div> <div class="placeholder-circle w-10"></div></div></div> <div class="${["p-4 space-y-4", animate ? "animate-pulse" : ""].join(" ").trim()}" data-svelte-h="svelte-6ejz3a"><div class="placeholder"></div> <div class="grid grid-cols-4 gap-4"><div class="placeholder"></div> <div class="placeholder"></div> <div class="placeholder"></div> <div class="placeholder"></div></div> <div class="placeholder"></div> <div class="placeholder"></div></div></section>`;
          }
        })} `;
      },
      default: () => {
        return ` `;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};

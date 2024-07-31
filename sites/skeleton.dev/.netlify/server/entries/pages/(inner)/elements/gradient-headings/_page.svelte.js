import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { faker } from "@faker-js/faker";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Element,
    name: "Gradient Headings",
    description: "Create gradient-colored heading styles.",
    // imports: ['GradientHeading'],
    // source: 'packages/skeleton/src/lib/components/GradientHeading'
    dependencies: [
      {
        label: "Tailwind Gradients",
        url: "https://tailwindcss.com/docs/gradient-color-stops"
      }
    ]
  };
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return `  <p data-svelte-h="svelte-1u2mr7z">Can be generated using <a class="anchor" href="https://tailwindcss.com/docs/gradient-color-stops" target="_blank" rel="noreferrer">Tailwind&#39;s gradient color stops</a>. Skeleton is not required.</p> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-sqds6f">Using @apply</h2> <p data-svelte-h="svelte-12idf3c">Create a new class using <code class="code">@apply</code> in your <code class="code">app.postcss</code> global stylesheet. Then apply
				the following styles.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "css",
          code: `
.gradient-heading {
	@apply bg-clip-text text-transparent box-decoration-clone;
	/* Direction */
	@apply bg-gradient-to-br;
	/* Color Stops */
	@apply from-primary-500 via-tertiary-500 to-secondary-500;
}
`
        },
        {},
        {}
      )} ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<h1 class="h1"><span class="gradient-heading">Skeleton</span></h1>`
        },
        {},
        {}
      )}</section> `;
    },
    sandbox: () => {
      return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "bg-surface-900" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<h1 class="h1">
	<span class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Design.</span>
</h1>
<h1 class="h1">
	<span class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone">Build.</span>
</h1>
<h1 class="h1">
	<span class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone">Deploy.</span>
</h1>
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="grid grid-cols-1 gap-2 space-x-2 text-center"><h1 class="h1" data-toc-ignore><span class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone capitalize">${escape(faker.company.bsBuzz())}.</span></h1> <h1 class="h1" data-toc-ignore><span class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone capitalize">${escape(faker.company.bsBuzz())}.</span></h1> <h1 class="h1" data-toc-ignore><span class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone capitalize">${escape(faker.company.bsBuzz())}.</span></h1></div>`;
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

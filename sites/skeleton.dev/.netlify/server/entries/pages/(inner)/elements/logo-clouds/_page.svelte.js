import { c as create_ssr_component, v as validate_component, e as escape, h as each, d as add_attribute } from "../../../../../chunks/ssr.js";
import { faker } from "@faker-js/faker";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview, v as variants } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Element,
    name: "Logo Clouds",
    description: "Provides a grid for presenting a set of logos, brands, or sponsors.",
    stylesheetIncludes: ["all", "elements"],
    stylesheets: ["elements/logo-clouds"],
    source: "packages/plugin/src/styles/components/logo-clouds.css",
    classes: [
      [
        '<code class="code">.logo-cloud</code>',
        "-",
        "Apply to a wrapping block element around a set of logos."
      ],
      [
        '<code class="code">.logo-item</code>',
        "-",
        "Apply to each logo child element."
      ]
    ]
  };
  let currentVariant = "bg-initial";
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return `  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-n97rgy">Multiple Rows</h2>  <p data-svelte-h="svelte-hh7gx5">Use the <a class="anchor" href="https://tailwindcss.com/docs/grid-template-columns" target="_blank" rel="noreferrer">Tailwind column and gap classes</a> to adjust column amount and gap spacing.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<div class="logo-cloud grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-0.5">
	<a href="/elements/logo-clouds" class="logo-item">HR Solutions</a>
	<a href="/elements/logo-clouds" class="logo-item">Acme Theaters</a>
	<a href="/elements/logo-clouds" class="logo-item">Cruisin' Cuisine</a>
	<a href="/elements/logo-clouds" class="logo-item">Arcane Security</a>
	<a href="/elements/logo-clouds" class="logo-item">Stark Industries</a>
	<a href="/elements/logo-clouds" class="logo-item">Gekko & Co.</a>
	<a href="/elements/logo-clouds" class="logo-item">Acme Corp.</a>
	<a href="/elements/logo-clouds" class="logo-item">Wonka Inc.</a>
</div>
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<section class="w-full"><div class="logo-cloud grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-0.5"><a href="/elements/logo-clouds" class="logo-item capitalize">${escape(faker.company.bsBuzz())}</a> <a href="/elements/logo-clouds" class="logo-item capitalize">${escape(faker.company.bsBuzz())}</a> <a href="/elements/logo-clouds" class="logo-item capitalize">${escape(faker.company.bsBuzz())}</a> <a href="/elements/logo-clouds" class="logo-item capitalize">${escape(faker.company.bsBuzz())}</a> <a href="/elements/logo-clouds" class="logo-item capitalize">${escape(faker.company.bsBuzz())}</a> <a href="/elements/logo-clouds" class="logo-item capitalize">${escape(faker.company.bsBuzz())}</a> <a href="/elements/logo-clouds" class="logo-item capitalize">${escape(faker.company.bsBuzz())}</a> <a href="/elements/logo-clouds" class="logo-item capitalize">${escape(faker.company.bsBuzz())}</a></div></section>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-15kgbo1">Styling Items</h2>  <p data-svelte-h="svelte-1pf1t7o">Use <a class="anchor" href="https://tailwindcss.com/blog/tailwindcss-v3-1#arbitrary-values-but-for-variants" target="_blank" rel="noreferrer">Tailwind&#39;s arbitrary variant syntax</a> to customize the <code class="code">.logo-item</code> styles. Tailwind classes and variants are supported.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="logo-cloud [&>.logo-item]:bg-red-500">...</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="logo-cloud [&>.logo-item]:variant-filled-secondary">...</div>`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<section class="w-full" data-svelte-h="svelte-13qn0bu"><div class="logo-cloud [&>.logo-item]:variant-filled-secondary grid-cols-1 lg:!grid-cols-3 gap-0.5"><a class="logo-item" href="https://twitch.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitch text-2xl"></i> <span>Twitch</span></a> <a class="logo-item" href="https://youtube.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-youtube text-2xl"></i> <span>YouTube</span></a> <a class="logo-item" href="https://vimeo.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-vimeo text-2xl"></i> <span>Vimeo</span></a></div></section>`;
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
              code: `
<div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-1">
	<a class="logo-item" href="/">
		<span>(icon)</span>
		<span>Skeleton</span>
	</a>
	<a class="logo-item" href="/">
		<span>(icon)</span>
		<span>Skeleton</span>
	</a>
	<!-- ... -->
</div>
`
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
          return `<section class="w-full"><div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-0.5"><a class="${"logo-item " + escape(currentVariant, true)}" href="https://twitch.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitch text-2xl"></i> <span data-svelte-h="svelte-1a480ul">Twitch</span></a> <a class="${"logo-item " + escape(currentVariant, true)}" href="https://youtube.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-youtube text-2xl"></i> <span data-svelte-h="svelte-7ad6hx">YouTube</span></a> <a class="${"logo-item " + escape(currentVariant, true)}" href="https://vimeo.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-vimeo text-2xl"></i> <span data-svelte-h="svelte-b9aptq">Vimeo</span></a></div></section>`;
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

import { c as create_ssr_component, v as validate_component, h as each, e as escape } from "../../../../../chunks/ssr.js";
import { faker } from "@faker-js/faker";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import { g as getImageLink } from "../../../../../chunks/images.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { A as Avatar } from "../../../../../chunks/Avatar.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Element,
    name: "Lists",
    description: "Provides styles for static list elements.",
    stylesheetIncludes: ["all", "elements"],
    stylesheets: ["elements/lists"],
    source: "packages/plugin/src/styles/components/lists.css",
    classes: [
      [
        '<code class="code">.list</code>',
        "-",
        "Class for defining an unordered or ordered list."
      ],
      [
        '<code class="code">.list-dl</code>',
        "-",
        "Class for defining a description list."
      ],
      [
        '<code class="code">.list-nav</code>',
        "-",
        "Class for defining a navigation list."
      ],
      [
        '<code class="code">.list-option</code>',
        "-",
        "Provides hover styles similar to anchors."
      ]
    ]
  };
  const listData = [
    {
      avatar: "YOErFW8AfkI",
      name: `${faker.name.firstName("female")} ${faker.name.lastName("female")}`,
      label: "A"
    },
    {
      avatar: "z_X0PxmBuIQ",
      name: `${faker.name.firstName("female")} ${faker.name.lastName("female")}`,
      label: "B"
    },
    {
      avatar: "8vKVlNIbAc4",
      name: `${faker.name.firstName("female")} ${faker.name.lastName("female")}`,
      label: "C"
    }
  ];
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return ` <p data-svelte-h="svelte-v4fy1a">Apply the <code class="code">.list</code> class to the parent. Wrap children with <em>span</em> elements to allow for horizontal spacing.</p>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-6vv6u2">Ordered List</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<ol class="list">
	<li>
		<span>1.</span>
		<span class="flex-auto">Skeleton</span>
	</li>
	<!-- ... -->
</ol>
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="w-full text-token card p-4 space-y-4"><ol class="list">${each(listData, (v, i) => {
            return `<li><span class="badge-icon p-4 variant-soft-primary">${escape(i + 1)}</span> <span class="flex-auto">Numbered Item ${escape(v.label)}</span> <span data-svelte-h="svelte-pe2my4">⋮</span> </li>`;
          })}</ol></div>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-8xqxml">Description List</h2> <p data-svelte-h="svelte-1hetgm">Note we insert an extra <em>div</em> element to control flex layout and aid with vertical list item spacing.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<dl class="list-dl">
	<div>
		<span class="badge bg-primary-500">💀</span>
		<span class="flex-auto">
			<dt>Title</dt>
			<dd>Description</dd>
		</span>
	</div>
	<!-- ... -->
</dl>
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="w-full text-token card p-4 space-y-4"><dl class="list-dl">${each(listData, (v) => {
            return `<div><span class="badge-icon p-4 variant-soft-secondary" data-svelte-h="svelte-1yndlvk"><i class="fa-solid fa-book"></i></span> <span class="flex-auto"><dt class="font-bold">Item ${escape(v.label)}</dt> <dd class="text-sm opacity-50">Description for ${escape(v.label)}</dd></span> <span data-svelte-h="svelte-pe2my4">⋮</span> </div>`;
          })}</dl></div>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1dd331p">Navigation List</h2>  <p data-svelte-h="svelte-cahrpb">While verbose, we do recommend you use all tags shown below to meet recommended <a class="anchor" href="https://www.w3.org/WAI/tutorials/menus/structure/" target="_blank" rel="noreferrer">accessibility guidelines</a>.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<nav class="list-nav">
	<!-- (optionally you can provide a label here) -->
	<ul>
		<li>
			<a href="/elements/lists">
				<span class="badge bg-primary-500">(icon)</span>
				<span class="flex-auto">Skeleton</span>
			</a>
		</li>
		<!-- ... -->
	</ul>
</nav>
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="w-full text-token card p-4 space-y-4"><nav class="list-nav"><ul>${each(listData, (v) => {
            return `<li><a href="/elements/lists"><span class="badge-icon p-4 variant-soft-tertiary" data-svelte-h="svelte-1kynnz5"><i class="fa-solid fa-arrow-right"></i></span> <span class="flex-auto">Nav Item ${escape(v.label)}</span> <span data-svelte-h="svelte-pe2my4">⋮</span></a> </li>`;
          })}</ul></nav></div>`;
        }
      })} <p data-svelte-h="svelte-1ck1ohq">To highlight active state, we recommend conditionally applying a background color to the anchor tag.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `$: classesActive = (href: string) => (href === $page.url.pathname ? '!variant-filled-primary' : '');`
        },
        {},
        {}
      )} ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<a href={href} class="{classesActive(href)}">Page</a>`
        },
        {},
        {}
      )}</section> `;
    },
    sandbox: () => {
      return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<ul class="list">
	<li>
		<span>(icon)</span>
		<span class="flex-auto">Skeleton</span>
	</li>
	<!-- ... -->
</ul>
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<section class="w-full text-token card p-4 space-y-4"><p class="font-bold" data-svelte-h="svelte-18v0rq8">Unordered List</p> <ul class="list">${each(listData, (v) => {
            return `<li>${validate_component(Avatar, "Avatar").$$render(
              $$result,
              {
                src: getImageLink({ id: v.avatar, w: 48, h: 48 }),
                width: "w-12"
              },
              {},
              {}
            )} <span class="flex-auto">${escape(v.name)}</span> <span data-svelte-h="svelte-pe2my4">⋮</span> </li>`;
          })}</ul></section>`;
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

import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import { g as getImageLink } from "../../../../../chunks/images.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { A as Avatar } from "../../../../../chunks/Avatar.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Element,
    name: "Breadcrumbs",
    description: "Displays the current navigation hierarchy.",
    stylesheetIncludes: ["all", "elements"],
    stylesheets: ["elements/breadcrumbs"],
    source: "packages/plugin/src/styles/components/breadcrumbs.css",
    classes: [
      [
        '<code class="code">breadcrumb</code>',
        "-",
        "Add to an <em>ol</em> tag element."
      ],
      [
        '<code class="code">breadcrumb-nonresponsive</code>',
        "-",
        "Shows all crumbs on small mobile breakpoints."
      ],
      [
        '<code class="code">crumb</code>',
        "-",
        "Apply to each crumb list item element."
      ],
      [
        '<code class="code">crumb-separator</code>',
        "-",
        "Apply to each separator list item element."
      ]
    ]
  };
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return ` <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-yuh4rf">Separators</h2>  <p data-svelte-h="svelte-1qgsw8v">Replace the contents of the <code class="code">.crumb-separator</code> element with an icon or any valid <a class="anchor" href="https://unicode-table.com/en/sets/arrow-symbols/#right-arrows" target="_blank" rel="noreferrer">unicode symbol</a>. For accessibility, use <code class="code">aria-hidden=&quot;true&quot;</code> to hide this element from screen readers.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<ol class="breadcrumb">
	<li class="crumb"><a class="anchor" href="/elements/breadcrumbs">Home</a></li>
	<li class="crumb-separator" aria-hidden>/</li>
	<li class="crumb"><a class="anchor" href="/elements/breadcrumbs">Blog</a></li>
	<li class="crumb-separator" aria-hidden>/</li>
	<li>Article</li>
</ol>
					`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="flex justify-center" data-svelte-h="svelte-1cjshhh"><ol class="breadcrumb"><li class="crumb"><a class="anchor" href="/elements/breadcrumbs">Home</a></li> <li class="crumb-separator" aria-hidden="true">/</li> <li class="crumb"><a class="anchor" href="/elements/breadcrumbs">Blog</a></li> <li class="crumb-separator" aria-hidden="true">/</li> <li>Article</li></ol></div>`;
        }
      })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-j3t8td">Icons</h2> <p data-svelte-h="svelte-12i28z4">Add your icon before or after your anchor tag within the <code class="code">.crumb</code> list item.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<ol class="breadcrumb mt-1">
	<li class="crumb"><a class="anchor" href="/elements/breadcrumbs">(icon)</a></li>
	<li class="crumb-separator" aria-hidden="true">&rsaquo;</li>
	<li class="crumb"><a class="anchor" href="/elements/breadcrumbs">(icon)</a></li>
	<li class="crumb-separator" aria-hidden="true">&rsaquo;</li>
	<li>Current</li>
</ol>
					`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="flex justify-center" data-svelte-h="svelte-1t8vmbn"><ol class="breadcrumb mt-1"><li class="crumb"><a class="anchor" href="/elements/breadcrumbs"><i class="fa-solid fa-house text-xl"></i></a></li> <li class="crumb-separator" aria-hidden="true">›</li> <li class="crumb"><a class="anchor" href="/elements/breadcrumbs"><i class="fa-solid fa-gear text-xl"></i></a></li> <li class="crumb-separator" aria-hidden="true">›</li> <li>Current</li></ol></div>`;
        }
      })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-juq34w">Mixed Media</h2> <p data-svelte-h="svelte-bl7bp7">Mix and match buttons, avatars, and text.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<ol class="breadcrumb">
	<li class="crumb">
		<a href="/elements/breadcrumbs" class="btn btn-sm variant-soft-primary">Users</a>
	</li>
	<li class="crumb-separator" aria-hidden="true">&rsaquo;</li>
	<li class="crumb">
		<a href="/elements/breadcrumbs">
			<Avatar src="${getImageLink({ id: "YOErFW8AfkI", w: 32, h: 32 })}" width="w-8" />
		</a>
	</li>
	<li class="crumb-separator" aria-hidden="true">&rsaquo;</li>
	<li>Profile</li>
</ol>
					`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="flex justify-center"><ol class="breadcrumb"><li class="crumb" data-svelte-h="svelte-mo9ldl"><a href="/elements/breadcrumbs" class="btn btn-sm variant-soft-primary">Users</a></li> <li class="crumb-separator" aria-hidden="true" data-svelte-h="svelte-i818qf">›</li> <li class="crumb"><a href="/elements/breadcrumbs">${validate_component(Avatar, "Avatar").$$render(
            $$result,
            {
              src: getImageLink({ id: "YOErFW8AfkI", w: 32, h: 32 }),
              width: "w-8"
            },
            {},
            {}
          )}</a></li> <li class="crumb-separator" aria-hidden="true" data-svelte-h="svelte-i818qf">›</li> <li data-svelte-h="svelte-1jwgi1t">Profile</li></ol></div>`;
        }
      })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-4q6f9r">Non-Responsive</h2> <p data-svelte-h="svelte-154p2me">Breadcrumbs are responsive by default and will auto-hide all but the last two crumb elements on small screens. If you wish to
				disable this behavior, replace <code class="code">.breadcrumb</code> with <code class="code">.breadcrumb-nonresponsive</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<ol class="breadcrumb-nonresponsive">...</ol>`
        },
        {},
        {}
      )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1gdleno">Using #each Loops</h2> <p data-svelte-h="svelte-1cuh9qe">Use the following technique to ensure the <em>current</em> item is formatted properly and prevent an extra separator at the end.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `
const myBreadcrumbs = [
	{ label: 'Foo', link: '/foo' },
	{ label: 'Bar', link: '/bar' },
	{ label: 'Fizz', link: '/fizz' },
	{ label: 'Buzz', link: '/buzz' }
];
			`
        },
        {},
        {}
      )} ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `
<ol class="breadcrumb">
	{#each myBreadcrumbs as crumb, i}
		<!-- If crumb index is less than the breadcrumb length minus 1 -->
		{#if i < myBreadcrumbs.length - 1}
			<li class="crumb"><a class="anchor" href={crumb.link}>{crumb.label}</a></li>
			<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		{:else}
			<li class="crumb">{crumb.label}</li>
		{/if}
	{/each}
</ol>
			`
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
<ol class="breadcrumb">
	<li class="crumb"><a class="anchor" href="/elements/breadcrumbs">Skeleton</a></li>
	<li class="crumb-separator" aria-hidden="true">&rsaquo;</li>
	<li class="crumb"><a class="anchor" href="/elements/breadcrumbs">Elements</a></li>
	<li class="crumb-separator" aria-hidden="true">&rsaquo;</li>
	<li>Breadcrumbs</li>
</ol>
				`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="card p-4 text-token flex justify-center" data-svelte-h="svelte-9pln68"><ol class="breadcrumb"><li class="crumb"><a class="anchor" href="/elements/breadcrumbs">Skeleton</a></li> <li class="crumb-separator" aria-hidden="true">›</li> <li class="crumb"><a class="anchor" href="/elements/breadcrumbs">Elements</a></li> <li class="crumb-separator" aria-hidden="true">›</li> <li>Breadcrumbs</li></ol></div>`;
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

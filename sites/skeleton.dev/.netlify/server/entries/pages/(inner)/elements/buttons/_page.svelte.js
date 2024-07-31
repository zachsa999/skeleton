import { c as create_ssr_component, v as validate_component, h as each, e as escape, d as add_attribute } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview, v as variants } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Element,
    name: "Buttons",
    description: "Provides a robust set of button styles, including preset variants.",
    stylesheetIncludes: ["all", "elements"],
    stylesheets: ["elements/buttons"],
    source: "packages/plugin/src/styles/components/buttons.css",
    classes: [
      [
        '<code class="code">.btn</code>',
        "-",
        "Creates a text button using a button or anchor."
      ],
      [
        '<code class="code">.btn-icon</code>',
        "-",
        "Creates a text icon button using a button or anchor."
      ],
      [
        '<code class="code">.btn-[value]</code>',
        "sm | md | lg | xl",
        "Canned button sizes that define padding and text sizes."
      ],
      [
        '<code class="code">.btn-icon-[value]</code>',
        "sm | md | lg | xl",
        "Canned icon button sizes that define padding and text sizes."
      ]
    ]
  };
  let currentVariant = "variant-filled";
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return ` <p data-svelte-h="svelte-16jegxo">Use <code class="code">.btn</code> to add basic button styles to any anchor or button element. Replace with
			<code class="code">.btn-icon</code>
			for an icon button. Mix buttons with any arbitrary background color or variant style classes, such as
			<code class="code">.variant-[style]-[themeColor]</code>.</p> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1im6o39">Sizes</h2> <p data-svelte-h="svelte-vy8sc3">A number of canned size presets are available via <code class="code">.btn-[size]</code>. Default sizing matches
				<code class="code">btn-md</code>.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<button type="button" class="btn btn-sm variant-filled">sm</button>
<button type="button" class="btn variant-filled">md</button>
<button type="button" class="btn btn-lg variant-filled">lg</button>
<button type="button" class="btn btn-xl variant-filled">xl</button>
`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<button type="button" class="btn-icon btn-icon-sm variant-filled">(icon)</button>
<button type="button" class="btn-icon variant-filled">(icon)</button>
<button type="button" class="btn-icon btn-icon-lg variant-filled">(icon)</button>
<button type="button" class="btn-icon btn-icon-xl variant-filled">(icon)</button>
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="space-y-4" data-svelte-h="svelte-mpfxrk"><div class="flex justify-center items-center gap-4"><button type="button" class="btn btn-sm variant-filled">sm</button> <button type="button" class="btn variant-filled">md</button> <button type="button" class="btn btn-lg variant-filled">lg</button> <button type="button" class="btn btn-xl variant-filled">xl</button></div> <hr> <div class="flex justify-center items-center gap-4"><button type="button" class="btn-icon btn-icon-sm variant-filled"><i class="fa-solid fa-skull"></i></button> <button type="button" class="btn-icon variant-filled"><i class="fa-solid fa-skull"></i></button> <button type="button" class="btn-icon btn-icon-lg variant-filled"><i class="fa-solid fa-skull"></i></button> <button type="button" class="btn-icon btn-icon-xl variant-filled"><i class="fa-solid fa-skull"></i></button></div></div>`;
        }
      })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-foihbz">Button Groups</h2> <p data-svelte-h="svelte-1ghkwv8">Groups related anchors or buttons. Pairs with any variant style. Horizontal and vertical options are provided.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<div class="btn-group variant-filled">
	<button>Months</button>
	<button>Days</button>
	<button>Years</button>
</div>
`
            },
            {},
            {}
          )}  <p data-svelte-h="svelte-1agxof3">Customize the vertical dividers using <a class="anchor" href="https://tailwindcss.com/blog/tailwindcss-v3-1#arbitrary-values-but-for-variants" target="_blank" rel="noreferrer">Tailwind&#39;s arbitrary variant syntax</a>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="btn-group variant-ghost-primary [&>*+*]:border-red-500">...</div>`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="btn-group variant-filled" data-svelte-h="svelte-1dt8au3"><button>Months</button> <button>Days</button> <button>Years</button></div>`;
        }
      })} ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<div class="btn-group-vertical variant-filled">
	<button>Months</button>
	<button>Days</button>
	<button>Years</button>
</div>
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="btn-group-vertical variant-filled" data-svelte-h="svelte-1k7ceb4"><button>Months</button> <button>Days</button> <button>Years</button></div>`;
        }
      })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1k6a0ww">SvelteKit Link Options</h2>  <p data-svelte-h="svelte-701ezp">While using native anchor elements, you can take advantage of <a class="anchor" href="https://kit.svelte.dev/docs/link-options" target="_blank" rel="noreferrer">SvelteKit&#39;s Link Options</a> such as a <em>prefetch</em>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<a href="/" class="btn variant-filled" data-sveltekit-preload-data="hover">Button</a>`
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
<button type="button" class="btn-icon ${currentVariant}">(icon)</button>
<button type="button" class="btn ${currentVariant}">Button</button>
<button type="button" class="btn ${currentVariant}">
	<span>(icon)</span>
	<span>Button</span>
</button>
`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<a href="/" class="btn-icon ${currentVariant}">(icon)</a>
<a href="/" class="btn ${currentVariant}">a</a>
<a href="/" class="btn ${currentVariant}">
	<span>(icon)</span>
	<span>Anchor</span>
</a>
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
          return `<div class="flex gap-4"><button type="button" class="${"btn-icon " + escape(currentVariant, true)}"><i class="fa-solid fa-skull"></i></button> <button type="button" class="${"btn " + escape(currentVariant, true)}">Button</button> <button type="button" class="${"btn " + escape(currentVariant, true)}"><i class="fa-solid fa-skull"></i> <span data-svelte-h="svelte-1uqyw7m">Button</span></button></div>`;
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

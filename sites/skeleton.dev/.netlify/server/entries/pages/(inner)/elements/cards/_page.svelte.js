import { c as create_ssr_component, v as validate_component, h as each, e as escape, d as add_attribute } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview, v as variants } from "../../../../../chunks/DocsPreview.js";
import { g as getImageLink } from "../../../../../chunks/images.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { A as Avatar } from "../../../../../chunks/Avatar.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Element,
    name: "Cards",
    description: "Provides container elements that wrap and separate content",
    stylesheetIncludes: ["all", "elements"],
    stylesheets: ["elements/cards"],
    source: "packages/plugin/src/styles/components/cards.css",
    classes: [
      [
        '<code class="code">.card</code>',
        "-",
        "Adds basic card styling to any block element."
      ],
      [
        '<code class="code">.card-header</code>',
        "-",
        "The header region of the card."
      ],
      [
        '<code class="code">.card-footer</code>',
        "-",
        "The footer region of the card."
      ],
      [
        '<code class="code">.card-hover</code>',
        "-",
        "Provides an animated hover effect."
      ]
    ]
  };
  let currentVariant = "bg-initial";
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return ` <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-x9ubq8">Headers and Footers</h2> <p data-svelte-h="svelte-14j7uve">Segment your card using the included <code class="code">.card-header</code> and <code class="code">.card-footer</code> classes.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<div class="card">
	<header class="card-header">(header)</header>
	<section class="p-4">(content)</section>
	<footer class="card-footer">(footer)</footer>
</div>
				`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="w-full text-token" data-svelte-h="svelte-gad738"><div class="card"><header class="card-header"><div class="card variant-soft p-4 text-center">Header</div></header> <section class="p-4"><div class="card variant-soft p-4 text-center">Content</div></section> <footer class="card-footer"><div class="card variant-soft p-4 text-center">Footer</div></footer></div></div>`;
        }
      })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1lpuh2f">Interactive</h2> <p data-svelte-h="svelte-tcqrz6">Anchor cards have an inherent hover style. Add <code class="code">.card-hover</code> to provide an additional 3D hover effect.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<a class="block card card-hover p-4" href="/elements/cards">Hover Me!</a>`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="w-full text-token" data-svelte-h="svelte-gmfc2t"><a class="block card card-hover p-4 text-center" href="/elements/cards">Hover Me!</a></div>`;
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
              code: `<div class="card p-4">Basic</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<a href="/" class="card p-4">Link</a>`
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
          return `<div class="w-full text-token grid grid-cols-1 md:grid-cols-2 gap-4"> <div class="${"card " + escape(currentVariant, true) + " p-4 flex justify-center items-center"}"><span data-svelte-h="svelte-1raqjb7">Minimal</span></div>  <a class="${"card " + escape(currentVariant, true) + " card-hover overflow-hidden"}" href="/elements/cards"><header data-svelte-h="svelte-udkcbt"><img${add_attribute("src", getImageLink({ id: "vjUokUWbFOs", w: 400, h: 175 }), 0)} class="bg-black/50 w-full aspect-[21/9]" alt="Post"></header> <div class="p-4 space-y-4" data-svelte-h="svelte-98m4zg"><h6 class="h6" data-toc-ignore>Announcements</h6> <h3 class="h3" data-toc-ignore>Skeleton is Awesome!</h3> <article><p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi cumque consequatur tempore
									sint nisi sapiente. Iste beatae laboriosam iure molestias cum expedita architecto itaque quae rem.
									</p></article></div> <hr class="opacity-50"> <footer class="p-4 flex justify-start items-center space-x-4">${validate_component(Avatar, "Avatar").$$render(
            $$result,
            {
              src: getImageLink({ id: "YOErFW8AfkI", w: 32, h: 32 }),
              width: "w-8"
            },
            {},
            {}
          )} <div class="flex-auto flex justify-between items-center"><h6 class="font-bold" data-toc-ignore data-svelte-h="svelte-v7uhyz">By Alex</h6> <small>On ${escape((/* @__PURE__ */ new Date()).toLocaleDateString())}</small></div></footer></a></div>`;
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

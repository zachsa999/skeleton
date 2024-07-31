import { c as create_ssr_component, v as validate_component, h as each, e as escape, d as add_attribute } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview, v as variants } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { A as Avatar } from "../../../../../chunks/Avatar.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Element,
    name: "Badges",
    description: "Provides a robust set of non-interactive badge styles.",
    stylesheetIncludes: ["all", "elements"],
    stylesheets: ["elements/badges"],
    source: "packages/plugin/src/styles/components/badges.css",
    classes: [
      [
        '<code class="code">badge</code>',
        "-",
        "Provides the standard Badge style."
      ],
      [
        '<code class="code">badge-icon</code>',
        "-",
        "Provides the Icon Badge style."
      ]
    ]
  };
  let currentVariant = "variant-filled";
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return ` <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1i96sqx">Icon Badge</h2> <p data-svelte-h="svelte-1alzo7">Replace <code class="code">.badge</code> with <code class="code">.badge-icon</code> for a badge based on an icon.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<span class="badge-icon variant-filled"> (icon) </span>`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<span class="badge-icon variant-filled" data-svelte-h="svelte-x1nfva"><i class="fa-solid fa-skull"></i></span>`;
        }
      })} <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-13b5jkk">Overlapping</h2> <p data-svelte-h="svelte-gjwofn">Use Tailwind styles to overlap another element with an Icon Badge.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<div class="relative inline-block">
	<span class="badge-icon variant-filled-warning absolute -top-0 -right-0 z-10">2</span>
	<Avatar />
</div>
					`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="relative inline-block"><span class="badge-icon variant-filled-warning absolute -top-0 -right-0 z-10" data-svelte-h="svelte-5i6b21">2</span> ${validate_component(Avatar, "Avatar").$$render($$result, {}, {}, {})}</div>`;
        }
      })}</section></section>`;
    },
    sandbox: () => {
      return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<span class="badge variant-filled">Badge</span>`
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
          return `<span class="${"badge " + escape(currentVariant, true)}">Badge</span>`;
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

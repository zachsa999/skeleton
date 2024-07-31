import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../chunks/DocsPreview.js";
import "../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Component,
    name: "Template",
    // cspell:disable-next-line
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imports: ["Template"],
    types: ["Template"],
    stylesheetIncludes: ["all", "elements"],
    stylesheets: ["elements/template"],
    source: "packages/skeleton/src/lib/components/Template",
    aria: "https://www.w3.org/WAI/ARIA/apg/"
  };
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return ` <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-n87swy">Title 1</h2> <p data-svelte-h="svelte-1u9zv9c">Describe how to use the feature.</p> ${validate_component(CodeBlock, "CodeBlock").$$render($$result, { language: "html", code: `(code)` }, {}, {})}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-11skrqr">Title 2</h2> <p data-svelte-h="svelte-1u9zv9c">Describe how to use the feature.</p> ${validate_component(CodeBlock, "CodeBlock").$$render($$result, { language: "html", code: `(code)` }, {}, {})}</section> `;
    },
    sandbox: () => {
      return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render($$result, { language: "html", code: `(code snippet)` }, {}, {})} `;
        },
        preview: () => {
          return `<p data-svelte-h="svelte-mi2ewp">(feature)</p>`;
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

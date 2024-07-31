import { c as create_ssr_component, v as validate_component, h as each, e as escape, d as add_attribute } from "../../../../../chunks/ssr.js";
import { faker } from "@faker-js/faker";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview, v as variants } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Element,
    name: "Alerts",
    description: "Displays customizable alerts to attract attention and provide critical actions.",
    stylesheetIncludes: ["all", "elements"],
    stylesheets: ["elements/alerts"],
    source: "packages/plugin/src/styles/components/alerts.css",
    classes: [
      [
        '<code class="code">alert</code>',
        "",
        "Provide basic alert styles to a block element."
      ],
      [
        '<code class="code">alert-message</code>',
        "",
        "The message body styles. Contains a title and message."
      ],
      [
        '<code class="code">alert-actions</code>',
        "",
        "The message action styles. Contains buttons."
      ]
    ]
  };
  let currentVariant = "variant-filled-error";
  const message = faker.lorem.paragraph();
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return ` <p data-svelte-h="svelte-dy13ov">Create an element with the <code class="code">.alert</code> class. Wrap the alert in a Svelte <code class="code">#if</code> statement to
			hide it or make it visible.</p> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1b8917v">Sections</h2> <h3 class="h3" data-svelte-h="svelte-1gtirsy">Message Content</h3> <p data-svelte-h="svelte-8428d1">Use the <code class="code">.alert-message</code> to create a vertical set of text information that fills the available width of the alert.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<div class="alert-message">
	<h3 class="h3">(title)</h3>
	<p>{message}</p>
</div>`
        },
        {},
        {}
      )} ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<h3 class="alert-message">(title)</h3>`
        },
        {},
        {}
      )} <h3 class="h3" data-svelte-h="svelte-njdk73">Action Buttons</h3> <p data-svelte-h="svelte-bgjwrm">Use the <code class="code">.alert-actions</code> to create a trailing area to house interactive action buttons.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<div class="alert-actions">(buttons)</div>`
        },
        {},
        {}
      )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-8qvx25">Animation</h2>  <p data-svelte-h="svelte-njnj7h"><a class="anchor" href="https://svelte.dev/tutorial/transition" target="_blank" rel="noreferrer">Svelte Transitions</a> can provide smooth transition animations when the alert state changes.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<aside class="alert" transition:fade={{ duration: 200 }}>(content)</aside>`
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
              language: "ts",
              code: `let visible: boolean = true;`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
{#if visible}
    <aside class="alert variant-ghost">
        <!-- Icon -->
        <div>(icon)</div>
        <!-- Message -->
        <div class="alert-message">
            <h3 class="h3">(title)</h3>
            <p>{message}</p>
        </div>
        <!-- Actions -->
        <div class="alert-actions">(buttons)</div>
    </aside>
{/if}
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
          return ` <aside class="${"alert " + escape(currentVariant, true)}"><i class="fa-solid fa-triangle-exclamation text-4xl"></i> <div class="alert-message" data-toc-ignore><h3 class="h3" data-toc-ignore data-svelte-h="svelte-p1ojis">Warning</h3> <p>${escape(message)}</p></div> <div class="alert-actions"><button class="btn variant-filled" data-svelte-h="svelte-u9hfmp">Action</button> <button class="btn-icon variant-filled" data-svelte-h="svelte-ms8pc9"><i class="fa-solid fa-xmark"></i></button></div></aside>`;
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

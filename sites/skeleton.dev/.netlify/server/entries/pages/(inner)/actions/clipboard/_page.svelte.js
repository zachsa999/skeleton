import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Action,
    name: "Clipboard",
    description: "Allows you to quickly copy data to the clipboard.",
    imports: ["clipboard"],
    source: "packages/skeleton/src/lib/actions/Clipboard",
    parameters: [
      [
        '<code class="code">element</code>',
        "string",
        "-",
        "-",
        `HTML element's <em>data-clipboard</em> ID value.`
      ],
      [
        '<code class="code">input</code>',
        "string",
        "-",
        "-",
        `Input element's <em>data-clipboard</em> ID value.`
      ]
    ]
  };
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return ` <p data-svelte-h="svelte-zf67pi">If your data is available as a primitive data type (string, integer, etc), you can provide it directly to the action.</p>  <div class="space-y-4"><h2 class="h2" data-svelte-h="svelte-c02eqt">Copying HTML Contents</h2> <p data-svelte-h="svelte-i5k51b">To copy the <em>innerHTML</em> for an element, set a <code class="code">data-clipboard</code> on your target, then provide an
				<code class="code">element</code> reference to the action.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<!-- Source -->
<div data-clipboard="exampleElement">(contents)</div>

<!-- Trigger -->
<button use:clipboard={{ element: 'exampleElement' }}>Copy</button>
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="w-full text-token card variant-soft p-4 flex items-center gap-4"><div class="textarea p-2" data-clipboard="exampleElement" contenteditable data-svelte-h="svelte-1xgti9k">This <em>div</em> is set to &#39;contenteditable&#39;. Make changes then tap copy.</div> <button class="btn variant-filled" data-svelte-h="svelte-1rz6n56">Copy</button></div>`;
        }
      })}</div>  <div class="space-y-4"><h2 class="h2" data-svelte-h="svelte-knevxy">Copying Input Values</h2> <p data-svelte-h="svelte-uzgs3s">To copy the target input <em>value</em>, set a <code class="code">data-clipboard</code> data attribute on your target, then provide
				an
				<code class="code">input</code> reference to the action.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<!-- Source -->
<input type="text" value="(contents)" data-clipboard="exampleInput" />

<!-- Trigger -->
<button use:clipboard={{ input: 'exampleInput' }}>Copy</button>
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="w-full text-token card variant-soft p-4 flex items-center gap-4"><input class="input" type="text" value="Make changes to this input and then tap copy." data-clipboard="exampleInput"> <button class="btn variant-filled" data-svelte-h="svelte-1e4gx5u">Copy</button></div>`;
        }
      })}</div> <section class="space-y-4" data-svelte-h="svelte-1n1pelk"><h2 class="h2">Secure Context</h2>  <p>This action utilizes the native browser <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/API/Clipboard" target="_blank">Clipboard API</a> which only functions within a <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts" target="_blank">Secure Context</a>. For best results ensure your app is served with <code class="code">https://</code>. Skeleton will produce a console error when this is triggered outside a Secure Context.</p></section> `;
    },
    sandbox: () => {
      return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "ts",
              code: `const exampleData: string = 'This text was copied by the Skeleton clipboard action.';`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<button use:clipboard={exampleData}>Copy</button>`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<button class="btn variant-filled" ${""}>${escape("Copy")}</button>`;
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

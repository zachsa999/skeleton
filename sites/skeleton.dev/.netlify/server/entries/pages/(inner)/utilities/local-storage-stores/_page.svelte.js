import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Utility,
    name: "Persisted Store",
    description: "An extended version of the Svelte writable store that automatically persists to local storage",
    imports: ["localStorageStore"],
    source: "packages/skeleton/src/lib/utilities/LocalStorageStore"
  };
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return `  <aside class="alert variant-ghost-error" data-svelte-h="svelte-19pxgtv"><i class="fa-solid fa-triangle-exclamation text-4xl"></i> <div class="alert-message" data-toc-ignore><h3 class="h3" data-toc-ignore>Deprecated</h3>  <p>This feature is being phased out as we transition to <a class="underline" href="https://github.com/skeletonlabs/skeleton/discussions/2375" target="_blank">Skeleton v3</a>. This will remain functional for all 2.x releases, but recommend migrating to <a class="underline" href="https://github.com/joshnuss/svelte-persisted-store" target="_blank">svelte-persisted-store</a> as soon as possible.</p></div> <div class="alert-actions"><a class="btn variant-filled" href="https://github.com/skeletonlabs/skeleton/issues/2383" target="_blank">Learn More</a></div></aside> <section class="space-y-4"><p data-svelte-h="svelte-ty9ual">The first parameter <code class="code">storeExample</code> is the local storage key name. The second parameter is the initial value of
				the store.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `import type { Writable } from 'svelte/store';`
        },
        {},
        {}
      )} ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `const storeExample: Writable<string> = localStorageStore('storeExample', 'initialValueHere');`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-witx8a">Operates as a standard Svelte writable store but with the added benefit of automatic persistence via <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank" rel="noreferrer">Local Storage</a>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `
import { get } from 'svelte/store';

// Subscribe to the store
storeExample.subscribe(() => {});

// Update the value
storeExample.update(() => {});

// Set the value
storeExample.set(() => {});

// Read the value
get(storeExample);

// Read value with automatic subscription
$storeExample
`
        },
        {},
        {}
      )}</section>  <section class="space-y-4" data-svelte-h="svelte-133dwpa"><h2 class="h2">Attribution</h2> <p><a class="anchor" href="https://github.com/joshnuss/svelte-local-storage-store" target="_blank" rel="noreferrer">Source code</a>
				provided courtesy of
				<a class="anchor" href="https://github.com/joshnuss" target="_blank" rel="noreferrer">Joshua Nussbaum</a>. Please consider
				<a class="anchor" href="https://github.com/sponsors/joshnuss" target="_blank" rel="noreferrer">sponsoring his work</a>.</p></section> `;
    }
  })}`;
});
export {
  Page as default
};

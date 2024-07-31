import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { L as LayoutPage } from "../../../../../../chunks/LayoutPage.js";
import "../../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LayoutPage, "LayoutPage").$$render($$result, {}, {}, {
    default: () => {
      return ` <ol class="breadcrumb" data-svelte-h="svelte-1udw87m"><li class="crumb"><a class="anchor" href="/docs/contributing">Contributing</a></li> <li class="crumb-separator" aria-hidden="true">›</li> <li>Documenting Pages</li></ol>  <header class="space-y-4" data-svelte-h="svelte-agcyom"><h1 class="h1">Documenting Pages</h1> <p>We provide a starter template for new documentation pages in <code class="code">/src/routes/(inner)/template/+page.svelte</code>. This
			implements our
			<a class="anchor" href="https://github.com/skeletonlabs/skeleton/tree/dev/sites/skeleton.dev/src/lib/layouts/DocsShell" target="_blank" rel="noreferrer">Doc Shell</a> component, which ensures a consistent layout for all feature pages.</p></header> <hr>  <section class="space-y-4" data-svelte-h="svelte-r8t9s7"><h2 class="h2">Using the Doc Shell</h2> <p>This covers accessability details, source links, keyboard interactions, classes, parameters, and more.</p>  <div class="card variant-glass p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4"><p>Reference all available Doc Shell settings from the Typescript interface.</p> <a class="btn variant-filled" href="https://github.com/skeletonlabs/skeleton/blob/dev/sites/skeleton.dev/src/lib/layouts/DocsShell/types.ts" target="_blank" rel="noreferrer">View Available Settings</a></div></section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-ce26d6">Implementing Sveld</h2> <p data-svelte-h="svelte-ow8hvy">Use the following format to import <a href="/docs/contributing/sveld" class="anchor">component data from Sveld</a>. Note the unique
			naming structure and how <code class="code">?raw&amp;sveld</code> is appended at the end.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `
import sveldAccordion from '@skeletonlabs/skeleton/components/Accordion/Accordion.svelte?raw&sveld';
`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-1kaqask">Each imported Sveld component reference is then passed to the <code class="code">DocsShellSettings</code> via
			<code class="code">components</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `
const settings: DocsShellSettings = {
	// ...
	components: [
		{ label: 'Accordion', sveld: sveldAccordion }
	]
	// ...
};
			`
        },
        {},
        {}
      )}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1h3d7q0">Providing Examples</h2>  <p data-svelte-h="svelte-k33nd7">Make sure to provide at least one featured example at the top of the page within the <code class="code">sandbox</code> slot. Feature examples
			can be presented using the <a href="https://github.com/skeletonlabs/skeleton/tree/dev/sites/skeleton.dev/src/lib/components/DocsPreview" class="anchor" target="_blank" rel="noreferrer">DocsPreview</a> component, which provides a number of slots and properties.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `
<DocsPreview>
	<svelte:fragment slot="preview">
		<p>(the visible example)</p>
	</svelte:fragment>
	<svelte:fragment slot="source">
		<p>(codeblocks and implementation details)</p>
	</svelte:fragment>
</DocsPreview>
		`
        },
        {},
        {}
      )}</section>  <section class="space-y-4" data-svelte-h="svelte-w22710"><h2 class="h2">Usage</h2> <p>The bulk of your documentation can be inserted into the <code class="code">usage</code> slot for the Doc Shell. We recommend you view existing
			documentation pages to reference how we implement the usage page structure.</p></section>`;
    }
  })}`;
});
export {
  Page as default
};

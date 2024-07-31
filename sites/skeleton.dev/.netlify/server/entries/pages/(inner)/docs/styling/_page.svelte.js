import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { w as writable } from "../../../../../chunks/index.js";
import { L as LayoutPage } from "../../../../../chunks/LayoutPage.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const storeStylesheets = writable("recommended");
  const storeStylesheetElements = writable("combined");
  if ($$props.storeStylesheets === void 0 && $$bindings.storeStylesheets && storeStylesheets !== void 0)
    $$bindings.storeStylesheets(storeStylesheets);
  if ($$props.storeStylesheetElements === void 0 && $$bindings.storeStylesheetElements && storeStylesheetElements !== void 0)
    $$bindings.storeStylesheetElements(storeStylesheetElements);
  return `${validate_component(LayoutPage, "LayoutPage").$$render($$result, {}, {}, {
    default: () => {
      return `<header class="space-y-4" data-svelte-h="svelte-nkj64r"><h1 class="h1">Styling</h1>  <p>This covers basic techniques for styling Skeleton components. View our <a class="anchor" href="/blog/deep-dive-skeleton-styling" target="_blank">comprehensive guide</a> to learn more.</p></header> <hr> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1k5a8kq">Via Component Props</h2> <p data-svelte-h="svelte-4rf235">This is the recommended manner to style most components. Each component provides a set of style <em>props</em> (read: properties) that
			allow you to override the default style classes. See a list of available options under the &quot;Props&quot; tab per each feature in Skeleton.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<ExampleComponent background="bg-secondary-500 md:bg-primary-500">Skeleton</ExampleComponent>`
        },
        {},
        {}
      )} <blockquote class="blockquote" data-svelte-h="svelte-15cj8zf">TIP: You may provide multiple utility classes per each prop, as well as use variations such as <code class="code">dark:bg-green-500</code>.</blockquote></section> <hr> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1s7heac">Via the Class Attribute</h2> <p data-svelte-h="svelte-u83cpn">If a style prop is not available, you can still provide arbitrary utility classes via a standard <code class="code">class</code> attribute.
			These styles are always applied to the parent element in the component template.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<ExampleComponent class="text-3xl px-10 py-5">Skeleton</ExampleComponent>`
        },
        {},
        {}
      )}</section> <hr> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-wuyt0l">Tailwind&#39;s Arbitrary Variants</h2> <p data-svelte-h="svelte-1gv2o7g">If you need to target deeper than the parent element, we recommend using <a class="anchor" href="https://tailwindcss.com/blog/tailwindcss-v3-1#arbitrary-values-but-for-variants" target="_blank" rel="noreferrer">Tailwind&#39;s arbitrary variant syntax</a>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<ExampleComponent class="[&>.foo-label]:p-4">...</ExampleComponent>`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-1m41bse">This will affect the Parent &gt; .foo-label element and apply a Tailwind class of <code class="code">p-4</code>.</p></section> <hr> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-w8ooql">Global Styles Overrides</h2> <p data-svelte-h="svelte-dllkxh">Skeleton components include selector classes, such as <code class="code">.avatar-image</code> within the
			<a class="anchor" href="/components/avatars">Avatar component</a>. Please note that selector classes are always the first listed.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<img class="avatar-image ...">...</img>`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-slj8uk">Use these selector classes to target global style overrides to all instances of this feature in your global stylesheet.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "css",
          code: `.avatar-image { @apply border-2 border-red-500; }`
        },
        {},
        {}
      )} <blockquote class="blockquote" data-svelte-h="svelte-1wjxcxg">In some cases you may need to use <code class="code">!</code> <a class="anchor" href="https://tailwindcss.com/docs/configuration#important-modifier" target="_blank" rel="noreferrer">important</a> or
			style light and dark mode variants to give precedence.</blockquote></section>`;
    }
  })}`;
});
export {
  Page as default
};

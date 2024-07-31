import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { L as LayoutPage } from "../../../../../chunks/LayoutPage.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LayoutPage, "LayoutPage").$$render($$result, {}, {}, {
    default: () => {
      return ` <header class="space-y-4" data-svelte-h="svelte-1w8yv90"><h1 class="h1">PurgeCSS</h1>  <div><div class="!flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0 md:space-x-4"> <p>This guide covers <code class="code">vite-plugin-tailwind-purgecss</code>, a simple Vite plugin that purges excess TailwindCSS styles via <a class="anchor" href="https://purgecss.com/" target="_blank">PurgeCSS</a>. While optional, this is highly recommended if you wish to minimize your production CSS bundle size.</p> <a class="btn variant-filled-secondary" href="https://github.com/AdrianGonz97/vite-plugin-tailwind-purgecss" target="_blank"><i class="fa-brands fa-github"></i> <span>View on GitHub</span></a></div></div></header> <hr> <section class="space-y-4" data-svelte-h="svelte-nmoink"><h2 class="h2">Introduction</h2> <h3 class="h3">Motivation</h3> <p>Tailwind UI component libraries like Skeleton and Flowbite provide a number of benefits, but come with an important caveat - Tailwind
			generates classes for all imported components, regardless if they are used in the project or not. This leads to a larger than
			necessary CSS bundle.</p>  <p>Unfortunately this is a limitation of how Tailwind implements it&#39;s <a class="anchor" href="https://tailwindcss.com/docs/content-configuration" target="_blank">Content Configuration</a>. Tailwind searches through all files
			specified in <code class="code">content</code>, uses a regex to locate possible selectors, then generates their respective classes. The key thing to note is this occurs before the build process, meaning there&#39;s no CSS treeshaking or purging involved against your production file assets.</p> <h3 class="h3">How it Works</h3>  <p>Ideally, we would like to limit selectors to only those used within your project. We accomplish this by analyzing the files that are part of your project&#39;s module graph, then it extracts the utilized tailwindcss classes. From there, we can pass along the selectors to PurgeCSS for final processing.</p></section> <hr> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-120frik">Usage</h2>  <aside class="alert variant-ghost" data-svelte-h="svelte-1ivsevm"><p>Last updated for <code class="code">v0.3.0</code>. View <a href="https://github.com/AdrianGonz97/vite-plugin-tailwind-purgecss" target="_blank" class="anchor">GitHub</a> for the the latest instructions.</p></aside> <h3 class="h3" data-svelte-h="svelte-1974ha2">Installation</h3> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "shell",
          code: `npm i -D vite-plugin-tailwind-purgecss`
        },
        {},
        {}
      )} <h3 class="h3" data-svelte-h="svelte-r2l2fa">Add to Vite</h3> <p data-svelte-h="svelte-e0r8hd">Implement the following in <code class="code">vite.config.ts</code>, found in the root of your project.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `
import { purgeCss } from 'vite-plugin-tailwind-purgecss';

const config: UserConfig = {
	plugins: [sveltekit(), purgeCss()],
};
        `
        },
        {},
        {}
      )}</section> <hr> <section class="space-y-4" data-svelte-h="svelte-1lbsywy"><h2 class="h2">Attribution</h2>  <p>This <a class="anchor" href="https://github.com/AdrianGonz97/vite-plugin-tailwind-purgecss" target="_blank" rel="noreferrer">plugin</a>  is provided courtesy of Skeleton co-maintainer <a class="anchor" href="https://github.com/AdrianGonz97" target="_blank" rel="noreferrer">Adrian (aka CokaKoala)</a>.</p></section>`;
    }
  })}`;
});
export {
  Page as default
};

import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { L as LayoutPage } from "../../../../../chunks/LayoutPage.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LayoutPage, "LayoutPage").$$render($$result, {}, {}, {
    default: () => {
      return ` <header class="space-y-4" data-svelte-h="svelte-nd09yv"><h1 class="h1">Quickstart</h1> <p>This guide will walk you through the basics of creating a new Skeleton app using SvelteKit.</p></header> <hr>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-igejam">Get Started</h2> <p data-svelte-h="svelte-1w6cj0l">To begin, let&#39;s scaffold our project using the Skeleton CLI. Note that we&#39;ve listed a couple required options for this guide.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "shell",
          code: `
npm create skeleton-app@latest my-skeleton-app
	- Enable SvelteKit's Typescript syntax
	- Select the "Welcome" template
cd my-skeleton-app
npm run dev
			`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-z290by">By selecting the &quot;Welcome&quot; template the project will come preconfigured with both an <a class="anchor" href="/components/app-shell">App Shell</a>
			and <a class="anchor" href="/components/app-bar">App Bar</a> components in <code class="code">/src/routes/+layout.svelte</code>.</p></section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-qbuv06">Add Sidebar Navigation</h2> <p data-svelte-h="svelte-a7czob">Let&#39;s customize our App Shell&#39;s sidebar slot. Open <code class="code">/src/routes/+layout.svelte</code> and add the following Tailwind
			utility classes to the AppShell <code class="code">slotSidebarLeft</code> prop.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-qb3du1">Next, let&#39;s implement a <a class="anchor" href="/elements/lists">navigation list</a> within the App Shell&#39;s left sidebar slot. Append
			this slot fragment alongside any other fragment within the <code class="code">AppShell</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `
<svelte:fragment slot="sidebarLeft">
	<!-- Insert the list: -->
	<nav class="list-nav">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
		</ul>
	</nav>
	<!-- --- -->
</svelte:fragment>
`
        },
        {},
        {}
      )}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-18wfdal">Page Setup</h2> <p data-svelte-h="svelte-firy6d">Let&#39;s add some basic content to our homepage. Open <code class="code">/src/routes/+page.svelte</code> and replace the contents with the
			following. This will provide multiple elements automatically styled by Skeleton.</p>  ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `
<div class="container mx-auto p-8 space-y-8">
	<h1 class="h1">Hello Skeleton</h1>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	<section>
		<a class="btn variant-filled-primary" href="https://kit.svelte.dev/">SvelteKit</a>
		<a class="btn variant-filled-secondary" href="https://tailwindcss.com/">Tailwind</a>
		<a class="btn variant-filled-tertiary" href="https://github.com/">GitHub</a>
	</section>
</div>
`
        },
        {},
        {}
      )} </section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-gqsyuc">Add a Component</h2> <p data-svelte-h="svelte-6lqk7x">Finally let&#39;s implement Skeleton&#39;s <a class="anchor" href="/components/avatars">Avatar</a> component. First, import the component,
			then add it anywhere within your page, we recommend within the <code class="code">.container</code> element.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `
<script>
	import { Avatar } from '@skeletonlabs/skeleton';
<\/script>

<Avatar src="https://i.pravatar.cc/" />
`
        },
        {},
        {}
      )}</section>  <section class="space-y-4" data-svelte-h="svelte-gt2lqg"><p>Congrats! You have now created a simple Skeleton project. Feel free to begin customizing and implementing additional Tailwind, Svelte,
			and Utility features.</p></section>`;
    }
  })}`;
});
export {
  Page as default
};

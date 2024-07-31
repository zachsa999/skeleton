import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { L as LayoutPage } from "../../../../../chunks/LayoutPage.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LayoutPage, "LayoutPage").$$render($$result, {}, {}, {
    default: () => {
      return ` <header class="space-y-4" data-svelte-h="svelte-gt4dg"><h1 class="h1">Tauri</h1> <p>The following guide will cover the basics for generating a new <a class="anchor" href="https://tauri.app" target="_blank">Tauri</a> app
			using both SvelteKit and Skeleton.</p></header> <hr>  <section class="space-y-4" data-svelte-h="svelte-1mkqv24"><p class="text-xl space-y-4"><a class="anchor" href="https://tauri.app/about/intro" target="_blank">Tauri</a> is a toolkit that helps developers make applications for
			the major desktop platforms - using virtually any frontend framework in existence. The core is built with Rust, and the CLI leverages Node.js
			making Tauri a genuinely polyglot approach to creating and maintaining great apps.</p></section>  <section class="space-y-4" data-svelte-h="svelte-56plea"><h2 class="h2">Starter Template</h2> <p>If you&#39;re looking for a quick start or reference project, please refer to our opinionated template on GitHub.</p> <div class="card variant-glass p-4 py-10 text-center"><a class="btn variant-filled" href="https://github.com/skeletonlabs/skeleton-starter-tauri" target="_blank"><i class="fa-brands fa-github"></i> <span>View Starter Template</span> <i class="fa-solid fa-up-right-from-square"></i></a></div></section>  <section class="space-y-4" data-svelte-h="svelte-1t5ktzs"><h2 class="h2">Prerequisites</h2> <p>Before you begin, make sure to install all required Rust language and system dependencies per the guide below.</p> <div class="card variant-glass p-4 py-10 text-center"><a class="btn variant-filled" href="https://tauri.app/v1/guides/getting-started/prerequisites" target="_blank"><span>Tauri Prerequisites Guide</span> <i class="fa-solid fa-up-right-from-square"></i></a></div></section>  <section class="space-y-4" data-svelte-h="svelte-1kh08wm"><div class="flex items-center space-x-2"><h2 class="h2">Video Guide</h2> <span class="badge variant-filled-warning">Optional</span></div>  <p>For visual learners, the following video will guide you through the process of integrating Tauri and SvelteKit. You can then follow these instructions to <a class="anchor" href="/docs/get-started">manually add Skeleton</a> to your project.</p> <iframe class="w-full aspect-video mx-auto rounded-container-token shadow" src="https://www.youtube.com/embed/Dobwjx7_xT0" title="SvelteKit and Tauri: Blazing-Fast Desktop Applications" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-os2erp">Manual Guide</h2>  <div class="space-y-4"><h3 class="h3" data-svelte-h="svelte-1yo3m3u">Setup Skeleton</h3>  <p data-svelte-h="svelte-1whx0j2">To begin, we&#39;ll use the Skeleton CLI to scaffold a new project. This will automatically install SvelteKit, Tailwind, and Skeleton. If you&#39;re using an existing SvelteKit project, please refer to our <a class="anchor" href="https://www.skeleton.dev/docs/get-started#install-skeleton">manual install instructions</a>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "shell",
          code: `
npm create skeleton-app@latest skeleton-tauri-app
	- Enable Typescript when prompted (recommended)
cd skeleton-tauri-app
npm install
				`
        },
        {},
        {}
      )}</div>  <div class="space-y-4"><h3 class="h3" data-svelte-h="svelte-199vu6d">Prepare Your App</h3>  <p data-svelte-h="svelte-gne1f5">Since Tauri will use Rust as the backend, we&#39;ll adjust SvelteKit to use <a class="anchor" href="https://kit.svelte.dev/docs/adapter-static" target="_blank">static site generation (SSG)</a>. This makes use of SvelteKit&#39;s <code class="code">adapter-static</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "shell",
          code: `npm install --save-dev @sveltejs/adapter-static`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-18y91xt">Locate <code class="code">svelte.config.[ts|js]</code> in the root of your project, then switch from
				<code class="code">adapter-auto</code>
				to <code class="code">adapter-static</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "js",
          code: `
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess({})],

	kit: {
		adapter: adapter()
	}
};

export default config;
					`
        },
        {},
        {}
      )}  <p data-svelte-h="svelte-117a1i5">Open your root layout, found in <code class="code">/src/routes/+layout.[ts|js]</code>, then append the following two lines at the top of the script tag. This disables server-side rendering (SSR) while enabling prerendering.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "js",
          code: `
export const ssr = false;
export const prerender = true;
					`
        },
        {},
        {}
      )}</div>  <div class="space-y-4"><h3 class="h3" data-svelte-h="svelte-1tkrzsk">Install Tauri</h3> <p data-svelte-h="svelte-w885cb">Tauri offers a friendly CLI to easily automate the install process. Run the following command in your terminal.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "shell",
          code: `npm install --save-dev @tauri-apps/cli`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-syptqy">Locate <code class="code">package.json</code> in the root of your project, open this and append the following script command.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "json",
          code: `"scripts": {
	"tauri": "tauri"
}`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-ueuvrw">Run the following command in your terminal. Please take care to use the recommendations settings provided below.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "shell",
          code: `npm run tauri init`
        },
        {},
        {}
      )} <dl class="list-dl" data-svelte-h="svelte-g9evlx"><div><span class="badge-icon variant-soft p-4">1</span> <span class="flex-auto"><dt class="font-bold">What is your app name?</dt> <dd>Set the desired name of the generated bundle</dd></span> </div><div><span class="badge-icon variant-soft p-4">2</span> <span class="flex-auto"><dt class="font-bold">What should the window title be?</dt> <dd>Set the desired title of the main window</dd></span> </div><div><span class="badge-icon variant-soft p-4">3</span> <span class="flex-auto"><dt class="font-bold">Where are your web assets (HTML/CSS/JS) relative to <code class="code">/src-tauri/tauri.conf.json</code>?</dt> <dd>Set the default to <code class="code">../build</code></dd></span> </div><div><span class="badge-icon variant-soft p-4">4</span> <span class="flex-auto"><dt class="font-bold">What is the URL of your dev server?</dt> <dd>SvelteKit&#39;s default is <code class="code">http://localhost:5173</code></dd></span> </div><div><span class="badge-icon variant-soft p-4">5</span> <span class="flex-auto"><dt class="font-bold">What is your frontend dev command?</dt> <dd>If using NPM, set this to <code class="code">npm run dev</code></dd></span> </div><div><span class="badge-icon variant-soft p-4">6</span> <span class="flex-auto"><dt class="font-bold">What is your frontend build command?</dt> <dd>If using NPM, set this to <code class="code">npm run build</code></dd></span></div></dl></div>  <div class="space-y-4" data-svelte-h="svelte-1tszl4c"><h3 class="h3">Verify Install</h3> <p>Once installed, look for <code class="code">/src-tauri</code> in the root of your project. This houses the following critical Tauri assets:</p> <ul class="list-disc list-inside space-y-2"><li><code class="code">Cargo.toml</code> - similar to <code class="code">package.json</code>, but for Rust.</li> <li><code class="code">tauri.conf.json</code> - the Tauri configuration file.</li> <li><code class="code">src/main.rs</code> - the entry point of your Rust backend.</li></ul></div>  <div class="space-y-4"><h3 class="h3" data-svelte-h="svelte-ko00oh">Run the App</h3> <p data-svelte-h="svelte-9wlk7h">Use the following command to start your Tauri application.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "shell",
          code: `npm run tauri dev`
        },
        {},
        {}
      )}</div></section>  <section class="space-y-4" data-svelte-h="svelte-1x3njqr"><h2 class="h2">Learn More</h2> <dl class="list-dl"><div><span class="badge-icon variant-soft-secondary p-4"><i class="fa-solid fa-book"></i></span> <span class="flex-auto"><a class="anchor" href="https://tauri.app/v1/guides/development/development-cycle" target="_blank">Official Tauri Documentation →</a></span> </div><div><span class="badge-icon variant-soft-secondary p-4"><i class="fa-solid fa-book"></i></span> <span class="flex-auto"><a class="anchor" href="https://doc.rust-lang.org/book/" target="_blank">The Rust Book →</a></span></div></dl></section> <hr>  <section class="space-y-4" data-svelte-h="svelte-uqlsqc"><h2 class="h2">Attribution</h2> <p>This guide has been provided courtesy of <a href="https://github.com/SebasF1349" class="anchor">Sebastian Fell</a>, username
			<code class="code">@sebascoding</code> on Skeleton&#39;s Discord server.</p></section>`;
    }
  })}`;
});
export {
  Page as default
};

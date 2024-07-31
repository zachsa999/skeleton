import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { A as AppShell } from "../../../../../chunks/AppShell.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const sveldAppShell = { "props": [{ "name": "scrollbarGutter", "kind": "let", "description": "Set `scrollbar-gutter` style.", "type": "string", "value": "'auto'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionPage", "kind": "let", "description": "Apply arbitrary classes to the entire `#page` region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "slotHeader", "kind": "let", "description": "Apply arbitrary classes to the `header` slot container element", "type": "string", "value": "'z-10'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "slotSidebarLeft", "kind": "let", "description": "Apply arbitrary classes to the `sidebarLeft` slot container element", "type": "string", "value": "'w-auto'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "slotSidebarRight", "kind": "let", "description": "Apply arbitrary classes to the `sidebarRight` slot container element", "type": "string", "value": "'w-auto'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "slotPageHeader", "kind": "let", "description": "Apply arbitrary classes to the `pageHeader` slot container element", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "slotPageContent", "kind": "let", "description": "Apply arbitrary classes to the `pageContent` slot container element", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "slotPageFooter", "kind": "let", "description": "Apply arbitrary classes to the `pageFooter` slot container element", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "slotFooter", "kind": "let", "description": "Apply arbitrary classes to the `footer` slot container element", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "__default__", "default": true, "slot_props": "{}" }, { "name": "footer", "default": false, "slot_props": "", "description": "Insert fixed footer content. Not recommended for most layouts." }, { "name": "header", "default": false, "slot_props": "", "description": "Insert fixed header content, such as Skeleton's App Bar component." }, { "name": "pageFooter", "default": false, "fallback": "(slot:footer)", "slot_props": "", "description": "Insert content that resides below your page content. Recommended for most layouts." }, { "name": "pageHeader", "default": false, "fallback": "(slot:header)", "slot_props": "", "description": "Insert content that resides above your page content. Great for global alerts." }, { "name": "sidebarLeft", "default": false, "slot_props": "", "description": "Hidden when empty. Allows you to set fixed left sidebar content." }, { "name": "sidebarRight", "default": false, "slot_props": "", "description": "Hidden when empty. Allows you to set fixed right sidebar content." }], "events": [{ "type": "forwarded", "name": "scroll", "element": "div" }], "typedefs": [] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Component,
    name: "App Shell",
    description: "Responsive shell for controlling application layout.",
    imports: ["AppShell"],
    source: "packages/skeleton/src/lib/components/AppShell",
    components: [{ sveld: sveldAppShell }]
  };
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return ` <section class="space-y-4" data-svelte-h="svelte-hjdwm9"><p>Implement the App Shell in your app&#39;s root layout in <code class="code">/src/routes/+layout.svelte</code>. Slot order does not
				matter.</p></section> <section class="space-y-4"><div class="flex items-center space-x-2" data-svelte-h="svelte-10czlgh"><h2 class="h2">Prerequisites</h2> <span class="badge variant-filled-warning">Required</span></div>  <p data-svelte-h="svelte-1o4n571">The App Shell will need to expand to fill all available space within your app&#39;s <em>body</em> tag. Open <code class="code">/src/app.html</code> and add the following classes.
				<a class="anchor" href="https://github.com/sveltejs/kit/issues/6244#issuecomment-1226600661" target="_blank" rel="noreferrer">This wrapping element is required</a> and the style of <code class="code">display: contents</code> should remain.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<body>
	<div style="display: contents" class="h-full overflow-hidden">%sveltekit.body%</div>
</body>`.trim()
        },
        {},
        {}
      )} <p data-svelte-h="svelte-1k5aazo">Then update your global stylesheet with the following. This will disable overflow for <em>html</em> and <em>body</em> tags to prevent
				duplicate scroll bars.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "css",
          code: `html, body { @apply h-full overflow-hidden; }`
        },
        {},
        {}
      )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-109vn18">Using an App Bar</h2> <p data-svelte-h="svelte-8rcvb4">If you wish for your <a class="anchor" href="/components/app-bar">App Bar</a> component to remain fixed at the top of the page,
				embed it into the top-most <code class="code">header</code> slot.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>Skeleton</AppBar>
	</svelte:fragment>
	<!-- ... -->
</AppShell>`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-1pbxi11">If you wish for your App Bar to scroll with the page, insert it into the <code class="code">pageHeader</code> slot.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `
<AppShell>
	<svelte:fragment slot="pageHeader">
		<AppBar>Skeleton</AppBar>
	</svelte:fragment>
	<!-- ... -->
</AppShell>`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-w6sje7">If you wish to have a sticky <code class="code">pageHeader</code>, apply the following App Shell prop styles.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">...</AppShell>`
        },
        {},
        {}
      )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1d4go04">Responsive Sidebars</h2> <p data-svelte-h="svelte-1w3guip">Sidebars have a default width of <code class="code">auto</code>. This means they will automatically collapse when their contents are
				<em>empty</em>
				or
				<em>hidden</em>. Use this to remove the sidebar with CSS media queries via
				<a class="anchor" href="https://tailwindcss.com/docs/responsive-design" target="_blank" rel="noreferrer">Tailwind&#39;s responsive breakpoints</a>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `
<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<!-- Hidden below Tailwind's large breakpoint -->
		<div id="sidebar-left" class="hidden lg:block">Sidebar</div>
	</svelte:fragment>
</AppShell>`
        },
        {},
        {}
      )} <aside class="alert variant-ghost-warning" data-svelte-h="svelte-2r1ljz"><i class="fa-solid fa-lightbulb text-2xl"></i> <div class="alert-message">Consider hiding your sidebar for smaller screens and replace it with a Drawer.</div> <div class="alert-actions"><a href="/blog/how-to-implement-a-responsive-sidebar-drawer" target="_blank" rel="noreferrer" class="btn variant-filled">View Tutorial</a></div></aside></section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-pfnoxb">Scroll to Top on Navigation</h2> <p data-svelte-h="svelte-1c9uyox">If you wish to have the App Shell page region auto-scroll to the top when navigating, add the following to your root layout in <code class="code">/src/routes/+layout.svelte</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `
import type { AfterNavigate } from '@sveltejs/kit';
import { afterNavigate } from '$app/navigation';

afterNavigate((params: AfterNavigate) => {
    const isNewPage = params.from?.url.pathname !== params.to?.url.pathname;
    const elemPage = document.querySelector('#page');
    if (isNewPage && elemPage !== null) {
        elemPage.scrollTop = 0;
    }
});
`
        },
        {},
        {}
      )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-tb5o18">Tracking Scroll Position</h2> <p data-svelte-h="svelte-1yerjgg">Use the <code class="code">on:scroll</code> event to detect when the page region is scrolled vertically.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `
import type { ComponentEvents } from 'svelte';

function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
	console.log(event.currentTarget.scrollTop);
}
`
        },
        {},
        {}
      )} ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<AppShell ... on:scroll={scrollHandler}>`
        },
        {},
        {}
      )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-94z2hk">Scrollbar Gutter</h2>  <p data-svelte-h="svelte-fibsq7">Use the <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter" target="_blank">scrollbar gutter</a> property to adjust how the page region scrollbar gutters are handled. View a <a class="anchor" href="https://www.youtube.com/shorts/mg49F9qUs38" target="_blank">quick demo video</a>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `<AppShell scrollbarGutter="auto">...</AppShell>`
        },
        {},
        {}
      )}</section> <section class="space-y-4" data-svelte-h="svelte-nnk81a"><h2 class="h2">Accessibility</h2> <p>Please be aware that the App Shell does not support window scoped scrolling. This may affect certain features, such as
				pull-to-refresh on mobile. In order to scroll the page region you first need to focus the page with either a touch or click. If you
				require window scoped scrolling we recommend you implement a custom layout in place of the App Shell.</p></section> `;
    },
    sandbox: () => {
      return `  <aside class="alert variant-ghost-error" data-svelte-h="svelte-y4vqyq"><i class="fa-solid fa-triangle-exclamation text-4xl"></i> <div class="alert-message" data-toc-ignore><h3 class="h3" data-toc-ignore>Deprecated</h3>  <p>This feature is being phased out as we transition to <a class="underline" href="https://github.com/skeletonlabs/skeleton/discussions/2375" target="_blank">Skeleton v3</a>. This component will remain functional for all 2.x releases. However, we recommend you migrate to <a class="underline" href="https://next.skeleton.dev/docs/design/layouts" target="_blank">custom layouts</a> as soon as possible. While this guide is provided for Skeleton v3, the only prerequisite is Tailwind. Which means you can use these techniques today!</p></div> <div class="alert-actions"><a class="btn variant-filled" href="https://next.skeleton.dev/docs/design/layouts" target="_blank">Layout Guide</a></div></aside> <div class="space-y-2">${validate_component(DocsPreview, "DocsPreview").$$render($$result, { regionPreview: "h-[280px]" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<AppShell>
	${'<svelte:fragment slot="header">Header</svelte:fragment>'}
	${'<svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>'}
	${"<!-- (sidebarRight) -->"}
	${"<!-- (pageHeader) -->"}
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	${'<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>'}
	${"<!-- (footer) -->"}
</AppShell>`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `${validate_component(AppShell, "AppShell").$$render(
            $$result,
            {
              class: "card h-full p-1",
              slotSidebarLeft: "grid grid-cols-1",
              slotSidebarRight: "grid grid-cols-1",
              slotPageContent: "grid grid-cols-1"
            },
            {},
            {
              footer: () => {
                return ` ${``} `;
              },
              pageFooter: () => {
                return `${`<div class="card variant-soft-primary p-2 m-0.5 flex justify-center items-center overflow-hidden text-xs" data-svelte-h="svelte-1fvwam5">pageFooter</div>`} `;
              },
              pageHeader: () => {
                return `${``} `;
              },
              sidebarRight: () => {
                return `${``} `;
              },
              sidebarLeft: () => {
                return `${`<div class="card variant-soft p-2 m-0.5 flex justify-center items-center overflow-hidden text-xs" data-svelte-h="svelte-1qtm07t">sidebarLeft</div>`} `;
              },
              header: () => {
                return `${`<div class="card variant-soft p-2 m-0.5 flex justify-center items-center overflow-hidden text-xs" data-svelte-h="svelte-1uvzyl1">header</div>`} `;
              },
              default: () => {
                return ` <div class="card variant-soft-primary p-2 m-0.5 flex justify-center items-center overflow-hidden text-xs">${escape("<slot />")}</div> `;
              }
            }
          )} `;
        },
        lead: () => {
          return `<p class="w-full text-center" data-svelte-h="svelte-1xigm8z">The shaded regions represent the portion of the page that scrolls vertically.</p>`;
        }
      })}  <div class="card p-4 mx-auto grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 gap-4"><button class="${"btn " + escape("variant-filled", true)}">header</button> <button class="${"btn " + escape("variant-filled", true)}">sidebarLeft</button> <button class="${"btn " + escape("variant-soft", true)}">sidebarRight</button> <button class="${"btn " + escape("variant-soft", true)}">pageHeader</button> <button class="${"btn " + escape("variant-filled", true)}">pageFooter</button> <button class="${"btn " + escape("variant-soft", true)}">footer</button></div></div> `;
    },
    default: () => {
      return ` `;
    }
  })}`;
});
export {
  Page as default
};

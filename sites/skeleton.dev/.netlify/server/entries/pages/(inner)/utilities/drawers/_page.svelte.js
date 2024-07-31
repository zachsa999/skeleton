import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import { g as getDrawerStore } from "../../../../../chunks/stores4.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const sveldDrawer = { "props": [{ "name": "position", "kind": "let", "description": "Set the anchor position.", "type": "'left' | 'top' | 'right' | 'bottom'", "value": "'left'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "bgDrawer", "kind": "let", "description": "Drawer - Provide classes to set the drawer background color.", "type": "string", "value": "'bg-surface-100-800-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "border", "kind": "let", "description": "Drawer - Provide classes to set border color.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "rounded", "kind": "let", "description": "Drawer - Provide classes to set border radius.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "shadow", "kind": "let", "description": "Drawer - Provide classes to set the box shadow.", "type": "string", "value": "'shadow-xl'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "width", "kind": "let", "description": "Drawer - Provide classes to override the width.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "height", "kind": "let", "description": "Drawer - Provide classes to override the height.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "bgBackdrop", "kind": "let", "description": "Backdrop - Provide classes to set the backdrop background color", "type": "string", "value": "'bg-surface-backdrop-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "blur", "kind": "let", "description": "Backdrop - Provide classes to set the blur style.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "padding", "kind": "let", "description": "Backdrop - Provide classes to set padding.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "zIndex", "kind": "let", "description": "Backdrop - Provide a class to override the z-index", "type": "string", "value": "'z-40'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionBackdrop", "kind": "let", "description": "Provide arbitrary classes to the backdrop region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "regionDrawer", "kind": "let", "description": "Provide arbitrary classes to the drawer region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "labelledby", "kind": "let", "description": "Provide an ID of the element labeling the drawer.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "describedby", "kind": "let", "description": "Provide an ID of the element describing the drawer.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "duration", "kind": "let", "description": "Set the transition duration in milliseconds.", "type": "number", "value": "200", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "transitions", "kind": "let", "description": "Enable/Disable transitions", "type": "boolean", "value": "!$prefersReducedMotionStore", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "opacityTransition", "kind": "let", "description": "Enable/Disable opacity transition of Drawer", "type": "boolean", "value": "true", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }], "moduleExports": [], "slots": [{ "name": "__default__", "default": true, "slot_props": "{}" }], "events": [{ "type": "dispatched", "name": "backdrop", "detail": "{ event }", "description": "Fires on backdrop interaction." }, { "type": "dispatched", "name": "drawer", "detail": "{ event }", "description": "Fires on drawer interaction." }, { "type": "forwarded", "name": "touchstart", "element": "div" }, { "type": "forwarded", "name": "touchend", "element": "div" }, { "type": "forwarded", "name": "keypress", "element": "div" }], "typedefs": [] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getDrawerStore();
  const settings = {
    feature: DocsFeature.Utility,
    name: "Drawers",
    description: "Displays an overlay panel that attaches to any side of the screen.",
    imports: ["Drawer", "getDrawerStore"],
    types: ["DrawerSettings", "DrawerStore"],
    source: "packages/skeleton/src/lib/utilities/Drawer",
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/",
    components: [{ sveld: sveldDrawer }],
    keyboard: [['<kbd class="kbd">Esc</kbd>', " Closes the drawer."]]
  };
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return `  <aside class="alert alert-message variant-ghost-warning" data-svelte-h="svelte-9ipglf"><p>This feature uses the <a class="anchor" href="https://en.wikipedia.org/wiki/Singleton_pattern" target="_blank" rel="noreferrer">Singleton pattern</a>, meaning you should aim to implement a <u>single instance of the component per project</u>, but it will remain globally scoped
				and reusable via a Svelte writable store. Do not reimplement this component for each route page.</p></aside> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-j0d3hg">Prerequisites</h2> <h3 class="h3" data-svelte-h="svelte-1r79ge0">Initialize Stores</h3>  <p data-svelte-h="svelte-k5c5w9">Implement the following in the root layout of your application. This is required only once when implementing Skeleton&#39;s Drawer, Modal, and Toast stores and will prevent known issues with <a class="anchor" href="https://github.com/skeletonlabs/skeleton/wiki/SvelteKit-SSR-Warning" target="_blank">SvelteKit SSR</a>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `import { initializeStores, Drawer } from '@skeletonlabs/skeleton';

initializeStores();`
        },
        {},
        {}
      )} <h3 class="h3" data-svelte-h="svelte-9w92g">Drawer Component</h3> <p data-svelte-h="svelte-syze94">Implement a single instance of the drawer component in your app&#39;s root layout, above the App Shell (if present).</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<Drawer />

<!-- <AppShell>...</AppShell> -->`
        },
        {},
        {}
      )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1ew4iu7">Drawer Store</h2> <p data-svelte-h="svelte-dv9xe3">Provides an interface to control the drawer component.</p> <blockquote class="blockquote" data-svelte-h="svelte-tg5rmp">NOTE: To retrieve the store, <code class="code">getDrawerStore</code> must be invoked at the <u>top level</u> of your component!</blockquote> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `import { getDrawerStore } from "@skeletonlabs/skeleton";

const drawerStore = getDrawerStore();`
        },
        {},
        {}
      )} <h3 class="h3" data-svelte-h="svelte-10pjgd2">Open</h3> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `drawerStore.open();`
        },
        {},
        {}
      )} <h3 class="h3" data-svelte-h="svelte-n280c8">Close</h3> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `drawerStore.close();`
        },
        {},
        {}
      )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1z0qg33">Passing Metadata</h2> <p data-svelte-h="svelte-11zrwah">To pass arbitrary metadata, create a <code class="code">meta</code> object within <code class="code">DrawerSettings</code>. Then use
				<code class="code">$drawerStore.meta</code> to retrieve this.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "ts",
              code: `
const drawerSettings: DrawerSettings = {
	id: 'example-2',
	meta: { foo: 'bar', fizz: 'buzz', age: 40 }
};
drawerStore.open(drawerSettings);
`
            },
            {},
            {}
          )} <p data-svelte-h="svelte-nxuyt4">To retrieve this data, use:</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div>{$drawerStore.meta}</div>`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<button class="col-span-2 btn variant-filled" data-svelte-h="svelte-9cp6vx">Metadata Example</button>`;
        }
      })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-w10iph">Styling</h2> <p data-svelte-h="svelte-1afahhq">For global styles, apply changes via props directly to the Drawer component. However, you may also override styles per drawer
				instance via the <code class="code">DrawerSettings</code>.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `<p data-svelte-h="svelte-3c6bz2">Pass property values as key/value pairs as shown below.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "ts",
              code: `
const drawerSettings: DrawerSettings = {
	id: 'example-3',
	// Provide your property overrides:
	bgDrawer: 'bg-purple-900 text-white',
	bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
	width: 'w-[280px] md:w-[480px]',
	padding: 'p-4',
	rounded: 'rounded-xl',
};
drawerStore.open(drawerSettings);
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<button class="col-span-2 btn variant-filled" data-svelte-h="svelte-11jrz9q">Styled Drawer</button>`;
        }
      })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1b1xoky">Handling Contents</h2> <p data-svelte-h="svelte-157kwdm">Create a new <code class="code">DrawerSettings</code> object, supply a unique <code class="code">id</code>, then pass these settings
				on
				<code class="code">drawerStore.open()</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `
const settings: DrawerSettings = { id: 'example-1' };
drawerStore.open(settings);
`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-1xcumdt">Within the default slot of your Drawer component, setup conditional statements based on the value of <code class="code">$drawerStore.id</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `
<Drawer>
	{#if $drawerStore.id === 'example-1'}
		<!-- (show 'example-1' contents) -->
	{:else if $drawerStore.id === 'example-2'}
		<!-- (show 'example-2' contents) -->
	{:else}
		<!-- (fallback contents) -->
	{/if}
</Drawer>
`
        },
        {},
        {}
      )}</section> <section class="space-y-4"><div class="flex items-center space-x-2" data-svelte-h="svelte-vfkwyv"><h2 class="h2">Background Animation</h2> <span class="badge variant-filled-warning">Advanced</span></div> <p data-svelte-h="svelte-4yh66y">To animate the contents behind your drawer while it&#39;s open, first create a reactive property based on the state of the Drawer. Then
				implement a Tailwind <em>translate</em> class when the drawer is open.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `$: positionClasses = $drawerStore.open ? 'translate-x-[50%]' : '';`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-hj0sj8">Then apply this value to the proper wrapping page element, such as the <em>App Shell</em> or a <em>main</em> element.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<AppShell class="transition-transform {positionClasses}">...</AppShell>`
        },
        {},
        {}
      )} ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<main class="transition-transform {positionClasses}">...</main>`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-1y6g1vh">For best results, be sure to take into account the Drawer position as well via <code class="code">$drawerStore.position</code>.</p></section> <section class="space-y-4" data-svelte-h="svelte-1ryx4iw"><h2 class="h2">Accessibility</h2>  <p>Skeleton <u>does not</u> provide a means to disable the backdrop&#39;s click to close feature, as this would be harmful to accessibility. View the <a class="anchor" href="https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/" target="_blank" rel="noreferrer">ARIA APG guidelines</a> to learn more about modal accessibility.</p></section> `;
    },
    sandbox: () => {
      return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
        source: () => {
          return `<p data-svelte-h="svelte-q6x5t1">There are several steps involved to utilize this feature. Please refer to the documented instructions below.</p> `;
        },
        preview: () => {
          return ` <div class="flex justify-center gap-4"><button class="btn-icon variant-filled" data-svelte-h="svelte-poqr10"><i class="fa-solid fa-arrow-left"></i></button> <button class="btn-icon variant-filled" data-svelte-h="svelte-duuu2y"><i class="fa-solid fa-arrow-right"></i></button> <button class="btn-icon variant-filled" data-svelte-h="svelte-xoj8sn"><i class="fa-solid fa-arrow-up"></i></button> <button class="btn-icon variant-filled" data-svelte-h="svelte-16sfsk6"><i class="fa-solid fa-arrow-down"></i></button></div> `;
        },
        lead: () => {
          return `<p class="w-full text-center" data-svelte-h="svelte-1i49m2i">Select a drawer example to preview.</p>`;
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

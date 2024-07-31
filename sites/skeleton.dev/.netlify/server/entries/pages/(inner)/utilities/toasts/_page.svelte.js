import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import { g as getToastStore } from "../../../../../chunks/stores3.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const sveldToast = { "props": [{ "name": "position", "kind": "let", "description": "Set the toast position.", "type": "'t' | 'b' | 'l' | 'r' | 'tl' | 'tr' | 'bl' | 'br'", "value": "'b'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "max", "kind": "let", "description": "Maximum toasts that can show at once.", "type": "number", "value": "3", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "background", "kind": "let", "description": "Provide classes to set the background color.", "type": "string", "value": "'variant-filled-secondary'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "width", "kind": "let", "description": "Provide classes to set width styles.", "type": "string", "value": "'max-w-[640px]'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "color", "kind": "let", "description": "Provide classes to set the text color.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "padding", "kind": "let", "description": "Provide classes to set the padding.", "type": "string", "value": "'p-4'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "spacing", "kind": "let", "description": "Provide classes to set toast horizontal spacing.", "type": "string", "value": "'space-x-4'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "rounded", "kind": "let", "description": "Provide classes to set the border radius styles.", "type": "string", "value": "'rounded-container-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "shadow", "kind": "let", "description": "Provide classes to set the border box shadow.", "type": "string", "value": "'shadow-lg'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "zIndex", "kind": "let", "description": "Provide a class to override the z-index", "type": "string", "value": "'z-[888]'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonAction", "kind": "let", "description": "Provide styles for the action button.", "type": "string", "value": "'btn variant-filled'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonDismiss", "kind": "let", "description": "Provide styles for the dismiss button.", "type": "string", "value": "'btn-icon btn-icon-sm variant-filled'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonDismissLabel", "kind": "let", "description": "The button label text.", "type": "string", "value": "'✕'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitions", "kind": "let", "description": "Enable/Disable transitions", "type": "boolean", "value": "!$prefersReducedMotionStore", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionIn", "kind": "let", "description": "Provide the transition to used on entry.", "type": "TransitionIn", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionInParams", "kind": "let", "description": "Transition params provided to `transitionIn`.", "type": "TransitionParams", "value": "{ duration: 250 }", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionOut", "kind": "let", "description": "Provide the transition to used on exit.", "type": "TransitionOut", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionOutParams", "kind": "let", "description": "Transition params provided to `transitionOut`.", "type": "TransitionParams", "value": "{ duration: 250 }", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [], "events": [], "typedefs": [] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getToastStore();
  const settings = {
    feature: DocsFeature.Utility,
    name: "Toasts",
    description: "Simple notifications utilizing a dynamic queue system.",
    imports: ["Toast", "getToastStore"],
    types: ["ToastSettings", "ToastStore"],
    source: "packages/skeleton/src/lib/utilities/Toast",
    components: [{ sveld: sveldToast }],
    transitionIn: "fly",
    transitionOut: "fly"
  };
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return `  <aside class="alert alert-message variant-ghost-warning" data-svelte-h="svelte-9ipglf"><p>This feature uses the <a class="anchor" href="https://en.wikipedia.org/wiki/Singleton_pattern" target="_blank" rel="noreferrer">Singleton pattern</a>, meaning you should aim to implement a <u>single instance of the component per project</u>, but it will remain globally scoped
				and reusable via a Svelte writable store. Do not reimplement this component for each route page.</p></aside> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-j0d3hg">Prerequisites</h2> <h3 class="h3" data-svelte-h="svelte-1r79ge0">Initialize Stores</h3>  <p data-svelte-h="svelte-k5c5w9">Implement the following in the root layout of your application. This is required only once when implementing Skeleton&#39;s Drawer, Modal, and Toast stores and will prevent known issues with <a class="anchor" href="https://github.com/skeletonlabs/skeleton/wiki/SvelteKit-SSR-Warning" target="_blank">SvelteKit SSR</a>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `import { initializeStores, Toast } from '@skeletonlabs/skeleton';

initializeStores();`
        },
        {},
        {}
      )} <h3 class="h3" data-svelte-h="svelte-1sq8kz8">Toast Component</h3> <p data-svelte-h="svelte-tupda4">Implement a single instance of the toast component in your app&#39;s root layout, above the App Shell (if present).</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<Toast />

<!-- <AppShell>...</AppShell> -->`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-ob0iz0">We&#39;ll cover triggering this feature on-demand in the documentation below.</p></section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-13jgkrp">Toast Store</h2> <p data-svelte-h="svelte-1ti54c7">The Toast Store acts as a queue for your toast messages.</p> <blockquote class="blockquote" data-svelte-h="svelte-yfqn">NOTE: To retrieve the store, <code class="code">getToastStore</code> must be invoked at the <u>top level</u> of your component!</blockquote> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `import { getToastStore } from '@skeletonlabs/skeleton';

const toastStore = getToastStore();
			`
        },
        {},
        {}
      )}  <h3 class="h3" data-svelte-h="svelte-bl2bk0">Trigger</h3> <p data-svelte-h="svelte-gaf44c">To add a message to the queue, use the <code class="code">toastStore.trigger()</code> method and pass a toast settings object.</p>  ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return ` ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "ts",
              code: `
const t: ToastSettings = {
	message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
};
toastStore.trigger(t);
`
            },
            {},
            {}
          )}  `;
        },
        preview: () => {
          return `<button class="btn variant-filled" data-svelte-h="svelte-y0aliz">Basic Toast</button>`;
        }
      })}  ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "ts",
              code: `
const t: ToastSettings = {
	message: 'Message contains a unique action.',
	action: {
		label: 'Greeting',
		response: () => alert('Hello, Skeleton')
	}
};
toastStore.trigger(t);
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<button class="btn variant-filled" data-svelte-h="svelte-1x5fkp5">Action Toast</button>`;
        }
      })} <h3 class="h3" data-svelte-h="svelte-5dudqg">Timing</h3> <p data-svelte-h="svelte-ydmcz3">Use the following setting to adjust the toast timing.</p>  ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "ts",
              code: `
const t: ToastSettings = {
	message: 'This message will remain until dismissed.',
	autohide: false
};
toastStore.trigger(t);
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="flex gap-4"><button class="btn variant-filled" data-svelte-h="svelte-1bh7gq0">No Timeout</button></div>`;
        }
      })}  ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "ts",
              code: `
const t: ToastSettings = {
	message: 'This message will auto-hide after 10 seconds.',
	timeout: 10000
};
toastStore.trigger(t);
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="flex gap-4"><button class="btn variant-filled" data-svelte-h="svelte-1r98k5m">Adjusted Timeout</button></div>`;
        }
      })} <h3 class="h3" data-svelte-h="svelte-v8yus0">Dismiss</h3> <p data-svelte-h="svelte-7n6c1z">Use the <code class="code">hideDismiss</code> option to disable the dismiss button. When using this setting
				<code class="code">autohide</code> option enabled by default.</p>  ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "ts",
              code: `
const t: ToastSettings = {
	message: 'The dismiss button is hidden.',
	hideDismiss: true,
	timeout: 10000
};
toastStore.trigger(t);
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="flex gap-4"><button class="btn variant-filled" data-svelte-h="svelte-1epowis">Hide Dismiss</button></div>`;
        }
      })} <h3 class="h3" data-svelte-h="svelte-qvzxtz">Hover State</h3> <p data-svelte-h="svelte-gvmfsp">Use the <code class="code">hoverable</code> option to keep the toast visible while hovering with a mouse cursor.</p>  ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "ts",
              code: `
const t: ToastSettings = {
	message: 'remain visible on hover.',
	timeout: 5000,
	hoverable: true
};
toastStore.trigger(t);
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="flex gap-4"><button class="btn variant-filled" data-svelte-h="svelte-a0wdxs">Visible on Hover</button></div>`;
        }
      })}  <h3 class="h3" data-svelte-h="svelte-14gerjd">Clear</h3> <p data-svelte-h="svelte-bolrj7">Use <code class="code">toastStore.clear()</code> to clear the entire toast store queue.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `toastStore.clear();`
        },
        {},
        {}
      )}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-4am85d">Programmatic</h2> <p data-svelte-h="svelte-1e3rjj5">Create a reference for your toast so that you may programmatically close it on demand.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "ts",
              code: `
const t: ToastSettings = {
	message: 'Programmatically closable toast',
};
toastId = toastStore.trigger(t);

// close toast
toastStore.close(toastId);
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="flex gap-4"><button class="btn variant-filled" data-svelte-h="svelte-wgneez">Show</button> <button class="btn variant-filled-error" data-svelte-h="svelte-1l9f1af">Close</button></div>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-w10iph">Styling</h2> <p data-svelte-h="svelte-1oqnpc1">We recommend applying global styles via the Toast component props. However, you may also provide styles per toast instance.</p> <h3 class="h3" data-svelte-h="svelte-y02s3l">Backgrounds</h3> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `<p data-svelte-h="svelte-txgywh">You can directly control the background styling for each toasting using <code class="code">background.</code>. Accepts utility
						and variant classes.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "ts",
              code: `
const t: ToastSettings = {
	message: 'This message will have a colorful background.',
	// Provide any utility or variant background style:
	background: 'variant-filled-warning',
};
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return ` <div class="grid grid-cols-3 gap-4"><button class="btn variant-filled" data-svelte-h="svelte-1uwt5zk">Primary</button> <button class="btn variant-filled" data-svelte-h="svelte-e0i6dw">Secondary</button> <button class="btn variant-filled" data-svelte-h="svelte-sjmhsk">Tertiary</button> <button class="btn variant-filled" data-svelte-h="svelte-5kexew">Success</button> <button class="btn variant-filled" data-svelte-h="svelte-1s9da4">Warning</button> <button class="btn variant-filled" data-svelte-h="svelte-11jb9a0">Error</button></div>`;
        }
      })} <h3 class="h3" data-svelte-h="svelte-156wnpj">Custom Styles</h3> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `<p data-svelte-h="svelte-g07lho">Append <code class="code">classes</code> to your toast settings to provide any arbitrary classes.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "ts",
              code: `
const t: ToastSettings = {
	message: 'This message has custom styles.',
	background: 'bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white',
	// Add your custom classes here:
	classes: 'border-4 border-purple-500'
};
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<button class="btn variant-filled" data-svelte-h="svelte-1aecwei">Styled</button>`;
        }
      })} <h3 class="h3" data-svelte-h="svelte-16msoox">Positioning</h3> <p data-svelte-h="svelte-cu6hpk">Skeleton takes an opinionated stance on positioning, preferring to keep toast notifications in fixed location on your page. This
				position can be modified globally the <code class="code">position</code> property on the Toast component. However, we do not allow you
				to modify this per toast instance as we feel this would provide inconsistent UX.</p></section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-bqiz5v">Callbacks</h2> <p data-svelte-h="svelte-14ew4ub">You can optionally add a callback function to your <code class="code">ToastSettings</code> to receive the unique ID assigned to each
				toast, as well as listen for when the <code class="code">queued</code> and <code class="code">closed</code> lifecycle events occur for
				that toast message.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `
const t: ToastSettings = {
	// ...
	callback: (response) => {
		console.log(response.id);
		if (response.status === 'queued') console.log('Toast was queued!');
		if (response.status === 'closed') console.log('Toast was closed!');
	}
};
`
        },
        {},
        {}
      )}</section> `;
    },
    sandbox: () => {
      return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
        source: () => {
          return `<p data-svelte-h="svelte-q6x5t1">There are several steps involved to utilize this feature. Please refer to the documented instructions below.</p> `;
        },
        preview: () => {
          return `<div class="flex gap-4"><button class="btn variant-filled" data-svelte-h="svelte-1j1dcsv">Simple</button> <button class="btn variant-filled" data-svelte-h="svelte-1ixpxqb">Queue Multiple</button></div>`;
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

import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import { g as getModalStore } from "../../../../../chunks/stores2.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { A as Accordion, a as AccordionItem } from "../../../../../chunks/AccordionItem.js";
import { T as TabGroup, a as Tab } from "../../../../../chunks/Tab.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const sveldModal = { "props": [{ "name": "components", "kind": "let", "description": "Register a list of reusable component modals.", "type": "{}", "value": "{}", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "position", "kind": "let", "description": "Set the modal position within the backdrop container", "type": "string", "value": "'items-center'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "background", "kind": "let", "description": "Provide classes to style the modal background.", "type": "string", "value": "'bg-surface-100-800-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "width", "kind": "let", "description": "Provide classes to style the modal width.", "type": "string", "value": "'w-modal'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "height", "kind": "let", "description": "Provide classes to style the modal height.", "type": "string", "value": "'h-auto'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "padding", "kind": "let", "description": "Provide classes to style the modal padding.", "type": "string", "value": "'p-4'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "spacing", "kind": "let", "description": "Provide classes to style the modal spacing.", "type": "string", "value": "'space-y-4'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "rounded", "kind": "let", "description": "Provide classes to style the modal border radius.", "type": "string", "value": "'rounded-container-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "shadow", "kind": "let", "description": "Provide classes to style modal box shadow.", "type": "string", "value": "'shadow-xl'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "zIndex", "kind": "let", "description": "Provide a class to override the z-index", "type": "string", "value": "'z-[999]'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonNeutral", "kind": "let", "description": "Provide classes for neutral buttons, such as Cancel.", "type": "string", "value": "'variant-ghost-surface'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonPositive", "kind": "let", "description": "Provide classes for positive actions, such as Confirm or Submit.", "type": "string", "value": "'variant-filled'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonTextCancel", "kind": "let", "description": "Override the text for the Cancel button.", "type": "string", "value": "'Cancel'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "buttonTextConfirm", "kind": "let", "description": "Override the text for the Confirm button.", "type": "string", "value": "'Confirm'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "buttonTextSubmit", "kind": "let", "description": "Override the text for the Submit button.", "type": "string", "value": "'Submit'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "regionBackdrop", "kind": "let", "description": "Provide arbitrary classes to the backdrop region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionHeader", "kind": "let", "description": "Provide arbitrary classes to modal header region.", "type": "string", "value": "'text-2xl font-bold'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionBody", "kind": "let", "description": "Provide arbitrary classes to modal body region.", "type": "string", "value": "'max-h-[200px] overflow-hidden'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionFooter", "kind": "let", "description": "Provide arbitrary classes to modal footer region.", "type": "string", "value": "'flex justify-end space-x-2'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitions", "kind": "let", "description": "Enable/Disable transitions", "type": "boolean", "value": "!$prefersReducedMotionStore", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionIn", "kind": "let", "description": "Provide the transition used on entry.", "type": "ModalTransitionIn", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionInParams", "kind": "let", "description": "Transition params provided to `TransitionIn`.", "type": "TransitionParams", "value": "{ duration: 150, opacity: 0, x: 0, y: 100 }", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionOut", "kind": "let", "description": "Provide the transition used on exit.", "type": "TransitionOut", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionOutParams", "kind": "let", "description": "Transition params provided to `TransitionOut`.", "type": "TransitionParams", "value": "{ duration: 150, opacity: 0, x: 0, y: 100 }", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [], "events": [{ "type": "dispatched", "name": "backdrop", "detail": "{ event }", "description": "Fires on backdrop interaction." }, { "type": "forwarded", "name": "touchstart", "element": "div" }, { "type": "forwarded", "name": "touchend", "element": "div" }], "typedefs": [] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getModalStore();
  let tabCustom = "register";
  const settings = {
    feature: DocsFeature.Utility,
    name: "Modals",
    description: "High priority dialogs and modals using a dynamic queue system.",
    imports: ["Modal", "getModalStore"],
    types: ["ModalSettings", "ModalComponent", "ModalStore"],
    source: "packages/skeleton/src/lib/utilities/Modal",
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",
    components: [{ sveld: sveldModal }],
    keyboard: [['<kbd class="kbd">Esc</kbd>', " Dismisses the foremost modal."]],
    classes: [
      [
        '<code class="code">.w-modal</code>',
        "-",
        "Sets a standard responsive width for modals."
      ],
      [
        '<code class="code">.w-modal-slim</code>',
        "-",
        "Create a slimmer modal. Great for small component modals."
      ],
      [
        '<code class="code">.w-modal-wide</code>',
        "-",
        "Create a wider modal. Great for full screen component modals."
      ]
    ],
    transitionIn: "fly",
    transitionOut: "fly"
  };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
      usage: () => {
        return `  <aside class="alert alert-message variant-ghost-warning" data-svelte-h="svelte-9ipglf"><p>This feature uses the <a class="anchor" href="https://en.wikipedia.org/wiki/Singleton_pattern" target="_blank" rel="noreferrer">Singleton pattern</a>, meaning you should aim to implement a <u>single instance of the component per project</u>, but it will remain globally scoped
				and reusable via a Svelte writable store. Do not reimplement this component for each route page.</p></aside> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-j0d3hg">Prerequisites</h2> <h3 class="h3" data-svelte-h="svelte-1r79ge0">Initialize Stores</h3>  <p data-svelte-h="svelte-k5c5w9">Implement the following in the root layout of your application. This is required only once when implementing Skeleton&#39;s Drawer, Modal, and Toast stores and will prevent known issues with <a class="anchor" href="https://github.com/skeletonlabs/skeleton/wiki/SvelteKit-SSR-Warning" target="_blank">SvelteKit SSR</a>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `import { initializeStores, Modal } from '@skeletonlabs/skeleton';

initializeStores();`
          },
          {},
          {}
        )} <h3 class="h3" data-svelte-h="svelte-1s1oeu6">Modal Component</h3> <p data-svelte-h="svelte-1k2e7vu">Implement a single instance of the modal component in your app&#39;s root layout, above the App Shell (if present).</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `<Modal />

<!-- <AppShell>...</AppShell> -->`
          },
          {},
          {}
        )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-xob6ov">Modal Store</h2> <p data-svelte-h="svelte-599b4n">When you wish to trigger a modal, import the <code class="code">getModalStore</code> function and invoke it to retrieve the
				<code class="code">modalStore</code>, which is a Svelte store that acts as the modal queue.</p> <blockquote class="blockquote" data-svelte-h="svelte-1mzwcyd">NOTE: To retrieve the store, <code class="code">getModalStore</code> must be invoked at the <u>top level</u> of your component!</blockquote> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `
import { getModalStore } from '@skeletonlabs/skeleton';
			
const modalStore = getModalStore();
			`
          },
          {},
          {}
        )} <h3 class="h3" data-svelte-h="svelte-bl2bk0">Trigger</h3> <p data-svelte-h="svelte-xe7os6">The <code class="code">title</code>, <code class="code">body</code>, and <code class="code">image</code> are available to all modals.</p>  ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
const modal: ModalSettings = {
	type: 'alert',
	// Data
	title: 'Example Alert',
	body: 'This is an example modal.',
	image: 'https://i.imgur.com/WOgTG96.gif',
};
modalStore.trigger(modal);
`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `<div class="flex gap-4"><button class="btn variant-filled" data-svelte-h="svelte-1swfclz">Alert Modal</button> <button class="btn variant-filled" data-svelte-h="svelte-1pknnq9">Queue Multiple</button></div>`;
          }
        })}  ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
const modal: ModalSettings = {
	type: 'confirm',
	// Data
	title: 'Please Confirm',
	body: 'Are you sure you wish to proceed?',
	// TRUE if confirm pressed, FALSE if cancel pressed
	response: (r: boolean) => console.log('response:', r),
};
modalStore.trigger(modal);
`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `<button class="btn variant-filled" data-svelte-h="svelte-1fiej5n">Confirm Modal</button>`;
          }
        })}  ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
const modal: ModalSettings = {
	type: 'prompt',
	// Data
	title: 'Enter Name',
	body: 'Provide your first name in the field below.',
	// Populates the input value and attributes
	value: 'Skeleton',
	valueAttr: { type: 'text', minlength: 3, maxlength: 10, required: true },
	// Returns the updated response value
	response: (r: string) => console.log('response:', r),
};
modalStore.trigger(modal);
`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `<button class="btn variant-filled" data-svelte-h="svelte-44ca9x">Prompt Modal</button>`;
          }
        })}  <h3 class="h3" data-svelte-h="svelte-n280c8">Close</h3> <p data-svelte-h="svelte-1ugwm81">Trigger the <code class="code">close()</code> method to remove the first modal in the modal queue.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `modalStore.close();`
          },
          {},
          {}
        )}  <h3 class="h3" data-svelte-h="svelte-14gerjd">Clear</h3> <p data-svelte-h="svelte-fm1pg4">Trigger the <code class="code">clear()</code> method to completely empty the modal queue.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `modalStore.clear();`
          },
          {},
          {}
        )}</section>  <section class="space-y-4"><div class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center" data-svelte-h="svelte-ddudlm"><div class="space-y-4"><h2 class="h2">Modal Settings</h2> <p>Define settings <u>per modal instance</u> via the <code class="code">trigger()</code> method. These are similar to modal properties,
						but do not provide the same breadth of options.</p></div> <div><a class="btn variant-filled font-bold" href="https://github.com/skeletonlabs/skeleton/blob/master/packages/skeleton/src/lib/utilities/Modal/types.ts#L14" target="_blank" rel="noreferrer"><span>Available Settings</span> <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div></div>  ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `
const modal: ModalSettings = {

	// Provide arbitrary classes to the backdrop and modal elements:
	backdropClasses: '!bg-green-500',
	modalClasses: '!bg-red-500',

	// Provide arbitrary metadata to your modal instance:
	meta: { foo: 'bar', fizz: 'buzz', fn: myCustomFunction }

};`
          },
          {},
          {}
        )}</section>  <section class="space-y-4" data-svelte-h="svelte-1m2wr7m"><h2 class="h2">Modal Properties</h2> <p>Define <u>global settings</u> for all modal instances. Tap the &quot;Props&quot; tab at the top of the page for a full list of options.</p></section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-ege5i2">Async Response</h2>  <p data-svelte-h="svelte-1uzmt2u">You may await a modal response by wrapping it in a <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noreferrer">Javascript Promise</a>, which resolves when the response is triggered.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `
new Promise<boolean>((resolve) => {
	const modal: ModalSettings = {
		type: 'confirm',
		title: 'Please Confirm',
		body: 'Are you sure you wish to proceed?',
		response: (r: boolean) => {
			resolve(r);
		}
	};
	modalStore.trigger(modal);
}).then((r: any) => {
	console.log('resolved response:', r);
});
	`
          },
          {},
          {}
        )}</section>  <section class="space-y-4"><div class="flex items-center space-x-2" data-svelte-h="svelte-dkuauw"><h2 class="h2">Component Modals</h2> <span class="badge variant-filled-warning">Advanced</span></div> <p data-svelte-h="svelte-1nqkqq0">Skeleton allows you to generate custom modals using Svelte components.</p> <h3 class="sr-only" data-svelte-h="svelte-1speprl">Example Modals</h3> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `<div class="text-center" data-svelte-h="svelte-6hi8v7"><a class="btn variant-ghost" href="https://github.com/skeletonlabs/skeleton/tree/master/sites/skeleton.dev/src/lib/modals/examples" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i> <span>View Source on GitHub</span> <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div> `;
          },
          preview: () => {
            return `<div class="grid grid-cols-1 md:grid-cols-5 gap-4 md:max-w-[480px] mx-auto"><button class="btn variant-filled" data-svelte-h="svelte-ptob07">Form</button> <button class="btn variant-filled" data-svelte-h="svelte-ha5lkz">List</button> <button class="btn variant-filled" data-svelte-h="svelte-12hx6lz">Embed</button> <button class="btn variant-filled" data-svelte-h="svelte-1t2khfb">Image</button> <button class="btn variant-filled" data-svelte-h="svelte-1h6em7j">Full</button></div>`;
          }
        })} <h3 class="h3" data-svelte-h="svelte-xu6ioz">Choose a Method</h3> ${validate_component(TabGroup, "TabGroup").$$render(
          $$result,
          {
            regionList: "!grid grid-cols-2",
            regionPanel: "space-y-4"
          },
          {},
          {
            panel: () => {
              return ` ${tabCustom === "register" ? `<p data-svelte-h="svelte-bf03sa">This will create a set of reusable custom modals that are globally available to your application. Add the following to your
							root layout in <code class="code">/src/routes/+layout.svelte</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `
import ModalComponentOne from '/example/path/here';
import ModalComponentTwo from '/example/path/here';

const modalRegistry: Record<string, ModalComponent> = {
	// Set a unique modal ID, then pass the component reference
	modalComponentOne: { ref: ModalComponentOne },
	modalComponentTwo: { ref: ModalComponentTwo },
	// ...
};
							`
                },
                {},
                {}
              )} <p data-svelte-h="svelte-mmuu6">Provide the <code class="code">modalRegistry</code> to the modal component, which also resides in your root layout.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `<Modal components={modalRegistry} />`
                },
                {},
                {}
              )} <p data-svelte-h="svelte-9v9lag">Then, when triggering a new component, set the value of <code class="code">component</code> to the unique modal ID as registered
							above.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `
const modal: ModalSettings = {
	type: 'component',
	component: 'modalComponentOne',
};
modalStore.trigger(modal);
							`
                },
                {},
                {}
              )}` : `${tabCustom === "direct" ? `<p data-svelte-h="svelte-1k2iiyx">This will implement a single component for a one-off modal instance.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `
import MyCustomComponent from '/example/path/here';

const modalComponent: ModalComponent = { ref: MyCustomComponent };

const modal: ModalSettings = {
	type: 'component',
	component: modalComponent,
};
modalStore.trigger(modal);
							`
                },
                {},
                {}
              )}` : ``}`} `;
            },
            default: () => {
              return `${validate_component(Tab, "Tab").$$render(
                $$result,
                {
                  name: "component-modals",
                  value: "register",
                  group: tabCustom
                },
                {
                  group: ($$value) => {
                    tabCustom = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `Registry (recommended)`;
                  }
                }
              )} ${validate_component(Tab, "Tab").$$render(
                $$result,
                {
                  name: "component-modals",
                  value: "direct",
                  group: tabCustom
                },
                {
                  group: ($$value) => {
                    tabCustom = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `Direct`;
                  }
                }
              )} `;
            }
          }
        )} <h3 class="h3" data-svelte-h="svelte-pgkux7">Creating a Component</h3> <p data-svelte-h="svelte-iffo80">Learn more about how to construct a custom modal component using the tips below.</p> ${validate_component(Accordion, "Accordion").$$render(
          $$result,
          {
            autocollapse: true,
            class: "card variant-glass p-4"
          },
          {},
          {
            default: () => {
              return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { open: true }, {}, {
                content: () => {
                  return `<p data-svelte-h="svelte-pb0q2j">When creating a custom component, make sure to import the modal store. This should occur before all following steps.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
                    $$result,
                    {
                      language: "ts",
                      code: `
import { getModalStore } from '@skeletonlabs/skeleton';

const modalStore = getModalStore();
							`
                    },
                    {},
                    {}
                  )} `;
                },
                summary: () => {
                  return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-w76a64">Accessing Modal Store Data</h3>`;
                }
              })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                content: () => {
                  return `<p data-svelte-h="svelte-f1cwhq">The active and visible modal in your queue is always available at the zero index: <code class="code">$modalStore[0]</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
                    $$result,
                    {
                      language: "ts",
                      code: `if ($modalStore[0]) console.log($modalStore[0].title);`
                    },
                    {},
                    {}
                  )} `;
                },
                summary: () => {
                  return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-1ohts0u">Determining the Active Modal</h3>`;
                }
              })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                content: () => {
                  return `<p data-svelte-h="svelte-fhhzw8">Wrap your component template markup in an <code class="code">#if</code> statement before accessing modal store values.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
                    $$result,
                    {
                      language: "html",
                      code: `
{#if $modalStore[0]}
	<header>{$modalStore[0].title}</header>
	<article>{$modalStore[0].body}</article>
{/if}
						`
                    },
                    {},
                    {}
                  )} `;
                },
                summary: () => {
                  return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-uh8dyg">Template Conditional</h3>`;
                }
              })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                content: () => {
                  return `<p data-svelte-h="svelte-etnaf6">The modal component in your root layout is considered the &quot;parent&quot; component, which includes a set of global configuration
							properties. For example:</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
                    $$result,
                    {
                      language: "html",
                      code: `<Modal background="bg-green-500" />`
                    },
                    {},
                    {}
                  )} <blockquote class="blockquote" data-svelte-h="svelte-1j6xjen">TIP: tap the <u>Props</u> tab at the top of this page for a full list of available properties.</blockquote> <p data-svelte-h="svelte-mxyc8d">Custom modal components are then generated within this using <code class="code">svelte:component</code>. By default, Skeleton
							provides all parent props to your custom component using a
							<code class="code">parent</code>
							prop. This can be enabled by adding the following to your custom component.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
                    $$result,
                    {
                      language: "ts",
                      code: `export let parent: any;`
                    },
                    {},
                    {}
                  )} <p data-svelte-h="svelte-1d3jfzg">You may then access and use any parent value.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
                    $$result,
                    {
                      language: "html",
                      code: `<pre class="pre">{JSON.stringify(parent)}</pre>`
                    },
                    {},
                    {}
                  )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                    $$result,
                    {
                      language: "html",
                      code: `<pre class="pre">background: {parent.background}</pre>`
                    },
                    {},
                    {}
                  )} `;
                },
                summary: () => {
                  return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-csfvrf">Inherit Modal Component Props</h3>`;
                }
              })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                content: () => {
                  return `${validate_component(CodeBlock, "CodeBlock").$$render(
                    $$result,
                    {
                      language: "ts",
                      code: `
const modal: ModalSettings = {
	// ...
	response: (r: boolean | undefined) => console.log('response:', r) 
};
modalStore.trigger(modal);
						`
                    },
                    {},
                    {}
                  )} <p data-svelte-h="svelte-13j7aso">Alerts, Confirm, and Prompt modals can provide the following response values.</p> <ol class="list-decimal list-inside space-y-2" data-svelte-h="svelte-1n81wae"><li><code class="code">true</code> - when the <u>Positive</u> button is tapped (ex: Confirm)</li> <li><code class="code">false</code> - when the <u>Negative</u> button is tapped (ex: Cancel)</li> <li><code class="code">undefined</code> - when the <u>Backdrop</u> is tapped, which surrounds the modal window.</li></ol> <div class="card p-4 variant-ghost-warning" data-svelte-h="svelte-ysi28t"><p>All modals, including component modals, will respond with <code class="code">undefined</code> when the backdrop is tapped.</p></div> `;
                },
                summary: () => {
                  return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-1bl1lpm">Default Response Values</h3>`;
                }
              })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                content: () => {
                  return `<p data-svelte-h="svelte-1qds0bd">Use the <code class="code">$modalStore[0].response()</code> callback method to return a modal response value.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
                    $$result,
                    {
                      language: "ts",
                      code: `$modalStore[0].response({ foo: 'bar' });`
                    },
                    {},
                    {}
                  )} `;
                },
                summary: () => {
                  return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-h8aopa">Returning a Custom Response Value</h3>`;
                }
              })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                content: () => {
                  return `<p data-svelte-h="svelte-mns4nl">When triggering a component, use the Modal Settings <code class="code">meta</code> key to pass arbitrary data.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
                    $$result,
                    {
                      language: "ts",
                      code: `
const modal: ModalSettings = {
	// ...
	meta: { foo: 'bar', fizz: 'buzz', fn: myCustomFunction }
};
							`
                    },
                    {},
                    {}
                  )} <p data-svelte-h="svelte-1k3kdjy">You can then use <code class="code">$modalStore[0].meta</code> within your custom component to retrieve this data.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
                    $$result,
                    {
                      language: "html",
                      code: `<pre class="pre">{JSON.stringify($modalStore[0].meta)}</pre>`
                    },
                    {},
                    {}
                  )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                    $$result,
                    {
                      language: "html",
                      code: `<pre class="pre">foo: {$modalStore[0].meta.foo}</pre>`
                    },
                    {},
                    {}
                  )} `;
                },
                summary: () => {
                  return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-1p9x44v">Passing Arbitrary Data</h3>`;
                }
              })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                content: () => {
                  return `<p data-svelte-h="svelte-169wpp">When creating a <code class="code">ModalComponent</code> instance, you can <u>optionally</u> pass
							<code class="code">props</code>
							and default
							<code class="code">slot</code> values as shown.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
                    $$result,
                    {
                      language: "ts",
                      code: `
import MyCustomComponent from '/example/path/here';

const modalComponent: ModalComponent = {
	ref: MyCustomComponent,
	props: { foo: 'bar' },
	slot: '<p>Skeleton</p>'
};
							`
                    },
                    {},
                    {}
                  )} <p data-svelte-h="svelte-e4b3dw">These values be utilized per standard Svelte component conventions.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
                    $$result,
                    {
                      language: "ts",
                      code: `export let foo = 'fizzbuzz';`
                    },
                    {},
                    {}
                  )} ${validate_component(CodeBlock, "CodeBlock").$$render($$result, { language: "html", code: `<slot />` }, {}, {})} `;
                },
                summary: () => {
                  return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-1sb8295">Component Props and Slots</h3>`;
                }
              })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                content: () => {
                  return `<p data-svelte-h="svelte-1746r9s">Skeleton&#39;s modal component uses a <code class="code">width</code> property, which can use either an arbitrary width class, or any
							of the canned options provided below:</p> <ul class="list-disc list-outside ml-4 space-y-1" data-svelte-h="svelte-3lu03f"><li><code class="code">.w-modal</code> - the standard modal size.</li> <li><code class="code">.w-modal-slim</code> - the smaller modal width.</li> <li><code class="code">.w-modal-wide</code> - the larger modal width.</li></ul> <p data-svelte-h="svelte-xd7i5c">Your custom component can either inherit this from the <code class="code">parent.width</code> property.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
                    $$result,
                    {
                      language: "html",
                      code: `
{#if $modalStore[0]}
	<div class="{parent.width}">
		<h2 class="h2">Wide Modal</h2>
		<p>This will be a wide modal.</p>
	</div>
{/if}
						`
                    },
                    {},
                    {}
                  )} <p data-svelte-h="svelte-1shrcit">Likewise these classes can be defined directly into the template.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
                    $$result,
                    {
                      language: "html",
                      code: `
{#if $modalStore[0]}
	<div class="w-modal-wide">
		<h2 class="h2">Wide Modal</h2>
		<p>This will be a wide modal.</p>
	</div>
{/if}
						`
                    },
                    {},
                    {}
                  )} `;
                },
                summary: () => {
                  return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-10wrza6">Setting the Modal Width</h3>`;
                }
              })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                content: () => {
                  return `<p data-svelte-h="svelte-v44x9n">You can use either method below to close the modal. Use this for &quot;cancel&quot; actions.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
                    $$result,
                    {
                      language: "ts",
                      code: `parent.onClose();`
                    },
                    {},
                    {}
                  )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                    $$result,
                    {
                      language: "ts",
                      code: `modalStore.close();`
                    },
                    {},
                    {}
                  )} `;
                },
                summary: () => {
                  return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-1nmi85">Closing a Modal</h3>`;
                }
              })}`;
            }
          }
        )}</section> <section class="space-y-4" data-svelte-h="svelte-1ryx4iw"><h2 class="h2">Accessibility</h2>  <p>Skeleton <u>does not</u> provide a means to disable the backdrop&#39;s click to close feature, as this would be harmful to accessibility. View the <a class="anchor" href="https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/" target="_blank" rel="noreferrer">ARIA APG guidelines</a> to learn more about modal accessibility.</p></section> `;
      },
      sandbox: () => {
        return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
          source: () => {
            return `<p data-svelte-h="svelte-q6x5t1">There are several steps involved to utilize this feature. Please refer to the documented instructions below.</p> `;
          },
          preview: () => {
            return `<button class="btn variant-filled" data-svelte-h="svelte-oyl8i7">Show Modal</button>`;
          }
        })} `;
      },
      default: () => {
        return `  `;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};

import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { L as LayoutPage } from "../../../../../../chunks/LayoutPage.js";
import "../../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LayoutPage, "LayoutPage").$$render($$result, {}, {}, {
    default: () => {
      return ` <ol class="breadcrumb" data-svelte-h="svelte-133bccq"><li class="crumb"><a class="anchor" href="/docs/contributing">Contributing</a></li> <li class="crumb-separator" aria-hidden="true">›</li> <li>Sveld for Components</li></ol>  <header class="space-y-4" data-svelte-h="svelte-154f0ed"><h1 class="h1">Sveld for Components</h1>  <p>Skeleton implements <a class="anchor" href="https://github.com/carbon-design-system/sveld" target="_blank" rel="noreferrer">Sveld</a> to automatically document props, events, and slots from within each component. This is handled by appending <a class="anchor" href="https://tsdoc.org" target="_blank" rel="noreferrer">TSDoc</a> comments - a superset of JSDoc. This also enables <a class="anchor" href="https://code.visualstudio.com/docs/editor/intellisense" target="_blank" rel="noreferrer">IntelliSense</a> for end users.</p> <a class="btn variant-filled" href="https://github.com/carbon-design-system/sveld" target="_blank" rel="noreferrer">Sveld Documentation</a></header> <hr>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1yhpo66">Sveld for Props</h2> <a class="anchor" href="https://github.com/carbon-design-system/sveld#type" target="_blank" rel="noreferrer" data-svelte-h="svelte-c3wp3u">View Documentation</a> <p data-svelte-h="svelte-1bthk5q">To document component properties, add TSDoc comments using the <code class="code">/** ... */</code> format. In most use cases Sveld will
			automatically parse relevant information - including the property name, type, value, and your description.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "js",
          code: `
/** Set the preferred search method. */
export let mode = 'fizzbuzz';
			`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-1gc0usu">The <code class="code">CssClasses</code> class denotes properties that use Tailwind utility classes. Set this to aid IntelliSense features.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "js",
          code: `
import type { CssClasses } from '$lib';

/** Provide classes to set vertical item spacing. */
export let spacing: CssClasses = 'space-y-1';
			`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-2bz9bb">For advanced or custom types, you may need to specify this information. This can be accomplished using the <code class="code">@type</code> tag with block-style comments. Specify the type in curly brackets immediately following the tag.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "js",
          code: `
/**
 * Bind this to your form data, represents the "files" data from the input.
 * @type {FileList}
 */
export let files: FileList;
`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-l6wd4b">Ensure you document Context API <code class="code">getContext</code> values to provide Intellisense for child components. However, we intentionally
			exclude these values from the Props table.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "js",
          code: `
/** Provide classes to set the hover background color. */
export let hover = getContext('hover');
`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-qg7dg8">See the Accordion component for a reference using both parent and child components.</p></section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1qjt4l5">Sveld for Slots</h2> <a class="anchor" href="https://github.com/carbon-design-system/sveld#slot" target="_blank" rel="noreferrer" data-svelte-h="svelte-h7q3za">View Documentation</a> <p data-svelte-h="svelte-1yztm5g">Slot documentation is handle via TSDoc block comments at the top of your script tag (by convention). Note that Sveld does not
			currently support descriptions for the <code class="code">default</code> slot. Instead, we recommend you opt for a Usage tab example and
			instructions to illustrate the use of this slot.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "js",
          code: `
// Slots
/**
 * @slot lead - Provide a leading element, such as an icon.
 * @slot content - Provide the alert message text.
 */`
        },
        {},
        {}
      )} <aside class="alert variant-ghost-warning" data-svelte-h="svelte-19nvv94"><i class="fa-solid fa-lightbulb text-2xl"></i> <div class="alert-message">The leading <code class="code">// ...</code> comment is required for Sveld to parse the slot descriptions. This is not optional.</div></aside></section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1bn8a9n">Sveld for Events</h2> <a class="anchor" href="https://github.com/carbon-design-system/sveld#event" target="_blank" rel="noreferrer" data-svelte-h="svelte-7mkwak">View Documentation</a> <p data-svelte-h="svelte-p7h11y">Sveld will automatically document forwarded events. You should not attempt to document these! However, dispatched events may be
			documented similar to props - with a TSDocs comment applied directly above the <code class="code">dispatch()</code> method. Provide the
			event response in curly brackets, followed by the event name, a dash, and then the event description.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "js",
          code: `
/** @event {{ event: DragEvent }} dragover - When a file is dragged over. */
dispatch('dragover', event);`
        },
        {},
        {}
      )}</section> <hr>  <section class="space-y-4" data-svelte-h="svelte-11eabpq"><h2 class="h2">Implementing Sveld</h2>  <p>We cover how to implement the Sveld data in the <a href="/docs/contributing/documentation" class="anchor">Documentation Pages</a> section.</p></section>`;
    }
  })}`;
});
export {
  Page as default
};

import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { L as LayoutPage } from "../../../../../../chunks/LayoutPage.js";
import "../../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { T as Table } from "../../../../../../chunks/Table.js";
import { C as CodeBlock } from "../../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const tableBranchNaming = {
    head: ["Prefix", "Description"],
    body: [
      [
        '<code class="code">docs/*</code>',
        "Updates to the documentation pages or text copy."
      ],
      [
        '<code class="code">feat/*</code>',
        "New features, components, or far-reaching updates."
      ],
      ['<code class="code">chore/*</code>', "Simple and localized updates."],
      [
        '<code class="code">bugfix/*</code>',
        "Commits that address or fix issues."
      ]
    ]
  };
  return `${validate_component(LayoutPage, "LayoutPage").$$render($$result, {}, {}, {
    default: () => {
      return ` <ol class="breadcrumb" data-svelte-h="svelte-1xtybro"><li class="crumb"><a class="anchor" href="/docs/contributing">Contributing</a></li> <li class="crumb-separator" aria-hidden="true">›</li> <li>Style Guide</li></ol>  <header class="space-y-4" data-svelte-h="svelte-utx8go"><h1 class="h1">Style Guide</h1> <p>If you wish to contribute to Skeleton, please review our opinionated code style guide below.</p></header> <hr>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-q37bt">Feature Branches</h2> ${validate_component(Table, "Table").$$render($$result, { source: tableBranchNaming }, {}, {})} <p data-svelte-h="svelte-104ws9e">Each wildcard (*) should be replaced with short and semantic descriptions using kebab-case.</p> <pre class="pre" data-svelte-h="svelte-1n8gtpw">feat/my-new-component-name</pre></section>  <section class="space-y-4" data-svelte-h="svelte-6bz54a"><h2 class="h2">File Names</h2> <ul class="list-disc list-outside ml-4 space-y-1"><li>Feature directories should be singular and title case: <code class="code">../LightSwitch/..</code></li> <li>Components should be singular and title case: <code class="code">LightSwitch.svelte</code></li> <li>Svelte Actions should be singular, lowercase, and use Typescript: <code class="code">clipboard.ts</code></li> <li>Tailwind Element stylesheets should be plural and lowercase: <code class="code">buttons.css</code></li> <li>Documentation should be lowercase and use dashes: <code class="code">/routes/components/radio-groups/+page.svelte</code></li> <li>Tests should be suffixed with <code class="code">*.test.ts</code>, matching feature conventions:
				<code class="code">LightSwitch.test.ts</code></li></ul></section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-vfve3z">Conventions</h2> <p data-svelte-h="svelte-lrx5bl">Ensure relevant events bubble via <a class="anchor" href="https://svelte.dev/tutorial/dom-event-forwarding" target="_blank" rel="noreferrer">event forwarding</a>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<button on:click on:mouseover>Skeleton</button>`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-ds3ttl">Slot names should be short, semantic, and agnostic. Avoid names that are too specific, such as <code class="code">name=&quot;icon&quot;</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `{#if $$slots.lead}<slot name="lead" />{/if}`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-1qas04y">Use adaptive theme colors for component styling.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `
❌ <div class="bg-orange-500">Skeleton</div>
✅ <div class="bg-secondary-500">Skeleton</div> 
		`.trim()
        },
        {},
        {}
      )}  <p data-svelte-h="svelte-7lv7fm">If you need to include miscellaneous attributes that were not defined as properties, use Svelte&#39;s <code class="code">$$restProps</code>. Be careful
			though, this can overwrite the element&#39;s <code class="code">$$props.class</code> attribute. To avoid this, delete the <code class="code">class</code> key from <code class="code">$$restProps</code>. We recommend introducing a <code class="code">prunedRestProps</code> function as shown below.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "js",
          code: `
function prunedRestProps(): any {
	delete $$restProps.class;
	return $$restProps;
}`
        },
        {},
        {}
      )} ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<button class="... {$$props.class ?? ''}" {...prunedRestProps()}>Skeleton</button>`
        },
        {},
        {}
      )}</section> <hr>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-py8lzu">Component Props</h2> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `
export let flavor = 'Chocolate';
export let visible = false;
export let parameters: Record<string, string> = { foo: 'bar' };
		`
        },
        {},
        {}
      )}  <ul class="list-disc list-outside ml-4 space-y-1" data-svelte-h="svelte-8ohm89"><li>Each prop should be a single word, all lowercase, and semantic. Match Tailwind class names if possible.</li> <li>If you need multiple words, use camel-casing (ex: <code class="code">ringWidth</code>).</li> <li>Typescript will automatically handle primitive types that can be trivially inferred, such as <em>string</em>, <em>number</em>, or <em>boolean</em>.</li> <li>Make sure to set relevant default values when possible.</li> <li>When an existing prop is modified, consider documenting an example if relevant.</li></ul> <h3 class="h3" data-svelte-h="svelte-9f4ebc">Tailwind Class Props</h3> <p data-svelte-h="svelte-371wb9">For props that pass one or more CSS utility classes, make sure to import and append the <code class="code">CSSClasses</code> type.
			This resolves to a type of <code class="code">string</code> and allows our build process to identify props that support Tailwind Intellisense.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "typescript",
          code: `import type { CssClasses } from '../..';`
        },
        {},
        {}
      )} ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "typescript",
          code: `
export let background: CssClasses = 'bg-primary-500'; // background color
export let color: CssClasses = 'text-primary-500'; // text color
export let rounded: CssClasses = 'rounded-xl'; // border radius
		`
        },
        {},
        {}
      )} <ul class="list-disc list-outside ml-4 space-y-1" data-svelte-h="svelte-1monjzn"><li>Color props should follow standard CSS style conventions (ex: <code class="code">color</code> for text color).</li> <li>Never pass class props as arrays or objects, strings are always preferred (ex: <code class="code">border border-primary-500</code>).</li> <li>Always pass the <u>entire</u> Tailwind class name. Tailwind does not support
				<a class="anchor" href="https://tailwindcss.com/docs/content-configuration#dynamic-class-names" target="_blank" rel="noreferrer">dynamic class names</a>.</li></ul></section> <hr>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-14y31u6">CSS Styling Conventions</h2> <p data-svelte-h="svelte-116drqz">Skeleton utilizes an opinionated set of conventions for defining structural and component props for CSS utility classes within
			components. Please review existing components for examples of this in practice.</p>  <h3 class="h3" data-svelte-h="svelte-1o93b61">Base Classes</h3> <p data-svelte-h="svelte-1n4bt8m">The default classses for a component template element. Note the &quot;c&quot; is short for <strong>classes</strong>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `
let cBase = 'bg-surface-500 p-4 rounded'; // parent element styles
let cLabel = 'text-base'; // child element label styles
		`
        },
        {},
        {}
      )}  <h3 class="h3" data-svelte-h="svelte-9japl9">Dynamic Classes</h3> <p data-svelte-h="svelte-16440x9">To dynamically modify classes based on a variable or prop, use a reactive statement as follows.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `
// Prop for outlined state
export let outlined = false;

// Create a reactive property that uses a tertiary statement
$: classesOutlined = outlined ? 'border-2 border-primary-500' : 'border-none';
		`
        },
        {},
        {}
      )}  <h3 class="h3" data-svelte-h="svelte-vn3otv">Reactive Classes</h3> <p data-svelte-h="svelte-1oz0t2y">We use the following pattern to combine base and dynamic classes. Note the parent element classes includes <code class="code">$$props.classes</code>
			to enable arbitrary classes passed by the user via <code class="code">class=&quot;my-custom-class&quot;</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `
$: classesTab = \`\${cBase} \${classesOutlined} \${{$$props.classes ?? ''}}\`; // parent element
$: classesLabel = \`\${cBaseLabel}\`; // child element
		`
        },
        {},
        {}
      )}  <h3 class="h3" data-svelte-h="svelte-m6od3e">Applying Classes</h3> <ul class="list-disc list-outside ml-4 space-y-1" data-svelte-h="svelte-11nlfot"><li>The first class should be an &quot;id&quot; class, which semantically describes the element for global overrides (ex: <code class="code">tab</code>)</li> <li>Then followed immediately by the reactive class set (ex: <code class="code">classesTab</code>).</li></ul> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `
<div class="tab {classesTab}">
	<span class="tab-label {classesLabel}">Label</span>
</div>
		`
        },
        {},
        {}
      )}</section> <hr>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1if6x7m">Dynamic Transitions</h2> <p data-svelte-h="svelte-1rpjntl">Skeleton has a convention for implementing dynamic transitions within components. Please follow the guidelines below to ensure you are
			following our standard for this process.</p> <blockquote class="blockquote" data-svelte-h="svelte-d73hcb">TIP: You may reference existing components to view this in practice: <a class="anchor" href="https://github.com/skeletonlabs/skeleton/blob/master/packages/skeleton/src/lib/components/Accordion/Accordion.svelte" target="_blank">Accordion</a></blockquote>  <h3 class="h3" data-svelte-h="svelte-lrnyw">Implementation</h3> <p data-svelte-h="svelte-1ny05pk">Define transition types in a <code class="code">context=&quot;module&quot;</code> script tag so you can use it as generic for the standard script
			tag attributes.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `
${"<"}script context="module"${">"}
	import { slide } from 'svelte/transition';
	import {
		type Transition,
		type TransitionParams,
		type CssClasses, prefersReducedMotionStore
	} from '../../index.js';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type SlideTransition = typeof slide; // switch with your transition
	type TransitionIn = Transition;
	type TransitionOut = Transition;
${"<"}${"/script"}>
		`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-p94foq">Supply the generics in the standard <code class="code">script</code> tag attributes.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `
${"<"}script
	lang="ts"
	generics="TransitionIn extends Transition = SlideTransition, TransitionOut extends Transition = SlideTransition"
${">"}
// ...
${"<"}${"/script"}>
	`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-5isx86">Define the following properties:</p> <ul class="list-disc list-outside ml-4 space-y-1" data-svelte-h="svelte-16072pp"><li><code class="code">transition</code> - default to <code class="code">!$prefersReducedMotionStore</code> to adhere to the
				<a class="anchor" href="/docs/transitions#reduced-motion" target="_blank">Reduced motion rules</a>.</li> <li><code class="code">transitionIn</code> - the transition on entry.</li> <li><code class="code">transitionInParams</code> - the parameters for the entry transition.</li> <li><code class="code">transitionOut</code> - the transition on exit.</li> <li><code class="code">transitionOutParams</code> - the parameters for the entry transition.</li></ul> <h3 class="h3" data-svelte-h="svelte-1i6m2tn">Implementing Transitions</h3> <p data-svelte-h="svelte-7fnf3">See the dedicated <a class="anchor" href="/docs/transitions">Transitions</a> page for examples of how to implement custom transitions for
			a component.</p>  <h3 class="h3" data-svelte-h="svelte-6bkspu">Documentation</h3> <blockquote class="blockquote" data-svelte-h="svelte-1f9v52q">TIP: Review existing component pages to view how this is presented in practice: <a class="anchor" href="/components/accordions" target="_blank">Accordions</a></blockquote> <p data-svelte-h="svelte-uj9kz5">Add the <code class="code">transitionX</code> props to <code class="code">DocsShellSettings</code> to indicate that dynamic transitions
			are available.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `
const settings: DocsShellSettings = {
	// ...
	transitionIn: 'slide',
	transitionOut: 'slide'
};
		`
        },
        {},
        {}
      )}</section> <hr>  <section class="space-y-4" data-svelte-h="svelte-bm3zfn"><h2 class="h2">Pitfalls</h2> <p>Below are a few pitfalls we&#39;ve encountered when creating Skeleton. Do your best to avoid these whenever possible.</p>  <ul class="list-disc list-outside ml-4 space-y-1"><li>Never construct utility class names, <a class="anchor" href="https://tailwindcss.com/docs/content-configuration#dynamic-class-names" target="_blank" rel="noreferrer">Tailwind does not support this feature</a>.</li> <li>Avoid <code class="code">style</code> blocks and <code class="code">@apply</code> in component files. This will bloat the stylesheet bundle size.</li> <li>Do not mix script-defined and inline Tailwind classes. Doing so can have a negative impact on the readability of the code.</li> <li>Avoid switch-case statements to create shorthand property values (ex: sm, md, lg). This restricts customization.</li> <li>Keep Skeleton icon library agnostic. Embed SVGs or unicode instead, which can be passed via a slot.</li></ul></section>`;
    }
  })}`;
});
export {
  Page as default
};

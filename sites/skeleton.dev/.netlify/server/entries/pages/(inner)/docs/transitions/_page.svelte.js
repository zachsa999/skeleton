import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { L as LayoutPage } from "../../../../../chunks/LayoutPage.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LayoutPage, "LayoutPage").$$render($$result, {}, {}, {
    default: () => {
      return `<header class="space-y-4" data-svelte-h="svelte-1uioh6n"><h1 class="h1">Transitions</h1>  <p>Skeleton provides a simple interface for modifying Svelte component transitions. This supports <a class="anchor" href="https://svelte.dev/docs#run-time-svelte-transition" target="_blank" rel="noreferrer">Svelte-provided transitions</a>, such as: <code class="code">fade</code>, <code class="code">blur</code>, <code class="code">fly</code>, <code class="code">slide</code>, and <code class="code">scale</code>. As well as custom <a class="anchor" href="https://svelte.dev/tutorial/custom-css-transitions" target="_blank" rel="noreferrer">CSS</a> and <a class="anchor" href="https://svelte.dev/tutorial/custom-js-transitions" target="_blank" rel="noreferrer">Javascript</a> transitions.</p></header> <hr> <section class="space-y-4" data-svelte-h="svelte-6e2fnw"><div class="card variant-glass p-4 text-center space-y-4"><span class="chip variant-soft"><i class="fa-solid fa-right-left text-[16px]"></i> <span>Transitions</span></span> <p class="text-sm">Look for this indicator on each component page. If present, custom transitions are supported.</p></div></section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1jwlcic">Properties</h2> <p data-svelte-h="svelte-a2jwrf">Provide the transition and transition parameters as follows.</p> <h3 class="h3" data-svelte-h="svelte-2pkfmm">Transition In</h3> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<ExampleComponent transitionIn={fade} transitionInParams={{ duration: 200 }} />`
        },
        {},
        {}
      )} <h3 class="h3" data-svelte-h="svelte-apsbmb">Transition Out</h3> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<ExampleComponent transitionOut={fade} transitionOutParams={{ duration: 200 }} />`
        },
        {},
        {}
      )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-10ujrib">Parameters</h2> <p data-svelte-h="svelte-vshhlf">You can modify parameters for both the default <em>in</em> and <em>out</em> transitions.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<ExampleComponent transitionInParams={{ duration: 400 }} />`
        },
        {},
        {}
      )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-17wqnhj">Disable Transitions</h2> <p data-svelte-h="svelte-v6owii">To disable all transitions for a single component, set <code class="code">transitions</code> to <em>false</em>. This will affect both
			the
			<em>in</em>
			and <em>out</em> transitions.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `
            <ExampleComponent transitions={false}/>
            `
        },
        {},
        {}
      )}</section> <section class="space-y-4" data-svelte-h="svelte-vcvlq5"><h2 class="h2">Non-Supported Transitions</h2> <p>Note that Svelte provides special <code class="code">crossfade</code> and <code class="code">draw</code> transitions. However these
			work and operate in a different manner than standard transition such as <em>fade</em> and <em>fly</em>. These are not supported within
			the dynamic transition system at this time.</p></section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1pkkdmv">Reduced Motion</h2> <p data-svelte-h="svelte-14uhbsb">To ensure a better experience for users who are sensitive to motion or have vestibular disorders, Skeleton&#39;s default
			behavior is to disable all transitions when users enable <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion" target="_blank" rel="noreferrer">prefers-reduced-motion</a> in their browser settings.</p> <h3 class="h3" data-svelte-h="svelte-1cwosu4">Force Enable</h3> <p>For components with subtle transitions, you may choose to override this behavior by applying a property of <code class="code">${escape(`transitions={true}`)}</code> to the component. We encourage you to use this setting with caution though.</p> <h3 class="h3" data-svelte-h="svelte-150i92p">Store</h3> <p data-svelte-h="svelte-5b38y4">You may utilize <code class="code">prefersReducedMotionStore</code> to access the user&#39;s preferred motion setting.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `
import { prefersReducedMotionStore } from '@skeletonlabs/skeleton';

const userMotionPreference = $prefersReducedMotionStore;
			`
        },
        {},
        {}
      )}</section>`;
    }
  })}`;
});
export {
  Page as default
};

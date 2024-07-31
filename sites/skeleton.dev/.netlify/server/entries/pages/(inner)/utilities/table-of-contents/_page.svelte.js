import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
import { T as TableOfContents } from "../../../../../chunks/LayoutPage.js";
const sveldTableOfContents = { "props": [{ "name": "inactive", "kind": "let", "description": "Provide classes to set the inactive anchor styles.", "type": "string", "value": "'opacity-60 hover:opacity-100'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "active", "kind": "let", "description": "Provide classes to set the active anchor styles.", "type": "string", "value": "'text-primary-500'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "activeId", "kind": "let", "description": "Set the active permalink ID on load.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "indentStyles", "kind": "let", "description": "Set indentation per each queried element.", "type": "Record(string, string)", "value": "{     h2: '',     h3: 'ml-4',     h4: 'ml-8',     h5: 'ml-12',     h6: 'ml-16' }", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionLead", "kind": "let", "description": "Provide arbitrary classes to the lead regions, used for titles.", "type": "string", "value": "'font-bold'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionList", "kind": "let", "description": "Provide arbitrary classes to style the list element.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionListItem", "kind": "let", "description": "Provide arbitrary classes to style the list item elements.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionAnchor", "kind": "let", "description": "Provide arbitrary classes to style the anchor elements.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "__default__", "default": true, "fallback": "Table of Contents", "slot_props": "{}" }], "events": [], "typedefs": [] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Component,
    name: "Table of Contents",
    description: "Allows you to quickly navigate the hierarchy of headings for the current page.",
    imports: ["TableOfContents", "tocCrawler"],
    source: "packages/skeleton/src/lib/utilities/TableOfContents",
    components: [{ sveld: sveldTableOfContents }]
  };
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return `  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1k221fc">How It Works</h2>  <h3 class="h3" data-svelte-h="svelte-1n2kmsg">Heading IDs</h3> <p data-svelte-h="svelte-8nfkpr">Each page heading requires a unique ID that acts as the scroll target for inner-page navigation.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<h2 class="h2" id="how-it-works">How it Works</h2>`
        },
        {},
        {}
      )}  <h3 class="h3" data-svelte-h="svelte-3fscem">Anchor Links</h3> <p data-svelte-h="svelte-1c5lfu">Each link within the Table of Contents then points to the matching target ID as shown below. Note the use of the <code class="code">#</code>. When clicked, the browser will automatically scroll so that the targeted element is at the top of the visible screen.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<a href="#how-it-works">How It Works</a>`
        },
        {},
        {}
      )}</section> <hr>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1suhpo4">Custom Title</h2> <p data-svelte-h="svelte-1u16hpp">Customize the table of contents title by editing the default Slot content.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `
<TableOfContents>
	<h1>title here</h1>
</TableOfContents>`
        },
        {},
        {}
      )}</section> <hr>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1bu9w60">Settings</h2>  <h3 class="h3" data-svelte-h="svelte-1cv6kuh">Automatic IDs</h3> <p data-svelte-h="svelte-vqct8f">Set <code class="code">mode: generate</code> to enable <code class="code">tocCrawler</code> to automatically generate and set unique
				IDs for all headings that are descendants of the element the action is applied to.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<div use:tocCrawler={{ mode: 'generate' }}>`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-3krvrm">See the example below. Note this <u>will not</u> overwrite IDs you have set manually.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `
<!-- Before: -->
<h2 class="h2">Title One</h2>
<h2 class="h2" id="my-custom-id">Title Two</h2>

<!-- After: -->
<h2 class="h2" id="title-one">Title One</h2>
<h2 class="h2" id="my-custom-id">Title Two</h2>
			`
        },
        {},
        {}
      )}  <h3 class="h3" data-svelte-h="svelte-b0p0kq">Prefixes and Suffixes</h3>  <p data-svelte-h="svelte-1wxwa6r">We recommend setting a custom heading (per the instruction above) if a conflict is found within your page. However, you may also hardcode a <code class="code">prefix</code> or <code class="code">suffix</code> to all generated IDs as follows:</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `
<div use:tocCrawler={{ mode: 'generate', prefix: 'foo', suffix: 'bar' }}>

<!-- Ex: foo-title-one-bar -->
<!-- Ex: foo-title-two-bar -->
			`
        },
        {},
        {}
      )}  <h3 class="h3" data-svelte-h="svelte-q3r3bt">Ignore Headings</h3> <p data-svelte-h="svelte-yjrbu6">To ignore a heading in the target region, append a <code class="code">data-toc-ignore</code> attribute. The crawler will skip this.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<h2 class="h2" data-toc-ignore>Ignore Me</h2>`
        },
        {},
        {}
      )}  <h3 class="h3" data-svelte-h="svelte-m6y1fs">Invisible Headings</h3>  <p data-svelte-h="svelte-1i8vu2o">Use the Tailwind-provided <a class="anchor" href="https://tailwindcss.com/docs/screen-readers#screen-reader-only-elements" target="_blank" rel="noreferrer">Screen Reader</a> <code class="code">.sr-only</code> class to append an invisible heading.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<h2 class="sr-only">Include Me!</h2>`
        },
        {},
        {}
      )}  <h3 class="h3" data-svelte-h="svelte-1pael4s">Keyed Updates</h3> <p data-svelte-h="svelte-10y7gbm">In some situations you may want to force the crawler action to update on demand. Use the <code class="code">key</code> parameter and
				pass a value that will be modified, which operates similar to Svelte&#39;s
				<a class="anchor" href="https://svelte.dev/tutorial/key-blocks" target="_blank">key blocks</a>. This can be useful for scanning for
				new page headers for tabbed content.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `
let tabIndex = 0;

// Modifying this value triggers the crawler to run again:
// tabindex = 1;
			`
        },
        {},
        {}
      )} ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<div use:tocCrawler={{ key: tabIndex }}>
				`
        },
        {},
        {}
      )}  <h3 class="h3" data-svelte-h="svelte-18sgbb2">Active on Scroll</h3> <p data-svelte-h="svelte-1gxwjzi">The <code class="code">tocCrawler</code> action can automatically select the top visible heading when you supply a
				<code class="code">scrollTarget</code> element. That is the element that handles scrolling for the page. By default, this is set to
				target the <code class="code">body</code> element. When using the Skeleton App Shell, designate
				<code class="code">scrollTarget: &#39;#page&#39;</code> element as shown below. To disable this feature, set
				<code class="code">scrollTarget: &#39;&#39;</code>.</p> <blockquote class="blockquote" data-svelte-h="svelte-sw2y9x">NOTE: depending on your page layout, the page may not scroll low enough to activate the final links in the list.</blockquote> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<div use:tocCrawler={{ scrollTarget: '#page' }}>`
        },
        {},
        {}
      )}</section> <hr>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-z159yj">Dynamic Headings</h2> <p data-svelte-h="svelte-3u1qyx">Generating links constructed using dynamic heading text may result in unexpected behavior.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<h2 class="h2">Greetings {name}</h2>`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-shc0z9">Svelte will compile and treat this as two seperate DOM elements, only the first of which is included in the generated link.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `
<!-- DOM -->
<h2 class="h2" id="greetings">
	"Greetings "
	"skeleton"
</h2>`
        },
        {},
        {}
      )} ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<!-- Generated Link -->
<a href="#greetings">Greetings</a>`
        },
        {},
        {}
      )} <h3 class="h3" data-svelte-h="svelte-mfjcrz">Solution</h3> <p data-svelte-h="svelte-1r62q44">Use string interpolation to resolve this issue.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<h2 class="h2">{\`Greetings \${name}\`}</h2>`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-1e7pqtw">The component will be compiled as follows.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<!-- DOM -->
<h2 class="h2" id="greetings-skeleton">"Greetings Skeleton"</h2>`
        },
        {},
        {}
      )} ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<!-- Generated Link -->
<a href="#greetings-skeleton">Greetings Skeleton</a>`
        },
        {},
        {}
      )}</section> <hr>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-w10iph">Styling</h2>  <h3 class="h3" data-svelte-h="svelte-ch6fv9">Smooth Scrolling</h3>  <p data-svelte-h="svelte-hk8jjx">Use Tailwind&#39;s <a class="anchor" href="https://tailwindcss.com/docs/scroll-behavior" target="_blank">scroll behavior</a> styles to enable smooth scrolling on the scrollable element.</p> <blockquote class="blockquote" data-svelte-h="svelte-1q65eoy">Make considerations for the <a class="anchor" href="/docs/transitions#reduced-motion">Reduced Motion</a> settings for proper accessibility.</blockquote> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `
<!-- If using the App Shell: -->
<AppShell regionPage="scroll-smooth"></AppShell>

<!-- If NOT using the App Shell: -->
<body class="scroll-smooth"></body>
			`
        },
        {},
        {}
      )}  <h3 class="h3" data-svelte-h="svelte-14eewyl">Scroll Margin</h3>  <p data-svelte-h="svelte-baj45j">Use Tailwind&#39;s <a class="anchor" href="https://tailwindcss.com/docs/scroll-margin" target="_blank">scroll margin</a> styles if you need to offset for sticky headers</p> <blockquote class="blockquote" data-svelte-h="svelte-a273zs">NOTE: not currently supported for Skeleton&#39;s App Shell.</blockquote> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<body class="scroll-mt-[100px]"></body>`
        },
        {},
        {}
      )}  <h3 class="h3" data-svelte-h="svelte-7m5liw">Sticky Positioning</h3>  <p data-svelte-h="svelte-1lly8g2">Use Tailwind&#39;s <a class="anchor" href="https://tailwindcss.com/docs/position#sticky-positioning-elements" target="_blank" rel="noreferrer">sticky positioning</a> styles to keep the Table of Contents component visible while scrolling.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<TableOfContents class="sticky top-10" />`
        },
        {},
        {}
      )}</section> `;
    },
    sandbox: () => {
      return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
        source: () => {
          return `<p data-svelte-h="svelte-1ee2vlo">Set the <code class="code">tocCrawler</code> action on the element with headings to catalog. Supports H2-H6 by default.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<div use:tocCrawler={{ mode: 'generate' }}>
	<h2>Heading 2</h2>
	<p>...</p>
	<h3>Heading 3</h3>
	<p>...</p>
</div>
				`
            },
            {},
            {}
          )} <p data-svelte-h="svelte-cp60gc">Implement the Table of Contents component, which displays the generated list of links.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<TableOfContents />`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="card p-4 text-token">${validate_component(TableOfContents, "TableOfContents").$$render($$result, {}, {}, {})}</div>`;
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

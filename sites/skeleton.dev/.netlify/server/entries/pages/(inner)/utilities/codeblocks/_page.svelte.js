import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const sveldCodeBlock = { "props": [{ "name": "language", "kind": "let", "description": "Sets a language alias for Highlight.js syntax highlighting.", "type": "string", "value": "'plaintext'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "code", "kind": "let", "description": "Provide the code snippet to render. Be mindful to escape as needed!", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "lineNumbers", "kind": "let", "description": "Specify if line numbers should be added to the code block", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "background", "kind": "let", "description": "Provide classes to set the background color.", "type": "string", "value": "'bg-neutral-900/90'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "blur", "kind": "let", "description": "Provided classes to set the backdrop blur.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "text", "kind": "let", "description": "Provide classes to set the text size.", "type": "string", "value": "'text-sm'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "color", "kind": "let", "description": "Provide classes to set the text color.", "type": "string", "value": "'text-white'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "rounded", "kind": "let", "description": "Provide classes to set the border radius.", "type": "string", "value": "'rounded-container-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "shadow", "kind": "let", "description": "Provide classes to set the box shadow.", "type": "string", "value": "'shadow'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "button", "kind": "let", "description": "Provide classes to set the button styles.", "type": "string", "value": "'btn btn-sm variant-soft !text-white'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonLabel", "kind": "let", "description": "Provide the button label text.", "type": "string", "value": "'Copy'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonCopied", "kind": "let", "description": "Provide the button label text when copied.", "type": "string", "value": "'👍'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [], "events": [{ "type": "dispatched", "name": "copy", "detail": "null", "description": "Fires when the Copy button is pressed." }], "typedefs": [] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Utility,
    name: "Code Blocks",
    description: 'Displays pre-formatted source code, with optional support for <a href="https://highlightjs.org/" target="_blank" rel="noreferrer">Highlight.js</a> syntax highlighting.',
    imports: ["CodeBlock"],
    stylesheets: ["highlight-js"],
    source: "packages/skeleton/src/lib/utilities/CodeBlock",
    components: [{ sveld: sveldCodeBlock }],
    dependencies: [
      {
        label: "Highlight.js",
        url: "https://highlightjs.org/"
      }
    ]
  };
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return ` <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-14myhmr">Install Highlight.js</h2> <p data-svelte-h="svelte-1lr10zn"><a class="anchor" href="https://highlightjs.org/" target="_blank" rel="noreferrer">Highlight.js</a> is a required dependency to enable
				syntax highlighting.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "shell",
          code: `npm install highlight.js`
        },
        {},
        {}
      )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1hc5pop">Configure Your Project</h2> <p data-svelte-h="svelte-7nkfwf">To reduce your bundle size, we&#39;ll only import and register select languages for (ex: HTML, CSS, JS, TS). Please refer to the
				<a href="https://highlightjs.org/#usage" class="anchor" target="_blank">Highlight.js usage guide</a> for more instruction.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `
import hljs from 'highlight.js/lib/core';

// Import each language module you require
import xml from 'highlight.js/lib/languages/xml'; // for HTML
import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import shell from 'highlight.js/lib/languages/shell';

// Register each imported language module
hljs.registerLanguage('xml', xml); // for HTML
hljs.registerLanguage('css', css);
hljs.registerLanguage('json', json);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('shell', shell);
			`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-liyt4m">Import any <a class="anchor" href="https://github.com/highlightjs/highlight.js/tree/main/src/styles" target="_blank" rel="noreferrer">Highlight.js CSS theme</a> of your choice.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `import 'highlight.js/styles/github-dark.css';`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-vqxs0m">Finally, import the CodeBlock&#39;s writable store and pass a referenced to Highlight.js.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `import { storeHighlightJs } from '@skeletonlabs/skeleton';

storeHighlightJs.set(hljs);`
        },
        {},
        {}
      )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-zus1ev">Line Numbers</h2>  <p data-svelte-h="svelte-81m1x4">Adding the <code class="code">lineNumbers</code> property will add line numbers to the displayed code. Supports up to 1000 lines of code.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          lineNumbers: true,
          language: "html",
          code: `<p>
	The quick brown fox jumped over the lazy dog.
</p>`
        },
        {},
        {}
      )}</section> <section class="space-y-4" data-svelte-h="svelte-xd20za"><h2 class="h2">Language</h2>  <p>Syntax highlighting will appear when a valid <a class="anchor" href="https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md" target="_blank" rel="noreferrer">language alias</a> is provided to the Code Block&#39;s <code class="code">language</code> property. For common web languages we recommend the shorthand values: <code class="code">html</code>, <code class="code">css</code>, <code class="code">js</code>, <code class="code">ts</code>, and <code class="code">shell</code>.</p></section> <section class="space-y-4" data-svelte-h="svelte-9pxo1c"><h2 class="h2">Accessibility</h2> <p>Uses <code class="code">pre-wrap</code> by default to support keyboard-only navigation. Please be mindful of color contrast ratios when
				customizing the design of your Code Block components.</p></section> `;
    },
    sandbox: () => {
      return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<CodeBlock language="html" code={\`<div>This is meta</div>\`}></CodeBlock>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<CodeBlock language="css" code={\`.skeleton { color: #bada55; }\`}></CodeBlock>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<CodeBlock language="ts" code={\`const skeleton: string = 'awesome';\`}></CodeBlock>`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="w-full space-y-4">${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div>This is meta</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "css",
              code: `.skeleton { color: #bada55; }`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "ts",
              code: `const skeleton: string = 'awesome';`
            },
            {},
            {}
          )}</div>`;
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

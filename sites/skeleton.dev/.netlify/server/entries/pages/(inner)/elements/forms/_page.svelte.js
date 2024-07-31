import { c as create_ssr_component, v as validate_component, h as each, e as escape, f as spread, g as escape_object, d as add_attribute } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const fieldSettings = {
  inputs: [
    { title: "Input (text)", type: "text", placeholder: "input text" },
    { title: "Input (readonly)", type: "text", placeholder: "input readonly", readonly: true, tabindex: -1 },
    { title: "Input (disabled)", type: "text", placeholder: "input disabled", disabled: true },
    { title: "Input (email)", type: "email", placeholder: "john@example.com", autocomplete: "email" },
    { title: "Input (email, multiple)", type: "email", multiple: true, placeholder: "john@example.com, susy@example.com" },
    { title: "Input (password)", type: "password", placeholder: "password" },
    { title: "Input (search)", type: "search", placeholder: "Search..." },
    { title: "Input (date)", type: "date" },
    { title: "Input (datetime-local)", type: "datetime-local" },
    { title: "Input (month)", type: "month" },
    { title: "Input (number)", type: "number" },
    { title: "Input (time)", type: "time" },
    { title: "Input (week)", type: "week" },
    { title: "Input (tel)", type: "tel", multiple: true, placeholder: "+61 123 456 789" },
    { title: "Input (url)", type: "url", multiple: true, placeholder: "example.com" }
  ]
};
function mapInputAttributes(obj) {
  return Object.entries(obj).map(([key, value]) => `${key}="${value}"`).join(" ");
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Element,
    name: "Forms",
    description: "Pair with the Tailwind Forms plugin to style various input fields.",
    stylesheetIncludes: ["all", "forms"],
    source: "packages/plugin/src/styles/base/forms.css",
    dependencies: [
      {
        label: "Tailwind Forms Plugin",
        url: "https://github.com/tailwindlabs/tailwindcss-forms"
      }
    ],
    classes: [
      [
        '<code class="code">.legend</code>',
        "",
        "Provides theme styles to legend elements."
      ],
      [
        '<code class="code">.label</code>',
        "",
        "Provides theme styles to label elements."
      ],
      [
        '<code class="code">.input</code>',
        "",
        "Provides theme styles to input elements."
      ],
      [
        '<code class="code">.textarea</code>',
        "",
        "Provides theme styles to textarea elements."
      ],
      [
        '<code class="code">.select</code>',
        "",
        "Provides theme styles to select elements."
      ],
      [
        '<code class="code">.checkbox</code>',
        "",
        "Provides theme styles to checkbox elements."
      ],
      [
        '<code class="code">.radio</code>',
        "",
        "Provides theme styles to radio elements."
      ],
      [
        '<code class="code">.input-group</code>',
        "",
        "Creates a group of related inputs and information."
      ],
      [
        '<code class="code">.input-group-divider</code>',
        "",
        "Adds vertical lines between group segments."
      ],
      [
        '<code class="code">.input-group-shim</code>',
        "",
        "Provides a shaded background segment."
      ],
      [
        '<code class="code">.input-[variant]</code>',
        "success | warning | error",
        "Color highlights for input for validation states."
      ]
    ]
  };
  let currentInput = fieldSettings.inputs[0];
  let colorValue = "#bada55";
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return `  <p data-svelte-h="svelte-17fwi3y">Unlike other UI libraries, Skeleton relies heavily on native HTML form fields. This provides the best user experience and
			optimal accessibility. Note that form field styling is opt-in, which means a class must be applied to each element.</p>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1nxg5np">Install the Forms Plugin</h2>  <p data-svelte-h="svelte-q9cmpa">The Tailwind Forms plugin normalizes form field styles, making them easier to customize and providing some rudimentary styles. See <a class="anchor" href="https://www.youtube.com/watch?v=pONeWAzDsQg" target="_blank" rel="noreferrer">Tailwind&#39;s video tutorial</a> for more information.</p>  <div class="flex-auto space-y-4">${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "shell",
          code: `npm install -D @tailwindcss/forms`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-iykgxc">Prepend the <a class="anchor" href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank" rel="noreferrer">Tailwind Forms plugin</a>
					to your
					<code class="code">tailwind.config.[ts|js],</code></p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "js",
          code: `
import forms from '@tailwindcss/forms';

export default {
	//...
	plugins: [
		forms,
		//...
	],
};
				`
        },
        {},
        {}
      )}</div></section> <hr>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1iygji">Labels</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<label class="label">
	<span>Label</span>
	<!-- (input here) -->
</label>
					`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="w-full" data-svelte-h="svelte-1id5mey"><label class="label"><span>Label</span> <input class="input" type="text" placeholder="Input"></label></div>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-l253z">Input</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<input class="input" ${mapInputAttributes(currentInput)} />`
            },
            {},
            {}
          )} `;
        },
        footer: () => {
          return `<div class="flex justify-center"><select class="select w-auto">${each(fieldSettings.inputs, (fs) => {
            return `<option${add_attribute("value", fs, 0)}>${escape(fs.title)}</option>`;
          })}</select></div> `;
        },
        preview: () => {
          return `<div class="w-full space-y-4"><label class="label"><span>${escape(currentInput.title)}</span> <input${spread([{ class: "input" }, escape_object(currentInput)], {})}></label></div>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-n0t7lo">Files</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<input class="input" type="file" />`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<input class="input" type="file" multiple />`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="w-full space-y-4" data-svelte-h="svelte-47qsag"><label class="label"><span>Input (file)</span> <input class="input" type="file"></label> <label class="label"><span>Input (file, multiple)</span> <input class="input" type="file" multiple></label></div>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-xnjjk1">Textarea</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<textarea class="textarea" rows="4" placeholder="Enter some long form content." />`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="w-full space-y-4" data-svelte-h="svelte-dg5h84"><label class="label"><span>Textarea</span> <textarea class="textarea" rows="4" placeholder="Enter some long form content."></textarea></label></div>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1t400cf">Select</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<select class="select">
	<option value="1">Option 1</option>
	<option value="2">Option 2</option>
	<option value="3">Option 3</option>
	<option value="4">Option 4</option>
	<option value="5">Option 5</option>
</select>
					`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<select class="select" size="4" value="1">
	<option value="1">Option 1</option>
	<option value="2">Option 2</option>
	<option value="3">Option 3</option>
	<option value="4">Option 4</option>
	<option value="5">Option 5</option>
</select>
					`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<select class="select" multiple value={['1', '2']}>
	<option value="1">Option 1</option>
	<option value="2">Option 2</option>
	<option value="3">Option 3</option>
	<option value="4">Option 4</option>
	<option value="5">Option 5</option>
</select>
					`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="w-full space-y-4"><label class="label"><span data-svelte-h="svelte-buwd0q">Select</span> <select class="select"><option value="1" data-svelte-h="svelte-1j3lum5">Option 1</option><option value="2" data-svelte-h="svelte-3fdzyp">Option 2</option><option value="3" data-svelte-h="svelte-10kf7ml">Option 3</option><option value="4" data-svelte-h="svelte-1s2g3e1">Option 4</option><option value="5" data-svelte-h="svelte-1pd8dgt">Option 5</option></select></label> <label class="label"><span data-svelte-h="svelte-18wj9p6">Select (size)</span> <select class="select" size="4" value="1"><option value="1" data-svelte-h="svelte-1j3lum5">Option 1</option><option value="2" data-svelte-h="svelte-3fdzyp">Option 2</option><option value="3" data-svelte-h="svelte-10kf7ml">Option 3</option><option value="4" data-svelte-h="svelte-1s2g3e1">Option 4</option><option value="5" data-svelte-h="svelte-1pd8dgt">Option 5</option></select></label> <label class="label"><span data-svelte-h="svelte-1i6h88v">Select (multiple)</span> <select class="select" multiple${add_attribute("value", ["1", "2"], 0)}><option value="1" data-svelte-h="svelte-1j3lum5">Option 1</option><option value="2" data-svelte-h="svelte-3fdzyp">Option 2</option><option value="3" data-svelte-h="svelte-10kf7ml">Option 3</option><option value="4" data-svelte-h="svelte-1s2g3e1">Option 4</option><option value="5" data-svelte-h="svelte-1pd8dgt">Option 5</option></select></label></div>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1iximfo">Checkboxes</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<div class="space-y-2">
	<label class="flex items-center space-x-2">
		<input class="checkbox" type="checkbox" checked />
		<p>Option 1</p>
	</label>
	<label class="flex items-center space-x-2">
		<input class="checkbox" type="checkbox" />
		<p>Option 2</p>
	</label>
	<label class="flex items-center space-x-2">
		<input class="checkbox" type="checkbox" />
		<p>Option 3</p>
	</label>
</div>
					`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="space-y-2" data-svelte-h="svelte-174421e"><label class="flex items-center space-x-2"><input class="checkbox" type="checkbox" checked> <p>Option 1</p></label> <label class="flex items-center space-x-2"><input class="checkbox" type="checkbox"> <p>Option 2</p></label> <label class="flex items-center space-x-2"><input class="checkbox" type="checkbox"> <p>Option 3</p></label></div>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1s3b57w">Radio Groups</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<div class="space-y-2">
	<label class="flex items-center space-x-2">
		<input class="radio" type="radio" checked name="radio-direct" value="1" />
		<p>Option 1</p>
	</label>
	<label class="flex items-center space-x-2">
		<input class="radio" type="radio" name="radio-direct" value="2" />
		<p>Option 2</p>
	</label>
	<label class="flex items-center space-x-2">
		<input class="radio" type="radio" name="radio-direct" value="3" />
		<p>Option 3</p>
	</label>
</div>
					`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="space-y-2" data-svelte-h="svelte-yhq25l"><label class="flex items-center space-x-2"><input class="radio" type="radio" checked name="radio-direct" value="1"> <p>Option 1</p></label> <label class="flex items-center space-x-2"><input class="radio" type="radio" name="radio-direct" value="2"> <p>Option 2</p></label> <label class="flex items-center space-x-2"><input class="radio" type="radio" name="radio-direct" value="3"> <p>Option 3</p></label></div>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-mr1wey">Range</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<input type="range" value="75" max="100" />`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="w-full" data-svelte-h="svelte-1wdt1ty"><input type="range" value="75" max="100"></div>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-8hug6k">Color</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<div class="grid grid-cols-[auto_1fr] gap-2">
	<input class="input" type="color" bind:value={colorValue} />
	<input class="input" type="text" bind:value={colorValue} readonly tabindex="-1" />
</div>
					`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="grid grid-cols-[auto_1fr] gap-2"><input class="input" type="color"${add_attribute("value", colorValue, 0)}> <input class="input" type="text" readonly tabindex="-1"${add_attribute("value", colorValue, 0)}></div>`;
        }
      })}</section> <hr>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-6osobn">Input Groups</h2> <p data-svelte-h="svelte-1fopy5b">Create a horizontal group of related form fields.</p> <ul class="space-y-2 list-disc list-inside" data-svelte-h="svelte-ve0jav"><li>Groups support <em>most</em> input types and select elements, but not all.</li>  <li>The column sizes are grid-based, via <a class="anchor" href="https://tailwindcss.com/docs/grid-template-columns#arbitrary-values" target="_blank" rel="noreferrer">Tailwind&#39;s arbitrary column syntax</a>.</li> <li>Descriptive segments (on either side) allow for <code class="code">div</code>, <code class="code">button</code>, and anchor (<code class="code">a</code>) elements.</li> <li>The <code class="code">.input-group-divider</code> class applies vertical divider lines.</li> <li>The <code class="code">.input-group-shim</code> class applies subtle shading to a segment, to draw more attention.</li></ul> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<p>Website</p>
<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
  <div class="input-group-shim">https://</div>
  <input type="text" placeholder="www.example.com" />
</div>
		`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<p>Amount</p>
<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
  <div class="input-group-shim">(icon)</div>
  <input type="text" placeholder="Amount" />
  <select>
    <option>USD</option>
    <option>CAD</option>
    <option>EURO</option>
  </select>
</div>
		`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<p>Username</p>
<div class="input-group input-group-divider grid-cols-[1fr_auto]">
  <input type="text" placeholder="Enter Username..." />
  <a href="/" title="Username already in use.">(icon)</a>
</div>
		`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<p>Search</p>
<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
	<div class="input-group-shim">(icon)</div>
	<input type="search" placeholder="Search..." />
	<button class="variant-filled-secondary">Submit</button>
</div>
		`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="w-full grid grid-cols-1 gap-4"><label class="label" data-svelte-h="svelte-ud541g"><span>Website</span> <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]"><div class="input-group-shim">https://</div> <input type="text" placeholder="www.example.com"></div></label>  <label class="label"><span data-svelte-h="svelte-1395xuu">Amount</span> <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]"><div class="input-group-shim" data-svelte-h="svelte-t2nnx4"><i class="fa-solid fa-dollar-sign"></i></div> <input type="text" placeholder="Amount"> <select><option value="USD" data-svelte-h="svelte-y1bqeq">USD</option><option value="CAD" data-svelte-h="svelte-1ayzr22">CAD</option><option value="EURO" data-svelte-h="svelte-18w02xd">EURO</option></select></div></label>  <label class="label" data-svelte-h="svelte-1h01xat"><span>Username</span> <div class="input-group input-group-divider grid-cols-[1fr_auto]"><input type="text" placeholder="Enter Username..."> <a href="/elements/forms" title="Username already in use."><i class="fa-solid fa-circle-exclamation text-warning-500 animate-pulse"></i></a></div></label>  <label class="label" data-svelte-h="svelte-mgzxe7"><span>Search</span> <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]"><div class="input-group-shim"><i class="fa-solid fa-search"></i></div> <input type="search" placeholder="Search..."> <button class="variant-filled-secondary">Submit</button></div></label></div>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1n6uykp">Variants</h2> <p data-svelte-h="svelte-y9592s">Skeleton includes a forms variant inspired by <a class="anchor" href="https://m3.material.io/" target="_blank" rel="noreferrer">Material Design.</a> Use this as a reference for building your own variant classes.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<input ... class="input variant-form-material" />`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<select ... class="select variant-form-material" />`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<textarea ... class="textarea variant-form-material" />`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="grid grid-cols-1 lg:grid-cols-3 gap-4"><label class="label" data-svelte-h="svelte-1mcg9i5"><span>Input (text)</span> <input class="input variant-form-material" type="text" placeholder="input text"></label> <label class="label" data-svelte-h="svelte-lbxnjd"><span>Input (password)</span> <input class="input variant-form-material" type="password" placeholder="Enter password..."></label> <label class="label"><span data-svelte-h="svelte-buwd0q">Select</span> <select class="select variant-form-material"><option value="1" data-svelte-h="svelte-1j3lum5">Option 1</option><option value="2" data-svelte-h="svelte-3fdzyp">Option 2</option><option value="3" data-svelte-h="svelte-10kf7ml">Option 3</option><option value="4" data-svelte-h="svelte-1s2g3e1">Option 4</option><option value="5" data-svelte-h="svelte-1pd8dgt">Option 5</option></select></label></div>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1dbn8fq">Validation Classes</h2> <p data-svelte-h="svelte-ab3ujp">Skeleton provides a set of classes for indicating form validation. These must come last in a group of class values. They are
				compatible with the variant above.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<input ... class="input-success" />`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<input ... class="input-warning" />`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<input ... class="input-error" />`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="grid grid-cols-1 lg:grid-cols-3 gap-4" data-svelte-h="svelte-gxom6m"><label class="space-y-3"><code class="code">.input-success</code> <input type="text" placeholder="success" class="input input-success"></label> <label class="space-y-3"><code class="code">.input-warning</code> <input type="text" placeholder="warning" class="input input-warning"></label> <label class="space-y-3"><code class="code">.input-error</code> <input type="text" placeholder="error" class="input input-error"></label></div>`;
        }
      })}</section>  <section class="space-y-4" data-svelte-h="svelte-19e44bv"><h2 class="h2">Browser Support</h2> <p>Please be aware that not all native HTML form fields work consistently across browsers or operating systems. We strongly recommend
				cross-device/OS/browser testing to ensure compatibility for your target audience.</p></section> `;
    },
    sandbox: () => {
      return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<label class="label">
	<span>Input</span>
	<input class="input" type="text" placeholder="Input" />
</label>
				`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<label class="label">
	<span>Select</span>
	<select class="select">
		<option value="1">Option 1</option>
		<option value="2">Option 2</option>
		<option value="3">Option 3</option>
		<option value="4">Option 4</option>
		<option value="5">Option 5</option>
	</select>
</label>
				`
            },
            {},
            {}
          )}  ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<label class="label">
	<span>Textarea</span>
	<textarea class="textarea" rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
</label>
				`
            },
            {},
            {}
          )}  `;
        },
        preview: () => {
          return `<div class="card p-4 w-full text-token space-y-4"><label class="label" data-svelte-h="svelte-j1a5id"><span>Input</span> <input class="input" type="text" placeholder="Input"></label> <label class="label"><span data-svelte-h="svelte-buwd0q">Select</span> <select class="select"><option value="1" data-svelte-h="svelte-1j3lum5">Option 1</option><option value="2" data-svelte-h="svelte-3fdzyp">Option 2</option><option value="3" data-svelte-h="svelte-10kf7ml">Option 3</option><option value="4" data-svelte-h="svelte-1s2g3e1">Option 4</option><option value="5" data-svelte-h="svelte-1pd8dgt">Option 5</option></select></label> <label class="label" data-svelte-h="svelte-1keyr4n"><span>Textarea</span>  <textarea class="textarea" rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."></textarea></label></div>`;
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

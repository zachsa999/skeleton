import { c as create_ssr_component, v as validate_component, d as add_attribute, h as each, e as escape } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { P as ProgressRadial } from "../../../../../chunks/ProgressRadial.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const sveldProgressRadial = { "props": [{ "name": "value", "kind": "let", "description": "Set the meter fill amount. Shows as indeterminate when set `undefined`.", "type": "number", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "stroke", "kind": "let", "description": "Sets the base stroke width. Scales responsively.", "type": "number", "value": "40", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "font", "kind": "let", "description": "Sets the base font size. Scales responsively.", "type": "number", "value": "56", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "strokeLinecap", "kind": "let", "description": "Sets the stoke-linecap value", "type": "string", "value": "'butt'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transition", "kind": "let", "description": "Provide classes to set the meter transition styles.", "type": "string", "value": "'transition-[stroke-dashoffset]'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "width", "kind": "let", "description": "Provide classes to set the width.", "type": "string", "value": "'w-36'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "meter", "kind": "let", "description": "Provide classes to set meter color.", "type": "string", "value": "'stroke-surface-900 dark:stroke-surface-50'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "track", "kind": "let", "description": "Provide classes to set track color.", "type": "string", "value": "'stroke-surface-500/30'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "fill", "kind": "let", "description": "Provide classes to set the SVG text fill color.", "type": "string", "value": "'fill-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "labelledby", "kind": "let", "description": "Provide the ARIA labelledby value.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "__default__", "default": true, "slot_props": "{}" }], "events": [], "typedefs": [] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let props;
  let strokeProps;
  const settings = {
    feature: DocsFeature.Component,
    name: "Progress Radials",
    description: "Displays a radial indicator showing the progress or completion of a task.",
    imports: ["ProgressRadial"],
    source: "packages/skeleton/src/lib/components/ProgressRadial",
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/meter/",
    components: [{ sveld: sveldProgressRadial }]
  };
  let strokeLinecap = "butt";
  props = { value: 50, max: 100, step: 10 };
  strokeProps = { value: 100, max: 400, step: 20 };
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return ` <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-w10iph">Styling</h2> <p data-svelte-h="svelte-abhoa7">Use the <code class="code">meter</code>, or <code class="code">track</code>, <code class="code">stroke</code>,
				<code class="code">strokeLinecap</code> properties to style the radial.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<ProgressRadial ... stroke={${strokeProps.value}} meter="stroke-primary-500" track="stroke-primary-500/30" strokeLinecap="${strokeLinecap}" />`
            },
            {},
            {}
          )} `;
        },
        footer: () => {
          return `<div class="flex justify-between items-center gap-4"><div class="w-60"><input type="range" min="20"${add_attribute("max", strokeProps.max, 0)}${add_attribute("step", strokeProps.step, 0)}${add_attribute("value", strokeProps.value, 0)}></div> <select class="select w-auto">${each(["butt", "round", "square"], (v) => {
            return `<option${add_attribute("value", v, 0)}>${escape(v)}</option>`;
          })}</select></div> `;
        },
        preview: () => {
          return `<div class="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center"><div class="p-4 space-y-2">${validate_component(ProgressRadial, "ProgressRadial").$$render(
            $$result,
            {
              stroke: strokeProps.value,
              meter: "stroke-primary-500",
              track: "stroke-primary-500/30",
              width: "w-full",
              strokeLinecap,
              value: 50
            },
            {},
            {}
          )} <p data-svelte-h="svelte-10swb42">Primary</p></div> <div class="p-4 space-y-2">${validate_component(ProgressRadial, "ProgressRadial").$$render(
            $$result,
            {
              stroke: strokeProps.value,
              meter: "stroke-secondary-500",
              track: "stroke-secondary-500/30",
              width: "w-full",
              strokeLinecap,
              value: 50
            },
            {},
            {}
          )} <p data-svelte-h="svelte-11co21m">Secondary</p></div> <div class="p-4 space-y-2">${validate_component(ProgressRadial, "ProgressRadial").$$render(
            $$result,
            {
              stroke: strokeProps.value,
              meter: "stroke-tertiary-500",
              track: "stroke-tertiary-500/30",
              width: "w-full",
              strokeLinecap,
              value: 50
            },
            {},
            {}
          )} <p data-svelte-h="svelte-1okxmji">Tertiary</p></div> <div class="p-4 space-y-2">${validate_component(ProgressRadial, "ProgressRadial").$$render(
            $$result,
            {
              stroke: strokeProps.value,
              meter: "stroke-success-500",
              track: "stroke-success-500/30",
              width: "w-full",
              strokeLinecap,
              value: 50
            },
            {},
            {}
          )} <p data-svelte-h="svelte-fv5kyf">Success</p></div> <div class="p-4 space-y-2">${validate_component(ProgressRadial, "ProgressRadial").$$render(
            $$result,
            {
              stroke: strokeProps.value,
              meter: "stroke-warning-500",
              track: "stroke-warning-500/30",
              width: "w-full",
              strokeLinecap,
              value: 50
            },
            {},
            {}
          )} <p data-svelte-h="svelte-1v6b52c">Warning</p></div> <div class="p-4 space-y-2">${validate_component(ProgressRadial, "ProgressRadial").$$render(
            $$result,
            {
              stroke: strokeProps.value,
              meter: "stroke-error-500",
              track: "stroke-error-500/30",
              width: "w-full",
              strokeLinecap,
              value: 50
            },
            {},
            {}
          )} <p data-svelte-h="svelte-oxxx6i">Error</p></div></div>`;
        }
      })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1s0x30k">Indeterminate</h2> <p data-svelte-h="svelte-1wlnbq7">Remove the <code class="code">value</code> property or set to <code class="code">undefined</code>.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<ProgressRadial />`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<ProgressRadial value={undefined} />`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `${validate_component(ProgressRadial, "ProgressRadial").$$render($$result, { width: "w-28" }, {}, {})}`;
        }
      })}</section> <hr> <section class="space-y-4" data-svelte-h="svelte-1gp7bnt"><h2 class="h2">Accessibility</h2>  <p>This component is treated as an <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter" target="_blank" rel="noreferrer">ARIA meter</a>.</p></section> `;
    },
    sandbox: () => {
      return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "ts",
              code: `let value: number = 50; // %`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<ProgressRadial value={value}>{value}%</ProgressRadial>`
            },
            {},
            {}
          )} `;
        },
        footer: () => {
          return `<div class="w-48 mx-auto"><input type="range" min="0"${add_attribute("max", props.max, 0)}${add_attribute("step", props.step, 0)}${add_attribute("value", props.value, 0)}></div> `;
        },
        preview: () => {
          return `${validate_component(ProgressRadial, "ProgressRadial").$$render($$result, { value: props.value, width: "w-48" }, {}, {
            default: () => {
              return `${escape(props.value)}%`;
            }
          })}`;
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

import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { S as SlideToggle } from "../../../../../chunks/SlideToggle.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const sveldSlideToggle = { "props": [{ "name": "name", "kind": "let", "description": "Required. Set a unique name for the input.", "type": "string", "isFunction": false, "isFunctionDeclaration": false, "isRequired": true, "constant": false, "reactive": false }, { "name": "checked", "kind": "let", "description": "The checked state of the input element.", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "size", "kind": "let", "description": "Sets the size of the component.", "type": "'sm' | 'md' | 'lg'", "value": "'md'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "background", "kind": "let", "description": "Provide classes to set the inactive state background color.", "type": "string", "value": "'bg-surface-400 dark:bg-surface-700'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "active", "kind": "let", "description": "Provide classes to set the active state background color.", "type": "string", "value": "'bg-surface-900 dark:bg-surface-300'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "border", "kind": "let", "description": "Provide classes to set the border styles.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "rounded", "kind": "let", "description": "Provide classes to set border radius styles.", "type": "string", "value": "'rounded-full'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "label", "kind": "let", "description": "Provide a semantic label.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "__default__", "default": true, "slot_props": "{}" }], "events": [{ "type": "dispatched", "name": "keyup", "detail": "{ event }", "description": "Fires when the component is focused and key is pressed." }, { "type": "forwarded", "name": "click", "element": "input" }, { "type": "forwarded", "name": "keydown", "element": "input" }, { "type": "forwarded", "name": "keypress", "element": "input" }, { "type": "forwarded", "name": "mouseover", "element": "input" }, { "type": "forwarded", "name": "change", "element": "input" }, { "type": "forwarded", "name": "focus", "element": "input" }, { "type": "forwarded", "name": "blur", "element": "input" }], "typedefs": [] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Component,
    name: "Slide Toggles",
    description: "A sliding toggle element that can capture input from a user.",
    imports: ["SlideToggle"],
    source: "packages/skeleton/src/lib/components/SlideToggle",
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/switch/",
    components: [{ sveld: sveldSlideToggle }],
    restProps: "input"
  };
  let checkedValue = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
      usage: () => {
        return ` <p data-svelte-h="svelte-1f92grk">This component provides an alternative UI for a checkbox input element.</p> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1yfasw8">Labeled</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<SlideToggle name="slider-label" checked>(label)</SlideToggle>`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `<div class="flex items-center gap-4">${validate_component(SlideToggle, "SlideToggle").$$render(
              $$result,
              {
                name: "slider-label",
                checked: checkedValue
              },
              {
                checked: ($$value) => {
                  checkedValue = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `<span class="inline-block w-[100px] text-left">Powered ${escape(checkedValue ? "On" : "Off")}</span>`;
                }
              }
            )}</div>`;
          }
        })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-jrvnss">Customized</h2> <p data-svelte-h="svelte-1vvrlhd">Slide toggles styles and colors can be easily customized with the <code class="code">active</code> and
				<code class="code">size</code> properties.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<SlideToggle name="slider-large" checked active="bg-primary-500" size="lg" />`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `<div class="flex items-center gap-4">${validate_component(SlideToggle, "SlideToggle").$$render(
              $$result,
              {
                name: "slider-small",
                checked: true,
                active: "bg-primary-500",
                size: "lg"
              },
              {},
              {}
            )} ${validate_component(SlideToggle, "SlideToggle").$$render(
              $$result,
              {
                name: "slider-base",
                checked: true,
                active: "bg-secondary-500"
              },
              {},
              {}
            )} ${validate_component(SlideToggle, "SlideToggle").$$render(
              $$result,
              {
                name: "slider-large",
                checked: true,
                active: "bg-tertiary-500",
                size: "sm"
              },
              {},
              {}
            )}</div>`;
          }
        })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-cppn5l">Checkbox Attributes</h2> <p data-svelte-h="svelte-a0csmq">This component supports Svelte&#39;s <code class="code">$$restProps</code>, which allows for <em>required</em>, <em>disabled</em>, and
				any other valid checkbox input attributes.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `<SlideToggle ... required disabled />`
          },
          {},
          {}
        )}</section> `;
      },
      sandbox: () => {
        return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `let value: boolean = false;`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<SlideToggle name="slide" bind:checked={value} />`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(SlideToggle, "SlideToggle").$$render($$result, { name: "slider", checked: true }, {}, {})}`;
          }
        })} `;
      },
      default: () => {
        return ` `;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};

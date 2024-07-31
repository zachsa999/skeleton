import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { P as ProgressBar } from "../../../../../chunks/ProgressBar.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const sveldProgressBar = { "props": [{ "name": "value", "kind": "let", "description": "Specifies the amount completed. Indeterminate when `undefined`.", "type": "number | undefined", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "min", "kind": "let", "description": "Minimum amount the bar represents.", "type": "number", "value": "0", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "max", "kind": "let", "description": "Maximum amount the bar represents.", "type": "number", "value": "100", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "height", "kind": "let", "description": "Provide classes to set track height.", "type": "string", "value": "'h-2'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "rounded", "kind": "let", "description": "Provide classes to set rounded styles.", "type": "string", "value": "'rounded-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transition", "kind": "let", "description": "Provide classes to set the meter transition styles.", "type": "string", "value": "'transition-[width]'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "animIndeterminate", "kind": "let", "description": "Provide classes to replace the default animation styles.", "type": "string", "value": "'anim-indeterminate'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "meter", "kind": "let", "description": "Sets the base classes of the meter element.", "type": "string", "value": "'bg-surface-900-50-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "track", "kind": "let", "description": "Sets the base classes of the track element.", "type": "string", "value": "'bg-surface-200-700-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "labelledby", "kind": "let", "description": "Provide the ARIA labelledby value.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [], "events": [], "typedefs": [] };
const defaultRounded = "rounded-token";
const defaultMeter = "bg-surface-900-50-token";
const defaultTrack = "bg-surface-200-700-token";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let props;
  const settings = {
    feature: DocsFeature.Component,
    name: "Progress Bars",
    description: "An indicator showing the progress or completion of a task.",
    imports: ["ProgressBar"],
    source: "packages/skeleton/src/lib/components/ProgressBar",
    aria: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role",
    components: [{ sveld: sveldProgressBar }]
  };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    props = {
      determinate: true,
      value: 50,
      max: 100,
      step: 10,
      height: "h-2",
      rounded: defaultRounded,
      meter: defaultMeter,
      track: defaultTrack
    };
    $$rendered = `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
      usage: () => {
        return ` <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-dexew1">Indeterminate Mode</h2> <p data-svelte-h="svelte-1imzfnw">Remove the <code class="code">value</code> property or set value to <code class="code">undefined</code>.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<ProgressBar />`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<ProgressBar value={undefined} />`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `<div class="w-full space-y-10">${validate_component(ProgressBar, "ProgressBar").$$render($$result, {}, {}, {})} <div class="w-full space-y-4">${validate_component(ProgressBar, "ProgressBar").$$render(
              $$result,
              {
                meter: "bg-primary-500",
                track: "bg-primary-500/30"
              },
              {},
              {}
            )} ${validate_component(ProgressBar, "ProgressBar").$$render(
              $$result,
              {
                meter: "bg-secondary-500",
                track: "bg-secondary-500/30"
              },
              {},
              {}
            )} ${validate_component(ProgressBar, "ProgressBar").$$render(
              $$result,
              {
                meter: "bg-tertiary-500",
                track: "bg-tertiary-500/30"
              },
              {},
              {}
            )} ${validate_component(ProgressBar, "ProgressBar").$$render(
              $$result,
              {
                meter: "bg-success-500",
                track: "bg-success-500/30"
              },
              {},
              {}
            )} ${validate_component(ProgressBar, "ProgressBar").$$render(
              $$result,
              {
                meter: "bg-warning-500",
                track: "bg-warning-500/30"
              },
              {},
              {}
            )} ${validate_component(ProgressBar, "ProgressBar").$$render(
              $$result,
              {
                meter: "bg-error-500",
                track: "bg-error-500/30"
              },
              {},
              {}
            )}</div> </div>`;
          }
        })} <h3 class="h3" data-svelte-h="svelte-4vxm4l">Custom Animation</h3> <p data-svelte-h="svelte-1ybyvdw">Use the <code class="code">animIndeterminate</code> prop to pass a custom CSS animation for the progress bar meter.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `<p data-svelte-h="svelte-1ghl7ty">Define your new animation class in your global stylesheet <code class="code">app.postcss</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "css",
                code: `
.anim-progress-bar {
	transform-origin: 0% 50%;
	animation: anim-progress-bar 2s infinite linear;
}
@keyframes anim-progress-bar {
	0% { transform: translateX(50%) scaleX(0.5); }
	50% { transform: translateX(0) scaleX(0.5); }
	100% { transform: translateX(50%) scaleX(0.5); }
}
`
              },
              {},
              {}
            )} <p data-svelte-h="svelte-18o0gn1">Append the animation class to via the <code class="code">animIndeterminate</code> prop.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<ProgressBar animIndeterminate="anim-progress-bar"/>`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `<div class="w-full space-y-10">${validate_component(ProgressBar, "ProgressBar").$$render(
              $$result,
              {
                animIndeterminate: "anim-progress-bar-example"
              },
              {},
              {}
            )}</div>`;
          }
        })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1ukpfmb">Native Alternative</h2> <p data-svelte-h="svelte-1p8z6w2">The native <code class="code">progress</code> element works cross browser, but does not currently support Indeterminate mode when styled.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<progress value={props.value} max={props.max} />`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `<progress${add_attribute("value", props.value, 0)}${add_attribute("max", props.max, 0)}></progress>`;
          }
        })}</section> <hr> <section class="space-y-4" data-svelte-h="svelte-1umbe94"><h2 class="h2">Accessibility</h2>  <p>This component is treated as an <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role" target="_blank" rel="noreferrer">ARIA progressbar</a>.</p></section> `;
      },
      sandbox: () => {
        return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<ProgressBar value={${props.value}} max={${props.max}} />`
              },
              {},
              {}
            )} `;
          },
          footer: () => {
            return `<div class="w-48 mx-auto"><input type="range" min="0"${add_attribute("max", props.max, 0)}${add_attribute("step", props.step, 0)}${add_attribute("value", props.value, 0)}></div> `;
          },
          preview: () => {
            return `${validate_component(ProgressBar, "ProgressBar").$$render(
              $$result,
              { max: props.max, value: props.value },
              {
                value: ($$value) => {
                  props.value = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
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

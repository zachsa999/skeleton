import { c as create_ssr_component, v as validate_component, h as each, e as escape } from "../../../../../chunks/ssr.js";
import { D as DocsPreview, R as RadioGroup, a as RadioItem } from "../../../../../chunks/DocsPreview.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const sveldRadioGroup = { "props": [{ "name": "display", "kind": "let", "description": "Provide display classes. Use `flex` to stretch full width.", "type": "string", "value": "'inline-flex'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "flexDirection", "kind": "let", "description": "Provide classes to set flex-direction. Use `flex-col` for vertical layout.", "type": "string", "value": "'flex-row'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "gap", "kind": "let", "description": "Provide classes to set gap spacing between items.", "type": "string", "value": "'gap-1'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "background", "kind": "let", "description": "Provide classes to set the base background color.", "type": "string", "value": "'bg-surface-200-700-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "border", "kind": "let", "description": "Provide classes to set the border styles.", "type": "string", "value": "'border-token border-surface-400-500-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "rounded", "kind": "let", "description": "Provide classes to set the border radius.", "type": "string", "value": "'rounded-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "padding", "kind": "let", "description": "Provide classes to set the RadioItem padding.", "type": "string", "value": "'px-4 py-1'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "active", "kind": "let", "description": "Provide classes to set the active item color.", "type": "string", "value": "'variant-filled'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "hover", "kind": "let", "description": "Provide classes to set the hover style.", "type": "string", "value": "'hover:variant-soft'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "color", "kind": "let", "description": "Provide classes to set the highlighted text color.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "fill", "kind": "let", "description": "Provide classes to set the highlighted SVG fill color.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionLabel", "kind": "let", "description": "Provide classes for the label region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "labelledby", "kind": "let", "description": "Provide the ARIA labelledby value.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "__default__", "default": true, "slot_props": "{}" }], "events": [], "typedefs": [] };
const sveldRadioItem = { "props": [{ "name": "group", "kind": "let", "description": "Set the radio group binding value.", "type": "any", "isFunction": false, "isFunctionDeclaration": false, "isRequired": true, "constant": false, "reactive": true }, { "name": "name", "kind": "let", "description": "Set a unique name value for the input.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": true, "constant": false, "reactive": false }, { "name": "value", "kind": "let", "description": "Set the input's value.", "type": "any", "isFunction": false, "isFunctionDeclaration": false, "isRequired": true, "constant": false, "reactive": false }, { "name": "title", "kind": "let", "description": "Set the hover title.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "label", "kind": "let", "description": "Defines a semantic ARIA label.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "rounded", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "padding", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "active", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "hover", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "color", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "fill", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionLabel", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "__default__", "default": true, "slot_props": "{}" }], "events": [{ "type": "forwarded", "name": "keydown", "element": "div" }, { "type": "forwarded", "name": "keyup", "element": "div" }, { "type": "forwarded", "name": "keypress", "element": "div" }, { "type": "forwarded", "name": "click", "element": "input" }, { "type": "forwarded", "name": "change", "element": "input" }], "typedefs": [] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Component,
    name: "Radio Groups",
    description: "Capture feedback limited to a small set of options.",
    imports: ["RadioGroup", "RadioItem"],
    source: "packages/skeleton/src/lib/components/Radio",
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton/",
    restProps: "RadioItem input",
    components: [
      {
        label: "RadioGroup",
        sveld: sveldRadioGroup
      },
      {
        label: "RadioItem",
        sveld: sveldRadioItem,
        overrideProps: ["padding", "hover", "accent", "color", "fill", "rounded", "regionLabel"]
      }
    ],
    keyboard: [
      [
        '<kbd class="kbd">Tab</kbd>',
        "Moves focus to the next focusable RadioItem."
      ],
      [
        '<kbd class="kbd">Shift + Tab</kbd> ',
        "Moves focus to the previous focusable RadioItem."
      ],
      [
        '<kbd class="kbd">Space</kbd> or <kbd class="kbd">Enter</kbd>',
        "Checks the focused radio button if it is not already checked"
      ]
    ]
  };
  let justify = 0;
  let timeHorizontal = "months";
  let timeVertical = "Millennia";
  let timeNames = ["Millennia", "Epochs", "Eras", "Eons"];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
      usage: () => {
        return ` <section class="space-y-4" data-svelte-h="svelte-ark8lg"><p>This component acts as a wrapper around native HTML radio inputs. Bind the <em>group</em>, then set <em>value</em> and <em>name</em>
				as follows.</p></section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1n6uykp">Variants</h2> <p data-svelte-h="svelte-1xukkaj">The radio group supports variant styles for <code class="code">active</code> and <code class="code">hover</code> properties.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">...</RadioGroup>`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(RadioGroup, "RadioGroup").$$render(
              $$result,
              {
                active: "variant-filled-primary",
                hover: "hover:variant-soft-primary"
              },
              {},
              {
                default: () => {
                  return `${validate_component(RadioItem, "RadioItem").$$render(
                    $$result,
                    {
                      name: "time",
                      value: "months",
                      group: timeHorizontal
                    },
                    {
                      group: ($$value) => {
                        timeHorizontal = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Months`;
                      }
                    }
                  )} ${validate_component(RadioItem, "RadioItem").$$render(
                    $$result,
                    {
                      name: "time",
                      value: "years",
                      group: timeHorizontal
                    },
                    {
                      group: ($$value) => {
                        timeHorizontal = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Years`;
                      }
                    }
                  )}`;
                }
              }
            )}`;
          }
        })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-l2yw6x">Vertical</h2> <p data-svelte-h="svelte-rhm7t4">Set <code class="code">flexDirection=&quot;flex-col&quot;</code> to utilize a vertical layout.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<RadioGroup rounded="rounded-container-token" flexDirection="flex-col">...</RadioGroup>
`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(RadioGroup, "RadioGroup").$$render(
              $$result,
              {
                rounded: "rounded-container-token",
                flexDirection: "flex-col"
              },
              {},
              {
                default: () => {
                  return `${each(timeNames, (name) => {
                    return `${validate_component(RadioItem, "RadioItem").$$render(
                      $$result,
                      {
                        label: name,
                        name,
                        value: name,
                        group: timeVertical
                      },
                      {
                        group: ($$value) => {
                          timeVertical = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `${escape(name)}`;
                        }
                      }
                    )}`;
                  })}`;
                }
              }
            )}`;
          }
        })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1oivhqg">Full Width</h2> <p data-svelte-h="svelte-q5fjcs">Set <em>display</em> to <code class="code">flex</code> to stretch and fill the full width.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `<RadioGroup display="flex">...</RadioGroup>`
          },
          {},
          {}
        )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-10ri43z">Radio Attributes</h2> <p data-svelte-h="svelte-14c0ac">The Radio Item component supports Svelte&#39;s <code class="code">$$restProps</code>, which allows for <em>required</em>,
				<em>disabled</em>, and any other valid radio input attributes. Please note these settings are applied per item.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `<RadioItem ... required disabled />`
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
                code: `let value: number = 0;`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<RadioGroup>
	<RadioItem bind:group={value} name="justify" value={0}>(label)</RadioItem>
	<RadioItem bind:group={value} name="justify" value={1}>(label)</RadioItem>
	<RadioItem bind:group={value} name="justify" value={2}>(label)</RadioItem>
</RadioGroup>
`
              },
              {},
              {}
            )} `;
          },
          footer: () => {
            return `<div class="text-center"><code class="code">selected: ${escape(justify)}</code></div> `;
          },
          preview: () => {
            return `  ${validate_component(RadioGroup, "RadioGroup").$$render($$result, { class: "text-token" }, {}, {
              default: () => {
                return `${validate_component(RadioItem, "RadioItem").$$render(
                  $$result,
                  {
                    name: "justify",
                    value: 0,
                    group: justify
                  },
                  {
                    group: ($$value) => {
                      justify = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `<i class="fa-solid fa-align-left"></i>`;
                    }
                  }
                )} ${validate_component(RadioItem, "RadioItem").$$render(
                  $$result,
                  {
                    name: "justify",
                    value: 1,
                    group: justify
                  },
                  {
                    group: ($$value) => {
                      justify = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `<i class="fa-solid fa-align-center"></i>`;
                    }
                  }
                )} ${validate_component(RadioItem, "RadioItem").$$render(
                  $$result,
                  {
                    name: "justify",
                    value: 2,
                    group: justify
                  },
                  {
                    group: ($$value) => {
                      justify = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `<i class="fa-solid fa-align-right"></i>`;
                    }
                  }
                )}`;
              }
            })}`;
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

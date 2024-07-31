import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { L as ListBox, a as ListBoxItem } from "../../../../../chunks/ListBoxItem.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const sveldListBox = { "props": [{ "name": "multiple", "kind": "let", "description": "Enable selection of multiple items.", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "disabled", "kind": "let", "description": "Disables selection of items.", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "spacing", "kind": "let", "description": "Provide class to set the vertical spacing style.", "type": "string", "value": "'space-y-1'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "rounded", "kind": "let", "description": "Provide classes to set the listbox box radius styles.", "type": "string", "value": "'rounded-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "active", "kind": "let", "description": "Provide classes to set the listbox item active background styles.", "type": "string", "value": "'variant-filled'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "hover", "kind": "let", "description": "Provide classes to set the listbox item hover background styles.", "type": "string", "value": "'hover:variant-soft'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "padding", "kind": "let", "description": "Provide classes to set the listbox item padding styles.", "type": "string", "value": "'px-4 py-2'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionLead", "kind": "let", "description": "Provide arbitrary classes to style the lead region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionDefault", "kind": "let", "description": "Provide arbitrary classes to the default region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionTrail", "kind": "let", "description": "Provide arbitrary classes to the trail region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "labelledby", "kind": "let", "description": "Provide the ARIA labelledby value.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "__default__", "default": true, "slot_props": "{}" }], "events": [], "typedefs": [] };
const sveldListBoxItem = { "props": [{ "name": "group", "kind": "let", "description": "Set the radio group binding value.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": true, "constant": false, "reactive": true }, { "name": "name", "kind": "let", "description": "Set a unique name value for the input.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": true, "constant": false, "reactive": false }, { "name": "value", "kind": "let", "description": "Set the input's value.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": true, "constant": false, "reactive": false }, { "name": "disabled", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "multiple", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "rounded", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "active", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "hover", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "padding", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionLead", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionDefault", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionTrail", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "__default__", "default": true, "slot_props": "{}" }, { "name": "lead", "default": false, "slot_props": "", "description": "Positioned on the left of each row item." }, { "name": "trail", "default": false, "slot_props": "", "description": "Positioned on the right of each row item." }], "events": [{ "type": "forwarded", "name": "keydown", "element": "div" }, { "type": "forwarded", "name": "keyup", "element": "div" }, { "type": "forwarded", "name": "keypress", "element": "div" }, { "type": "forwarded", "name": "click", "element": "input" }, { "type": "forwarded", "name": "change", "element": "input" }], "typedefs": [] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Component,
    name: "Listboxes",
    description: "Interactive listboxes that maintain selection state.",
    imports: ["ListBox", "ListBoxItem"],
    source: "packages/skeleton/src/lib/components/ListBox",
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/listbox/",
    components: [
      { label: "ListBox", sveld: sveldListBox },
      {
        label: "ListBoxItem",
        sveld: sveldListBoxItem,
        overrideProps: ["rounded", "active", "hover", "padding"]
      }
    ],
    keyboard: [
      ['<kbd class="kbd">Tab</kbd>', "Focus the next listbox item."],
      ['<kbd class="kbd">Shift + Tab</kbd> ', "Focus the previous listbox item."],
      [
        '<kbd class="kbd">Enter</kbd> or <kbd class="kbd">Space</kbd>',
        "Toggles the current listbox item selection."
      ]
    ]
  };
  let valueSingle = "books";
  let valueMultiple = ["books", "movies"];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
      usage: () => {
        return ` <section class="space-y-4" data-svelte-h="svelte-mljedh"><p>By default the listbox uses a native <em>radio inputs</em> to ensure only one item is selected at a time.</p></section> <section class="space-y-4"><h3 class="h3" data-svelte-h="svelte-jsv0lc">Multiple Selection</h3> <p data-svelte-h="svelte-1ehu5oe">By adding the <code class="code">multiple</code> property, the component uses native <em>checkbox inputs</em>, which allows for
				multi-select.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `let valueMultiple: string[] = ['books', 'movies'];`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<ListBox multiple>
	<ListBoxItem bind:group={valueMultiple} name="medium" value="books">Books</ListBoxItem>
	<ListBoxItem bind:group={valueMultiple} name="medium" value="movies">Movies</ListBoxItem>
	<ListBoxItem bind:group={valueMultiple} name="medium" value="tv">TV</ListBoxItem>
</ListBox>
			`
              },
              {},
              {}
            )} `;
          },
          footer: () => {
            return `<div class="text-center"><code class="code">Selected: ${escape(valueMultiple.length ? valueMultiple : "None")}</code></div> `;
          },
          preview: () => {
            return `${validate_component(ListBox, "ListBox").$$render(
              $$result,
              {
                active: "variant-filled-primary",
                hover: "hover:variant-soft-primary",
                multiple: true,
                class: "w-full max-w-[480px]"
              },
              {},
              {
                default: () => {
                  return `${validate_component(ListBoxItem, "ListBoxItem").$$render(
                    $$result,
                    {
                      name: "medium",
                      value: "books",
                      group: valueMultiple
                    },
                    {
                      group: ($$value) => {
                        valueMultiple = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      lead: () => {
                        return `<i class="fa-solid fa-book w-6 text-center"></i>`;
                      },
                      default: () => {
                        return `Books`;
                      }
                    }
                  )} ${validate_component(ListBoxItem, "ListBoxItem").$$render(
                    $$result,
                    {
                      name: "medium",
                      value: "movies",
                      group: valueMultiple
                    },
                    {
                      group: ($$value) => {
                        valueMultiple = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      lead: () => {
                        return `<i class="fa-solid fa-film w-6 text-center"></i>`;
                      },
                      default: () => {
                        return `Movies`;
                      }
                    }
                  )} ${validate_component(ListBoxItem, "ListBoxItem").$$render(
                    $$result,
                    {
                      name: "medium",
                      value: "television",
                      group: valueMultiple
                    },
                    {
                      group: ($$value) => {
                        valueMultiple = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      lead: () => {
                        return `<i class="fa-solid fa-tv w-6 text-center"></i>`;
                      },
                      default: () => {
                        return `Television`;
                      }
                    }
                  )}`;
                }
              }
            )}`;
          }
        })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1dpds9z">Disabled</h2> <p data-svelte-h="svelte-7z51dj">Use the <code class="code">disabled</code> property to disable the entire listbox or each item.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `<ListBox ... disabled>...</ListBox>`
          },
          {},
          {}
        )} ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `<ListBoxItem ... disabled>...</ListBoxItem>`
          },
          {},
          {}
        )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1oetonx">Lead and Trail Slots</h2> <p data-svelte-h="svelte-1sjwkkl">Each Listbox item supports a <code class="code">lead</code> and <code class="code">trail</code> slot, which can be useful for icons or
				actions.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `
<ListBoxItem bind:group={valueSingle} name="books" value="books">
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	(label)
	<svelte:fragment slot="trail">(icon)</svelte:fragment>
</ListBoxItem>
			`
          },
          {},
          {}
        )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-f4pnoq">Native Alternatives</h2> <p data-svelte-h="svelte-2nc1ml">Consider using the native Select element with either the <code class="code">size</code> or <code class="code">multiple</code> attributes
				set to support single or multiple selection respectively. However, please be aware that Safari (macOS) does not support all styles.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
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
            )} `;
          },
          preview: () => {
            return `<select class="select w-full max-w-[480px]" size="4" value="1"><option value="1" data-svelte-h="svelte-1j3lum5">Option 1</option><option value="2" data-svelte-h="svelte-3fdzyp">Option 2</option><option value="3" data-svelte-h="svelte-10kf7ml">Option 3</option><option value="4" data-svelte-h="svelte-1s2g3e1">Option 4</option><option value="5" data-svelte-h="svelte-1pd8dgt">Option 5</option></select>`;
          }
        })}</section> `;
      },
      sandbox: () => {
        return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `let valueSingle: string = 'books';`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<ListBox>
	<ListBoxItem bind:group={valueSingle} name="medium" value="books">Books</ListBoxItem>
	<ListBoxItem bind:group={valueSingle} name="medium" value="movies">Movies</ListBoxItem>
	<ListBoxItem bind:group={valueSingle} name="medium" value="tv">TV</ListBoxItem>
</ListBox>
			`
              },
              {},
              {}
            )} `;
          },
          footer: () => {
            return `<div class="text-center"><code class="code">Selected: ${escape(valueSingle)}</code></div> `;
          },
          preview: () => {
            return `<div class="w-full max-w-[480px] card p-4 text-token">${validate_component(ListBox, "ListBox").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(ListBoxItem, "ListBoxItem").$$render(
                  $$result,
                  {
                    name: "medium",
                    value: "books",
                    group: valueSingle
                  },
                  {
                    group: ($$value) => {
                      valueSingle = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    lead: () => {
                      return `<i class="fa-solid fa-book text-xs w-6 text-center"></i>`;
                    },
                    default: () => {
                      return `Books`;
                    }
                  }
                )} ${validate_component(ListBoxItem, "ListBoxItem").$$render(
                  $$result,
                  {
                    name: "medium",
                    value: "movies",
                    group: valueSingle
                  },
                  {
                    group: ($$value) => {
                      valueSingle = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    lead: () => {
                      return `<i class="fa-solid fa-film text-xs w-6 text-center"></i>`;
                    },
                    default: () => {
                      return `Movies`;
                    }
                  }
                )} ${validate_component(ListBoxItem, "ListBoxItem").$$render(
                  $$result,
                  {
                    name: "medium",
                    value: "television",
                    group: valueSingle
                  },
                  {
                    group: ($$value) => {
                      valueSingle = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    lead: () => {
                      return `<i class="fa-solid fa-tv text-xs w-6 text-center"></i>`;
                    },
                    default: () => {
                      return `Television`;
                    }
                  }
                )}`;
              }
            })}</div>`;
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

import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import { g as getToastStore } from "../../../../../chunks/stores3.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { I as InputChip } from "../../../../../chunks/InputChip.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const sveldInputChip = { "props": [{ "name": "input", "kind": "let", "description": "Bind the input value.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "name", "kind": "let", "description": "Set a unique select input name.", "type": "string", "isFunction": false, "isFunctionDeclaration": false, "isRequired": true, "constant": false, "reactive": false }, { "name": "value", "kind": "let", "description": "An array of values.", "type": "[]", "value": "[]", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "whitelist", "kind": "let", "description": "Provide a whitelist of accepted values.", "type": "string[]", "value": "[]", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "max", "kind": "let", "description": "Maximum number of chips. Set -1 to disable.", "type": "number", "value": "-1", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "minlength", "kind": "let", "description": "Set the minimum character length.", "type": "number", "value": "-1", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "maxlength", "kind": "let", "description": "Set the maximum character length.", "type": "number", "value": "-1", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "allowUpperCase", "kind": "let", "description": "When enabled, allows for uppercase values.", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "allowDuplicates", "kind": "let", "description": "When enabled, allows for duplicate values.", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "validation", "kind": "let", "description": "Provide a custom validator function.", "type": "function", "value": "() => true", "isFunction": true, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "duration", "kind": "let", "description": "The duration of the flip (first, last, invert, play) animation.", "type": "number", "value": "150", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "required", "kind": "let", "description": "Set the required state for this input field.", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "chips", "kind": "let", "description": "Provide classes or a variant to style the chips.", "type": "string", "value": "'variant-filled'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "invalid", "kind": "let", "description": "Provide classes used to indicate invalid state.", "type": "string", "value": "'input-error'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "padding", "kind": "let", "description": "Provide classes to set padding styles.", "type": "string", "value": "'p-2'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "rounded", "kind": "let", "description": "Provide classes to set border radius styles.", "type": "string", "value": "'rounded-container-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionChipWrapper", "kind": "let", "description": "Provide arbitrary classes to style the chip wrapper region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionChipList", "kind": "let", "description": "Provide arbitrary classes to style the chip list region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionInput", "kind": "let", "description": "Provide arbitrary classes to style the input field region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "label", "kind": "let", "description": "Provide the ARIA label for the select input.", "type": "string", "value": "'Chips select'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitions", "kind": "let", "description": "Enable/Disable transitions", "type": "boolean", "value": "!$prefersReducedMotionStore", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "listTransitionIn", "kind": "let", "description": "Provide the transition used in list on entry.", "type": "ListTransitionIn", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "listTransitionInParams", "kind": "let", "description": "Transition params provided to `ListTransitionIn`.", "type": "TransitionParams", "value": "{ duration: 150, opacity: 0, y: -20 }", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "listTransitionOut", "kind": "let", "description": "Provide the transition used in list on exit.", "type": "ListTransitionOut", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "listTransitionOutParams", "kind": "let", "description": "Transition params provided to `ListTransitionOut`.", "type": "TransitionParams", "value": "{ duration: 150, opacity: 0, y: -20 }", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "chipTransitionIn", "kind": "let", "description": "Provide the transition used in chip on entry.", "type": "ChipTransitionIn", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "chipTransitionInParams", "kind": "let", "description": "Transition params provided to `ChipTransitionIn`.", "type": "TransitionParams", "value": "{ duration: 150, opacity: 0 }", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "chipTransitionOut", "kind": "let", "description": "Provide the transition used in chip on exit.", "type": "ChipTransitionOut", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "chipTransitionOutParams", "kind": "let", "description": "Transition params provided to `ChipTransitionOut`.", "type": "TransitionParams", "value": "{ duration: 150, opacity: 0 }", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "addChip", "kind": "function", "type": "() => any", "value": "() => {     // Validate     inputValid = validate(chip);     // When the onInvalid hook is present     if (inputValid === false) {         /** @event {{ input: string  }} invalidManually - Fires when the manually added value is invalid. */         dispatch('invalidManually', { input: chip });         return;     }     addChipCommon(chip);     /** @event {{ chipIndex: number, chipValue: string }} addManually - Fires when a chip is added manually. */     dispatch('addManually', { chipIndex: value.length - 1, chipValue: chip }); }", "isFunction": true, "isFunctionDeclaration": true, "isRequired": false, "constant": false, "reactive": false }, { "name": "removeChip", "kind": "function", "type": "() => any", "value": "() => {     if ($$restProps.disabled)         return;     removeChipCommon(chip);     /** @event {{ chipValue: string }} removeManually - Fires when a chip is removed manually. */     dispatch('removeManually', { chipValue: chip }); }", "isFunction": true, "isFunctionDeclaration": true, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [], "events": [{ "type": "dispatched", "name": "invalid", "detail": "{ event: Event, input: any  }", "description": "Fires when the input value is invalid." }, { "type": "dispatched", "name": "add", "detail": "{ event: Event, chipIndex: number, chipValue: string }", "description": "Fires when a chip is added." }, { "type": "dispatched", "name": "remove", "detail": "{ event: Event, chipIndex: number, chipValue: string }", "description": "Fires when a chip is removed." }, { "type": "dispatched", "name": "invalidManually", "detail": "{ input: string  }", "description": "Fires when the manually added value is invalid." }, { "type": "dispatched", "name": "addManually", "detail": "{ chipIndex: number, chipValue: string }", "description": "Fires when a chip is added manually." }, { "type": "dispatched", "name": "removeManually", "detail": "{ chipValue: string }", "description": "Fires when a chip is removed manually." }, { "type": "forwarded", "name": "input", "element": "input" }, { "type": "forwarded", "name": "focus", "element": "input" }, { "type": "forwarded", "name": "blur", "element": "input" }, { "type": "forwarded", "name": "click", "element": "button" }, { "type": "forwarded", "name": "keypress", "element": "button" }, { "type": "forwarded", "name": "keydown", "element": "button" }, { "type": "forwarded", "name": "keyup", "element": "button" }], "typedefs": [] };
function isValidEmail(value) {
  return value.includes("@") && value.includes(".");
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Component,
    name: "Input Chips",
    description: "Allows input of multiple values.",
    imports: ["InputChip"],
    stylesheetIncludes: ["all", "elements"],
    stylesheets: ["elements/forms", "elements/chips"],
    source: "packages/skeleton/src/lib/components/InputChip",
    components: [{ sveld: sveldInputChip }],
    // aria: 'https://www.w3.org/WAI/ARIA/apg/',
    restProps: "input",
    transitionIn: "list fly / chip scale",
    transitionOut: "list fly / chip scale"
  };
  let anythingList = ["foo", "bar", "fizz", "buzz"];
  let flavorsList = ["vanilla", "chocolate", "strawberry"];
  let flavorsWhitelist = ["vanilla", "chocolate", "strawberry", "peach", "rocky road"];
  let emails = ["john@email.com", "jane@email.com", "sally@email.com"];
  let musicalGenres = ["rock", "r&b", "pop"];
  let musicalGenresWhitelist = ["rock", "pop", "hip-hop", "metal", "techno", "r&b"];
  let manualList = [];
  let manualInputChip;
  getToastStore();
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
      usage: () => {
        return ` <section class="space-y-4" data-svelte-h="svelte-emzu2h"><p>Bind an array of data to the component <code class="code">value</code> property. Only <u>string</u> values are supported at this time.</p></section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-ik33w">Whitelist Values</h2> <p data-svelte-h="svelte-1dtckav">You can provide an array of strings to use as a whitelist. Only items within this list can be entered. Invalid or duplicate values
				will show an error state.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `let flavorsWhitelist = ['vanilla', 'chocolate', 'strawberry', 'peach', 'rocky road'];`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<InputChip ... whitelist={flavorsWhitelist} />`
              },
              {},
              {}
            )} `;
          },
          footer: () => {
            return `<div class="text-center"><code class="code">${escape(flavorsList.length ? flavorsList.join(", ") : "No flavors set.")}</code></div> `;
          },
          preview: () => {
            return `${validate_component(InputChip, "InputChip").$$render(
              $$result,
              {
                name: "chips-example-flavors",
                placeholder: "Enter flavors...",
                chips: "variant-filled-primary",
                whitelist: flavorsWhitelist,
                value: flavorsList
              },
              {
                value: ($$value) => {
                  flavorsList = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-x9a261">Custom Validation</h2> <p data-svelte-h="svelte-1n63rv5">You can optionally provide a function to provide custom validation. Make sure to accept a string value and return a boolean.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `function isValidEmail(value: string): boolean {
	return value.includes('@') && value.includes('.');
}`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<InputChip ... validation={isValidEmail} />`
              },
              {},
              {}
            )} `;
          },
          footer: () => {
            return `<div class="text-center"><code class="code">${escape(emails.length ? emails.join(", ") : "No emails set.")}</code></div> `;
          },
          preview: () => {
            return `${validate_component(InputChip, "InputChip").$$render(
              $$result,
              {
                name: "chips-example-emails",
                placeholder: "Enter Emails...",
                chips: "variant-filled-secondary",
                validation: isValidEmail,
                value: emails
              },
              {
                value: ($$value) => {
                  emails = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-g2iuat">Invalid Hook</h2> <p data-svelte-h="svelte-12ky9dp">You may utilize an <code class="code">onInvalid</code> function that executes when the input becomes invalid.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
function onInvalidHandler(event: any): void {
	toastStore.trigger({
		message: \`"\${event.detail.input}" is an invalid value. Please try again!\`,
		background: 'variant-filled-error'
	});
}
						`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<InputChip ... on:invalid={onInvalidHandler} />`
              },
              {},
              {}
            )} `;
          },
          footer: () => {
            return `<div class="text-center"><code class="code">${escape(musicalGenres.length ? musicalGenres.join(", ") : "No genres set.")}</code></div> `;
          },
          preview: () => {
            return `${validate_component(InputChip, "InputChip").$$render(
              $$result,
              {
                name: "chips-example-onInvalid",
                placeholder: "Enter Genres...",
                chips: "variant-filled-tertiary",
                whitelist: musicalGenresWhitelist,
                value: musicalGenres
              },
              {
                value: ($$value) => {
                  musicalGenres = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-zbr66c">Add / Remove Chips</h2> <p data-svelte-h="svelte-1ndzt8o">To add or remove chips programatically, use the exported functions <code class="code">addChip</code> and
				<code class="code">removeChip</code> after binding the ChipInput.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
let inputChip: InputChip;
// add chip manually
inputChip.addChip('chipValue');
// remove chip manually
inputChip.removeChip('chipValue');
						`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<InputChip ... bind:this={inputChip} />`
              },
              {},
              {}
            )} `;
          },
          footer: () => {
            return `<div class="text-center"><button type="button" class="btn variant-filled" data-svelte-h="svelte-p8e1y6">Remove LastChip</button> <button type="button" class="btn variant-filled" data-svelte-h="svelte-16hwi3c">Add Random Number</button></div> `;
          },
          preview: () => {
            return `${validate_component(InputChip, "InputChip").$$render(
              $$result,
              {
                name: "chips-example-programatic",
                placeholder: "Enter number...",
                chips: "variant-filled-tertiary",
                this: manualInputChip,
                value: manualList
              },
              {
                this: ($$value) => {
                  manualInputChip = $$value;
                  $$settled = false;
                },
                value: ($$value) => {
                  manualList = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-jmb6k5">Additional Settings</h2> <p data-svelte-h="svelte-52odl2">Use the <code class="code">max</code> property to define a maximum number of chips allowed.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `<InputChip ... max={3} />`
          },
          {},
          {}
        )} <p data-svelte-h="svelte-g6cs2z">Use the <code class="code">minlength</code> and <code class="code">maxlength</code> properties to set the minimum/maximum number of input
				characters respectively.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `<InputChip ... minlength={2} maxlength={5} />`
          },
          {},
          {}
        )} <p data-svelte-h="svelte-1odgfac">By default, only a single instance of each value is allowed. If you wish to allow duplicates, set <code class="code">allowDuplicates</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `<InputChip ... allowDuplicates />`
          },
          {},
          {}
        )} <p data-svelte-h="svelte-18nttly">By default, all values are trimmed and formatted lowercase. If you wish to allow uppercase, set <code class="code">allowUpperCase</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `<InputChip ... allowUpperCase />`
          },
          {},
          {}
        )}</section> <hr>  <section class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4" data-svelte-h="svelte-1i80h87"><div class="space-y-2"><h2 class="h2">See Also</h2> <p>Interactive chip element styles for actions, selection, or filtering.</p></div> <a class="btn variant-ghost-surface" href="/elements/chips">Chip Elements →</a></section> `;
      },
      sandbox: () => {
        return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `let list: string[] = ['foo', 'bar', 'fizz', 'buzz'];`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<InputChip bind:value={list} name="chips" placeholder="Enter any value..." />`
              },
              {},
              {}
            )} `;
          },
          footer: () => {
            return `<div class="text-center"><code class="code">${escape(anythingList.length ? anythingList.join(", ") : "No chips available.")}</code></div> `;
          },
          preview: () => {
            return `${validate_component(InputChip, "InputChip").$$render(
              $$result,
              {
                name: "chips-example",
                placeholder: "Enter any value...",
                class: "text-token",
                value: anythingList
              },
              {
                value: ($$value) => {
                  anythingList = $$value;
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

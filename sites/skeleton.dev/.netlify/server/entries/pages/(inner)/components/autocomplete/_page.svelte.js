import { c as create_ssr_component, a as subscribe, b as createEventDispatcher, e as escape, h as each, v as validate_component, d as add_attribute } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import { p as prefersReducedMotionStore } from "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { s as slide } from "../../../../../chunks/index2.js";
import { I as InputChip } from "../../../../../chunks/InputChip.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Autocomplete = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let listedOptions;
  let optionsFiltered;
  let sliceLimit;
  let classesBase;
  let classesNav;
  let classesList;
  let classesItem;
  let classesButton;
  let classesEmpty;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  createEventDispatcher();
  let { input = void 0 } = $$props;
  let { options = [] } = $$props;
  let { limit = void 0 } = $$props;
  let { allowlist = [] } = $$props;
  let { denylist = [] } = $$props;
  let { emptyState = "No Results Found." } = $$props;
  let { regionNav = "" } = $$props;
  let { regionList = "list-nav" } = $$props;
  let { regionItem = "" } = $$props;
  let { regionButton = "w-full" } = $$props;
  let { regionEmpty = "text-center" } = $$props;
  let { filter = filterOptions } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { transitionIn = slide } = $$props;
  let { transitionInParams = { duration: 200 } } = $$props;
  let { transitionOut = slide } = $$props;
  let { transitionOutParams = { duration: 200 } } = $$props;
  function filterByAllowDeny(allowlist2, denylist2) {
    let _options = [...options];
    if (allowlist2.length) {
      _options = _options.filter((option) => allowlist2.includes(option.value));
    }
    if (denylist2.length) {
      _options = _options.filter((option) => !denylist2.includes(option.value));
    }
    if (!allowlist2.length && !denylist2.length) {
      _options = options;
    }
    listedOptions = _options;
  }
  function filterOptions() {
    let _options = [...listedOptions];
    _options = _options.filter((option) => {
      const inputFormatted = String(input).toLowerCase().trim();
      let optionFormatted = JSON.stringify([option.label, option.value, option.keywords]).toLowerCase();
      if (optionFormatted.includes(inputFormatted))
        return option;
    });
    return _options;
  }
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0)
    $$bindings.limit(limit);
  if ($$props.allowlist === void 0 && $$bindings.allowlist && allowlist !== void 0)
    $$bindings.allowlist(allowlist);
  if ($$props.denylist === void 0 && $$bindings.denylist && denylist !== void 0)
    $$bindings.denylist(denylist);
  if ($$props.emptyState === void 0 && $$bindings.emptyState && emptyState !== void 0)
    $$bindings.emptyState(emptyState);
  if ($$props.regionNav === void 0 && $$bindings.regionNav && regionNav !== void 0)
    $$bindings.regionNav(regionNav);
  if ($$props.regionList === void 0 && $$bindings.regionList && regionList !== void 0)
    $$bindings.regionList(regionList);
  if ($$props.regionItem === void 0 && $$bindings.regionItem && regionItem !== void 0)
    $$bindings.regionItem(regionItem);
  if ($$props.regionButton === void 0 && $$bindings.regionButton && regionButton !== void 0)
    $$bindings.regionButton(regionButton);
  if ($$props.regionEmpty === void 0 && $$bindings.regionEmpty && regionEmpty !== void 0)
    $$bindings.regionEmpty(regionEmpty);
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0)
    $$bindings.filter(filter);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0)
    $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0)
    $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0)
    $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0)
    $$bindings.transitionOutParams(transitionOutParams);
  listedOptions = options;
  {
    filterByAllowDeny(allowlist, denylist);
  }
  optionsFiltered = input ? filter() : listedOptions;
  sliceLimit = limit ?? optionsFiltered.length;
  classesBase = `${$$props.class ?? ""}`;
  classesNav = `${regionNav}`;
  classesList = `${regionList}`;
  classesItem = `${regionItem}`;
  classesButton = `${regionButton}`;
  classesEmpty = `${regionEmpty}`;
  $$unsubscribe_prefersReducedMotionStore();
  return ` <div class="${"autocomplete " + escape(classesBase, true)}" data-testid="autocomplete">${optionsFiltered.length > 0 ? `<nav class="${"autocomplete-nav " + escape(classesNav, true)}"><ul class="${"autocomplete-list " + escape(classesList, true)}">${each(optionsFiltered.slice(0, sliceLimit), (option) => {
    return `<li class="${"autocomplete-item " + escape(classesItem, true)}"><button class="${"autocomplete-button " + escape(classesButton, true)}" type="button"><!-- HTML_TAG_START -->${option.label}<!-- HTML_TAG_END --></button> </li>`;
  })}</ul></nav>` : `<div class="${"autocomplete-empty " + escape(classesEmpty, true)}"><!-- HTML_TAG_START -->${emptyState}<!-- HTML_TAG_END --></div>`}</div>`;
});
const sveldAutocomplete = { "props": [{ "name": "input", "kind": "let", "description": "Bind the input value.", "type": "unknown | undefined", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "options", "kind": "let", "description": "Define values for the list.", "type": "AutocompleteOption[]", "value": "[]", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "limit", "kind": "let", "description": "Limit the total number of suggestions.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "allowlist", "kind": "let", "description": "Provide allowlist values.", "type": "Value[]", "value": "[]", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "denylist", "kind": "let", "description": "Provide denylist values.", "type": "Value[]", "value": "[]", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "emptyState", "kind": "let", "description": "Provide a HTML markup to display when no match is found.", "type": "string", "value": "'No Results Found.'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionNav", "kind": "let", "description": "Provide arbitrary classes to nav element.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionList", "kind": "let", "description": "Provide arbitrary classes to each list.", "type": "string", "value": "'list-nav'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionItem", "kind": "let", "description": "Provide arbitrary classes to each list item.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionButton", "kind": "let", "description": "Provide arbitrary classes to each button.", "type": "string", "value": "'w-full'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionEmpty", "kind": "let", "description": "Provide arbitrary classes to empty message.", "type": "string", "value": "'text-center'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "filter", "kind": "let", "description": "Provide a custom filter function.", "type": "() => AutocompleteOption[]", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitions", "kind": "let", "description": "Enable/Disable transitions", "type": "boolean", "value": "!$prefersReducedMotionStore", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionIn", "kind": "let", "description": "Provide the transition used on entry.", "type": "TransitionIn", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionInParams", "kind": "let", "description": "Transition params provided to `transitionIn`.", "type": "TransitionParams", "value": "{ duration: 200 }", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionOut", "kind": "let", "description": "Provide the transition used on exit.", "type": "TransitionOut", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionOutParams", "kind": "let", "description": "Transition params provided to `transitionOut`.", "type": "TransitionParams", "value": "{ duration: 200 }", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [], "events": [{ "type": "dispatched", "name": "selection", "detail": "Option", "description": "Fire on option select." }, { "type": "forwarded", "name": "click", "element": "button" }, { "type": "forwarded", "name": "keypress", "element": "button" }], "typedefs": [] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Component,
    name: "Autocomplete",
    description: "Displays a list of suggested options.",
    imports: ["Autocomplete"],
    types: ["AutocompleteOption"],
    source: "packages/skeleton/src/lib/components/Autocomplete",
    // aria: 'https://www.w3.org/WAI/ARIA/apg/',
    components: [{ sveld: sveldAutocomplete }],
    keyboard: [
      ['<kbd class="kbd">Tab</kbd>', "Select the next autocomplete option."],
      [
        '<kbd class="kbd">Shift</kbd> + <kbd class="kbd">Tab</kbd>',
        "Select the previous autocomplete option."
      ],
      [
        '<kbd class="kbd">Space</kbd> or <kbd class="kbd">Enter</kbd>',
        "Select the current autocomplete option."
      ]
    ],
    transitionIn: "slide",
    transitionOut: "slide"
  };
  let inputPopupDemo = "";
  let inputDemo = "";
  let inputAllowlist = "";
  const flavorOptions = [
    {
      label: "Vanilla",
      value: "vanilla",
      keywords: "plain, basic",
      meta: { healthy: false }
    },
    {
      label: "Chocolate",
      value: "chocolate",
      keywords: "dark, white",
      meta: { healthy: false }
    },
    {
      label: "Strawberry",
      value: "strawberry",
      keywords: "fruit",
      meta: { healthy: true }
    },
    {
      label: "Neapolitan",
      value: "neapolitan",
      keywords: "mix, strawberry, chocolate, vanilla",
      meta: { healthy: false }
    },
    {
      label: "Pineapple",
      value: "pineapple",
      keywords: "fruit",
      meta: { healthy: true }
    },
    {
      label: "Peach",
      value: "peach",
      keywords: "fruit",
      meta: { healthy: true }
    }
  ];
  const flavorAllowlist = ["neapolitan", "pineapple", "peach"];
  let flavorDenylist = ["vanilla", "chocolate"];
  let inputChip = "";
  let inputChipList = ["vanilla", "chocolate"];
  function customFilterFunction() {
    let _options = [...flavorOptions];
    _options = _options.filter((option) => {
      const inputFormatted = String(inputDemo).toLowerCase().trim();
      if (option.value.toLowerCase().trim().includes(inputFormatted))
        return option;
    });
    return _options;
  }
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
      usage: () => {
        return `  <p data-svelte-h="svelte-ysgtvq">The Autocomplete component does not contain its own input by default. Instead, by using input binding paired with an <code class="code">on:selection</code> event, you may utilize this component alongside any type of input that takes in suggested values.</p> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1fnvcuc">Data Structure</h2> <p data-svelte-h="svelte-1eje8fc">You may optionally append <code class="code">keywords</code> to provide additional search terms. As well as
				<code class="code">meta</code>
				to provide arbitrary data - which is not utilizing for filtering. All data option data is returned by
				<code class="code">on:selection</code>, including these.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `
const flavorOptions: AutocompleteOption<string>[] = [
	{ ..., keywords: 'mix, strawberry, chocolate, vanilla' },
	{ ..., meta: { healthy: false } },
];
			`
          },
          {},
          {}
        )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1h4obwp">Allowed Options</h2> <p data-svelte-h="svelte-as0oe0">Provide a list of values you wish to allow. Only options with a matching value will be displayed.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            background: "neutral",
            regionFooter: "text-center"
          },
          {},
          {
            source: () => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `const flavorAllowlist: string[] = ['neapolitan', 'pineapple', 'peach'];`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `<Autocomplete ... allowlist={flavorAllowlist} />`
                },
                {},
                {}
              )} `;
            },
            footer: () => {
              return `<span class="text-sm" data-svelte-h="svelte-22qmkz">Allowed</span> <code class="code">[${escape(flavorAllowlist.join(", "))}]</code> `;
            },
            preview: () => {
              return `<div class="text-token w-full max-w-sm space-y-2"><input class="input autocomplete" type="search" name="autocomplete-search" placeholder="Search..."${add_attribute("value", inputAllowlist, 0)}> <div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1">${validate_component(Autocomplete, "Autocomplete").$$render(
                $$result,
                {
                  options: flavorOptions,
                  allowlist: flavorAllowlist,
                  input: inputAllowlist
                },
                {
                  input: ($$value) => {
                    inputAllowlist = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div></div>`;
            }
          }
        )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-f8ptcs">Denied Options</h2> <p data-svelte-h="svelte-6xr0pz">Provide a list of values you wish to deny. Denied options will be excluded from the list.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            background: "neutral",
            regionFooter: "text-center"
          },
          {},
          {
            source: () => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `let flavorDenylist: string[] = ['vanilla', 'chocolate'];`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `<Autocomplete ... denylist={flavorDenylist} />`
                },
                {},
                {}
              )} `;
            },
            footer: () => {
              return `<span class="text-sm" data-svelte-h="svelte-bizk9o">Denied</span> <code class="code">[${escape(flavorDenylist.join(", "))}]</code> `;
            },
            preview: () => {
              return `<div class="text-token w-full max-w-sm space-y-2"><div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1">${validate_component(Autocomplete, "Autocomplete").$$render(
                $$result,
                {
                  options: flavorOptions,
                  denylist: flavorDenylist
                },
                {},
                {}
              )}</div></div>`;
            }
          }
        )}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-kvfdaw">Custom Filter</h2> <p data-svelte-h="svelte-1c43s4g">Provide a custom filter function using the prop <code class="code">filter</code>.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            background: "neutral",
            regionFooter: "text-center"
          },
          {},
          {
            source: () => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `
function myCustomFilter(): AutocompleteOption<string>[] {
	// Create a local copy of options
	let _options = [...flavorOptions];
	// Filter options
	return _options.filter((option) => {
		// Format the input and option values
		const inputFormatted = String(inputValue).toLowerCase().trim();
		const optionFormatted = option.value.toLowerCase().trim();
		// Check Match with value only
		if (optionFormatted.includes(inputFormatted)) return option;
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
                  code: `<Autocomplete ... filter={myCustomFilter} />`
                },
                {},
                {}
              )} `;
            },
            preview: () => {
              return `<div class="text-token w-full max-w-sm space-y-2"><input class="input" type="search" name="ac-demo" placeholder="Search..."${add_attribute("value", inputDemo, 0)}> <div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1">${validate_component(Autocomplete, "Autocomplete").$$render(
                $$result,
                {
                  options: flavorOptions,
                  filter: customFilterFunction,
                  input: inputDemo
                },
                {
                  input: ($$value) => {
                    inputDemo = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div></div>`;
            }
          }
        )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-h4cbpt">Input Chip</h2> <p data-svelte-h="svelte-8cv1la">We&#39;ve provided a demo of using Autocomplete alongside a Skeleton Input Chip component below.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            background: "neutral",
            regionFooter: "text-center"
          },
          {},
          {
            source: () => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `let inputChip = '';`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `let inputChipList: string[] = ['vanilla', 'chocolate'];`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `<InputChip bind:input={inputChip} bind:value={inputChipList} name="chips" />`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `
<div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1">
	<Autocomplete
		bind:input={inputChip}
		options={flavorOptions}
		denylist={inputChipList}
		on:selection={onInputChipSelect}
	/>
</div>
					`
                },
                {},
                {}
              )} `;
            },
            preview: () => {
              return `<div class="text-token w-full max-w-sm space-y-2">${validate_component(InputChip, "InputChip").$$render(
                $$result,
                {
                  name: "chips",
                  input: inputChip,
                  value: inputChipList
                },
                {
                  input: ($$value) => {
                    inputChip = $$value;
                    $$settled = false;
                  },
                  value: ($$value) => {
                    inputChipList = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} <div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1">${validate_component(Autocomplete, "Autocomplete").$$render(
                $$result,
                {
                  options: flavorOptions,
                  denylist: inputChipList,
                  input: inputChip
                },
                {
                  input: ($$value) => {
                    inputChip = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div></div>`;
            }
          }
        )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-ffd5vd">Popup</h2> <p data-svelte-h="svelte-1mhbi2j">We&#39;ve provide a demo of using Autocomplete alongside a Skeleton popup utility below. See <a href="/utilities/popups" class="anchor">Popups</a> for more details.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            background: "neutral",
            regionFooter: "text-center"
          },
          {},
          {
            source: () => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `
let popupSettings: PopupSettings = {
	event: 'focus-click',
	target: 'popupAutocomplete',
	placement: 'bottom',
};`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `let inputPopupDemo: string = '';`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `
<input
	class="input autocomplete"
	type="search"
	name="autocomplete-search"
	bind:value={inputPopupDemo}
	placeholder="Search..."
	use:popup={popupSettings}
/>
<div data-popup="popupAutocomplete">
	<Autocomplete
		bind:input={inputPopupDemo}
		options={flavorOptions}
		on:selection={onPopupDemoSelect}
	/>
</div>
					`
                },
                {},
                {}
              )} `;
            },
            preview: () => {
              return `<div class="text-token w-full max-w-sm space-y-2"><input class="input autocomplete" type="search" name="autocomplete-search" placeholder="Search..."${add_attribute("value", inputPopupDemo, 0)}> <div data-popup="popupAutocomplete" class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1">${validate_component(Autocomplete, "Autocomplete").$$render(
                $$result,
                {
                  options: flavorOptions,
                  input: inputPopupDemo
                },
                {
                  input: ($$value) => {
                    inputPopupDemo = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div></div>`;
            }
          }
        )}</section> <section class="space-y-4" data-svelte-h="svelte-zq76jv"><h2 class="h2">Browser Support</h2> <p>For Firefox, when wrapping the Autocomplete component in a parent element that uses <code class="code">overflow</code>
				styling, make sure you add <code class="code">tabindex=&quot;-1&quot;</code>. By doing this, it will ensure that tab navigation selects the
				children within, instead of the wrapping element itself.</p></section> `;
      },
      sandbox: () => {
        return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
          source: () => {
            return `<p data-svelte-h="svelte-1o7fvw">Create a variable to hold bind your search value.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `let inputDemo = '';`
              },
              {},
              {}
            )} <p data-svelte-h="svelte-1d3gcfs">Provide an array of objects containing <code class="code">label</code> and <code class="code">value</code> keys.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
const flavorOptions: AutocompleteOption<string>[] = [
	{ label: 'Vanilla', value: 'vanilla', keywords: 'plain, basic', meta: { healthy: false } },
	{ label: 'Chocolate', value: 'chocolate', keywords: 'dark, white', meta: { healthy: false } },
	{ label: 'Strawberry', value: 'strawberry', keywords: 'fruit', meta: { healthy: true } },
	{ label: 'Neapolitan', value: 'neapolitan', keywords: 'mix, strawberry, chocolate, vanilla', meta: { healthy: false } },
	{ label: 'Pineapple', value: 'pineapple', keywords: 'fruit', meta: { healthy: true } },
	{ label: 'Peach', value: 'peach', keywords: 'fruit', meta: { healthy: true } }
];
				`
              },
              {},
              {}
            )} <p data-svelte-h="svelte-1wlp7za">Create a selection event handler, to handle the result of the selected value.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
function onFlavorSelection(event: CustomEvent<AutocompleteOption<string>>): void {
	inputDemo = event.detail.label;
}
				`
              },
              {},
              {}
            )} <p data-svelte-h="svelte-2bm5tt">Create your search input and bind the search value.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<input class="input" type="search" name="demo" bind:value={inputDemo} placeholder="Search..." />`
              },
              {},
              {}
            )} <p data-svelte-h="svelte-1xflm1p">Implement the autocomplete component.</p> <p data-svelte-h="svelte-u1bysu">To style the autocomplete component you can either apply a <code class="code">class</code> tag directly to the component and set
					your styles, or you can wrap the component in a <code class="code">div</code> and apply your styles to the
					<code class="code">div</code></p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1">
	<Autocomplete bind:input={inputDemo} options={flavorOptions} on:selection={onFlavorSelection} />
</div>
`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `<div class="text-token w-full max-w-sm space-y-2"><input class="input" type="search" name="ac-demo" placeholder="Search..."${add_attribute("value", inputDemo, 0)}> <div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1">${validate_component(Autocomplete, "Autocomplete").$$render(
              $$result,
              { options: flavorOptions, input: inputDemo },
              {
                input: ($$value) => {
                  inputDemo = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div></div>`;
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

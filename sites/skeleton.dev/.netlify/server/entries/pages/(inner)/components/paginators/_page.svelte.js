import { c as create_ssr_component, b as createEventDispatcher, e as escape, h as each, d as add_attribute, v as validate_component } from "../../../../../chunks/ssr.js";
import { faker } from "@faker-js/faker";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { T as Table } from "../../../../../chunks/Table.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>`;
const rightArrow = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>`;
const leftAngles = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>`;
const rightAngles = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>`;
const cBase = "flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4";
const cLabel = "w-full md:w-auto";
const Paginator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesButtonActive;
  let classesBase;
  let classesLabel;
  let classesSelect;
  let classesControls;
  const dispatch = createEventDispatcher();
  let { settings = {
    page: 0,
    limit: 5,
    size: 0,
    amounts: [1, 2, 5, 10]
  } } = $$props;
  let { disabled = false } = $$props;
  let { showPreviousNextButtons = true } = $$props;
  let { showFirstLastButtons = false } = $$props;
  let { showNumerals = false } = $$props;
  let { maxNumerals = 1 } = $$props;
  let { justify = "justify-between" } = $$props;
  let { select = "select min-w-[150px]" } = $$props;
  let { amountText = "Items" } = $$props;
  let { regionControl = "btn-group" } = $$props;
  let { controlVariant = "variant-filled" } = $$props;
  let { controlSeparator = "" } = $$props;
  let { active = "variant-filled-primary" } = $$props;
  let { buttonClasses = "!px-3 !py-1.5 fill-current" } = $$props;
  let { buttonTextPrevious = leftArrow } = $$props;
  let { buttonTextNext = rightArrow } = $$props;
  let { buttonTextFirst = leftAngles } = $$props;
  let { buttonTextLast = rightAngles } = $$props;
  let { separatorText = "of" } = $$props;
  let { labelFirst = "First page" } = $$props;
  let { labelPrevious = "Previous page" } = $$props;
  let { labelNext = "Next page" } = $$props;
  let { labelLast = "Last page" } = $$props;
  let lastPage = Math.max(0, Math.ceil(settings.size / settings.limit - 1));
  let controlPages = getNumerals();
  function onChangeLength() {
    dispatch("amount", settings.limit);
    lastPage = Math.max(0, Math.ceil(settings.size / settings.limit - 1));
    if (settings.page > lastPage) {
      settings.page = lastPage;
    }
    controlPages = getNumerals();
  }
  function getFullNumerals() {
    const pages = [];
    for (let index = 0; index <= lastPage; index++) {
      pages.push(index);
    }
    return pages;
  }
  function getNumerals() {
    const pages = [];
    const isWithinLeftSection = settings.page < maxNumerals + 2;
    const isWithinRightSection = settings.page > lastPage - (maxNumerals + 2);
    if (lastPage <= maxNumerals * 2 + 1)
      return getFullNumerals();
    pages.push(0);
    if (!isWithinLeftSection)
      pages.push(-1);
    if (isWithinLeftSection || isWithinRightSection) {
      const sectionStart = isWithinLeftSection ? 1 : lastPage - (maxNumerals + 2);
      const sectionEnd = isWithinRightSection ? lastPage - 1 : maxNumerals + 2;
      for (let i = sectionStart; i <= sectionEnd; i++) {
        pages.push(i);
      }
    } else {
      for (let i = settings.page - maxNumerals; i <= settings.page + maxNumerals; i++) {
        pages.push(i);
      }
    }
    if (!isWithinRightSection)
      pages.push(-1);
    pages.push(lastPage);
    return pages;
  }
  function updateSize(size) {
    lastPage = Math.max(0, Math.ceil(size / settings.limit - 1));
    controlPages = getNumerals();
  }
  if ($$props.settings === void 0 && $$bindings.settings && settings !== void 0)
    $$bindings.settings(settings);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.showPreviousNextButtons === void 0 && $$bindings.showPreviousNextButtons && showPreviousNextButtons !== void 0)
    $$bindings.showPreviousNextButtons(showPreviousNextButtons);
  if ($$props.showFirstLastButtons === void 0 && $$bindings.showFirstLastButtons && showFirstLastButtons !== void 0)
    $$bindings.showFirstLastButtons(showFirstLastButtons);
  if ($$props.showNumerals === void 0 && $$bindings.showNumerals && showNumerals !== void 0)
    $$bindings.showNumerals(showNumerals);
  if ($$props.maxNumerals === void 0 && $$bindings.maxNumerals && maxNumerals !== void 0)
    $$bindings.maxNumerals(maxNumerals);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.select === void 0 && $$bindings.select && select !== void 0)
    $$bindings.select(select);
  if ($$props.amountText === void 0 && $$bindings.amountText && amountText !== void 0)
    $$bindings.amountText(amountText);
  if ($$props.regionControl === void 0 && $$bindings.regionControl && regionControl !== void 0)
    $$bindings.regionControl(regionControl);
  if ($$props.controlVariant === void 0 && $$bindings.controlVariant && controlVariant !== void 0)
    $$bindings.controlVariant(controlVariant);
  if ($$props.controlSeparator === void 0 && $$bindings.controlSeparator && controlSeparator !== void 0)
    $$bindings.controlSeparator(controlSeparator);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.buttonClasses === void 0 && $$bindings.buttonClasses && buttonClasses !== void 0)
    $$bindings.buttonClasses(buttonClasses);
  if ($$props.buttonTextPrevious === void 0 && $$bindings.buttonTextPrevious && buttonTextPrevious !== void 0)
    $$bindings.buttonTextPrevious(buttonTextPrevious);
  if ($$props.buttonTextNext === void 0 && $$bindings.buttonTextNext && buttonTextNext !== void 0)
    $$bindings.buttonTextNext(buttonTextNext);
  if ($$props.buttonTextFirst === void 0 && $$bindings.buttonTextFirst && buttonTextFirst !== void 0)
    $$bindings.buttonTextFirst(buttonTextFirst);
  if ($$props.buttonTextLast === void 0 && $$bindings.buttonTextLast && buttonTextLast !== void 0)
    $$bindings.buttonTextLast(buttonTextLast);
  if ($$props.separatorText === void 0 && $$bindings.separatorText && separatorText !== void 0)
    $$bindings.separatorText(separatorText);
  if ($$props.labelFirst === void 0 && $$bindings.labelFirst && labelFirst !== void 0)
    $$bindings.labelFirst(labelFirst);
  if ($$props.labelPrevious === void 0 && $$bindings.labelPrevious && labelPrevious !== void 0)
    $$bindings.labelPrevious(labelPrevious);
  if ($$props.labelNext === void 0 && $$bindings.labelNext && labelNext !== void 0)
    $$bindings.labelNext(labelNext);
  if ($$props.labelLast === void 0 && $$bindings.labelLast && labelLast !== void 0)
    $$bindings.labelLast(labelLast);
  classesButtonActive = (page) => {
    return page === settings.page ? `${active} pointer-events-none` : "";
  };
  {
    onChangeLength();
  }
  {
    updateSize(settings.size);
  }
  classesBase = `${cBase} ${justify} ${$$props.class ?? ""}`;
  classesLabel = `${cLabel}`;
  classesSelect = `${select}`;
  classesControls = `${regionControl} ${controlVariant} ${controlSeparator}`;
  return `<div class="${"paginator " + escape(classesBase, true)}" data-testid="paginator"> ${settings.amounts.length ? `<label class="${"paginator-label " + escape(classesLabel, true)}"><select class="${"paginator-select " + escape(classesSelect, true)}" ${disabled ? "disabled" : ""} aria-label="Select Amount">${each(settings.amounts, (amount) => {
    return `<option${add_attribute("value", amount, 0)}>${escape(amount)} ${escape(amountText)}</option>`;
  })}</select></label>` : ``}  <div class="${"paginator-controls " + escape(classesControls, true)}"> ${showFirstLastButtons ? `<button type="button"${add_attribute("aria-label", labelFirst, 0)}${add_attribute("class", buttonClasses, 0)} ${disabled || settings.page === 0 ? "disabled" : ""}><!-- HTML_TAG_START -->${buttonTextFirst}<!-- HTML_TAG_END --></button>` : ``}  ${showPreviousNextButtons ? `<button type="button"${add_attribute("aria-label", labelPrevious, 0)}${add_attribute("class", buttonClasses, 0)} ${disabled || settings.page === 0 ? "disabled" : ""}><!-- HTML_TAG_START -->${buttonTextPrevious}<!-- HTML_TAG_END --></button>` : ``}  ${showNumerals === false ? ` <button type="button" class="${escape(buttonClasses, true) + " pointer-events-none !text-sm"}">${escape(settings.page * settings.limit + 1)}-${escape(Math.min(settings.page * settings.limit + settings.limit, settings.size))} <span class="opacity-50">${escape(separatorText)} ${escape(settings.size)}</span></button>` : ` ${each(controlPages, (page) => {
    return `<button type="button" ${disabled ? "disabled" : ""} class="${escape(buttonClasses, true) + " " + escape(classesButtonActive(page), true)}">${escape(page >= 0 ? page + 1 : "...")} </button>`;
  })}`}  ${showPreviousNextButtons ? `<button type="button"${add_attribute("aria-label", labelNext, 0)}${add_attribute("class", buttonClasses, 0)} ${disabled || (settings.page + 1) * settings.limit >= settings.size ? "disabled" : ""}><!-- HTML_TAG_START -->${buttonTextNext}<!-- HTML_TAG_END --></button>` : ``}  ${showFirstLastButtons ? `<button type="button"${add_attribute("aria-label", labelLast, 0)}${add_attribute("class", buttonClasses, 0)} ${disabled || (settings.page + 1) * settings.limit >= settings.size ? "disabled" : ""}><!-- HTML_TAG_START -->${buttonTextLast}<!-- HTML_TAG_END --></button>` : ``}</div></div>`;
});
const sveldPaginator = { "props": [{ "name": "settings", "kind": "let", "description": "Pass the page setting object.", "type": "PaginationSettings", "value": "{ page: 0, limit: 5, size: 0, amounts: [1, 2, 5, 10] }", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "disabled", "kind": "let", "description": "Sets selection and buttons to disabled state on-demand.", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "showPreviousNextButtons", "kind": "let", "description": "Show Previous and Next buttons.", "type": "boolean", "value": "true", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "showFirstLastButtons", "kind": "let", "description": "Show First and Last buttons.", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "showNumerals", "kind": "let", "description": "Displays a numeric row of page buttons.", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "maxNumerals", "kind": "let", "description": "Maximum number of active page siblings in the numeric row.", "type": "number", "value": "1", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "justify", "kind": "let", "description": "Provide classes to set flexbox justification.", "type": "string", "value": "'justify-between'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "select", "kind": "let", "description": "Provide classes to style the select input.", "type": "string", "value": "'select min-w-[150px]'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "amountText", "kind": "let", "description": "Set the text for the amount selection input.", "type": "string", "value": "'Items'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionControl", "kind": "let", "description": "Set the base classes for the control element.", "type": "string", "value": "'btn-group'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "controlVariant", "kind": "let", "description": "Provide variant style for the control button group.", "type": "string", "value": "'variant-filled'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "controlSeparator", "kind": "let", "description": "Provide separator style for the control button group.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "active", "kind": "let", "description": "Provide arbitrary classes to the active page buttons.", "type": "string", "value": "'variant-filled-primary'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonClasses", "kind": "let", "type": "string", "value": "'!px-3 !py-1.5 fill-current'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonTextPrevious", "kind": "let", "description": "Set the label for the Previous button.", "type": "string", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonTextNext", "kind": "let", "description": "Set the label for the Next button.", "type": "string", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonTextFirst", "kind": "let", "description": "Set the label for the First button.", "type": "string", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonTextLast", "kind": "let", "description": "Set the label for the Last button.", "type": "string", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "separatorText", "kind": "let", "description": "Set the label for the pages separator.", "type": "string", "value": "'of'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "labelFirst", "kind": "let", "description": "Provide the ARIA label for the First page button.", "type": "string", "value": "'First page'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "labelPrevious", "kind": "let", "description": "Provide the ARIA label for the Previous page button.", "type": "string", "value": "'Previous page'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "labelNext", "kind": "let", "description": "Provide the ARIA label for the Next page button.", "type": "string", "value": "'Next page'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "labelLast", "kind": "let", "description": "Provide the ARIA label for the Last page button.", "type": "string", "value": "'Last page'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [], "events": [{ "type": "dispatched", "name": "amount", "detail": "{ length: number }", "description": "Fires when the amount selection input changes." }, { "type": "dispatched", "name": "page", "detail": "{ page: number }", "description": "Fires when the next/back buttons are pressed." }], "typedefs": [] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sourceBodySliced;
  const settings = {
    feature: DocsFeature.Component,
    name: "Paginators",
    description: "Navigate between multiple pages of content.",
    imports: ["Paginator"],
    source: "packages/skeleton/src/lib/components/Paginator",
    components: [{ sveld: sveldPaginator }]
  };
  const sourceHeaders = ["Name", "Symbol", "atomic Number"];
  const sourceBody = Array(27).fill(void 0).map(() => Object.values(faker.science.chemicalElement()));
  let paginationSettings = {
    page: 0,
    limit: 3,
    size: sourceBody.length,
    amounts: [1, 2, 3, 5, sourceBody.length]
  };
  let state = { firstLast: false, previousNext: true };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    sourceBodySliced = sourceBody.slice(paginationSettings.page * paginationSettings.limit, paginationSettings.page * paginationSettings.limit + paginationSettings.limit);
    $$rendered = `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
      usage: () => {
        return ` <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-13rsgog">Numeric Row</h2>  <p data-svelte-h="svelte-1c351pu">Use <code class="code">showNumerals</code> to replace the text information with a row of buttons that allow you to quickly navigate pages. We recommend a small <code class="code">maxNumerals</code> amount if you plan to support mobile devices with limited screen real estate.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<Paginator ... showNumerals maxNumerals={1}></Paginator>`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `<div class="w-full space-y-4 text-token">${validate_component(Table, "Table").$$render(
              $$result,
              {
                source: {
                  head: sourceHeaders,
                  body: sourceBodySliced
                }
              },
              {},
              {}
            )} ${validate_component(Paginator, "Paginator").$$render(
              $$result,
              {
                showNumerals: true,
                settings: paginationSettings
              },
              {
                settings: ($$value) => {
                  paginationSettings = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div>`;
          }
        })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-10zfts6">Client-Side Pagination</h2>  <p data-svelte-h="svelte-w2oaop">Once your paginator component is setup you&#39;ll need to subdivide your local source content. This can be accomplished using Svelte&#39;s
				reactive properties paired with the JavaScript <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" target="_blank" rel="noreferrer">slice</a> method.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `
$: paginatedSource = source.slice(
	paginationSettings.page * paginationSettings.limit,
	paginationSettings.page * paginationSettings.limit + paginationSettings.limit
);`
          },
          {},
          {}
        )} ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `
<ul>
	{#each paginatedSource as row}
		<li>{row}</li>
	{/each}
</ul>
				`
          },
          {},
          {}
        )} <p data-svelte-h="svelte-11f2z5j">Or combine with the <a class="anchor" href="/components/tables">Table</a> component.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `
let tableHeaders: string[] = ['Positions', 'Name', 'Weight', 'Symbol'];
`
          },
          {},
          {}
        )} ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `
<Table source={{ head: tableHeaders, body: paginatedSource }} />
				`
          },
          {},
          {}
        )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-imwwm2">Server-Side Pagination</h2> <p data-svelte-h="svelte-9i3l8">Use the <code class="code">page</code> and <code class="code">amount</code> events to notify your server of pagination updates.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `
function onPageChange(e: CustomEvent): void {
	console.log('event:page', e.detail);
}

function onAmountChange(e: CustomEvent): void {
	console.log('event:amount', e.detail);
}
			`
          },
          {},
          {}
        )} ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `<Paginator ... on:page={onPageChange} on:amount={onAmountChange}></Paginator>`
          },
          {},
          {}
        )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1d5tktc">Handling Reactivity</h2>  <p data-svelte-h="svelte-1o0ilpx">Use the following technique if you wish to update pagination data in a reactive manner. Make sure to update <code class="code">paginationSettings</code> directly, as <a class="anchor" href="https://learn.svelte.dev/tutorial/updating-arrays-and-objects" target="_blank">updating a reference to source will not trigger the reactivity</a>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `
let paginationSettings = {
    page: 0,
    limit: 5,
    size: source.length,
    amounts: [1, 2, 5, 10],
} satisfies PaginationSettings;

$: paginationSettings.size = source.length;
				`
          },
          {},
          {}
        )}</section> <hr>  <section class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4" data-svelte-h="svelte-1aptq7z"><div class="space-y-2"><h2 class="h2">See Also</h2> <p>Utilize a data-driven model to create simple presentational tables.</p></div> <a class="btn variant-ghost-surface" href="/components/tables">Table Component →</a></section> `;
      },
      sandbox: () => {
        return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
          footer: () => {
            return ` <div class="flex justify-center gap-4"><button class="${"btn btn-sm " + escape("variant-soft", true)}">First &amp; Last</button> <button class="${"btn btn-sm " + escape("variant-filled", true)}">Previous &amp; Next</button></div> `;
          },
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `const source = [ /* any array of objects */ ];`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
let paginationSettings = {
	page: 0,
	limit: 5,
	size: source.length,
	amounts: [1,2,5,10],
} satisfies PaginationSettings;
					`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<Paginator
	bind:settings={paginationSettings}
	showFirstLastButtons="{${state.firstLast}}"
	showPreviousNextButtons="{${state.previousNext}}"
/>
`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `<div class="w-full space-y-4 text-token">${validate_component(Table, "Table").$$render(
              $$result,
              {
                source: {
                  head: sourceHeaders,
                  body: sourceBodySliced
                }
              },
              {},
              {}
            )} ${validate_component(Paginator, "Paginator").$$render(
              $$result,
              {
                showFirstLastButtons: state.firstLast,
                showPreviousNextButtons: state.previousNext,
                settings: paginationSettings
              },
              {
                settings: ($$value) => {
                  paginationSettings = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div>`;
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

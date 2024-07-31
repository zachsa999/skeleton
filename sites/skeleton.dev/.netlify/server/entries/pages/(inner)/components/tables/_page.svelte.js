import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../../../chunks/ssr.js";
import { w as writable } from "../../../../../chunks/index.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { T as Table } from "../../../../../chunks/Table.js";
import { T as TabGroup, a as Tab } from "../../../../../chunks/Tab.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
function tableSourceMapper(source, keys) {
  return source.map((row) => {
    const mappedRow = {};
    keys.forEach((key) => mappedRow[key] = row[key]);
    return mappedRow;
  });
}
function tableSourceValues(source) {
  return source.map((row) => Object.values(row));
}
function tableMapperValues(source, keys) {
  return tableSourceValues(tableSourceMapper(source, keys));
}
const sveldTable = { "props": [{ "name": "source", "kind": "let", "description": "Provide the full set of table source data.", "type": "TableSource", "isFunction": false, "isFunctionDeclaration": false, "isRequired": true, "constant": false, "reactive": false }, { "name": "interactive", "kind": "let", "description": "Enables row hover style and `on:selected` event when rows are clicked.", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "element", "kind": "let", "description": "Override the Tailwind Element class. Replace this for a headless UI.", "type": "string", "value": "'table'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "text", "kind": "let", "description": "Provide classes to set the table text size.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "color", "kind": "let", "description": "Provide classes to set the table text color.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionHead", "kind": "let", "description": "Provide arbitrary classes for the table head.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionHeadCell", "kind": "let", "description": "Provide arbitrary classes for the table head cells.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionBody", "kind": "let", "description": "Provide arbitrary classes for the table body.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionCell", "kind": "let", "description": "Provide arbitrary classes for the table cells.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionFoot", "kind": "let", "description": "Provide arbitrary classes for the table foot.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionFootCell", "kind": "let", "description": "Provide arbitrary classes for the table foot cells.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [], "events": [{ "type": "dispatched", "name": "selected", "detail": "rowMetaData", "description": "Fires when a table row is clicked." }], "typedefs": [] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $storeService, $$unsubscribe_storeService;
  let storeService = writable("tableMapperValues");
  $$unsubscribe_storeService = subscribe(storeService, (value) => $storeService = value);
  const settings = {
    feature: DocsFeature.Component,
    name: "Tables",
    description: "Utilize a data-driven model to create simple presentational tables.",
    imports: ["Table"],
    types: ["TableSource"],
    source: "packages/skeleton/src/lib/components/Table",
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/grid/",
    components: [{ sveld: sveldTable }],
    keyboard: [
      [
        '<kbd class="kbd">Right Arrow</kbd>',
        "Moves focus one cell to the right. If focus is on the right-most cell in the row, focus does not move."
      ],
      [
        '<kbd class="kbd">Left Arrow</kbd>',
        "Moves focus one cell to the left. If focus is on the left-most cell in the row, focus does not move."
      ],
      [
        '<kbd class="kbd">Down Arrow</kbd>',
        "Moves focus one cell down. If focus is on the bottom cell in the column, focus does not move."
      ],
      [
        '<kbd class="kbd">Up Arrow</kbd>',
        "Moves focus one cell Up. If focus is on the top cell in the column, focus does not move."
      ],
      [
        '<kbd class="kbd">Home</kbd>',
        "Moves focus to the first cell in the row that contains focus."
      ],
      [
        '<kbd class="kbd">End</kbd>',
        " Moves focus to the last cell in the row that contains focus."
      ],
      [
        '<kbd class="kbd">Enter</kbd> or <kbd class="kbd">Space</kbd>',
        "Triggers the on:selected event."
      ]
    ]
  };
  let sourceData = [
    {
      position: 1,
      name: "Hydrogen",
      weight: 1.0079,
      symbol: "H"
    },
    {
      position: 2,
      name: "Helium",
      weight: 4.0026,
      symbol: "He"
    },
    {
      position: 3,
      name: "Lithium",
      weight: 6.941,
      symbol: "Li"
    },
    {
      position: 4,
      name: "Beryllium",
      weight: 9.0122,
      symbol: "Be"
    },
    {
      position: 5,
      name: "Boron",
      weight: 10.811,
      symbol: "B"
    }
  ];
  const tableSimple = {
    head: ["Symbol", "Name", "weight"],
    body: tableMapperValues(sourceData, ["symbol", "name", "weight"]),
    meta: tableMapperValues(sourceData, ["name", "symbol", "weight"]),
    foot: [
      "Total Elements",
      "",
      `<span class="badge variant-soft-primary">${sourceData.length} Elements</span>`
    ]
  };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
      usage: () => {
        return `  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-z3l1p2">Interactive Mode</h2> <p data-svelte-h="svelte-1vw1szm">Use the <code class="code">interactive</code> to make the table interactive. When a row is clicked,
				<code class="code">on:selected</code>
				will pass the row&#39;s
				<code class="code">meta</code> value.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `<Table ... interactive={true} on:selected={mySelectionHandler} />`
          },
          {},
          {}
        )}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-v3876j">Handling Reactive Data</h2>  <p data-svelte-h="svelte-3ox544">In some scenarios you may need need to reactive manner. Since <code class="code">TableSource</code> is a Javascript object, it will need to follow Svelte&#39;s rules for <a class="anchor" href="https://learn.svelte.dev/tutorial/updating-arrays-and-objects" target="_blank" rel="noreferrer">reactive object updates</a>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `
function setTableSource(): TableSource {
	return {
		head: ['Symbol', 'Name', 'weight'],
		body: tableMapperValues(sourceData, ['symbol', 'name', 'weight']),
		meta: tableMapperValues(sourceData, ['name', 'symbol', 'weight']),
		foot: ['Total Elements', '', \`<span class="badge variant-soft-primary">${sourceData.length} Elements</span>\`]
	};
}

// If sourceData updates, set the new TableSource values
$: tableSimple = sourceData ? setTableSource() : undefined;
		`
          },
          {},
          {}
        )}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1dovgy3">Table Utilities</h2> <p data-svelte-h="svelte-1mcug7p">The following utility methods allow you to format your source data for use within a Table component.</p> ${validate_component(TabGroup, "TabGroup").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                name: "tableMapperValues",
                value: "tableMapperValues",
                group: $storeService
              },
              {
                group: ($$value) => {
                  $storeService = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Mapper Values`;
                }
              }
            )} ${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                name: "tableSourceMapper",
                value: "tableSourceMapper",
                group: $storeService
              },
              {
                group: ($$value) => {
                  $storeService = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Source Mapper`;
                }
              }
            )} ${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                name: "tableSourceValues",
                value: "tableSourceValues",
                group: $storeService
              },
              {
                group: ($$value) => {
                  $storeService = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Source Values`;
                }
              }
            )}`;
          }
        })} ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `import { ${$storeService} } from '@skeletonlabs/skeleton';`
          },
          {},
          {}
        )} ${$storeService === "tableMapperValues" ? ` <p data-svelte-h="svelte-k746b0">Combines Source Mapper and Source Values methods to handle both operations at once. This allows you to use the same source object,
					but format differently between display (body) and selected response (meta). It&#39;s recommended to use this in most use cases.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `
tableMapperValues(sourceData, ['name', 'symbol', 'weight'])

//	[
//		['Hydrogen', 'H', '1.0079'],
//		['Helium', 'He', '4.0026'],
//		...
//	]
				`
          },
          {},
          {}
        )}` : `${$storeService === "tableSourceMapper" ? ` <p data-svelte-h="svelte-1tjvms6">Allows you to both whitelist object keys and map the order of display.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `
tableSourceMapper(sourceData, ['name', 'symbol', 'weight']);

//[
//		{ name: 'Hydrogen', symbol: 'H', weight: '1.0079' },
//		{ name: 'Helium', symbol: 'He', weight: '4.0026' },
//		...
//]
					`
          },
          {},
          {}
        )}` : `${$storeService === "tableSourceValues" ? ` <p data-svelte-h="svelte-cygiju">Returns an array of array values from an array of objects. This is the desired format for <code class="code">TableSource</code> <em>body</em>
					and <em>meta</em>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `
tableSourceValues(sourceData);

//[
//		[ 1, 'Hydrogen', '1.0079', 'H' ],
//		[ 2, 'Helium', '4.0026', 'He' ],
//		...
//]
`
          },
          {},
          {}
        )}` : ``}`}`}</section>     `;
      },
      sandbox: () => {
        return `  <aside class="alert variant-ghost-error" data-svelte-h="svelte-u8kt9s"><i class="fa-solid fa-triangle-exclamation text-4xl"></i> <div class="alert-message" data-toc-ignore><h3 class="h3" data-toc-ignore>Deprecated</h3>  <p>This feature is being phased out as transition to <a class="underline" href="https://github.com/skeletonlabs/skeleton/discussions/2375" target="_blank">Skeleton v3</a>. This will remain functional for all 2.x releases, but recommend you migrate to <a class="underline" href="/elements/tables">table elements</a> as soon as possible.</p></div> <div class="alert-actions"><a class="btn variant-filled" href="https://github.com/skeletonlabs/skeleton/issues/2388" target="_blank">Learn More</a></div></aside> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
          source: () => {
            return `<p data-svelte-h="svelte-qkk9pn">First, you&#39;ll need a set of source data.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
const sourceData = [
	{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
	{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
	{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
	{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
	{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
];
				`
              },
              {},
              {}
            )} <p data-svelte-h="svelte-1y81wcn">Create a <code class="code">TableSource</code> object. use <code class="code">body: tableMapperValues(sourceData)</code> to map the
					data.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
const tableSimple: TableSource = {
	// A list of heading labels.
	head: ['Name', 'Symbol', 'Weight'],
	// The data visibly shown in your table body UI.
	body: tableMapperValues(sourceData, ['name', 'symbol', 'weight']),
	// Optional: The data returned when interactive is enabled and a row is clicked.
	meta: tableMapperValues(sourceData, ['position', 'name', 'symbol', 'weight']),
	// Optional: A list of footer labels.
	foot: ['Total', '', '<code class="code">${sourceData.length}</code>']
};
				`
              },
              {},
              {}
            )} <p data-svelte-h="svelte-itrfcx">Finally, we pass our table source data to the component for display.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<Table source={tableSimple} />`
              },
              {},
              {}
            )} `;
          },
          footer: () => {
            return `<p class="block text-center" data-svelte-h="svelte-egtsih">Try viewing your console log when tapping a row.</p> `;
          },
          preview: () => {
            return `${validate_component(Table, "Table").$$render(
              $$result,
              {
                source: tableSimple,
                interactive: true,
                text: "text-token"
              },
              {},
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
  $$unsubscribe_storeService();
  return $$rendered;
});
export {
  Page as default
};

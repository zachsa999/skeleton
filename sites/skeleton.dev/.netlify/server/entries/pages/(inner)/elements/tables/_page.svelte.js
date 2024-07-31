import { c as create_ssr_component, v as validate_component, h as each, e as escape } from "../../../../../chunks/ssr.js";
import { faker } from "@faker-js/faker";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { T as TabGroup, a as Tab } from "../../../../../chunks/Tab.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Element,
    name: "Tables",
    description: "Provides a set of styles for native HTML table elements.",
    stylesheetIncludes: ["all", "elements"],
    stylesheets: ["elements/tables"],
    source: "packages/plugin/src/styles/components/tables.css",
    classes: [
      [
        '<code class="code">.table-container</code>',
        "-",
        "Apply to a wrapping parent element to enable responsive scrolling."
      ],
      [
        '<code class="code">.table</code>',
        "-",
        "Apply to a native HTML table element to add table styles."
      ],
      [
        '<code class="code">.table-compact</code>',
        "-",
        "Apply to the native HTML element to set shorter row spacing."
      ],
      [
        '<code class="code">.table-comfortable</code>',
        "-",
        "Apply to the native HTML element to set taller row spacing."
      ],
      [
        '<code class="code">.table-hover</code>',
        "-",
        "Apply to a table element to enable a subtle hover effect on rows."
      ],
      [
        '<code class="code">.table-interactive</code>',
        "-",
        "Apply to a table element to enable a visible hover effect and pointer cursor."
      ],
      [
        '<code class="code">.table-sort-asc</code>',
        "-",
        "Apply to a table heading cell to add a down arrow indicating ascending sort."
      ],
      [
        '<code class="code">.table-sort-dsc</code>',
        "-",
        "Apply to a table heading cell to add an up arrow indicating descending sort."
      ],
      [
        '<code class="code">.table-row-checked</code>',
        "-",
        "Apply to a table body row to indicate selection state."
      ],
      [
        '<code class="code">.table-cell-fit</code>',
        "-",
        "Apply to a table cell to auto-fit to the content widths."
      ]
    ]
  };
  let tabSet = 0;
  const tableArr = Array(5).fill(void 0).map(() => faker.science.chemicalElement());
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
      usage: () => {
        return ` <p data-svelte-h="svelte-1l0xxfu">Wrap a <code class="code">.table-container</code> element around any native HTML table with the <code class="code">.table</code> class
			applied to create a responsive table.</p>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1c4hrnd">Options</h2> ${validate_component(TabGroup, "TabGroup").$$render($$result, { regionPanel: "space-y-4" }, {}, {
          panel: () => {
            return ` ${tabSet === 0 ? ` <p data-svelte-h="svelte-cdt0r1">Apply classes <code class="code">.table-compact</code> or <code class="code">.table-comfortable</code> to the <em>table</em> for
							tighter or looser row spacing.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<table class="table-compact">...</table>`
              },
              {},
              {}
            )}` : `${tabSet === 1 ? ` <p data-svelte-h="svelte-1un1ya">Apply the <code class="code">.table-hover</code> class to add a subtle hover style which can be helpful when scanning data
							horizontally. You can also use the <code class="code">.table-interactive</code> class if the table rows is intended to be interactive
							on click. Avoid using both classes.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<table class="table-hover">...</table>`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<table class="table-interactive">...</table>`
              },
              {},
              {}
            )}` : `${tabSet === 2 ? ` <p data-svelte-h="svelte-57hnhx">Apply the <code class="code">.table-row-checked</code> class to a table body row to indicate an active selection state.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<tr class="table-row-checked">...</tr>`
              },
              {},
              {}
            )}` : `${tabSet === 3 ? ` <p data-svelte-h="svelte-hgqecj">Use the <code class="code">.table-cell-fit</code> class on a cell element to fit the cell to the content widths. This can be useful
							for small columns that contain elements such as avatars or IDs. Be sure to apply to both the table header and table cell.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<th class="table-cell-fit">Avatar</th>`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<td class="table-cell-fit">(avatar)</td>`
              },
              {},
              {}
            )}` : `${tabSet === 4 ? ` <p data-svelte-h="svelte-11qmdi0">Apply <code class="code">.table-sort-asc</code> or <code class="code">.table-sort-dsc</code> to the <em>table head</em> elements
							to sort by ascending or descending order respectively.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<th class="table-sort-asc">Skeleton</th>`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<th class="table-sort-dsc">Skeleton</th>`
              },
              {},
              {}
            )}` : ``}`}`}`}`} `;
          },
          default: () => {
            return `${validate_component(Tab, "Tab").$$render(
              $$result,
              { name: "tab1", value: 0, group: tabSet },
              {
                group: ($$value) => {
                  tabSet = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Spacing`;
                }
              }
            )} ${validate_component(Tab, "Tab").$$render(
              $$result,
              { name: "tab2", value: 1, group: tabSet },
              {
                group: ($$value) => {
                  tabSet = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Hover`;
                }
              }
            )} ${validate_component(Tab, "Tab").$$render(
              $$result,
              { name: "tab3", value: 2, group: tabSet },
              {
                group: ($$value) => {
                  tabSet = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Selection`;
                }
              }
            )} ${validate_component(Tab, "Tab").$$render(
              $$result,
              { name: "tab3", value: 3, group: tabSet },
              {
                group: ($$value) => {
                  tabSet = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Fit Width`;
                }
              }
            )} ${validate_component(Tab, "Tab").$$render(
              $$result,
              { name: "tab3", value: 4, group: tabSet },
              {
                group: ($$value) => {
                  tabSet = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Sorting`;
                }
              }
            )} `;
          }
        })}</section>  <section class="space-y-4" data-svelte-h="svelte-awlsuo"><h2 class="h2">Datatables</h2> <div class="card p-4 space-y-4"><div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4"><p>View our guide for integrating datatable features into your tables.</p> <a class="btn variant-ghost-surface" href="/docs/ssd">Datatable Integration →</a></div></div></section> `;
      },
      sandbox: () => {
        return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<!-- Responsive Container (recommended) -->
<div class="table-container">
	<!-- Native Table Element -->
	<table class="table table-hover">
		<thead>
			<tr>
				<th>Position</th>
				<th>Name</th>
				<th>Symbol</th>
				<th>Weight</th>
			</tr>
		</thead>
		<tbody>
			{#each tableArr as row, i}
				<tr>
					<td>{row.position}</td>
					<td>{row.name}</td>
					<td>{row.symbol}</td>
					<td>{row.weight}</td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<th colspan="3">Calculated Total Weight</th>
				<td>{totalWeight}</td>
			</tr>
		</tfoot>
	</table>
</div>
`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `<div class="table-container text-token"><table class="table table-hover"><thead data-svelte-h="svelte-xsmz87"><tr><th>Name</th> <th>Symbol</th> <th>Atomic Number</th></tr></thead> <tbody>${each(tableArr, (row) => {
              return `<tr><td>${escape(row.name)}</td> <td>${escape(row.symbol)}</td> <td><span class="badge variant-soft-primary">${escape(row.atomicNumber)}</span></td> </tr>`;
            })}</tbody> <tfoot><tr><th colspan="2" data-svelte-h="svelte-12uvuoe">Total Elements</th> <td>${escape(tableArr.length)} Elements</td></tr></tfoot></table></div>`;
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

import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { L as LayoutPage } from "../../../../../chunks/LayoutPage.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { T as TabGroup, a as Tab } from "../../../../../chunks/Tab.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const ClientSSD = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="space-y-4"> <section class="space-y-4"><h3 class="h3" data-toc-ignore data-svelte-h="svelte-ekyu8d">1. Loading Data</h3> <p data-svelte-h="svelte-sqq1jt">To begin, let&#39;s add fake dataset in <code class="code">/src/lib/static/data.ts</code>. View a full reference
			<a class="anchor" href="https://vincjo.fr/datatables/tutorial/html-table" target="_blank">under the data tab.</a></p> ${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      language: "ts",
      code: `
export default [
    { id: 1, first_name: 'Tobie', last_name: 'Vint', email: 'tvint0@fotki.com' },
    { id: 2, first_name: 'Zacharias', last_name: 'Cerman', email: 'zcerman1@sciencedirect.com' },
    { id: 3, first_name: 'Gérianna', last_name: 'Bunn', email: 'gbunn2@foxnews.com' },
    { id: 4, first_name: 'Bee', last_name: 'Saurin', email: 'bsaurin3@live.com' },
    { id: 5, first_name: 'Méyère', last_name: 'Granulette', email: 'mgranul4@yellowbook.com' }
    // ...
];
        `
    },
    {},
    {}
  )}</section>  <section class="space-y-4"><h3 class="h3" data-toc-ignore data-svelte-h="svelte-18pn98e">2. The Datatable Component</h3> <p data-svelte-h="svelte-6mqo00">Create the new Datatable component in <code class="code">/src/lib/components/Datatable.svelte</code>, import your custom dataset, as
			well as the
			<code class="code">DataHandler</code> from Svelte Simple Datatables. Then, intialize the <code class="code">handler</code> and
			<code class="code">rows</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      language: "ts",
      code: `
import { DataHandler } from '@vincjo/datatables';
import data from '$lib/static/data';

const handler = new DataHandler(data, { rowsPerPage: 5 });
const rows = handler.getRows();
        `
    },
    {},
    {}
  )} <p data-svelte-h="svelte-1t5a74i">Take care to configure your the markup to match the dataset.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      language: "html",
      code: `
<div class="table-container space-y-4">
    <table class="table table-hover table-compact table-auto w-full">
        <thead>
            <tr>
                <td>First name</td>
                <td>Last name</td>
                <td>Email</td>
            </tr>
        </thead>
        <tbody>
            {#each $rows as row}
                <tr>
                    <td>{row.first_name}</td>
                    <td>{row.last_name}</td>
                    <td>{row.email}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
        `
    },
    {},
    {}
  )}</section>  <section class="space-y-4"><h3 class="h3" data-toc-ignore data-svelte-h="svelte-2m8j1l">3. Accessory Components</h3> <p data-svelte-h="svelte-bul5ct">Let&#39;s create, import, and add our new accessory components. Note that these will not yet be functional.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      language: "ts",
      code: `
import Search from '$lib/components/Search.svelte';
import ThFilter from '$lib/components/ThFilter.svelte';
import ThSort from '$lib/components/ThSort.svelte';
import RowCount from '$lib/components/RowCount.svelte';
import RowsPerPage from '$lib/components/RowsPerPage.svelte';
import Pagination from '$lib/components/Pagination.svelte';
        `
    },
    {},
    {}
  )} ${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      language: "html",
      code: `
<div class=" overflow-x-auto space-y-2">
    <header class="flex justify-between gap-4">
        <!-- <Search {handler} /> -->
        <!-- <RowsPerPage {handler} /> -->
    </header>
    <table class="table table-hover table-compact table-auto w-full ">
        <thead>
            <tr>
                <!-- <ThSort {handler} orderBy="first_name">First name</ThSort>
                <ThSort {handler} orderBy="last_name">Last name</ThSort>
                <ThSort {handler} orderBy="email">Email</ThSort> -->
            </tr>
            <tr>
                <!-- <ThFilter {handler} filterBy="first_name" />
                <ThFilter {handler} filterBy="last_name" />
                <ThFilter {handler} filterBy="email" /> -->
            </tr>
        </thead>
        <tbody>
            {#each $rows as row}
                <tr>
                    <td>{row.first_name}</td>
                    <td>{row.last_name}</td>
                    <td>{row.email}</td>
                </tr>
            {/each}
        </tbody>
    </table>
    <footer class="flex justify-between">
        <!-- <RowCount {handler} /> -->
        <!-- <Pagination {handler} /> -->
    </footer>
</div>
        `
    },
    {},
    {}
  )} <p data-svelte-h="svelte-qhbzz8">For brevity, find the full source code for <code class="code">&lt;Datatable /&gt;</code> and all accessory components on GitHub.</p> <div class="card variant-glass p-4 py-10 flex justify-center items-center gap-4" data-svelte-h="svelte-gz1ubp"><a class="btn variant-filled" href="https://github.com/skeletonlabs/skeleton-datatables-integration/tree/main/src/lib/components/client/Datatable.svelte" target="_blank"><i class="fa-brands fa-github"></i> <span>Datatable</span></a> <a class="btn variant-filled" href="https://github.com/skeletonlabs/skeleton-datatables-integration/tree/main/src/lib/components/client" target="_blank"><i class="fa-brands fa-github"></i> <span>Accessories</span></a></div></section> </div>`;
});
const ServerSSD = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="space-y-4"> <section class="space-y-4"><aside class="alert variant-ghost-warning" data-svelte-h="svelte-626dfj"><i class="fa-solid fa-triangle-exclamation text-4xl"></i> <div class="alert-message" data-toc-ignore><p>When using SvelteKit SSR, make sure to utilize <code class="code">@vincjo/datatables/remote</code>.</p></div></aside> <p data-svelte-h="svelte-77vy4h">By utilizing <code class="code">/remote</code>, this provides two additional functions - Promise-based rows, as well as an invalidate
			function.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      language: "ts",
      code: `
onChange: (state: State) => Promise\`<Row[]>\`  
invalidate: () => void
    `
    },
    {},
    {}
  )}</section>  <section class="space-y-4"><h3 class="h3" data-toc-ignore data-svelte-h="svelte-ekyu8d">1. Loading Data</h3> <p data-svelte-h="svelte-1gjifcz">For data, we&#39;ll use <a class="anchor" href="https://jsonplaceholder.typicode.com/" target="_blank">JSON Placeholder</a> to act as a
			mock API and allow for RESTful calls. In a real world application, we would recommend using
			<a href="https://kit.svelte.dev/docs/load" target="_blank" class="anchor">SvelteKit load functions</a>. However, for this guide, we&#39;ll
			implement a simple help function in <code class="code">/src/lib/api.ts</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      language: "ts",
      code: `
import type { State } from '@vincjo/datatables/remote';

export const reload = async (state: State) => {
	const response = await fetch(\`https://jsonplaceholder.typicode.com/todos?\${getParams(state)}\`);
	return response.json();
};

const getParams = (state: State) => {
	const { pageNumber, rowsPerPage, sort, filters, search } = state;

	let params = \`_page=\${pageNumber}\`;

	if (rowsPerPage) {
		params += \`&_limit=\${rowsPerPage}\`;
	}
	if (sort) {
		params += \`&_sort=\${sort.orderBy}&_order=\${sort.direction}\`;
	}
	if (filters) {
		params += filters.map(({ filterBy, value }) => \`&\${filterBy}=\${value}\`).join();
	}
	if (search) {
		params += \`&q=\${search}\`;
	}
	return params;
};
    `
    },
    {},
    {}
  )} <p data-svelte-h="svelte-lfth2i">This will return data in the following structure.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      language: "json",
      code: `
[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
	// ...
]
    `
    },
    {},
    {}
  )}</section>  <section class="space-y-4"><h3 class="h3" data-toc-ignore data-svelte-h="svelte-18pn98e">2. The Datatable Component</h3> <p data-svelte-h="svelte-1r5p83c">Create the new Datatable component in <code class="code">/src/lib/components/Datatable.svelte</code>. Import
			<code class="code">reload</code>
			from <code class="code">api.ts</code>. Then import <code class="code">DataHandler</code> and the
			<code class="code">State</code>
			and <code class="code">Row</code> types from <code class="code">/remote</code>. When initializing handler and rows, you can use
			<code class="code">rowsPerPage</code>
			and <code class="code">totalRows</code> in order to limit the number of API calls. Finally, we&#39;ll use
			<code class="code">/remote</code> from Svelte Simple Datatables, as well as <code class="code">reload</code> from
			<code class="code">api.ts</code> to handle state.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      language: "ts",
      code: `
import { reload } from '$lib/data/api';

import { DataHandler } from '@vincjo/datatables/remote';
import type { State, Row } from '@vincjo/datatables/remote';

const handler = new DataHandler<Row>([], { rowsPerPage: 5, totalRows: 200 });
const rows = handler.getRows();

handler.onChange((state: State) => reload(state));
handler.invalidate();
    `
    },
    {},
    {}
  )} <p data-svelte-h="svelte-lcnb0j">Take care to configure your the markup to match the API&#39;s data structure.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      language: "html",
      code: `
<div class="table-container space-y-4">
    <table class="table table-hover table-compact table-auto w-full">
        <thead>
            <tr>
                <td>ID</td>
                <td>Title</td>
                <td>Completed</td>
            </tr>
        </thead>
        <tbody>
            {#each $rows as row}
                <tr>
					<td>{row.id}</td>
					<td>{row.title}</td>
					<!-- check or x-mark -->
					<td>{@html row.completed ? '&check;' : '&#x2715;'}</td>
				</tr>
            {/each}
        </tbody>
    </table>
</div>
    `
    },
    {},
    {}
  )}</section>  <section class="space-y-4"><h3 class="h3" data-toc-ignore data-svelte-h="svelte-2m8j1l">3. Accessory Components</h3> <p data-svelte-h="svelte-bul5ct">Let&#39;s create, import, and add our new accessory components. Note that these will not yet be functional.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      language: "ts",
      code: `
import Search from '$lib/components/Search.svelte';
import ThFilter from '$lib/components/ThFilter.svelte';
import ThSort from '$lib/components/ThSort.svelte';
import RowCount from '$lib/components/RowCount.svelte';
import RowsPerPage from '$lib/components/RowsPerPage.svelte';
import Pagination from '$lib/components/Pagination.svelte';
    `
    },
    {},
    {}
  )} ${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      language: "html",
      code: `
<div class=" overflow-x-auto space-y-2">
    <header class="flex justify-between gap-4">
		<!-- <Search {handler} /> -->
		<!-- <RowsPerPage {handler} /> -->
	</header>
	<table class="table table-hover table-compact table-auto w-full">
		<thead>
			<tr>
				<!-- <ThSort {handler} orderBy="id">ID</ThSort>
				<ThSort {handler} orderBy="title">Title</ThSort>
				<ThSort {handler} orderBy="completed">Completed</ThSort> -->
			</tr>
			<tr>
				<!-- <ThFilter {handler} filterBy="id" />
				<ThFilter {handler} filterBy="title" />
				<ThFilter {handler} filterBy="completed" /> -->
			</tr>
		</thead>
		<tbody>
			{#each $rows as row}
				<tr>
					<td>{row.id}</td>
					<td>{row.title}</td>
					<!-- check or x-mark -->
					<td>{@html row.completed ? '&check;' : '&#x2715;'}</td>
				</tr>
			{/each}
		</tbody>
	</table>
	<footer class="flex justify-between">
		<!-- <RowCount {handler} /> -->
		<!-- <Pagination {handler} /> -->
	</footer>
</div>
    `
    },
    {},
    {}
  )} <p data-svelte-h="svelte-qhbzz8">For brevity, find the full source code for <code class="code">&lt;Datatable /&gt;</code> and all accessory components on GitHub.</p> <div class="card variant-glass p-4 py-10 flex justify-center items-center gap-4" data-svelte-h="svelte-1ut8gsl"><a class="btn variant-filled" href="https://github.com/skeletonlabs/skeleton-datatables-integration/tree/main/src/lib/components/server/Datatable.svelte" target="_blank"><i class="fa-brands fa-github"></i> <span>Datatable</span></a> <a class="btn variant-filled" href="https://github.com/skeletonlabs/skeleton-datatables-integration/tree/main/src/lib/components/server" target="_blank"><i class="fa-brands fa-github"></i> <span>Accessories</span></a></div></section> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tabSelected = "client";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(LayoutPage, "LayoutPage").$$render($$result, {}, {}, {
      default: () => {
        return ` <header class="space-y-4" data-svelte-h="svelte-1b247ed"><h1 class="h1">Svelte Simple Datatables</h1> <p>The following guide will cover the basics of integrating Skeleton and <a class="anchor" href="https://vincjo.fr/datatables/home" target="_blank">Svelte Simple Datatables</a>.</p></header> <hr>  <section class="space-y-4" data-svelte-h="svelte-xwqtjj"><p class="text-xl"><a class="anchor" href="https://vincjo.fr/datatables/home" target="_blank">Svelte Simple Datatables</a>
			is a headless library for creating datatable components with Svelte. It provides a simple API to dynamically interact with iterable data
			on the client-side, allowing you to filter, paginate, sort, and select data. It can handle server-side data processing, supports Typescript,
			and has no other required dependencies.</p></section>  <section class="space-y-4" data-svelte-h="svelte-1bh5p8q"><h2 class="h2">Introduction</h2> <p>Skeleton provides a simple <a class="anchor" href="/components/tables">Table Component</a> for implementing tabular data for
			presentational purposes. However, this lacks more powerful features, such as search, sort, and filter. This is where Svelte Simple
			Datatables comes in. To integrate this, we&#39;ll opt for Skeleton&#39;s
			<a class="anchor" href="/elements/tables">Table Elements</a>, which provided themed styles to native HTML tables. The end result will
			be a new <code class="code">&lt;Datatable /&gt;</code> component, which you may use directly in your own application.</p> <img class="rounded-lg" src="https://raw.githubusercontent.com/skeletonlabs/skeleton-datatables-integration/main/static/themes.gif" alt="themed datatables"> <p>Additionally, we&#39;ll also create a number of accessory components to handle search, filter, sort, and pagination features. These
			smaller components will help augment and extend the overall datatable component.</p> <img src="https://raw.githubusercontent.com/skeletonlabs/skeleton-datatables-integration/main/static/components.png" alt="accessory components diagram"></section>  <section class="space-y-4" data-svelte-h="svelte-dkrjep"><h2 class="h2">Starter Template</h2> <p>If you&#39;re looking for a quick start or reference project, please refer to our opinionated template on GitHub.</p> <div class="card variant-glass p-4 py-10 text-center"><a class="btn variant-filled" href="https://github.com/skeletonlabs/skeleton-datatables-integration" target="_blank"><i class="fa-brands fa-github"></i> <span>View Starter Template</span> <i class="fa-solid fa-up-right-from-square"></i></a></div></section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1hz6u7y">Getting Started</h2> <h3 class="h3" data-svelte-h="svelte-o37h0a">Install Dependencies</h3> <p data-svelte-h="svelte-16crvaj">Add Svelte Simple Datables to your Skeleton project by running the following command.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "shell",
            code: `
npm i @vincjo/datatables
		`
          },
          {},
          {}
        )} <h3 class="h3" data-svelte-h="svelte-1lpl33c">Project Structure</h3> <p data-svelte-h="svelte-fbztpi">Next, let&#39;s plan out our overall project structure.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "shell",
            code: `
src
├── lib
|	├── data
|	|	└── data.ts / api.ts
|	└── components
|	    ├── Pagination.svelte
|	    ├── Search.svelte
|	    ├── RowCount.svelte
|	    ├── RowsPerPage.svelte
|	    ├── ThFilter.svelte
|	    └── ThSort.svelte
└── routes
	├── Datatable.svelte
	└── +page.svelte
`
          },
          {},
          {}
        )} <dl class="list-dl" data-svelte-h="svelte-jies3x"><div><span class="badge-icon p-4 variant-soft-primary"><i class="fa-solid fa-code"></i></span> <span class="flex-auto"><dt><code class="code">/lib/data</code></dt> <dd>Create <code class="code">data.ts</code> if you are loading data from the client or <code class="code">api.ts</code> if your data
						is coming from the server. This will be explained further on, but for now just create the blank Typescript file.</dd></span> </div><div><span class="badge-icon p-4 variant-soft-primary"><i class="fa-solid fa-code"></i></span> <span class="flex-auto"><dt><code class="code">/lib/components</code></dt> <dd>All of the files in this directory will be used for accessory components.</dd></span> </div><div><span class="badge-icon p-4 variant-soft-primary"><i class="fa-solid fa-code"></i></span> <span class="flex-auto"><dt><code class="code">/routes/Datatable.svelte</code></dt> <dd>This file will contain the
						<code class="code">&lt;Datatable /&gt;</code>
						component, the associated logic, and render the accessory components.</dd></span> </div><div><span class="badge-icon p-4 variant-soft-primary"><i class="fa-solid fa-code"></i></span> <span class="flex-auto"><dt><code class="code">/routes/+page.svelte</code></dt> <dd>This is where we&#39;ll render and access the
						<code class="code">&lt;Datatable /&gt;</code>
						component in this example.</dd></span></div></dl></section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1vr08xv">Creating the Components</h2> <p data-svelte-h="svelte-1gx2q4q">Each component will need to be configured based on the scope. Select your preference below.</p> ${validate_component(TabGroup, "TabGroup").$$render($$result, {}, {}, {
          panel: () => {
            return ` ${tabSelected === "client" ? `${validate_component(ClientSSD, "Client").$$render($$result, {}, {}, {})}` : `${tabSelected === "server" ? `${validate_component(ServerSSD, "Server").$$render($$result, {}, {}, {})}` : ``}`} `;
          },
          default: () => {
            return `${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                name: "tabClient",
                value: "client",
                group: tabSelected
              },
              {
                group: ($$value) => {
                  tabSelected = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Client-Based`;
                }
              }
            )} ${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                name: "tabServer",
                value: "server",
                group: tabSelected
              },
              {
                group: ($$value) => {
                  tabSelected = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Server-Based`;
                }
              }
            )} `;
          }
        })}  <section class="space-y-4"><h3 class="h3" data-toc-ignore data-svelte-h="svelte-mj5zis">4. Import Datatable Component</h3> <p data-svelte-h="svelte-al1xwd">With our Datatable component now complete, let&#39;s import and add it to our <code class="code">+page.svelte</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `import Datatable from '$lib/components/Datatable.svelte';`
          },
          {},
          {}
        )} ${validate_component(CodeBlock, "CodeBlock").$$render($$result, { language: "html", code: `<Datatable />` }, {}, {})}</section></section>  <section class="space-y-4" data-svelte-h="svelte-1snl3k9"><h2 class="h2">Responsive Design</h2> <p>To ensure our datatables are visible on all screen sizes, make sure to utilize <a class="anchor" href="https://tailwindcss.com/docs/responsive-design" target="_blank">Tailwind&#39;s responsive design</a>
			best practices. You can also utilize the Tailwind Element <a href="/elements/tables" class="anchor">.table-container</a> class, which should
			be applied to a wrapping element.</p></section> <hr>  <section class="space-y-4" data-svelte-h="svelte-1gydila"><h2 class="h2">Attribution</h2> <p>This guide has been provided courtesy of <a href="https://github.com/kmalloy24" class="anchor">Kyle Malloy</a>, username
			<code class="code">@spacecup</code> on Skeleton&#39;s Discord server.</p></section>`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};

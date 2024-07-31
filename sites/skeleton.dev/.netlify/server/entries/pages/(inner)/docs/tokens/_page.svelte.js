import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { T as Table } from "../../../../../chunks/Table.js";
const vColorsAll = '<a class="anchor" href="/docs/colors">Theme Colors</a>';
const vPairings = '<a class="anchor" href="/docs/tokens#color-pairing-chart">Color Pairing</a>';
const vCorners = "tl | tr | bl | br";
const descPairings = "Pairing values can be 50-900 or 900-50 format.";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Element,
    name: "Design Tokens",
    description: "The Skeleton Tailwind plugin provides a set of utility classes that adjust to your theme settings.",
    // stylesheetIncludes: ['all', 'tokens'],
    source: "packages/plugin/src/tailwind/tokens"
  };
  const headings = ["Class", "Values", "Description"];
  const tableBackgrounds = {
    head: headings,
    body: [
      [
        '<code class="code">.bg-[color]-backdrop-token</code>',
        vColorsAll,
        "Background styles for modal backdrops."
      ],
      [
        '<code class="code">.bg-[color]-hover-token</code>',
        vColorsAll,
        "Background styles for hoverable elements."
      ],
      [
        '<code class="code">.bg-[color]-active-token</code>',
        vColorsAll,
        "Background styles for active selected elements."
      ],
      [
        '<code class="code">.bg-[color]-[pairings]-token</code>',
        `${vColorsAll}<br>${vPairings}`,
        descPairings
      ]
    ]
  };
  const tableBorderRadius = {
    head: headings,
    body: [
      [
        '<code class="code">.rounded-token</code>',
        "",
        "Border radius for small elements: buttons, badges, chips, etc."
      ],
      [
        '<code class="code">.rounded-[corner]-token</code>',
        vCorners,
        "Corner border radius styles for small elements."
      ],
      [
        '<code class="code">.rounded-container-token</code>',
        "",
        "Border radius for large elements, such as cards and textareas"
      ],
      [
        '<code class="code">.rounded-[corner]-container-token</code>',
        vCorners,
        "Corner border radius styles for large elements."
      ]
    ]
  };
  const tableBorder = {
    head: headings,
    body: [
      [
        '<code class="code">.border-token</code>',
        "",
        "Implements your theme's configured border size."
      ],
      [
        '<code class="code">.border-[color]-[pairings]-token</code>',
        `${vColorsAll}<br>${vPairings}`,
        descPairings
      ]
    ]
  };
  const tableFills = {
    head: headings,
    body: [
      [
        '<code class="code">.fill-token</code>',
        "",
        "The default responsive light/dark mode fill color."
      ],
      [
        '<code class="code">.fill-on-[color]-token</code>',
        vColorsAll,
        "Provides an accessible foreground color."
      ]
    ]
  };
  const tableRings = {
    head: headings,
    body: [
      [
        '<code class="code">.ring-outline-token</code>',
        "",
        "Creates a subtle transparent outline like Card elements."
      ],
      [
        '<code class="code">.ring-[color]-[pairings]-token</code>',
        `${vColorsAll}<br>${vPairings}`,
        descPairings
      ]
    ]
  };
  const tableText = {
    head: headings,
    body: [
      [
        '<code class="code">.font-heading-token</code>',
        "",
        "Implements your theme's configured heading font family."
      ],
      [
        '<code class="code">.font-token</code>',
        "",
        "Implements your theme's configured base font family."
      ],
      [
        '<code class="code">.text-token</code>',
        "",
        "Implements your theme's configured base text color."
      ],
      [
        '<code class="code">.text-on-[color]-token</code>',
        vColorsAll,
        "Provides an accessible foreground color."
      ],
      [
        '<code class="code">.text-[color]-[pairings]-token</code>',
        `${vColorsAll}<br>${vPairings}`,
        descPairings
      ]
    ]
  };
  const tableTDecoration = {
    head: headings,
    body: [
      [
        '<code class="code">.decoration-[color]-[pairings]-token</code>',
        `${vColorsAll}<br>${vPairings}`,
        descPairings
      ]
    ]
  };
  const tableMisc = {
    head: headings,
    body: [
      [
        '<code class="code">accent-[color]-token</code>',
        vColorsAll,
        'Provides an input <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color" target="_blank">accent-color</a>.'
      ]
    ]
  };
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings, tabs: false }, {}, {
    usage: () => {
      return ` <hr> <section class="space-y-4" data-svelte-h="svelte-p51jir"><p class="!text-xl">Skeleton utilizes a simple but powerful <strong>design token</strong> system to implement theme settings in elements and components.
				These represent the defaults for most elements and components, which means they auto-adapt based on your theme with minimal configuration
				out of the box. Best of all you can use these within your custom components as well!</p></section> <section class="space-y-4" data-svelte-h="svelte-84zu76"><h2 class="h2">Learn More</h2> <p>We recommend this conference talk by Brad Frost if you would like to learn more about the design token concept.</p> <iframe class="w-full aspect-video mx-auto rounded-container-token shadow" src="https://www.youtube.com/embed/JbxKTBvSLeY" title="Creating Themeable Design Systems with BRAD FROST" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></section> <section class="space-y-4" data-svelte-h="svelte-1czn5pc"><h2 class="h2">Theme Flow</h2> <p>Below is a visualization of how Skeleton uses your theme to control your UI. We start with your theme&#39;s CSS variables, then
				construct design token classes based on these variables, next components utilize these design token classes, then finally you
				construct your pages with sets of elements and components.</p> <img class="rounded-container-token shadow-lg" src="https://user-images.githubusercontent.com/1509726/222240675-f872f5ee-0a30-444d-90af-5d428be3731c.jpg" alt="flow"></section> <section class="space-y-4" data-svelte-h="svelte-1ij7ziw"><h2 class="h2">Color Pairing Chart</h2> <p>Below is a visualization of color pairings in Skeleton. This is how we balance light and dark mode for your themes in practice. For
				example, the <em>surface</em> color swatch 50 is the lightest available color, so we utilize that for your light theme background
				color. While swatch 900 is the darkest, so vice versa. These two colors form a pair. We then generate design token classes for
				<code class="code">.bg-surface-50-900-token</code>
				and <code class="code">bg-surface-900-50-token</code> that automatically switch between these in light/dark mode respectively.</p> <img class="rounded-container-token shadow-lg" src="https://user-images.githubusercontent.com/1509726/222245000-6d07cddb-c946-402e-8fd3-d969c1f02210.jpg" alt="pairings"></section> <hr>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-yqtx1i">Backgrounds</h2> ${validate_component(Table, "Table").$$render($$result, { source: tableBackgrounds }, {}, {})}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-2kh2kr">Border Radius</h2> ${validate_component(Table, "Table").$$render($$result, { source: tableBorderRadius }, {}, {})}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1r20uts">Borders</h2> ${validate_component(Table, "Table").$$render($$result, { source: tableBorder }, {}, {})}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-11d0927">SVG Fill Color</h2> ${validate_component(Table, "Table").$$render($$result, { source: tableFills }, {}, {})}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1h5hhic">Rings</h2> <p data-svelte-h="svelte-8kxfje">Utilities for creating outline rings with box-shadows.</p> ${validate_component(Table, "Table").$$render($$result, { source: tableRings }, {}, {})}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-drlp82">Text</h2> ${validate_component(Table, "Table").$$render($$result, { source: tableText }, {}, {})}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-picr2o">Text Decoration</h2> ${validate_component(Table, "Table").$$render($$result, { source: tableTDecoration }, {}, {})}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1ial8hx">Accent</h2> ${validate_component(Table, "Table").$$render($$result, { source: tableMisc }, {}, {})}</section> `;
    }
  })}`;
});
export {
  Page as default
};

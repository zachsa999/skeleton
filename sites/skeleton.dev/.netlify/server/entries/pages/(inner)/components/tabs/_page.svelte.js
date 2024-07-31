import { c as create_ssr_component, j as compute_rest_props, k as getContext, f as spread, e as escape, l as escape_attribute_value, g as escape_object, i as compute_slots, v as validate_component } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { T as TabGroup, a as Tab } from "../../../../../chunks/Tab.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const cBase = "text-center cursor-pointer transition-colors duration-100";
const cInterface = "";
const TabAnchor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesActive;
  let classesBase;
  let classesInterface;
  let $$restProps = compute_rest_props($$props, ["selected", "controls", "active", "hover", "flex", "padding", "rounded", "spacing"]);
  let $$slots = compute_slots(slots);
  let { selected = false } = $$props;
  let { controls = "" } = $$props;
  let { active = getContext("active") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { flex = getContext("flex") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { spacing = getContext("spacing") } = $$props;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.controls === void 0 && $$bindings.controls && controls !== void 0)
    $$bindings.controls(controls);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.flex === void 0 && $$bindings.flex && flex !== void 0)
    $$bindings.flex(flex);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  classesActive = selected ? active : hover;
  classesBase = `${cBase} ${flex} ${padding} ${rounded} ${classesActive} ${$$props.class ?? ""}`;
  classesInterface = `${cInterface} ${spacing}`;
  return `<a${spread(
    [
      {
        class: "tab-anchor " + escape(classesBase, true)
      },
      {
        href: escape_attribute_value($$props.href)
      },
      escape_object(prunedRestProps()),
      {
        "aria-controls": escape_attribute_value(controls)
      },
      { role: "button" },
      { "data-testid": "tab-anchor" }
    ],
    {}
  )}> <div class="${"tab-interface " + escape(classesInterface, true)}">${$$slots.lead ? `<div class="tab-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``} <div class="tab-label">${slots.default ? slots.default({}) : ``}</div></div></a>`;
});
const sveldTabGroup = { "props": [{ "name": "justify", "kind": "let", "description": "Provide classes to set the tab list flex justification.", "type": "string", "value": "'justify-start'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "border", "kind": "let", "description": "Provide classes to set the tab group border styles.", "type": "string", "value": "'border-b border-surface-400-500-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "active", "kind": "let", "description": "Provide classes to style each tab's active styles.", "type": "string", "value": "'border-b-2 border-surface-900-50-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "hover", "kind": "let", "description": "Provide classes to style each tab's hover styles.", "type": "string", "value": "'hover:variant-soft'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "flex", "kind": "let", "description": "Provide classes to style each tab's flex styles.", "type": "string", "value": "'flex-none'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "padding", "kind": "let", "description": "Provide classes to style each tab's padding styles.", "type": "string", "value": "'px-4 py-2'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "rounded", "kind": "let", "description": "Provide classes to style each tab's box radius styles.", "type": "string", "value": "'rounded-tl-container-token rounded-tr-container-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "spacing", "kind": "let", "description": "Provide classes to set the vertical spacing between items.", "type": "string", "value": "'space-y-1'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionList", "kind": "let", "description": "Provide arbitrary classes to style the tab list region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionPanel", "kind": "let", "description": "Provide arbitrary classes to style the tab panel region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "labelledby", "kind": "let", "description": "Provide the ID of the element that labels the tab list.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "panel", "kind": "let", "description": "Matches the tab aria-control value, pairs with the panel.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "__default__", "default": true, "slot_props": "{}" }, { "name": "panel", "default": false, "slot_props": "", "description": "An optional region to house tab content." }], "events": [], "typedefs": [] };
const sveldTab = { "props": [{ "name": "group", "kind": "let", "description": "Set the radio group binding value.", "type": "any", "isFunction": false, "isFunctionDeclaration": false, "isRequired": true, "constant": false, "reactive": true }, { "name": "name", "kind": "let", "description": "Set a unique name value for the input.", "type": "string", "isFunction": false, "isFunctionDeclaration": false, "isRequired": true, "constant": false, "reactive": false }, { "name": "value", "kind": "let", "description": "Set the input's value.", "type": "any", "isFunction": false, "isFunctionDeclaration": false, "isRequired": true, "constant": false, "reactive": false }, { "name": "title", "kind": "let", "description": "Provide a hoverable title attribute for the tab.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "controls", "kind": "let", "description": "Set the ARIA controls value to define which panel this tab controls.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionTab", "kind": "let", "description": "Provide arbitrary classes to style the tab region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "active", "kind": "let", "description": "Provide classes to style each tab's active styles.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "hover", "kind": "let", "description": "Provide classes to style each tab's hover styles.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "flex", "kind": "let", "description": "Provide classes to style each tab's flex styles.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "padding", "kind": "let", "description": "Provide classes to style each tab's padding styles.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "rounded", "kind": "let", "description": "Provide classes to style each tab's box radius styles.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "spacing", "kind": "let", "description": "Provide classes to set the vertical spacing between items.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "__default__", "default": true, "slot_props": "{}" }, { "name": "lead", "default": false, "slot_props": "", "description": "Provides a leading position, which can be used for icons." }], "events": [{ "type": "forwarded", "name": "keydown", "element": "div" }, { "type": "forwarded", "name": "keyup", "element": "div" }, { "type": "forwarded", "name": "keypress", "element": "div" }, { "type": "forwarded", "name": "click", "element": "input" }, { "type": "forwarded", "name": "change", "element": "input" }], "typedefs": [] };
const sveldTabAnchor = { "props": [{ "name": "selected", "kind": "let", "description": "Enables the active state styles when set true.", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "controls", "kind": "let", "description": "Set the ARIA controls value to define which panel this tab controls.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "active", "kind": "let", "description": "Provide classes to style each tab's active styles.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "hover", "kind": "let", "description": "Provide classes to style each tab's hover styles.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "flex", "kind": "let", "description": "Provide classes to style each tab's flex styles.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "padding", "kind": "let", "description": "Provide classes to style each tab's padding styles.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "rounded", "kind": "let", "description": "Provide classes to style each tab's box radius styles.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "spacing", "kind": "let", "description": "Provide classes to set the vertical spacing between items.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "__default__", "default": true, "slot_props": "{}" }, { "name": "lead", "default": false, "slot_props": "", "description": "Provides a leading position, which can be used for icons." }], "events": [{ "type": "forwarded", "name": "click", "element": "a" }, { "type": "forwarded", "name": "keydown", "element": "a" }, { "type": "forwarded", "name": "keyup", "element": "a" }, { "type": "forwarded", "name": "keypress", "element": "a" }, { "type": "forwarded", "name": "mouseover", "element": "a" }, { "type": "forwarded", "name": "mouseleave", "element": "a" }, { "type": "forwarded", "name": "focus", "element": "a" }, { "type": "forwarded", "name": "blur", "element": "a" }], "typedefs": [] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Component,
    name: "Tabs",
    description: "Use tabs to quickly switch between different views and pages.",
    imports: ["TabGroup", "Tab", "TabAnchor"],
    source: "packages/skeleton/src/lib/components/Tab",
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/",
    components: [
      { label: "TabGroup", sveld: sveldTabGroup },
      {
        label: "Tab",
        sveld: sveldTab,
        overrideProps: ["active", "hover", "flex", "padding", "rounded"]
      },
      {
        label: "TabAnchor",
        sveld: sveldTabAnchor,
        overrideProps: ["active", "hover", "flex", "padding", "rounded"]
      }
    ]
  };
  let tabsBasic = 0;
  let tabsFancy = 0;
  let tabsBottomNav = "/books";
  let desc = {
    books: "A written or printed work consisting of pages glued or sewn together along one side and bound in covers.",
    movies: "A story or event recorded by a camera as a set of moving images and shown in a theater or on television; a motion picture.",
    tv: "A system for transmitting visual images and sound to screens, chiefly for entertainment, information, and education."
  };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
      usage: () => {
        return ` <section class="space-y-4"><p data-svelte-h="svelte-174gbnw">We offer two types of Tab components, but recommend you avoiding mixing these to ensure a consistent user experience.</p> <h3 class="h3" data-svelte-h="svelte-k5e577">Tab</h3> <p data-svelte-h="svelte-p7e521">See the featured example above for reference. Maintains an active selection state, which is ideal for quickly switching panel
				content available directly on the page. Please note that using the <code class="code">panel</code> slot is optional, but recommended.</p> <h3 class="h3" data-svelte-h="svelte-cs0006">TabAnchor</h3> <p data-svelte-h="svelte-b0webs">Operate as <code class="code">anchor</code> tags, supporting all common attributes. These are recommended for tabbing between route
				pages. Please avoid using <code class="code">target=&quot;_blank&quot;</code> as this would be harmful to the expected user experience.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `<p data-svelte-h="svelte-yduqxa">The tab will show an active state when the group and tab <code class="code">value</code> match.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<TabGroup>
	<TabAnchor href="/">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>(label)</span>
	</TabAnchor>
	<TabAnchor href="/about">(label)</TabAnchor>
	<!-- ... -->
</TabGroup>
					`
              },
              {},
              {}
            )}  <p data-svelte-h="svelte-1ulvvnw">Use the <a class="anchor" href="https://kit.svelte.dev/docs/modules#$app-stores-page" target="_blank" rel="noreferrer">SvelteKit page store</a> to dynamically highlight the active Tab Anchor state using the <code class="code">selected</code> property.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `import { page } from '$app/stores';`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<TabGroup>
	<TabAnchor href="/" selected={$page.url.pathname === '/'}>Home</TabAnchor>
	<TabAnchor href="/about" selected={$page.url.pathname === '/about'}>About</TabAnchor>
</TabGroup>
						`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(TabGroup, "TabGroup").$$render($$result, { class: "w-full" }, {}, {
              default: () => {
                return `${validate_component(TabAnchor, "TabAnchor").$$render($$result, { href: "/", selected: true }, {}, {
                  default: () => {
                    return `Home`;
                  }
                })} ${validate_component(TabAnchor, "TabAnchor").$$render($$result, { href: "/docs/get-started" }, {}, {
                  default: () => {
                    return `Documentation`;
                  }
                })} ${validate_component(TabAnchor, "TabAnchor").$$render($$result, { href: "/blog" }, {}, {
                  default: () => {
                    return `Blog`;
                  }
                })}`;
              }
            })}`;
          }
        })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-whygmj">Justify</h2> <p data-svelte-h="svelte-ovwvm0">Use the <code class="code">justify</code> property to adjust tab positions.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<TabGroup justify="justify-center">...</TabGroup>`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(TabGroup, "TabGroup").$$render(
              $$result,
              {
                justify: "justify-center",
                class: "w-full"
              },
              {},
              {
                default: () => {
                  return ` ${validate_component(Tab, "Tab").$$render(
                    $$result,
                    {
                      name: "books",
                      value: 0,
                      group: tabsFancy
                    },
                    {
                      group: ($$value) => {
                        tabsFancy = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Books`;
                      }
                    }
                  )} ${validate_component(Tab, "Tab").$$render(
                    $$result,
                    {
                      name: "movies",
                      value: 1,
                      group: tabsFancy
                    },
                    {
                      group: ($$value) => {
                        tabsFancy = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Movies`;
                      }
                    }
                  )} ${validate_component(Tab, "Tab").$$render(
                    $$result,
                    { name: "tv", value: 2, group: tabsFancy },
                    {
                      group: ($$value) => {
                        tabsFancy = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Television`;
                      }
                    }
                  )}`;
                }
              }
            )}`;
          }
        })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1adw4v5">Navigation</h2> <p data-svelte-h="svelte-h1bbt2">Tabs make a great choice for bottom navigation bars for a responsive <a class="anchor" href="/components/app-rail">App Rail</a> alternative.
				Use Anchor Tabs and customize the styling as desired.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<TabGroup 
	justify="justify-center"
	active="variant-filled-primary"
	hover="hover:variant-soft-primary"
	flex="flex-1 lg:flex-none"
	rounded=""
	border=""
	class="bg-surface-100-800-token w-full"
>
	<TabAnchor href="/" selected={$page.url.pathname === '/'}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>(label)</span>
	</TabAnchor>
	<!-- ... -->
</TabGroup>`
              },
              {},
              {}
            )} `;
          },
          footer: () => {
            return `<div class="text-center"><code class="code">Simulated route: ${escape(tabsBottomNav)}</code></div> `;
          },
          preview: () => {
            return `${validate_component(TabGroup, "TabGroup").$$render(
              $$result,
              {
                justify: "justify-center",
                active: "variant-filled-primary",
                hover: "hover:variant-soft-primary",
                flex: "flex-1 lg:flex-none",
                rounded: "",
                border: "",
                class: "bg-surface-100-800-token w-full"
              },
              {},
              {
                default: () => {
                  return `${validate_component(TabAnchor, "TabAnchor").$$render($$result, { selected: tabsBottomNav === "/books" }, {}, {
                    lead: () => {
                      return `<i class="fa-solid fa-book"></i>`;
                    },
                    default: () => {
                      return `Books`;
                    }
                  })} ${validate_component(TabAnchor, "TabAnchor").$$render($$result, { selected: tabsBottomNav === "/movies" }, {}, {
                    lead: () => {
                      return `<i class="fa-solid fa-film"></i>`;
                    },
                    default: () => {
                      return `Movies`;
                    }
                  })} ${validate_component(TabAnchor, "TabAnchor").$$render(
                    $$result,
                    {
                      selected: tabsBottomNav === "/television"
                    },
                    {},
                    {
                      lead: () => {
                        return `<i class="fa-solid fa-tv"></i>`;
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
        })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1ipzi60">Using Svelte Stores</h2>  <p data-svelte-h="svelte-1r6cw06">For the standard Tab component, you may optionally choose to use Svelte writable stores to manage the tab state. Note the use of the <code class="code">$</code> sign within the <code class="code">bind:group</code> property. Pair this with Skeleton&#39;s <a class="anchor" href="/utilities/local-storage-stores">Local Storage Store</a> for automatic persistence.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `import { writable, type Writable } from 'svelte/store';

const tabSet: Writable<number> = writable(0);`
          },
          {},
          {}
        )} ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `<Tab bind:group={$tabSet} name="tab1" value={0}>(label)</Tab>`
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
                code: `let tabSet: number = 0;`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<TabGroup>
	<Tab bind:group={tabSet} name="tab1" value={0}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>(label 1)</span>
	</Tab>
	<Tab bind:group={tabSet} name="tab2" value={1}>(label 2)</Tab>
	<Tab bind:group={tabSet} name="tab3" value={2}>(label 3)</Tab>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
			(tab panel 1 contents)
		{:else if tabSet === 1}
			(tab panel 2 contents)
		{:else if tabSet === 2}
			(tab panel 3 contents)
		{/if}
	</svelte:fragment>
</TabGroup>
			`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `<section class="w-full card p-4 text-token">${validate_component(TabGroup, "TabGroup").$$render($$result, {}, {}, {
              panel: () => {
                return ` ${tabsBasic === 0 ? `<p>${escape(desc.books)}</p>` : `${tabsBasic === 1 ? `<p>${escape(desc.movies)}</p>` : `${tabsBasic === 2 ? `<p>${escape(desc.tv)}</p>` : ``}`}`} `;
              },
              default: () => {
                return ` ${validate_component(Tab, "Tab").$$render(
                  $$result,
                  {
                    name: "books",
                    value: 0,
                    group: tabsBasic
                  },
                  {
                    group: ($$value) => {
                      tabsBasic = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `Books`;
                    }
                  }
                )} ${validate_component(Tab, "Tab").$$render(
                  $$result,
                  {
                    name: "movies",
                    value: 1,
                    group: tabsBasic
                  },
                  {
                    group: ($$value) => {
                      tabsBasic = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `Movies`;
                    }
                  }
                )} ${validate_component(Tab, "Tab").$$render(
                  $$result,
                  { name: "tv", value: 2, group: tabsBasic },
                  {
                    group: ($$value) => {
                      tabsBasic = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `Television`;
                    }
                  }
                )} `;
              }
            })}</section>`;
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

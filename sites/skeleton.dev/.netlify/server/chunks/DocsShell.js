import { c as create_ssr_component, e as escape, v as validate_component, d as add_attribute, h as each, a as subscribe, i as compute_slots } from "./ssr.js";
import { p as page } from "./stores5.js";
import { L as LayoutPage } from "./LayoutPage.js";
import "./ProgressBar.svelte_svelte_type_style_lang.js";
import { T as TabGroup, a as Tab } from "./Tab.js";
import { C as CodeBlock } from "./CodeBlock.js";
import { T as Table } from "./Table.js";
const cHeader = "space-y-10";
const cChip = "chip variant-soft hover:variant-filled";
const githubBranch = "master";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesHeader;
  let { pageData } = $$props;
  const githubFeatureSourcePath = `https://github.com/skeletonlabs/skeleton/blob/${githubBranch}`;
  const githubPageSourcePath = `https://github.com/skeletonlabs/skeleton/blob/${githubBranch}/sites/skeleton.dev/src`;
  function formatImportSnippet() {
    let snippet = ``;
    if (pageData.imports?.length) {
      snippet += `import { ${pageData.imports?.join(", ")} } from '${pageData.package?.name}';`;
    }
    if (pageData.types?.length) {
      snippet += `
import type { ${pageData.types?.join(", ")} } from '${pageData.package?.name}';`;
    }
    return snippet;
  }
  if ($$props.pageData === void 0 && $$bindings.pageData && pageData !== void 0)
    $$bindings.pageData(pageData);
  classesHeader = `${cHeader}`;
  return `<header class="${"doc-shell-header " + escape(classesHeader, true)}"><section class="space-y-4"><span class="badge variant-soft translate-y-1"><!-- HTML_TAG_START -->${pageData.feature}<!-- HTML_TAG_END --></span> <h1 class="h1">${escape(pageData.name)}</h1> <p><!-- HTML_TAG_START -->${pageData.description}<!-- HTML_TAG_END --></p></section>  ${pageData.imports?.length || pageData.types?.length ? `${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      language: "ts",
      code: formatImportSnippet()
    },
    {},
    {}
  )}` : ``}    <section class="flex flex-wrap gap-2">   ${pageData.source ? `<a${add_attribute("class", cChip, 0)}${add_attribute("href", `${githubFeatureSourcePath}/${pageData.source}`, 0)} target="_blank" rel="noreferrer"><i class="fa-brands fa-github text-[16px]"></i> <span data-svelte-h="svelte-4y4n3b">Source</span></a>` : ``}  ${pageData.docsPath ? `<a${add_attribute("class", cChip, 0)}${add_attribute("href", `${githubPageSourcePath}/routes/(inner)${pageData.docsPath}/+page.svelte`, 0)} target="_blank" rel="noreferrer"><i class="fa-solid fa-code"></i> <span data-svelte-h="svelte-1311982">Page Source</span></a>` : ``}  ${pageData.aria ? `<a${add_attribute("class", cChip, 0)}${add_attribute("href", pageData.aria, 0)} target="_blank" rel="noreferrer"><i class="fa-solid fa-universal-access text-[16px]"></i> <span data-svelte-h="svelte-127ppsl">WAI-ARIA</span></a>` : ``}  ${pageData.transitionIn || pageData.transitionOut ? `<a${add_attribute("class", cChip, 0)} href="/docs/transitions"${add_attribute("title", `In: ${pageData.transitionIn}, Out: ${pageData.transitionOut}`, 0)}><i class="fa-solid fa-right-left text-[16px]"></i> <span data-svelte-h="svelte-ye5gai">Transitions</span></a>` : ``}  ${pageData.dependencies?.length ? `${each(pageData.dependencies, (d) => {
    return `<a${add_attribute("class", cChip, 0)}${add_attribute("href", d.url, 0)} target="_blank" rel="noreferrer" title="Required Dependency"><i class="fa-solid fa-down-left-and-up-right-to-center text-[16px]"></i> <span>${escape(d.label)}</span> </a>`;
  })}` : ``}</section></header>`;
});
function sveldMapperProps(component) {
  const { props } = component.sveld;
  const propsHeadings = ["Name", "Type", "Value", "Description"];
  const propsFiltered = props.filter((p) => {
    if (["expandAll", "collapseAll", "onParentChange"].includes(p.name))
      return;
    return p.type !== void 0;
  });
  function cleanValue(value) {
    if (value === void 0 || value === "" || value === "''")
      return "-";
    return value;
  }
  return {
    head: propsHeadings,
    body: propsFiltered.map((p) => {
      return [`<code class="code">${p.name}<?code>`, `<em>${p.type}</em>`, cleanValue(p.value), p.description ? p.description : "-"];
    })
  };
}
function sveldMapperSlots(component) {
  const { slots } = component.sveld;
  const slotsHeadings = ["Name", "Default", "Fallback", "Description"];
  return {
    head: slotsHeadings,
    body: slots.map((s) => {
      return [
        `<code class="code">${s.name.replaceAll("__", "")}</code>`,
        s.default ? "&check;" : "-",
        s.fallback ? "&check;" : "-",
        // s.slot_props ? s.slot_props : '-', // NOTE: we don't currently use this
        s.description ? s.description : "-"
      ];
    })
  };
}
function sveldMapperEvents(component) {
  const { events } = component.sveld;
  const eventsHeadings = ["Name", "Type", "Element", "Response", "Description"];
  return {
    head: eventsHeadings,
    body: events.map((e) => {
      return [
        `<code class="code">on:${e.name}</code>`,
        `<em>${e.type}</em>`,
        e.element ? escapeHtml(`<${e.element}>`) : "-",
        e.detail ? e.detail : "-",
        e.description ? e.description : "-"
      ];
    })
  };
}
function escapeHtml(unsafe) {
  return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
const cBase$6 = "space-y-10";
const PanelProps = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { pageData } = $$props;
  if ($$props.pageData === void 0 && $$bindings.pageData && pageData !== void 0)
    $$bindings.pageData(pageData);
  classesBase = `${cBase$6}`;
  return `<div class="${"doc-shell-properties " + escape(classesBase, true)}"> ${pageData.restProps ? `<aside class="alert variant-ghost-warning"> <div class="alert-message"><p>This component implements <a class="anchor" href="https://svelte.dev/docs#template-syntax-attributes-and-props" target="_blank" rel="noreferrer" data-svelte-h="svelte-eo769c">restProps</a>. This passes all extra attributes to the component&#39;s <code class="code">${escape(pageData.restProps)}</code> elements.</p></div></aside>` : ``}  ${pageData.components ? `${each(pageData.components, (comp) => {
    return `${comp.sveld.props.length > 0 ? (() => {
      let tableSource = sveldMapperProps(comp);
      return ` <section class="space-y-4">${comp.label ? `<h2 class="h2">${escape(comp.label)}</h2>` : ``} ${comp.descProps ? `<div><!-- HTML_TAG_START -->${comp.descProps}<!-- HTML_TAG_END --></div>` : ``} ${tableSource.body.length > 0 ? `${validate_component(Table, "Table").$$render($$result, { element: "table", source: tableSource }, {}, {})}` : ``} ${comp.overrideProps ? `<div><em>${escape(comp.label)} can override: <span class="text-primary-500">${escape(comp.overrideProps.join(", "))}</span>.</em></div>` : ``} </section>`;
    })() : ``}`;
  })}` : ``}</div>`;
});
const cBase$5 = "space-y-10";
const PanelClasses = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { pageData } = $$props;
  const source = {
    head: ["Keys", "Values", "Description"],
    body: pageData.classes ?? []
  };
  if ($$props.pageData === void 0 && $$bindings.pageData && pageData !== void 0)
    $$bindings.pageData(pageData);
  classesBase = `${cBase$5}`;
  return `<div class="${"doc-shell-classes " + escape(classesBase, true)}">${validate_component(Table, "Table").$$render($$result, { source }, {}, {})}</div>`;
});
const cBase$4 = "space-y-10";
const PanelEvents = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { pageData } = $$props;
  if ($$props.pageData === void 0 && $$bindings.pageData && pageData !== void 0)
    $$bindings.pageData(pageData);
  classesBase = `${cBase$4}`;
  return `<div class="${"doc-shell-events " + escape(classesBase, true)}">${pageData.components ? `${each(pageData.components, (comp) => {
    return `${comp.sveld.events.length > 0 ? (() => {
      let tableSource = sveldMapperEvents(comp);
      return ` <section class="space-y-4">${comp.label ? `<h2 class="h2">${escape(comp.label)}</h2>` : ``} ${comp.descEvents ? `<div><!-- HTML_TAG_START -->${comp.descEvents}<!-- HTML_TAG_END --></div>` : ``} ${tableSource.body.length > 0 ? `${validate_component(Table, "Table").$$render($$result, { source: tableSource }, {}, {})}` : ``} </section>`;
    })() : ``}`;
  })}` : ``}</div>`;
});
const cBase$3 = "space-y-10";
const PanelKeyboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { pageData } = $$props;
  const source = {
    head: ["Keys", "Description"],
    body: pageData.keyboard ?? []
  };
  if ($$props.pageData === void 0 && $$bindings.pageData && pageData !== void 0)
    $$bindings.pageData(pageData);
  classesBase = `${cBase$3}`;
  return `<div class="${"doc-shell-keyboard " + escape(classesBase, true)}">${validate_component(Table, "Table").$$render($$result, { source }, {}, {})}</div>`;
});
const cBase$2 = "space-y-10";
const PanelParams = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { pageData } = $$props;
  const source = {
    head: ["Prop", "Type", "Default", "Values", "Description"],
    body: pageData.parameters ?? []
  };
  if ($$props.pageData === void 0 && $$bindings.pageData && pageData !== void 0)
    $$bindings.pageData(pageData);
  classesBase = `${cBase$2}`;
  return `<div class="${"doc-shell-parameters " + escape(classesBase, true)}">${validate_component(Table, "Table").$$render($$result, { source }, {}, {})}</div>`;
});
const cBase$1 = "space-y-10";
const PanelSlots = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { pageData } = $$props;
  if ($$props.pageData === void 0 && $$bindings.pageData && pageData !== void 0)
    $$bindings.pageData(pageData);
  classesBase = `${cBase$1}`;
  return `<div class="${"doc-shell-slots " + escape(classesBase, true)}">${pageData.components ? `${each(pageData.components, (comp) => {
    return `${comp.sveld.slots.length > 0 ? (() => {
      let tableSource = sveldMapperSlots(comp);
      return ` <section class="space-y-4">${comp.label ? `<h2 class="h2">${escape(comp.label)}</h2>` : ``} ${comp.descSlots ? `<div><!-- HTML_TAG_START -->${comp.descSlots}<!-- HTML_TAG_END --></div>` : ``} ${tableSource.body.length > 0 ? `${validate_component(Table, "Table").$$render($$result, { source: tableSource }, {}, {})}` : ``} </section>`;
    })() : ``}`;
  })}` : ``}</div>`;
});
var DocsFeature = /* @__PURE__ */ ((DocsFeature2) => {
  DocsFeature2["Element"] = "Tailwind";
  DocsFeature2["Component"] = "Svelte Component";
  DocsFeature2["Action"] = "Svelte Action";
  DocsFeature2["Utility"] = "Utility";
  return DocsFeature2;
})(DocsFeature || {});
const docShellDefaults = {
  // Heading
  feature: DocsFeature.Component,
  name: "(name)",
  description: "(description)",
  // Meta
  imports: [],
  types: [],
  stylesheetIncludes: [],
  stylesheets: [],
  package: { name: "@skeletonlabs/skeleton", url: "https://www.npmjs.com/package/@skeletonlabs/skeleton" },
  source: void 0,
  aria: void 0,
  dependencies: [],
  // Docs
  components: [],
  restProps: void 0,
  parameters: [],
  classes: [],
  keyboard: []
};
const cBase = "relative";
const cTabs = "max-w-5xl mx-auto hide-scrollbar";
const cPanels = "space-y-10";
const defaultTab = "usage";
const DocsShell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesTabs;
  let classesPanels;
  let $$slots = compute_slots(slots);
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { settings } = $$props;
  let { tabs = true } = $$props;
  let tabPanel = $page.url.searchParams.get("tab") || defaultTab;
  const pageData = {
    // Define defaults first
    ...docShellDefaults,
    // Local Overrides
    ...{ docsPath: $page.url.pathname },
    // Prop Settings Values
    ...settings
  };
  const sveldCounts = { props: 0, slots: 0, events: 0 };
  if (pageData.components && pageData.components?.length > 0) {
    pageData.components.forEach((comp) => {
      sveldCounts.props += comp.sveld.props.length;
      sveldCounts.slots += comp.sveld.slots.length;
      sveldCounts.events += comp.sveld.events.length;
    });
  }
  if ($$props.settings === void 0 && $$bindings.settings && settings !== void 0)
    $$bindings.settings(settings);
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0)
    $$bindings.tabs(tabs);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    classesBase = `${cBase}`;
    classesTabs = `${cTabs}`;
    classesPanels = `${cPanels}`;
    $$rendered = `${validate_component(LayoutPage, "LayoutPage").$$render(
      $$result,
      {
        class: "doc-shell " + classesBase,
        tocKey: tabPanel
      },
      {},
      {
        default: () => {
          return ` ${validate_component(Header, "Header").$$render($$result, { pageData }, {}, {})}  ${tabs ? `${validate_component(TabGroup, "TabGroup").$$render($$result, { class: classesTabs }, {}, {
            default: () => {
              return `${validate_component(Tab, "Tab").$$render(
                $$result,
                {
                  name: "panels",
                  value: "usage",
                  group: tabPanel
                },
                {
                  group: ($$value) => {
                    tabPanel = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `Usage`;
                  }
                }
              )} ${sveldCounts.props > 0 ? `${validate_component(Tab, "Tab").$$render(
                $$result,
                {
                  name: "properties",
                  value: "properties",
                  group: tabPanel
                },
                {
                  group: ($$value) => {
                    tabPanel = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `Props`;
                  }
                }
              )}` : ``} ${pageData?.parameters?.length ? `${validate_component(Tab, "Tab").$$render(
                $$result,
                {
                  name: "parameters",
                  value: "parameters",
                  group: tabPanel
                },
                {
                  group: ($$value) => {
                    tabPanel = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `Params`;
                  }
                }
              )}` : ``} ${sveldCounts.slots > 0 ? `${validate_component(Tab, "Tab").$$render(
                $$result,
                {
                  name: "slots",
                  value: "slots",
                  group: tabPanel
                },
                {
                  group: ($$value) => {
                    tabPanel = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `Slots`;
                  }
                }
              )}` : ``} ${pageData?.classes?.length ? `${validate_component(Tab, "Tab").$$render(
                $$result,
                {
                  name: "classes",
                  value: "classes",
                  group: tabPanel
                },
                {
                  group: ($$value) => {
                    tabPanel = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `Classes`;
                  }
                }
              )}` : ``} ${sveldCounts.events > 0 ? `${validate_component(Tab, "Tab").$$render(
                $$result,
                {
                  name: "events",
                  value: "events",
                  group: tabPanel
                },
                {
                  group: ($$value) => {
                    tabPanel = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `Events`;
                  }
                }
              )}` : ``} ${pageData?.keyboard?.length ? `${validate_component(Tab, "Tab").$$render(
                $$result,
                {
                  name: "keyboard",
                  value: "keyboard",
                  group: tabPanel
                },
                {
                  group: ($$value) => {
                    tabPanel = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `Keyboard`;
                  }
                }
              )}` : ``}`;
            }
          })}` : ``}  <div id="panels"${add_attribute("class", classesPanels, 0)}> ${tabPanel === "usage" ? ` ${$$slots.sandbox ? `<h2 class="sr-only" data-svelte-h="svelte-a6dteg">Demo</h2> ${slots.sandbox ? slots.sandbox({}) : ``}` : ``}  ${slots.usage ? slots.usage({}) : `(usage)`}  ${slots.default ? slots.default({}) : ``}` : ``}  ${tabPanel === "properties" ? `${validate_component(PanelProps, "PanelProps").$$render($$result, { pageData }, {}, {})}` : ``}  ${tabPanel === "parameters" ? `${validate_component(PanelParams, "PanelParams").$$render($$result, { pageData }, {}, {})}` : ``}  ${tabPanel === "slots" ? `${validate_component(PanelSlots, "PanelSlots").$$render($$result, { pageData }, {}, {})}` : ``}  ${tabPanel === "classes" ? `${validate_component(PanelClasses, "PanelClasses").$$render($$result, { pageData }, {}, {})}` : ``}  ${tabPanel === "events" ? `${validate_component(PanelEvents, "PanelEvents").$$render($$result, { pageData }, {}, {})}` : ``}  ${tabPanel === "keyboard" ? `${validate_component(PanelKeyboard, "PanelKeyboard").$$render($$result, { pageData }, {}, {})}` : ``}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  DocsFeature as D,
  DocsShell as a
};

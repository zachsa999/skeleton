import { c as create_ssr_component, a as subscribe, e as escape, d as add_attribute, h as each, v as validate_component } from "./ssr.js";
import { a as storeVercelProductionMode } from "./stores7.js";
import "./ProgressBar.svelte_svelte_type_style_lang.js";
import { w as writable } from "./index.js";
const tocStore = writable([]);
const tocActiveId = writable(void 0);
const cBase$1 = "space-y-4";
const cList = "space-y-2";
const cListItem = "block";
const cAnchor = "";
const TableOfContents = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let reactiveActiveId;
  let classesBase;
  let classesList;
  let classesListItem;
  let classesAnchor;
  let $tocActiveId, $$unsubscribe_tocActiveId;
  let $tocStore, $$unsubscribe_tocStore;
  $$unsubscribe_tocActiveId = subscribe(tocActiveId, (value) => $tocActiveId = value);
  $$unsubscribe_tocStore = subscribe(tocStore, (value) => $tocStore = value);
  let { inactive = "opacity-60 hover:opacity-100" } = $$props;
  let { active = "text-primary-500" } = $$props;
  let { activeId = "" } = $$props;
  let { indentStyles = {
    h2: "",
    h3: "ml-4",
    h4: "ml-8",
    h5: "ml-12",
    h6: "ml-16"
  } } = $$props;
  let { regionLead = "font-bold" } = $$props;
  let { regionList = "" } = $$props;
  let { regionListItem = "" } = $$props;
  let { regionAnchor = "" } = $$props;
  if ($$props.inactive === void 0 && $$bindings.inactive && inactive !== void 0)
    $$bindings.inactive(inactive);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.activeId === void 0 && $$bindings.activeId && activeId !== void 0)
    $$bindings.activeId(activeId);
  if ($$props.indentStyles === void 0 && $$bindings.indentStyles && indentStyles !== void 0)
    $$bindings.indentStyles(indentStyles);
  if ($$props.regionLead === void 0 && $$bindings.regionLead && regionLead !== void 0)
    $$bindings.regionLead(regionLead);
  if ($$props.regionList === void 0 && $$bindings.regionList && regionList !== void 0)
    $$bindings.regionList(regionList);
  if ($$props.regionListItem === void 0 && $$bindings.regionListItem && regionListItem !== void 0)
    $$bindings.regionListItem(regionListItem);
  if ($$props.regionAnchor === void 0 && $$bindings.regionAnchor && regionAnchor !== void 0)
    $$bindings.regionAnchor(regionAnchor);
  reactiveActiveId = $tocActiveId ? $tocActiveId : activeId.replace("#", "");
  classesBase = `${cBase$1} ${$$props.class ?? ""}`;
  classesList = `${cList} ${regionList}`;
  classesListItem = `${cListItem} ${regionListItem}`;
  classesAnchor = `${cAnchor} ${regionAnchor}`;
  $$unsubscribe_tocActiveId();
  $$unsubscribe_tocStore();
  return `${$tocStore.length ? `<nav class="${"toc " + escape(classesBase, true)}" data-testid="toc"> <div${add_attribute("class", regionLead, 0)}>${slots.default ? slots.default({}) : `Table of Contents`}</div>  <ul class="${"toc-list " + escape(classesList, true)}">${each($tocStore, (tocHeading) => {
    return `<li class="${"toc-list-item " + escape(classesListItem, true) + " " + escape(indentStyles[tocHeading.element], true)}"><a href="${"#" + escape(tocHeading.id, true)}" class="${"toc-anchor " + escape(classesAnchor, true) + " " + escape(tocHeading.id === reactiveActiveId ? active : inactive, true)}">${escape(tocHeading.text)}</a> </li>`;
  })}</ul></nav>` : ``}`;
});
const cBase = "page-padding flex items-start gap-10";
const cColLeft = "page-container-aside";
const cColRight = "sticky top-10 hidden xl:block space-y-4 w-72";
const LayoutPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesColLeft;
  let classesColRight;
  let $storeVercelProductionMode, $$unsubscribe_storeVercelProductionMode;
  $$unsubscribe_storeVercelProductionMode = subscribe(storeVercelProductionMode, (value) => $storeVercelProductionMode = value);
  let { sidebar = true } = $$props;
  let { tocKey = void 0 } = $$props;
  if ($$props.sidebar === void 0 && $$bindings.sidebar && sidebar !== void 0)
    $$bindings.sidebar(sidebar);
  if ($$props.tocKey === void 0 && $$bindings.tocKey && tocKey !== void 0)
    $$bindings.tocKey(tocKey);
  classesBase = `${cBase} ${$$props.class ?? ""}`;
  classesColLeft = `${cColLeft}`;
  classesColRight = `${cColRight}`;
  $$unsubscribe_storeVercelProductionMode();
  return `<div class="${"layout-docs " + escape(classesBase, true)}"> <div class="${"layout-docs-content " + escape(classesColLeft, true)}">${slots.default ? slots.default({}) : ``}</div>  ${sidebar ? ` <aside class="${"layout-cols-aside " + escape(classesColRight, true)}"> ${$storeVercelProductionMode === true ? `<script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CWYD627U&placement=carbonadsnet" id="_carbonads_js" data-svelte-h="svelte-1ykezop"><\/script>` : ``}  ${validate_component(TableOfContents, "TableOfContents").$$render($$result, {}, {}, {
    default: () => {
      return `On the Page`;
    }
  })}</aside>` : ``}</div>`;
});
export {
  LayoutPage as L,
  TableOfContents as T
};

import { c as create_ssr_component, s as setContext, e as escape, j as compute_rest_props, k as getContext, d as add_attribute, f as spread, l as escape_attribute_value, g as escape_object, i as compute_slots } from "./ssr.js";
const cBase$2 = "grid grid-rows-[auto_1fr_auto] overflow-y-auto";
const cRegionLead = "box-border";
const cRegionDefault = "box-border";
const cRegionTrail = "box-border";
const AppRail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesRegionLead;
  let classesRegionDefault;
  let classesRegionTrail;
  let { background = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { width = "w-20" } = $$props;
  let { height = "h-full" } = $$props;
  let { gap = "gap-0" } = $$props;
  let { regionLead = "" } = $$props;
  let { regionDefault = "" } = $$props;
  let { regionTrail = "" } = $$props;
  let { hover = "bg-primary-hover-token" } = $$props;
  let { active = "bg-primary-active-token" } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { aspectRatio = "aspect-square" } = $$props;
  setContext("active", active);
  setContext("hover", hover);
  setContext("spacing", spacing);
  setContext("aspectRatio", aspectRatio);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.regionLead === void 0 && $$bindings.regionLead && regionLead !== void 0)
    $$bindings.regionLead(regionLead);
  if ($$props.regionDefault === void 0 && $$bindings.regionDefault && regionDefault !== void 0)
    $$bindings.regionDefault(regionDefault);
  if ($$props.regionTrail === void 0 && $$bindings.regionTrail && regionTrail !== void 0)
    $$bindings.regionTrail(regionTrail);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.aspectRatio === void 0 && $$bindings.aspectRatio && aspectRatio !== void 0)
    $$bindings.aspectRatio(aspectRatio);
  classesBase = `${cBase$2} ${background} ${border} ${width} ${height} ${gap} ${$$props.class || ""}`;
  classesRegionLead = `${cRegionLead} ${regionLead}`;
  classesRegionDefault = `${cRegionDefault} ${regionDefault}`;
  classesRegionTrail = `${cRegionTrail} ${regionTrail}`;
  return ` <div class="${"app-rail " + escape(classesBase, true)}" data-testid="app-rail"> <div class="${"app-bar-lead " + escape(classesRegionLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>  <div class="${"app-bar-default " + escape(classesRegionDefault, true)}">${slots.default ? slots.default({}) : ``}</div>  <div class="${"app-bar-trail " + escape(classesRegionTrail, true)}">${slots.trail ? slots.trail({}) : ``}</div></div>`;
});
const cBase$1 = "cursor-pointer";
const cWrapper$1 = "flex flex-col justify-center items-stretch w-full";
const cInterface = "text-center";
const cLabel$1 = "font-bold text-xs";
const AppRailTile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classActive;
  let classesBase;
  let classesWrapper;
  let classesInterface;
  let classesLead;
  let classesLabel;
  let $$restProps = compute_rest_props($$props, [
    "group",
    "name",
    "value",
    "title",
    "regionLead",
    "regionLabel",
    "hover",
    "active",
    "spacing",
    "width",
    "aspectRatio"
  ]);
  let $$slots = compute_slots(slots);
  let { group } = $$props;
  let { name } = $$props;
  let { value } = $$props;
  let { title = "" } = $$props;
  let { regionLead = "" } = $$props;
  let { regionLabel = "" } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { active = getContext("active") } = $$props;
  let { spacing = getContext("spacing") } = $$props;
  let { width = getContext("width") } = $$props;
  let { aspectRatio = getContext("aspectRatio") } = $$props;
  let elemInput;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.regionLead === void 0 && $$bindings.regionLead && regionLead !== void 0)
    $$bindings.regionLead(regionLead);
  if ($$props.regionLabel === void 0 && $$bindings.regionLabel && regionLabel !== void 0)
    $$bindings.regionLabel(regionLabel);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.aspectRatio === void 0 && $$bindings.aspectRatio && aspectRatio !== void 0)
    $$bindings.aspectRatio(aspectRatio);
  classActive = group === value ? active : "";
  classesBase = `${cBase$1} ${$$props.class || ""}`;
  classesWrapper = `${cWrapper$1} ${aspectRatio} ${width} ${hover} ${classActive}`;
  classesInterface = `${cInterface} ${spacing}`;
  classesLead = `${regionLead}`;
  classesLabel = `${cLabel$1} ${regionLabel}`;
  return `<label class="${"app-rail-tile " + escape(classesBase, true)}" data-testid="app-rail-tile"${add_attribute("title", title, 0)}>   <button class="${"app-rail-wrapper " + escape(classesWrapper, true)}" tabindex="0"> <div class="h-0 w-0 overflow-hidden"><input${spread(
    [
      { type: "radio" },
      { name: escape_attribute_value(name) },
      { value: escape_attribute_value(value) },
      escape_object(prunedRestProps()),
      { tabindex: "-1" }
    ],
    {}
  )}${add_attribute("this", elemInput, 0)}${value === group ? add_attribute("checked", true, 1) : ""}></div>  <div class="${"app-rail-interface " + escape(classesInterface, true)}">${$$slots.lead ? `<div class="${"app-rail-lead " + escape(classesLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``} <div class="${"app-rail-label " + escape(classesLabel, true)}">${slots.default ? slots.default({}) : ``}</div></div></button></label>`;
});
const cBase = "unstyled";
const cWrapper = "w-full flex flex-col justify-center items-stretch text-center space-y-1";
const cLabel = "font-bold text-xs";
const AppRailAnchor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classActive;
  let classesBase;
  let classesWrapper;
  let classesLead;
  let classesLabel;
  let $$restProps = compute_rest_props($$props, ["selected", "regionLead", "regionLabel", "hover", "active", "spacing", "aspectRatio"]);
  let $$slots = compute_slots(slots);
  let { selected = false } = $$props;
  let { regionLead = "flex justify-center items-center" } = $$props;
  let { regionLabel = "" } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { active = getContext("active") } = $$props;
  let { spacing = getContext("spacing") } = $$props;
  let { aspectRatio = getContext("aspectRatio") } = $$props;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.regionLead === void 0 && $$bindings.regionLead && regionLead !== void 0)
    $$bindings.regionLead(regionLead);
  if ($$props.regionLabel === void 0 && $$bindings.regionLabel && regionLabel !== void 0)
    $$bindings.regionLabel(regionLabel);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.aspectRatio === void 0 && $$bindings.aspectRatio && aspectRatio !== void 0)
    $$bindings.aspectRatio(aspectRatio);
  classActive = selected ? active : "";
  classesBase = `${cBase} ${$$props.class || ""}`;
  classesWrapper = `${cWrapper} ${aspectRatio} ${hover} ${spacing} ${classActive}`;
  classesLead = `${regionLead}`;
  classesLabel = `${cLabel} ${regionLabel}`;
  return `<a${spread(
    [
      {
        class: "app-rail-anchor " + escape(classesBase, true)
      },
      {
        href: escape_attribute_value($$props.href)
      },
      escape_object(prunedRestProps()),
      { "data-testid": "app-rail-anchor" }
    ],
    {}
  )}><div class="${"app-rail-wrapper " + escape(classesWrapper, true)}">${$$slots.lead ? `<div class="${"app-rail-lead " + escape(classesLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``} <div class="${"app-rail-label " + escape(classesLabel, true)}">${slots.default ? slots.default({}) : ``}</div></div></a>`;
});
export {
  AppRail as A,
  AppRailAnchor as a,
  AppRailTile as b
};

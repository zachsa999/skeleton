import { c as create_ssr_component, s as setContext, e as escape, d as add_attribute, j as compute_rest_props, k as getContext, f as spread, l as escape_attribute_value, g as escape_object, v as validate_component, i as compute_slots } from "./ssr.js";
import "./ProgressBar.svelte_svelte_type_style_lang.js";
const cBase$2 = "p-1";
const RadioGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { display = "inline-flex" } = $$props;
  let { flexDirection = "flex-row" } = $$props;
  let { gap = "gap-1" } = $$props;
  let { background = "bg-surface-200-700-token" } = $$props;
  let { border = "border-token border-surface-400-500-token" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  let { padding = "px-4 py-1" } = $$props;
  let { active = "variant-filled" } = $$props;
  let { hover = "hover:variant-soft" } = $$props;
  let { color = "" } = $$props;
  let { fill = "" } = $$props;
  let { regionLabel = "" } = $$props;
  let { labelledby = "" } = $$props;
  setContext("rounded", rounded);
  setContext("padding", padding);
  setContext("active", active);
  setContext("hover", hover);
  setContext("color", color);
  setContext("fill", fill);
  setContext("regionLabel", regionLabel);
  if ($$props.display === void 0 && $$bindings.display && display !== void 0)
    $$bindings.display(display);
  if ($$props.flexDirection === void 0 && $$bindings.flexDirection && flexDirection !== void 0)
    $$bindings.flexDirection(flexDirection);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.regionLabel === void 0 && $$bindings.regionLabel && regionLabel !== void 0)
    $$bindings.regionLabel(regionLabel);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase$2} ${display} ${flexDirection} ${gap} ${background} ${border} ${rounded} ${$$props.class ?? ""}`;
  return `<div class="${"radio-group " + escape(classesBase, true)}" data-testid="radio-group" role="radiogroup"${add_attribute("aria-labelledby", labelledby, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const cBase$1 = "flex-auto";
const cWrapper = "text-base text-center cursor-pointer";
const cDisabled = "opacity-50 cursor-not-allowed";
const RadioItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let checked;
  let classesActive;
  let classesDisabled;
  let classsBase;
  let classesWrapper;
  let $$restProps = compute_rest_props($$props, [
    "group",
    "name",
    "value",
    "title",
    "label",
    "rounded",
    "padding",
    "active",
    "hover",
    "color",
    "fill",
    "regionLabel"
  ]);
  let { group } = $$props;
  let { name } = $$props;
  let { value } = $$props;
  let { title = "" } = $$props;
  let { label = "" } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { active = getContext("active") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { color = getContext("color") } = $$props;
  let { fill = getContext("fill") } = $$props;
  let { regionLabel = getContext("regionLabel") } = $$props;
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
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.regionLabel === void 0 && $$bindings.regionLabel && regionLabel !== void 0)
    $$bindings.regionLabel(regionLabel);
  checked = value === group;
  classesActive = checked ? `${active} ${color} ${fill}` : hover;
  classesDisabled = $$props.disabled ? cDisabled : "";
  classsBase = `${cBase$1}`;
  classesWrapper = `${cWrapper} ${padding} ${rounded} ${classesActive} ${classesDisabled} ${$$props.class ?? ""}`;
  return `<label class="${"radio-label " + escape(classsBase, true) + " " + escape(regionLabel, true)}"> <div class="${"radio-item " + escape(classesWrapper, true)}" data-testid="radio-item" role="radio"${add_attribute("aria-checked", checked, 0)}${add_attribute("aria-label", label, 0)} tabindex="0"${add_attribute("title", title, 0)}> <div class="h-0 w-0 overflow-hidden"><input${spread(
    [
      { type: "radio" },
      { name: escape_attribute_value(name) },
      { value: escape_attribute_value(value) },
      escape_object(prunedRestProps()),
      { tabindex: "-1" }
    ],
    {}
  )}${add_attribute("this", elemInput, 0)}${value === group ? add_attribute("checked", true, 1) : ""}></div> ${slots.default ? slots.default({}) : ``}</div></label>`;
});
const backgrounds = {
  "bg-transparent": "bg-transparent",
  neutral: "bg-white/10 dark:bg-black/10",
  "neutral-opaque": "bg-white/50 dark:bg-black/50",
  // Surfaces
  "bg-surface-50": "bg-surface-50 text-surface-900",
  "bg-surface-900": "bg-surface-900 text-surface-50",
  // Filled
  "variant-filled-surface": `variant-filled-surface`,
  "variant-filled-primary": `variant-filled-primary`,
  "variant-filled-secondary": `variant-filled-secondary`,
  "variant-filled-tertiary": `variant-filled-tertiary`,
  "variant-filled-success": `variant-filled-success`,
  "variant-filled-warning": `variant-filled-warning`,
  "variant-filled-error": `variant-filled-error`,
  // Gradient
  "primary-to-secondary": "bg-gradient-to-br variant-gradient-primary-secondary",
  "secondary-to-tertiary": "bg-gradient-to-br variant-gradient-secondary-tertiary",
  "tertiary-to-primary": "bg-gradient-to-br variant-gradient-tertiary-primary",
  "secondary-to-primary": "bg-gradient-to-br variant-gradient-secondary-primary",
  "tertiary-to-secondary": "bg-gradient-to-br variant-gradient-tertiary-secondary",
  "primary-to-tertiary": "bg-gradient-to-br variant-gradient-primary-tertiary",
  "success-to-warning": "bg-gradient-to-br variant-gradient-success-warning",
  "warning-to-error": "bg-gradient-to-br variant-gradient-warning-error",
  "error-to-success": "bg-gradient-to-br variant-gradient-error-success",
  "warning-to-success": "bg-gradient-to-br variant-gradient-warning-success",
  "error-to-warning": "bg-gradient-to-br variant-gradient-error-warning",
  "success-to-error": "bg-gradient-to-br variant-gradient-success-error"
};
const variants = [
  {
    label: "Utility Classes",
    list: ["bg-initial", "!bg-transparent"]
  },
  // filled
  {
    label: "Filled Variants",
    list: [
      "variant-filled",
      "variant-filled-surface",
      "variant-filled-primary",
      "variant-filled-secondary",
      "variant-filled-tertiary",
      "variant-filled-success",
      "variant-filled-warning",
      "variant-filled-error"
    ]
  },
  // ghost
  {
    label: "Ghost Variants",
    list: [
      "variant-ghost",
      "variant-ghost-surface",
      "variant-ghost-primary",
      "variant-ghost-secondary",
      "variant-ghost-tertiary",
      "variant-ghost-success",
      "variant-ghost-warning",
      "variant-ghost-error"
    ]
  },
  // soft
  {
    label: "Soft Variants",
    list: [
      "variant-soft",
      "variant-soft-surface",
      "variant-soft-primary",
      "variant-soft-secondary",
      "variant-soft-tertiary",
      "variant-soft-success",
      "variant-soft-warning",
      "variant-soft-error"
    ]
  },
  // ringed
  {
    label: "Ringed Variants",
    list: [
      "variant-ringed",
      "variant-ringed-surface",
      "variant-ringed-primary",
      "variant-ringed-secondary",
      "variant-ringed-tertiary",
      "variant-ringed-success",
      "variant-ringed-warning",
      "variant-ringed-error"
    ]
  },
  // gradient
  {
    label: "Gradient Variants",
    list: [
      "bg-gradient-to-br variant-gradient-primary-secondary",
      "bg-gradient-to-br variant-gradient-secondary-tertiary",
      "bg-gradient-to-br variant-gradient-tertiary-primary",
      "bg-gradient-to-br variant-gradient-secondary-primary",
      "bg-gradient-to-br variant-gradient-tertiary-secondary",
      "bg-gradient-to-br variant-gradient-primary-tertiary",
      "bg-gradient-to-br variant-gradient-success-warning",
      "bg-gradient-to-br variant-gradient-warning-error",
      "bg-gradient-to-br variant-gradient-error-success",
      "bg-gradient-to-br variant-gradient-warning-success",
      "bg-gradient-to-br variant-gradient-error-warning",
      "bg-gradient-to-br variant-gradient-success-error"
    ]
  }
];
const cBase = "shadow-2xl shadow-surface-500/10 dark:shadow-black/10 rounded-container-token overflow-hidden";
const cHeader = "bg-surface-200-700-token p-4 flex justify-between items-center gap-4";
const cViewport = "p-4 md:p-10 space-y-4";
const cContent = "flex justify-center items-center mx-auto transition-[width] duration-200";
const cFooter = "variant-soft p-4";
const cSource = "bg-surface-100-800-token p-4 space-y-4";
const DocsPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let resizableWidth;
  let classesBase;
  let classesHeader;
  let classesViewport;
  let classesPreview;
  let classesFooter;
  let classesSource;
  let $$slots = compute_slots(slots);
  let { label = "" } = $$props;
  let { responsive = false } = $$props;
  let { background = "primary-to-secondary" } = $$props;
  let { regionHeader = "" } = $$props;
  let { regionViewport = "" } = $$props;
  let { regionPreview = "" } = $$props;
  let { regionFooter = "" } = $$props;
  let { regionSource = "" } = $$props;
  let tabView = "preview";
  let radioSize = "full";
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.responsive === void 0 && $$bindings.responsive && responsive !== void 0)
    $$bindings.responsive(responsive);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.regionHeader === void 0 && $$bindings.regionHeader && regionHeader !== void 0)
    $$bindings.regionHeader(regionHeader);
  if ($$props.regionViewport === void 0 && $$bindings.regionViewport && regionViewport !== void 0)
    $$bindings.regionViewport(regionViewport);
  if ($$props.regionPreview === void 0 && $$bindings.regionPreview && regionPreview !== void 0)
    $$bindings.regionPreview(regionPreview);
  if ($$props.regionFooter === void 0 && $$bindings.regionFooter && regionFooter !== void 0)
    $$bindings.regionFooter(regionFooter);
  if ($$props.regionSource === void 0 && $$bindings.regionSource && regionSource !== void 0)
    $$bindings.regionSource(regionSource);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    resizableWidth = radioSize === "mobile" ? "w-[320px]" : "w-full";
    classesBase = `${cBase} ${$$props.class ?? ""}`;
    classesHeader = `${cHeader} ${regionHeader}`;
    classesViewport = `${cViewport} ${backgrounds[background]} ${regionViewport}`;
    classesPreview = `${cContent} ${resizableWidth} ${regionPreview}`;
    classesFooter = `${cFooter} ${regionFooter}`;
    classesSource = `${cSource} ${regionSource}`;
    $$rendered = `<div class="${"previewer " + escape(classesBase, true)}"> <header class="${"previewer-header " + escape(classesHeader, true)}">${label ? `<span class="text-2xl font-bold capitalize">${escape(label)}</span>` : ` ${validate_component(RadioGroup, "RadioGroup").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(RadioItem, "RadioItem").$$render(
          $$result,
          {
            name: "view",
            value: "preview",
            title: "Preview",
            group: tabView
          },
          {
            group: ($$value) => {
              tabView = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `<i class="fa-solid fa-eye text-sm"></i>`;
            }
          }
        )} ${validate_component(RadioItem, "RadioItem").$$render(
          $$result,
          {
            name: "view",
            value: "code",
            title: "Code",
            group: tabView
          },
          {
            group: ($$value) => {
              tabView = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `<i class="fa-solid fa-code text-sm"></i>`;
            }
          }
        )}`;
      }
    })} <div class="flex justify-between gap-4"> ${responsive ? `${validate_component(RadioGroup, "RadioGroup").$$render($$result, { class: "hidden md:flex" }, {}, {
      default: () => {
        return `${validate_component(RadioItem, "RadioItem").$$render(
          $$result,
          {
            name: "size",
            value: "mobile",
            group: radioSize
          },
          {
            group: ($$value) => {
              radioSize = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `<i class="fa-solid fa-mobile-screen text-sm"></i>`;
            }
          }
        )} ${validate_component(RadioItem, "RadioItem").$$render(
          $$result,
          {
            name: "size",
            value: "full",
            group: radioSize
          },
          {
            group: ($$value) => {
              radioSize = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `<i class="fa-solid fa-display text-sm"></i>`;
            }
          }
        )}`;
      }
    })}` : ``}  <button class="${"btn-icon " + escape("variant-soft", true)}" title="Backgrounds"><i class="fa-solid fa-swatchbook text-sm"></i></button></div>`}</header> ${tabView === "preview" ? ` ${``}  <div class="${"previewer-viewport " + escape(classesViewport, true)}"> ${$$slots.lead ? `<div class="previewer-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``}  <div class="${"previewer-preview " + escape(classesPreview, true)}">${slots.preview ? slots.preview({}) : `(preview)`}</div>  ${$$slots.trail ? `<div class="previewer-trail">${slots.trail ? slots.trail({}) : ``}</div>` : ``}</div> ${$$slots.footer ? `<footer class="${"previewer-footer " + escape(classesFooter, true)}">${slots.footer ? slots.footer({}) : ``}</footer>` : ``}` : `${tabView === "code" ? ` <div class="${"previewer-source " + escape(classesSource, true)}">${slots.source ? slots.source({}) : `(source)`}</div>` : ``}`}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  DocsPreview as D,
  RadioGroup as R,
  RadioItem as a,
  variants as v
};

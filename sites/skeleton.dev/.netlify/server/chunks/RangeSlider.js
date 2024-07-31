import { c as create_ssr_component, j as compute_rest_props, e as escape, d as add_attribute, f as spread, l as escape_attribute_value, g as escape_object, h as each, i as compute_slots } from "./ssr.js";
const cBase = "space-y-2";
const cBaseLabel = "";
const cBaseContent = "flex justify-center py-2";
const cBaseInput = "w-full h-2";
const RangeSlider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesInput;
  let $$restProps = compute_rest_props($$props, ["name", "id", "value", "min", "max", "step", "ticked", "accent", "label"]);
  let $$slots = compute_slots(slots);
  let { name } = $$props;
  let { id = String(Math.random()) } = $$props;
  let { value = 0 } = $$props;
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { step = 1 } = $$props;
  let { ticked = false } = $$props;
  let { accent = "accent-surface-900 dark:accent-surface-50" } = $$props;
  let { label = "" } = $$props;
  let tickmarks;
  function setTicks() {
    if (ticked == false)
      return;
    tickmarks = Array.from({ length: max - min + 1 }, (_, i) => i + min);
  }
  if (ticked)
    setTicks();
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.ticked === void 0 && $$bindings.ticked && ticked !== void 0)
    $$bindings.ticked(ticked);
  if ($$props.accent === void 0 && $$bindings.accent && accent !== void 0)
    $$bindings.accent(accent);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  classesBase = `${cBase} ${$$props.class ?? ""}`;
  classesInput = `${cBaseInput} ${accent}`;
  return `<div class="${"range-slider " + escape(classesBase, true)}" data-testid="range-slider"> ${$$slots.default ? `<label class="${"range-slider-label " + escape(cBaseLabel, true)}"${add_attribute("for", id, 0)}>${slots.default ? slots.default({}) : ``}</label>` : ``}  <div class="${"range-content " + escape(cBaseContent, true)}"> <input${spread(
    [
      { type: "range" },
      { id: escape_attribute_value(id) },
      { name: escape_attribute_value(name) },
      {
        class: "range-slider-input " + escape(classesInput, true)
      },
      { list: "tickmarks-" + escape(id, true) },
      {
        "aria-label": escape_attribute_value(label)
      },
      { min: escape_attribute_value(min) },
      { max: escape_attribute_value(max) },
      { step: escape_attribute_value(step) },
      escape_object(prunedRestProps())
    ],
    {}
  )}${add_attribute("value", value, 0)}>  ${ticked && tickmarks && tickmarks.length ? `<datalist id="${"tickmarks-" + escape(id, true)}" class="range-slider-ticks">${each(tickmarks, (tm) => {
    return `<option${add_attribute("value", tm, 0)}${add_attribute("label", tm, 0)}></option>`;
  })}</datalist>` : ``}</div>  ${$$slots.trail ? `<div class="range-slider-trail">${slots.trail ? slots.trail({}) : ``}</div>` : ``}</div>`;
});
export {
  RangeSlider as R
};

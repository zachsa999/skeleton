import { c as create_ssr_component, a as subscribe, b as createEventDispatcher, s as setContext, e as escape, h as each, o as set_store_value, k as getContext, p as onDestroy, d as add_attribute, i as compute_slots, v as validate_component } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import { p as prefersReducedMotionStore } from "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { S as SlideToggle } from "../../../../../chunks/SlideToggle.js";
import { w as writable } from "../../../../../chunks/index.js";
import { b as fade } from "../../../../../chunks/index2.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const cBase$1 = "space-y-4";
const cHeader$1 = "flex items-center border-t mt-[15px]";
const cHeaderStep = "-mt-[15px] transition-all duration-300";
const cContent$1 = "";
const Stepper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isActive;
  let classesBase;
  let classesHeader;
  let classesHeaderStep;
  let classesBadge;
  let classesContent;
  let $state, $$unsubscribe_state;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  const dispatch = createEventDispatcher();
  let { gap = "gap-4" } = $$props;
  let { stepTerm = "Step" } = $$props;
  let { badge = "variant-filled-surface" } = $$props;
  let { active = "variant-filled" } = $$props;
  let { border = "border-surface-400-500-token" } = $$props;
  let { start = 0 } = $$props;
  let { justify = "justify-between" } = $$props;
  let { buttonBack = "variant-ghost" } = $$props;
  let { buttonBackType = "button" } = $$props;
  let { buttonBackLabel = "&larr; Back" } = $$props;
  let { buttonNext = "variant-filled" } = $$props;
  let { buttonNextType = "button" } = $$props;
  let { buttonNextLabel = "Next &rarr;" } = $$props;
  let { buttonComplete = "variant-filled-primary" } = $$props;
  let { buttonCompleteType = "button" } = $$props;
  let { buttonCompleteLabel = "Complete" } = $$props;
  let { regionHeader = "" } = $$props;
  let { regionContent = "" } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { transitionIn = fade } = $$props;
  let { transitionInParams = { duration: 100 } } = $$props;
  let { transitionOut = fade } = $$props;
  let { transitionOutParams = { duration: 100 } } = $$props;
  let state = writable({ current: start, total: 0 });
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  async function onNext(locked, stepIndex) {
    await new Promise((resolve) => setTimeout(resolve));
    if (locked)
      return;
    set_store_value(state, $state.current++, $state);
    dispatch("next", { step: stepIndex, state: $state });
    dispatch("step", { step: stepIndex, state: $state });
  }
  function onBack(stepIndex) {
    set_store_value(state, $state.current--, $state);
    dispatch("back", { step: stepIndex, state: $state });
    dispatch("step", { step: stepIndex, state: $state });
  }
  function onComplete(stepIndex) {
    dispatch("complete", { step: stepIndex, state: $state });
  }
  setContext("state", state);
  setContext("stepTerm", stepTerm);
  setContext("gap", gap);
  setContext("justify", justify);
  setContext("onNext", onNext);
  setContext("onBack", onBack);
  setContext("onComplete", onComplete);
  setContext("buttonBack", buttonBack);
  setContext("buttonBackType", buttonBackType);
  setContext("buttonBackLabel", buttonBackLabel);
  setContext("buttonNext", buttonNext);
  setContext("buttonNextType", buttonNextType);
  setContext("buttonNextLabel", buttonNextLabel);
  setContext("buttonComplete", buttonComplete);
  setContext("buttonCompleteType", buttonCompleteType);
  setContext("buttonCompleteLabel", buttonCompleteLabel);
  setContext("transitions", transitions);
  setContext("transitionIn", transitionIn);
  setContext("transitionInParams", transitionInParams);
  setContext("transitionOut", transitionOut);
  setContext("transitionOutParams", transitionOutParams);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.stepTerm === void 0 && $$bindings.stepTerm && stepTerm !== void 0)
    $$bindings.stepTerm(stepTerm);
  if ($$props.badge === void 0 && $$bindings.badge && badge !== void 0)
    $$bindings.badge(badge);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.buttonBack === void 0 && $$bindings.buttonBack && buttonBack !== void 0)
    $$bindings.buttonBack(buttonBack);
  if ($$props.buttonBackType === void 0 && $$bindings.buttonBackType && buttonBackType !== void 0)
    $$bindings.buttonBackType(buttonBackType);
  if ($$props.buttonBackLabel === void 0 && $$bindings.buttonBackLabel && buttonBackLabel !== void 0)
    $$bindings.buttonBackLabel(buttonBackLabel);
  if ($$props.buttonNext === void 0 && $$bindings.buttonNext && buttonNext !== void 0)
    $$bindings.buttonNext(buttonNext);
  if ($$props.buttonNextType === void 0 && $$bindings.buttonNextType && buttonNextType !== void 0)
    $$bindings.buttonNextType(buttonNextType);
  if ($$props.buttonNextLabel === void 0 && $$bindings.buttonNextLabel && buttonNextLabel !== void 0)
    $$bindings.buttonNextLabel(buttonNextLabel);
  if ($$props.buttonComplete === void 0 && $$bindings.buttonComplete && buttonComplete !== void 0)
    $$bindings.buttonComplete(buttonComplete);
  if ($$props.buttonCompleteType === void 0 && $$bindings.buttonCompleteType && buttonCompleteType !== void 0)
    $$bindings.buttonCompleteType(buttonCompleteType);
  if ($$props.buttonCompleteLabel === void 0 && $$bindings.buttonCompleteLabel && buttonCompleteLabel !== void 0)
    $$bindings.buttonCompleteLabel(buttonCompleteLabel);
  if ($$props.regionHeader === void 0 && $$bindings.regionHeader && regionHeader !== void 0)
    $$bindings.regionHeader(regionHeader);
  if ($$props.regionContent === void 0 && $$bindings.regionContent && regionContent !== void 0)
    $$bindings.regionContent(regionContent);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0)
    $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0)
    $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0)
    $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0)
    $$bindings.transitionOutParams(transitionOutParams);
  isActive = (step) => step === $state.current;
  classesBase = `${cBase$1} ${$$props.class ?? ""}`;
  classesHeader = `${cHeader$1} ${border} ${gap} ${regionHeader}`;
  classesHeaderStep = `${cHeaderStep}`;
  classesBadge = (step) => isActive(step) ? active : badge;
  classesContent = `${cContent$1} ${regionContent}`;
  $$unsubscribe_state();
  $$unsubscribe_prefersReducedMotionStore();
  return `<div class="${"stepper " + escape(classesBase, true)}" data-testid="stepper"> ${$state.total ? `<header class="${"stepper-header " + escape(classesHeader, true)}">${each(Array.from(Array($state.total).keys()), (step) => {
    return `<div class="${[
      "stepper-header-step " + escape(classesHeaderStep, true),
      isActive(step) ? "flex-1" : ""
    ].join(" ").trim()}"><span class="${"badge " + escape(classesBadge(step), true)}">${escape(isActive(step) ? `${stepTerm} ${step + 1}` : step + 1)}</span> </div>`;
  })}</header>` : ``}  <div class="${"stepper-content " + escape(classesContent, true)}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const cBase = "space-y-4";
const cHeader = "text-2xl font-bold";
const cContent = "space-y-4";
const cNavigation = "flex";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesHeader;
  let classesContent;
  let classesNavigation;
  let $$slots = compute_slots(slots);
  let $state, $$unsubscribe_state;
  let { locked = false } = $$props;
  let { regionHeader = "" } = $$props;
  let { regionContent = "" } = $$props;
  let { regionNavigation = "" } = $$props;
  let { state = getContext("state") } = $$props;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  let { stepTerm = getContext("stepTerm") } = $$props;
  let { gap = getContext("gap") } = $$props;
  let { justify = getContext("justify") } = $$props;
  let { onNext = getContext("onNext") } = $$props;
  let { onBack = getContext("onBack") } = $$props;
  let { onComplete = getContext("onComplete") } = $$props;
  let { buttonBack = getContext("buttonBack") } = $$props;
  let { buttonBackType = getContext("buttonBackType") } = $$props;
  let { buttonBackLabel = getContext("buttonBackLabel") } = $$props;
  let { buttonNext = getContext("buttonNext") } = $$props;
  let { buttonNextType = getContext("buttonNextType") } = $$props;
  let { buttonNextLabel = getContext("buttonNextLabel") } = $$props;
  let { buttonComplete = getContext("buttonComplete") } = $$props;
  let { buttonCompleteType = getContext("buttonCompleteType") } = $$props;
  let { buttonCompleteLabel = getContext("buttonCompleteLabel") } = $$props;
  let { transitions = getContext("transitions") } = $$props;
  let { transitionIn = getContext("transitionIn") } = $$props;
  let { transitionInParams = getContext("transitionInParams") } = $$props;
  let { transitionOut = getContext("transitionOut") } = $$props;
  let { transitionOutParams = getContext("transitionOutParams") } = $$props;
  const stepIndex = $state.total;
  set_store_value(state, $state.total++, $state);
  onDestroy(() => {
    set_store_value(state, $state.total--, $state);
  });
  if ($$props.locked === void 0 && $$bindings.locked && locked !== void 0)
    $$bindings.locked(locked);
  if ($$props.regionHeader === void 0 && $$bindings.regionHeader && regionHeader !== void 0)
    $$bindings.regionHeader(regionHeader);
  if ($$props.regionContent === void 0 && $$bindings.regionContent && regionContent !== void 0)
    $$bindings.regionContent(regionContent);
  if ($$props.regionNavigation === void 0 && $$bindings.regionNavigation && regionNavigation !== void 0)
    $$bindings.regionNavigation(regionNavigation);
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  if ($$props.stepTerm === void 0 && $$bindings.stepTerm && stepTerm !== void 0)
    $$bindings.stepTerm(stepTerm);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.onNext === void 0 && $$bindings.onNext && onNext !== void 0)
    $$bindings.onNext(onNext);
  if ($$props.onBack === void 0 && $$bindings.onBack && onBack !== void 0)
    $$bindings.onBack(onBack);
  if ($$props.onComplete === void 0 && $$bindings.onComplete && onComplete !== void 0)
    $$bindings.onComplete(onComplete);
  if ($$props.buttonBack === void 0 && $$bindings.buttonBack && buttonBack !== void 0)
    $$bindings.buttonBack(buttonBack);
  if ($$props.buttonBackType === void 0 && $$bindings.buttonBackType && buttonBackType !== void 0)
    $$bindings.buttonBackType(buttonBackType);
  if ($$props.buttonBackLabel === void 0 && $$bindings.buttonBackLabel && buttonBackLabel !== void 0)
    $$bindings.buttonBackLabel(buttonBackLabel);
  if ($$props.buttonNext === void 0 && $$bindings.buttonNext && buttonNext !== void 0)
    $$bindings.buttonNext(buttonNext);
  if ($$props.buttonNextType === void 0 && $$bindings.buttonNextType && buttonNextType !== void 0)
    $$bindings.buttonNextType(buttonNextType);
  if ($$props.buttonNextLabel === void 0 && $$bindings.buttonNextLabel && buttonNextLabel !== void 0)
    $$bindings.buttonNextLabel(buttonNextLabel);
  if ($$props.buttonComplete === void 0 && $$bindings.buttonComplete && buttonComplete !== void 0)
    $$bindings.buttonComplete(buttonComplete);
  if ($$props.buttonCompleteType === void 0 && $$bindings.buttonCompleteType && buttonCompleteType !== void 0)
    $$bindings.buttonCompleteType(buttonCompleteType);
  if ($$props.buttonCompleteLabel === void 0 && $$bindings.buttonCompleteLabel && buttonCompleteLabel !== void 0)
    $$bindings.buttonCompleteLabel(buttonCompleteLabel);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0)
    $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0)
    $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0)
    $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0)
    $$bindings.transitionOutParams(transitionOutParams);
  classesBase = `${cBase} ${$$props.class ?? ""}`;
  classesHeader = `${cHeader} ${regionHeader}`;
  classesContent = `${cContent} ${regionContent}`;
  classesNavigation = `${cNavigation} ${justify} ${gap} ${regionNavigation}`;
  $$unsubscribe_state();
  return `  ${stepIndex === $state.current ? `<div class="${"step " + escape(classesBase, true)}" data-testid="step"> <header class="${"step-header " + escape(classesHeader, true)}">${slots.header ? slots.header({}) : `${escape(stepTerm)} ${escape(stepIndex + 1)}`}</header>  <div class="${"step-content " + escape(classesContent, true)}">${slots.default ? slots.default({}) : `(${escape(stepTerm)} ${escape(stepIndex + 1)} Content)`}</div>  ${$state.total > 1 ? `<div class="${"step-navigation " + escape(classesNavigation, true)}">${stepIndex === 0 && $$slots.navigation ? ` <div class="step-navigation-slot">${slots.navigation ? slots.navigation({}) : ``}</div>` : ` <button${add_attribute("type", buttonBackType, 0)} class="${"btn " + escape(buttonBack, true)}" ${$state.current === 0 ? "disabled" : ""}><!-- HTML_TAG_START -->${buttonBackLabel}<!-- HTML_TAG_END --></button>`} ${stepIndex < $state.total - 1 ? ` <button${add_attribute("type", buttonNextType, 0)} class="${"btn " + escape(buttonNext, true)}" ${locked ? "disabled" : ""}>${locked ? `<svg class="w-3 aspect-square fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"></path></svg>` : ``} <span><!-- HTML_TAG_START -->${buttonNextLabel}<!-- HTML_TAG_END --></span></button>` : ` <button${add_attribute("type", buttonCompleteType, 0)} class="${"btn " + escape(buttonComplete, true)}" ${locked ? "disabled" : ""}><!-- HTML_TAG_START -->${buttonCompleteLabel}<!-- HTML_TAG_END --></button>`}</div>` : ``}</div>` : ``}`;
});
const sveldStepper = { "props": [{ "name": "gap", "kind": "let", "description": "Provide classes to style the stepper header gap.", "type": "string", "value": "'gap-4'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "stepTerm", "kind": "let", "description": 'Provide the verbiage that represents "Step".', "type": "string", "value": "'Step'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "badge", "kind": "let", "description": "Provide classes to style the stepper header badges.", "type": "string", "value": "'variant-filled-surface'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "active", "kind": "let", "description": "Provide classes to style the stepper header active step badge.", "type": "string", "value": "'variant-filled'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "border", "kind": "let", "description": "Provide classes to style the stepper header border.", "type": "string", "value": "'border-surface-400-500-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "start", "kind": "let", "description": "Provide the initially selected step", "type": "number", "value": "0", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "justify", "kind": "let", "description": "Set the justification for the step navigation buttons.", "type": "string", "value": "'justify-between'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonBack", "kind": "let", "description": "Provide arbitrary classes to style the back button.", "type": "string", "value": "'variant-ghost'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonBackType", "kind": "let", "description": "Set the type of the back button.", "type": "string", "value": "'button'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonBackLabel", "kind": "let", "description": "Provide the HTML label content for the back button.", "type": "string", "value": "'&larr; Back'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonNext", "kind": "let", "description": "Provide arbitrary classes to style the next button.", "type": "string", "value": "'variant-filled'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonNextType", "kind": "let", "description": "Set the type of the next button.", "type": "string", "value": "'button'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonNextLabel", "kind": "let", "description": "Provide the HTML label content for the next button.", "type": "string", "value": "'Next &rarr;'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonComplete", "kind": "let", "description": "Provide arbitrary classes to style the complete button.", "type": "string", "value": "'variant-filled-primary'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonCompleteType", "kind": "let", "description": "Set the type of the complete button.", "type": "string", "value": "'button'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonCompleteLabel", "kind": "let", "description": "Provide the HTML label content for the complete button.", "type": "string", "value": "'Complete'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionHeader", "kind": "let", "description": "Provide arbitrary classes to the stepper header region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionContent", "kind": "let", "description": "Provide arbitrary classes to the stepper content region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitions", "kind": "let", "description": "Enable/Disable transitions", "type": "boolean", "value": "!$prefersReducedMotionStore", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionIn", "kind": "let", "description": "Provide the transition to used on entry.", "type": "TransitionIn", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionInParams", "kind": "let", "description": "Transition params provided to `transitionIn`.", "type": "TransitionParams", "value": "{ duration: 100 }", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionOut", "kind": "let", "description": "Provide the transition to used on exit.", "type": "TransitionOut", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionOutParams", "kind": "let", "description": "Transition params provided to `transitionOut`.", "type": "TransitionParams", "value": "{ duration: 100 }", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "__default__", "default": true, "slot_props": "{}" }], "events": [{ "type": "dispatched", "name": "next", "detail": " step: number, $state: StepperState ", "description": "Fires when the NEXT button is pressed per step." }, { "type": "dispatched", "name": "step", "detail": " step: number, $state: StepperState ", "description": "Fires when a next/previous step occurs." }, { "type": "dispatched", "name": "back", "detail": " step: number, $state: StepperState ", "description": "Fires when the BACK button is pressed per step." }, { "type": "dispatched", "name": "complete", "detail": " step: number, $state: StepperState ", "description": "Fires when the COMPLETE button is pressed." }], "typedefs": [] };
const sveldStep = { "props": [{ "name": "locked", "kind": "let", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionHeader", "kind": "let", "description": "Provide arbitrary classes to the step header region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionContent", "kind": "let", "description": "Provide arbitrary classes to the step content region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionNavigation", "kind": "let", "description": "Provide arbitrary classes to the step navigation region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "state", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "stepTerm", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "gap", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "justify", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "onNext", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "onBack", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "onComplete", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonBack", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonBackType", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonBackLabel", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonNext", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonNextType", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonNextLabel", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonComplete", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonCompleteType", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "buttonCompleteLabel", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitions", "kind": "let", "description": "Enable/Disable transitions", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionIn", "kind": "let", "description": "Provide the transition to used on entry.", "type": "TransitionIn", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionInParams", "kind": "let", "description": "Transition params provided to `transitionIn`.", "type": "TransitionParams", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionOut", "kind": "let", "description": "Provide the transition to used on exit.", "type": "TransitionOut", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionOutParams", "kind": "let", "description": "Transition params provided to `transitionOut`.", "type": "TransitionParams", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "__default__", "default": true, "fallback": "({stepTerm} {stepIndex + 1} Content)", "slot_props": "{}" }, { "name": "header", "default": false, "fallback": "{stepTerm} {stepIndex + 1}", "slot_props": "{}", "description": "Overrides the header text label." }, { "name": "navigation", "default": false, "slot_props": "{}", "description": "Overrides the Back button position for the first step only." }], "events": [], "typedefs": [] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Component,
    name: "Steppers",
    description: "Divide and present content in sequenced steps.",
    imports: ["Stepper", "Step"],
    source: "packages/skeleton/src/lib/components/Stepper",
    components: [
      { label: "Stepper", sveld: sveldStepper },
      {
        label: "Step",
        sveld: sveldStep,
        overrideProps: [
          "gap",
          "stepTerm",
          "justify",
          "buttonBack",
          "buttonBackLabel",
          "buttonNext",
          "buttonNextLabel",
          "buttonComplete",
          "buttonCompleteLabel"
        ]
      }
    ],
    transitionIn: "fade",
    transitionOut: "fade"
  };
  let locked = true;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
      usage: () => {
        return ` <p data-svelte-h="svelte-bg2vrw">Create a set of Steps within the Stepper, then use the <code class="code">on:complete</code> event to detect when all steps are
			complete. Since horizontal space may be limited on small screens, we recommend no more than <em>five</em> steps at max.</p>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1ax8yfs">Event Handlers</h2> <h3 class="h3" data-svelte-h="svelte-keqv5j">Complete Event</h3> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `function onCompleteHandler(e: Event): void { console.log('event:complete', e); }`
          },
          {},
          {}
        )} ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `<Stepper on:complete={onCompleteHandler}>...</Stepper>`
          },
          {},
          {}
        )} <h3 class="h3" data-svelte-h="svelte-f6gceb">Next, Step and Previous</h3> <p data-svelte-h="svelte-14l747y">Events are fired when the next or previous steps are pressed, step fires for both cases.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `function onStepHandler(e: {detail: {state: {current: number, total: number}, step: number}}): void {
	console.log('event:step', e);
}`
          },
          {},
          {}
        )} ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `<Stepper on:next={onNextHandler} on:step={onStepHandler} on:back={onBackHandler}>...</Stepper>`
          },
          {},
          {}
        )} <blockquote class="blockquote" data-svelte-h="svelte-1qm1u46">TIP: <code class="code">e.detail.state.current</code> contains the step shown to the user after navigation,
				<code class="code">e.detail.step</code> contains the step where navigation occurred.</blockquote></section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-q22a86">Locked State</h2> <p data-svelte-h="svelte-1s5x9mv">Each Step can have a <code class="code">locked</code> property set, when set to <em>TRUE</em> this locks progression for that step. For
				example, you can lock a step until a form within it becomes valid.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `let lockedState: boolean = true;`
          },
          {},
          {}
        )} ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `<Step locked={lockedState}>...</Step>`
          },
          {},
          {}
        )}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-m8z71b">Step Term</h2> <p data-svelte-h="svelte-1p8hxau">Use the <code class="code">stepTerm</code> property to override text shown in the animated section at the top of the Stepper, which is
				useful if you need i18n support for other languages.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `
<!-- German: Schritt 1, Schritt 2, ... This will override the stepTerm in the Step Counter -->
<Stepper stepTerm="Schritt">
	<!-- French: Étape 1, Étape 2, ... -->
	<Step stepTerm='Étape'>...</Step>
	<!-- Spanish: Paso 1, Paso 2, ... -->
	<Step stepTerm='Paso'>...</Step>
</Stepper>
			`
          },
          {},
          {}
        )} <p data-svelte-h="svelte-g5f7go">This can be overwritten per each Step as well, which updates the <em>default</em> and <em>header</em> slot placeholder text.</p></section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-470xih">Navigation Slot</h2>  <p data-svelte-h="svelte-1p7u629">You may override the contents of the disabled Back button in the <u>first step</u> by supplying a <code class="code">navigation</code> slot. Use this to supply a message or implement a custom action. This is not supported for step two and forward.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `
<Step>
	<p>(content)</p>
	<svelte:fragment slot="navigation">
		<button class="btn variant-ghost-error" on:click={triggerAbort}>Abort</button>
	</svelte:fragment>
</Step>
			`
          },
          {},
          {}
        )}</section> `;
      },
      sandbox: () => {
        return `  <aside class="alert variant-ghost-error" data-svelte-h="svelte-q573ad"><i class="fa-solid fa-triangle-exclamation text-4xl"></i> <div class="alert-message" data-toc-ignore><h3 class="h3" data-toc-ignore>Deprecated</h3>  <p>This feature is being phased out as we transition to <a class="underline" href="https://github.com/skeletonlabs/skeleton/discussions/2375" target="_blank">Skeleton v3</a>. This will remain functional for all 2.x releases. Expect a dedicated v3 alternative as soon as possible.</p></div> <div class="alert-actions"><a class="btn variant-filled" href="https://github.com/skeletonlabs/skeleton/issues/1780" target="_blank">Learn More</a></div></aside>  ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<Stepper>
	<Step>
		<svelte:fragment slot="header">(header)</svelte:fragment>
		(content)
	</Step>
	<Step>
		<svelte:fragment slot="header">(header)</svelte:fragment>
		(content)
	</Step>
	<!-- ... -->
</Stepper>
			`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `<div class="w-full card p-4 text-token">${validate_component(Stepper, "Stepper").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Step, "Step").$$render($$result, {}, {}, {
                  header: () => {
                    return `Get Started!`;
                  },
                  default: () => {
                    return `<p data-svelte-h="svelte-15dfwbl">This example Stepper will teach you how to use this component. Tap <u>next</u> to proceed to the next step.</p> `;
                  }
                })} ${validate_component(Step, "Step").$$render($$result, {}, {}, {
                  header: () => {
                    return `Going Back.`;
                  },
                  default: () => {
                    return `<p data-svelte-h="svelte-1pbowez">The current step progress will be tracked at the top. Tap <u>back</u> to return to the previous step.</p>`;
                  }
                })} ${validate_component(Step, "Step").$$render($$result, { locked }, {}, {
                  header: () => {
                    return `A Locked Step.`;
                  },
                  default: () => {
                    return `<p data-svelte-h="svelte-j44exf">This Step component uses the <code class="code">locked</code> property to prevent progress. This is ideal for multi-step forms,
								such as registration. For now we&#39;ll simulate a successful validation condition using the toggle below.</p> <aside class="alert variant-ghost-warning"><div class="alert-message"><p>This step is <u>${escape(locked ? "Locked" : "Unlocked")}</u></p></div> <div class="alert-actions">${validate_component(SlideToggle, "SlideToggle").$$render(
                      $$result,
                      {
                        name: "locked-state",
                        active: "bg-warning-500",
                        checked: locked
                      },
                      {
                        checked: ($$value) => {
                          locked = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</div></aside>`;
                  }
                })} ${validate_component(Step, "Step").$$render($$result, {}, {}, {
                  header: () => {
                    return `Long Form Content.`;
                  },
                  default: () => {
                    return `<p data-svelte-h="svelte-gsh8u8">The steps will expand to fit content of any length.</p> <p data-svelte-h="svelte-19t9azr">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel expedita porro vero, saepe dicta repellendus facilis ab accusamus
								unde, tempora ut nobis eum. Veniam, architecto corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel
								expedita porro vero, saepe dicta repellendus facilis ab accusamus unde, tempora ut nobis eum. Veniam, architecto corrupti. Lorem
								ipsum dolor sit amet consectetur adipisicing elit. Itaque vel expedita porro vero, saepe dicta repellendus facilis ab accusamus
								unde, tempora ut nobis eum. Veniam, architecto corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel
								expedita porro vero, saepe dicta repellendus facilis ab accusamus unde, tempora ut nobis eum. Veniam, architecto corrupti. Lorem
								ipsum dolor sit amet consectetur adipisicing elit. Itaque vel expedita porro vero, saepe dicta repellendus facilis ab accusamus
								unde, tempora ut nobis eum. Veniam, architecto corrupti.
								</p>`;
                  }
                })} ${validate_component(Step, "Step").$$render($$result, {}, {}, {
                  header: () => {
                    return `Almost Done.`;
                  },
                  default: () => {
                    return `<p data-svelte-h="svelte-1a1b99o">A Complete button will appear on the last step. When the step is unlocked and the button pressed, an <code class="code">on:complete</code> event will be fired. You can use this trigger to submit form data to a server.</p>`;
                  }
                })}`;
              }
            })}</div>`;
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

import { c as create_ssr_component, a as subscribe, b as createEventDispatcher, e as escape, d as add_attribute, f as spread, g as escape_object, v as validate_component, m as missing_component, h as each, i as compute_slots } from "../../chunks/ssr.js";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import json from "highlight.js/lib/languages/json";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import shell from "highlight.js/lib/languages/shell";
import { s as storeHighlightJs } from "../../chunks/stores.js";
import { w as writable } from "../../chunks/index.js";
import { i as initializeModalStore, g as getModalStore } from "../../chunks/stores2.js";
import { i as initializeToastStore, g as getToastStore } from "../../chunks/stores3.js";
import { i as initializeDrawerStore, g as getDrawerStore } from "../../chunks/stores4.js";
import { p as prefersReducedMotionStore } from "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { A as AppShell } from "../../chunks/AppShell.js";
import { f as fly } from "../../chunks/index2.js";
import { computePosition, autoUpdate, offset, shift, flip, arrow } from "@floating-ui/dom";
import { p as page } from "../../chunks/stores5.js";
import { s as storePreview } from "../../chunks/stores6.js";
import { A as AppBar } from "../../chunks/AppBar.js";
import { L as LightSwitch } from "../../chunks/LightSwitch.js";
import { s as storeTheme, a as storeVercelProductionMode } from "../../chunks/stores7.js";
import { A as AppRail, a as AppRailAnchor, b as AppRailTile } from "../../chunks/AppRailAnchor.js";
import { L as ListBox, a as ListBoxItem } from "../../chunks/ListBoxItem.js";
const storePopup = writable(void 0);
function initializeStores() {
  initializeModalStore();
  initializeToastStore();
  initializeDrawerStore();
}
const cBackdrop$1 = "fixed top-0 left-0 right-0 bottom-0 bg-surface-backdrop-token p-4";
const cTransitionLayer = "w-full h-fit min-h-full overflow-y-auto flex justify-center";
const cModal = "block overflow-y-auto";
const cModalImage = "w-full h-auto";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cPosition;
  let classesBackdrop;
  let classesTransitionLayer;
  let classesModal;
  let parent;
  let $modalStore, $$unsubscribe_modalStore;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  createEventDispatcher();
  let { components = {} } = $$props;
  let { position = "items-center" } = $$props;
  let { background = "bg-surface-100-800-token" } = $$props;
  let { width = "w-modal" } = $$props;
  let { height = "h-auto" } = $$props;
  let { padding = "p-4" } = $$props;
  let { spacing = "space-y-4" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { shadow = "shadow-xl" } = $$props;
  let { zIndex = "z-[999]" } = $$props;
  let { buttonNeutral = "variant-ghost-surface" } = $$props;
  let { buttonPositive = "variant-filled" } = $$props;
  let { buttonTextCancel = "Cancel" } = $$props;
  let { buttonTextConfirm = "Confirm" } = $$props;
  let { buttonTextSubmit = "Submit" } = $$props;
  let { regionBackdrop = "" } = $$props;
  let { regionHeader = "text-2xl font-bold" } = $$props;
  let { regionBody = "max-h-[200px] overflow-hidden" } = $$props;
  let { regionFooter = "flex justify-end space-x-2" } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { transitionIn = fly } = $$props;
  let { transitionInParams = { duration: 150, opacity: 0, x: 0, y: 100 } } = $$props;
  let { transitionOut = fly } = $$props;
  let { transitionOutParams = { duration: 150, opacity: 0, x: 0, y: 100 } } = $$props;
  let promptValue;
  const buttonTextDefaults = {
    buttonTextCancel,
    buttonTextConfirm,
    buttonTextSubmit
  };
  let currentComponent;
  let modalElement;
  let windowHeight;
  let backdropOverflow = "overflow-y-hidden";
  const modalStore = getModalStore();
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  function handleModals(modals) {
    if (modals[0].type === "prompt")
      promptValue = modals[0].value;
    buttonTextCancel = modals[0].buttonTextCancel || buttonTextDefaults.buttonTextCancel;
    buttonTextConfirm = modals[0].buttonTextConfirm || buttonTextDefaults.buttonTextConfirm;
    buttonTextSubmit = modals[0].buttonTextSubmit || buttonTextDefaults.buttonTextSubmit;
    currentComponent = typeof modals[0].component === "string" ? components[modals[0].component] : modals[0].component;
  }
  function onModalHeightChange(modal) {
    let modalHeight = modal?.clientHeight;
    if (!modalHeight)
      modalHeight = modal?.firstChild?.clientHeight;
    if (!modalHeight)
      return;
    if (modalHeight > windowHeight) {
      backdropOverflow = "overflow-y-auto";
    } else {
      backdropOverflow = "overflow-y-hidden";
    }
  }
  function onClose() {
    if ($modalStore[0].response)
      $modalStore[0].response(false);
    modalStore.close();
  }
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.buttonNeutral === void 0 && $$bindings.buttonNeutral && buttonNeutral !== void 0)
    $$bindings.buttonNeutral(buttonNeutral);
  if ($$props.buttonPositive === void 0 && $$bindings.buttonPositive && buttonPositive !== void 0)
    $$bindings.buttonPositive(buttonPositive);
  if ($$props.buttonTextCancel === void 0 && $$bindings.buttonTextCancel && buttonTextCancel !== void 0)
    $$bindings.buttonTextCancel(buttonTextCancel);
  if ($$props.buttonTextConfirm === void 0 && $$bindings.buttonTextConfirm && buttonTextConfirm !== void 0)
    $$bindings.buttonTextConfirm(buttonTextConfirm);
  if ($$props.buttonTextSubmit === void 0 && $$bindings.buttonTextSubmit && buttonTextSubmit !== void 0)
    $$bindings.buttonTextSubmit(buttonTextSubmit);
  if ($$props.regionBackdrop === void 0 && $$bindings.regionBackdrop && regionBackdrop !== void 0)
    $$bindings.regionBackdrop(regionBackdrop);
  if ($$props.regionHeader === void 0 && $$bindings.regionHeader && regionHeader !== void 0)
    $$bindings.regionHeader(regionHeader);
  if ($$props.regionBody === void 0 && $$bindings.regionBody && regionBody !== void 0)
    $$bindings.regionBody(regionBody);
  if ($$props.regionFooter === void 0 && $$bindings.regionFooter && regionFooter !== void 0)
    $$bindings.regionFooter(regionFooter);
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
  {
    if ($modalStore.length)
      handleModals($modalStore);
  }
  {
    onModalHeightChange(modalElement);
  }
  cPosition = $modalStore[0]?.position ?? position;
  classesBackdrop = `${cBackdrop$1} ${regionBackdrop} ${zIndex} ${$$props.class ?? ""} ${$modalStore[0]?.backdropClasses ?? ""}`;
  classesTransitionLayer = `${cTransitionLayer} ${cPosition ?? ""}`;
  classesModal = `${cModal} ${background} ${width} ${height} ${padding} ${spacing} ${rounded} ${shadow} ${$modalStore[0]?.modalClasses ?? ""}`;
  parent = {
    position,
    // ---
    background,
    width,
    height,
    padding,
    spacing,
    rounded,
    shadow,
    // ---
    buttonNeutral,
    buttonPositive,
    buttonTextCancel,
    buttonTextConfirm,
    buttonTextSubmit,
    // ---
    regionBackdrop,
    regionHeader,
    regionBody,
    regionFooter,
    // ---
    onClose
  };
  $$unsubscribe_modalStore();
  $$unsubscribe_prefersReducedMotionStore();
  return ` ${$modalStore.length > 0 ? `   <div class="${"modal-backdrop " + escape(classesBackdrop, true) + " " + escape(backdropOverflow, true)}" data-testid="modal-backdrop"> <div class="${"modal-transition " + escape(classesTransitionLayer, true)}">${$modalStore[0].type !== "component" ? ` <div class="${"modal " + escape(classesModal, true)}" data-testid="modal" role="dialog" aria-modal="true"${add_attribute("aria-label", $modalStore[0].title ?? "", 0)}${add_attribute("this", modalElement, 0)}> ${$modalStore[0]?.title ? `<header class="${"modal-header " + escape(regionHeader, true)}"><!-- HTML_TAG_START -->${$modalStore[0].title}<!-- HTML_TAG_END --></header>` : ``}  ${$modalStore[0]?.body ? `<article class="${"modal-body " + escape(regionBody, true)}"><!-- HTML_TAG_START -->${$modalStore[0].body}<!-- HTML_TAG_END --></article>` : ``}  ${$modalStore[0]?.image && typeof $modalStore[0]?.image === "string" ? `<img class="${"modal-image " + escape(cModalImage, true)}"${add_attribute("src", $modalStore[0]?.image, 0)} alt="Modal">` : ``}  ${$modalStore[0].type === "alert" ? ` <footer class="${"modal-footer " + escape(regionFooter, true)}"><button type="button" class="${"btn " + escape(buttonNeutral, true)}">${escape(buttonTextCancel)}</button></footer>` : `${$modalStore[0].type === "confirm" ? ` <footer class="${"modal-footer " + escape(regionFooter, true)}"><button type="button" class="${"btn " + escape(buttonNeutral, true)}">${escape(buttonTextCancel)}</button> <button type="button" class="${"btn " + escape(buttonPositive, true)}">${escape(buttonTextConfirm)}</button></footer>` : `${$modalStore[0].type === "prompt" ? ` <form class="space-y-4"><input${spread(
    [
      { class: "modal-prompt-input input" },
      { name: "prompt" },
      { type: "text" },
      escape_object($modalStore[0].valueAttr)
    ],
    {}
  )}${add_attribute("value", promptValue, 0)}> <footer class="${"modal-footer " + escape(regionFooter, true)}"><button type="button" class="${"btn " + escape(buttonNeutral, true)}">${escape(buttonTextCancel)}</button> <button type="submit" class="${"btn " + escape(buttonPositive, true)}">${escape(buttonTextSubmit)}</button></footer></form>` : ``}`}`}</div>` : `  <div class="${"modal contents " + escape($modalStore[0]?.modalClasses ?? "", true)}" data-testid="modal-component" role="dialog" aria-modal="true"${add_attribute("aria-label", $modalStore[0].title ?? "", 0)}${add_attribute("this", modalElement, 0)}>${currentComponent?.slot ? `${validate_component(currentComponent?.ref || missing_component, "svelte:component").$$render($$result, Object.assign({}, currentComponent?.props, { parent }), {}, {
    default: () => {
      return `<!-- HTML_TAG_START -->${currentComponent?.slot}<!-- HTML_TAG_END -->`;
    }
  })}` : `${validate_component(currentComponent?.ref || missing_component, "svelte:component").$$render($$result, Object.assign({}, currentComponent?.props, { parent }), {}, {})}`}</div>`}</div></div>` : ``}`;
});
const cBackdrop = "fixed top-0 left-0 right-0 bottom-0 flex";
const cDrawer = "overflow-y-auto transition-transform";
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesPosition;
  let classesWidth;
  let classesHeight;
  let classesRounded;
  let classesBackdrop;
  let classesDrawer;
  let $drawerStore, $$unsubscribe_drawerStore;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  createEventDispatcher();
  let { position = "left" } = $$props;
  let { bgDrawer = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { rounded = "" } = $$props;
  let { shadow = "shadow-xl" } = $$props;
  let { width = "" } = $$props;
  let { height = "" } = $$props;
  let { bgBackdrop = "bg-surface-backdrop-token" } = $$props;
  let { blur = "" } = $$props;
  let { padding = "" } = $$props;
  let { zIndex = "z-40" } = $$props;
  let { regionBackdrop = "" } = $$props;
  let { regionDrawer = "" } = $$props;
  let { labelledby = "" } = $$props;
  let { describedby = "" } = $$props;
  let { duration = 200 } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { opacityTransition = true } = $$props;
  const presets = {
    top: {
      alignment: "items-start",
      width: "w-full",
      height: "h-[50%]",
      rounded: "rounded-bl-container-token rounded-br-container-token"
    },
    bottom: {
      alignment: "items-end",
      width: "w-full",
      height: " h-[50%]",
      rounded: "rounded-tl-container-token rounded-tr-container-token"
    },
    left: {
      alignment: "justify-start",
      width: "w-[90%]",
      height: "h-full",
      rounded: "rounded-tr-container-token rounded-br-container-token"
    },
    right: {
      alignment: "justify-end",
      width: "w-[90%]",
      height: "h-full",
      rounded: "rounded-tl-container-token rounded-bl-container-token"
    }
  };
  let elemBackdrop;
  let elemDrawer;
  const drawerStore = getDrawerStore();
  $$unsubscribe_drawerStore = subscribe(drawerStore, (value) => $drawerStore = value);
  const propDefaults = {
    position,
    bgBackdrop,
    blur,
    padding,
    bgDrawer,
    border,
    rounded,
    shadow,
    width,
    height,
    opacityTransition,
    regionBackdrop,
    regionDrawer,
    labelledby,
    describedby,
    duration
  };
  function applyPropSettings(settings) {
    position = settings.position || propDefaults.position;
    bgBackdrop = settings.bgBackdrop || propDefaults.bgBackdrop;
    blur = settings.blur || propDefaults.blur;
    padding = settings.padding || propDefaults.padding;
    bgDrawer = settings.bgDrawer || propDefaults.bgDrawer;
    border = settings.border || propDefaults.border;
    rounded = settings.rounded || propDefaults.rounded;
    shadow = settings.shadow || propDefaults.shadow;
    width = settings.width || propDefaults.width;
    height = settings.height || propDefaults.height;
    regionBackdrop = settings.regionBackdrop || propDefaults.regionBackdrop;
    regionDrawer = settings.regionDrawer || propDefaults.regionDrawer;
    labelledby = settings.labelledby || propDefaults.labelledby;
    describedby = settings.describedby || propDefaults.describedby;
    opacityTransition = settings.opacityTransition || propDefaults.opacityTransition;
    duration = settings.duration || propDefaults.duration;
  }
  drawerStore.subscribe((settings) => {
    if (settings.open !== true)
      return;
    applyPropSettings(settings);
  });
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.bgDrawer === void 0 && $$bindings.bgDrawer && bgDrawer !== void 0)
    $$bindings.bgDrawer(bgDrawer);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.bgBackdrop === void 0 && $$bindings.bgBackdrop && bgBackdrop !== void 0)
    $$bindings.bgBackdrop(bgBackdrop);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.regionBackdrop === void 0 && $$bindings.regionBackdrop && regionBackdrop !== void 0)
    $$bindings.regionBackdrop(regionBackdrop);
  if ($$props.regionDrawer === void 0 && $$bindings.regionDrawer && regionDrawer !== void 0)
    $$bindings.regionDrawer(regionDrawer);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  if ($$props.describedby === void 0 && $$bindings.describedby && describedby !== void 0)
    $$bindings.describedby(describedby);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.opacityTransition === void 0 && $$bindings.opacityTransition && opacityTransition !== void 0)
    $$bindings.opacityTransition(opacityTransition);
  classesPosition = presets[position].alignment;
  classesWidth = width ? width : presets[position].width;
  classesHeight = height ? height : presets[position].height;
  classesRounded = rounded ? rounded : presets[position].rounded;
  classesBackdrop = `${cBackdrop} ${bgBackdrop} ${padding} ${blur} ${classesPosition} ${regionBackdrop} ${zIndex} ${$$props.class ?? ""}`;
  classesDrawer = `${cDrawer} ${bgDrawer} ${border} ${rounded} ${shadow} ${classesWidth} ${classesHeight} ${classesRounded} ${regionDrawer}`;
  $$unsubscribe_drawerStore();
  $$unsubscribe_prefersReducedMotionStore();
  return ` ${$drawerStore.open === true ? `   <div class="${"drawer-backdrop " + escape(classesBackdrop, true)}" data-testid="drawer-backdrop"${add_attribute("this", elemBackdrop, 0)}>  <div class="${"drawer " + escape(classesDrawer, true)}" data-testid="drawer" role="dialog" aria-modal="true"${add_attribute("aria-labelledby", labelledby, 0)}${add_attribute("aria-describedby", describedby, 0)}${add_attribute("this", elemDrawer, 0)}> ${slots.default ? slots.default({}) : ``}</div></div>` : ``}`;
});
const cWrapper = "flex fixed top-0 left-0 right-0 bottom-0 pointer-events-none";
const cSnackbar = "flex flex-col gap-y-2";
const cToast = "flex justify-between items-center pointer-events-auto";
const cToastActions = "flex items-center space-x-2";
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesWrapper;
  let classesSnackbar;
  let classesToast;
  let filteredToasts;
  let $toastStore, $$unsubscribe_toastStore;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  const toastStore = getToastStore();
  $$unsubscribe_toastStore = subscribe(toastStore, (value) => $toastStore = value);
  let { position = "b" } = $$props;
  let { max = 3 } = $$props;
  let { background = "variant-filled-secondary" } = $$props;
  let { width = "max-w-[640px]" } = $$props;
  let { color = "" } = $$props;
  let { padding = "p-4" } = $$props;
  let { spacing = "space-x-4" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { shadow = "shadow-lg" } = $$props;
  let { zIndex = "z-[888]" } = $$props;
  let { buttonAction = "btn variant-filled" } = $$props;
  let { buttonDismiss = "btn-icon btn-icon-sm variant-filled" } = $$props;
  let { buttonDismissLabel = "✕" } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { transitionIn = fly } = $$props;
  let { transitionInParams = { duration: 250 } } = $$props;
  let { transitionOut = fly } = $$props;
  let { transitionOutParams = { duration: 250 } } = $$props;
  let cPosition;
  let cAlign;
  switch (position) {
    case "t":
      cPosition = "justify-center items-start";
      cAlign = "items-center";
      break;
    case "b":
      cPosition = "justify-center items-end";
      cAlign = "items-center";
      break;
    case "l":
      cPosition = "justify-start items-center";
      cAlign = "items-start";
      break;
    case "r":
      cPosition = "justify-end items-center";
      cAlign = "items-end";
      break;
    case "tl":
      cPosition = "justify-start items-start";
      cAlign = "items-start";
      break;
    case "tr":
      cPosition = "justify-end items-start";
      cAlign = "items-end";
      break;
    case "bl":
      cPosition = "justify-start items-end";
      cAlign = "items-start";
      break;
    case "br":
      cPosition = "justify-end items-end";
      cAlign = "items-end";
      break;
  }
  let wrapperVisible = false;
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.buttonAction === void 0 && $$bindings.buttonAction && buttonAction !== void 0)
    $$bindings.buttonAction(buttonAction);
  if ($$props.buttonDismiss === void 0 && $$bindings.buttonDismiss && buttonDismiss !== void 0)
    $$bindings.buttonDismiss(buttonDismiss);
  if ($$props.buttonDismissLabel === void 0 && $$bindings.buttonDismissLabel && buttonDismissLabel !== void 0)
    $$bindings.buttonDismissLabel(buttonDismissLabel);
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
  classesWrapper = `${cWrapper} ${cPosition} ${zIndex} ${$$props.class || ""}`;
  classesSnackbar = `${cSnackbar} ${cAlign} ${padding}`;
  classesToast = `${cToast} ${width} ${color} ${padding} ${spacing} ${rounded} ${shadow}`;
  filteredToasts = Array.from($toastStore).slice(0, max);
  {
    if (filteredToasts.length) {
      wrapperVisible = true;
    }
  }
  $$unsubscribe_toastStore();
  $$unsubscribe_prefersReducedMotionStore();
  return `${filteredToasts.length > 0 || wrapperVisible ? ` <div class="${"snackbar-wrapper " + escape(classesWrapper, true)}" data-testid="snackbar-wrapper"> <div class="${"snackbar " + escape(classesSnackbar, true)}">${each(filteredToasts, (t, i) => {
    return `<div${add_attribute("role", t.hideDismiss ? "alert" : "alertdialog", 0)} aria-live="polite"> <div class="${"toast " + escape(classesToast, true) + " " + escape(t.background ?? background, true) + " " + escape(t.classes ?? "", true)}" data-testid="toast"><div class="text-base"><!-- HTML_TAG_START -->${t.message}<!-- HTML_TAG_END --></div> ${t.action || !t.hideDismiss ? `<div class="${"toast-actions " + escape(cToastActions, true)}">${t.action ? `<button${add_attribute("class", buttonAction, 0)}><!-- HTML_TAG_START -->${t.action.label}<!-- HTML_TAG_END --></button>` : ``} ${!t.hideDismiss ? `<button${add_attribute("class", buttonDismiss, 0)} aria-label="Dismiss toast">${escape(buttonDismissLabel)}</button>` : ``} </div>` : ``}</div> </div>`;
  })}</div></div>` : ``}`;
});
const DocsLogoFull = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg class="fill-token" width="142px" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178 40"><g fill-rule="evenodd"><path d="M17.355 10.21c5.07 0 9.398 1.736 12.495 4.588l.057-.017c.388-.12.72-.244.994-.37.879-.406 2.032-1.236 3.46-2.492-.232 2.188-.48 3.794-.747 4.818a19.306 19.306 0 0 1-.662 1.994 15.855 15.855 0 0 1 1.707 4.672c1.221 6.057-.871 8.735-5.727 10.23.037.18.065.373.086.58.173 1.772-.733 4.633-1.82 4.633-.716 0-1.181-.986-1.68-2.426-.155 1.666-.923 3.58-1.813 3.58-.958 0-1.467-1.767-2.21-4.022C21.118 37.75 20.55 40 19.546 40c-1.02 0-.46-3.177-2.181-4.523-8.721.47-16.057-2.718-16.057-11.916 0-1.693.405-3.346 1.147-4.88-.132-.257-.255-.51-.37-.761C1.505 16.656.81 14.744 0 12.183c2.074 1.53 3.665 2.442 4.772 2.735.11.029.226.055.346.077 2.906-2.879 7.248-4.785 12.237-4.785ZM15.32 22.62c-2.947 0-5.336 2.294-5.336 5.124 0 2.83 2.389 5.124 5.336 5.124 2.946 0 5.335-2.294 5.335-5.124 0-2.76-2.27-5.009-5.115-5.12Zm7.573 6.4c-.891 0-1.362 1.883-1.362 2.727 0 .66.224 1.024.589 1.09.885.082.615-1.194 1.056-1.194.47 0 1.02 1.305 1.48 1.128.547-.322.338-1.024.149-1.578-.665-1.394-1.02-2.173-1.912-2.173Zm5.801-6.7c-2.03 0-3.676 2.014-3.676 4.5 0 2.485 1.646 4.5 3.676 4.5 2.03 0 3.677-2.015 3.677-4.5 0-2.486-1.646-4.5-3.677-4.5ZM16 25a3 3 0 1 1-.5 5.958 3 3 0 0 0 0-5.917c.162-.027.33-.041.5-.041Zm12.5-1c1.38 0 2.5 1.343 2.5 3s-1.12 3-2.5 3c-.171 0-.339-.02-.5-.06 1.141-.278 2-1.489 2-2.94 0-1.451-.859-2.662-2-2.94.161-.04.329-.06.5-.06Zm.284-18.586.324.207c.146.093.19.288.096.434l-2.39 3.655a.314.314 0 0 1-.433.093l-.324-.207a.314.314 0 0 1-.095-.434l2.39-3.655a.314.314 0 0 1 .432-.093Zm-23.177.554 1.94 2.75c.1.141.066.337-.076.437l-.319.22a.314.314 0 0 1-.435-.077l-1.94-2.749a.314.314 0 0 1 .076-.438l.318-.22a.314.314 0 0 1 .436.077ZM18.183 0l.58 4.826 2.146-2.385.06 5.942-.426-.094c-1.242-.273-2.369-.41-3.379-.41a9.635 9.635 0 0 0-2.821.399l-.474.143.382-7.432 1.967 3.675L18.183 0Z"></path><path fill-rule="nonzero" d="M69.864 9.3c.132 0 .257.03.374.091.116.061.175.178.175.35a.25.25 0 0 1-.008.061.25.25 0 0 0-.008.061l-.548 5.284a527.096 527.096 0 0 1-.441 4.263 1754.438 1754.438 0 0 1-.35 3.258l1.05-1.157 1.705-1.995c.213-.243.422-.487.625-.73.203-.244.385-.46.548-.648.162-.187.294-.345.396-.472.101-.127.162-.2.182-.22l6.12-.427a.311.311 0 0 1 .1-.015h.099c.172 0 .259.046.259.137 0 .071-.107.228-.32.472l-4.766 5.329a97.52 97.52 0 0 1-.753.814c-.29.31-.612.653-.967 1.028l2.223 2.65 3.837 4.125a.28.28 0 0 0 .137.115c.06.025.119.048.175.068.055.02.106.043.152.069a.123.123 0 0 1 .068.114c0 .04-.007.07-.022.091a.948.948 0 0 1-.145.122 4.7 4.7 0 0 1-.48.305 27.254 27.254 0 0 1-1.773.936c-.345.167-.68.32-1.005.457-.325.137-.624.248-.899.335-.274.086-.487.129-.639.129a.765.765 0 0 1-.358-.091 1.443 1.443 0 0 1-.388-.335 32.842 32.842 0 0 1-.723-.876c-.29-.36-.602-.756-.937-1.187-.335-.432-.677-.878-1.027-1.34a3303 3303 0 0 0-1.873-2.467 24.73 24.73 0 0 1-.601-.814.596.596 0 0 1-.153.114.666.666 0 0 0-.144.099.533.533 0 0 0-.115.145.5.5 0 0 0-.045.236c0 .04-.01.154-.03.342-.021.188-.044.411-.07.67-.025.259-.052.535-.083.83l-.084.83c-.025.258-.048.482-.068.67-.02.187-.03.301-.03.342 0 .071.002.13.007.175.005.046.008.089.008.13 0 .111-.038.195-.115.25-.076.057-.26.125-.555.206l-3.99 1.295c-.111.04-.258.09-.44.152a1.68 1.68 0 0 1-.534.091.657.657 0 0 1-.373-.106c-.106-.072-.16-.203-.16-.396l1.919-21.94a.665.665 0 0 0-.015-.145.665.665 0 0 1-.016-.144.35.35 0 0 1 .114-.252c.077-.076.252-.15.526-.22l4.278-1.02c.112-.02.259-.066.442-.137.182-.071.36-.107.532-.107Zm35.765.29c.111 0 .167.05.167.152l-1.979 21.741v.26a.267.267 0 0 1-.107.22c-.07.056-.238.12-.502.19l-3.99 1.462c-.11.05-.258.104-.44.16a1.82 1.82 0 0 1-.533.083.657.657 0 0 1-.374-.106c-.106-.071-.16-.193-.16-.366v-.09c.082-1.026.16-2.028.237-3.008a638.889 638.889 0 0 1 .525-6.356l.335-3.837c.122-1.39.22-2.766.297-4.126.076-1.36.16-2.756.251-4.187.02-.335.053-.566.099-.693.046-.127.16-.21.343-.251.943-.173 1.89-.348 2.839-.526.95-.177 1.9-.413 2.855-.707a.462.462 0 0 1 .137-.016Zm-50.487 1.035c.162 0 .406.017.73.053.325.035.683.094 1.074.175.39.081.789.193 1.195.335.406.142.776.325 1.111.548.112.081.2.162.267.244.066.08.109.208.13.38.05.822.09 1.632.121 2.429.03.797.071 1.642.122 2.535 0 .172-.036.286-.107.342a.43.43 0 0 1-.274.084c-.111 0-.198-.03-.259-.091a24.802 24.802 0 0 0-.913-.868 7.284 7.284 0 0 0-.99-.754 5.126 5.126 0 0 0-1.104-.525 3.95 3.95 0 0 0-1.27-.198 4.96 4.96 0 0 0-.823.069 2.353 2.353 0 0 0-.746.25c-.223.123-.404.29-.54.503-.138.213-.206.482-.206.807 0 .345.043.645.13.898.086.254.301.493.646.716l3.654 2.482c.67.477 1.213.951 1.63 1.423.416.472.74.942.974 1.409.233.467.393.926.48 1.378a7.1 7.1 0 0 1 .129 1.332c0 .71-.117 1.38-.35 2.01a6.714 6.714 0 0 1-.96 1.743 7.755 7.755 0 0 1-1.423 1.431 9.792 9.792 0 0 1-1.743 1.081c-.62.3-1.261.528-1.926.685a8.478 8.478 0 0 1-1.957.236c-.497 0-.987-.007-1.469-.023a12.636 12.636 0 0 1-1.408-.122 8.109 8.109 0 0 1-1.325-.304 5.325 5.325 0 0 1-1.218-.571l-.259-5.435c0-.01-.002-.02-.007-.03a.068.068 0 0 1-.008-.031c0-.173.091-.26.274-.26.091 0 .193.047.305.138a6.661 6.661 0 0 0 1.827 1.233c.67.305 1.4.457 2.192.457.213 0 .457-.023.73-.069a3.27 3.27 0 0 0 .777-.228 1.92 1.92 0 0 0 .617-.419.902.902 0 0 0 .251-.654c0-.295-.07-.559-.213-.792a1.96 1.96 0 0 0-.563-.594 7.769 7.769 0 0 1-.411-.304l-.625-.488a41.22 41.22 0 0 1-.73-.586 706.448 706.448 0 0 1-1.34-1.104 16.92 16.92 0 0 1-.411-.35c-.6-.446-1.074-.898-1.424-1.355a5.424 5.424 0 0 1-.8-1.431 6.155 6.155 0 0 1-.35-1.545 17.936 17.936 0 0 1-.076-1.698c0-.893.214-1.74.64-2.543a6.42 6.42 0 0 1 1.804-2.093c.777-.594 1.708-1.066 2.794-1.416 1.086-.35 2.294-.525 3.624-.525Zm34.302 5.359c.965 0 1.84.18 2.627.54.786.36 1.461.828 2.025 1.401a6.24 6.24 0 0 1 1.301 1.926c.305.71.457 1.421.457 2.132 0 .629-.193 1.26-.578 1.895-.386.635-.927 1.206-1.622 1.713-.695.508-1.53.919-2.504 1.233-.975.315-2.046.472-3.213.472a10.7 10.7 0 0 1-1.918-.182c.04.436.167.812.38 1.126.213.315.482.574.807.777a3.63 3.63 0 0 0 1.104.449c.411.096.835.145 1.271.145.488 0 .957-.044 1.409-.13.451-.086.885-.2 1.301-.342.417-.142.818-.3 1.203-.472.386-.173.751-.345 1.096-.518l.236-.053a.846.846 0 0 1 .19-.023l-.007.243c-.004.13-.006.303-.007.517v.169a178.907 178.907 0 0 1-.03 2.451c.03.05.05.101.06.152.01.05.015.091.015.122 0 .122-.111.254-.335.396a6.04 6.04 0 0 1-.875.441c-.36.153-.772.3-1.233.442-.462.142-.932.271-1.409.388-.477.117-.939.208-1.385.274a8.153 8.153 0 0 1-1.173.1 9.127 9.127 0 0 1-3.19-.572 8.505 8.505 0 0 1-2.74-1.637 7.956 7.956 0 0 1-1.91-2.588c-.478-1.015-.716-2.157-.716-3.426 0-1.33.228-2.575.685-3.737a9.2 9.2 0 0 1 1.926-3.038 9.027 9.027 0 0 1 2.961-2.04c1.147-.497 2.41-.746 3.791-.746Zm26.858 0c.964 0 1.84.18 2.626.54.787.36 1.462.828 2.025 1.401a6.24 6.24 0 0 1 1.302 1.926c.304.71.457 1.421.457 2.132 0 .629-.193 1.26-.579 1.895-.386.635-.926 1.206-1.621 1.713-.696.508-1.53.919-2.505 1.233-.974.315-2.045.472-3.213.472-.609 0-1.248-.06-1.918-.182.04.436.168.812.38 1.126.214.315.483.574.808.777a3.63 3.63 0 0 0 1.103.449 5.58 5.58 0 0 0 1.272.145c.487 0 .956-.044 1.408-.13.452-.086.886-.2 1.302-.342.416-.142.817-.3 1.203-.472.385-.173.75-.345 1.096-.518l.236-.053a.846.846 0 0 1 .19-.023l-.007.243c-.005.163-.008.391-.008.686a178.912 178.912 0 0 1-.03 2.451c.03.05.05.101.06.152a.67.67 0 0 1 .016.122c0 .122-.112.254-.335.396a6.04 6.04 0 0 1-.876.441c-.36.153-.771.3-1.233.442a25.32 25.32 0 0 1-1.408.388c-.477.117-.94.208-1.386.274a8.153 8.153 0 0 1-1.172.1 9.127 9.127 0 0 1-3.19-.572 8.505 8.505 0 0 1-2.74-1.637 7.956 7.956 0 0 1-1.911-2.588c-.477-1.015-.716-2.157-.716-3.426 0-1.33.229-2.575.685-3.737a9.2 9.2 0 0 1 1.926-3.038 9.027 9.027 0 0 1 2.962-2.04c1.147-.497 2.41-.746 3.79-.746Zm17.265-4.461c.122 0 .183.04.183.122v.03c-.05.558-.13 1.335-.236 2.33-.107.994-.226 2.121-.358 3.38h4.08c.082 0 .16.028.237.083.076.056.114.15.114.282 0 .05-.061.234-.183.548-.122.315-.294.726-.518 1.233l-.548 1.234a1.09 1.09 0 0 1-.22.335c-.077.07-.231.116-.465.137h-2.832a238.148 238.148 0 0 0-.403 3.19 34.812 34.812 0 0 0-.236 2.976c0 .396.03.726.091.99.061.263.15.472.267.624a.997.997 0 0 0 .418.327c.163.066.345.1.548.1.325 0 .68-.05 1.066-.146.386-.096.772-.22 1.157-.373a3.14 3.14 0 0 1 .312-.114.805.805 0 0 1 .221-.038c.102 0 .17.046.206.137a2.6 2.6 0 0 1 .106.48c.036.228.09.535.16.921.071.386.188.873.35 1.462.01.05.018.093.023.129a.703.703 0 0 1 .008.099c0 .142-.053.244-.16.304a3.26 3.26 0 0 1-.525.214c-.417.142-.855.286-1.317.434-.462.147-.919.281-1.37.403-.452.122-.886.22-1.302.297a6.189 6.189 0 0 1-1.097.114c-1.695 0-2.93-.421-3.707-1.264-.776-.842-1.165-2.126-1.165-3.852 0-.294.01-.596.03-.906.021-.31.046-.631.077-.966.101-1.015.19-1.977.266-2.886.076-.908.155-1.778.236-2.61h-1.598c-.548 0-.944-.023-1.188-.07-.244-.045-.365-.139-.365-.28 0-.041.05-.15.152-.328.101-.178.23-.391.388-.64.157-.248.328-.515.51-.799.183-.284.358-.55.525-.8a90.9 90.9 0 0 0 .434-.646c.122-.183.198-.295.229-.335h1.08a175.118 175.118 0 0 0 .359-3.243c.035-.345.068-.612.099-.8.03-.187.063-.327.099-.418.035-.092.08-.15.137-.175.055-.026.129-.049.22-.069.457-.091.899-.175 1.325-.251.426-.076.853-.155 1.279-.236a27.399 27.399 0 0 0 2.68-.655l.038-.002.022-.005a.158.158 0 0 1 .061-.008Zm12.363 4.156c1.939 0 3.588.221 4.949.663 1.36.441 2.466 1.043 3.319 1.804a6.714 6.714 0 0 1 1.857 2.695 9.474 9.474 0 0 1 .579 3.334c0 1.513-.254 2.863-.762 4.05-.507 1.188-1.2 2.193-2.078 3.015a8.986 8.986 0 0 1-3.075 1.88 10.782 10.782 0 0 1-3.753.647c-1.432 0-2.688-.233-3.769-.7-1.08-.467-1.987-1.089-2.717-1.865a7.68 7.68 0 0 1-1.645-2.68 9.17 9.17 0 0 1-.548-3.144c0-1.086.178-2.119.533-3.098a8.859 8.859 0 0 1 1.492-2.634 8.532 8.532 0 0 1 2.3-1.95 8.666 8.666 0 0 1 2.953-1.057c.162-.01.243-.046.243-.107 0-.112-.012-.216-.038-.312a1.008 1.008 0 0 1-.038-.251c0-.112.02-.188.061-.229a.19.19 0 0 1 .137-.06Zm19.991-.167c.081 0 .13.013.145.038a.226.226 0 0 1 .023.114c0 .02-.003.05-.008.092a7.11 7.11 0 0 1-.046.274 35.8 35.8 0 0 0-.106.647c-.046.289-.11.692-.19 1.21a15.78 15.78 0 0 1 1.971-.982 13.362 13.362 0 0 1 1.736-.579 10.288 10.288 0 0 1 1.53-.274c.477-.045.924-.068 1.34-.068 1.431 0 2.471.434 3.121 1.302.65.868.974 2.17.974 3.905 0 .244-.005.495-.015.754-.01.258-.03.525-.06.799l-.701 6.547c-.05.426-.081.82-.091 1.18-.01.36-.016.779-.016 1.256 0 .081.003.15.008.205.005.056.008.105.008.145a.242.242 0 0 1-.115.213c-.076.051-.246.117-.51.198l-3.7 1.036c-.111.03-.258.078-.441.144-.183.066-.36.1-.533.1a.657.657 0 0 1-.373-.107c-.106-.072-.16-.193-.16-.366v-.091c.061-.548.112-1.013.152-1.393.041-.381.08-.726.115-1.036.035-.31.066-.619.091-.928.025-.31.058-.67.099-1.081l.145-1.462.205-2.109c.05-.517.097-1.045.137-1.583.04-.538.061-1.036.061-1.492a4.87 4.87 0 0 0-.068-.845 1.874 1.874 0 0 0-.244-.67 1.167 1.167 0 0 0-.48-.434c-.203-.102-.461-.152-.776-.152-.234 0-.556.05-.967.152-.411.101-.82.269-1.226.502-.406.234-.766.54-1.08.921-.315.381-.493.85-.533 1.409-.061.75-.117 1.393-.168 1.926-.05.533-.096.984-.137 1.355l-.099.906c-.025.233-.043.431-.053.594-.01.04-.026.152-.046.335a61.142 61.142 0 0 0-.12 1.182l-.025.28c-.025.283-.05.552-.076.806-.025.254-.045.472-.06.655a6.111 6.111 0 0 0-.023.335c0 .08.002.15.007.205.005.056.008.11.008.16 0 .081-.038.15-.114.206-.076.056-.246.119-.51.19l-4.035 1.386c-.112.04-.259.09-.442.152a1.68 1.68 0 0 1-.533.091.657.657 0 0 1-.373-.106c-.106-.072-.16-.193-.16-.366l1.386-15.56c.03-.335.069-.566.114-.693.046-.127.16-.21.343-.251.924-.183 1.873-.368 2.847-.556a24.862 24.862 0 0 0 2.847-.723Zm-15.361 4.23a1.334 1.334 0 0 0-1.822.488l-1.493 2.584-2.584-1.491a1.334 1.334 0 0 0-1.822.488l-.225.39-.066.13a1.333 1.333 0 0 0 .554 1.69l2.584 1.492-1.492 2.585-.066.13a1.333 1.333 0 0 0 .554 1.691l.39.225c.638.368 1.453.15 1.822-.488l1.492-2.585 2.585 1.492c.638.368 1.453.15 1.822-.488l.225-.39a1.333 1.333 0 0 0-.488-1.82l-2.586-1.493 1.494-2.584.066-.13a1.333 1.333 0 0 0-.554-1.691Zm-60.328-1.318a.922.922 0 0 0-1.26.338l-.816 1.413-1.414-.816a.922.922 0 0 0-.923 1.597l1.414.817-.816 1.414a.922.922 0 1 0 1.597.922l.817-1.415 1.414.817a.922.922 0 0 0 .922-1.597l-1.414-.817.817-1.413.055-.113a.922.922 0 0 0-.393-1.147Zm24.297.423a.922.922 0 0 0-1.413 1.185l1.05 1.25-1.251 1.05a.922.922 0 1 0 1.186 1.412l1.25-1.05 1.05 1.252a.922.922 0 0 0 1.413-1.186l-1.05-1.25 1.251-1.05.09-.087a.922.922 0 0 0-1.275-1.325l-1.251 1.049Z"></path></g></svg>`;
});
const icons = {
  // Default Placeholder
  // Source: https://fontawesome.com/icons/image?s=solid
  placeholder: {
    path: "M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"
  },
  // ----------- Brand Logos -----------
  // Svelte
  // Source: https://iconape.com/svelte-logo-by-gengns-logo-icon-svg-png.html
  svelte: {
    viewBox: `0 0 513.978 597.129`,
    path: "M179.547 545.729c-63.418-10.114-114.409-57.647-126.738-118.147-6.814-33.436-1.056-69.7 15.357-96.718l3.628-5.972-4.271-9.908c-24.281-56.32-9.106-121.877 36.892-159.376 10.666-8.695 132.771-86.226 145.148-92.162 21.395-10.261 41.161-14.203 66.834-13.328 18.527.631 27.235 2.147 43.648 7.597 51.619 17.139 90.63 60.248 101.124 111.747 6.814 33.436 1.056 69.7-15.357 96.719l-3.628 5.972 4.272 9.907c24.28 56.32 9.105 121.877-36.893 159.376-10.665 8.696-132.77 86.227-145.148 92.163-12.055 5.781-25.266 9.867-39.22 12.13-11.505 1.867-33.943 1.866-45.648 0zm40.107-56.452c8.462-1.864 18.23-5.676 24.437-9.538 35.719-22.223 123.574-78.887 127.592-82.293 12.127-10.28 21.731-25.243 26.045-40.577 3.4-12.09 3.396-31.504-.01-43.495-13.838-48.709-63.665-77.61-112.356-65.171-10.868 2.776-18.714 6.93-45.78 24.232-13.075 8.359-25.352 15.857-27.283 16.664-4.16 1.738-13.889 1.925-18.096.347-17.67-6.628-23.849-28.21-11.645-40.68 5.378-5.494 122.039-79.894 127.75-81.47 9.037-2.496 20.352 1.013 26.744 8.293 4.882 5.56 6.727 10.52 6.695 17.99l-.029 6.446 4.904 1.306c12.307 3.278 34.058 14.246 45.35 22.869 2.72 2.076 5.285 3.775 5.7 3.775 1.288 0 5.255-14.95 6.4-24.12 3.407-27.296-9.063-57.132-31.933-76.408-26.294-22.162-62.304-28-94.067-15.252-6.577 2.64-.2-1.29-74.004 45.59-55.791 35.438-59.99 38.319-68.987 47.332-10.858 10.879-16.752 20.816-20.829 35.118-3.414 11.98-3.41 31.399.01 43.435 13.837 48.71 63.663 77.611 112.355 65.171 10.824-2.765 18.631-6.896 45.876-24.271 13.128-8.373 25.406-15.869 27.283-16.657 4.071-1.71 13.823-1.88 18-.314 17.67 6.628 23.848 28.21 11.644 40.679-5.378 5.494-122.038 79.894-127.749 81.47-9.037 2.496-20.352-1.013-26.744-8.293-4.883-5.56-6.728-10.52-6.695-17.99l.028-6.446-4.904-1.306c-12.306-3.278-34.057-14.246-45.35-22.868-2.72-2.077-5.284-3.776-5.699-3.776-1.288 0-5.255 14.95-6.4 24.121-4.265 34.178 16.128 70.808 48.833 87.712 20.186 10.434 40.992 13.203 62.915 8.375z"
  },
  // Tailwind
  // Source: https://worldvectorlogo.com/logo/tailwind-css-2
  tailwind: {
    viewBox: `0.15 0.13 799.7 479.69`,
    path: "M400 .13c-106.63 0-173.27 53.3-199.93 159.89 39.99-53.3 86.64-73.28 139.95-59.96 30.42 7.6 52.16 29.67 76.23 54.09 39.2 39.78 84.57 85.82 183.68 85.82 106.62 0 173.27-53.3 199.92-159.9-39.98 53.3-86.63 73.29-139.95 59.97-30.41-7.6-52.15-29.67-76.22-54.09C544.48 46.17 499.1.13 400 .13zM200.07 239.97c-106.62 0-173.27 53.3-199.92 159.9 39.98-53.3 86.63-73.29 139.95-59.96 30.41 7.61 52.15 29.67 76.22 54.08 39.2 39.78 84.58 85.83 183.68 85.83 106.63 0 173.27-53.3 199.93-159.9-39.99 53.3-86.64 73.29-139.95 59.96-30.42-7.59-52.16-29.67-76.23-54.08-39.2-39.78-84.57-85.83-183.68-85.83z"
  }
};
const cBase$5 = "inline-block outline-none";
const DocsIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let $$slots = compute_slots(slots);
  let { name = "placeholder" } = $$props;
  let { x = "0px" } = $$props;
  let { y = "0px" } = $$props;
  let { viewBox = icons[name].viewBox || "0 0 512 512" } = $$props;
  let { fill = "fill-current" } = $$props;
  let { width = "w-5" } = $$props;
  let { height = "h-5" } = $$props;
  let { title = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  classesBase = `${cBase$5} ${fill} ${width} ${height}`;
  return ` <svg xmlns="http://www.w3.org/2000/svg"${add_attribute("x", x, 0)}${add_attribute("y", y, 0)}${add_attribute("viewBox", viewBox, 0)} class="${"svg-icon " + escape(classesBase, true) + " " + escape($$props.class ?? "", true)}" focusable="false" data-testid="svg-icon">${title ? `<title>${escape(title)}</title>` : ``}${$$slots.default ? `${slots.default ? slots.default({}) : ``}` : `<path${add_attribute("d", icons[name].path, 0)}></path>`}</svg>`;
});
const DocsAppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $storeTheme, $$unsubscribe_storeTheme;
  let $$unsubscribe_modalStore;
  $$unsubscribe_storeTheme = subscribe(storeTheme, (value) => $storeTheme = value);
  getDrawerStore();
  const modalStore = getModalStore();
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => value);
  const themes = [
    {
      type: "skeleton",
      name: "Skeleton",
      icon: "💀"
    },
    {
      type: "wintry",
      name: "Wintry",
      icon: "🌨️"
    },
    {
      type: "modern",
      name: "Modern",
      icon: "🤖"
    },
    {
      type: "rocket",
      name: "Rocket",
      icon: "🚀"
    },
    {
      type: "seafoam",
      name: "Seafoam",
      icon: "🧜‍♀️"
    },
    {
      type: "vintage",
      name: "Vintage",
      icon: "📺"
    },
    {
      type: "sahara",
      name: "Sahara",
      icon: "🏜️"
    },
    {
      type: "hamlindigo",
      name: "Hamlindigo",
      icon: "👔"
    },
    {
      type: "gold-nouveau",
      name: "Gold Nouveau",
      icon: "💫"
    },
    {
      type: "crimson",
      name: "Crimson",
      icon: "⭕"
    }
  ];
  $$unsubscribe_storeTheme();
  $$unsubscribe_modalStore();
  return `  ${validate_component(AppBar, "AppBar").$$render(
    $$result,
    {
      shadow: "shadow-2xl",
      slotTrail: "!space-x-2"
    },
    {},
    {
      trail: () => {
        return ` <div class="relative hidden lg:block"> <button class="btn hover:variant-soft-primary" data-svelte-h="svelte-5w25hf"><span>Explore</span> <i class="fa-solid fa-caret-down opacity-50"></i></button>  <div class="card p-4 w-60 shadow-xl" data-popup="features"><nav class="list-nav"><ul><li data-svelte-h="svelte-k4dv2g"><a href="/"><span class="w-6 text-center"><i class="fa-solid fa-home"></i></span> <span>Homepage</span></a></li> <li data-svelte-h="svelte-1okepeq"><a href="/docs/get-started"><span class="w-6 text-center"><i class="fa-solid fa-book"></i></span> <span>Documentation</span></a></li> <li data-svelte-h="svelte-1j19kpt"><a href="/blog"><span class="w-6 text-center"><i class="fa-solid fa-bullhorn"></i></span> <span>Blog</span></a></li>  <hr class="!my-4"> <li><a href="/elements/core"><span class="w-6 text-center">${validate_component(DocsIcon, "DocsIcon").$$render(
          $$result,
          {
            name: "tailwind",
            width: "w-5",
            height: "h-5"
          },
          {},
          {}
        )}</span> <span data-svelte-h="svelte-ef7pma">Tailwind</span></a></li> <li><a href="/actions/clipboard"><span class="w-6 text-center">${validate_component(DocsIcon, "DocsIcon").$$render(
          $$result,
          {
            name: "svelte",
            width: "w-6",
            height: "h-6"
          },
          {},
          {}
        )}</span> <span data-svelte-h="svelte-efme7x">Svelte</span></a></li> <li data-svelte-h="svelte-ay8nlp"><a href="/utilities/codeblocks"><span class="w-6 text-center"><i class="fa-solid fa-screwdriver-wrench"></i></span> <span>Utilities</span></a></li></ul></nav> </div></div>  <div> <button class="btn hover:variant-soft-primary" data-svelte-h="svelte-123a93"><i class="fa-solid fa-palette text-lg md:!hidden"></i> <span class="hidden md:inline-block">Theme</span> <i class="fa-solid fa-caret-down opacity-50"></i></button>  <div class="card p-4 w-60 shadow-xl" data-popup="theme"><div class="space-y-4"><section class="flex justify-between items-center"><h6 class="h6" data-svelte-h="svelte-x026py">Mode</h6> ${validate_component(LightSwitch, "LightSwitch").$$render($$result, {}, {}, {})}</section> <hr> <nav class="list-nav p-4 -m-4 max-h-64 lg:max-h-[500px] overflow-y-auto"><form action="/?/setTheme" method="POST"><ul> ${each(themes, ({ icon, name, type }) => {
          return `<li><button class="${[
            "option w-full h-full",
            $storeTheme === type ? "bg-primary-active-token" : ""
          ].join(" ").trim()}" type="submit" name="theme"${add_attribute("value", type, 0)}><span>${escape(icon)}</span> <span class="flex-auto text-left">${escape(name)}</span> </button> </li>`;
        })}</ul></form></nav> <hr> <div data-svelte-h="svelte-ta0q75"><a class="btn variant-filled w-full" href="/docs/generator"><i class="fa-solid fa-palette"></i> <span>Create a Theme</span></a></div></div> </div></div>  <div> <button class="btn hover:variant-soft-primary" data-svelte-h="svelte-64qdmo"><i class="fa-solid fa-heart text-lg md:!hidden"></i> <span class="hidden md:inline-block">Sponsor</span> <i class="fa-solid fa-caret-down opacity-50"></i></button>  <div class="card p-4 w-60 shadow-xl" data-popup="sponsor" data-svelte-h="svelte-1934n7s"><div class="space-y-4"><nav class="list-nav"><ul><li><a href="https://github.com/sponsors/skeletonlabs" target="_blank" rel="noreferrer"><span class="w-6 text-center"><i class="fa-brands fa-github"></i></span> <span>GitHub</span></a></li> <li><a href="https://ko-fi.com/skeletonlabs" target="_blank" rel="noreferrer"><span class="w-6 text-center"><i class="fa-solid fa-mug-saucer"></i></span> <span>Ko-Fi</span></a></li> <li><a href="https://patreon.com/user?u=83786276" target="_blank" rel="noreferrer"><span class="w-6 text-center"><i class="fa-brands fa-patreon"></i></span> <span>Patreon</span></a></li></ul></nav> <hr> <div><a class="btn variant-filled w-full" href="/docs/sponsorship"><i class="fa-solid fa-gift"></i> <span>Incentives</span> <span class="badge variant-filled-secondary">New</span></a></div></div> </div></div>  <div class="relative hidden lg:block"> <button class="btn hover:variant-soft-primary" data-svelte-h="svelte-dfdv4n"><span>Version</span> <i class="fa-solid fa-caret-down opacity-50"></i></button>  <div class="card p-4 w-60 shadow-xl" data-popup="version" data-svelte-h="svelte-s8mj0t"><nav class="list-nav"><ul><li><a href="https://v1.skeleton.dev/" target="_blank"><span>Skeleton v1 Docs</span> <span class="w-6 text-center"><i class="fa-solid fa-arrow-up-right-from-square opacity-50"></i></span></a></li></ul></nav> </div></div>  <div class="md:inline md:ml-4"><button class="btn space-x-4 variant-soft hover:variant-soft-primary"><i class="fa-solid fa-magnifying-glass text-sm"></i> <small class="hidden md:inline-block">${escape("Ctrl")}+K</small></button></div>  <section class="hidden sm:inline-flex space-x-1" data-svelte-h="svelte-1iajfan"><a class="btn-icon hover:variant-soft-primary" href="https://github.com/skeletonlabs/skeleton" target="_blank" rel="noreferrer"><i class="fa-brands fa-github text-lg"></i></a> <a class="btn-icon hover:variant-soft-primary" href="https://discord.gg/EXqV7W8MtY" target="_blank" rel="noreferrer"><i class="fa-brands fa-discord text-lg"></i></a></section> `;
      },
      lead: () => {
        return `<div class="flex items-center space-x-4"> <button class="btn-icon btn-icon-sm lg:!hidden" data-svelte-h="svelte-fnxzj7"><i class="fa-solid fa-bars text-xl"></i></button>  <a class="lg:!ml-0 w-[32px] lg:w-auto overflow-hidden" href="/" title="Go to Homepage">${validate_component(DocsLogoFull, "DocsLogoFull").$$render($$result, {}, {}, {})}</a></div>`;
      }
    }
  )}`;
});
const menuNavLinks = {
  "/docs": [
    {
      title: "Docs",
      list: [
        { href: "/docs/introduction", label: "Introduction", keywords: "svelte, sirens, license, release" },
        { href: "/docs/get-started", label: "Get Started", keywords: "start, install, cli, tailwind, themes, stylesheets" },
        { href: "/docs/quickstart", label: "Quickstart", keywords: "start, setup, tutorial, guide" }
      ]
    },
    {
      title: "Essentials",
      list: [
        { href: "/docs/themes", label: "Themes", keywords: "theme, customize, fonts, gradient, background" },
        { href: "/docs/colors", label: "Colors", keywords: "theme, colors, swatches" },
        { href: "/docs/styling", label: "Styling", keywords: "styles, styling, props, classes, class, css" },
        { href: "/docs/tokens", label: "Design Tokens", keywords: "theme, color, pairing, css, utility" },
        { href: "/docs/variants", label: "Variants", keywords: "variant, variants, presets, backgrounds, classes" },
        {
          href: "/docs/transitions",
          label: "Transitions",
          keywords: "transition, transitions, blur, fade, fly, slide, scale, draw, crossfade, prefers, reduced, motion"
        },
        {
          href: "/docs/dark-mode",
          label: "Dark Mode",
          keywords: "light, dark, toggle, prefer, color, scheme, lightswitch"
        }
      ]
    },
    {
      title: "Resources",
      list: [
        { href: "/docs/generator", label: "Theme Generator", keywords: "create, custom, style, css, design" },
        { href: "/docs/figma", label: "Figma", keywords: "figma, design, mock, wireframe, ui, kit" },
        { href: "/docs/contributing", label: "Contributing", keywords: "branch, pr" },
        {
          href: "/docs/sponsorship",
          label: "Sponsorship",
          keywords: "sponsor, funding, contribute, support, github, ko-fi, patreon"
        }
      ]
    },
    {
      title: "Integrations",
      list: [
        { href: "/docs/purgecss", label: "PurgeCSS", keywords: "purgecss, vite, tree, shaking, bundle, optimize" },
        { href: "/docs/tauri", label: "Tauri", keywords: "Tauri, desktop, setup, install" },
        { href: "/docs/ssd", label: "Datatables", keywords: "datatables, tables, datagrid, simple" }
        // badge: 'New'
      ]
    }
  ],
  "/elements": [
    {
      title: "Globals",
      list: [
        { href: "/elements/core", label: "Core", keywords: "body, scroll, scrollbar, hr, horizontal, rule, divider" },
        {
          href: "/elements/typography",
          label: "Typography",
          keywords: "headings, paragraph, anchor, blockquote, pre, code, keyboard, ins, del"
        },
        {
          href: "/elements/forms",
          label: "Forms",
          keywords: "plugin, label, input, select, checkbox, radio, date, color, picker, slider, range, file"
        }
      ]
    },
    {
      title: "Elements",
      list: [
        { href: "/elements/alerts", label: "Alerts", keywords: "message, notification" },
        { href: "/elements/badges", label: "Badges", keywords: "sup, sub, overlay, favorite, icon" },
        { href: "/elements/breadcrumbs", label: "Breadcrumbs", keywords: "nav, navigation, separator, hierarchy" },
        { href: "/elements/buttons", label: "Buttons", keywords: "click, anchor, icon, preload" },
        { href: "/elements/cards", label: "Cards", keywords: "header, footer, background, cell, region" },
        { href: "/elements/chips", label: "Chips", keywords: "action, select, selection, filter, filtering, interactive" },
        { href: "/elements/lists", label: "Lists", keywords: "unordered, ordered, description, nav, navigation, ul, ol, li, dd, dt" },
        { href: "/elements/logo-clouds", label: "Logo Clouds", keywords: "logo, brand, branding, links" },
        { href: "/elements/placeholders", label: "Placeholders", keywords: "skeleton, spacer, text, image, avatar, animate, animate" },
        { href: "/elements/tables", label: "Tables", keywords: "data, entry" }
      ]
    },
    {
      title: "Blocks",
      list: [
        { href: "/elements/chat", label: "Chat", keywords: "message, conversation, prompt, ai" },
        { href: "/elements/gradient-headings", label: "Gradient Headings", keywords: "header, h1, h2, h3" },
        { href: "/elements/image-layouts", label: "Image Layouts", keywords: "image, layout, blocks, masonry, grid" },
        { href: "/elements/scroll-containers", label: "Scroll Containers", keywords: "carousel, scroll, snap, container" }
      ]
    }
  ],
  "/svelte": [
    {
      title: "Actions",
      list: [
        { href: "/actions/clipboard", label: "Clipboard", keywords: "copy, contenteditable, html, input" },
        { href: "/actions/filters", label: "Filters", keywords: "svg, filtering, image, images, effect" },
        { href: "/actions/focus-trap", label: "Focus Trap", keywords: "form, modal, a11y, accessibility, keyboard, interaction" }
      ]
    },
    {
      title: "Components",
      list: [
        { href: "/components/accordions", label: "Accordions", keywords: "collapse" },
        { href: "/components/app-bar", label: "App Bar", keywords: "header, top, bar, title" },
        { href: "/components/app-rail", label: "App Rail", keywords: "nav, navigation, tile, sidebar" },
        { href: "/components/autocomplete", label: "Autocomplete", keywords: "input, filter, fuzzy, auto, complete, suggest" },
        { href: "/components/avatars", label: "Avatars", keywords: "image, initial, filter" },
        { href: "/components/conic-gradients", label: "Conic Gradients", keywords: "chart, graph, circle, pie, spinner, legend" },
        { href: "/components/file-buttons", label: "File Buttons", keywords: "upload, form, input, file, media" },
        { href: "/components/file-dropzone", label: "File Dropzone", keywords: "upload, form, input, file, media, drag, drop" },
        { href: "/components/input-chips", label: "Input Chips", keywords: "multi, multiple, select, tags, form, validation" },
        { href: "/components/listboxes", label: "Listboxes", keywords: "list, select, multi, multiple" },
        { href: "/components/paginators", label: "Paginators", keywords: "nav, navigation, table, data, list" },
        { href: "/components/progress-bars", label: "Progress Bars", keywords: "meter, track, indeterminate, determinate, min, max" },
        { href: "/components/progress-radials", label: "Progress Radials", keywords: "meter, track, indeterminate, determinate, spin" },
        { href: "/components/ratings", label: "Ratings", keywords: "rating, rate, ratings, bar, star" },
        { href: "/components/radio-groups", label: "Radio Groups", keywords: "input, form, select, selection" },
        { href: "/components/range-sliders", label: "Range Sliders", keywords: "value, min, max, step,, tick, input, form" },
        { href: "/components/slide-toggles", label: "Slide Toggles", keywords: "check, checkbox, toggle, input, form" },
        { href: "/components/tabs", label: "Tabs", keywords: "select, selection, panel" },
        { href: "/components/tree-views", label: "Tree Views", keywords: "tree, view, node" }
      ]
    },
    // Deprecated
    {
      title: "",
      list: [
        {
          href: "/components/app-shell",
          label: "App Shell",
          keywords: "layout, header, footer, sidebar, page, content",
          badge: "Deprecated"
        },
        { href: "/components/tables", label: "Tables", keywords: "data, entry", badge: "Deprecated" },
        { href: "/components/steppers", label: "Steppers", keywords: "intro, onboard, onboarding, form, progress", badge: "Deprecated" }
      ]
    }
  ],
  "/utilities": [
    {
      title: "Utilities",
      list: [
        { href: "/utilities/codeblocks", label: "Code Blocks", keywords: "highlight, syntax, code" },
        { href: "/utilities/drawers", label: "Drawers", keywords: "overlay, slide, panel, sidebar" },
        {
          href: "/utilities/modals",
          label: "Modals",
          keywords: "overlay, dialog, notification, alert, confirm, prompt, multiple, form, list, embed, video"
        },
        { href: "/utilities/popups", label: "Popups", keywords: "menu, tooltip, overlay, dropdown, combobox, drop, down, select" },
        { href: "/utilities/toasts", label: "Toasts", keywords: "overlay, snack, snackbar, bar, action, alert, notification" },
        { href: "/utilities/table-of-contents", label: "Table of Contents", keywords: "page, results, links, navigation" }
      ]
    },
    // Deprecated
    {
      title: "",
      list: [
        {
          href: "/utilities/local-storage-stores",
          label: "Persisted Store",
          keywords: "svelte, writable, get, cache, persist",
          badge: "Deprecated"
        }
      ]
    }
  ]
};
const DocsSidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let submenu;
  let listboxItemActive;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let currentRailCategory = void 0;
  getDrawerStore();
  page.subscribe((page2) => {
    let basePath = page2.url.pathname.split("/")[1];
    if (!basePath)
      return;
    if (["docs", "essentials", "resources", "integrations"].includes(basePath))
      currentRailCategory = "/docs";
    if (["tokens", "base", "elements", "blocks"].includes(basePath))
      currentRailCategory = "/elements";
    if (["components", "actions"].includes(basePath))
      currentRailCategory = "/svelte";
    if (["utilities"].includes(basePath))
      currentRailCategory = "/utilities";
  });
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    submenu = menuNavLinks[currentRailCategory ?? "/docs"];
    listboxItemActive = (href) => $page.url.pathname?.includes(href) ? "bg-primary-active-token" : "";
    $$rendered = `<div class="${"grid grid-cols-[auto_1fr] h-full bg-surface-50-900-token border-r border-surface-500/30 " + escape($$props.class ?? "", true)}"> ${validate_component(AppRail, "AppRail").$$render(
      $$result,
      {
        background: "bg-transparent",
        border: "border-r border-surface-500/30"
      },
      {},
      {
        default: () => {
          return `  ${validate_component(AppRailAnchor, "AppRailAnchor").$$render($$result, { href: "/", class: "lg:hidden" }, {}, {
            lead: () => {
              return `<i class="fa-solid fa-home text-2xl"></i>`;
            },
            default: () => {
              return `<span data-svelte-h="svelte-3sk4b5">Home</span>`;
            }
          })}  ${validate_component(AppRailAnchor, "AppRailAnchor").$$render($$result, { href: "/blog", class: "lg:hidden" }, {}, {
            lead: () => {
              return `<i class="fa-solid fa-bullhorn text-2xl"></i>`;
            },
            default: () => {
              return `<span data-svelte-h="svelte-xokboi">Blog</span>`;
            }
          })}  ${validate_component(AppRailTile, "AppRailTile").$$render(
            $$result,
            {
              name: "docs",
              value: "/docs",
              group: currentRailCategory
            },
            {
              group: ($$value) => {
                currentRailCategory = $$value;
                $$settled = false;
              }
            },
            {
              lead: () => {
                return `<i class="fa-solid fa-book text-2xl"></i>`;
              },
              default: () => {
                return `<span data-svelte-h="svelte-pytag5">Docs</span>`;
              }
            }
          )} <hr class="opacity-30"> ${validate_component(AppRailTile, "AppRailTile").$$render(
            $$result,
            {
              name: "elements",
              value: "/elements",
              group: currentRailCategory
            },
            {
              group: ($$value) => {
                currentRailCategory = $$value;
                $$settled = false;
              }
            },
            {
              lead: () => {
                return `${validate_component(DocsIcon, "DocsIcon").$$render(
                  $$result,
                  {
                    name: "tailwind",
                    width: "w-6",
                    height: "h-6"
                  },
                  {},
                  {}
                )}`;
              },
              default: () => {
                return `<span data-svelte-h="svelte-ef7pma">Tailwind</span>`;
              }
            }
          )} ${validate_component(AppRailTile, "AppRailTile").$$render(
            $$result,
            {
              name: "svelte",
              value: "/svelte",
              group: currentRailCategory
            },
            {
              group: ($$value) => {
                currentRailCategory = $$value;
                $$settled = false;
              }
            },
            {
              lead: () => {
                return `${validate_component(DocsIcon, "DocsIcon").$$render(
                  $$result,
                  {
                    name: "svelte",
                    width: "w-6",
                    height: "h-6"
                  },
                  {},
                  {}
                )}`;
              },
              default: () => {
                return `<span data-svelte-h="svelte-efme7x">Svelte</span>`;
              }
            }
          )} ${validate_component(AppRailTile, "AppRailTile").$$render(
            $$result,
            {
              name: "utilities",
              value: "/utilities",
              group: currentRailCategory
            },
            {
              group: ($$value) => {
                currentRailCategory = $$value;
                $$settled = false;
              }
            },
            {
              lead: () => {
                return `<i class="fa-solid fa-screwdriver-wrench text-2xl"></i>`;
              },
              default: () => {
                return `<span data-svelte-h="svelte-1b4f5g2">Utilities</span>`;
              }
            }
          )}`;
        }
      }
    )}  <section class="p-4 pb-20 space-y-4 overflow-y-auto">${each(submenu, (segment, i) => {
      return ` <p class="font-bold pl-4 text-2xl">${escape(segment.title)}</p>  <nav class="list-nav"><ul>${each(segment.list, ({ href, label, badge }) => {
        return `<li><a${add_attribute("href", href, 0)}${add_attribute("class", listboxItemActive(href), 0)} data-sveltekit-preload-data="hover"><span class="flex-auto"><!-- HTML_TAG_START -->${label}<!-- HTML_TAG_END --></span> ${badge ? `<span class="badge variant-filled-secondary">${escape(badge)}</span>` : ``}</a> </li>`;
      })} </ul></nav>  ${i + 1 < submenu.length ? `<hr class="!my-6 opacity-50">` : ``}`;
    })}</section></div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const DocsDrawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesDrawer;
  let $drawerStore, $$unsubscribe_drawerStore;
  const drawerStore = getDrawerStore();
  $$unsubscribe_drawerStore = subscribe(drawerStore, (value) => $drawerStore = value);
  classesDrawer = $drawerStore.id === "doc-sidenav" ? "lg:hidden" : "";
  $$unsubscribe_drawerStore();
  return `${validate_component(Drawer, "Drawer").$$render($$result, { class: classesDrawer }, {}, {
    default: () => {
      return `${$drawerStore.id === "doc-sidenav" ? ` ${validate_component(DocsSidebar, "DocsSidebar").$$render($$result, { embedded: true }, {}, {})}` : `${$drawerStore.id === "demo" ? ` <div class="w-full h-full flex justify-center items-center"><div class="text-center space-y-2">${$drawerStore.meta ? `<h2 class="h2">${escape($drawerStore.meta)}</h2>` : ``} <h4 class="h4">Drawer: <span class="capitalize">${escape($drawerStore.position)}</span></h4> <span class="block" data-svelte-h="svelte-pumu6j">Tap outside the drawer to close.</span></div></div>` : ` <div class="w-full h-full flex justify-center items-center" data-svelte-h="svelte-1p5h1m"><div class="text-center space-y-2"><p>Invalid <code class="code">$drawerStore.id</code> provided.</p></div></div>`}`}`;
    }
  })}`;
});
const DocsLogoIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg class="fill-token" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path fill-rule="evenodd" d="M19.855 10.21c5.07 0 9.398 1.736 12.495 4.588l.057-.017c.388-.12.72-.244.994-.37.879-.406 2.032-1.236 3.46-2.492-.232 2.188-.48 3.794-.747 4.818a19.306 19.306 0 0 1-.662 1.994 15.855 15.855 0 0 1 1.707 4.672c1.221 6.057-.871 8.735-5.727 10.23.037.18.065.373.086.58.173 1.772-.733 4.633-1.82 4.633-.716 0-1.181-.986-1.68-2.426-.155 1.666-.923 3.58-1.813 3.58-.958 0-1.467-1.767-2.21-4.022C23.618 37.75 23.05 40 22.046 40c-1.02 0-.46-3.177-2.181-4.523-8.721.47-16.057-2.718-16.057-11.916 0-1.693.405-3.346 1.147-4.88-.132-.257-.255-.51-.37-.761-.58-1.264-1.275-3.176-2.085-5.737 2.074 1.53 3.665 2.442 4.772 2.735.11.029.226.055.346.077 2.906-2.879 7.248-4.785 12.237-4.785ZM17.82 22.62c-2.947 0-5.336 2.294-5.336 5.124 0 2.83 2.389 5.124 5.336 5.124 2.946 0 5.335-2.294 5.335-5.124 0-2.76-2.27-5.009-5.115-5.12Zm7.573 6.4c-.891 0-1.362 1.883-1.362 2.727 0 .66.224 1.024.589 1.09.885.082.615-1.194 1.056-1.194.47 0 1.02 1.305 1.48 1.128.547-.322.338-1.024.149-1.578-.665-1.394-1.02-2.173-1.912-2.173Zm5.801-6.7c-2.03 0-3.676 2.014-3.676 4.5 0 2.485 1.646 4.5 3.676 4.5 2.03 0 3.677-2.015 3.677-4.5 0-2.486-1.646-4.5-3.677-4.5ZM18.5 25a3 3 0 1 1-.5 5.958 3 3 0 0 0 0-5.917c.162-.027.33-.041.5-.041ZM31 24c1.38 0 2.5 1.343 2.5 3s-1.12 3-2.5 3c-.171 0-.339-.02-.5-.06 1.141-.278 2-1.489 2-2.94 0-1.451-.859-2.662-2-2.94.161-.04.329-.06.5-.06Zm.284-18.586.324.207c.146.093.19.288.096.434l-2.39 3.655a.314.314 0 0 1-.433.093l-.324-.207a.314.314 0 0 1-.095-.434l2.39-3.655a.314.314 0 0 1 .432-.093Zm-23.177.554 1.94 2.75c.1.141.066.337-.076.437l-.319.22a.314.314 0 0 1-.435-.077l-1.94-2.749a.314.314 0 0 1 .076-.438l.318-.22a.314.314 0 0 1 .436.077ZM20.683 0l.58 4.826 2.146-2.385.06 5.942-.426-.094c-1.242-.273-2.369-.41-3.379-.41a9.635 9.635 0 0 0-2.821.399l-.474.143.382-7.432 1.967 3.675L20.683 0Z"></path></svg>`;
});
var define_PACKAGE_default = { name: "@skeletonlabs/skeleton", version: "2.10.2", description: "A SvelteKit component library.", author: "endigo9740 <chris@skeletonlabs.dev>", scripts: { dev: "vite dev", build: "vite build", package: "node ./scripts/pre-build.js && svelte-kit sync && svelte-package && node ./scripts/post-build.js", preview: "vite preview", check: "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json", "check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch", lint: "prettier --ignore-path .prettierignore --check --plugin-search-dir=. . && eslint --fix --ignore-path .gitignore .", format: "prettier --ignore-path .prettierignore --write --plugin-search-dir=. .", test: "vitest", coverage: "vitest run --coverage", sync: "svelte-kit sync" }, repository: { type: "git", url: "https://github.com/skeletonlabs/skeleton.git" }, bugs: { url: "https://github.com/skeletonlabs/skeleton/issues" }, keywords: ["cli", "components", "ui", "component", "svelte", "component-library", "ui-components", "ui-framework", "tailwind", "tailwindcss", "components-library", "sveltekit"], license: "MIT", homepage: "https://skeleton.dev/", devDependencies: { "@sveltejs/adapter-auto": "2.1.0", "@sveltejs/kit": "1.20.5", "@sveltejs/package": "^2.1.0", "@testing-library/dom": "9.3.0", "@testing-library/svelte": "4.0.1", "@typescript-eslint/eslint-plugin": "5.59.9", "@typescript-eslint/parser": "5.59.9", "@vitest/coverage-c8": "0.32.0", autoprefixer: "10.4.14", eslint: "8.42.0", "eslint-config-prettier": "8.8.0", "eslint-plugin-svelte": "^2.31.0", jsdom: "21.1.1", postcss: "8.4.24", "postcss-import": "15.1.0", "postcss-js": "4.0.1", "postcss-load-config": "4.0.1", prettier: "^3.2.5", "prettier-plugin-svelte": "^3.2.3", svelte: "4.2.15", "svelte-check": "^3.4.4", tailwindcss: "3.3.2", tslib: "2.5.3", typescript: "5.0.3", vite: "4.3.9", vitest: "0.32.0" }, type: "module", dependencies: { "esm-env": "1.0.0" }, peerDependencies: { svelte: "^3.56.0 || ^4.0.0" }, publishConfig: { types: "./dist/index.d.ts", exports: { ".": { types: "./dist/index.d.ts", svelte: "./dist/index.js", default: "./dist/index.js" } }, typesVersions: { ">4.0": { "index.d.ts": ["./dist/index.d.ts"] } } }, types: "./src/lib/index.ts", exports: { ".": { types: "./src/lib/index.ts", svelte: "./src/lib/index.ts", default: "./src/lib/index.ts" }, "./*": "./src/lib/*" }, files: ["./dist/**/*.svelte", "./dist/**/*.js", "./dist/**/*.d.ts", "./dist/**/*.cjs", "./dist/**/*.d.cts", "!./dist/**/*.test.*"] };
const cBase$4 = "bg-surface-50 dark:bg-surface-900 border-t border-surface-500/10 text-xs md:text-base";
const cRowOne = "flex flex-col md:flex-row justify-between items-center md:items-start space-y-5 md:space-y-0";
const cRowTwo = "flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0";
const DocsFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const pkg = define_PACKAGE_default;
  const socialLinks = [
    {
      title: "GitHub",
      href: "https://github.com/skeletonlabs/skeleton",
      icon: "fa-github"
    },
    {
      title: "Discord",
      href: "https://discord.gg/EXqV7W8MtY",
      icon: "fa-discord"
    },
    {
      title: "X (Twitter)",
      href: "https://x.com/SkeletonUI",
      icon: "fa-x-twitter"
    },
    {
      title: "YouTube",
      href: "https://www.youtube.com/@skeletonlabs",
      icon: "fa-youtube"
    }
  ];
  return `<div class="${"page-footer " + escape(cBase$4, true)}"><div class="w-full max-w-7xl mx-auto p-4 py-16 md:py-24 space-y-10"> <section${add_attribute("class", cRowOne, 0)}><div class="grid grid-cols-1 gap-2 place-content-center place-items-center md:place-items-start">${validate_component(DocsLogoIcon, "DocsLogoIcon").$$render($$result, {}, {}, {})} <p class="!text-sm opacity-80" data-svelte-h="svelte-1vcymyf">UI Toolkit for Svelte + Tailwind.</p>  <span class="badge variant-soft">${escape(pkg.version)}</span></div> <div class="hidden md:grid grid-cols-3 gap-8" data-svelte-h="svelte-euzn36"><div class="space-y-6"><h6 class="h6">Explore</h6> <ul class="space-y-3"><li><a class="anchor" href="/docs/introduction">Introduction</a></li> <li><a class="anchor" href="/docs/get-started">Get Started</a></li> <li><a class="anchor" href="/blog">Blog</a></li></ul></div> <div class="space-y-6"><h6 class="h6">Features</h6> <ul class="space-y-3"><li><a class="anchor" href="/elements/core">Tailwind</a></li> <li><a class="anchor" href="/actions/clipboard">Svelte</a></li> <li><a class="anchor" href="/utilities/codeblocks">Utilities</a></li></ul></div> <div class="space-y-6"><h6 class="h6">Project</h6> <ul class="space-y-3"><li><a class="anchor" href="https://github.com/skeletonlabs" target="_blank" rel="noreferrer">Github Organization</a></li> <li><a class="anchor" href="https://www.npmjs.com/org/skeletonlabs" target="_blank" rel="noreferrer">NPM Organization</a></li> <li><a class="anchor" href="https://www.npmjs.com/package/@skeletonlabs/skeleton" target="_blank" rel="noreferrer">NPM Package</a></li></ul></div></div></section> <hr class="opacity-20">  <section${add_attribute("class", cRowTwo, 0)}><p data-svelte-h="svelte-eh0jpm"><a class="anchor" href="https://github.com/skeletonlabs/skeleton/blob/master/LICENSE" target="_blank" rel="noreferrer">MIT License</a> <span class="opacity-10 mx-2">|</span> <a class="anchor" href="https://skeletonlabs.co/" target="_blank" rel="noreferrer">Skeleton Labs</a></p> <div class="flex gap-6">${each(socialLinks, (sl) => {
    return `<a class="opacity-75 hover:opacity-100"${add_attribute("href", sl.href, 0)} target="_blank" rel="noreferrer"${add_attribute("title", sl.title, 0)}><i class="${"fa-brands text-xl " + escape(sl.icon, true)}"></i> </a>`;
  })}</div></section></div></div>`;
});
const cBase$3 = "card bg-surface-100/60 dark:bg-surface-500/30 backdrop-blur-lg overflow-hidden w-full max-w-[800px] shadow-xl mt-8 mb-auto";
const cHeader$1 = "bg-surface-300-600-token flex items-center";
const cSearchInput = "bg-transparent border-0 ring-0 focus:ring-0 w-full m-2 ml-4 text-lg";
const cResults = "overflow-x-auto max-h-[480px] hide-scrollbar";
const cResultAnchor = "!rounded-none justify-between hover:variant-soft focus:!variant-filled-primary outline-0";
const cFooter = "hidden md:flex items-center gap-2 bg-surface-300-600-token p-4 text-xs font-bold";
const DocsSearch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchTerm = "";
  let resultsCopy = [
    ...menuNavLinks["/docs"],
    ...menuNavLinks["/elements"],
    ...menuNavLinks["/svelte"],
    ...menuNavLinks["/utilities"]
  ];
  let results = resultsCopy;
  getModalStore();
  let elemDocSearch;
  return `<div class="${"modal-search " + escape(cBase$3, true)}"${add_attribute("this", elemDocSearch, 0)}> <header class="${"modal-search-header " + escape(cHeader$1, true)}"><i class="fa-solid fa-magnifying-glass text-xl ml-4"></i> <input${add_attribute("class", cSearchInput, 0)} type="search" placeholder="Search..."${add_attribute("value", searchTerm, 0)}></header>  ${results.length > 0 ? `<nav class="${"list-nav " + escape(cResults, true)}" tabindex="-1">${each(results, (category) => {
    return `<div class="text-sm font-bold p-4">${escape(category.title)}</div> <ul>${each(category.list, (link) => {
      return `<li class="text-lg"><a${add_attribute("class", cResultAnchor, 0)}${add_attribute("href", link.href, 0)}><div class="flex items-center gap-4"><i class="fa-regular fa-file"></i> <span class="flex-auto font-bold opacity-75">${escape(link.label)}</span></div> <span class="hidden md:block text-xs opacity-50">${escape(link.href)}</span></a> </li>`;
    })} </ul>`;
  })}</nav>` : `<div class="p-4"><p>No Results found for <code class="code">${escape(searchTerm)}</code>.</p></div>`}  <footer class="${"modal-search-footer " + escape(cFooter, true)}"><div data-svelte-h="svelte-1of5rul"><kbd class="kbd">Esc</kbd> to close</div> <div data-svelte-h="svelte-2mpalo"><kbd class="kbd">Tab</kbd> to navigate</div> <div data-svelte-h="svelte-lpbx6u"><kbd class="kbd">Enter</kbd> to select</div></footer></div>`;
});
const cBase$2 = "card p-4 w-modal shadow-xl space-y-4";
const cHeader = "text-2xl font-bold";
const ModalExampleList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modalStore, $$unsubscribe_modalStore;
  let { parent } = $$props;
  let flavor = "chocolate";
  const modalStore = getModalStore();
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = ` ${$modalStore[0] ? `<div class="${"modal-example-form " + escape(cBase$2, true)}"><header${add_attribute("class", cHeader, 0)}>${escape($modalStore[0].title ?? "(title missing)")}</header> <article>${escape($modalStore[0].body ?? "(body missing)")}</article> ${validate_component(ListBox, "ListBox").$$render(
      $$result,
      {
        class: "border border-surface-500 p-4 rounded-container-token"
      },
      {},
      {
        default: () => {
          return `${validate_component(ListBoxItem, "ListBoxItem").$$render(
            $$result,
            {
              name: "chocolate",
              value: "chocolate",
              group: flavor
            },
            {
              group: ($$value) => {
                flavor = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `Chocolate`;
              }
            }
          )} ${validate_component(ListBoxItem, "ListBoxItem").$$render(
            $$result,
            {
              name: "vanilla",
              value: "vanilla",
              group: flavor
            },
            {
              group: ($$value) => {
                flavor = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `Vanilla`;
              }
            }
          )} ${validate_component(ListBoxItem, "ListBoxItem").$$render(
            $$result,
            {
              name: "strawberry",
              value: "strawberry",
              group: flavor
            },
            {
              group: ($$value) => {
                flavor = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `Strawberry`;
              }
            }
          )} ${validate_component(ListBoxItem, "ListBoxItem").$$render(
            $$result,
            {
              name: "peach",
              value: "peach",
              group: flavor
            },
            {
              group: ($$value) => {
                flavor = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `Peach`;
              }
            }
          )}`;
        }
      }
    )}  <footer class="${"modal-footer " + escape(parent.regionFooter, true)}"><button class="${"btn " + escape(parent.buttonNeutral, true)}">${escape(parent.buttonTextCancel)}</button> <button class="${"btn " + escape(parent.buttonPositive, true)}">Select Flavors</button></footer></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_modalStore();
  return $$rendered;
});
const cBase$1 = "relative w-modal-wide shadow-xl";
const cButton$1 = "absolute -top-3 -right-3 z-1 btn-icon variant-filled";
const cIframe = "bg-black w-full aspect-video rounded-container-token overflow-hidden";
const ModalExampleEmbed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modalStore, $$unsubscribe_modalStore;
  let { parent } = $$props;
  const modalStore = getModalStore();
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  $$unsubscribe_modalStore();
  return ` ${$modalStore[0] ? `<div class="${"modal-example-form " + escape(cBase$1, true)}"><button${add_attribute("class", cButton$1, 0)}>✕</button> <iframe${add_attribute("class", cIframe, 0)} src="https://www.youtube.com/embed/vOGhAV-84iI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>` : ``}`;
});
const cButton = "fixed top-4 right-4 z-50 font-bold shadow-xl";
const cImage = "max-w-[90%] max-h-[90%] rounded-container-token overflow-hidden shadow-xl";
const ModalExampleImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modalStore, $$unsubscribe_modalStore;
  let { parent } = $$props;
  const modalStore = getModalStore();
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  $$unsubscribe_modalStore();
  return `${$modalStore[0] ? ` <button class="${"btn-icon variant-filled " + escape(cButton, true)}">×</button>  <img${add_attribute("src", $modalStore[0]?.image, 0)}${add_attribute("class", cImage, 0)} alt="Example" title="${"Source: " + escape($modalStore[0]?.meta.source, true)}">` : ``}`;
});
const cBase = "bg-surface-100-800-token w-screen h-screen p-4 flex justify-center items-center";
const ModalExampleFullscreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modalStore, $$unsubscribe_modalStore;
  let { parent } = $$props;
  const modalStore = getModalStore();
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  $$unsubscribe_modalStore();
  return `${$modalStore[0] ? `<div class="${"modal-example-fullscreen " + escape(cBase, true)}"><div class="flex flex-col items-center space-y-4"><h2 class="h2" data-svelte-h="svelte-1wmz5tx">Full Screen Modal</h2> <p data-svelte-h="svelte-5orex4">This demonstrates a full screen modal dialog.</p> <button class="btn variant-filled" data-svelte-h="svelte-bs62k5">× Close</button></div></div>` : ``}`;
});
function matchPathWhitelist(pageUrlPath) {
  if (pageUrlPath === "/")
    return true;
  if (pageUrlPath.includes("/blog"))
    return true;
  return false;
}
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slotSidebarLeft;
  let allyPageSmoothScroll;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  let $page, $$unsubscribe_page;
  let $$unsubscribe_storeTheme;
  let $$unsubscribe_storePreview;
  let $storeVercelProductionMode, $$unsubscribe_storeVercelProductionMode;
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_storeTheme = subscribe(storeTheme, (value) => value);
  $$unsubscribe_storePreview = subscribe(storePreview, (value) => value);
  $$unsubscribe_storeVercelProductionMode = subscribe(storeVercelProductionMode, (value) => $storeVercelProductionMode = value);
  hljs.registerLanguage("xml", xml);
  hljs.registerLanguage("css", css);
  hljs.registerLanguage("json", json);
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("typescript", typescript);
  hljs.registerLanguage("shell", shell);
  storeHighlightJs.set(hljs);
  storePopup.set({
    computePosition,
    autoUpdate,
    offset,
    shift,
    flip,
    arrow
  });
  initializeStores();
  let { data } = $$props;
  storeVercelProductionMode.set(data.vercelEnv === "production");
  if ($storeVercelProductionMode)
    import("@vercel/analytics").then((mod) => mod.inject());
  const metaDefaults = {
    title: "Skeleton — UI Toolkit for Svelte + Tailwind",
    description: "Skeleton is a fully featured UI Toolkit for building reactive interfaces quickly using Svelte and Tailwind.",
    image: "https://user-images.githubusercontent.com/1509726/212382766-f29b9c9a-82e3-44c2-b911-b17a9197e5b9.jpg"
  };
  const meta = {
    title: metaDefaults.title,
    description: metaDefaults.description,
    image: metaDefaults.image,
    // Article
    article: {
      publishTime: "",
      modifiedTime: "",
      author: ""
    },
    // Twitter
    twitter: {
      title: metaDefaults.title,
      description: metaDefaults.description,
      image: metaDefaults.image
    }
  };
  let isBlogArticle = false;
  const modalComponentRegistry = {
    modalSearch: { ref: DocsSearch },
    exampleList: { ref: ModalExampleList },
    exampleEmbed: { ref: ModalExampleEmbed },
    exampleImage: { ref: ModalExampleImage },
    fullScreen: { ref: ModalExampleFullscreen }
  };
  storePreview.subscribe(setBodyThemeAttribute);
  storeTheme.subscribe(setBodyThemeAttribute);
  function setBodyThemeAttribute() {
    return;
  }
  page.subscribe((page2) => {
    meta.title = metaDefaults.title;
    meta.description = metaDefaults.description;
    meta.image = metaDefaults.image;
    meta.twitter.title = metaDefaults.title;
    meta.twitter.description = metaDefaults.description;
    meta.twitter.image = metaDefaults.image;
    isBlogArticle = page2.data.posts && page2.data.posts.length === 1;
    if (isBlogArticle) {
      const post = page2.data.posts[0];
      const articleTitleLeadText = `Skeleton Blog`;
      meta.title = `${articleTitleLeadText} — ${post.meta_title ?? post.title}`;
      meta.description = post.meta_description || post.excerpt;
      meta.image = post.og_image || post.feature_image;
      meta.article.publishTime = post.created_at;
      meta.article.modifiedTime = post.updated_at;
      meta.article.author = post.primary_author.name;
      meta.twitter.title = `${articleTitleLeadText} — ${post.twitter_title || post.meta_title || post.title}`;
      meta.twitter.description = post.twitter_description || post.meta_description || post.excerpt;
      meta.twitter.image = post.twitter_image || post.feature_image;
    }
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  slotSidebarLeft = matchPathWhitelist($page.url.pathname) ? "w-0" : "bg-surface-50-900-token lg:w-auto";
  allyPageSmoothScroll = !$prefersReducedMotionStore ? "scroll-smooth" : "";
  $$unsubscribe_prefersReducedMotionStore();
  $$unsubscribe_page();
  $$unsubscribe_storeTheme();
  $$unsubscribe_storePreview();
  $$unsubscribe_storeVercelProductionMode();
  return `  ${$$result.head += `<!-- HEAD_svelte-kxis0p_START -->${$$result.title = `<title>${escape(meta.title)}</title>`, ""}<meta name="title"${add_attribute("content", meta.title, 0)}><meta name="description"${add_attribute("content", meta.description, 0)}><meta name="keywords" content="svelte, sveltekit, web, ui, components, reactive, accessibility, typescript, css, open source"><meta name="theme-color" content="#242c46"><meta name="author" content="Skeleton Labs"><meta property="og:site_name" content="Skeleton"><meta property="og:type" content="website"><meta property="og:url" content="${"https://www.skeleton.dev" + escape($page.url.pathname, true)}"><meta property="og:locale" content="en_US"><meta property="og:title"${add_attribute("content", meta.title, 0)}><meta property="og:description"${add_attribute("content", meta.description, 0)}><meta property="og:image"${add_attribute("content", meta.image, 0)}><meta property="og:image:secure_url"${add_attribute("content", meta.image, 0)}><meta property="og:image:type" content="image/jpg"><meta property="og:image:width" content="1707"><meta property="og:image:height" content="1233">${isBlogArticle ? `<meta property="article:published_time"${add_attribute("content", meta.article.publishTime, 0)}> <meta property="article:modified_time"${add_attribute("content", meta.article.modifiedTime, 0)}> <meta property="article:author"${add_attribute("content", meta.article.author, 0)}>` : ``}<meta name="twitter:card" content="summary"><meta name="twitter:site" content="@SkeletonUI"><meta name="twitter:creator" content="@SkeletonUI"><meta name="twitter:title"${add_attribute("content", meta.twitter.title, 0)}><meta name="twitter:description"${add_attribute("content", meta.twitter.description, 0)}><meta name="twitter:image"${add_attribute("content", meta.twitter.image, 0)}><!-- HEAD_svelte-kxis0p_END -->`, ""}  ${validate_component(Modal, "Modal").$$render($$result, { components: modalComponentRegistry }, {}, {})} ${validate_component(Toast, "Toast").$$render($$result, {}, {}, {})} ${validate_component(DocsDrawer, "DocsDrawer").$$render($$result, {}, {}, {})}  ${validate_component(AppShell, "AppShell").$$render(
    $$result,
    {
      slotSidebarLeft,
      regionPage: allyPageSmoothScroll,
      slotFooter: "bg-black p-4"
    },
    {},
    {
      pageFooter: () => {
        return ` ${validate_component(DocsFooter, "DocsFooter").$$render($$result, {}, {}, {})} `;
      },
      sidebarLeft: () => {
        return ` ${validate_component(DocsSidebar, "DocsSidebar").$$render(
          $$result,
          {
            class: "hidden lg:grid w-[360px] overflow-hidden"
          },
          {},
          {}
        )} `;
      },
      header: () => {
        return ` ${validate_component(DocsAppBar, "DocsAppBar").$$render($$result, {}, {}, {})} `;
      },
      default: () => {
        return `   ${slots.default ? slots.default({}) : ``} `;
      }
    }
  )}`;
});
export {
  Layout as default
};

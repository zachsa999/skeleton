import { c as create_ssr_component, s as setContext, e as escape, d as add_attribute, k as getContext, b as createEventDispatcher, i as compute_slots, h as each, v as validate_component, m as missing_component } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
import { A as Avatar } from "../../../../../chunks/Avatar.js";
const TreeView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { selection = false } = $$props;
  let { multiple = false } = $$props;
  let { width = "w-full" } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { open = false } = $$props;
  let { disabled = false } = $$props;
  let { padding = "py-4 px-4" } = $$props;
  let { indent = "ml-4" } = $$props;
  let { hover = "hover:variant-soft" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { caretOpen = "rotate-180" } = $$props;
  let { caretClosed = "" } = $$props;
  let { hyphenOpacity = "opacity-10" } = $$props;
  let { regionSummary = "" } = $$props;
  let { regionSymbol = "" } = $$props;
  let { regionChildren = "" } = $$props;
  let { labelledby = "" } = $$props;
  function expandAll() {
    const detailsElements = tree.querySelectorAll("details.tree-item");
    detailsElements.forEach((details) => {
      if (!details.open) {
        const summary = details.querySelector("summary.tree-item-summary");
        if (summary)
          summary.click();
      }
    });
  }
  function collapseAll() {
    const detailsElements = tree.querySelectorAll("details.tree-item");
    detailsElements.forEach((details) => {
      if (details.open) {
        const summary = details.querySelector("summary.tree-item-summary");
        if (summary)
          summary.click();
      }
    });
  }
  setContext("open", open);
  setContext("selection", selection);
  setContext("multiple", multiple);
  setContext("disabled", disabled);
  setContext("padding", padding);
  setContext("indent", indent);
  setContext("hover", hover);
  setContext("rounded", rounded);
  setContext("caretOpen", caretOpen);
  setContext("caretClosed", caretClosed);
  setContext("hyphenOpacity", hyphenOpacity);
  setContext("regionSummary", regionSummary);
  setContext("regionSymbol", regionSymbol);
  setContext("regionChildren", regionChildren);
  let tree;
  if ($$props.selection === void 0 && $$bindings.selection && selection !== void 0)
    $$bindings.selection(selection);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.indent === void 0 && $$bindings.indent && indent !== void 0)
    $$bindings.indent(indent);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.caretOpen === void 0 && $$bindings.caretOpen && caretOpen !== void 0)
    $$bindings.caretOpen(caretOpen);
  if ($$props.caretClosed === void 0 && $$bindings.caretClosed && caretClosed !== void 0)
    $$bindings.caretClosed(caretClosed);
  if ($$props.hyphenOpacity === void 0 && $$bindings.hyphenOpacity && hyphenOpacity !== void 0)
    $$bindings.hyphenOpacity(hyphenOpacity);
  if ($$props.regionSummary === void 0 && $$bindings.regionSummary && regionSummary !== void 0)
    $$bindings.regionSummary(regionSummary);
  if ($$props.regionSymbol === void 0 && $$bindings.regionSymbol && regionSymbol !== void 0)
    $$bindings.regionSymbol(regionSymbol);
  if ($$props.regionChildren === void 0 && $$bindings.regionChildren && regionChildren !== void 0)
    $$bindings.regionChildren(regionChildren);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  if ($$props.expandAll === void 0 && $$bindings.expandAll && expandAll !== void 0)
    $$bindings.expandAll(expandAll);
  if ($$props.collapseAll === void 0 && $$bindings.collapseAll && collapseAll !== void 0)
    $$bindings.collapseAll(collapseAll);
  classesBase = `${width} ${spacing} ${$$props.class ?? ""}`;
  return `<div class="${"tree " + escape(classesBase, true)}" data-testid="tree" role="tree"${add_attribute("aria-multiselectable", multiple, 0)}${add_attribute("aria-label", labelledby, 0)}${add_attribute("aria-disabled", disabled, 0)}${add_attribute("this", tree, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const cBase = "";
const cSummary = "list-none [&::-webkit-details-marker]:hidden flex items-center cursor-pointer";
const cSymbol = "fill-current w-3 text-center transition-transform duration-[200ms]";
const cChildren = "";
const cDisabled = "opacity-50 !cursor-not-allowed";
const TreeViewItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesCaretState;
  let classesDisabled;
  let classesBase;
  let classesSummary;
  let classesSymbol;
  let classesCaret;
  let classesHyphen;
  let classesChildren;
  let $$slots = compute_slots(slots);
  let { group = void 0 } = $$props;
  let { name = void 0 } = $$props;
  let { value = void 0 } = $$props;
  let { checked = false } = $$props;
  let { children = [] } = $$props;
  let { spacing = "space-x-4" } = $$props;
  let { open = getContext("open") } = $$props;
  let { selection = getContext("selection") } = $$props;
  let { multiple = getContext("multiple") } = $$props;
  let { disabled = getContext("disabled") } = $$props;
  let { indeterminate = false } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { indent = getContext("indent") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { caretOpen = getContext("caretOpen") } = $$props;
  let { caretClosed = getContext("caretClosed") } = $$props;
  let { hyphenOpacity = getContext("hyphenOpacity") } = $$props;
  let { regionSummary = getContext("regionSummary") } = $$props;
  let { regionSymbol = getContext("regionSymbol") } = $$props;
  let { regionChildren = getContext("regionChildren") } = $$props;
  let { hideLead = false } = $$props;
  let { hideChildren = false } = $$props;
  let treeItem;
  let childrenDiv;
  function updateCheckbox(group2, indeterminate2) {
    if (!Array.isArray(group2))
      return;
    checked = group2.indexOf(value) >= 0;
    dispatch("groupChange", { checked, indeterminate: indeterminate2 });
    dispatch("childChange");
  }
  function updateGroup(checked2, indeterminate2) {
    if (!Array.isArray(group))
      return;
    const index = group.indexOf(value);
    if (checked2) {
      if (index < 0) {
        group.push(value);
        group = group;
      }
    } else {
      if (index >= 0) {
        group.splice(index, 1);
        group = group;
      }
    }
    if (!indeterminate2) {
      onParentChange();
    }
  }
  function updateRadio(group2) {
    checked = group2 === value;
    dispatch("groupChange", { checked, indeterminate: false });
    if (group2)
      dispatch("childChange");
  }
  function updateRadioGroup(checked2) {
    if (checked2 && group !== value)
      group = value;
    else if (!checked2 && group === value)
      group = "";
  }
  function onChildValueChange() {
    if (multiple) {
      if (!Array.isArray(group))
        return;
      const childrenValues = children.map((c) => c.value);
      const childrenGroup = children[0].group;
      const index = group.indexOf(value);
      if (children.some((c) => c.indeterminate)) {
        indeterminate = true;
        if (index >= 0) {
          group.splice(index, 1);
          group = group;
        }
      } else if (childrenValues.every((c) => Array.isArray(childrenGroup) && childrenGroup.includes(c))) {
        indeterminate = false;
        if (index < 0) {
          group.push(value);
          group = group;
        }
      } else if (childrenValues.some((c) => Array.isArray(childrenGroup) && childrenGroup.includes(c))) {
        indeterminate = true;
        if (index >= 0) {
          group.splice(index, 1);
          group = group;
        }
      } else {
        indeterminate = false;
        if (index >= 0) {
          group.splice(index, 1);
          group = group;
        }
      }
    } else {
      if (group !== value && children.some((c) => c.checked)) {
        group = value;
      } else if (group === value && !children.some((c) => c.checked)) {
        group = "";
      }
    }
    dispatch("childChange");
  }
  function onParentChange() {
    if (!multiple || !children || children.length === 0)
      return;
    if (!Array.isArray(group))
      return;
    const index = group.indexOf(value);
    const checkChild = (child) => {
      if (!child || !Array.isArray(child.group))
        return;
      child.indeterminate = false;
      if (child.group.indexOf(child.value) < 0) {
        child.group.push(child.value);
        child.group = child.group;
      }
    };
    const uncheckChild = (child) => {
      if (!child || !Array.isArray(child.group))
        return;
      child.indeterminate = false;
      const childIndex = child.group.indexOf(child.value);
      if (childIndex >= 0) {
        child.group.splice(childIndex, 1);
        child.group = child.group;
      }
    };
    children.forEach((child) => {
      if (!child)
        return;
      index >= 0 ? checkChild(child) : uncheckChild(child);
      child.onParentChange();
    });
  }
  const dispatch = createEventDispatcher();
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.selection === void 0 && $$bindings.selection && selection !== void 0)
    $$bindings.selection(selection);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.indeterminate === void 0 && $$bindings.indeterminate && indeterminate !== void 0)
    $$bindings.indeterminate(indeterminate);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.indent === void 0 && $$bindings.indent && indent !== void 0)
    $$bindings.indent(indent);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.caretOpen === void 0 && $$bindings.caretOpen && caretOpen !== void 0)
    $$bindings.caretOpen(caretOpen);
  if ($$props.caretClosed === void 0 && $$bindings.caretClosed && caretClosed !== void 0)
    $$bindings.caretClosed(caretClosed);
  if ($$props.hyphenOpacity === void 0 && $$bindings.hyphenOpacity && hyphenOpacity !== void 0)
    $$bindings.hyphenOpacity(hyphenOpacity);
  if ($$props.regionSummary === void 0 && $$bindings.regionSummary && regionSummary !== void 0)
    $$bindings.regionSummary(regionSummary);
  if ($$props.regionSymbol === void 0 && $$bindings.regionSymbol && regionSymbol !== void 0)
    $$bindings.regionSymbol(regionSymbol);
  if ($$props.regionChildren === void 0 && $$bindings.regionChildren && regionChildren !== void 0)
    $$bindings.regionChildren(regionChildren);
  if ($$props.hideLead === void 0 && $$bindings.hideLead && hideLead !== void 0)
    $$bindings.hideLead(hideLead);
  if ($$props.hideChildren === void 0 && $$bindings.hideChildren && hideChildren !== void 0)
    $$bindings.hideChildren(hideChildren);
  if ($$props.onParentChange === void 0 && $$bindings.onParentChange && onParentChange !== void 0)
    $$bindings.onParentChange(onParentChange);
  {
    if (multiple)
      updateCheckbox(group, indeterminate);
  }
  {
    if (multiple)
      updateGroup(checked, indeterminate);
  }
  {
    if (!multiple)
      updateRadio(group);
  }
  {
    if (!multiple)
      updateRadioGroup(checked);
  }
  {
    if (!multiple && group !== void 0) {
      if (group !== value) {
        children.forEach((child) => {
          if (child)
            child.group = "";
        });
      }
    }
  }
  {
    dispatch("toggle", { open });
  }
  {
    children.forEach((child) => {
      if (child)
        child.$on("childChange", onChildValueChange);
    });
  }
  classesCaretState = open && $$slots.children && !hideChildren ? caretOpen : caretClosed;
  classesDisabled = disabled ? cDisabled : "";
  classesBase = `${cBase} ${$$props.class ?? ""}`;
  classesSummary = `${cSummary} ${classesDisabled} ${spacing} ${rounded} ${padding} ${hover} ${regionSummary}`;
  classesCaret = `${classesCaretState}`;
  classesSymbol = `${cSymbol} ${classesCaret} ${regionSymbol}`;
  classesHyphen = `${hyphenOpacity}`;
  classesChildren = `${cChildren} ${indent} ${regionChildren}`;
  return `   <details class="${"tree-item " + escape(classesBase, true)}" data-testid="tree-item"${add_attribute("aria-disabled", disabled, 0)}${add_attribute("this", treeItem, 0)}${add_attribute("open", open, 1)}><summary class="${"tree-item-summary " + escape(classesSummary, true)}" role="treeitem"${add_attribute("aria-selected", selection ? checked : void 0, 0)}${add_attribute("aria-expanded", $$slots.children ? open : void 0, 0)}> <div class="${"tree-summary-symbol " + escape(classesSymbol, true)}">${$$slots.children && !hideChildren ? ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>` : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="${"w-3 " + escape(classesHyphen, true)}"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"></path></svg>`}</div>  ${selection && name && group !== void 0 ? `${multiple ? `<input class="checkbox tree-item-checkbox" type="checkbox"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)}${add_attribute("checked", checked, 1)}${add_attribute("indeterminate", indeterminate, 0)}>` : `<input class="radio tree-item-radio" type="radio"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)}${value === group ? add_attribute("checked", true, 1) : ""}>`}` : ``}  ${$$slots.lead && !hideLead ? `<div class="tree-item-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``}  <div class="tree-item-content">${slots.default ? slots.default({}) : ``}</div></summary> <div class="${"tree-item-children " + escape(classesChildren, true)}" role="group"${add_attribute("this", childrenDiv, 0)}>${slots.children ? slots.children({}) : ``}</div></details>`;
});
const RecursiveTreeViewItem_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { nodes: nodes2 = [] } = $$props;
  let { expandedNodes = [] } = $$props;
  let { disabledNodes = [] } = $$props;
  let { checkedNodes = [] } = $$props;
  let { indeterminateNodes = [] } = $$props;
  let selection = getContext("selection");
  let multiple = getContext("multiple");
  getContext("relational");
  let group = multiple ? [] : "";
  let name = "";
  createEventDispatcher();
  if (selection) {
    if (multiple) {
      nodes2.forEach((node) => {
        if (!Array.isArray(group))
          return;
        if (checkedNodes.includes(node.id) && !group.includes(node.id)) {
          group.push(node.id);
        }
      });
      group = group;
    } else {
      nodes2.forEach((node) => {
        if (checkedNodes.includes(node.id) && group !== node.id) {
          group = node.id;
        }
      });
    }
  }
  let { treeItems = [] } = $$props;
  let children = [];
  if ($$props.nodes === void 0 && $$bindings.nodes && nodes2 !== void 0)
    $$bindings.nodes(nodes2);
  if ($$props.expandedNodes === void 0 && $$bindings.expandedNodes && expandedNodes !== void 0)
    $$bindings.expandedNodes(expandedNodes);
  if ($$props.disabledNodes === void 0 && $$bindings.disabledNodes && disabledNodes !== void 0)
    $$bindings.disabledNodes(disabledNodes);
  if ($$props.checkedNodes === void 0 && $$bindings.checkedNodes && checkedNodes !== void 0)
    $$bindings.checkedNodes(checkedNodes);
  if ($$props.indeterminateNodes === void 0 && $$bindings.indeterminateNodes && indeterminateNodes !== void 0)
    $$bindings.indeterminateNodes(indeterminateNodes);
  if ($$props.treeItems === void 0 && $$bindings.treeItems && treeItems !== void 0)
    $$bindings.treeItems(treeItems);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${nodes2 && nodes2.length > 0 ? `${each(nodes2, (node, i) => {
      return `${validate_component(TreeViewItem, "TreeViewItem").$$render(
        $$result,
        {
          hideLead: !node.lead,
          hideChildren: !node.children || node.children.length === 0,
          open: expandedNodes.includes(node.id),
          disabled: disabledNodes.includes(node.id),
          checked: checkedNodes.includes(node.id),
          indeterminate: indeterminateNodes.includes(node.id),
          this: treeItems[i],
          children: children[i],
          group,
          name,
          value: node.id
        },
        {
          this: ($$value) => {
            treeItems[i] = $$value;
            $$settled = false;
          },
          children: ($$value) => {
            children[i] = $$value;
            $$settled = false;
          },
          group: ($$value) => {
            group = $$value;
            $$settled = false;
          },
          name: ($$value) => {
            name = $$value;
            $$settled = false;
          },
          value: ($$value) => {
            node.id = $$value;
            $$settled = false;
          }
        },
        {
          children: () => {
            return `${validate_component(RecursiveTreeViewItem_1, "RecursiveTreeViewItem").$$render(
              $$result,
              {
                nodes: node.children,
                expandedNodes,
                disabledNodes,
                checkedNodes,
                indeterminateNodes,
                treeItems: children[i]
              },
              {
                expandedNodes: ($$value) => {
                  expandedNodes = $$value;
                  $$settled = false;
                },
                disabledNodes: ($$value) => {
                  disabledNodes = $$value;
                  $$settled = false;
                },
                checkedNodes: ($$value) => {
                  checkedNodes = $$value;
                  $$settled = false;
                },
                indeterminateNodes: ($$value) => {
                  indeterminateNodes = $$value;
                  $$settled = false;
                },
                treeItems: ($$value) => {
                  children[i] = $$value;
                  $$settled = false;
                }
              },
              {}
            )} `;
          },
          lead: () => {
            return `${typeof node.lead === "string" ? `<!-- HTML_TAG_START -->${node.lead}<!-- HTML_TAG_END -->` : `${validate_component(node.lead || missing_component, "svelte:component").$$render($$result, Object.assign({}, node.leadProps), {}, {})}`} `;
          },
          default: () => {
            return `${typeof node.content === "string" ? `<!-- HTML_TAG_START -->${node.content}<!-- HTML_TAG_END -->` : `${validate_component(node.content || missing_component, "svelte:component").$$render($$result, Object.assign({}, node.contentProps), {}, {})}`} `;
          }
        }
      )}`;
    })}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const RecursiveTreeView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { selection = false } = $$props;
  let { multiple = false } = $$props;
  let { relational = false } = $$props;
  let { nodes: nodes2 = [] } = $$props;
  let { expandedNodes = [] } = $$props;
  let { disabledNodes = [] } = $$props;
  let { checkedNodes = [] } = $$props;
  let { indeterminateNodes = [] } = $$props;
  let { width = "w-full" } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { padding = "py-4 px-4" } = $$props;
  let { indent = "ml-4" } = $$props;
  let { hover = "hover:variant-soft" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { caretOpen = "rotate-180" } = $$props;
  let { caretClosed = "" } = $$props;
  let { hyphenOpacity = "opacity-10" } = $$props;
  let { regionSummary = "" } = $$props;
  let { regionSymbol = "" } = $$props;
  let { regionChildren = "" } = $$props;
  let { labelledby = "" } = $$props;
  setContext("selection", selection);
  setContext("multiple", multiple);
  setContext("relational", relational);
  setContext("padding", padding);
  setContext("indent", indent);
  setContext("hover", hover);
  setContext("rounded", rounded);
  setContext("caretOpen", caretOpen);
  setContext("caretClosed", caretClosed);
  setContext("hyphenOpacity", hyphenOpacity);
  setContext("regionSummary", regionSummary);
  setContext("regionSymbol", regionSymbol);
  setContext("regionChildren", regionChildren);
  createEventDispatcher();
  if ($$props.selection === void 0 && $$bindings.selection && selection !== void 0)
    $$bindings.selection(selection);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.relational === void 0 && $$bindings.relational && relational !== void 0)
    $$bindings.relational(relational);
  if ($$props.nodes === void 0 && $$bindings.nodes && nodes2 !== void 0)
    $$bindings.nodes(nodes2);
  if ($$props.expandedNodes === void 0 && $$bindings.expandedNodes && expandedNodes !== void 0)
    $$bindings.expandedNodes(expandedNodes);
  if ($$props.disabledNodes === void 0 && $$bindings.disabledNodes && disabledNodes !== void 0)
    $$bindings.disabledNodes(disabledNodes);
  if ($$props.checkedNodes === void 0 && $$bindings.checkedNodes && checkedNodes !== void 0)
    $$bindings.checkedNodes(checkedNodes);
  if ($$props.indeterminateNodes === void 0 && $$bindings.indeterminateNodes && indeterminateNodes !== void 0)
    $$bindings.indeterminateNodes(indeterminateNodes);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.indent === void 0 && $$bindings.indent && indent !== void 0)
    $$bindings.indent(indent);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.caretOpen === void 0 && $$bindings.caretOpen && caretOpen !== void 0)
    $$bindings.caretOpen(caretOpen);
  if ($$props.caretClosed === void 0 && $$bindings.caretClosed && caretClosed !== void 0)
    $$bindings.caretClosed(caretClosed);
  if ($$props.hyphenOpacity === void 0 && $$bindings.hyphenOpacity && hyphenOpacity !== void 0)
    $$bindings.hyphenOpacity(hyphenOpacity);
  if ($$props.regionSummary === void 0 && $$bindings.regionSummary && regionSummary !== void 0)
    $$bindings.regionSummary(regionSummary);
  if ($$props.regionSymbol === void 0 && $$bindings.regionSymbol && regionSymbol !== void 0)
    $$bindings.regionSymbol(regionSymbol);
  if ($$props.regionChildren === void 0 && $$bindings.regionChildren && regionChildren !== void 0)
    $$bindings.regionChildren(regionChildren);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    classesBase = `${width} ${spacing} ${$$props.class ?? ""}`;
    $$rendered = `<div class="${"tree " + escape(classesBase, true)}" data-testid="tree" role="tree"${add_attribute("aria-multiselectable", multiple, 0)}${add_attribute("aria-label", labelledby, 0)}>${nodes2 && nodes2.length > 0 ? `${validate_component(RecursiveTreeViewItem_1, "RecursiveTreeViewItem").$$render(
      $$result,
      {
        nodes: nodes2,
        expandedNodes,
        disabledNodes,
        checkedNodes,
        indeterminateNodes
      },
      {
        expandedNodes: ($$value) => {
          expandedNodes = $$value;
          $$settled = false;
        },
        disabledNodes: ($$value) => {
          disabledNodes = $$value;
          $$settled = false;
        },
        checkedNodes: ($$value) => {
          checkedNodes = $$value;
          $$settled = false;
        },
        indeterminateNodes: ($$value) => {
          indeterminateNodes = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const sveldTreeView = { "props": [{ "name": "selection", "kind": "let", "description": "Enable tree-view selection.", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "multiple", "kind": "let", "description": "Enable selection of multiple items.", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "width", "kind": "let", "description": "Provide classes to set the tree width.", "type": "string", "value": "'w-full'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "spacing", "kind": "let", "description": "Provide classes to set the vertical spacing between items.", "type": "string", "value": "'space-y-1'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "open", "kind": "let", "description": "Set open by default on load.", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "disabled", "kind": "let", "description": "Set the tree disabled state", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "padding", "kind": "let", "description": "Provide classes to set the tree item padding styles.", "type": "string", "value": "'py-4 px-4'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "indent", "kind": "let", "description": "Provide classes to set the tree children indentation", "type": "string", "value": "'ml-4'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "hover", "kind": "let", "description": "Provide classes to set the tree item hover styles.", "type": "string", "value": "'hover:variant-soft'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "rounded", "kind": "let", "description": "Provide classes to set the tree item rounded styles.", "type": "string", "value": "'rounded-container-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "caretOpen", "kind": "let", "description": "Set the rotation of the item caret in the open state.", "type": "string", "value": "'rotate-180'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "caretClosed", "kind": "let", "description": "Set the rotation of the item caret in the closed state.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "hyphenOpacity", "kind": "let", "type": "string", "value": "'opacity-10'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionSummary", "kind": "let", "description": "Provide arbitrary classes to the tree item summary region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionSymbol", "kind": "let", "description": "Provide arbitrary classes to the symbol icon region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionChildren", "kind": "let", "description": "Provide arbitrary classes to the children region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "labelledby", "kind": "let", "description": "Provide the ARIA labelledby value.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "expandAll", "kind": "function", "description": "expands all tree view items.", "type": "() => void", "value": "() => {     const detailsElements = tree.querySelectorAll('details.tree-item');     detailsElements.forEach((details) => {         if (!details.open) {             const summary = details.querySelector('summary.tree-item-summary');             if (summary)                 summary.click();         }     }); }", "isFunction": true, "isFunctionDeclaration": true, "isRequired": false, "constant": false, "reactive": false }, { "name": "collapseAll", "kind": "function", "description": "collapses all tree view items.", "type": "() => void", "value": "() => {     const detailsElements = tree.querySelectorAll('details.tree-item');     detailsElements.forEach((details) => {         if (details.open) {             const summary = details.querySelector('summary.tree-item-summary');             if (summary)                 summary.click();         }     }); }", "isFunction": true, "isFunctionDeclaration": true, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "__default__", "default": true, "slot_props": "{}" }], "events": [], "typedefs": [] };
const sveldTreeViewItem = { "props": [{ "name": "group", "kind": "let", "description": "Set the radio group binding value.", "type": "unknown", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "name", "kind": "let", "description": "Set a unique name value for the input.", "type": "string | undefined", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "value", "kind": "let", "description": "Set the input's value.", "type": "unknown", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "checked", "kind": "let", "description": "Set the input's check state", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "children", "kind": "let", "description": "Provide children references to support relational checking.", "type": "TreeViewItem[]", "value": "[]", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "spacing", "kind": "let", "description": "Provide classes to set the horizontal spacing.", "type": "string", "value": "'space-x-4'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "open", "kind": "let", "description": "Set open by default on load.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "selection", "kind": "let", "description": "Enable tree-view selection", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "multiple", "kind": "let", "description": "Enable selection of multiple items.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "disabled", "kind": "let", "description": "Set the tree item disabled state", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "indeterminate", "kind": "let", "description": "Set the check state to indeterminate(-).", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "padding", "kind": "let", "description": "Provide classes to set the tree item padding styles.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "indent", "kind": "let", "description": "Provide classes to set the tree children indentation", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "hover", "kind": "let", "description": "Provide classes to set the tree item hover styles.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "rounded", "kind": "let", "description": "Provide classes to set the tree item rounded styles.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "caretOpen", "kind": "let", "description": "Set the rotation of the item caret in the open state.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "caretClosed", "kind": "let", "description": "Set the rotation of the item caret in the closed state.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "hyphenOpacity", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionSummary", "kind": "let", "description": "Provide arbitrary classes to the tree item summary region.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionSymbol", "kind": "let", "description": "Provide arbitrary classes to the symbol icon region.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionChildren", "kind": "let", "description": "Provide arbitrary classes to the children region.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "hideLead", "kind": "let", "description": "Don't use this prop, workaround until svelte implements conditional slots", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "hideChildren", "kind": "let", "description": "Don't use this prop, workaround until svelte implements conditional slots", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "onParentChange", "kind": "function", "type": "() => any", "value": "() => {     if (!multiple || !children || children.length === 0)         return;     // group must by array in multiple mode     if (!Array.isArray(group))         return;     const index = group.indexOf(value);     const checkChild = (child) => {         if (!child || !Array.isArray(child.group))             return;         child.indeterminate = false;         if (child.group.indexOf(child.value) < 0) {             child.group.push(child.value);             child.group = child.group;         }     };     const uncheckChild = (child) => {         if (!child || !Array.isArray(child.group))             return;         child.indeterminate = false;         const childIndex = child.group.indexOf(child.value);         if (childIndex >= 0) {             child.group.splice(childIndex, 1);             child.group = child.group;         }     };     children.forEach((child) => {         if (!child)             return;         // if parent is checked, check all children, else uncheck all children         index >= 0 ? checkChild(child) : uncheckChild(child);         // notify children to update values         child.onParentChange();     }); }", "isFunction": true, "isFunctionDeclaration": true, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "__default__", "default": true, "slot_props": "{}" }, { "name": "children", "default": false, "slot_props": "{}", "description": "Provide TreeView item children." }, { "name": "lead", "default": false, "slot_props": "{}", "description": "Allows for an optional leading element, such as an icon." }], "events": [{ "type": "dispatched", "name": "groupChange", "detail": "{checked: boolean, indeterminate: boolean}", "description": "Fires when the group changes" }, { "type": "dispatched", "name": "childChange", "detail": "null", "description": "Fires when the group of the child changes" }, { "type": "dispatched", "name": "toggle", "detail": "{ open: boolean }", "description": "Fires on open or close." }, { "type": "forwarded", "name": "click", "element": "summary" }, { "type": "forwarded", "name": "keydown", "element": "summary" }, { "type": "forwarded", "name": "keyup", "element": "summary" }], "typedefs": [] };
const sveldRecursiveTreeView = { "props": [{ "name": "selection", "kind": "let", "description": "Enable tree-view selection.", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "multiple", "kind": "let", "description": "Enable selection of multiple items.", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "relational", "kind": "let", "description": "Enable relational checking.", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "nodes", "kind": "let", "description": "Provide data-driven nodes.", "type": "TreeViewNode[]", "value": "[]", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "expandedNodes", "kind": "let", "description": "provides id's of expanded nodes", "type": "string[]", "value": "[]", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "disabledNodes", "kind": "let", "description": "provides id's of disabled nodes", "type": "string[]", "value": "[]", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "checkedNodes", "kind": "let", "description": "provides id's of checked nodes", "type": "string[]", "value": "[]", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "indeterminateNodes", "kind": "let", "description": "provides id's of indeterminate nodes", "type": "string[]", "value": "[]", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "width", "kind": "let", "description": "Provide classes to set the tree width.", "type": "string", "value": "'w-full'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "spacing", "kind": "let", "description": "Provide classes to set the vertical spacing between items.", "type": "string", "value": "'space-y-1'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "padding", "kind": "let", "description": "Provide classes to set the tree item padding styles.", "type": "string", "value": "'py-4 px-4'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "indent", "kind": "let", "description": "Provide classes to set the tree children indentation", "type": "string", "value": "'ml-4'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "hover", "kind": "let", "description": "Provide classes to set the tree item hover styles.", "type": "string", "value": "'hover:variant-soft'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "rounded", "kind": "let", "description": "Provide classes to set the tree item rounded styles.", "type": "string", "value": "'rounded-container-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "caretOpen", "kind": "let", "description": "Set the rotation of the item caret in the open state.", "type": "string", "value": "'rotate-180'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "caretClosed", "kind": "let", "description": "Set the rotation of the item caret in the closed state.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "hyphenOpacity", "kind": "let", "type": "string", "value": "'opacity-10'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionSummary", "kind": "let", "description": "Provide arbitrary classes to the tree item summary region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionSymbol", "kind": "let", "description": "Provide arbitrary classes to the symbol icon region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionChildren", "kind": "let", "description": "Provide arbitrary classes to the children region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "labelledby", "kind": "let", "description": "Provide the ARIA labelledby value.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [], "events": [{ "type": "dispatched", "name": "click", "detail": "{id:string}", "description": "Fires on tree item click" }, { "type": "dispatched", "name": "toggle", "detail": "{id:string}", "description": "Fires on tree item toggle" }], "typedefs": [] };
const ExampleComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { avatarId } = $$props;
  if ($$props.avatarId === void 0 && $$bindings.avatarId && avatarId !== void 0)
    $$bindings.avatarId(avatarId);
  return `${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      src: "https://i.pravatar.cc/?img=" + avatarId,
      width: "w-8"
    },
    {},
    {}
  )}`;
});
const nodes = [
  {
    id: "programming",
    content: "programming",
    value: "programming",
    children: [
      {
        id: "language",
        content: "language",
        value: "language",
        children: [
          {
            id: "javascript",
            content: "javascript",
            value: "javascript"
          },
          {
            id: "c#",
            content: "c#",
            value: "c#"
          },
          {
            id: "rust",
            content: "rust",
            value: "rust"
          }
        ]
      },
      {
        content: "database",
        value: "database",
        id: "database",
        children: [
          {
            id: "mongodb",
            content: "mongodb",
            value: "mongodb"
          },
          {
            id: "mssql",
            content: "mssql",
            value: "mssql"
          },
          {
            id: "casandra",
            content: "casandra",
            value: "casandra"
          }
        ]
      },
      {
        content: "framework",
        value: "framework",
        id: "framework",
        children: [
          {
            id: "svelte",
            content: "svelte",
            value: "svelte"
          },
          {
            id: "angular",
            content: "angular",
            value: "angular"
          },
          {
            id: "react",
            content: "react",
            value: "react"
          }
        ]
      }
    ]
  },
  {
    content: "books",
    value: "books",
    id: "books",
    children: [
      {
        id: "clean code",
        content: "clean code",
        value: "clean code",
        children: [
          {
            id: "clean code - section 1",
            content: "clean code - section 1",
            value: "clean code - section 1"
          },
          {
            id: "clean code - section 2",
            content: "clean code - section 2",
            value: "clean code - section 2"
          },
          {
            id: "clean code - section 3",
            content: "clean code - section 3",
            value: "clean code - section 3"
          }
        ]
      },
      {
        id: "structure",
        content: "structure",
        value: "structure",
        children: [
          {
            id: "structure - section 1",
            content: "structure - section 1",
            value: "structure - section 1"
          },
          {
            id: "structure - section 2",
            content: "structure - section 2",
            value: "structure - section 2"
          },
          {
            id: "structure - section 3",
            content: "structure - section 3",
            value: "structure - section 3"
          }
        ]
      },
      {
        id: "clean coder",
        content: "clean coder",
        value: "clean coder",
        children: [
          {
            id: "clean coder - section 1",
            content: "clean coder - section 1",
            value: "clean coder - section 1"
          },
          {
            id: "clean coder - section 2",
            content: "clean coder - section 2",
            value: "clean coder - section 2"
          },
          {
            id: "clean coder - section 3",
            content: "clean coder - section 3",
            value: "clean coder - section 3"
          }
        ]
      }
    ]
  },
  {
    id: "series",
    content: "series",
    value: "series",
    children: [
      {
        id: "Mr. Robot",
        content: "Mr. Robot",
        value: "Mr. Robot",
        children: [
          {
            id: "Mr. Robot - season 1",
            content: "Mr. Robot - season 1",
            value: "Mr. Robot - season 1"
          },
          {
            id: "Mr. Robot - season 2",
            content: "Mr. Robot - season 2",
            value: "Mr. Robot - season 2"
          },
          {
            id: "Mr. Robot - season 3",
            content: "Mr. Robot - season 3",
            value: "Mr. Robot - season 3"
          }
        ]
      },
      {
        id: "silicon valley",
        content: "silicon valley",
        value: "silicon valley",
        children: [
          {
            id: "silicon valley - season 1",
            content: "silicon valley - season 1",
            value: "silicon valley - season 1"
          },
          {
            id: "silicon valley - season 2",
            content: "silicon valley - season 2",
            value: "silicon valley - season 2"
          },
          {
            id: "silicon valley - season 3",
            content: "silicon valley - season 3",
            value: "silicon valley - season 3"
          }
        ]
      },
      {
        id: "code monkeys",
        content: "code monkeys",
        value: "code monkeys",
        children: [
          {
            id: "code monkeys - season 1",
            content: "code monkeys - season 1",
            value: "code monkeys - season 1"
          },
          {
            id: "code monkeys - season 2",
            content: "code monkeys - season 2",
            value: "code monkeys - season 2"
          },
          {
            id: "code monkeys - season 3",
            content: "code monkeys - season 3",
            value: "code monkeys - season 3"
          }
        ]
      }
    ]
  }
];
const leadExampleNodes = [
  {
    id: "person1",
    content: "Susan",
    lead: ExampleComponent,
    leadProps: {
      avatarId: 31
    }
  },
  {
    id: "person2",
    content: "Michael",
    lead: ExampleComponent,
    leadProps: {
      avatarId: 14
    }
  },
  {
    id: "person3",
    content: "Melissa",
    lead: ExampleComponent,
    leadProps: {
      avatarId: 9
    }
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Component,
    name: "Tree Views",
    description: "Display information in a hierarchical structure using collapsible nodes.",
    imports: ["TreeView", "TreeViewItem", "RecursiveTreeView", "type TreeViewNode"],
    source: "packages/skeleton/src/lib/components/TreeView",
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/treeview/",
    components: [
      { label: "TreeView", sveld: sveldTreeView },
      {
        label: "TreeViewItem",
        sveld: sveldTreeViewItem,
        overrideProps: [
          "open",
          "selection",
          "multiple",
          "disabled",
          "padding",
          "indent",
          "hover",
          "rounded",
          "caretOpen",
          "hyphenOpacity",
          "regionSummary",
          "regionSymbol",
          "regionChildren"
        ]
      },
      {
        label: "RecursiveTreeView",
        sveld: sveldRecursiveTreeView
      }
    ],
    keyboard: [
      [
        '<kbd class="kbd">Tab</kbd>',
        "Focus the next tree-view item or it's input."
      ],
      [
        '<kbd class="kbd">Shift + Tab</kbd> ',
        "Focus the previous tree-view item or it's input."
      ],
      [
        '<kbd class="kbd">Right arrow</kbd>',
        "Opens closed tree-view item or move focus to first child of open tree-view item."
      ],
      [
        '<kbd class="kbd">Left arrow</kbd>',
        "Closes open tree-view item or move focus to parent of closed tree-view item."
      ],
      ['<kbd class="kbd">Home</kbd>', "move focus to first tree-view item."],
      ['<kbd class="kbd">End</kbd>', "move focus to last tree-view item."]
    ]
  };
  let mediumSingle = "books";
  let booksSingle = "Clean Code";
  let relationalMediumSingle = "books";
  let relationalBooksSingle = "Clean Code";
  let childrenSingle = [];
  let mediumMultiple = ["books", "movies"];
  let booksMultiple = ["Clean Code", "The Art of Unix Programming"];
  let relationalMediumMultiple = ["movies"];
  let relationalBooksMultiple = [];
  let childrenMultiple = [];
  let expandTree;
  let expandedNodes = [];
  let disabledNodes = ["programming"];
  let singleCheckedNodes = ["programming"];
  let multiCheckedNodes = ["javascript"];
  let indeterminateNodes = ["programming", "language"];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
      usage: () => {
        return `  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-j3t8td">Icons</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<TreeView>
	<TreeViewItem>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		(item 1)
	</TreeViewItem>
</TreeView>
					`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(TreeView, "TreeView").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, { open: true }, {}, {
                  children: () => {
                    return `${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                      lead: () => {
                        return `<i class="fa-solid fa-file"></i> `;
                      },
                      default: () => {
                        return `<p data-svelte-h="svelte-1ytg7wj">File 1</p>`;
                      }
                    })} ${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                      lead: () => {
                        return `<i class="fa-solid fa-file"></i> `;
                      },
                      default: () => {
                        return `<p data-svelte-h="svelte-pobgp0">File 2</p>`;
                      }
                    })} `;
                  },
                  lead: () => {
                    return `<i class="fa-solid fa-folder"></i> `;
                  },
                  default: () => {
                    return `<p data-svelte-h="svelte-67wkjc">Folder</p>`;
                  }
                })}`;
              }
            })}`;
          }
        })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-qyjasw">Disabled State</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `<p data-svelte-h="svelte-3wxuti">Disable the entire tree view component</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<TreeView disabled></TreeView>`
              },
              {},
              {}
            )} <p data-svelte-h="svelte-1wq8trk">Disable individual item components.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<TreeView>
	<TreeViewItem disabled></TreeViewItem>
	<TreeViewItem open disabled></TreeViewItem>
</TreeView>
			`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(TreeView, "TreeView").$$render($$result, { disabled: true }, {}, {
              default: () => {
                return `${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, { open: true }, {}, {
                  children: () => {
                    return `${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                      default: () => {
                        return `<p data-svelte-h="svelte-1yg82fq">Clean Code</p>`;
                      }
                    })} ${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                      default: () => {
                        return `<p data-svelte-h="svelte-14etkej">The Clean Coder</p>`;
                      }
                    })} ${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                      default: () => {
                        return `<p data-svelte-h="svelte-17x3rzu">The Art of Unix Programming</p>`;
                      }
                    })} `;
                  },
                  lead: () => {
                    return `<i class="fa-solid fa-book-skull"></i> `;
                  },
                  default: () => {
                    return `<p data-svelte-h="svelte-1e0lv4i">Books</p>`;
                  }
                })} ${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                  children: () => {
                    return `${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                      default: () => {
                        return `<p data-svelte-h="svelte-1yg82fq">Clean Code</p>`;
                      }
                    })} ${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                      default: () => {
                        return `<p data-svelte-h="svelte-14etkej">The Clean Coder</p>`;
                      }
                    })} ${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                      default: () => {
                        return `<p data-svelte-h="svelte-17x3rzu">The Art of Unix Programming</p>`;
                      }
                    })} `;
                  },
                  lead: () => {
                    return `<i class="fa-solid fa-film"></i> `;
                  },
                  default: () => {
                    return `<p data-svelte-h="svelte-kzxb1b">Movies</p>`;
                  }
                })} ${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                  lead: () => {
                    return `<i class="fa-solid fa-tv"></i> `;
                  },
                  default: () => {
                    return `<p data-svelte-h="svelte-8jere6">TV</p>`;
                  }
                })}`;
              }
            })}`;
          }
        })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1ppl2by">Expand &amp; Collapse</h2> <p data-svelte-h="svelte-1lrisnm">We can bind the tree view and trigger methods for expanding or collapsing all children at once.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            background: "neutral",
            regionFooter: "flex justify-center gap-4"
          },
          {},
          {
            source: () => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `
let myTreeView: TreeView;

myTreeView.expandAll();
myTreeView.collapseAll();
					`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `
<TreeView bind:this={myTreeView}></TreeView>
			`
                },
                {},
                {}
              )} `;
            },
            footer: () => {
              return `<button class="btn variant-filled" data-svelte-h="svelte-e9y3m0">Expand</button> <button class="btn variant-filled" data-svelte-h="svelte-1m0wj06">Collapse</button> `;
            },
            preview: () => {
              return `${validate_component(TreeView, "TreeView").$$render(
                $$result,
                { this: expandTree },
                {
                  this: ($$value) => {
                    expandTree = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                      children: () => {
                        return `${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                          default: () => {
                            return `<p data-svelte-h="svelte-1yg82fq">Clean Code</p>`;
                          }
                        })} ${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                          default: () => {
                            return `<p data-svelte-h="svelte-14etkej">The Clean Coder</p>`;
                          }
                        })} ${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                          default: () => {
                            return `<p data-svelte-h="svelte-17x3rzu">The Art of Unix Programming</p>`;
                          }
                        })} `;
                      },
                      lead: () => {
                        return `<i class="fa-solid fa-book-skull"></i> `;
                      },
                      default: () => {
                        return `<p data-svelte-h="svelte-1e0lv4i">Books</p>`;
                      }
                    })} ${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                      children: () => {
                        return `${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                          default: () => {
                            return `<p data-svelte-h="svelte-s5yf35">The Flash</p>`;
                          }
                        })} ${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                          default: () => {
                            return `<p data-svelte-h="svelte-1j75cme">Guardians of the Galaxy</p>`;
                          }
                        })} ${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                          default: () => {
                            return `<p data-svelte-h="svelte-10v08ub">Black Panther</p>`;
                          }
                        })} `;
                      },
                      lead: () => {
                        return `<i class="fa-solid fa-film"></i> `;
                      },
                      default: () => {
                        return `<p data-svelte-h="svelte-kzxb1b">Movies</p>`;
                      }
                    })} ${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                      children: () => {
                        return `${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                          default: () => {
                            return `<p data-svelte-h="svelte-8mln73">The Simpsons</p>`;
                          }
                        })} ${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                          default: () => {
                            return `<p data-svelte-h="svelte-gbd0fl">Rick and Morty</p>`;
                          }
                        })} ${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                          default: () => {
                            return `<p data-svelte-h="svelte-1y54f3d">Family Guy</p>`;
                          }
                        })} `;
                      },
                      lead: () => {
                        return `<i class="fa-solid fa-tv"></i> `;
                      },
                      default: () => {
                        return `<p data-svelte-h="svelte-8jere6">TV</p>`;
                      }
                    })}`;
                  }
                }
              )}`;
            }
          }
        )}</section> <hr>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-2ueooh">Selection</h2> <p data-svelte-h="svelte-n1gozp">Each tree view provides a number of selection options.</p>  <h3 class="h3" data-svelte-h="svelte-1np0wp6">Single</h3> <p data-svelte-h="svelte-13dhq2f">When using single selection, our items are setup and treated as radio inputs.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          footer: () => {
            return `<div class="flex justify-center items-center gap-4"><span>Medium: <code class="code">${escape(mediumSingle)}</code></span> <span>Books: <code class="code">${escape(booksSingle)}</code></span></div> `;
          },
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
let medium = 'books';
let books = 'Clean Code';
`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<TreeView selection>
	<TreeViewItem bind:group={medium} name="medium" value="books">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<p>Books</p>
		<svelte:fragment slot="children">
			<TreeViewItem bind:group={books} name="books" value="Clean Code">
				<p>Clean Code</p>
			</TreeViewItem>
			<TreeViewItem bind:group={books} name="books" value="The Clean Coder">
				<p>The Clean Coder</p>
			</TreeViewItem>
			<TreeViewItem bind:group={books} name="books" value="The Art of Unix Programming">
				<p>The Art of Unix Programming</p>
			</TreeViewItem>
		</svelte:fragment>
	</TreeViewItem>
	<!-- ... -->
</TreeView>
			`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(TreeView, "TreeView").$$render($$result, { selection: true }, {}, {
              default: () => {
                return `${validate_component(TreeViewItem, "TreeViewItem").$$render(
                  $$result,
                  {
                    name: "medium",
                    value: "books",
                    group: mediumSingle
                  },
                  {
                    group: ($$value) => {
                      mediumSingle = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    children: () => {
                      return `${validate_component(TreeViewItem, "TreeViewItem").$$render(
                        $$result,
                        {
                          name: "books",
                          value: "Clean Code",
                          group: booksSingle
                        },
                        {
                          group: ($$value) => {
                            booksSingle = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          default: () => {
                            return `<p data-svelte-h="svelte-1yg82fq">Clean Code</p>`;
                          }
                        }
                      )} ${validate_component(TreeViewItem, "TreeViewItem").$$render(
                        $$result,
                        {
                          name: "books",
                          value: "The Clean Coder",
                          group: booksSingle
                        },
                        {
                          group: ($$value) => {
                            booksSingle = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          default: () => {
                            return `<p data-svelte-h="svelte-14etkej">The Clean Coder</p>`;
                          }
                        }
                      )} ${validate_component(TreeViewItem, "TreeViewItem").$$render(
                        $$result,
                        {
                          name: "books",
                          value: "The Art of Unix Programming",
                          group: booksSingle
                        },
                        {
                          group: ($$value) => {
                            booksSingle = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          default: () => {
                            return `<p data-svelte-h="svelte-17x3rzu">The Art of Unix Programming</p>`;
                          }
                        }
                      )} `;
                    },
                    lead: () => {
                      return `<i class="fa-solid fa-book-skull"></i> `;
                    },
                    default: () => {
                      return `<p data-svelte-h="svelte-1e0lv4i">Books</p>`;
                    }
                  }
                )} ${validate_component(TreeViewItem, "TreeViewItem").$$render(
                  $$result,
                  {
                    name: "medium",
                    value: "movies",
                    group: mediumSingle
                  },
                  {
                    group: ($$value) => {
                      mediumSingle = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    lead: () => {
                      return `<i class="fa-solid fa-film"></i> `;
                    },
                    default: () => {
                      return `<p data-svelte-h="svelte-kzxb1b">Movies</p>`;
                    }
                  }
                )} ${validate_component(TreeViewItem, "TreeViewItem").$$render(
                  $$result,
                  {
                    name: "medium",
                    value: "tv",
                    group: mediumSingle
                  },
                  {
                    group: ($$value) => {
                      mediumSingle = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    lead: () => {
                      return `<i class="fa-solid fa-tv"></i> `;
                    },
                    default: () => {
                      return `<p data-svelte-h="svelte-8jere6">TV</p>`;
                    }
                  }
                )}`;
              }
            })}`;
          }
        })}  <h3 class="h3" data-svelte-h="svelte-1axdd3q">Multiple</h3> <p data-svelte-h="svelte-1stagj1">When using multiple selection, our items are setup and treated as checkbox inputs.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          footer: () => {
            return `<div class="flex justify-center items-center gap-4"><span>Mediums: <code class="code">${escape(mediumMultiple.length ? mediumMultiple : "None")}</code></span> <span>Books: <code class="code">${escape(booksMultiple.length ? booksMultiple : "None")}</code></span></div> `;
          },
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
let medums = ['books', 'movies'];
let books = ['Clean Code', 'The Art of Unix Programming']
`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<TreeView selection multiple>
	<TreeViewItem bind:group={medums} name="medium" value="books">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<p>Books</p>
		<svelte:fragment slot="children">
			<TreeViewItem bind:group={books} name="books" value="Clean Code">
				<p>Clean Code</p>
			</TreeViewItem>
			<TreeViewItem bind:group={books} name="books" value="The Clean Coder">
				<p>The Clean Coder</p>
			</TreeViewItem>
			<TreeViewItem bind:group={books} name="books" value="The Art of Unix Programming">
				<p>The Art of Unix Programming</p>
			</TreeViewItem>
		</svelte:fragment>
	</TreeViewItem>
	<!-- ... -->
</TreeView>
			`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(TreeView, "TreeView").$$render($$result, { selection: true, multiple: true }, {}, {
              default: () => {
                return `${validate_component(TreeViewItem, "TreeViewItem").$$render(
                  $$result,
                  {
                    name: "medium",
                    value: "books",
                    group: mediumMultiple
                  },
                  {
                    group: ($$value) => {
                      mediumMultiple = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    children: () => {
                      return `${validate_component(TreeViewItem, "TreeViewItem").$$render(
                        $$result,
                        {
                          name: "books",
                          value: "Clean Code",
                          group: booksMultiple
                        },
                        {
                          group: ($$value) => {
                            booksMultiple = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          default: () => {
                            return `<p data-svelte-h="svelte-1yg82fq">Clean Code</p>`;
                          }
                        }
                      )} ${validate_component(TreeViewItem, "TreeViewItem").$$render(
                        $$result,
                        {
                          name: "books",
                          value: "The Clean Coder",
                          group: booksMultiple
                        },
                        {
                          group: ($$value) => {
                            booksMultiple = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          default: () => {
                            return `<p data-svelte-h="svelte-14etkej">The Clean Coder</p>`;
                          }
                        }
                      )} ${validate_component(TreeViewItem, "TreeViewItem").$$render(
                        $$result,
                        {
                          name: "books",
                          value: "The Art of Unix Programming",
                          group: booksMultiple
                        },
                        {
                          group: ($$value) => {
                            booksMultiple = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          default: () => {
                            return `<p data-svelte-h="svelte-17x3rzu">The Art of Unix Programming</p>`;
                          }
                        }
                      )} `;
                    },
                    lead: () => {
                      return `<i class="fa-solid fa-book-skull"></i> `;
                    },
                    default: () => {
                      return `<p data-svelte-h="svelte-1e0lv4i">Books</p>`;
                    }
                  }
                )} ${validate_component(TreeViewItem, "TreeViewItem").$$render(
                  $$result,
                  {
                    name: "medium",
                    value: "movies",
                    group: mediumMultiple
                  },
                  {
                    group: ($$value) => {
                      mediumMultiple = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    lead: () => {
                      return `<i class="fa-solid fa-film"></i> `;
                    },
                    default: () => {
                      return `<p data-svelte-h="svelte-kzxb1b">Movies</p>`;
                    }
                  }
                )} ${validate_component(TreeViewItem, "TreeViewItem").$$render(
                  $$result,
                  {
                    name: "medium",
                    value: "tv",
                    group: mediumMultiple
                  },
                  {
                    group: ($$value) => {
                      mediumMultiple = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    lead: () => {
                      return `<i class="fa-solid fa-tv"></i> `;
                    },
                    default: () => {
                      return `<p data-svelte-h="svelte-8jere6">TV</p>`;
                    }
                  }
                )}`;
              }
            })}`;
          }
        })}  <h3 class="h3" data-svelte-h="svelte-83h0e1">Relational</h3> <p data-svelte-h="svelte-kt3hye">Use the <code class="code">children</code> prop to create a relational connection between parent and children.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            background: "neutral",
            regionFooter: "text-center"
          },
          {},
          {
            source: () => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `
let medium = 'books';
let book = 'Clean Code';
let bookChildren: TreeViewItem[] = [];
`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `
<TreeView selection>
	<TreeViewItem bind:group={medium} name="medium" value="books" children={bookChildren}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<p>Books</p>
		<svelte:fragment slot="children">
			<TreeViewItem bind:this={bookChildren[0]} bind:group={book} name="books" value="Clean Code">
				<p>Clean Code</p>
			</TreeViewItem>
			<TreeViewItem bind:this={bookChildren[1]} bind:group={book} name="books" value="The Clean Coder">
				<p>The Clean Coder</p>
			</TreeViewItem>
			<TreeViewItem bind:this={bookChildren[2]} bind:group={book} name="books" value="The Art of Unix Programming">
				<p>The Art of Unix Programming</p>
			</TreeViewItem>
		</svelte:fragment>
	</TreeViewItem>
	<!-- ... -->
</TreeView>
			`
                },
                {},
                {}
              )} `;
            },
            preview: () => {
              return `${validate_component(TreeView, "TreeView").$$render($$result, { selection: true }, {}, {
                default: () => {
                  return `${validate_component(TreeViewItem, "TreeViewItem").$$render(
                    $$result,
                    {
                      name: "r_medium",
                      value: "books",
                      open: true,
                      children: childrenSingle,
                      group: relationalMediumSingle
                    },
                    {
                      group: ($$value) => {
                        relationalMediumSingle = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      children: () => {
                        return `${validate_component(TreeViewItem, "TreeViewItem").$$render(
                          $$result,
                          {
                            name: "r_books",
                            value: "Clean Code",
                            this: childrenSingle[0],
                            group: relationalBooksSingle
                          },
                          {
                            this: ($$value) => {
                              childrenSingle[0] = $$value;
                              $$settled = false;
                            },
                            group: ($$value) => {
                              relationalBooksSingle = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `<p data-svelte-h="svelte-1yg82fq">Clean Code</p>`;
                            }
                          }
                        )} ${validate_component(TreeViewItem, "TreeViewItem").$$render(
                          $$result,
                          {
                            name: "r_books",
                            value: "The Clean Coder",
                            this: childrenSingle[1],
                            group: relationalBooksSingle
                          },
                          {
                            this: ($$value) => {
                              childrenSingle[1] = $$value;
                              $$settled = false;
                            },
                            group: ($$value) => {
                              relationalBooksSingle = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `<p data-svelte-h="svelte-14etkej">The Clean Coder</p>`;
                            }
                          }
                        )} ${validate_component(TreeViewItem, "TreeViewItem").$$render(
                          $$result,
                          {
                            name: "r_books",
                            value: "The Art of Unix Programming",
                            this: childrenSingle[2],
                            group: relationalBooksSingle
                          },
                          {
                            this: ($$value) => {
                              childrenSingle[2] = $$value;
                              $$settled = false;
                            },
                            group: ($$value) => {
                              relationalBooksSingle = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `<p data-svelte-h="svelte-17x3rzu">The Art of Unix Programming</p>`;
                            }
                          }
                        )} `;
                      },
                      lead: () => {
                        return `<i class="fa-solid fa-book-skull"></i> `;
                      },
                      default: () => {
                        return `<p data-svelte-h="svelte-1e0lv4i">Books</p>`;
                      }
                    }
                  )} ${validate_component(TreeViewItem, "TreeViewItem").$$render(
                    $$result,
                    {
                      name: "r_medium",
                      value: "movies",
                      group: relationalMediumSingle
                    },
                    {
                      group: ($$value) => {
                        relationalMediumSingle = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      lead: () => {
                        return `<i class="fa-solid fa-film"></i> `;
                      },
                      default: () => {
                        return `<p data-svelte-h="svelte-kzxb1b">Movies</p>`;
                      }
                    }
                  )} ${validate_component(TreeViewItem, "TreeViewItem").$$render(
                    $$result,
                    {
                      name: "r_medium",
                      value: "tv",
                      group: relationalMediumSingle
                    },
                    {
                      group: ($$value) => {
                        relationalMediumSingle = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      lead: () => {
                        return `<i class="fa-solid fa-tv"></i> `;
                      },
                      default: () => {
                        return `<p data-svelte-h="svelte-8jere6">TV</p>`;
                      }
                    }
                  )}`;
                }
              })}`;
            }
          }
        )} ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            background: "neutral",
            regionFooter: "text-center"
          },
          {},
          {
            source: () => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `
let mediums = ['movies'];
let books: string[] = [];
let booksChildren: TreeViewItem[] = [];
`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `
<TreeView selection multiple>
	<TreeViewItem bind:group={mediums} name="medium" value="books" children={children}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<p>Books</p>
		<svelte:fragment slot="children">
			<TreeViewItem bind:this={booksChildren[0]} bind:group={books} name="books" value="Clean Code">
				<p>Clean Code</p>
			</TreeViewItem>
			<TreeViewItem bind:this={booksChildren[1]} bind:group={books} name="books" value="The Clean Coder">
				<p>The Clean Coder</p>
			</TreeViewItem>
			<TreeViewItem bind:this={booksChildren[2]} bind:group={books} name="books" value="The Art of Unix Programming">
				<p>The Art of Unix Programming</p>
			</TreeViewItem>
		</svelte:fragment>
	</TreeViewItem>
	<!-- ... -->
</TreeView>
			`
                },
                {},
                {}
              )} `;
            },
            preview: () => {
              return `${validate_component(TreeView, "TreeView").$$render($$result, { selection: true, multiple: true }, {}, {
                default: () => {
                  return `${validate_component(TreeViewItem, "TreeViewItem").$$render(
                    $$result,
                    {
                      name: "r_medium",
                      value: "books",
                      open: true,
                      children: childrenMultiple,
                      group: relationalMediumMultiple
                    },
                    {
                      group: ($$value) => {
                        relationalMediumMultiple = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      children: () => {
                        return `${validate_component(TreeViewItem, "TreeViewItem").$$render(
                          $$result,
                          {
                            name: "r_books",
                            value: "Clean Code",
                            this: childrenMultiple[0],
                            group: relationalBooksMultiple
                          },
                          {
                            this: ($$value) => {
                              childrenMultiple[0] = $$value;
                              $$settled = false;
                            },
                            group: ($$value) => {
                              relationalBooksMultiple = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `<p data-svelte-h="svelte-1yg82fq">Clean Code</p>`;
                            }
                          }
                        )} ${validate_component(TreeViewItem, "TreeViewItem").$$render(
                          $$result,
                          {
                            name: "r_books",
                            value: "The Clean Coder",
                            this: childrenMultiple[1],
                            group: relationalBooksMultiple
                          },
                          {
                            this: ($$value) => {
                              childrenMultiple[1] = $$value;
                              $$settled = false;
                            },
                            group: ($$value) => {
                              relationalBooksMultiple = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `<p data-svelte-h="svelte-14etkej">The Clean Coder</p>`;
                            }
                          }
                        )} ${validate_component(TreeViewItem, "TreeViewItem").$$render(
                          $$result,
                          {
                            name: "r_books",
                            value: "The Art of Unix Programming",
                            this: childrenMultiple[2],
                            group: relationalBooksMultiple
                          },
                          {
                            this: ($$value) => {
                              childrenMultiple[2] = $$value;
                              $$settled = false;
                            },
                            group: ($$value) => {
                              relationalBooksMultiple = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `<p data-svelte-h="svelte-17x3rzu">The Art of Unix Programming</p>`;
                            }
                          }
                        )} `;
                      },
                      lead: () => {
                        return `<i class="fa-solid fa-book-skull"></i> `;
                      },
                      default: () => {
                        return `<p data-svelte-h="svelte-1e0lv4i">Books</p>`;
                      }
                    }
                  )} ${validate_component(TreeViewItem, "TreeViewItem").$$render(
                    $$result,
                    {
                      name: "r_medium",
                      value: "movies",
                      group: relationalMediumMultiple
                    },
                    {
                      group: ($$value) => {
                        relationalMediumMultiple = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      lead: () => {
                        return `<i class="fa-solid fa-film"></i> `;
                      },
                      default: () => {
                        return `<p data-svelte-h="svelte-kzxb1b">Movies</p>`;
                      }
                    }
                  )} ${validate_component(TreeViewItem, "TreeViewItem").$$render(
                    $$result,
                    {
                      name: "r_medium",
                      value: "tv",
                      group: relationalMediumMultiple
                    },
                    {
                      group: ($$value) => {
                        relationalMediumMultiple = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      lead: () => {
                        return `<i class="fa-solid fa-tv"></i> `;
                      },
                      default: () => {
                        return `<p data-svelte-h="svelte-8jere6">TV</p>`;
                      }
                    }
                  )}`;
                }
              })}`;
            }
          }
        )}</section> <hr>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-73r9pa">Recursive Mode</h2> <p data-svelte-h="svelte-dqmez">Tree views can be generated with a recursive data-driven method using the <code class="code">RecursiveTreeView</code> components.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            background: "neutral",
            regionFooter: "flex justify-center gap-4"
          },
          {},
          {
            source: () => {
              return `<p data-svelte-h="svelte-1svt315">To get expected results make sure to include a <em>unique Id</em> for each node.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `
let myTreeViewNodes: TreeViewNode[] = [
	{
		id: 'unique-id',
		content: 'content',
		lead: '(icon)',
		children: [
			//...
		]
	},
	// ...
]
						`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `
<RecursiveTreeView nodes={myTreeViewNodes} />
						`
                },
                {},
                {}
              )} `;
            },
            preview: () => {
              return `${validate_component(RecursiveTreeView, "RecursiveTreeView").$$render($$result, { nodes }, {}, {})}`;
            }
          }
        )}  <h3 class="h3" data-svelte-h="svelte-wnxv8t">Svelte Components</h3> <p data-svelte-h="svelte-6ma6hj">The props <code class="code">lead</code> and <code class="code">content</code> supports Svelte Components in addition to HTML content.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            background: "neutral",
            regionFooter: "flex justify-center gap-4"
          },
          {},
          {
            source: () => {
              return `<p data-svelte-h="svelte-1svt315">To get expected results make sure to include a <em>unique Id</em> for each node.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `
import ExampleComponent from './exampleComponent.svelte';

let myTreeViewNodes: TreeViewNode[] = [
	{
		id: 'unique-id',
		content: 'content',
		lead: ExampleComponent,
		leadProps: {
			myProp: 'myValue',
		}
	},
	// ...
]
						`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `
<RecursiveTreeView nodes={myTreeViewNodes} />
						`
                },
                {},
                {}
              )} `;
            },
            preview: () => {
              return `${validate_component(RecursiveTreeView, "RecursiveTreeView").$$render($$result, { nodes: leadExampleNodes }, {}, {})}`;
            }
          }
        )}  <h3 class="h3" data-svelte-h="svelte-bm6y69">Expanded</h3>  <p data-svelte-h="svelte-a8zi0i">To access and modify the expanded nodes use <code class="code">expandedNodes</code> array prop.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            background: "neutral",
            regionFooter: "flex justify-center gap-4"
          },
          {},
          {
            footer: () => {
              return `<span>Expanded nodes: <code class="code">${escape(expandedNodes)}</code></span> `;
            },
            source: () => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `
let myTreeViewNodes: TreeViewNode[] = //...
let expandedNodes : string[] = [];
						`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `
<RecursiveTreeView nodes={nodes} bind:expandedNodes={expandedNodes} />
						`
                },
                {},
                {}
              )} `;
            },
            preview: () => {
              return `${validate_component(RecursiveTreeView, "RecursiveTreeView").$$render(
                $$result,
                { nodes, expandedNodes },
                {
                  expandedNodes: ($$value) => {
                    expandedNodes = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          }
        )}  <h3 class="h3" data-svelte-h="svelte-1aumgfe">Disabled</h3>  <p data-svelte-h="svelte-hkcyey">To access and modify the disabled nodes use <code class="code">disabledNodes</code> array prop.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            background: "neutral",
            regionFooter: "flex justify-center gap-4"
          },
          {},
          {
            footer: () => {
              return `<span>Disabled nodes: <code class="code">${escape(disabledNodes)}</code></span> `;
            },
            source: () => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `
let myTreeViewNodes: TreeViewNode[] = //...
let disabledNodes : string[] = [];
						`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `
<RecursiveTreeView nodes={myTreeViewNodes} bind:disabledNodes={disabledNodes} />
						`
                },
                {},
                {}
              )} `;
            },
            preview: () => {
              return `${validate_component(RecursiveTreeView, "RecursiveTreeView").$$render(
                $$result,
                { nodes, disabledNodes },
                {
                  disabledNodes: ($$value) => {
                    disabledNodes = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          }
        )}  <h3 class="h3" data-svelte-h="svelte-ledjqi">Selection</h3>  <p data-svelte-h="svelte-119urkt">Just like normal Tree-view, Recursive Tree-view supports selection with both <em>single</em> and <em>multiple</em> modes.</p> <p data-svelte-h="svelte-1xenp9j">To access and modify the checked nodes use <code class="code">checkedNodes</code> array prop.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            background: "neutral",
            regionFooter: "flex justify-center gap-4"
          },
          {},
          {
            footer: () => {
              return `<span>checked nodes: <code class="code">${escape(singleCheckedNodes)}</code></span> `;
            },
            source: () => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `
let myTreeViewNodes: TreeViewNode[] = //...
let checkedNodes : string[] = ['programming'];
						`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `
<RecursiveTreeView selection nodes={myTreeViewNodes} bind:checkedNodes={checkedNodes} />
						`
                },
                {},
                {}
              )} `;
            },
            preview: () => {
              return `${validate_component(RecursiveTreeView, "RecursiveTreeView").$$render(
                $$result,
                {
                  selection: true,
                  nodes,
                  checkedNodes: singleCheckedNodes
                },
                {
                  checkedNodes: ($$value) => {
                    singleCheckedNodes = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          }
        )}  <h3 class="h3" data-svelte-h="svelte-61l3x3">Relational Selection</h3>  <p data-svelte-h="svelte-zgn69q">Just like normal Tree-view, Recursive Tree-view supports relational selection using the prop <code class="code">relational</code>.</p> <p data-svelte-h="svelte-1xenp9j">To access and modify the checked nodes use <code class="code">checkedNodes</code> array prop.</p> <p data-svelte-h="svelte-1ya3f8b">In multiple relational selection mode, an extra array prop <code class="code">indeterminateNodes</code> is available to indicate indeterminate
				nodes.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            background: "neutral",
            regionFooter: "flex justify-center gap-4"
          },
          {},
          {
            footer: () => {
              return `<span>indeterminate nodes: <code class="code whitespace-normal">${escape(indeterminateNodes)}</code></span> `;
            },
            source: () => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `
let myTreeViewNodes: TreeViewNode[] = //...
let checkedNodes : string[] = ['javascript'];
let indeterminateNodes : string[] = ['programming', 'language'];
						`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `
<RecursiveTreeView 
	selection 
	multiple 
	relational 
	nodes={myTreeViewNodes} 
	bind:checkedNodes={checkedNodes} 
	bind:indeterminateNodes={indeterminateNodes}/>
						`
                },
                {},
                {}
              )} `;
            },
            preview: () => {
              return `${validate_component(RecursiveTreeView, "RecursiveTreeView").$$render(
                $$result,
                {
                  selection: true,
                  multiple: true,
                  relational: true,
                  nodes,
                  checkedNodes: multiCheckedNodes,
                  indeterminateNodes
                },
                {
                  checkedNodes: ($$value) => {
                    multiCheckedNodes = $$value;
                    $$settled = false;
                  },
                  indeterminateNodes: ($$value) => {
                    indeterminateNodes = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          }
        )}</section> `;
      },
      sandbox: () => {
        return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { regionFooter: "text-center" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<TreeView>
	<TreeViewItem>
		(item 1)
		<svelte:fragment slot="children">
			<TreeViewItem>
				(Child 1)
				<svelte:fragment slot="children">
					<TreeViewItem>
						(Child of Child 1)
					</TreeViewItem>
					<TreeViewItem>
						(Child of Child 2)
					</TreeViewItem>
				</svelte:fragment>
			</TreeViewItem>
			<TreeViewItem>
				(Child 2)
			</TreeViewItem>
		</svelte:fragment>
	</TreeViewItem>
	<TreeViewItem>
		(item 2)
	</TreeViewItem>
</TreeView>
				`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `<div class="w-full max-w-[480px] card p-4 text-token">${validate_component(TreeView, "TreeView").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                  children: () => {
                    return `${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                      children: () => {
                        return `${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                          default: () => {
                            return `<p data-svelte-h="svelte-1p916k2">Child of Child 1</p>`;
                          }
                        })} ${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                          default: () => {
                            return `<p data-svelte-h="svelte-1152y3t">Child of Child 2</p>`;
                          }
                        })} `;
                      },
                      default: () => {
                        return `<p data-svelte-h="svelte-5kews1">Child 1</p>`;
                      }
                    })} ${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                      default: () => {
                        return `<p data-svelte-h="svelte-71cbm0">Child 2</p>`;
                      }
                    })} `;
                  },
                  default: () => {
                    return `<p data-svelte-h="svelte-1d9i0ls">Item 1</p>`;
                  }
                })} ${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                  children: () => {
                    return `${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                      default: () => {
                        return `<p data-svelte-h="svelte-yesruu">Child</p>`;
                      }
                    })} `;
                  },
                  default: () => {
                    return `<p data-svelte-h="svelte-55y2j7">Item 2</p>`;
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

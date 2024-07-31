import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { A as Accordion, a as AccordionItem } from "../../../../../chunks/AccordionItem.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const sveldAccordion = { "props": [{ "name": "autocollapse", "kind": "let", "description": "Set the auto-collapse mode.", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "width", "kind": "let", "description": "Provide classes to set the accordion width.", "type": "string", "value": "'w-full'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "spacing", "kind": "let", "description": "Provide classes to set the vertical spacing between items.", "type": "string", "value": "'space-y-1'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "disabled", "kind": "let", "description": "Set the accordion disabled state for all items.", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "padding", "kind": "let", "description": "Provide classes to set the accordion item padding styles.", "type": "string", "value": "'py-2 px-4'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "hover", "kind": "let", "description": "Provide classes to set the accordion item hover styles.", "type": "string", "value": "'hover:bg-primary-hover-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "rounded", "kind": "let", "description": "Provide classes to set the accordion item rounded styles.", "type": "string", "value": "'rounded-container-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "caretOpen", "kind": "let", "description": "Set the rotation of the item caret in the open state.", "type": "string", "value": "'rotate-180'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "caretClosed", "kind": "let", "description": "Set the rotation of the item caret in the closed state.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionControl", "kind": "let", "description": "Provide arbitrary classes to the trigger button region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionPanel", "kind": "let", "description": "Provide arbitrary classes to the content panel region.", "type": "string", "value": "'space-y-4'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionCaret", "kind": "let", "description": "Provide arbitrary classes to the caret icon region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitions", "kind": "let", "description": "Enable/Disable transitions", "type": "boolean", "value": "!$prefersReducedMotionStore", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionIn", "kind": "let", "description": "Provide the transition to used on entry.", "type": "TransitionIn", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionInParams", "kind": "let", "description": "Transition params provided to `transitionIn`.", "type": "TransitionParams", "value": "{ duration: 200 }", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionOut", "kind": "let", "description": "Provide the transition to used on exit.", "type": "TransitionOut", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionOutParams", "kind": "let", "description": "Transition params provided to `transitionOut`.", "type": "TransitionParams", "value": "{ duration: 200 }", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "__default__", "default": true, "slot_props": "{}" }], "events": [], "typedefs": [], "componentComment": " The Accordion parent element." };
const sveldAccordionItem = { "props": [{ "name": "open", "kind": "let", "description": "Set open by default on load.", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "id", "kind": "let", "description": "Provide a unique input id. Auto-generated by default", "type": "string", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "autocollapse", "kind": "let", "description": "Set the auto-collapse mode.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "active", "kind": "let", "description": "The writable store that houses the auto-collapse active item UUID.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "disabled", "kind": "let", "description": "Set the disabled state for this item.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "padding", "kind": "let", "description": "Provide classes to set the accordion item padding styles.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "hover", "kind": "let", "description": "Provide classes to set the accordion item hover styles.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "rounded", "kind": "let", "description": "Provide classes to set the accordion item rounded styles.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "caretOpen", "kind": "let", "description": "Provide arbitrary classes to the trigger button region.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "caretClosed", "kind": "let", "description": "Provide arbitrary classes to content panel region.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionControl", "kind": "let", "description": "Provide arbitrary classes to the trigger button region.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionPanel", "kind": "let", "description": "Provide arbitrary classes to content panel region.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionCaret", "kind": "let", "description": "Provide arbitrary classes default region.", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitions", "kind": "let", "description": "Enable/Disable transitions", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionIn", "kind": "let", "description": "Provide the transition to used on entry.", "type": "TransitionIn", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionInParams", "kind": "let", "description": "Transition params provided to `transitionIn`.", "type": "TransitionParams", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionOut", "kind": "let", "description": "Provide the transition to used on exit.", "type": "TransitionOut", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "transitionOutParams", "kind": "let", "description": "Transition params provided to `transitionOut`.", "type": "TransitionParams", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "content", "default": false, "fallback": "(content)", "slot_props": "{}", "description": "Provide the content of each item." }, { "name": "iconClosed", "default": false, "fallback": "{@html svgCaretIcon}", "slot_props": "{}", "description": "Allows for an optional element when the AccordionItem is closed, such as an icon" }, { "name": "iconOpen", "default": false, "fallback": "{@html svgCaretIcon}", "slot_props": "{}", "description": "Allows for an optional element when the AccordionItem is open, such as an icon" }, { "name": "lead", "default": false, "slot_props": "{}", "description": "Allows for an optional leading element, such as an icon." }, { "name": "summary", "default": false, "fallback": "(summary)", "slot_props": "{}", "description": "Provide the interactive summary of each item." }], "events": [{ "type": "dispatched", "name": "toggle", "detail": "{ event: Event, id: string, panelId: string, open: boolean, autocollapse: boolean }", "description": "Fires when an accordion item is toggled." }, { "type": "forwarded", "name": "click", "element": "button" }, { "type": "forwarded", "name": "keydown", "element": "button" }, { "type": "forwarded", "name": "keyup", "element": "button" }, { "type": "forwarded", "name": "keypress", "element": "button" }], "typedefs": [], "componentComment": " The Accordion child element." };
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, ipsa inventore, deserunt tempora ullam accusantium sed ipsam iste impedit beatae praesentium quisquam itaque voluptatibus laborum sunt tenetur, minima porro corrupti.";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Component,
    name: "Accordions",
    description: "Divide content into collapsible sections.",
    imports: ["Accordion", "AccordionItem"],
    source: "packages/skeleton/src/lib/components/Accordion",
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/accordion/",
    components: [
      {
        label: "Accordion",
        sveld: sveldAccordion
      },
      {
        label: "AccordionItem",
        sveld: sveldAccordionItem,
        overrideProps: [
          "disabled",
          "padding",
          "hover",
          "rounded",
          "regionControl",
          "regionPanel",
          "regionCaret"
        ]
      }
    ],
    keyboard: [
      ['<kbd class="kbd">Tab</kbd>', "Focus the next accordion item."],
      [
        '<kbd class="kbd">Shift + Tab</kbd> ',
        "Focus the previous accordion item."
      ],
      [
        '<kbd class="kbd">Space</kbd> or <kbd class="kbd">Enter</kbd>',
        "Toggles the item panel open or closed."
      ]
    ],
    transitionIn: "slide",
    transitionOut: "slide"
  };
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return ` <section class="space-y-4"></section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-cqkc6r">Auto-Collapse Mode</h2> <p data-svelte-h="svelte-n0mku7">Enable the <code class="code">autocollapse</code> setting to limit display to one accordion panel at a time.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
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
                language: "html",
                code: `
<Accordion autocollapse>
	<!-- ... -->
</Accordion>
`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(Accordion, "Accordion").$$render(
              $$result,
              {
                autocollapse: true,
                class: "card p-4 text-token"
              },
              {},
              {
                default: () => {
                  return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { open: true }, {}, {
                    content: () => {
                      return ` <p data-svelte-h="svelte-r6qxx">While Halloween and Day of the Dead occur nearly in tandem and share similar customs (candy, face painting, and community gathering), the two are not related. Halloween has ancient Celtic roots, while Day of the Dead has its own origins that date back to the Indigenous people of Mexico and Central America.</p> `;
                    },
                    summary: () => {
                      return `<p class="font-bold" data-svelte-h="svelte-1qhrhut">What is Día de los Muertos?</p>`;
                    },
                    lead: () => {
                      return `<i class="fa-solid fa-skull text-xl w-6 text-center"></i>`;
                    }
                  })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                    content: () => {
                      return ` <p data-svelte-h="svelte-mp8hmu">Roughly 3000 years ago, amongst the Aztec, Toltec, and Mayans, death and the dead were seen as a natural part of life that should be honored and celebrated, rather than mourned. In particular, the Nahua people of central Mexico believed the deceased traveled on a years-long journey to Chicunamictlán, the Land of the Dead. The living would provide supplies, such as food and water to aid them on the trek. This practice inspired the modern tradition of creating altars —known as ofrendas— at their homes, in addition to leaving offerings at the gravesites of loved ones.</p> `;
                    },
                    summary: () => {
                      return `<p class="font-bold" data-svelte-h="svelte-17bf5ws">When did it begin?</p>`;
                    },
                    lead: () => {
                      return `<i class="fa-solid fa-clock text-xl w-6 text-center"></i>`;
                    }
                  })}`;
                }
              }
            )} `;
          },
          default: () => {
            return `<h2 class="h2" data-svelte-h="svelte-cqkc6r">Auto-Collapse Mode</h2> <p data-svelte-h="svelte-n0mku7">Enable the <code class="code">autocollapse</code> setting to limit display to one accordion panel at a time.</p>`;
          }
        }
      )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1sr7pje">Open on Load</h2> <p data-svelte-h="svelte-mkmgwz">Set the visible items on load with <code class="code">open</code>. When using <code class="code">autocollapse</code> mode, this is limited
				to a single item.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<AccordionItem open>...</AccordionItem>`
        },
        {},
        {}
      )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-t1jovg">Custom Icons</h2> <p data-svelte-h="svelte-1auycam">Set the <code class="code">iconOpen</code> and <code class="code">iconClosed</code> slots within the Accordion Item component.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
        $$result,
        {
          background: "neutral",
          regionFooter: "text-center"
        },
        {},
        {
          source: () => {
            return `<blockquote class="blockquote" data-svelte-h="svelte-56h9j1">TIP: abstract both fragments to a single standalone component for reusability.</blockquote> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<AccordionItem>
	<svelte:fragment slot="iconClosed">(icon closed)</svelte:fragment>
	<svelte:fragment slot="iconOpen">(icon open)</svelte:fragment>
	<!-- ... -->
</AccordionItem>
`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, { class: "card p-4 text-token" }, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                  content: () => {
                    return `${escape(loremIpsum)}`;
                  },
                  summary: () => {
                    return `<strong data-svelte-h="svelte-qa5kge">Default: Caret</strong>`;
                  }
                })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                  iconOpen: () => {
                    return `<i class="fa-solid fa-plus"></i>`;
                  },
                  iconClosed: () => {
                    return `<i class="fa-solid fa-minus"></i>`;
                  },
                  content: () => {
                    return `${escape(loremIpsum)}`;
                  },
                  summary: () => {
                    return `<strong data-svelte-h="svelte-ma2vjc">Custom: Plus and Minus</strong>`;
                  }
                })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                  iconOpen: () => {
                    return `<i class="fa-solid fa-face-smile"></i>`;
                  },
                  iconClosed: () => {
                    return `<i class="fa-solid fa-face-surprise"></i>`;
                  },
                  content: () => {
                    return `${escape(loremIpsum)}`;
                  },
                  summary: () => {
                    return `<strong data-svelte-h="svelte-plni5c">Custom: Smiley and Surprise</strong>`;
                  }
                })}`;
              }
            })}`;
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
<Accordion>
	<AccordionItem open>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<svelte:fragment slot="summary">(summary)</svelte:fragment>
		<svelte:fragment slot="content">(content)</svelte:fragment>
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<svelte:fragment slot="summary">(summary)</svelte:fragment>
		<svelte:fragment slot="content">(content)</svelte:fragment>
	</AccordionItem>
	<!-- ... -->
</Accordion>
`
            },
            {},
            {}
          )} `;
        },
        footer: () => {
          return `<a class="btn variant-soft" href="https://www.oprahdaily.com/life/a37259063/day-of-the-dead-facts-history/" target="_blank" rel="noreferrer" data-svelte-h="svelte-1t1ey10">Information Source</a> `;
        },
        preview: () => {
          return `${validate_component(Accordion, "Accordion").$$render($$result, { class: "card p-4 text-token" }, {}, {
            default: () => {
              return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { open: true }, {}, {
                content: () => {
                  return ` <p data-svelte-h="svelte-9ze2dn">While Halloween and Day of the Dead occur nearly in tandem and share similar customs (candy, face painting, and community gathering), the two are not related. Halloween has ancient Celtic roots, while Day of the Dead has its own origins that date back to the Indigenous people of Mexico and Central America.</p> `;
                },
                summary: () => {
                  return `<p class="font-bold" data-svelte-h="svelte-1qhrhut">What is Día de los Muertos?</p>`;
                },
                lead: () => {
                  return `<i class="fa-solid fa-skull text-xl w-6 text-center"></i>`;
                }
              })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                content: () => {
                  return ` <p data-svelte-h="svelte-6bvee6">Roughly 3000 years ago, amongst the Aztec, Toltec, and Mayans, death and the dead were seen as a natural part of life that should be honored and celebrated, rather than mourned. In particular, the Nahua people of central Mexico believed the deceased traveled on a years-long journey to Chicunamictlán, the Land of the Dead. The living would provide supplies, such as food and water to aid them on the trek. This practice inspired the modern tradition of creating altars —known as ofrendas— at their homes, in addition to leaving offerings at the gravesites of loved ones.</p> `;
                },
                summary: () => {
                  return `<p class="font-bold" data-svelte-h="svelte-17bf5ws">When did it begin?</p>`;
                },
                lead: () => {
                  return `<i class="fa-solid fa-clock text-xl w-6 text-center"></i>`;
                }
              })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                content: () => {
                  return ` <p data-svelte-h="svelte-1tdsp8y">Once the Spanish colonized Mexico in the 16th century, their own Catholic views on the dead influenced Mexican customs. Día de los Muertos was originally celebrated in the summer months. The holiday came to fall on November 1 and November 2 to align with All Saints Day and All Souls Day.</p> `;
                },
                summary: () => {
                  return `<p class="font-bold" data-svelte-h="svelte-yl1zon">When is it celebrated?</p>`;
                },
                lead: () => {
                  return `<i class="fa-solid fa-calendar text-xl w-6 text-center"></i>`;
                }
              })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                content: () => {
                  return ` <p data-svelte-h="svelte-1cy6m84">To beckon spirits back into the Land of the Living for the festivities, revelers create makeshift altars, or ofrendas, at their homes and at the gravesites of their deceased loved ones. Families gather at the site to eat, tell stories, and even clean the graves.</p> `;
                },
                summary: () => {
                  return `<p class="font-bold" data-svelte-h="svelte-1g1tnvd">What are ofrendas?</p>`;
                },
                lead: () => {
                  return `<i class="fa-solid fa-gift text-xl w-6 text-center"></i>`;
                }
              })}`;
            }
          })}`;
        }
      })} `;
    },
    default: () => {
      return ` `;
    }
  })}`;
});
export {
  Page as default
};

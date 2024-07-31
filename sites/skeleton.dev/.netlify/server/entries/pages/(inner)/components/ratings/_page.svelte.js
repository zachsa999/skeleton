import { c as create_ssr_component, b as createEventDispatcher, e as escape, h as each, v as validate_component, d as add_attribute } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { R as RangeSlider } from "../../../../../chunks/RangeSlider.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const cBase = "w-full flex";
function isFull(value2, index) {
  return Math.floor(value2) >= index + 1;
}
function isHalf(value2, index) {
  return value2 === index + 0.5;
}
const Ratings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { value = 0 } = $$props;
  let { max = 5 } = $$props;
  let { interactive = false } = $$props;
  let { text = "text-token" } = $$props;
  let { fill = "fill-token" } = $$props;
  let { justify = "justify-center" } = $$props;
  let { spacing = "space-x-2" } = $$props;
  let { regionIcon = "" } = $$props;
  createEventDispatcher();
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.interactive === void 0 && $$bindings.interactive && interactive !== void 0)
    $$bindings.interactive(interactive);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.regionIcon === void 0 && $$bindings.regionIcon && regionIcon !== void 0)
    $$bindings.regionIcon(regionIcon);
  classesBase = `${cBase} ${text} ${fill} ${justify} ${spacing} ${$$props.class ?? ""}`;
  return `<div class="${"ratings " + escape(classesBase, true)}" data-testid="rating-bar"> ${each({ length: max }, (_, i) => {
    return `${interactive ? `<button class="${"rating-icon " + escape(regionIcon, true)}" type="button">${isFull(value, i) ? `${slots.full ? slots.full({}) : ``}` : `${isHalf(value, i) ? `${slots.half ? slots.half({}) : ``}` : `${slots.empty ? slots.empty({}) : ``}`}`} </button>` : `<span class="${"rating-icon " + escape(regionIcon, true)}">${isFull(value, i) ? `${slots.full ? slots.full({}) : ``}` : `${isHalf(value, i) ? `${slots.half ? slots.half({}) : ``}` : `${slots.empty ? slots.empty({}) : ``}`}`} </span>`}`;
  })}</div>`;
});
const sveldRatings = { "props": [{ "name": "value", "kind": "let", "description": "Current rating value.", "type": "number", "value": "0", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "max", "kind": "let", "description": "Maximum rating value.", "type": "number", "value": "5", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "interactive", "kind": "let", "description": "Enables interactive mode for each rating icon.", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "text", "kind": "let", "description": "Provide classes to set the text color.", "type": "string", "value": "'text-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "fill", "kind": "let", "description": "Provide classes to set the SVG fill color.", "type": "string", "value": "'fill-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "justify", "kind": "let", "description": "Provide classes to set the flexbox justification.", "type": "string", "value": "'justify-center'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "spacing", "kind": "let", "description": "Provide classes to set the horizontal spacing style.", "type": "string", "value": "'space-x-2'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionIcon", "kind": "let", "description": "Provide arbitrary classes to the icon region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "empty", "default": false, "slot_props": "{}", "description": "Provide an empty rating icon." }, { "name": "full", "default": false, "slot_props": "{}", "description": "Provide a full rating icon." }, { "name": "half", "default": false, "slot_props": "{}", "description": "Provide a half rating icon." }], "events": [{ "type": "dispatched", "name": "icon", "detail": "{ index: number  }", "description": "Fires when an icons is clicked" }], "typedefs": [] };
const icons = {
  // Stars
  starEmpty: `<svg class="w-6 md:w-8 lg:w-10 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>`,
  starHalf: `<svg class="w-6 md:w-8 lg:w-10 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M320 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L320.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L320.1 439.8 191.8 508.3C181 514 167.9 513.1 158 506s-14.9-19.3-12.9-31.3L169.8 329 65.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L227 150.3 291.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L470.5 329l24.6 145.7z"/></svg>`,
  starFull: `<svg class="w-6 md:w-8 lg:w-10 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>`,
  // Circles
  circleEmpty: `<svg class="w-6 md:w-8 lg:w-10 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>`,
  circleHalf: `<svg class="w-6 md:w-8 lg:w-10 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>`,
  circleFull: `<svg class="w-6 md:w-8 lg:w-10 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Component,
    name: "Ratings",
    description: "Create an visual representation of a numeric range.",
    imports: ["Ratings"],
    source: "packages/skeleton/src/lib/components/Ratings",
    components: [{ label: "Ratings", sveld: sveldRatings }]
  };
  let value = { current: 3.5, max: 5 };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
      usage: () => {
        return ` <section class="space-y-4" data-svelte-h="svelte-6zvb8x"><p>Perfect for creating a stars ratings for movies or ecommerce ratings. Supply any type of image, text, or icon for the <em>empty</em>, <em>half</em>, and <em>full</em> slots. Then adjust the <code class="code">value</code>
				and <code class="code">max</code> properties as desired. Note that SVG icons displayed verbatim, so you may need to adjust the fill color
				and responsive sizing.</p></section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1t9lapi">Binding</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `let value = { current: 3.5, max: 5 };`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<Ratings bind:value={value.current} max={value.max}>
	<svelte:fragment slot="empty">(icon)</svelte:fragment>
	<svelte:fragment slot="half">(icon)</svelte:fragment>
	<svelte:fragment slot="full">(icon)</svelte:fragment>
</Ratings>
			`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(Ratings, "Ratings").$$render(
              $$result,
              {
                class: "fill-token",
                value: value.current,
                max: value.max
              },
              {},
              {
                full: () => {
                  return `<!-- HTML_TAG_START -->${icons.circleFull}<!-- HTML_TAG_END --> `;
                },
                half: () => {
                  return `<!-- HTML_TAG_START -->${icons.circleHalf}<!-- HTML_TAG_END --> `;
                },
                empty: () => {
                  return `<!-- HTML_TAG_START -->${icons.circleEmpty}<!-- HTML_TAG_END -->`;
                }
              }
            )}`;
          }
        })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1xj6g7f">User Interactivity</h2> <p data-svelte-h="svelte-bezkiu">Use the <code class="code">interactive</code> prop and <code class="code">on:icon</code> events to add interactivity.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
function iconClick(event: CustomEvent<{index:number}>): void {
	value.current = event.detail.index;
}
						`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<Ratings bind:value={value.current} max={value.max} interactive on:icon={iconClick}>
	<svelte:fragment slot="empty">(icon)</svelte:fragment>
	<svelte:fragment slot="half">(icon)</svelte:fragment>
	<svelte:fragment slot="full">(icon)</svelte:fragment>
</Ratings>
			`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(Ratings, "Ratings").$$render(
              $$result,
              {
                class: "fill-token",
                max: value.max,
                interactive: true,
                value: value.current
              },
              {
                value: ($$value) => {
                  value.current = $$value;
                  $$settled = false;
                }
              },
              {
                full: () => {
                  return `<!-- HTML_TAG_START -->${icons.starFull}<!-- HTML_TAG_END --> `;
                },
                half: () => {
                  return `<!-- HTML_TAG_START -->${icons.starHalf}<!-- HTML_TAG_END --> `;
                },
                empty: () => {
                  return `<!-- HTML_TAG_START -->${icons.starEmpty}<!-- HTML_TAG_END -->`;
                }
              }
            )}`;
          }
        })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1mwxse9">Emoji</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<Ratings value={3.5} max={5}>
	<svelte:fragment slot="empty">
		<span class="text-3xl">⚪</span>
	</svelte:fragment>
	<svelte:fragment slot="half">
		<span class="text-3xl">☠️</span>
	</svelte:fragment>
	<svelte:fragment slot="full">
		<span class="text-3xl">💀</span>
	</svelte:fragment>
</Ratings>
			`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(Ratings, "Ratings").$$render(
              $$result,
              {
                class: "fill-token",
                value: value.current,
                max: value.max
              },
              {},
              {
                full: () => {
                  return `<span class="text-3xl" data-svelte-h="svelte-1co5l0j">💀</span> `;
                },
                half: () => {
                  return `<span class="text-3xl" data-svelte-h="svelte-1s66ssv">☠️</span> `;
                },
                empty: () => {
                  return `<span class="text-3xl" data-svelte-h="svelte-rnu7sm">⚪</span>`;
                }
              }
            )}`;
          }
        })}</section> `;
      },
      sandbox: () => {
        return ` ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            regionFooter: "grid grid-cols-[1fr_auto] gap-4 place-items-center"
          },
          {},
          {
            footer: () => {
              return `${validate_component(RangeSlider, "RangeSlider").$$render(
                $$result,
                {
                  name: "range-slider",
                  max: value.max,
                  step: 0.5,
                  ticked: true,
                  class: "w-full",
                  value: value.current
                },
                {
                  value: ($$value) => {
                    value.current = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} <select class="select" name="max" id="max"><option${add_attribute("value", 3, 0)} data-svelte-h="svelte-178gs9o">Max 3</option><option${add_attribute("value", 5, 0)} data-svelte-h="svelte-18y6d9c">Max 5</option><option${add_attribute("value", 10, 0)} data-svelte-h="svelte-195i8rg">Max 10</option></select> `;
            },
            source: () => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `
<Ratings value={3.5} max={5}>
    <svelte:fragment slot="empty">(icon)</svelte:fragment>
    <svelte:fragment slot="half">(icon)</svelte:fragment>
    <svelte:fragment slot="full">(icon)</svelte:fragment>
</Ratings>
			`
                },
                {},
                {}
              )} `;
            },
            preview: () => {
              return `${validate_component(Ratings, "Ratings").$$render(
                $$result,
                {
                  fill: "fill-on-primary-token",
                  value: value.current,
                  max: value.max
                },
                {},
                {
                  full: () => {
                    return `<!-- HTML_TAG_START -->${icons.starFull}<!-- HTML_TAG_END --> `;
                  },
                  half: () => {
                    return `<!-- HTML_TAG_START -->${icons.starHalf}<!-- HTML_TAG_END --> `;
                  },
                  empty: () => {
                    return `<!-- HTML_TAG_START -->${icons.starEmpty}<!-- HTML_TAG_END -->`;
                  }
                }
              )}`;
            }
          }
        )} `;
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

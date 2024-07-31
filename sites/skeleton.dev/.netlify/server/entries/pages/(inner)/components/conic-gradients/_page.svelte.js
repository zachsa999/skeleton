import { c as create_ssr_component, e as escape, h as each, n as add_styles, i as compute_slots, v as validate_component } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { T as TabGroup, a as Tab } from "../../../../../chunks/Tab.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const cBase = "flex flex-col items-center space-y-4 w-";
const cCaption = "text-center";
const cLegend = "text-sm w-full";
const cSwatch = "block aspect-square bg-black w-5 rounded-full mr-2";
const ConicGradient = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesCaption;
  let classesLegend;
  let $$slots = compute_slots(slots);
  let { stops = [
    {
      color: ["neutral", 500],
      start: 0,
      end: 100
    }
  ] } = $$props;
  let { legend = false } = $$props;
  let { spin = false } = $$props;
  let { width = "w-24" } = $$props;
  let { hover = "bg-primary-hover-token" } = $$props;
  let { digits = 0 } = $$props;
  let { regionCaption = "" } = $$props;
  let { regionCone = "" } = $$props;
  let { regionLegend = "" } = $$props;
  let generatedLegendList;
  if ($$props.stops === void 0 && $$bindings.stops && stops !== void 0)
    $$bindings.stops(stops);
  if ($$props.legend === void 0 && $$bindings.legend && legend !== void 0)
    $$bindings.legend(legend);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.digits === void 0 && $$bindings.digits && digits !== void 0)
    $$bindings.digits(digits);
  if ($$props.regionCaption === void 0 && $$bindings.regionCaption && regionCaption !== void 0)
    $$bindings.regionCaption(regionCaption);
  if ($$props.regionCone === void 0 && $$bindings.regionCone && regionCone !== void 0)
    $$bindings.regionCone(regionCone);
  if ($$props.regionLegend === void 0 && $$bindings.regionLegend && regionLegend !== void 0)
    $$bindings.regionLegend(regionLegend);
  classesBase = `${cBase} ${$$props.class ?? ""}`;
  classesCaption = `${cCaption} ${regionCaption}`;
  classesLegend = `${cLegend} ${regionLegend}`;
  return `<figure class="${"conic-gradient " + escape(classesBase, true)}" data-testid="conic-gradient"> ${$$slots.default ? `<figcaption class="${"conic-caption " + escape(classesCaption, true)}">${slots.default ? slots.default({}) : ``}</figcaption>` : ``}  ${``}  ${legend && generatedLegendList ? `<ul class="${"conic-list list " + escape(classesLegend, true)}">${each(generatedLegendList, ({ color, label, value }) => {
    return `<li class="${"conic-item " + escape(hover, true)}"><span class="${"conic-swatch " + escape(cSwatch, true)}"${add_styles({ "background": color })}></span> <span class="conic-label flex-auto">${escape(label)}</span> <strong class="conic-value">${escape(value)}%</strong> </li>`;
  })}</ul>` : ``}</figure>`;
});
const sveldConicGradient = { "props": [{ "name": "stops", "kind": "let", "description": "Provide a data set of color stops and labels.", "type": "ConicStop[]", "value": "[{ color: ['neutral', 500], start: 0, end: 100 }]", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "legend", "kind": "let", "description": "Enable a contextual legend.", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "spin", "kind": "let", "description": "When enabled, the conic gradient will spin.", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "width", "kind": "let", "description": "Style the conic gradient width.", "type": "string", "value": "'w-24'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "hover", "kind": "let", "description": "Style the legend hover effect.", "type": "string", "value": "'bg-primary-hover-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "digits", "kind": "let", "description": "Set the number of digits on the legend values.", "type": "number", "value": "0", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionCaption", "kind": "let", "description": "Style the caption region above the gradient.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionCone", "kind": "let", "description": "Style the conic gradient region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionLegend", "kind": "let", "description": "Style the legend region below the gradient.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "__default__", "default": true, "slot_props": "{}" }], "events": [], "typedefs": [] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Component,
    name: "Conic Gradients",
    description: "Create conic gradient data visualizations for pie charts, loading spinners, and more.",
    imports: ["ConicGradient"],
    types: ["ConicStop"],
    source: "packages/skeleton/src/lib/components/ConicGradient",
    components: [{ sveld: sveldConicGradient }]
  };
  let tabColors = 0;
  let stopsDemo = [
    {
      color: "rgba(255,255,255,1)",
      start: 0,
      end: 10
    },
    {
      color: "rgba(255,255,255,0.5)",
      start: 10,
      end: 35
    },
    {
      color: "rgba(255,255,255,0.25)",
      start: 35,
      end: 100
    }
  ];
  let stopsLegend = [
    {
      label: "Orange",
      color: ["orange", 500],
      start: 0,
      end: 10
    },
    {
      label: "Yellow",
      color: ["yellow", 500],
      start: 10,
      end: 35
    },
    {
      label: "Red",
      color: ["red", 500],
      start: 35,
      end: 100
    }
  ];
  const stopsSpinner = [
    { color: "transparent", start: 0, end: 25 },
    {
      color: "rgb(var(--color-primary-500))",
      start: 75,
      end: 100
    }
  ];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
      usage: () => {
        return `  <div class="space-y-4"><p data-svelte-h="svelte-1w4zgni">Provide one or more color stops that start with values that range from <code class="code">0%</code> to
				<code class="code">100%</code>. A stop of
				<code class="code">0%</code> starts at the top middle, then additional values are added in a clock-wise direction.</p> ${validate_component(TabGroup, "TabGroup").$$render($$result, { regionPanel: "space-y-4" }, {}, {
          panel: () => {
            return ` ${tabColors === 0 ? ` <p data-svelte-h="svelte-1oukicp">Provide a theme color CSS custom property <code class="code">var(--color-primary-500)</code> wrapped in
							<code class="code">rgb()</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
const conicStops: ConicStop[] = [
	{ label: 'Primary', color: 'rgb(var(--color-primary-500))', start: 0, end: 33 },
	{ label: 'Secondary', color: 'rgb(var(--color-secondary-500))', start: 33, end: 66 },
	{ label: 'Tertiary', color: 'rgb(var(--color-tertiary-500))', start: 66, end: 100 }
];
`
              },
              {},
              {}
            )}` : `${tabColors === 1 ? ` <p data-svelte-h="svelte-1uidqx">To utilize default Tailwind colors, supply an array with the format <code class="code">[name: string, shade: number]</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
const conicStops: ConicStop[] = [
	{ label: 'Orange', color: ['orange', 500], start: 0, end: 10 },
	{ label: 'Yellow', color: ['yellow', 500], start: 10, end: 35 },
	{ label: 'Red', color: ['red', 500], start: 35, end: 100 }
];
`
              },
              {},
              {}
            )}` : `${tabColors === 2 ? ` <p data-svelte-h="svelte-1wmgmme">You can provide <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value" target="_blank" rel="noreferrer">standard CSS color values</a> as a string, including: color names, hex, rgba, HSL, or similar.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
const conicStops: ConicStop[] = [
	{ label: 'Name', color: 'orange', start: 0, end: 10 },
	{ label: 'HSL', color: 'hsl(60deg 100% 50%)', start: 10, end: 35 },
	{ label: 'Hex', color: '#bada55', start: 35, end: 100 }
];
`
              },
              {},
              {}
            )}` : ``}`}`} `;
          },
          default: () => {
            return `${validate_component(Tab, "Tab").$$render(
              $$result,
              { name: "tab1", value: 0, group: tabColors },
              {
                group: ($$value) => {
                  tabColors = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Theme Colors`;
                }
              }
            )} ${validate_component(Tab, "Tab").$$render(
              $$result,
              { name: "tab2", value: 1, group: tabColors },
              {
                group: ($$value) => {
                  tabColors = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Tailwind Colors`;
                }
              }
            )} ${validate_component(Tab, "Tab").$$render(
              $$result,
              { name: "tab3", value: 2, group: tabColors },
              {
                group: ($$value) => {
                  tabColors = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Custom Colors`;
                }
              }
            )} `;
          }
        })}  <p data-svelte-h="svelte-11j474t">This data can be reactive, but be sure to adhere to standard Svelte requirements when <a class="anchor" href="https://svelte.dev/tutorial/updating-arrays-and-objects" target="_blank" rel="noreferrer">updating arrays</a>.</p></div>  <div class="space-y-4"><h2 class="h2" data-svelte-h="svelte-fyfm5o">Legend</h2> <p data-svelte-h="svelte-1dzkb5p">By enabling the <code class="code">legend</code> property, a small table of values will appear below the conic gradient.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
const conicStops: ConicStop[] = [
		{ label: 'One', color: 'rgba(255,255,255,1)', start: 0, end: 10 },
		{ label: 'Two', color: 'rgba(255,255,255,0.5)', start: 10, end: 35 },
		{ label: 'Three', color: 'rgba(255,255,255,0.25)', start: 35, end: 100 }
];
`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<ConicGradient stops={conicStops} legend>(caption)</ConicGradient>`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(ConicGradient, "ConicGradient").$$render($$result, { stops: stopsLegend, legend: true }, {}, {
              default: () => {
                return `Heat Map`;
              }
            })}`;
          }
        })}</div>  <div class="space-y-4"><h2 class="h2" data-svelte-h="svelte-vvl9l3">Animated Spinner</h2> <p data-svelte-h="svelte-6sp4re">Add the <code class="code">spin</code> property to implement a spinning animation automatically. Try pairing with a smooth gradient by
				providing gaps between when a color stop ends and when the next begins. This will automatically blend.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
const conicStops: ConicStop[] = [
	{ color: 'transparent', start: 0, end: 25 },
	{ color: 'rgb(var(--color-primary-500))', start: 75, end: 100 }
];
`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<ConicGradient stops={conicStops} spin>Loading</ConicGradient>`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(ConicGradient, "ConicGradient").$$render(
              $$result,
              {
                stops: stopsSpinner,
                spin: true,
                width: "w-8"
              },
              {},
              {
                default: () => {
                  return `<p class="text-token" data-svelte-h="svelte-1upr80i">Loading</p>`;
                }
              }
            )}`;
          }
        })}</div>  <div class="space-y-4"><h2 class="h2" data-svelte-h="svelte-12lwhqv">Rotate Axis</h2> <p data-svelte-h="svelte-1l56dmf">Use the <a class="anchor" href="https://tailwindcss.com/docs/rotate" target="_blank" rel="noreferrer">Tailwind rotate</a> utility
				classes with the
				<code class="code">regionCone</code> property to change the starting axis position.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `<ConicGradient ... regionCone="rotate-90" />`
          },
          {},
          {}
        )}</div> `;
      },
      sandbox: () => {
        return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
const conicStops: ConicStop[] = [
	{ color: 'rgba(255,255,255,1)', start: 0, end: 10 },
	{ color: 'rgba(255,255,255,0.5)', start: 10, end: 35 },
	{ color: 'rgba(255,255,255,0.25)', start: 35, end: 100 }
];
`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<ConicGradient stops={conicStops}>(caption)</ConicGradient>`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(ConicGradient, "ConicGradient").$$render($$result, { stops: stopsDemo, width: "w-48" }, {}, {})}`;
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

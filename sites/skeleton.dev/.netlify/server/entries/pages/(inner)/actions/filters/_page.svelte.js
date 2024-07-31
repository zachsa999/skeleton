import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview, R as RadioGroup, a as RadioItem } from "../../../../../chunks/DocsPreview.js";
import { g as getImageLink } from "../../../../../chunks/images.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { T as TabGroup, a as Tab } from "../../../../../chunks/Tab.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
import { A as Apollo, B as BlueNight, E as Emerald, N as Noir } from "../../../../../chunks/Noir.js";
import { G as GreenFall, N as NoirLight, R as Rustic, S as Summer84, X as XPro } from "../../../../../chunks/XPro.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let imgPlaceholder;
  const settings = {
    feature: DocsFeature.Action,
    name: "Filters",
    description: "Apply Instagram-like filter effects to images.",
    imports: ["filter"],
    source: "packages/skeleton/src/lib/actions/Filters",
    parameters: [
      [
        '<code class="code">(default)</code>',
        "string",
        "-",
        "-",
        'The name of the filter, such as "Apollo".'
      ]
    ]
  };
  let activeImg = "YOErFW8AfkI";
  let method = 0;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    imgPlaceholder = getImageLink({ id: activeImg, h: 200, w: 200 });
    $$rendered = ` ${validate_component(Apollo, "Apollo").$$render($$result, {}, {}, {})} ${validate_component(BlueNight, "BlueNight").$$render($$result, {}, {}, {})} ${validate_component(Emerald, "Emerald").$$render($$result, {}, {}, {})} ${validate_component(GreenFall, "GreenFall").$$render($$result, {}, {}, {})} ${validate_component(Noir, "Noir").$$render($$result, {}, {}, {})} ${validate_component(NoirLight, "NoirLight").$$render($$result, {}, {}, {})} ${validate_component(Rustic, "Rustic").$$render($$result, {}, {}, {})} ${validate_component(Summer84, "Summer84").$$render($$result, {}, {}, {})} ${validate_component(XPro, "XPro").$$render($$result, {}, {}, {})} ${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
      usage: () => {
        return ` <section class="space-y-4" data-svelte-h="svelte-8ggwpr"><p>Add each filter you plan to use within the scope of your filtered elements. To use globally throughout your application, add this to
				your application&#39;s root layout. Avoid importing filters you are not using.</p></section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-3a9ahw">Applying a Filter</h2> <p data-svelte-h="svelte-1y1fdzz">Use either of the two methods below to apply your desired filter. <u>The hash mark is required</u>.</p> ${validate_component(TabGroup, "TabGroup").$$render($$result, { regionPanel: "space-y-4" }, {}, {
          panel: () => {
            return ` ${method === 0 ? `<p data-svelte-h="svelte-1xz34zc">Use the following <a class="anchor" href="https://svelte.dev/tutorial/actions" target="_blank" rel="noreferrer">Svelte action</a> to filter any element. Pass the filter name as the only parameter.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `import { filter } from '@skeletonlabs/skeleton';`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<img src={myImageSrc} use:filter={'#BlueNight'}>`
              },
              {},
              {}
            )}` : `${method === 1 ? `<p data-svelte-h="svelte-60m45e">Alternatively you may apply filters using inline CSS. This is what the action is doing under the hood.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<img src={myImageSrc} style="filter: url({'#Emerald'})">`
              },
              {},
              {}
            )}` : ``}`} `;
          },
          default: () => {
            return `${validate_component(Tab, "Tab").$$render(
              $$result,
              { name: "method", value: 0, group: method },
              {
                group: ($$value) => {
                  method = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Via Action`;
                }
              }
            )} ${validate_component(Tab, "Tab").$$render(
              $$result,
              { name: "method", value: 1, group: method },
              {
                group: ($$value) => {
                  method = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Via Attribute`;
                }
              }
            )} `;
          }
        })}</section> <hr> <section class="space-y-4" data-svelte-h="svelte-3klkwy"><h2 class="h2">How It Works</h2>  <p>This feature is enabled by the use of native browser <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter" target="_blank" rel="noreferrer">SVG filters</a> via <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix" target="_blank" rel="noreferrer">feColorMatrix</a> transformations.</p></section> <section class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-4" data-svelte-h="svelte-18b4k4m"><div class="space-y-2"><h2 class="h2">Create a Custom Filter</h2>  <p>Use this tool by <a class="anchor" href="https://twitter.com/rikschennink/" target="_blank" rel="noreferrer">Rik Schennink</a> to easily generate your own custom filters.</p></div> <a class="btn variant-filled-secondary" href="https://fecolormatrix.com/" target="_blank" rel="noreferrer"><span>Create a Filter</span> <span><i class="fa-solid fa-up-right-from-square"></i></span></a></section> <hr> <section class="space-y-4" data-svelte-h="svelte-1c65ibp"><h2 class="h2">Browser Support</h2>  <p>Please be aware that <strong>SVG filters</strong> have limited support in Safari.</p> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"><div class="card p-2 !bg-green-500 text-black"><h4 class="h4" data-toc-ignore>Chrome</h4> <span>Full</span></div> <div class="card p-2 !bg-green-500 text-black"><h4 class="h4" data-toc-ignore>Edge</h4> <span>Full</span></div> <div class="card p-2 !bg-green-500 text-black"><h4 class="h4" data-toc-ignore>Firefox</h4> <span>Full</span></div> <div class="card p-2 !bg-yellow-500 text-black"><h4 class="h4" data-toc-ignore>Safari</h4> <span>Partial</span></div></div></section> `;
      },
      sandbox: () => {
        return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
          source: () => {
            return `<p data-svelte-h="svelte-1rt94z5">Import the filter and each filter component you wish to use.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `import { filter, Emerald, BlueNight /* ... */  } from '@skeletonlabs/skeleton';`
              },
              {},
              {}
            )} <p data-svelte-h="svelte-j8ao0n">Implement each filter component. For global scope add these to your root layout.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<Emerald />
<BlueNight />`
              },
              {},
              {}
            )} <p data-svelte-h="svelte-1mq2bxd">Apply the filter to your desired element.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<img ... use:filter={'#Emerald'} />`
              },
              {},
              {}
            )} `;
          },
          footer: () => {
            return `<div class="text-center">${validate_component(RadioGroup, "RadioGroup").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(RadioItem, "RadioItem").$$render(
                  $$result,
                  {
                    name: "source",
                    value: "YOErFW8AfkI",
                    group: activeImg
                  },
                  {
                    group: ($$value) => {
                      activeImg = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `1`;
                    }
                  }
                )} ${validate_component(RadioItem, "RadioItem").$$render(
                  $$result,
                  {
                    name: "source",
                    value: "z_X0PxmBuIQ",
                    group: activeImg
                  },
                  {
                    group: ($$value) => {
                      activeImg = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `2`;
                    }
                  }
                )} ${validate_component(RadioItem, "RadioItem").$$render(
                  $$result,
                  {
                    name: "source",
                    value: "8vKVlNIbAc4",
                    group: activeImg
                  },
                  {
                    group: ($$value) => {
                      activeImg = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `3`;
                    }
                  }
                )}`;
              }
            })}</div> `;
          },
          preview: () => {
            return `<section class="p-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4"><div class="flex flex-col items-center space-y-4 overflow-hidden"><img class="aspect-square w-full rounded-container-token"${add_attribute("src", imgPlaceholder, 0)} alt="example"> <span class="badge variant-soft" data-svelte-h="svelte-1kfxr">Original</span></div> <div class="flex flex-col items-center space-y-4 overflow-hidden"><img class="aspect-square w-full rounded-container-token"${add_attribute("src", imgPlaceholder, 0)} alt="example"> <span class="badge variant-soft" data-svelte-h="svelte-qlvry">Emerald</span></div> <div class="flex flex-col items-center space-y-4 overflow-hidden"><img class="aspect-square w-full rounded-container-token"${add_attribute("src", imgPlaceholder, 0)} alt="example"> <span class="badge variant-soft" data-svelte-h="svelte-r3s4p8">BlueNight</span></div> <div class="flex flex-col items-center space-y-4 overflow-hidden"><img class="aspect-square w-full rounded-container-token"${add_attribute("src", imgPlaceholder, 0)} alt="example"> <span class="badge variant-soft" data-svelte-h="svelte-636rir">XPro</span></div> <div class="flex flex-col items-center space-y-4 overflow-hidden"><img class="aspect-square w-full rounded-container-token"${add_attribute("src", imgPlaceholder, 0)} alt="example"> <span class="badge variant-soft" data-svelte-h="svelte-10u34rd">Summer84</span></div> <div class="flex flex-col items-center space-y-4 overflow-hidden"><img class="aspect-square w-full rounded-container-token"${add_attribute("src", imgPlaceholder, 0)} alt="example"> <span class="badge variant-soft" data-svelte-h="svelte-cwykag">Rustic</span></div> <div class="flex flex-col items-center space-y-4 overflow-hidden"><img class="aspect-square w-full rounded-container-token"${add_attribute("src", imgPlaceholder, 0)} alt="example"> <span class="badge variant-soft" data-svelte-h="svelte-1oj6aov">Apollo</span></div> <div class="flex flex-col items-center space-y-4 overflow-hidden"><img class="aspect-square w-full rounded-container-token"${add_attribute("src", imgPlaceholder, 0)} alt="example"> <span class="badge variant-soft" data-svelte-h="svelte-1grf1yk">GreenFall</span></div> <div class="flex flex-col items-center space-y-4 overflow-hidden"><img class="aspect-square w-full rounded-container-token"${add_attribute("src", imgPlaceholder, 0)} alt="example"> <span class="badge variant-soft" data-svelte-h="svelte-1gcqa46">Noir</span></div> <div class="flex flex-col items-center space-y-4 overflow-hidden"><img class="aspect-square w-full rounded-container-token"${add_attribute("src", imgPlaceholder, 0)} alt="example"> <span class="badge variant-soft" data-svelte-h="svelte-1n508um">NoirLight</span></div></section>`;
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

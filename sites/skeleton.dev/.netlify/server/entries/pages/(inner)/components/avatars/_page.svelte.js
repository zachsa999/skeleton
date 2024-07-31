import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import { g as getImageLink } from "../../../../../chunks/images.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { A as Avatar } from "../../../../../chunks/Avatar.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
import { A as Apollo, B as BlueNight, E as Emerald, N as Noir } from "../../../../../chunks/Noir.js";
import { G as GreenFall, N as NoirLight, R as Rustic, S as Summer84, X as XPro } from "../../../../../chunks/XPro.js";
function filter(node, filterName) {
  if (filterName === void 0)
    return;
  const applyFilter = () => {
    node.setAttribute("style", `filter: url("${filterName}")`);
  };
  applyFilter();
  return {
    update(newArgs) {
      filterName = newArgs;
      applyFilter();
    }
  };
}
const sveldAvatar = { "props": [{ "name": "initials", "kind": "let", "description": "Initials only - Provide up to two text characters.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "fill", "kind": "let", "description": "Initials only - Provide classes to set the SVG text fill color.", "type": "string", "value": "'fill-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "fontSize", "kind": "let", "description": "Initials only - Set the base font size for the scalable SVG text.", "type": "number", "value": "150", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "src", "kind": "let", "description": "Provide the avatar image element source.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "fallback", "kind": "let", "description": "Provide the fallback image element source.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "action", "kind": "let", "description": "Image only. Provide a Svelte action reference, such as `filter`.", "type": "() => { }", "value": "() => { }", "isFunction": true, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "actionParams", "kind": "let", "description": "Image only. Provide Svelte action params, such as Apollo.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "background", "kind": "let", "description": "Provide classes to set background styles.", "type": "string", "value": "'bg-surface-400-500-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "width", "kind": "let", "description": "Provide classes to set avatar width.", "type": "string", "value": "'w-16'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "border", "kind": "let", "description": "Provide classes to set border styles.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "rounded", "kind": "let", "description": "Provide classes to set rounded style.", "type": "string", "value": "'rounded-full'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "shadow", "kind": "let", "description": "Provide classes to set shadow styles.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "cursor", "kind": "let", "description": "Provide classes to set cursor styles.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "__default__", "default": true, "slot_props": "{}" }], "events": [], "typedefs": [] };
const borderStyles = "border-4 border-surface-300-600-token hover:!border-primary-500";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let actionParams;
  const settings = {
    feature: DocsFeature.Component,
    name: "Avatars",
    description: "Display user avatars with an image or initials.",
    imports: ["Avatar"],
    source: "packages/skeleton/src/lib/components/Avatar",
    components: [{ sveld: sveldAvatar }]
  };
  const imgPlaceholder = getImageLink({ id: "YOErFW8AfkI", w: 128, h: 128 });
  const roundedMapping = {
    0: "rounded-none",
    1: "rounded-sm",
    2: "rounded",
    3: "rounded-md",
    4: "rounded-lg",
    5: "rounded-xl",
    6: "rounded-2xl",
    7: "rounded-3xl",
    8: "rounded-full"
  };
  let rangeSliderValue = 8;
  actionParams = "#Apollo";
  return ` ${validate_component(Apollo, "Apollo").$$render($$result, {}, {}, {})} ${validate_component(BlueNight, "BlueNight").$$render($$result, {}, {}, {})} ${validate_component(Emerald, "Emerald").$$render($$result, {}, {}, {})} ${validate_component(GreenFall, "GreenFall").$$render($$result, {}, {}, {})} ${validate_component(Noir, "Noir").$$render($$result, {}, {}, {})} ${validate_component(NoirLight, "NoirLight").$$render($$result, {}, {}, {})} ${validate_component(Rustic, "Rustic").$$render($$result, {}, {}, {})} ${validate_component(Summer84, "Summer84").$$render($$result, {}, {}, {})} ${validate_component(XPro, "XPro").$$render($$result, {}, {}, {})} ${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return ` <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-74c2q0">Using Initials</h2> <p data-svelte-h="svelte-3tmvb7">Display up to two text characters. (ex: Jane Doe would be JD)</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<Avatar initials="JD" background="bg-primary-500" />`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `${validate_component(Avatar, "Avatar").$$render(
            $$result,
            {
              initials: "JD",
              background: "bg-primary-500"
            },
            {},
            {}
          )}`;
        }
      })}</section>   <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-ituq41">Fallback</h2> <p data-svelte-h="svelte-qlbu71">Use the default slot to provide fallback images, icons, or text.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
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
                code: `<Avatar background="bg-secondary-500">(fallback)</Avatar>`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(Avatar, "Avatar").$$render($$result, { background: "bg-secondary-500" }, {}, {
              default: () => {
                return `<i class="fa-solid fa-skull text-xl"></i>`;
              }
            })}`;
          }
        }
      )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1ey06x9">Interactive Border</h2> <p data-svelte-h="svelte-a428kv">Apply the following styles using the <code class="code">border</code> and <code class="code">cursor</code> properties.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<Avatar
	border="${borderStyles}"
	cursor="cursor-pointer"
/>
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `${validate_component(Avatar, "Avatar").$$render(
            $$result,
            {
              initials: "SK",
              border: borderStyles,
              cursor: "cursor-pointer"
            },
            {},
            {}
          )}`;
        }
      })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-mrd2qm">Applying Filters</h2> <p data-svelte-h="svelte-1i8zu7">See <a class="anchor" href="/actions/filters">Filters</a> to learn how to import and configure the filters action and SVG filter components.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `import { filter, ${actionParams.replace("#", "")} } from '@skeletonlabs/skeleton';`
        },
        {},
        {}
      )} ${validate_component(DocsPreview, "DocsPreview").$$render(
        $$result,
        {
          background: "neutral",
          regionFooter: "text-center"
        },
        {},
        {
          footer: () => {
            return `<select class="select w-auto" name="filter" id="filter"><option value="#Apollo" data-svelte-h="svelte-11vhs9y">#Apollo</option><option value="#BlueNight" data-svelte-h="svelte-1t4v2mm">#BlueNight</option><option value="#Emerald" data-svelte-h="svelte-1hsr1vu">#Emerald</option><option value="#GreenFall" data-svelte-h="svelte-5ilvjy">#GreenFall</option><option value="#Noir" data-svelte-h="svelte-1mu8xno">#Noir</option><option value="#NoirLight" data-svelte-h="svelte-r4ji36">#NoirLight</option><option value="#Rustic" data-svelte-h="svelte-1lvmx5o">#Rustic</option><option value="#Summer84" data-svelte-h="svelte-1amsumq">#Summer84</option><option value="#XPro" data-svelte-h="svelte-otko3y">#XPro</option></select> `;
          },
          source: () => {
            return `<p data-svelte-h="svelte-1n0ci58">Via Filter Action</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<Avatar src="https://i.pravatar.cc/" action={filter} actionParams="${actionParams}" />`
              },
              {},
              {}
            )} <p data-svelte-h="svelte-djuvbp">Via Style Attribute</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<Avatar src="https://i.pravatar.cc/" style="filter: url({'${actionParams}'})" />`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(Avatar, "Avatar").$$render(
              $$result,
              {
                src: imgPlaceholder,
                action: filter,
                actionParams
              },
              {},
              {}
            )}`;
          }
        }
      )}</section> `;
    },
    sandbox: () => {
      return ` ${validate_component(DocsPreview, "DocsPreview").$$render(
        $$result,
        {
          regionFooter: "grid grid-cols-[100px_1fr] gap-4 items-center"
        },
        {},
        {
          footer: () => {
            return `<div class="text-center"><code class="code">${escape(roundedMapping[rangeSliderValue])}</code></div> <input type="range"${add_attribute("max", Object.keys(roundedMapping).length - 1, 0)}${add_attribute("step", 1, 0)}${add_attribute("value", rangeSliderValue, 0)}> `;
          },
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<Avatar src="${imgPlaceholder}" width="w-32" rounded="${roundedMapping[rangeSliderValue]}" />`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(Avatar, "Avatar").$$render(
              $$result,
              {
                src: imgPlaceholder,
                width: "w-32",
                rounded: roundedMapping[rangeSliderValue]
              },
              {},
              {}
            )}`;
          }
        }
      )} `;
    },
    default: () => {
      return ` `;
    }
  })}`;
});
export {
  Page as default
};

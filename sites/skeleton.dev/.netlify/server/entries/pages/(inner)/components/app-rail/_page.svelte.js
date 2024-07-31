import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { A as AppRail, b as AppRailTile, a as AppRailAnchor } from "../../../../../chunks/AppRailAnchor.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const sveldAppRail = { "props": [{ "name": "background", "kind": "let", "description": "Rail: Provide classes to set the background color.", "type": "string", "value": "'bg-surface-100-800-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "border", "kind": "let", "description": "Rail: Provide classes to set the border color.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "width", "kind": "let", "description": "Rail: Provide classes to set the width.", "type": "string", "value": "'w-20'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "height", "kind": "let", "description": "Rail: Provide classes to set the height.", "type": "string", "value": "'h-full'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "gap", "kind": "let", "description": "Rail: Provide a class to set the grid gap.", "type": "string", "value": "'gap-0'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionLead", "kind": "let", "description": "Rail: Provide arbitrary classes to the lead region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionDefault", "kind": "let", "description": "Rail: Provide arbitrary classes to the default region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionTrail", "kind": "let", "description": "Rail: Provide arbitrary classes to the trail region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "hover", "kind": "let", "description": "Provide classes to set the tile/anchor hover background color.", "type": "string", "value": "'bg-primary-hover-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "active", "kind": "let", "description": "Provide classes to set the tile/anchor active tile background.", "type": "string", "value": "'bg-primary-active-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "spacing", "kind": "let", "description": "Provide classes to set the tile/anchor vertical spacing.", "type": "string", "value": "'space-y-1'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "aspectRatio", "kind": "let", "description": "Provide classes to set the tile/anchor aspect ratio.", "type": "string", "value": "'aspect-square'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "__default__", "default": true, "slot_props": "{}" }, { "name": "lead", "default": false, "slot_props": "", "description": "Provides content at the top of the rail, e.g. a logo." }, { "name": "trail", "default": false, "slot_props": "", "description": "Provides content at the bottom of the rail, e.g. account." }], "events": [], "typedefs": [], "componentComment": " A vertical navigation rail component." };
const sveldAppRailTile = { "props": [{ "name": "group", "kind": "let", "description": "Set the radio group binding value.", "type": "any", "isFunction": false, "isFunctionDeclaration": false, "isRequired": true, "constant": false, "reactive": true }, { "name": "name", "kind": "let", "description": "Set a unique name value for the input.", "type": "string", "isFunction": false, "isFunctionDeclaration": false, "isRequired": true, "constant": false, "reactive": false }, { "name": "value", "kind": "let", "description": "Set the input's value.", "type": "any", "isFunction": false, "isFunctionDeclaration": false, "isRequired": true, "constant": false, "reactive": false }, { "name": "title", "kind": "let", "description": "Provide a hoverable title attribute for the tile.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionLead", "kind": "let", "description": "Provide arbitrary classes to style the lead region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionLabel", "kind": "let", "description": "Provide arbitrary classes to style the label region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "hover", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "active", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "spacing", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "width", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "aspectRatio", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "__default__", "default": true, "slot_props": "{}" }, { "name": "lead", "default": false, "slot_props": "", "description": "Appears above the default label, useful for icons." }], "events": [{ "type": "forwarded", "name": "mouseover", "element": "label" }, { "type": "forwarded", "name": "mouseleave", "element": "label" }, { "type": "forwarded", "name": "focus", "element": "label" }, { "type": "forwarded", "name": "blur", "element": "label" }, { "type": "forwarded", "name": "click", "element": "button" }, { "type": "forwarded", "name": "keyup", "element": "button" }, { "type": "forwarded", "name": "keypress", "element": "button" }, { "type": "forwarded", "name": "change", "element": "input" }], "typedefs": [] };
const sveldAppRailAnchor = { "props": [{ "name": "selected", "kind": "let", "description": "Enables the active state styles when set true.", "type": "boolean", "value": "false", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionLead", "kind": "let", "description": "Provide arbitrary classes to style the lead region.", "type": "string", "value": "'flex justify-center items-center'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionLabel", "kind": "let", "description": "Provide arbitrary classes to style the label region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "hover", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "active", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "spacing", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "aspectRatio", "kind": "let", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "__default__", "default": true, "slot_props": "{}" }, { "name": "lead", "default": false, "slot_props": "", "description": "Appears above the default label, useful for icons." }], "events": [{ "type": "forwarded", "name": "click", "element": "a" }], "typedefs": [] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentTile = 0;
  const settings = {
    feature: DocsFeature.Component,
    name: "App Rail",
    description: "A side navigation rail component",
    imports: ["AppRail", "AppRailTile", "AppRailAnchor"],
    source: "packages/skeleton/src/lib/components/AppRail",
    // aria: 'https://www.w3.org/WAI/ARIA/apg/',
    components: [
      { label: "AppRail", sveld: sveldAppRail },
      {
        label: "AppRailTile",
        sveld: sveldAppRailTile,
        overrideProps: ["hover", "active", "spacing", "width", "aspectRatio"]
      },
      {
        label: "AppRailAnchor",
        sveld: sveldAppRailAnchor,
        overrideProps: ["hover", "active", "spacing", "width", "aspectRatio"]
      }
    ],
    restProps: "AppRailTile | AppRailAnchor"
  };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
      usage: () => {
        return `  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-h29j4u">Tiles</h2> <p data-svelte-h="svelte-rkdtfd">We offer two types of tiles below. Consider mixing and matching these as needed.</p> <h3 class="h3" data-svelte-h="svelte-1skmm6b">AppRailTile</h3> <p data-svelte-h="svelte-1jig1s6">These tiles are intended to maintain state using an embedded <code class="code">checkbox</code> input. Use these within forms or to query
				submenus, similar to the Skeleton documentation sidebar.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `<p data-svelte-h="svelte-1u5ist0">The tile will show an active state when the group and tile <code class="code">value</code> match.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `let currentTile: number = 0;`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	<span>Tile 1</span>
</AppRailTile>
					`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `<div class="bg-surface-100-800-token overflow-hidden w-24">${validate_component(AppRail, "AppRail").$$render($$result, { width: "w-auto" }, {}, {
              lead: () => {
                return `${validate_component(AppRailTile, "AppRailTile").$$render(
                  $$result,
                  {
                    name: "tile-4",
                    value: 4,
                    hover: "hover:bg-primary-hover-token",
                    title: "tile-1",
                    group: currentTile
                  },
                  {
                    group: ($$value) => {
                      currentTile = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    lead: () => {
                      return `<i class="fa-solid fa-image text-2xl"></i>`;
                    },
                    default: () => {
                      return `<span data-svelte-h="svelte-yjcceu">Tile</span>`;
                    }
                  }
                )}`;
              }
            })}</div>`;
          }
        })} <h3 class="h3" data-svelte-h="svelte-1g90jqu">AppRailAnchor</h3> <p data-svelte-h="svelte-1w4rh8g">These tiles operate as <code class="code">anchor</code> tags, supporting <em>href, target, rel</em>, and more. Use these when you
				wish to link to a new page when this tile is clicked.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<AppRailAnchor href="/" target="_blank" title="Account">
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	<span>Anchor</span>
</AppRailAnchor>`
              },
              {},
              {}
            )} <p data-svelte-h="svelte-7ewwi8">Unlike <code class="code">AppRailTile</code> you must explicitly set the active state via the <code class="code">selected</code>
						property.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<AppRailAnchor ... selected={true}>
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	<span>Anchor</span>
</AppRailAnchor>`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `<div class="bg-surface-100-800-token overflow-hidden w-24">${validate_component(AppRail, "AppRail").$$render($$result, { width: "w-auto" }, {}, {
              default: () => {
                return `${validate_component(AppRailAnchor, "AppRailAnchor").$$render(
                  $$result,
                  {
                    href: "/",
                    target: "_blank",
                    title: "Account",
                    hover: "hover:bg-primary-hover-token"
                  },
                  {},
                  {
                    lead: () => {
                      return `<i class="fa-solid fa-image text-2xl"></i>`;
                    },
                    default: () => {
                      return `<span data-svelte-h="svelte-1ucrwtf">Anchor</span>`;
                    }
                  }
                )}`;
              }
            })}</div>`;
          }
        })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1oh99od">Page State</h2>  <p data-svelte-h="svelte-1sfposu">Using the <a class="anchor" href="https://kit.svelte.dev/docs/modules#$app-stores-page" target="_blank" rel="noreferrer">SvelteKit page store</a>, you can dynamically highlight the active link based on it&#39;s path.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `import { page } from '$app/stores';`
          },
          {},
          {}
        )} ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `
<AppRail>
	<AppRailAnchor href="/" selected={$page.url.pathname === '/'}>(icon)</AppRailAnchor>
	<AppRailAnchor href="/about" selected={$page.url.pathname === '/about'}>(icon)</AppRailAnchor>
</AppRail>
`
          },
          {},
          {}
        )}</section> <section class="space-y-4" data-svelte-h="svelte-7pejeo"><h2 class="h2">Horizontal Orientation</h2>  <p>The App Rail is intended for vertical orientations only. For mobile interfaces, considering using a <a class="anchor" href="/components/tabs#navigation">navigation tab component</a>.</p></section> `;
      },
      sandbox: () => {
        return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { regionViewport: "!text-current" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `let currentTile: number = 0;`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<AppRail>
	<svelte:fragment slot="lead">
		<AppRailAnchor href="/" >(icon)</AppRailAnchor>
	</svelte:fragment>
	<!-- --- -->
	<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Tile 1</span>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Tile 2</span>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Tile 3</span>
	</AppRailTile>
	<!-- --- -->
	<svelte:fragment slot="trail">
		<AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>
	</svelte:fragment>
</AppRail>
`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `<div class="card bg-surface-50-900-token rounded-none h-[480px] grid grid-cols-[auto_1fr] w-full">${validate_component(AppRail, "AppRail").$$render($$result, {}, {}, {
              trail: () => {
                return ` ${validate_component(AppRailAnchor, "AppRailAnchor").$$render(
                  $$result,
                  {
                    href: "https://github.com/",
                    target: "_blank",
                    title: "GitHub"
                  },
                  {},
                  {
                    default: () => {
                      return `<i class="fa-brands fa-github text-2xl"></i>`;
                    }
                  }
                )} `;
              },
              lead: () => {
                return ` ${validate_component(AppRailAnchor, "AppRailAnchor").$$render($$result, { href: "#" }, {}, {
                  default: () => {
                    return `<i class="fa-solid fa-bars text-2xl"></i>`;
                  }
                })} `;
              },
              default: () => {
                return `  ${validate_component(AppRailTile, "AppRailTile").$$render(
                  $$result,
                  {
                    name: "tile-1",
                    value: 0,
                    title: "tile-1",
                    group: currentTile
                  },
                  {
                    group: ($$value) => {
                      currentTile = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    lead: () => {
                      return `<i class="fa-solid fa-image text-2xl"></i>`;
                    },
                    default: () => {
                      return `<span data-svelte-h="svelte-ykwgoh">Tile 1</span>`;
                    }
                  }
                )} ${validate_component(AppRailTile, "AppRailTile").$$render(
                  $$result,
                  {
                    name: "tile-2",
                    value: 1,
                    title: "tile-2",
                    group: currentTile
                  },
                  {
                    group: ($$value) => {
                      currentTile = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    lead: () => {
                      return `<i class="fa-solid fa-image text-2xl"></i>`;
                    },
                    default: () => {
                      return `<span data-svelte-h="svelte-wmjtmg">Tile 2</span>`;
                    }
                  }
                )} ${validate_component(AppRailTile, "AppRailTile").$$render(
                  $$result,
                  {
                    name: "tile-3",
                    value: 2,
                    title: "tile-3",
                    group: currentTile
                  },
                  {
                    group: ($$value) => {
                      currentTile = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    lead: () => {
                      return `<i class="fa-solid fa-image text-2xl"></i>`;
                    },
                    default: () => {
                      return `<span data-svelte-h="svelte-1qf0ixn">Tile 3</span>`;
                    }
                  }
                )} `;
              }
            })} <div class="grid place-content-center place-items-center"><span class="badge variant-soft">Tile Value: ${escape(currentTile)}</span></div></div>`;
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

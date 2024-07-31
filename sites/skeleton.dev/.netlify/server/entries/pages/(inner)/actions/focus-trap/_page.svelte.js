import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { S as SlideToggle } from "../../../../../chunks/SlideToggle.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Action,
    name: "Focus Trap",
    description: "Allows you to contain tab focus within a target element on-demand.",
    imports: ["focusTrap"],
    source: "packages/skeleton/src/lib/actions/FocusTrap",
    parameters: [
      [
        '<code class="code">(default)</code>',
        "boolean",
        "-",
        "-",
        `When TRUE, enables focus capture.`
      ]
    ]
  };
  let isFocused = false;
  let isOrderFocused = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      console.log(isFocused);
    }
    {
      console.log(isOrderFocused);
    }
    $$rendered = `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
      usage: () => {
        return ` <p data-svelte-h="svelte-1unvksm">Apply <code class="code">use:focusTrap</code>and then set the action value to either <code class="code">true</code> or
			<code class="code">false</code> to enable or disable focus.</p>  <div class="space-y-4"><h2 class="h2" data-svelte-h="svelte-fq1si3">Focus Order</h2> <p data-svelte-h="svelte-1h3oww8">Set the default focus value using <code class="code">data-focusindex</code> attribute. Elements with this data attribute and the lowest
				value will be focused first. Additional values can be supplied in the case of conditional rendering. Note that this can be used for Skeleton
				Drawer and Modal content, which implement the focus trap by default.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<form use:focusTrap={true}>
	<input data-focusindex="1" type="text" placeholder="Name" value="Bob" />
	<!-- Email will be the first focused -->
	<input data-focusindex="0" type="email" placeholder="Email" />
	<button class="btn variant-filled-primary">Submit</button>
</form>
							`
              },
              {},
              {}
            )} `;
          },
          footer: () => {
            return `<div class="text-center">${validate_component(SlideToggle, "SlideToggle").$$render(
              $$result,
              {
                name: "trap-focus",
                checked: isOrderFocused
              },
              {
                checked: ($$value) => {
                  isOrderFocused = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Enable Focus Trap`;
                }
              }
            )}</div> `;
          },
          preview: () => {
            return `<form class="w-full card p-4 text-token space-y-4" data-svelte-h="svelte-npr7ss"><label class="label"><span>Name</span> <input data-focusindex="1" class="input" type="text" placeholder="Enter name..." value="Bob"></label> <label class="label"><span>Email</span> <input data-focusindex="0" class="input" type="email" placeholder="Enter email address..."></label> <div class="text-right"><button class="btn variant-filled">Submit Form</button></div></form>`;
          }
        })}</div> <section class="space-y-4" data-svelte-h="svelte-23yznj"><h2 class="h2">Navigation</h2> <p>When enabled this action will auto-select the first focusable element or the specified target. Press <kbd class="kbd">Tab</kbd> or
				<kbd class="kbd">Shift + Tab</kbd> to cycle through focusable elements within the target region. When the last item is focused, it will
				loop to the start, and vice versa.</p></section> <section class="space-y-4" data-svelte-h="svelte-qt8yly"><h2 class="h2">Focusing Overlays</h2> <p>Skeleton automatically enables this action for overlays such as <a class="anchor" href="/utilities/modals">modals</a> and
				<a class="anchor" href="/utilities/drawers">drawers</a> to aid accessibility.</p></section> `;
      },
      sandbox: () => {
        return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `let isFocused: boolean = true;`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<form use:focusTrap={isFocused}>
	<input type="text" placeholder="Name" />
	<button class="btn variant-filled-primary">Submit</button>
</form>
`
              },
              {},
              {}
            )} `;
          },
          footer: () => {
            return `<div class="text-center">${validate_component(SlideToggle, "SlideToggle").$$render(
              $$result,
              { name: "trap-focus", checked: isFocused },
              {
                checked: ($$value) => {
                  isFocused = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Enable Focus Trap`;
                }
              }
            )}</div> `;
          },
          preview: () => {
            return `<form class="w-full card p-4 text-token space-y-4" data-svelte-h="svelte-1iofqxu"><label class="label"><span>Name</span> <input class="input" type="text" placeholder="Enter name..."></label> <label class="label"><span>Email</span> <input class="input" type="email" placeholder="Enter email address..."></label> <div class="text-right"><button class="btn variant-filled">Submit Form</button></div></form>`;
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

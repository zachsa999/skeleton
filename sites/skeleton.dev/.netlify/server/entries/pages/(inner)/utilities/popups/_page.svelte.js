import { c as create_ssr_component, v as validate_component, h as each, e as escape, d as add_attribute } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { A as Avatar } from "../../../../../chunks/Avatar.js";
import { L as ListBox, a as ListBoxItem } from "../../../../../chunks/ListBoxItem.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Utility,
    name: "Popups",
    description: 'Create floating popups, menus, and tooltips using the power of <a class="anchor" href="https://floating-ui.com/" target="_blank" rel="noreferrer">Floating UI</a>.',
    imports: ["popup"],
    types: ["PopupSettings"],
    stylesheetIncludes: ["all", "elements"],
    stylesheets: ["elements/popups"],
    source: "packages/skeleton/src/lib/utilities/Popup",
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/menu/",
    classes: [
      [
        '<code class="code">[data-popup]</code>',
        "",
        `Follows Floating UI's best practices. Sets hidden by default.`
      ],
      [
        '<code class="code">[data-popup] .arrow</code>',
        "",
        "Provides base styles to the arrow element."
      ]
    ],
    parameters: [
      [
        '<code class="code">event</code>',
        "string",
        "-",
        "click | hover | focus-blur | focus-click",
        "Provide the popup event type."
      ],
      [
        '<code class="code">target</code>',
        "string",
        "-",
        "-",
        'Match the popup data value of <code class="code">[data-popup]</code>'
      ],
      [
        '<code class="code">placement</code>',
        "string",
        "-",
        "bottom",
        "Set the placement position."
      ],
      [
        '<code class="code">closeQuery</code>',
        "string",
        "a[href], button",
        "-",
        "Query list of elements that will close the popup."
      ],
      [
        '<code class="code">middleware</code>',
        "object",
        "-",
        "-",
        "Provide Floating UI middleware settings."
      ],
      [
        '<code class="code">state</code>',
        "function",
        "-",
        "-",
        "Provide an optional callback function to monitor open/close state."
      ]
    ],
    keyboard: [
      [
        '<kbd class="kbd">Enter</kbd>',
        "When trigger is focused, toggles the popup open/close."
      ],
      [
        '<kbd class="kbd">Tab</kbd> or <kbd class="kbd">↓</kbd>',
        "When trigger focused, places focus on first focusable popup child."
      ],
      ['<kbd class="kbd">Esc</kbd>', "Closes all open popups at once."]
    ],
    dependencies: [
      {
        label: "Floating UI",
        url: "https://floating-ui.com/"
      }
    ]
  };
  let currentPosition = "bottom";
  let comboboxValue;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
      usage: () => {
        return `  <section class="space-y-4"><div class="flex items-center space-x-2" data-svelte-h="svelte-ir6oxe"><h2 class="h2">Installation</h2> <span class="badge variant-filled-warning">Required</span></div> <p data-svelte-h="svelte-12u4ttc">To begin, install <a class="anchor" href="https://floating-ui.com/" target="_blank" rel="noreferrer">Floating UI</a> from NPM. This
				is <u>required</u> for popups to function.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "shell",
            code: `npm install @floating-ui/dom`
          },
          {},
          {}
        )} <p data-svelte-h="svelte-1guqjjg">Import Floating UI into your application&#39;s root layout <code class="code">/src/routes/+layout.svelte</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';`
          },
          {},
          {}
        )} <p data-svelte-h="svelte-1u8wegx">Import <code class="code">storePopup</code> in your root layout, then pass an object containing the required Floating UI modules shown
				below.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `
import { storePopup } from '@skeletonlabs/skeleton';
storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
			`
          },
          {},
          {}
        )}</section> <hr>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1gclz10">Events</h2> <p data-svelte-h="svelte-12na77v">You can control how the popup is opened and closed by using the <code class="code">event</code> setting.</p> <h3 class="h3" data-svelte-h="svelte-h6fp18">Click</h3> <p data-svelte-h="svelte-mrlh7h">Tap the trigger element to open the popup, then outside to close it. Supports the <code class="code">closeQuery</code> feature.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            background: "neutral",
            regionPreview: "text-token"
          },
          {},
          {
            source: () => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `
const popupClick: PopupSettings = {
	event: 'click',
	target: 'popupClick',
	placement: 'top'
};
					`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `<button class="btn variant-filled" use:popup={popupClick}>Click</button>`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `
<div class="card p-4 variant-filled-primary" data-popup="popupClick">
	<p>Click Content</p>
	<div class="arrow variant-filled-primary" />
</div>
					`
                },
                {},
                {}
              )} `;
            },
            preview: () => {
              return `<button class="btn variant-filled" data-svelte-h="svelte-qxlij9">Click</button> <div class="card p-4 variant-filled-primary" data-popup="popupClick" data-svelte-h="svelte-yoqlme"><p>Click Content</p> <div class="arrow variant-filled-primary"></div></div>`;
            }
          }
        )}  <h3 class="h3" data-svelte-h="svelte-10zygva">Hover</h3> <p data-svelte-h="svelte-59u5vm">The popup shows only while hovering the trigger element. Great for creating tooltips.</p> <blockquote class="blockquote" data-svelte-h="svelte-1dxbb1d">Be sure to disable pointer events for children (ex: icons) within your trigger element. These may cause the popup to flash or close
				early. We recommend applying <code class="code">[&amp;&gt;*]:pointer-events-none</code> to your trigger element to resolve this.</blockquote> ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            background: "neutral",
            regionPreview: "text-token"
          },
          {},
          {
            source: () => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `
const popupHover: PopupSettings = {
	event: 'hover',
	target: 'popupHover',
	placement: 'top'
};
					`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `
<button class="btn variant-filled [&>*]:pointer-events-none" use:popup={popupHover}>
	<span>(icon)</span>
	<span>Hover</span>
</button>
						`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `
<div class="card p-4 variant-filled-secondary" data-popup="popupHover">
	<p>Hover Content</p>
	<div class="arrow variant-filled-secondary" />
</div>
					`
                },
                {},
                {}
              )} `;
            },
            preview: () => {
              return `<button class="btn variant-filled [&>*]:pointer-events-none" data-svelte-h="svelte-vgetjx"><i class="fa-solid fa-skull"></i> <span>Hover</span></button> <div class="card p-4 variant-filled-secondary" data-popup="popupHover" data-svelte-h="svelte-xkycc2"><p>Hover Content</p> <div class="arrow variant-filled-secondary"></div></div>`;
            }
          }
        )}  <h3 class="h3" data-svelte-h="svelte-1byub4k">Focus-Blur</h3> <p data-svelte-h="svelte-1h8t46f">Shows the popup only while the trigger element has focus. Useful for showing tooltips while focusing an input.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            background: "neutral",
            regionPreview: "text-token"
          },
          {},
          {
            source: () => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `
const popupFocusBlur: PopupSettings = {
	event: 'focus-blur',
	target: 'popupFocusBlur',
	placement: 'bottom'
};
					`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `<input type="text" class="input" placeholder="Focus-Blur" use:popup={popupFocusBlur} />`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `
<div class="card p-4 variant-filled" data-popup="popupFocusBlur">
	<p>Shows on focus, hides on blur.</p>
	<div class="arrow variant-filled" />
</div>
					`
                },
                {},
                {}
              )} `;
            },
            preview: () => {
              return `<div class="w-full max-w-sm mx-auto"><input type="text" class="input" placeholder="Focus-Blur"> <div class="card p-4 variant-filled" data-popup="popupFocusBlur" data-svelte-h="svelte-4274sr"><p>Shows on focus, hides on blur.</p> <div class="arrow variant-filled"></div></div></div>`;
            }
          }
        )}  <h3 class="h3" data-svelte-h="svelte-la5h9l">Focus-Click</h3> <p data-svelte-h="svelte-1sj3c5o">Show the popup on focus, closed when clicking outside. Useful for autocomplete popups. Supports the <code class="code">closeQuery</code> feature.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            background: "neutral",
            regionPreview: "text-token"
          },
          {},
          {
            source: () => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `
const popupFocusClick: PopupSettings = {
	event: 'focus-click',
	target: 'popupFocusClick',
	placement: 'bottom'
};
					`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `<input type="text" class="input" placeholder="Focus-Click" use:popup={popupFocusClick} />`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `
<div class="card p-4 variant-filled" data-popup="popupFocusClick">
	<p>Shows on focus, hides on click.</p>
	<div class="arrow variant-filled" />
</div>
					`
                },
                {},
                {}
              )} `;
            },
            preview: () => {
              return `<div class="w-full max-w-sm mx-auto"><input type="text" class="input" placeholder="Focus-Click"> <div class="card p-4 variant-filled" data-popup="popupFocusClick" data-svelte-h="svelte-1494oef"><p>Shows on focus, hides on an outside click.</p> <div class="arrow variant-filled"></div></div></div>`;
            }
          }
        )}</section> <hr>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1bu9w60">Settings</h2> <p data-svelte-h="svelte-1ioo4bb">In addition to <code class="code">event</code>, let&#39;s explore what other <code class="code">popupSettings</code> are available.</p> <h3 class="h3" data-svelte-h="svelte-1a4aldn">Placement</h3> <p data-svelte-h="svelte-1lxzaau">Defines which side of the trigger the popup will appear. This will automatically flip when near the edge of the screen.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            background: "neutral",
            regionPreview: "text-token py-10"
          },
          {},
          {
            source: () => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `
const popupPlacement: PopupSettings = {
	// ...
	placement: '${currentPosition}'
};
					`
                },
                {},
                {}
              )} `;
            },
            footer: () => {
              return `<div class="flex justify-center gap-4"><select class="select w-auto">${each(["top", "bottom", "left", "right"], (p) => {
                return `<option${add_attribute("value", p, 0)}>${escape(p)}</option>`;
              })}</select></div> `;
            },
            preview: () => {
              return `<button class="btn variant-filled" data-svelte-h="svelte-13rio9l">Show Popup</button> <div class="card p-4 variant-filled" data-popup="popupPlacement"><p>Shown on the ${escape(currentPosition)}</p> <div class="arrow variant-filled"></div></div>`;
            }
          }
        )} <h3 class="h3" data-svelte-h="svelte-1ymtaqs">Close Query</h3> <p data-svelte-h="svelte-7zs278">Use the <code class="code">closeQuery</code> setting to indicate what child elements within the popup can trigger the popup to
				close. By default this uses
				<code class="code">&#39;a[href], button&#39;</code> to denote anchors and buttons. You may provide a custom query or set
				<code class="code">&#39;&#39;</code> to disable this feature.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            background: "neutral",
            regionPreview: "text-token"
          },
          {},
          {
            source: () => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `
<div class="card p-4 max-w-sm" data-popup="popupCloseQuery">
	<div class="grid grid-cols-1 gap-2">
		<button id="wont-close" class="btn variant-filled-error">#wont-close</button>
		<button id="will-close" class="btn variant-filled-success">#will-close</button>
	</div>
	<div class="arrow bg-surface-100-800-token" />
</div>
					`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `
const popupCloseQuery: PopupSettings = {
	// ...
	closeQuery: '#will-close'
};
					`
                },
                {},
                {}
              )} `;
            },
            preview: () => {
              return `<button class="btn variant-filled" data-svelte-h="svelte-1dg8ola">Show Popup</button> <div class="card p-4" data-popup="popupCloseQuery" data-svelte-h="svelte-1edwb0a"><div class="grid grid-cols-1 gap-2"><button id="wont-close" class="btn variant-filled-error">#wont-close</button> <button id="will-close" class="btn variant-filled-success">#will-close</button></div> <div class="arrow bg-surface-100-800-token"></div></div>`;
            }
          }
        )} <h3 class="h3" data-svelte-h="svelte-10sox06">State Callback</h3> <p data-svelte-h="svelte-b0mont">Provide a callback function to be notified when a particular popup is opened or closed.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            background: "neutral",
            regionPreview: "text-token"
          },
          {},
          {
            source: () => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `
const popupState: PopupSettings = {
	// ...
	state: (e: Record<string, boolean>) => console.log(e)
};
					`
                },
                {},
                {}
              )} `;
            },
            preview: () => {
              return `<button class="btn variant-filled" data-svelte-h="svelte-1txq5ib">Show Popup</button> <div class="card p-4" data-popup="popupState" data-svelte-h="svelte-360i06"><p>Check your console log to view the value.</p> <div class="arrow bg-surface-100-800-token"></div></div>`;
            }
          }
        )} <h3 class="h3" data-svelte-h="svelte-81naeq">Middleware</h3>  <p data-svelte-h="svelte-1fzvpci">Use <code class="code">middleware</code> to configure <a href="https://floating-ui.com/docs/middleware" target="_blank" rel="noreferrer" class="anchor">Floating UI middleware</a> such as shift, offset, and more.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            background: "neutral",
            regionPreview: "text-token"
          },
          {},
          {
            source: () => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `
	let popupMiddleware: PopupSettings = {
	// ...
	middleware: {
		// https://floating-ui.com/docs/offset
		offset: 24, // or { ... }

		// https://floating-ui.com/docs/shift
		// shift: { ... },

		// https://floating-ui.com/docs/flip
		// flip: { ... },

		// https://floating-ui.com/docs/arrow
		// arrow: { ... },

		// Optional Middleware ---

		// https://floating-ui.com/docs/size
		// size: { ... },

		// https://floating-ui.com/docs/autoPlacement
		// autoPlacement: { ... },

		// https://floating-ui.com/docs/hide
		// hide: { ... },

		// https://floating-ui.com/docs/inline
		// inline: { ... }
	}
	};
					`
                },
                {},
                {}
              )} `;
            },
            preview: () => {
              return `<button class="btn variant-filled" data-svelte-h="svelte-f3rhby">Show Popup</button> <div class="card p-4" data-popup="popupMiddleware" data-svelte-h="svelte-1x87y70"><p>This popup has an offset of 24 px.</p> <div class="arrow bg-surface-100-800-token"></div></div>`;
            }
          }
        )} <p data-svelte-h="svelte-ip24xo">This includes support for the optional Floating UI middleware shown below. To use these, import the Floating UI modules and pass
				them to the <code class="code">storePopup</code> in your root layout as shown below. Note that these may alter the default behavior
				of your popups. <u>We recommend these only for advanced users</u>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `import { /* ... */ size, autoPlacement, hide, inline } from '@floating-ui/dom';`
          },
          {},
          {}
        )} ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `storePopup.set({ /* ... */ size, autoPlacement, hide, inline });`
          },
          {},
          {}
        )}</section> <hr>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-x28ztd">Handling Loops</h2> <p data-svelte-h="svelte-efcz26">Popups maintain a 1-1 relationship between the trigger and the popup element. This means when using <code class="code">#each</code> block
				to iterate and create a set of popups, you must provide a unique popup element and popup settings.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            background: "neutral",
            regionPreview: "text-token"
          },
          {},
          {
            source: () => {
              return `<p data-svelte-h="svelte-5a395s">Inline popup settings for each <code class="code">use:popup</code> directive, and take note of how the index
						<code class="code">i</code>
						is appended to both <code class="code">target</code> and
						<code class="code">data-popup</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `
{#each ['A', 'B', 'C'] as label, i}
	<!-- Trigger -->
	<button use:popup={{ event: 'click', target: 'loopExample-' + i, placement: 'top' }}>
		Show {label}
	</button>
	<!-- Popup -->
	<div data-popup="loopExample-{i}">Popup {label}</div>
{/each}
					`
                },
                {},
                {}
              )} `;
            },
            preview: () => {
              return `<div class="grid grid-cols-1 gap-2">${each(["A", "B", "C"], (label, i) => {
                return ` <button class="btn variant-filled">Show ${escape(label)}</button>  <div class="card p-4 shadow-xl" data-popup="${"loopExample-" + escape(i, true)}">Popup ${escape(label)}</div>`;
              })}</div>`;
            }
          }
        )}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1xfwaya">Combobox</h2> <p data-svelte-h="svelte-rpsbrb">The goal of Skeleton is to combine primitive elements and components in order to generate more complex interfaces. For example, by
				combining a Button, Popup, and ListBox you can create a highly customizable combobox.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
          $$result,
          {
            background: "neutral",
            regionPreview: "text-token"
          },
          {},
          {
            source: () => {
              return `${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "ts",
                  code: `
let comboboxValue: string;

const popupCombobox: PopupSettings = {
	event: 'click',
	target: 'popupCombobox',
	placement: 'bottom',
	closeQuery: '.listbox-item'
};
				`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `
<button class="btn variant-filled w-48 justify-between" use:popup={popupCombobox}>
	<span class="capitalize">{comboboxValue ?? 'Trigger'}</span>
	<span>↓</span>
</button>
					`
                },
                {},
                {}
              )} ${validate_component(CodeBlock, "CodeBlock").$$render(
                $$result,
                {
                  language: "html",
                  code: `
<div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">
	<ListBox rounded="rounded-none">
		<ListBoxItem bind:group={comboboxValue} name="medium" value="books">Books</ListBoxItem>
		<ListBoxItem bind:group={comboboxValue} name="medium" value="movies">Movies</ListBoxItem>
		<ListBoxItem bind:group={comboboxValue} name="medium" value="television">TV</ListBoxItem>
	</ListBox>
	<div class="arrow bg-surface-100-800-token" />
</div>
					`
                },
                {},
                {}
              )} `;
            },
            preview: () => {
              return `<button class="btn variant-filled w-48 justify-between"><span class="capitalize">${escape(comboboxValue ?? "Trigger")}</span> <i class="fa-solid fa-caret-down opacity-50"></i></button> <div class="card w-48 shadow-xl py-2 overflow-hidden" data-popup="popupCombobox">${validate_component(ListBox, "ListBox").$$render($$result, { rounded: "rounded-none" }, {}, {
                default: () => {
                  return `${validate_component(ListBoxItem, "ListBoxItem").$$render(
                    $$result,
                    {
                      name: "medium",
                      value: "books",
                      group: comboboxValue
                    },
                    {
                      group: ($$value) => {
                        comboboxValue = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Books`;
                      }
                    }
                  )} ${validate_component(ListBoxItem, "ListBoxItem").$$render(
                    $$result,
                    {
                      name: "medium",
                      value: "movies",
                      group: comboboxValue
                    },
                    {
                      group: ($$value) => {
                        comboboxValue = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Movies`;
                      }
                    }
                  )} ${validate_component(ListBoxItem, "ListBoxItem").$$render(
                    $$result,
                    {
                      name: "medium",
                      value: "television",
                      group: comboboxValue
                    },
                    {
                      group: ($$value) => {
                        comboboxValue = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `TV`;
                      }
                    }
                  )}`;
                }
              })} <div class="arrow bg-surface-100-800-token"></div></div>`;
            }
          }
        )}</section> <hr> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-bpfeuo">Avoiding Style Conflicts</h2> <p data-svelte-h="svelte-1fs3oag">Please use caution when adjusting the default styling for the <code class="code">[data-popup]</code> element. Specifically in regards
				to the inherent display, position, and transition properties. These are critical for ensuring the popup loads and displays as expected.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "css",
            code: `
[data-popup] {
	/* Display */
	display: none;
	/* Position */
	position: absolute;
	top: 0;
	left: 0;
	/* Transitions */
	transition-property: opacity;
	transition-timing-function: cubic-bezier(.4,0,.2,1);
	transition-duration: .15s
}
		`
          },
          {},
          {}
        )} <p data-svelte-h="svelte-1wj4ndh">Use a child element to introduce new classes and avoid overwriting default values.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `
<!-- Works ✅ -->
<div data-popup="popupStyled">
	<div class="flex">...</div>
</div>
			`
          },
          {},
          {}
        )} ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `
<!-- Breaks ❌ -->
<div class="flex" data-popup="popupStyled">
	...
</div>
			`
          },
          {},
          {}
        )}</section>  <section class="space-y-4" data-svelte-h="svelte-ambxr2"><h2 class="h2">Z-Index Stacking</h2>  <p>Please note that neither Skeleton nor Floating-UI <a class="anchor" href="https://floating-ui.com/docs/misc#z-index-stacking">define a default z-index</a> for popups.</p></section>  <section class="space-y-4" data-svelte-h="svelte-9g0pwc"><h2 class="h2">Accessibility</h2>  <p>Use <code class="code">click</code> or <code class="code">focus</code> events when targeting mobile. Touch screens do not fully support <code class="code">hover</code>.</p></section> `;
      },
      sandbox: () => {
        return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { regionPreview: "text-token" }, {}, {
          source: () => {
            return `<p data-svelte-h="svelte-c0pi8o">Use <code class="code">popupSettings</code> to define your popup&#39;s unique settings.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
const popupFeatured: PopupSettings = {
	// Represents the type of event that opens/closed the popup
	event: 'click',
	// Matches the data-popup value on your popup element
	target: 'popupFeatured',
	// Defines which side of your trigger the popup will appear
	placement: 'bottom',
};
					`
              },
              {},
              {}
            )} <p data-svelte-h="svelte-152nfrj">Append the <code class="code">use:popup</code> action on your trigger element, such as a button or input, then pass the
					<code class="code">popupSettings</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<button class="btn variant-filled" use:popup={popupFeatured}>Show Popup</button>
				`
              },
              {},
              {}
            )} <p data-svelte-h="svelte-1xo9gmq">Finally, create your popup using any type of element. Then append a <code class="code">data-popup</code> attribute that contains a
					unique identifier. This should match the value provided to your <code class="code">target</code> in the
					<code class="code">popupSettings</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<div class="card p-4 w-72 shadow-xl" data-popup="popupFeatured">
	<div><p>Demo Content</p></div>
	<div class="arrow bg-surface-100-800-token" />
</div>
					`
              },
              {},
              {}
            )} <p data-svelte-h="svelte-mm4z0b">Note the <code class="code">.arrow</code> element is optional, but will create and position an arrow automatically when available.
					Just make sure the background color matches your popup element&#39;s background color!</p> `;
          },
          preview: () => {
            return `<button class="btn variant-filled" data-svelte-h="svelte-11191ec">Show Popup</button>  <div class="card p-4 w-72 shadow-xl" data-popup="popupFeatured"><div class="space-y-4">${validate_component(Avatar, "Avatar").$$render(
              $$result,
              {
                src: "https://pbs.twimg.com/profile_images/1587479781544759297/TINbbJLC_400x400.png",
                width: "w-16"
              },
              {},
              {}
            )} <div data-svelte-h="svelte-1i7ydz2"><p class="font-bold">Skeleton</p> <p class="opacity-50">@SkeletonUI</p></div> <p data-svelte-h="svelte-3jkqif">Skeleton is a fully featured UI component library using the power of Svelte + Tailwind.</p> <div class="flex gap-4" data-svelte-h="svelte-1jgu4kh"><small><strong>100</strong> <span class="opacity-50">Following</span></small> <small><strong>1000</strong> <span class="opacity-50">Followers</span></small></div> <a class="btn variant-soft w-full" href="https://twitter.com/SkeletonUI" target="_blank" rel="noreferrer" data-svelte-h="svelte-18i0k8n">View on Twitter</a></div> <div class="arrow bg-surface-100-800-token"></div></div> `;
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

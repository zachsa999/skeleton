import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { faker } from "@faker-js/faker";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Element,
    name: "Core",
    description: "Provides a variety of globally scoped styles.",
    stylesheetIncludes: ["skeleton", "core"],
    source: "packages/plugin/src/styles/base/core.css"
  };
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return `  <div class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1jhzk37">Body Background</h2> <p data-svelte-h="svelte-1adlmsi">Your app&#39;s background is automatically set via a <a class="anchor" href="/docs/tokens">design token</a> class. Adjust your theme&#39;s color
				scheme to customize. This affects both light and dark mode.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "css",
          code: `body { @apply bg-surface-50-900-token; }`
        },
        {},
        {}
      )}</div>  <div class="space-y-4"><h2 class="h2" data-svelte-h="svelte-2ueooh">Selection</h2> <p data-svelte-h="svelte-kvhe6e">Selection color is also set via a token class. Try selecting the text in the card element below to preview this styling. Notice how
				selection color changes depending on the background.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "css",
              code: `::selection { @apply bg-primary-500/30; }`
            },
            {},
            {}
          )} `;
        },
        footer: () => {
          return `<p class="w-full text-center" data-svelte-h="svelte-116wz6x">Try selecting the text above.</p> `;
        },
        preview: () => {
          return `<p data-svelte-h="svelte-70c84d">The quick brown fox jumps over the lazy dog.</p>`;
        }
      })}</div>  <div class="space-y-4"><h2 class="h2" data-svelte-h="svelte-a0trp">Mobile Focus</h2> <p data-svelte-h="svelte-tuk8m8">Interactive elements on mobile will briefly show a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:focus" target="_blank" rel="noreferrer"><code class="code">focus</code></a> style when touched. Skeleton adjusts the coloring.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "css",
              code: `html { -webkit-tap-highlight-color: rgba(128, 128, 128, 0.5); }`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<button class="btn variant-soft" data-svelte-h="svelte-1n2k1ma">Tap Me</button>`;
        }
      })}</div>  <div class="space-y-4"><h2 class="h2" data-svelte-h="svelte-ww1squ">Scrollbars</h2> <p data-svelte-h="svelte-i7zvap">Skeleton automatically provides custom scrollbar styles in supported browsers. Use <code class="code">.hide-scrollbar</code> to disable
				scrollbars.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<div class="card p-4 max-h-[200px] overflow-auto space-y-4">
	<h3 class="h3" data-toc-ignore>Test Scrolling Here</h3>
	<p>
		Lorem ipsum, dolor sit...
	</p>
</div>
			`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="card p-4 max-h-[200px] overflow-auto space-y-4"><h3 class="h3" data-toc-ignore data-svelte-h="svelte-1eff6av">Test Scrolling Here</h3> <p>${escape(faker.lorem.paragraph(50))}</p></div>`;
        }
      })}  <div class="space-y-4"><h2 class="h2" data-svelte-h="svelte-idyysd">Dividers</h2> <p data-svelte-h="svelte-32r20u">Native <code class="code">hr</code> horizontal rule elements respect your theme settings automatically. Use border size to adjust the
					width.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<hr />
<hr class="!border-t-2" />
<hr class="!border-t-4" />
<hr class="!border-t-8" />
					`
            },
            {},
            {}
          )} `;
        },
        footer: () => {
          return ` <div class="text-center" data-svelte-h="svelte-19xh9as">Use Tailwind&#39;s <a class="anchor" href="https://tailwindcss.com/docs/border-width" target="_blank" rel="noreferrer">Border Width Top</a> and <a class="anchor" href="https://tailwindcss.com/docs/divide-style" target="_blank" rel="noreferrer">Border Styles</a> to customize each divider.</div> `;
        },
        preview: () => {
          return `<div class="w-full space-y-4" data-svelte-h="svelte-jz8c05"><hr> <hr class="!border-t-2"> <hr class="!border-t-4"> <hr class="!border-t-8"></div>`;
        }
      })} <h3 class="h3" data-svelte-h="svelte-15sxpej">Divider Styling</h3> <p data-svelte-h="svelte-1qxis9j">Dividers may be dashed, dotted, or doubled.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<hr class="!border-dashed" />
<hr class="!border-dotted" />
<hr class="!border-t-8 !border-double" />
					`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="w-full space-y-4" data-svelte-h="svelte-1ucfsk1"><hr class="!border-dashed"> <hr class="!border-dotted"> <hr class="!border-t-8 !border-double"></div>`;
        }
      })} <h3 class="h3" data-svelte-h="svelte-i9d9r4">Vertical Dividers</h3> <p data-svelte-h="svelte-bmnxw5">Divide columns with the <code class="code">.divider-vertical</code> class. You can apply it with a <code class="code">span</code>
					tag. Adjust the
					<a class="anchor" href="https://tailwindcss.com/docs/height" target="_blank" rel="noreferrer">height</a> as desired.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<span class="divider-vertical h-20" />`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="w-full grid grid-cols-3 gap-4 place-items-center" data-svelte-h="svelte-9213ua"><p>Left</p> <span class="divider-vertical h-20"></span> <p>Right</p></div>`;
        }
      })}</div></div>`;
    }
  })}`;
});
export {
  Page as default
};

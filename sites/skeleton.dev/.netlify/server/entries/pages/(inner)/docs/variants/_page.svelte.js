import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Element,
    name: "Variants",
    description: "Canned styles available to easily customize elements, components, and more.",
    source: "packages/plugin/src/styles/components/variants.css"
  };
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings, tabs: false }, {}, {
    usage: () => {
      return ` <hr> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-120frik">Usage</h2> <p data-svelte-h="svelte-17bvncn">Implement using <code class="code">.variant-[style]-[color]</code>. Automatically applies an accessible text or SVG fill color.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<div class="variant-filled-primary">primary</div>`
        },
        {},
        {}
      )}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-h2bn93">Filled</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-filled-primary">primary</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-filled-secondary">secondary</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-filled-tertiary">tertiary</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-filled-success">success</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-filled-warning">warning</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-filled-error">error</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-filled-surface">surface</div>`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="w-full grid grid-cols-3 gap-4 text-center text-xs font-bold" data-svelte-h="svelte-6xblyg"><div class="card variant-filled-primary p-4 capitalize">primary</div> <div class="card variant-filled-secondary p-4 capitalize">secondary</div> <div class="card variant-filled-tertiary p-4 capitalize">tertiary</div> <div class="card variant-filled-success p-4 capitalize">success</div> <div class="card variant-filled-warning p-4 capitalize">warning</div> <div class="card variant-filled-error p-4 capitalize">error</div> <div class="col-span-3 card variant-filled-surface p-4 capitalize">surface</div></div>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-ofoe2k">Ghost</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-ghost-primary">primary</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-ghost-secondary">secondary</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-ghost-tertiary">tertiary</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-ghost-success">success</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-ghost-warning">warning</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-ghost-error">error</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-ghost-surface">surface</div>`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="w-full grid grid-cols-3 gap-4 text-center text-xs font-bold" data-svelte-h="svelte-ge8ujf"><div class="card variant-ghost-primary p-4 capitalize">primary</div> <div class="card variant-ghost-secondary p-4 capitalize">secondary</div> <div class="card variant-ghost-tertiary p-4 capitalize">tertiary</div> <div class="card variant-ghost-success p-4 capitalize">success</div> <div class="card variant-ghost-warning p-4 capitalize">warning</div> <div class="card variant-ghost-error p-4 capitalize">error</div> <div class="col-span-3 card variant-ghost-surface p-4 capitalize">surface</div></div>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-8st6vz">Soft</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-soft-primary">primary</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-soft-secondary">secondary</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-soft-tertiary">tertiary</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-soft-success">success</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-soft-warning">warning</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-soft-error">error</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-soft-surface">surface</div>`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="w-full grid grid-cols-3 gap-4 text-center text-xs font-bold" data-svelte-h="svelte-ke0sao"><div class="card variant-soft-primary p-4 capitalize">primary</div> <div class="card variant-soft-secondary p-4 capitalize">secondary</div> <div class="card variant-soft-tertiary p-4 capitalize">tertiary</div> <div class="card variant-soft-success p-4 capitalize">success</div> <div class="card variant-soft-warning p-4 capitalize">warning</div> <div class="card variant-soft-error p-4 capitalize">error</div> <div class="col-span-3 card variant-soft-surface p-4 capitalize">surface</div></div>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-q6vhpm">Ringed</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-ringed-primary">primary</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-ringed-secondary">secondary</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-ringed-tertiary">tertiary</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-ringed-success">success</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-ringed-warning">warning</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-ringed-error">error</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="variant-ringed-surface">surface</div>`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="w-full grid grid-cols-3 gap-4 text-center text-xs font-bold" data-svelte-h="svelte-15476wr"><div class="card variant-ringed-primary p-4 capitalize">primary</div> <div class="card variant-ringed-secondary p-4 capitalize">secondary</div> <div class="card variant-ringed-tertiary p-4 capitalize">tertiary</div> <div class="card variant-ringed-success p-4 capitalize">success</div> <div class="card variant-ringed-warning p-4 capitalize">warning</div> <div class="card variant-ringed-error p-4 capitalize">error</div> <div class="col-span-3 card variant-ringed-surface p-4 capitalize">surface</div></div>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1vmzax3">Glass</h2> <p data-svelte-h="svelte-jgudnz">Adds a frosted glass style effect. Perfect for overlapping busy or animated backgrounds.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
        $$result,
        {
          background: "neutral",
          regionViewport: "!p-0"
        },
        {},
        {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<div class="variant-glass-primary">primary</div>`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<div class="variant-glass-secondary">secondary</div>`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<div class="variant-glass-tertiary">tertiary</div>`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<div class="variant-glass-success">success</div>`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<div class="variant-glass-warning">warning</div>`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<div class="variant-glass-error">error</div>`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<div class="variant-glass-surface">surface</div>`
              },
              {},
              {}
            )} `;
          },
          footer: () => {
            return `<div class="text-center" data-svelte-h="svelte-1yz5b1v"><a class="btn btn-sm variant-soft" href="https://www.markferrari.com/" target="_blank" rel="noreferrer">Image Source</a></div> `;
          },
          preview: () => {
            return `<div class="w-full grid grid-cols-3 gap-4 text-center text-xs font-bold p-4 md:p-10 text-white" style="background: url('https://i.imgur.com/DdrZVb7.gif') center center no-repeat; background-size: cover;" data-svelte-h="svelte-6py5hd"><div class="card variant-glass-primary p-4 capitalize">primary</div> <div class="card variant-glass-secondary p-4 capitalize">secondary</div> <div class="card variant-glass-tertiary p-4 capitalize">tertiary</div> <div class="card variant-glass-success p-4 capitalize">success</div> <div class="card variant-glass-warning p-4 capitalize">warning</div> <div class="card variant-glass-error p-4 capitalize">error</div> <div class="col-span-3 card variant-glass-surface p-4 capitalize">surface</div></div>`;
          }
        }
      )}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1dx0fkm">Gradients</h2> <p data-svelte-h="svelte-j1raro">Provides two-toned gradient combinations. Requires a direction, such as <code class="code">bg-gradient-to-br</code> (bottom-right).</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return ` <p data-svelte-h="svelte-z2m3fv">Core Trio</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="bg-gradient-to-br variant-gradient-primary-secondary">Skeleton</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="bg-gradient-to-br variant-gradient-secondary-tertiary">Skeleton</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="bg-gradient-to-br variant-gradient-tertiary-primary">Skeleton</div>`
            },
            {},
            {}
          )} <p data-svelte-h="svelte-1qa8chw">Core Trio (reversed)</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="bg-gradient-to-br variant-gradient-secondary-primary">Skeleton</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="bg-gradient-to-br variant-gradient-tertiary-secondary">Skeleton</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="bg-gradient-to-br variant-gradient-primary-tertiary">Skeleton</div>`
            },
            {},
            {}
          )} <p data-svelte-h="svelte-1vsos3b">State Trio</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="bg-gradient-to-br variant-gradient-success-warning">Skeleton</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="bg-gradient-to-br variant-gradient-warning-error">Skeleton</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="bg-gradient-to-br variant-gradient-error-success">Skeleton</div>`
            },
            {},
            {}
          )} <p data-svelte-h="svelte-n7gari">State Trio (reversed)</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="bg-gradient-to-br variant-gradient-warning-success">Skeleton</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="bg-gradient-to-br variant-gradient-error-warning">Skeleton</div>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<div class="bg-gradient-to-br variant-gradient-success-error">Skeleton</div>`
            },
            {},
            {}
          )} `;
        },
        footer: () => {
          return `<div class="text-center" data-svelte-h="svelte-1kupvzr">For more options see the <a class="btn btn-sm variant-soft" href="https://tailwindcss.com/docs/gradient-color-stops" target="_blank" rel="noreferrer">Tailwind Docs →</a></div> `;
        },
        preview: () => {
          return `<div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-4" data-svelte-h="svelte-peaa9i"> <div class="card bg-gradient-to-br variant-gradient-primary-secondary px-4 py-10 text-center"><span class="badge variant-filled">Primary-Secondary</span></div> <div class="card bg-gradient-to-br variant-gradient-secondary-tertiary px-4 py-10 text-center"><span class="badge variant-filled">Secondary-Tertiary</span></div> <div class="card bg-gradient-to-br variant-gradient-tertiary-primary px-4 py-10 text-center"><span class="badge variant-filled">Tertiary-Primary</span></div>  <div class="card bg-gradient-to-br variant-gradient-secondary-primary px-4 py-10 text-center"><span class="badge variant-filled">Secondary-Primary</span></div> <div class="card bg-gradient-to-br variant-gradient-tertiary-secondary px-4 py-10 text-center"><span class="badge variant-filled">Tertiary-Secondary</span></div> <div class="card bg-gradient-to-br variant-gradient-primary-tertiary px-4 py-10 text-center"><span class="badge variant-filled">Primary-Tertiary</span></div>  <div class="card bg-gradient-to-br variant-gradient-success-warning px-4 py-10 text-center"><span class="badge variant-filled">Success-Warning</span></div> <div class="card bg-gradient-to-br variant-gradient-warning-error px-4 py-10 text-center"><span class="badge variant-filled">Warning-Error</span></div> <div class="card bg-gradient-to-br variant-gradient-error-success px-4 py-10 text-center"><span class="badge variant-filled">Error-Success</span></div>  <div class="card bg-gradient-to-br variant-gradient-warning-success px-4 py-10 text-center"><span class="badge variant-filled">Warning-Success</span></div> <div class="card bg-gradient-to-br variant-gradient-error-warning px-4 py-10 text-center"><span class="badge variant-filled">Error-Warning</span></div> <div class="card bg-gradient-to-br variant-gradient-success-error px-4 py-10 text-center"><span class="badge variant-filled">Success-Error</span></div></div> `;
        }
      })}</section> `;
    }
  })}`;
});
export {
  Page as default
};

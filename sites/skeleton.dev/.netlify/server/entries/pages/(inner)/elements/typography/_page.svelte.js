import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Element,
    name: "Typography",
    description: "Provides a variety of globally scoped typographic styles. Keeps common tags styled consistently throughout an app.",
    stylesheetIncludes: ["skeleton", "typography"],
    source: "packages/plugin/src/styles/components/typography.css"
  };
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return `  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-cfyqju">Headings</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<h1 class="h1">Skeleton H1</h1>
<h2 class="h2">Skeleton H2</h2>
<h3 class="h3">Skeleton H3</h3>
<h4 class="h4">Skeleton H4</h4>
<h5 class="h5">Skeleton H5</h5>
<h6 class="h6">Skeleton H6</h6>
						`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="text-center space-y-4" data-svelte-h="svelte-1au7k4s"><h1 class="h1">Skeleton H1</h1> <h2 class="h2" data-toc-ignore>Skeleton H2</h2> <h3 class="h3" data-toc-ignore>Skeleton H3</h3> <h4 class="h4" data-toc-ignore>Skeleton H4</h4> <h5 class="h5" data-toc-ignore>Skeleton H5</h5> <h6 class="h6" data-toc-ignore>Skeleton H6</h6></div>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-oni4s5">Paragraph</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `<p data-svelte-h="svelte-10gkhlf">Note that no class is provided for paragraph tags. They inherit the base text styles.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<p>The quick brown fox jumps over the lazy dog.</p>`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<p class="w-full text-center" data-svelte-h="svelte-1ml5dnw">The quick brown fox jumps over the lazy dog.</p>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1be554k">Anchor</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<a class="anchor" href="/">Anchor</a>`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="text-center" data-svelte-h="svelte-nho9kj"><a class="anchor" href="https://www.youtube.com/watch?v=XTgFtxHhCQ0" target="_blank" rel="noreferrer">Anchor</a></div>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1s0baja">Blockquote</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<blockquote class="blockquote">Skeleton</blockquote>`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<blockquote class="blockquote w-full" data-svelte-h="svelte-6dg9ye">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita cupiditate dolores dignissimos maiores doloremque fugiat, dolore
						doloribus nisi, repellendus mollitia nostrum, commodi a minus aperiam deleniti. Velit rerum ut tempora!
						</blockquote>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-pw6ghe">Pre-formatted Text</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<pre class="pre">The quick brown fox jumps over the lazy dog.</pre>`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<pre class="pre w-full" data-svelte-h="svelte-141ufo6">The quick brown fox jumps over the lazy dog.</pre>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-su31ks">Code</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<code class="code">.myExampleClass</code>`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="text-center" data-svelte-h="svelte-1kekvhl"><code class="code">.myExampleClass</code></div>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-133vk1o">Keyboard</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `Press <kbd class="kbd">⌘ + C</kbd> to copy.`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="text-center" data-svelte-h="svelte-1dmhudk"><p>Press <kbd class="kbd">⌘ + C</kbd> to copy.</p></div>`;
        }
      })}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-18ofah9">Insertion / Deletion</h2> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<del class="del"><s>Always</s> Gonna Give You Up</del>`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `<ins class="ins" cite="https://youtu.be/dQw4w9WgXcQ" datetime="10-31-2022">
	Never Gonna Give You Up
</ins>`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="w-full" data-svelte-h="svelte-17abgrc"><del class="del"><s>Always</s> Gonna Give You Up</del> <ins class="ins" cite="https://youtu.be/dQw4w9WgXcQ" datetime="10-31-2022">Never Gonna Give You Up</ins></div>`;
        }
      })}</section> `;
    }
  })}`;
});
export {
  Page as default
};

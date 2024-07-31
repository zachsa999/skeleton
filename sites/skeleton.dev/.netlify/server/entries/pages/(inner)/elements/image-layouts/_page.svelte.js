import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import { g as getImageLink } from "../../../../../chunks/images.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Element,
    name: "Image Layouts",
    description: "Various layouts for displaying images."
  };
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return ` <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1pu0sy2">Masonry Gallery</h2> <p data-svelte-h="svelte-1j6lyqy">Show the images inside a masonry grid layouts with multiple columns.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<section class="grid grid-cols-2 md:grid-cols-4 gap-2">
	<div class="grid gap-4">
		<div>
			<img class="h-auto max-w-full rounded-lg" src="${getImageLink({
                id: "YOErFW8AfkI",
                w: 300,
                h: 300,
                max: true
              })}" />
		</div>
		<div>
			<img class="h-auto max-w-full rounded-lg" src="${getImageLink({
                id: "s0fXOuyTH1M",
                w: 300,
                h: 300,
                max: true
              })}" alt="" />
		</div>
		<div>
			<img class="h-auto max-w-full rounded-lg" src="${getImageLink({
                id: "tQ4fEcKfB1g",
                w: 300,
                h: 300,
                max: true
              })}" alt="" />
		</div>
	</div>
	<div class="grid gap-4">
		<div>
			<img class="h-auto max-w-full rounded-lg" src="${getImageLink({
                id: "SMvOSlgThHA",
                w: 300,
                h: 300,
                max: true
              })}" alt="" />
		</div>
		<div>
			<img class="h-auto max-w-full rounded-lg" src="${getImageLink({
                id: "azE50UpJDP0",
                w: 300,
                h: 300,
                max: true
              })}" alt="" />
		</div>
		<div>
			<img class="h-auto max-w-full rounded-lg" src="${getImageLink({
                id: "CKZQ6g_FB2Q",
                w: 300,
                h: 300,
                max: true
              })}" alt="" />
		</div>
	</div>
	<div class="grid gap-4">
		<div>
			<img class="h-auto max-w-full rounded-lg" src="${getImageLink({
                id: "UhE2lwGn-DQ",
                w: 300,
                h: 300,
                max: true
              })}" alt="" />
		</div>
		<div>
			<img class="h-auto max-w-full rounded-lg" src="${getImageLink({
                id: "VYuJLsF4XQQ",
                w: 300,
                h: 300,
                max: true
              })}" alt="" />
		</div>
		<div>
			<img class="h-auto max-w-full rounded-lg" src="${getImageLink({
                id: "twVS-YjQn9Y",
                w: 300,
                h: 300,
                max: true
              })}" alt="" />
		</div>
	</div>
	<div class="grid gap-4">
		<div>
			<img class="h-auto max-w-full rounded-lg" src="${getImageLink({
                id: "EkW1r_eDjRs",
                w: 300,
                h: 300,
                max: true
              })}" alt="" />
		</div>
		<div>
			<img class="h-auto max-w-full rounded-lg" src="${getImageLink({
                id: "QDc-OQU9hFk",
                w: 300,
                h: 300,
                max: true
              })}" alt="" />
		</div>
		<div>
			<img class="h-auto max-w-full rounded-lg" src="${getImageLink({
                id: "QK_VtGYQV_U",
                w: 300,
                h: 300,
                max: true
              })}" alt="" />
		</div>
	</div>

</section>
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<section class="grid grid-cols-2 md:grid-cols-4 gap-2" data-svelte-h="svelte-10oqyta"><div class="grid gap-4"><div><img class="h-auto max-w-full rounded-lg"${add_attribute(
            "src",
            getImageLink({
              id: "YOErFW8AfkI",
              w: 300,
              h: 300,
              max: true
            }),
            0
          )} alt=""></div> <div><img class="h-auto max-w-full rounded-lg"${add_attribute(
            "src",
            getImageLink({
              id: "s0fXOuyTH1M",
              w: 300,
              h: 300,
              max: true
            }),
            0
          )} alt=""></div> <div><img class="h-auto max-w-full rounded-lg"${add_attribute(
            "src",
            getImageLink({
              id: "tQ4fEcKfB1g",
              w: 300,
              h: 300,
              max: true
            }),
            0
          )} alt=""></div></div> <div class="grid gap-4"><div><img class="h-auto max-w-full rounded-lg"${add_attribute(
            "src",
            getImageLink({
              id: "SMvOSlgThHA",
              w: 300,
              h: 300,
              max: true
            }),
            0
          )} alt=""></div> <div><img class="h-auto max-w-full rounded-lg"${add_attribute(
            "src",
            getImageLink({
              id: "azE50UpJDP0",
              w: 300,
              h: 300,
              max: true
            }),
            0
          )} alt=""></div> <div><img class="h-auto max-w-full rounded-lg"${add_attribute(
            "src",
            getImageLink({
              id: "CKZQ6g_FB2Q",
              w: 300,
              h: 300,
              max: true
            }),
            0
          )} alt=""></div></div> <div class="grid gap-4"><div><img class="h-auto max-w-full rounded-lg"${add_attribute(
            "src",
            getImageLink({
              id: "UhE2lwGn-DQ",
              w: 300,
              h: 300,
              max: true
            }),
            0
          )} alt=""></div> <div><img class="h-auto max-w-full rounded-lg"${add_attribute(
            "src",
            getImageLink({
              id: "VYuJLsF4XQQ",
              w: 300,
              h: 300,
              max: true
            }),
            0
          )} alt=""></div> <div><img class="h-auto max-w-full rounded-lg"${add_attribute(
            "src",
            getImageLink({
              id: "twVS-YjQn9Y",
              w: 300,
              h: 300,
              max: true
            }),
            0
          )} alt=""></div></div> <div class="grid gap-4"><div><img class="h-auto max-w-full rounded-lg"${add_attribute(
            "src",
            getImageLink({
              id: "EkW1r_eDjRs",
              w: 300,
              h: 300,
              max: true
            }),
            0
          )} alt=""></div> <div><img class="h-auto max-w-full rounded-lg"${add_attribute(
            "src",
            getImageLink({
              id: "QDc-OQU9hFk",
              w: 300,
              h: 300,
              max: true
            }),
            0
          )} alt=""></div> <div><img class="h-auto max-w-full rounded-lg"${add_attribute(
            "src",
            getImageLink({
              id: "QK_VtGYQV_U",
              w: 300,
              h: 300,
              max: true
            }),
            0
          )} alt=""></div></div></section>`;
        }
      })}</section>  <section class="space-y-4" data-svelte-h="svelte-103qvc1"><h2 class="h2">Attribution</h2> <p>Image layout markup and styles provided courtesy
				<a class="anchor" href="https://flowbite.com/" target="_blank" rel="noreferrer">Flowbite</a>. Please
				<a class="anchor" href="https://www.skeleton.dev/blog/skeleton-plus-flowbite" target="_blank" rel="noreferrer">view our guide</a>
				to learn more about integrating Flowbite elements and blocks in your Skeleton projects.</p></section> `;
    },
    sandbox: () => {
      return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<section class="grid grid-cols-2 md:grid-cols-3 gap-4">
	<div>
		<img class="h-auto max-w-full rounded-lg" src="${getImageLink({ id: "YOErFW8AfkI", w: 128, h: 128 })}" alt="">
	</div>
	<div>
		<img class="h-auto max-w-full rounded-lg" src="${getImageLink({ id: "CKZQ6g_FB2Q", w: 128, h: 128 })}" alt="">
	</div>
	<div>
		<img class="h-auto max-w-full rounded-lg" src="${getImageLink({ id: "YOErFW8AfkI", w: 128, h: 128 })}" alt="">
	</div>
</section>
`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<section class="grid grid-cols-2 md:grid-cols-3 gap-4" data-svelte-h="svelte-1x28u1y"><div><img class="h-auto max-w-full rounded-lg"${add_attribute("src", getImageLink({ id: "YOErFW8AfkI", w: 300, h: 300 }), 0)} alt=""></div> <div><img class="h-auto max-w-full rounded-lg"${add_attribute("src", getImageLink({ id: "s0fXOuyTH1M", w: 300, h: 300 }), 0)} alt=""></div> <div><img class="h-auto max-w-full rounded-lg"${add_attribute("src", getImageLink({ id: "CKZQ6g_FB2Q", w: 300, h: 300 }), 0)} alt=""></div> <div><img class="h-auto max-w-full rounded-lg"${add_attribute("src", getImageLink({ id: "VYuJLsF4XQQ", w: 300, h: 300 }), 0)} alt=""></div> <div><img class="h-auto max-w-full rounded-lg"${add_attribute("src", getImageLink({ id: "01D-_OtB8wQ", w: 300, h: 300 }), 0)} alt=""></div> <div><img class="h-auto max-w-full rounded-lg"${add_attribute("src", getImageLink({ id: "eP2zYflRoNY", w: 300, h: 300 }), 0)} alt=""></div> <div><img class="h-auto max-w-full rounded-lg"${add_attribute("src", getImageLink({ id: "z_X0PxmBuIQ", w: 300, h: 300 }), 0)} alt=""></div> <div><img class="h-auto max-w-full rounded-lg"${add_attribute("src", getImageLink({ id: "1SEH8qv-Obo", w: 300, h: 300 }), 0)} alt=""></div> <div><img class="h-auto max-w-full rounded-lg"${add_attribute("src", getImageLink({ id: "c64AB11j-po", w: 300, h: 300 }), 0)} alt=""></div></section>`;
        }
      })} `;
    },
    default: () => {
      return ` `;
    }
  })}`;
});
export {
  Page as default
};

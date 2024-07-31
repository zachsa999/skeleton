import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { L as LayoutPage } from "../../../../../chunks/LayoutPage.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { A as Accordion, a as AccordionItem } from "../../../../../chunks/AccordionItem.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LayoutPage, "LayoutPage").$$render($$result, {}, {}, {
    default: () => {
      return ` <header class="space-y-4" data-svelte-h="svelte-1s4ehf9"><h1 class="h1">Introduction</h1>  <p>A powerful UI toolkit built using <a class="anchor" href="https://svelte.dev/" target="_blank" rel="noreferrer">Svelte</a> and <a class="anchor" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>. Create adaptive, accessible design systems for your web apps.</p></header> <hr>  <section class="space-y-4" data-svelte-h="svelte-1xlttyh"><p class="!text-xl">Skeleton utilizes Tailwind’s utility classes and design system capabilities to quickly and easily create beautiful interfaces. Paired
			with Svelte’s powerful component architecture, Skeleton creates customized, responsive, and reactive interfaces for projects of any
			scope or scale.</p></section>  <section class="space-y-4" data-svelte-h="svelte-1l6n1bv"> <iframe class="w-full aspect-video mx-auto rounded-container-token shadow" src="https://www.youtube.com/embed/tHzVyChDuyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  <div class="grid grid-cols-1 md:grid-cols-3 gap-4"><a href="https://youtu.be/P_A0qQ7AuK8" target="_blank" rel="noreferrer"><img class="w-full aspect-video shadow" src="https://i.ytimg.com/vi/P_A0qQ7AuK8/hq720.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLAzhVXc-QnHxLUDEJriSQ5dM0vt8w" alt="Huntabyte" title="Huntabyte"></a> <a href="https://www.youtube.com/watch?v=O0mNU0maItY" target="_blank" rel="noreferrer"><img class="w-full aspect-video shadow" src="https://i.ytimg.com/vi/O0mNU0maItY/hq720.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggcEAIYBiABOAE=&rs=AOn4CLB9xc89PYlMU6piBYxcV6Vf_G7DqQ" alt="Joy of Code" title="Joy of Code"></a> <a href="https://www.youtube.com/watch?v=2OnJYCXJPK4" target="_blank" rel="noreferrer"><img class="w-full aspect-video shadow" src="https://i.ytimg.com/vi/2OnJYCXJPK4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLAOSpZL64fmARG9DXogNjK-0IsREA" alt="Svelte Sirens" title="Svelte Sirens"></a></div></section>  <section class="space-y-4" data-svelte-h="svelte-sjtfk6"><h2 class="h2">Our Vision</h2> <p>Skeleton aims to provide a seamless user experience by creating intelligent and adaptive UI elements that automatically conform to the
			unique aesthetic of your application. It leverages native browser APIs and form elements, while also incorporating powerful components
			that follow WAI-ARIA guidelines for accessibility, empowering developers to create user-centric web applications with ease.</p> <p>We&#39;re huge fans of Svelte and wish to contribute to this amazing ecosystem. We believe this only happens through contributions of high
			quality open source projects our own. Created by the community, for the community.</p> <p>Finally, we aim for inclusion, whether you&#39;re a contributor to the project, a consumer, or the end user. The Skeleton core team is not
			a faceless corporate entity, but rather a small group of individuals motivated to make accessible UI with great UX (user experience)
			and DX (developer experience) for all.</p></section>  <section class="space-y-4" data-svelte-h="svelte-3atd6j"><h2 class="h2">Benefits</h2>  <h3 class="h3">Free and Open Source</h3> <p>Skeleton is available as <a class="anchor" href="https://github.com/skeletonlabs/skeleton" target="_blank" rel="noreferrer">free and open-source software (FOSS)</a>
			provided under the
			<a class="anchor" href="https://github.com/skeletonlabs/skeleton/blob/master/LICENSE" target="_blank" rel="noreferrer">MIT License</a>.</p>  <h3 class="h3">Community Owned</h3>  <p>Skeleton is maintained by a number of talented <a class="anchor" href="https://github.com/skeletonlabs/skeleton/graphs/contributors" target="_blank" rel="noreferrer">contributors</a>. If you wish to <a class="anchor" href="/docs/contributing">contribute to the project</a>, you are welcome to do so. Visit the Skeleton communities on either <a class="anchor" href="https://github.com/skeletonlabs/skeleton" target="_blank" rel="noreferrer">GitHub</a> or <a class="anchor" href="https://discord.gg/EXqV7W8MtY" target="_blank" rel="noreferrer">Discord</a>.</p>  <h3 class="h3">Theme System</h3> <p>We provide a powerful and comprehensive theme system that goes well beyond generating a color palette. Themes allow you to control
			common settings, such as border radius, and apply those universally throughout your application. Furthermore, themes are built using
			CSS variables, which makes themes simple to configure and reuse.</p>  <h3 class="h3">Design Tokens</h3> <p>These tokens are a special set of CSS classes that ingest your theme settings for easy reuse throughout your design system. They are
			used as the default settings for most features within Skeleton, meaning your UI elements automatically adjust to theme changes.
			Likewise, these tokens are available to you, meaning you can build custom components using the same tools we do, for a truly cohesive
			look and feel.</p>  <h3 class="h3">Release Cycle</h3> <p>Skeleton receives new updates every other week, typically around Tuesday (US/Central). Each release is packed with new features,
			improvements, and bugfixes.</p> <a class="btn variant-filled-secondary" href="https://github.com/skeletonlabs/skeleton/releases" target="_blank" rel="noreferrer">View Releases</a></section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-bde1n9">Comparisons</h2> <p data-svelte-h="svelte-1fu74y5">A quick comparison to alternative open source UI libraries.</p> ${validate_component(Accordion, "Accordion").$$render(
        $$result,
        {
          autocollapse: true,
          class: "card variant-glass p-2"
        },
        {},
        {
          default: () => {
            return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { open: true }, {}, {
              content: () => {
                return `<a class="anchor" href="https://tailwindui.com/" target="_blank" rel="noreferrer" data-svelte-h="svelte-eaz8lt">https://tailwindui.com/</a> <p data-svelte-h="svelte-1ep1zyi">A library of UI elements designed by the creators of Tailwind CSS. This provides a huge library of turnkey HTML/CSS components.
						Currently Tailwind UI supports three options: HTML, React, and Vue. This means there&#39;s no plug and play solution for Svelte. You
						will need to generate your own components and build your own logic around these. Tailwind UI can be directly integrated with
						Skeleton though, providing tight integration with Skeleton&#39;s theme and design token systems.</p> <a class="btn variant-filled-secondary" href="/blog/skeleton-plus-tailwind-ui" target="_blank" data-svelte-h="svelte-1ho1qu0">View our Integration Guide</a> `;
              },
              summary: () => {
                return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-11zpn82">Tailwind UI</h3>`;
              }
            })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
              content: () => {
                return `<a class="anchor" href="https://flowbite.com/" target="_blank" rel="noreferrer" data-svelte-h="svelte-kodruh">https://flowbite.com/</a> <p data-svelte-h="svelte-lyqbve">Flowbite provides a set of turnkey HTML/CSS components built with Tailwind’s utility class system. Flowbite provides a unique
						and opinionated design aesthetic and serves as a general purpose library, which means it can be used within any framework, while
						providing framework-specific variations like <a class="anchor" href="https://flowbite-svelte.com/" target="_blank" rel="noreferrer">Flowbite Svelte</a>. Flowbite&#39;s HTML/CSS elements can be directly integrated with Skeleton, providing tight integration with Skeleton&#39;s theme and
						design token systems.</p> <a class="btn variant-filled-secondary" href="/blog/skeleton-plus-flowbite" target="_blank" data-svelte-h="svelte-rasy1n">View our Integration Guide</a> `;
              },
              summary: () => {
                return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-1u1b7dk">Flowbite</h3>`;
              }
            })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
              content: () => {
                return `<a class="anchor" href="https://daisyui.com/" target="_blank" rel="noreferrer" data-svelte-h="svelte-1jmr361">https://daisyui.com/</a> <p data-svelte-h="svelte-le5yvk">Like Skeleton, Daisy uses Tailwind CSS and highly customizable theme systems. Unfortunately, Daisy themes rely on hex color
						values which <a class="anchor" href="https://tailwindcss.com/docs/customizing-colors#using-css-variables" target="_blank" rel="noreferrer">prevents the use of the opacity modifier syntax</a>. Skeleton, on the other hand, treats utility classes as first class citizens, providing hooks to set and override Tailwind
						classes within each component. Skeleton components also accept arbitrary classes, allowing full customization from top to
						bottom. However, it’s worth noting that Daisy is a general purpose library available to any framework, while Skeleton focuses
						purely on Svelte.</p> `;
              },
              summary: () => {
                return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-g7oclu">Daisy UI</h3>`;
              }
            })}`;
          }
        }
      )}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-p0ns">FAQs</h2> <p data-svelte-h="svelte-6c708q">A list of common questions and issues from our community.</p> ${validate_component(Accordion, "Accordion").$$render(
        $$result,
        {
          autocollapse: true,
          class: "card variant-glass p-2"
        },
        {},
        {
          default: () => {
            return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { open: true }, {}, {
              content: () => {
                return `<p data-svelte-h="svelte-15dvduv">No, Skeleton does not require Typescript, though we highly recommend it. Please be aware all documentation examples are written
						with Typescript by default. If you wish to learn Typescript we recommend <a class="anchor" href="https://www.totaltypescript.com/tutorials" target="_blank" rel="noreferrer">Total Typescript</a>.</p> `;
              },
              summary: () => {
                return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-tsvqvx">Is Typescript required?</h3>`;
              }
            })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
              content: () => {
                return `<p data-svelte-h="svelte-dl52i8">We support <a class="anchor" href="https://docs.npmjs.com/about-npm" target="_blank" rel="noreferrer">NPM (Node Package Manager)</a>. PNPM and Yarn are currently only supported for the Skeleton CLI.</p> `;
              },
              summary: () => {
                return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-1co43mj">What package managers are supported?</h3>`;
              }
            })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
              content: () => {
                return `<p data-svelte-h="svelte-saf8ba">Yes, but please be mindful of the <code class="code">node_modules</code> path in your project configuration. We <u>do not</u> tailor
						instruction for this use case.</p> `;
              },
              summary: () => {
                return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-1rhyx7t">Can I use a monorepo?</h3>`;
              }
            })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
              content: () => {
                return `<p data-svelte-h="svelte-14u0p57">Yes, <a class="anchor" href="https://github.com/skeletonlabs/skeleton/discussions/503" target="_blank" rel="noreferrer">view our roadmap</a>. This covers major milestones leading up to the v1.0 release.</p> `;
              },
              summary: () => {
                return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-wqhvb7">Do you have a project roadmap?</h3>`;
              }
            })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
              content: () => {
                return `<p data-svelte-h="svelte-13i6sku">See the <a class="anchor" href="/docs/contributing">contribution guide</a>. This covers all requirements for getting started.</p> `;
              },
              summary: () => {
                return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-1mi3ekr">How can I contribute?</h3>`;
              }
            })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
              content: () => {
                return `<p data-svelte-h="svelte-zejwsy">We recommend the official <a class="anchor" href="https://svelte.dev/docs" target="_blank" rel="noreferrer">documentation</a>
						and
						<a class="anchor" href="https://learn.svelte.dev/tutorial/welcome-to-svelte" target="_blank" rel="noreferrer">tutorial</a> for
						Svelte and SvelteKit. As well as the official
						<a class="anchor" href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">documentation</a> for SvelteKit.</p> `;
              },
              summary: () => {
                return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-149jd78">Where can I learn Svelte and SvelteKit?</h3>`;
              }
            })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
              content: () => {
                return `<p data-svelte-h="svelte-147ekro">We recommend the official <a class="anchor" href="https://tailwindcss.com/docs/utility-first" target="_blank" rel="noreferrer">documentation</a>
						and
						<a class="anchor" href="https://www.youtube.com/c/TailwindLabs/videos" target="_blank" rel="noreferrer">YouTube channel</a>.</p> `;
              },
              summary: () => {
                return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-ixapr1">Where can I learn Tailwind?</h3>`;
              }
            })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
              content: () => {
                return `<p data-svelte-h="svelte-1aes7ui">VS Code has an optional opt-in feature for automatically reordering imports. This is disabled by default. If this is enabled it
						may break your stylesheet import order, which can be cause issues. If present, set it to <code class="code">false</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
                  $$result,
                  {
                    language: "json",
                    code: `
"editor.codeActionsOnSave": {
    "source.sortImports": false
}
						`
                  },
                  {},
                  {}
                )} `;
              },
              summary: () => {
                return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-1qftuqi">Why is VS Code reordering my imports?</h3>`;
              }
            })}`;
          }
        }
      )}</section>`;
    }
  })}`;
});
export {
  Page as default
};

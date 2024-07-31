import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { L as LayoutPage } from "../../../../../chunks/LayoutPage.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { A as Accordion, a as AccordionItem } from "../../../../../chunks/AccordionItem.js";
import { A as Avatar } from "../../../../../chunks/Avatar.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LayoutPage, "LayoutPage").$$render($$result, {}, {}, {
    default: () => {
      return ` <header class="space-y-4" data-svelte-h="svelte-1vjib0y"><h1 class="h1">Sponsorship</h1> <p>Sponsorship is a fundamental way to support open source projects such as Skeleton. Funds provided by sponsors cover operation costs,
			fund paid promotion, support contributors, and more. Choose from any of the services listed below.</p></header>  <section class="grid grid-cols-1 lg:grid-cols-3 gap-4"><a class="card card-hover !bg-[#6e5494] p-4 md:py-10 lg:py-20 flex flex-col items-center space-y-4" href="https://github.com/sponsors/skeletonlabs" target="_blank" rel="noreferrer">${validate_component(Avatar, "Avatar").$$render(
        $$result,
        {
          background: "bg-white",
          width: "w-40",
          src: "https://github.blog/wp-content/uploads/2019/05/mona-heart-featured.png?resize=1600%2C850"
        },
        {},
        {}
      )} <h2 class="h4" data-toc-ignore data-svelte-h="svelte-59hofs">Github</h2></a> <a class="card card-hover !bg-[#1AC0FF] p-4 md:py-10 lg:py-20 flex flex-col items-center space-y-4" href="https://ko-fi.com/skeletonlabs" target="_blank" rel="noreferrer">${validate_component(Avatar, "Avatar").$$render(
        $$result,
        {
          background: "bg-white",
          width: "w-40",
          src: "https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/61e111774d3a2f67c827cd25_Frame%205.png"
        },
        {},
        {}
      )} <h2 class="h4" data-toc-ignore data-svelte-h="svelte-16k3pip">Ko-Fi</h2></a> <a class="card card-hover !bg-[#FF424D] p-4 md:py-10 lg:py-20 flex flex-col items-center space-y-4" href="https://www.patreon.com/user?u=83786276" target="_blank" rel="noreferrer">${validate_component(Avatar, "Avatar").$$render(
        $$result,
        {
          background: "bg-white",
          width: "w-40",
          src: "https://pixelbag.net/wp-content/uploads/2022/03/patreon-vector-icon.jpg"
        },
        {},
        {}
      )} <h2 class="h4" data-toc-ignore data-svelte-h="svelte-7w45to">Patreon</h2></a></section> <hr>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-10j0zn4">GitHub Incentives</h2> <h3 class="h3" data-svelte-h="svelte-wip54e">Discord Role</h3>  <p data-svelte-h="svelte-1ouvc3z">Sponsorship of the <u>Silver Tier or higher</u> provides access to a <code class="code">sponsor</code> role on Discord, enabling a
			special <code class="code">#sponsors</code> channel which provides a direct line of communication with Skeleton contributors. Please contact a member of the Discord moderator team if this role is not automatically assigned.</p> <h3 class="h3" data-svelte-h="svelte-18969f6">Premium Templates</h3>  <p data-svelte-h="svelte-16knr08">Sponsorship of the <u>Gold Tier or higher</u> unlocks access to all templates below. Select any template to preview.</p> <div class="grid grid-cols-1 lg:grid-cols-2 gap-4" data-svelte-h="svelte-1hfegiw"> <a class="card hover:variant-filled-primary p-4 space-y-4" href="https://skeleton-template-portfolio.vercel.app/" target="_blank"><h3 class="h3" data-toc-ignore>Portfolio</h3> <img class="rounded-container-token shadow" src="https://github.com/skeletonlabs/skeleton/assets/1509726/4ab925f5-5d76-4cd5-b8a8-33c151f57adb" alt="portfolio"> <p>A personal portfolio template, this template allows you to quickly and easily edit a static file to maintain your list of personal
					projects. Easily modify the images and stats on the homepage to make it your own. Makes use of the recently added Wintry theme by
					default, but easily switch to any theme you prefer.</p></a>  <a class="card hover:variant-filled-primary p-4 space-y-4" href="https://skeleton-template-blog.vercel.app/" target="_blank"><h3 class="h3" data-toc-ignore>Blog</h3> <img class="rounded-container-token shadow" src="https://github.com/skeletonlabs/skeleton/assets/1509726/ecd34f03-73ac-45d2-ad39-3714cf4d67dd" alt="portfolio"> <p>This template provides a fully featured blog, allowing you to generate and maintain posts using Markdown via mdsvex. Includes full
					support for multiple authors and filtering by custom categories. All Markdown frontmatter is type safe and easy to expand.
					Including a unique and classy black and white theme.</p></a></div>  ${validate_component(Accordion, "Accordion").$$render(
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
                return ` <p data-svelte-h="svelte-11sc2uh">While your sponsorship is active, you gain access to a <a class="anchor" href="https://github.com/skeletonlabs/skeleton-templates" target="_blank">private GitHub repository</a> containing all available templates.</p> `;
              },
              summary: () => {
                return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-eyzks2">How may I access my templates?</h3>`;
              }
            })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
              content: () => {
                return `<p data-svelte-h="svelte-c39bfr">Each template is hand-crafted by industry professions with decades of experience in interface design and frontend development.
						We take care to implement fully responsive layouts that adjust to fit any size screen, and write code that meets or exceeds all
						modern standards. Providing a simple to use and production-ready solution for your projects.</p> <ul class="list-disc list-outside ml-4 space-y-2" data-svelte-h="svelte-yhjujn"><li><strong>Created by Experts</strong> — each template is curated by members of Skeleton Labs, the creators of the Skeleton library.</li> <li><strong>Adaptive Theme</strong>s — unlike traditional website templates, Skeleton templates are designed from the ground up
							with customization in mind. Use the unique theme bundled with each template, choose from a selection of preset themes, or
							generate your own in seconds.</li> <li><strong>Easy to Use</strong> — all templates are easy to use, creating the perfect foundation for your personal or professional
							projects.</li> <li><strong>Ready for Production</strong> — each template is maintained to keep in sync with the latest changes from Svelte/Kit, Tailwind,
							and Skeleton.</li> <li><strong>Easy to Deploy</strong> — use any of SvelteKit&#39;s adapters and deploy to a number of popular services, including: Vercel,
							Netlify, and more.</li></ul> `;
              },
              summary: () => {
                return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-1id09l3">What makes these templates so special?</h3>`;
              }
            })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
              content: () => {
                return `<p data-svelte-h="svelte-1gfbrhr">Absolutely. Each template implements the latest version of the Skeleton adaptive theme system, which fully supports all preset
						or custom themes out of the box.</p> <video class="bg-black w-full h-auto rounded-container-token overflow-hidden shadow-xl" poster="https://cdn.shopify.com/s/files/1/0785/8565/9703/files/portfolio.png" width="1920" height="1080" autoplay loop muted data-svelte-h="svelte-ijqbrm"><source src="https://s3.us-east-2.amazonaws.com/cdn.endigodesign.com/endigo_design/skeleton/store-video.mp4" type="video/mp4">
						Your browser does not support the video tag.
						<track kind="captions"></video> `;
              },
              summary: () => {
                return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-iys7i2">Can I use other preset or custom themes?</h3>`;
              }
            })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
              content: () => {
                return `<p data-svelte-h="svelte-flvuvx">Yes, templates provided as sponsorship incentives are limited to the <u>Personal License</u>. If you&#39;re interested in either the
						Commercial or Enterprise licenses, please contact <a class="anchor" href="mailto:admin@skeleton.dev">Skeleton Labs</a>.</p> <div class="grid grid-cols-1 xl:grid-cols-3 gap-4 items-start" data-svelte-h="svelte-3mggsq"><section class="card p-8 space-y-4"><h3 class="h3" data-toc-ignore>Personal</h3> <hr class="opacity-30"> <p>Intended for use within small scale personal or hobby projects.</p> <ul class="list-disc list-inside space-y-2"><li>Single application</li> <li>Limited to 1 domain</li> <li>Includes documentation</li></ul> <a class="btn variant-filled w-full" href="/docs/sponsorship/licensing" target="_blank">License Terms</a></section> <section class="card p-8 space-y-4"><h3 class="h3" data-toc-ignore>Commercial</h3> <hr class="opacity-30"> <p>Intended for use within commercial organizations and agencies.</p> <ul class="list-disc list-inside space-y-2"><li>Multiple applications</li> <li>Unlimited domains</li> <li>Includes documentation</li></ul> <a class="btn variant-filled w-full" href="/docs/sponsorship/licensing" target="_blank">License Terms</a></section> <section class="card p-8 space-y-4"><h3 class="h3" data-toc-ignore>Enterprise</h3> <hr class="opacity-30"> <p>Reserved for large scale use and extended redistribution. Please contact Skeleton Labs for more information.</p> <div class="grid grid-cols-1 gap-2"><a class="btn variant-filled w-full" href="/docs/sponsorship/licensing" target="_blank">License Terms</a></div></section></div> `;
              },
              summary: () => {
                return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-1cmtz5x">Are templates subject to license restrictions?</h3>`;
              }
            })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
              content: () => {
                return `<p data-svelte-h="svelte-16822sm">Yes, support is provided through the private GitHub repository, or via our standard Discord support channels.</p> `;
              },
              summary: () => {
                return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-r8l7m9">Is support available for templates?</h3>`;
              }
            })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
              content: () => {
                return `<p data-svelte-h="svelte-19jd3p1">Yes, all Skeleton projects require Svelte and SvelteKit. If you wish to learn these technologies we recommend the
						<a class="anchor" href="https://svelte.dev/" target="_blank" rel="noreferrer">Svelte</a> and
						<a class="anchor" href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a> documentation.</p> `;
              },
              summary: () => {
                return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-1ku8anb">Are Svelte and SvelteKit required?</h3>`;
              }
            })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
              content: () => {
                return `<p data-svelte-h="svelte-18y5pis">Yes, all Skeleton projects require Tailwind CSS. If you wish to learn Tailwind, we recommend the official <a class="anchor" href="https://tailwindcss.com/docs/utility-first" target="_blank" rel="noreferrer">documentation</a>
						and
						<a class="anchor" href="https://www.youtube.com/c/TailwindLabs/videos" target="_blank" rel="noreferrer">YouTube channel</a>.</p> `;
              },
              summary: () => {
                return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-1lgwu9m">Is Tailwind required?</h3>`;
              }
            })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
              content: () => {
                return `<p data-svelte-h="svelte-5sbnag">Yes, each template is built with Typescript and is recommended as a best practice. If you wish to learn Typescript, we recommend
						the free <a class="anchor" href="https://www.totaltypescript.com/tutorials/beginners-typescript" target="_blank" rel="noreferrer">Total Typescript</a> course by Matt Pocock.</p> `;
              },
              summary: () => {
                return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-tsvqvx">Is Typescript required?</h3>`;
              }
            })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
              content: () => {
                return ` <h4 class="h4 !mt-4" data-svelte-h="svelte-q00kd9">Method 1: CLI Install</h4> <div class="space-y-4" data-svelte-h="svelte-vdlzbp"><p>1. Download the template zip file from the private repository.</p> <p>2. Use NPM (or similar) to run the CLI and point at the local unzipped template files.</p> <pre class="pre">npm create skeleton-app@latest --skeletontheme=./path/to/unzipped/template/</pre> <p>3. Follow the CLI instructions. Note that <u>Typescript is required</u> for all templates.</p></div>  <h4 class="h4 !mt-10" data-svelte-h="svelte-1a5ccj1">Method 2: Manual Install</h4> <div class="space-y-4" data-svelte-h="svelte-wsy3oy"><p>1. Download the template zip file from the private repository.</p> <p>2. Unzip the file and rename the directory as desired. (ex: my-blog)</p> <p>3. Point your terminal at the contents of the unzipped directory.</p> <p>4. Use NPM (or similar) to install all package dependencies.</p> <pre class="pre">npm install</pre> <p>5. Start your local SvelteKit dev server.</p> <pre class="pre">npm run dev</pre> <p>6. Point your browser at the local server address shown in the terminal, which defaults to:</p> <pre class="pre">http://localhost:5173/</pre></div> `;
              },
              summary: () => {
                return `<h3 class="h3" data-toc-ignore data-svelte-h="svelte-6u5kxp">How do I install and use each template?</h3>`;
              }
            })}`;
          }
        }
      )}</section>  <section class="space-y-4" data-svelte-h="svelte-4mjht4"><h2 class="h2">Ko-Fi Incentives</h2>  <p>Sponsorship of the <u>Silver Tier or higher</u> provides access to a <code class="code">sponsor</code> role on Discord, enabling a
			special <code class="code">#sponsors</code> channel which provides a direct line of communication with Skeleton contributors.</p> <aside class="alert variant-soft"><p>Please note that <strong>premium templates</strong> are not currently available to this service.</p></aside></section>  <section class="space-y-4" data-svelte-h="svelte-d0rk3x"><h2 class="h2">Patreon Incentives</h2>  <p>Sponsorship of the <u>Silver Tier or higher</u> provides access to a <code class="code">sponsor</code> role on Discord, enabling a
			special <code class="code">#sponsors</code> channel which provides a direct line of communication with Skeleton contributors.</p> <aside class="alert variant-soft"><p>Please note that <strong>premium templates</strong> are not currently available to this service.</p></aside></section>`;
    }
  })}`;
});
export {
  Page as default
};

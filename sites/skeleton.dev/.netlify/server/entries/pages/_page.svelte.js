import { c as create_ssr_component, h as each, e as escape, v as validate_component, d as add_attribute } from "../../chunks/ssr.js";
import { g as getImageLink } from "../../chunks/images.js";
import "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { A as Avatar } from "../../chunks/Avatar.js";
import { P as ProgressRadial } from "../../chunks/ProgressRadial.js";
import { R as RadioGroup, a as RadioItem, D as DocsPreview } from "../../chunks/DocsPreview.js";
import { S as SlideToggle } from "../../chunks/SlideToggle.js";
import { L as LightSwitch } from "../../chunks/LightSwitch.js";
import { g as getModalStore } from "../../chunks/stores2.js";
import { A as Accordion, a as AccordionItem } from "../../chunks/AccordionItem.js";
import { L as ListBox, a as ListBoxItem } from "../../chunks/ListBoxItem.js";
import { A as Apollo, B as BlueNight, E as Emerald, N as Noir } from "../../chunks/Noir.js";
import { P as ProgressBar } from "../../chunks/ProgressBar.js";
import { T as TabGroup, a as Tab } from "../../chunks/Tab.js";
const HomeFeatures = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const features = [
    {
      title: "Amazing DX",
      body: "Offers a best in class developer experience providing thorough documentation and ample examples to help you ship faster.",
      icon: "fa-laptop-code"
    },
    {
      title: "Accessibility",
      body: "Components follow WAI-ARIA guidelines to implement required semantics, attributes, and keyboard interactions.",
      icon: "fa-universal-access"
    },
    {
      title: "Extensible",
      body: `Bring elements from other UI libraries such as <a class="anchor" href="/blog/skeleton-plus-flowbite">Flowbite</a> or <a class="anchor" href="/blog/skeleton-plus-tailwind-ui">Tailwind UI</a> to expand your toolkit arsenal even further.`,
      icon: "fa-square-arrow-up-right"
    },
    {
      title: "Typescript",
      body: "Uses Typescript by default and provides IntelliSense feedback as you build your application within your editor.",
      icon: "fa-code"
    },
    {
      title: "Integrations",
      body: `Bring your favorite Svelte or Javascript libraries and use the adaptive theme system for a seamless experience.`,
      icon: "fa-puzzle-piece"
    },
    {
      title: "Icon Agnostic",
      body: "Supports all forms of iconography for complete control, including: unicode, emoji, vector, or SVG-based icon systems.",
      icon: "fa-icons"
    }
  ];
  return `<div class="space-y-4 md:space-y-10"> <div class="space-y-4 text-center" data-svelte-h="svelte-1jpjkss"><h2 class="h2">And so much more...</h2> <p>There&#39;s too many amazing features to list, but here are a few of our favorites.</p></div>  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4"> ${each(features, (feature) => {
    return ` <div class="card variant-glass p-4 shadow-lg md:p-10 space-y-4 text-center"><span class="btn-icon btn-icon-xl variant-soft-primary"><i class="${"fa-solid " + escape(feature.icon, true)}"></i></span> <h3 class="h3">${escape(feature.title)}</h3> <p><!-- HTML_TAG_START -->${feature.body}<!-- HTML_TAG_END --></p> </div>`;
  })}</div></div>`;
});
const DocsLogoHero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg class="fill-token h-[72px] md:h-[96px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 120"><path fill-rule="evenodd" d="M51.486 30.632c15.041 0 27.881 5.208 37.07 13.764 1.226-.379 2.265-.767 3.118-1.165 2.606-1.215 6.028-3.706 10.265-7.474-.688 6.563-1.427 11.381-2.216 14.454-.423 1.646-1.077 3.639-1.964 5.978a47.987 47.987 0 0 1 5.062 14.02c3.625 18.17-2.583 26.205-16.988 30.69.108.54.193 1.12.253 1.741.515 5.315-2.173 13.899-5.4 13.899-2.122 0-3.502-2.956-4.982-7.27-.463 4.996-2.74 10.731-5.379 10.731-2.222 0-3.63-3.24-5.192-7.889l-.22-.657c-.366-1.11-.744-2.292-1.145-3.522-.1.474-.205.96-.314 1.452l-.134.593C62.208 114.832 60.594 120 57.987 120c-3.027 0-1.367-9.529-6.47-13.567-25.873 1.41-47.638-8.154-47.638-35.75 0-5.078 1.202-10.039 3.405-14.643a55.737 55.737 0 0 1-1.1-2.28C4.467 49.97 2.405 44.232 0 36.55c6.153 4.59 10.872 7.325 14.157 8.204.329.088.671.165 1.027.23 8.617-8.633 21.5-14.352 36.302-14.352ZM45.45 67.86c-8.742 0-15.829 6.882-15.829 15.372s7.087 15.372 15.829 15.372c8.741 0 15.828-6.882 15.828-15.372 0-8.386-6.915-15.204-15.51-15.37Zm22.466 19.2c-2.645 0-4.04 5.648-4.04 8.182 0 1.979.664 3.071 1.746 3.27 2.626.244 1.825-3.583 3.132-3.583 1.394 0 3.026 3.915 4.392 3.384 1.622-.966 1.002-3.07.442-4.734-1.973-4.18-3.027-6.519-5.672-6.519Zm-22.1-16.981c7.549 0 13.668 5.862 13.668 13.093s-6.12 13.093-13.668 13.093c-.464 0-.923-.022-1.376-.066 6.903-.66 12.292-6.241 12.292-13.027s-5.39-12.367-12.291-13.028c.452-.043.911-.065 1.375-.065Zm39.31-3.12c-6.024 0-10.907 6.044-10.907 13.5S79.102 93.96 85.126 93.96s10.907-6.045 10.907-13.5c0-7.457-4.883-13.502-10.907-13.502Zm.352 2.228c5.03 0 9.107 5.039 9.107 11.255 0 6.215-4.077 11.254-9.107 11.254a7.47 7.47 0 0 1-1.368-.126c4.38-.816 7.739-5.487 7.739-11.128S88.49 70.129 84.11 69.313a7.46 7.46 0 0 1 1.368-.126Zm2.094-43.29c.35.227.448.694.222 1.044l-1.792 2.76a.754.754 0 0 1-.945.276l-.098-.054a.754.754 0 0 1-.222-1.043l1.792-2.76a.754.754 0 0 1 1.043-.223Zm-71.6-.728.07.087 1.652 2.36a.754.754 0 0 1-1.235.865l-1.652-2.36a.754.754 0 0 1 1.165-.952ZM53.954 0l1.709 14.476 6.371-7.161.165 17.826-1.263-.28c-3.684-.818-7.026-1.225-10.024-1.225-2.976 0-5.765.402-8.372 1.204l-1.404.433 1.15-22.296 5.828 11.018L53.954 0Zm-1.123 8.03-4.498 10.778-4.378-8.277-.617 11.951.131-.032c2.3-.567 4.717-.857 7.253-.87l.19-.001c2.748 0 5.747.322 9 .965l.207.041-.092-9.92-5.87 6.597L52.831 8.03Zm23.312 11.54a.755.755 0 0 1 .518.933l-.227.791a.754.754 0 0 1-.832.539l-.1-.022a.754.754 0 0 1-.518-.933l.227-.791a.754.754 0 0 1 .932-.517Zm-45.549-.85.424 1.306a.754.754 0 0 1-1.396.561l-.038-.095-.424-1.305a.754.754 0 0 1 1.434-.466Z"></path></svg>`;
});
const css$1 = {
  code: ".anim-float-avatar.svelte-dg9myt{animation:svelte-dg9myt-float-up 13s ease-in-out infinite}.anim-float-progress.svelte-dg9myt{animation:svelte-dg9myt-float-down 15s ease-in-out infinite}.anim-float-search.svelte-dg9myt{animation:svelte-dg9myt-float-up 14s ease-in-out infinite;animation-delay:3s}.anim-float-radio.svelte-dg9myt{animation:svelte-dg9myt-float-down 17s ease-in-out infinite}.anim-float-card.svelte-dg9myt{animation:svelte-dg9myt-float-up 12s ease-in-out infinite}.anim-float-light-switch.svelte-dg9myt{animation:svelte-dg9myt-float-down 18s ease-in-out infinite;animation-delay:2s}.anim-float-button.svelte-dg9myt{animation:svelte-dg9myt-float-up 15s ease-in-out infinite}.anim-float-toggle.svelte-dg9myt{animation:svelte-dg9myt-float-down 13s ease-in-out infinite;animation-delay:5s}.anim-float-badge.svelte-dg9myt{animation:svelte-dg9myt-float-up 15s ease-in-out infinite}@keyframes svelte-dg9myt-float-up{0%{transform:translateY(0px)}50%{transform:translateY(-20px)}100%{transform:translateY(0px)}}@keyframes svelte-dg9myt-float-down{0%{transform:translateY(0px)}50%{transform:translateY(20px)}100%{transform:translateY(0px)}}",
  map: `{"version":3,"file":"HomeHeroComponents.svelte","sources":["HomeHeroComponents.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { getImageLink } from \\"$lib/images\\";\\nimport { Avatar, ProgressRadial, RadioGroup, RadioItem, SlideToggle, LightSwitch } from \\"@skeletonlabs/skeleton\\";\\nlet value = 0;\\nlet demoSlideToggle = true;\\n<\/script>\\n\\n<!-- variant-ringed-error -->\\n<div class=\\"aspect-video relative\\">\\n\\t<!-- Avatar -->\\n\\t<div class=\\"anim-float-avatar absolute z-[1] top-[32%] left-[40%]\\">\\n\\t\\t<Avatar src={getImageLink({ id: 'YOErFW8AfkI', w: 128, h: 128 })} width=\\"w-32\\" shadow=\\"shadow-xl\\" />\\n\\t</div>\\n\\t<!-- Progress Radial -->\\n\\t<div class=\\"anim-float-progress anim-delay-200 absolute z-[1] top-[0%] left-[10%]\\">\\n\\t\\t<div class=\\"card variant-glass p-4\\">\\n\\t\\t\\t<ProgressRadial width=\\"w-20\\" stroke={150} meter=\\"stroke-primary-500\\" track=\\"stroke-primary-500/30\\" />\\n\\t\\t</div>\\n\\t</div>\\n\\t<!-- Search Input -->\\n\\t<div class=\\"anim-float-search anim-delay-200 absolute z-[1] top-[-12%] left-[35%]\\">\\n\\t\\t<label for=\\"demo-search\\">\\n\\t\\t\\t<span>Search</span>\\n\\t\\t\\t<input class=\\"input\\" type=\\"search\\" name=\\"demo-search\\" placeholder=\\"Search...\\" />\\n\\t\\t</label>\\n\\t</div>\\n\\t<!-- Radio Group -->\\n\\t<div class=\\"anim-float-radio absolute z-[1] top-[20%] left-[70%]\\">\\n\\t\\t<RadioGroup active=\\"variant-filled-secondary\\">\\n\\t\\t\\t<RadioItem bind:group={value} name=\\"justify\\" value={0}>Friendly</RadioItem>\\n\\t\\t\\t<RadioItem bind:group={value} name=\\"justify\\" value={1}>Adaptive</RadioItem>\\n\\t\\t\\t<RadioItem bind:group={value} name=\\"justify\\" value={2}>Customizable</RadioItem>\\n\\t\\t</RadioGroup>\\n\\t</div>\\n\\t<!-- Card -->\\n\\t<div class=\\"anim-float-card absolute z-[1] top-[60%] left-[65%]\\">\\n\\t\\t<a class=\\"block card card-hover p-4 space-y-2\\" href=\\"https://twitter.com/SkeletonUI\\" target=\\"_blank\\" rel=\\"noreferrer\\">\\n\\t\\t\\t<div class=\\"flex items-center gap-4\\">\\n\\t\\t\\t\\t<Avatar src=\\"https://pbs.twimg.com/profile_images/1587479781544759297/TINbbJLC_400x400.png\\" width=\\"w-16\\" />\\n\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t<p class=\\"font-bold\\">Skeleton</p>\\n\\t\\t\\t\\t\\t<small class=\\"opacity-50\\">@SkeletonUI</small>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t\\t<p class=\\"whitespace-nowrap\\">UI toolkit for Svelte and Tailwind.</p>\\n\\t\\t\\t<div class=\\"flex just gap-4\\">\\n\\t\\t\\t\\t<small><strong>50</strong> <span class=\\"opacity-50\\">Following</span></small>\\n\\t\\t\\t\\t<small><strong>500</strong> <span class=\\"opacity-50\\">Followers</span></small>\\n\\t\\t\\t</div>\\n\\t\\t</a>\\n\\t</div>\\n\\t<!-- LightSwitch -->\\n\\t<div class=\\"anim-float-light-switch anim-delay-200 absolute z-[1] top-[98%] left-[45%]\\">\\n\\t\\t<LightSwitch />\\n\\t</div>\\n\\t<!-- Button -->\\n\\t<div class=\\"anim-float-button absolute z-[1] top-[78%] left-[15%]\\">\\n\\t\\t<button class=\\"btn variant-glass-secondary\\">\\n\\t\\t\\t<span>Design</span>\\n\\t\\t\\t<i class=\\"fa-solid fa-spa\\"></i>\\n\\t\\t</button>\\n\\t</div>\\n\\t<!-- Slide Toggle -->\\n\\t<div class=\\"anim-float-toggle anim-delay-200 absolute z-[1] top-[55%] left-[5%]\\">\\n\\t\\t<SlideToggle name=\\"demo-toggle\\" bind:checked={demoSlideToggle} active=\\"bg-primary-500\\" />\\n\\t</div>\\n\\t<!-- Icon Badge -->\\n\\t<div class=\\"anim-float-badge absolute z-[1] top-[45%] left-[25%]\\">\\n\\t\\t<span class=\\"badge-icon variant-filled\\">\\n\\t\\t\\t<i class=\\"fa-solid fa-skull\\"></i>\\n\\t\\t</span>\\n\\t</div>\\n\\t<!-- BG Circles -->\\n\\t<div class=\\"absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-0\\">\\n\\t\\t<div class=\\"w-96 aspect-square border-2 border-black/5 dark:border-white/5 rounded-full flex justify-center items-center\\">\\n\\t\\t\\t<div class=\\"w-[240px] aspect-square border-2 border-black/5 dark:border-white/5 rounded-full flex justify-center items-center\\"></div>\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n\\n<style lang=\\"postcss\\">\\n\\t.anim-float-avatar {\\n\\t\\tanimation: float-up 13s ease-in-out infinite;\\n\\t}\\n\\t.anim-float-progress {\\n\\t\\tanimation: float-down 15s ease-in-out infinite;\\n\\t}\\n\\t.anim-float-search {\\n\\t\\tanimation: float-up 14s ease-in-out infinite;\\n\\t\\tanimation-delay: 3s;\\n\\t}\\n\\t.anim-float-radio {\\n\\t\\tanimation: float-down 17s ease-in-out infinite;\\n\\t}\\n\\t.anim-float-card {\\n\\t\\tanimation: float-up 12s ease-in-out infinite;\\n\\t}\\n\\t.anim-float-light-switch {\\n\\t\\tanimation: float-down 18s ease-in-out infinite;\\n\\t\\tanimation-delay: 2s;\\n\\t}\\n\\t.anim-float-button {\\n\\t\\tanimation: float-up 15s ease-in-out infinite;\\n\\t}\\n\\t.anim-float-toggle {\\n\\t\\tanimation: float-down 13s ease-in-out infinite;\\n\\t\\tanimation-delay: 5s;\\n\\t}\\n\\t.anim-float-badge {\\n\\t\\tanimation: float-up 15s ease-in-out infinite;\\n\\t}\\n\\t/* prettier-ignore */\\n\\t@keyframes float-up {\\n\\t\\t0% { transform: translateY(0px); }\\n\\t\\t50% { transform: translateY(-20px); }\\n\\t\\t100% { transform: translateY(0px); }\\n\\t}\\n\\t/* prettier-ignore */\\n\\t@keyframes float-down {\\n\\t\\t0% { transform: translateY(0px); }\\n\\t\\t50% { transform: translateY(20px); }\\n\\t\\t100% { transform: translateY(0px); }\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAgFC,gCAAmB,CAClB,SAAS,CAAE,sBAAQ,CAAC,GAAG,CAAC,WAAW,CAAC,QACrC,CACA,kCAAqB,CACpB,SAAS,CAAE,wBAAU,CAAC,GAAG,CAAC,WAAW,CAAC,QACvC,CACA,gCAAmB,CAClB,SAAS,CAAE,sBAAQ,CAAC,GAAG,CAAC,WAAW,CAAC,QAAQ,CAC5C,eAAe,CAAE,EAClB,CACA,+BAAkB,CACjB,SAAS,CAAE,wBAAU,CAAC,GAAG,CAAC,WAAW,CAAC,QACvC,CACA,8BAAiB,CAChB,SAAS,CAAE,sBAAQ,CAAC,GAAG,CAAC,WAAW,CAAC,QACrC,CACA,sCAAyB,CACxB,SAAS,CAAE,wBAAU,CAAC,GAAG,CAAC,WAAW,CAAC,QAAQ,CAC9C,eAAe,CAAE,EAClB,CACA,gCAAmB,CAClB,SAAS,CAAE,sBAAQ,CAAC,GAAG,CAAC,WAAW,CAAC,QACrC,CACA,gCAAmB,CAClB,SAAS,CAAE,wBAAU,CAAC,GAAG,CAAC,WAAW,CAAC,QAAQ,CAC9C,eAAe,CAAE,EAClB,CACA,+BAAkB,CACjB,SAAS,CAAE,sBAAQ,CAAC,GAAG,CAAC,WAAW,CAAC,QACrC,CAEA,WAAW,sBAAS,CACnB,EAAG,CAAE,SAAS,CAAE,WAAW,GAAG,CAAG,CACjC,GAAI,CAAE,SAAS,CAAE,WAAW,KAAK,CAAG,CACpC,IAAK,CAAE,SAAS,CAAE,WAAW,GAAG,CAAG,CACpC,CAEA,WAAW,wBAAW,CACrB,EAAG,CAAE,SAAS,CAAE,WAAW,GAAG,CAAG,CACjC,GAAI,CAAE,SAAS,CAAE,WAAW,IAAI,CAAG,CACnC,IAAK,CAAE,SAAS,CAAE,WAAW,GAAG,CAAG,CACpC"}`
};
const HomeHeroComponents = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value = 0;
  let demoSlideToggle = true;
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = ` <div class="aspect-video relative"> <div class="anim-float-avatar absolute z-[1] top-[32%] left-[40%] svelte-dg9myt">${validate_component(Avatar, "Avatar").$$render(
      $$result,
      {
        src: getImageLink({ id: "YOErFW8AfkI", w: 128, h: 128 }),
        width: "w-32",
        shadow: "shadow-xl"
      },
      {},
      {}
    )}</div>  <div class="anim-float-progress anim-delay-200 absolute z-[1] top-[0%] left-[10%] svelte-dg9myt"><div class="card variant-glass p-4">${validate_component(ProgressRadial, "ProgressRadial").$$render(
      $$result,
      {
        width: "w-20",
        stroke: 150,
        meter: "stroke-primary-500",
        track: "stroke-primary-500/30"
      },
      {},
      {}
    )}</div></div>  <div class="anim-float-search anim-delay-200 absolute z-[1] top-[-12%] left-[35%] svelte-dg9myt" data-svelte-h="svelte-1ngm2hv"><label for="demo-search"><span>Search</span> <input class="input" type="search" name="demo-search" placeholder="Search..."></label></div>  <div class="anim-float-radio absolute z-[1] top-[20%] left-[70%] svelte-dg9myt">${validate_component(RadioGroup, "RadioGroup").$$render($$result, { active: "variant-filled-secondary" }, {}, {
      default: () => {
        return `${validate_component(RadioItem, "RadioItem").$$render(
          $$result,
          { name: "justify", value: 0, group: value },
          {
            group: ($$value) => {
              value = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Friendly`;
            }
          }
        )} ${validate_component(RadioItem, "RadioItem").$$render(
          $$result,
          { name: "justify", value: 1, group: value },
          {
            group: ($$value) => {
              value = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Adaptive`;
            }
          }
        )} ${validate_component(RadioItem, "RadioItem").$$render(
          $$result,
          { name: "justify", value: 2, group: value },
          {
            group: ($$value) => {
              value = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Customizable`;
            }
          }
        )}`;
      }
    })}</div>  <div class="anim-float-card absolute z-[1] top-[60%] left-[65%] svelte-dg9myt"><a class="block card card-hover p-4 space-y-2" href="https://twitter.com/SkeletonUI" target="_blank" rel="noreferrer"><div class="flex items-center gap-4">${validate_component(Avatar, "Avatar").$$render(
      $$result,
      {
        src: "https://pbs.twimg.com/profile_images/1587479781544759297/TINbbJLC_400x400.png",
        width: "w-16"
      },
      {},
      {}
    )} <div data-svelte-h="svelte-12kwtq0"><p class="font-bold">Skeleton</p> <small class="opacity-50">@SkeletonUI</small></div></div> <p class="whitespace-nowrap" data-svelte-h="svelte-13ostcx">UI toolkit for Svelte and Tailwind.</p> <div class="flex just gap-4" data-svelte-h="svelte-1bmqzc4"><small><strong>50</strong> <span class="opacity-50">Following</span></small> <small><strong>500</strong> <span class="opacity-50">Followers</span></small></div></a></div>  <div class="anim-float-light-switch anim-delay-200 absolute z-[1] top-[98%] left-[45%] svelte-dg9myt">${validate_component(LightSwitch, "LightSwitch").$$render($$result, {}, {}, {})}</div>  <div class="anim-float-button absolute z-[1] top-[78%] left-[15%] svelte-dg9myt" data-svelte-h="svelte-1r0ez66"><button class="btn variant-glass-secondary"><span>Design</span> <i class="fa-solid fa-spa"></i></button></div>  <div class="anim-float-toggle anim-delay-200 absolute z-[1] top-[55%] left-[5%] svelte-dg9myt">${validate_component(SlideToggle, "SlideToggle").$$render(
      $$result,
      {
        name: "demo-toggle",
        active: "bg-primary-500",
        checked: demoSlideToggle
      },
      {
        checked: ($$value) => {
          demoSlideToggle = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>  <div class="anim-float-badge absolute z-[1] top-[45%] left-[25%] svelte-dg9myt" data-svelte-h="svelte-135nnc7"><span class="badge-icon variant-filled"><i class="fa-solid fa-skull"></i></span></div>  <div class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-0" data-svelte-h="svelte-vnbh7h"><div class="w-96 aspect-square border-2 border-black/5 dark:border-white/5 rounded-full flex justify-center items-center"><div class="w-[240px] aspect-square border-2 border-black/5 dark:border-white/5 rounded-full flex justify-center items-center"></div></div></div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
const HomeHero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-10 items-center"> <div class="flex flex-col items-center xl:items-start text-center xl:text-left space-y-4">${validate_component(DocsLogoHero, "DocsLogoHero").$$render($$result, {}, {}, {})} <h1 class="h1 !text-5xl md:!text-6xl max-w-[600px]" data-svelte-h="svelte-e9fnb3">The UI toolkit for Svelte and Tailwind.</h1> <p class="!text-xl max-w-[475px]" data-svelte-h="svelte-1gplojr">Skeleton allows you to create adaptive and accessible interfaces for web apps of any shape or size.</p> <div class="flex gap-4" data-svelte-h="svelte-3f7cod"><a href="/docs/get-started" class="btn variant-filled-primary"><span>Get Started</span> <i class="fa-solid fa-arrow-right-long"></i></a> <a href="/docs/introduction" class="btn variant-soft-primary">Learn More</a></div></div>  <div class="hidden md:inline-block w-full max-w-[650px] mx-auto mt-20">${validate_component(HomeHeroComponents, "HomeHeroComponents").$$render($$result, {}, {}, {})}</div></div>`;
});
const HomePlayground = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="card variant-soft-primary p-4 md:py-10 max-w-5xl mx-auto text-center flex flex-col md:flex-row justify-center items-center gap-4" data-svelte-h="svelte-79l5to"><p class="!text-xl">Try Skeleton live in your browser.</p> <a class="btn variant-filled" href="https://stackblitz.com/fork/github/skeletonlabs/repl/tree/main/welcome" target="_blank" rel="noreferrer"><i class="fa-solid fa-bolt"></i> <span>Open in StackBlitz</span></a></div>`;
});
const HomeSponsors = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-10 place-items-center"> <div class="grid grid-cols-2 gap-4 md:gap-10"> <a href="https://www.brainandbonesllc.com/" target="_blank" rel="noreferrer" class="max-h-[180px]">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      src: "https://pbs.twimg.com/profile_images/1504272980687441922/pkVimygY_200x200.png",
      width: "w-full max-w-[180px]",
      background: "bg-neutral-900",
      shadow: "shadow-xl"
    },
    {},
    {}
  )}</a> <div class="text-xs text-center card variant-filled-primary p-2 whitespace-nowrap shadow-xl" data-popup="popupBrainBones" data-svelte-h="svelte-1lklznc"><p class="font-bold">Premium Sponsor</p> <p>Brain &amp; Bones</p>  <div class="arrow variant-filled-primary"></div></div>  <a href="https://lukehagar.com/" target="_blank" rel="noreferrer" class="max-h-[180px]">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      src: "https://i.imgur.com/u8sOah2.png",
      width: "w-full max-w-[180px]",
      shadow: "shadow-xl"
    },
    {},
    {}
  )}</a> <div class="text-xs text-center card variant-filled-primary p-2 whitespace-nowrap shadow-xl" data-popup="popupLukeHagar" data-svelte-h="svelte-12fadk8"><p class="font-bold">Premium Sponsor</p> <p>Luke Hagar</p>  <div class="arrow variant-filled-primary"></div></div></div>  <div class="space-y-4 text-center lg:text-left" data-svelte-h="svelte-1jwo320"><h2 class="h2">Help Support Skeleton.</h2> <p class="max-w-[480px]">Skeleton is an open source project that survives in part through your support. Consider becoming a sponsor through the following
			services. For larger contributions please <a class="anchor" href="mailto:admin@skeleton.dev">contact us</a>.</p> <div class="flex justify-center lg:justify-start gap-3"><a class="btn variant-filled" href="https://ko-fi.com/skeletonlabs" target="_blank" rel="noreferrer">Ko-Fi</a> <a class="btn variant-filled" href="https://github.com/sponsors/skeletonlabs" target="_blank" rel="noreferrer">GitHub</a> <a class="btn variant-filled" href="https://patreon.com/user?u=83786276" target="_blank" rel="noreferrer">Patreon</a></div></div></div>`;
});
const HomeStats = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col lg:flex-row justify-center items-center gap-10" data-svelte-h="svelte-1ewb32g"><div class="space-y-1"><span class="block font-heading-token text-8xl font-bold">60k+</span> <p class="block opacity-50">Monthly Downloads</p></div>  <div class="border-t lg:border-t-0 lg:border-l border-surface-500/50 w-20 lg:w-1 lg:h-20"></div>  <div class="space-y-1"><span class="block font-heading-token text-8xl font-bold">3.5k+</span> <p class="block opacity-50">GitHub Stars</p></div>  <div class="border-t lg:border-t-0 lg:border-l border-surface-500/50 w-20 lg:w-1 lg:h-20"></div>  <div class="space-y-1"><span class="block font-heading-token text-8xl font-bold">1.5k+</span> <p class="block opacity-50">Discord Members</p></div></div>`;
});
const HomeSvelteKit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showcase = "components";
  const imgPlaceholder = `${getImageLink({ id: "YOErFW8AfkI", w: 200, h: 200 })}`;
  getModalStore();
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Apollo, "Apollo").$$render($$result, {}, {}, {})} ${validate_component(BlueNight, "BlueNight").$$render($$result, {}, {}, {})} ${validate_component(Emerald, "Emerald").$$render($$result, {}, {}, {})} ${validate_component(Noir, "Noir").$$render($$result, {}, {}, {})} <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-10 items-start"> <div class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1fdvui6">Designed for Svelte and SvelteKit.</h2>  <p data-svelte-h="svelte-7xodzc">Skeleton integrates directly with <a class="anchor" href="https://svelte.dev/" target="_blank" rel="noreferrer">Svelte</a> and <a class="anchor" href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit&#39;s</a> best features, including components, stores, actions, and more. Offering
			interactive components, image filters, and much more.</p>  ${validate_component(ListBox, "ListBox").$$render(
      $$result,
      {
        active: "variant-filled",
        hover: "hover:variant-soft",
        rounded: "rounded-container-token",
        padding: "!p-4"
      },
      {},
      {
        default: () => {
          return `${validate_component(ListBoxItem, "ListBoxItem").$$render(
            $$result,
            {
              name: "showcase",
              value: "components",
              group: showcase
            },
            {
              group: ($$value) => {
                showcase = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `<div class="space-y-2" data-svelte-h="svelte-l4bbbj"><h3 class="h3">Components</h3> <p class="!text-sm">Interactive and customizable components.</p></div>`;
              }
            }
          )} ${validate_component(ListBoxItem, "ListBoxItem").$$render(
            $$result,
            {
              name: "showcase",
              value: "actions",
              group: showcase
            },
            {
              group: ($$value) => {
                showcase = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `<div class="space-y-2" data-svelte-h="svelte-odnnxu"><h3 class="h3">Actions</h3> <p class="!text-sm">Dynamic actions for filters, tab focus, and more.</p></div>`;
              }
            }
          )} ${validate_component(ListBoxItem, "ListBoxItem").$$render(
            $$result,
            {
              name: "showcase",
              value: "utilities",
              group: showcase
            },
            {
              group: ($$value) => {
                showcase = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `<div class="space-y-2" data-svelte-h="svelte-153avhl"><h3 class="h3">Utilities</h3> <p class="!text-sm">Powerful utilities that extend even further.</p></div>`;
              }
            }
          )}`;
        }
      }
    )}</div>  <div class="col-span-2">${validate_component(DocsPreview, "DocsPreview").$$render(
      $$result,
      {
        label: showcase,
        regionPreview: "min-h-[320px]"
      },
      {},
      {
        preview: () => {
          return `${showcase === "components" ? ` ${validate_component(Accordion, "Accordion").$$render(
            $$result,
            {
              autocollapse: true,
              class: "card p-4 text-token"
            },
            {},
            {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { open: true }, {}, {
                  content: () => {
                    return ` <p data-svelte-h="svelte-r6qxx">While Halloween and Day of the Dead occur nearly in tandem and share similar customs (candy, face painting, and community gathering), the two are not related. Halloween has ancient Celtic roots, while Day of the Dead has its own origins that date back to the Indigenous people of Mexico and Central America.</p> `;
                  },
                  summary: () => {
                    return `<p class="font-bold" data-svelte-h="svelte-1qhrhut">What is Día de los Muertos?</p>`;
                  },
                  lead: () => {
                    return `<i class="fa-solid fa-skull text-xl w-6 text-center"></i>`;
                  }
                })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                  content: () => {
                    return ` <p data-svelte-h="svelte-mp8hmu">Roughly 3000 years ago, amongst the Aztec, Toltec, and Mayans, death and the dead were seen as a natural part of life that should be honored and celebrated, rather than mourned. In particular, the Nahua people of central Mexico believed the deceased traveled on a years-long journey to Chicunamictlán, the Land of the Dead. The living would provide supplies, such as food and water to aid them on the trek. This practice inspired the modern tradition of creating altars —known as ofrendas— at their homes, in addition to leaving offerings at the gravesites of loved ones.</p> `;
                  },
                  summary: () => {
                    return `<p class="font-bold" data-svelte-h="svelte-17bf5ws">When did it begin?</p>`;
                  },
                  lead: () => {
                    return `<i class="fa-solid fa-clock text-xl w-6 text-center"></i>`;
                  }
                })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                  content: () => {
                    return ` <p data-svelte-h="svelte-1vbd150">Once the Spanish colonized Mexico in the 16th century, their own Catholic views on the dead influenced Mexican customs. Día de los Muertos was originally celebrated in the summer months. The holiday came to fall on November 1 and November 2 to align with All Saints Day and All Souls Day.</p> `;
                  },
                  summary: () => {
                    return `<p class="font-bold" data-svelte-h="svelte-yl1zon">When is it celebrated?</p>`;
                  },
                  lead: () => {
                    return `<i class="fa-solid fa-calendar text-xl w-6 text-center"></i>`;
                  }
                })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                  content: () => {
                    return ` <p data-svelte-h="svelte-1uh5t5u">To beckon spirits back into the Land of the Living for the festivities, revelers create makeshift altars, or ofrendas, at their homes and at the gravesites of their deceased loved ones. Families gather at the site to eat, tell stories, and even clean the graves.</p> `;
                  },
                  summary: () => {
                    return `<p class="font-bold" data-svelte-h="svelte-1g1tnvd">What are ofrendas?</p>`;
                  },
                  lead: () => {
                    return `<i class="fa-solid fa-gift text-xl w-6 text-center"></i>`;
                  }
                })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                  content: () => {
                    return ` <p data-svelte-h="svelte-q9d68g"><a class="anchor" href="https://www.oprahdaily.com/life/a37259063/day-of-the-dead-facts-history/" target="_blank" rel="noreferrer">https://www.oprahdaily.com/life/a37259063/day-of-the-dead-facts-history/</a></p> `;
                  },
                  summary: () => {
                    return `<p class="font-bold" data-svelte-h="svelte-bt0shv">Source</p>`;
                  },
                  lead: () => {
                    return `<i class="fa-solid fa-file text-xl w-6 text-center"></i>`;
                  }
                })}`;
              }
            }
          )}` : `${showcase === "actions" ? `<section class="p-4 grid grid-cols-2 md:grid-cols-4 gap-4"><div class="flex flex-col items-center space-y-4 overflow-hidden"><img class="aspect-square w-full rounded-container-token"${add_attribute("src", imgPlaceholder, 0)} alt="example"> <span class="badge variant-soft" data-svelte-h="svelte-qlvry">Emerald</span></div> <div class="flex flex-col items-center space-y-4 overflow-hidden"><img class="aspect-square w-full rounded-container-token"${add_attribute("src", imgPlaceholder, 0)} alt="example"> <span class="badge variant-soft" data-svelte-h="svelte-r3s4p8">BlueNight</span></div> <div class="flex flex-col items-center space-y-4 overflow-hidden"><img class="aspect-square w-full rounded-container-token"${add_attribute("src", imgPlaceholder, 0)} alt="example"> <span class="badge variant-soft" data-svelte-h="svelte-1oj6aov">Apollo</span></div> <div class="flex flex-col items-center space-y-4 overflow-hidden"><img class="aspect-square w-full rounded-container-token"${add_attribute("src", imgPlaceholder, 0)} alt="example"> <span class="badge variant-soft" data-svelte-h="svelte-1gcqa46">Noir</span></div></section>` : `${showcase === "utilities" ? `<button class="btn variant-filled" data-svelte-h="svelte-1ry1qhs">Trigger Modal</button>` : ``}`}`}`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const HomeTailwind = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showcase = "elements";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-10 items-start"> <div class="col-span-2">${validate_component(DocsPreview, "DocsPreview").$$render(
      $$result,
      {
        label: showcase.replace("-", " "),
        regionPreview: "min-h-[400px]"
      },
      {},
      {
        preview: () => {
          return `${showcase === "elements" ? `<div class="card shadow-xl overflow-hidden max-w-[400px] text-token" data-svelte-h="svelte-juffdp"><header><img${add_attribute("src", getImageLink({ id: "vjUokUWbFOs", w: 400, h: 175 }), 0)} class="bg-black/50 w-full aspect-[21/9]" alt="Post"></header> <div class="p-4 space-y-4"><h6 class="h6">Announcements</h6> <h3 class="h3">Skeleton is Awesome!</h3> <article><p class="opacity-75">This showcases Skeleton&#39;s Card, Typography, Chips, and Divider elements.</p></article></div> <hr class="opacity-50"> <footer class="p-4 flex justify-center items-center space-x-4"> <div class="flex justify-center space-x-2"><span class="chip variant-soft hover:variant-filled"><i class="fa-solid fa-heart"></i> <span>Like</span></span> <span class="chip variant-soft hover:variant-filled"><i class="fa-solid fa-paperclip"></i> <span>Save</span></span> <span class="chip variant-soft hover:variant-filled"><i class="fa-solid fa-share"></i> <span>Share</span></span></div></footer></div>` : `${showcase === "colors" ? `<div class="grid grid-cols-10 gap-2" data-svelte-h="svelte-6tgjmk"> <div class="h-6 sm:h-8 aspect-square bg-primary-50"> </div> <div class="h-6 sm:h-8 aspect-square bg-primary-100"> </div> <div class="h-6 sm:h-8 aspect-square bg-primary-200"> </div> <div class="h-6 sm:h-8 aspect-square bg-primary-300"> </div> <div class="h-6 sm:h-8 aspect-square bg-primary-400"> </div> <div class="h-6 sm:h-8 aspect-square bg-primary-500"> </div> <div class="h-6 sm:h-8 aspect-square bg-primary-600"> </div> <div class="h-6 sm:h-8 aspect-square bg-primary-700"> </div> <div class="h-6 sm:h-8 aspect-square bg-primary-800"> </div> <div class="h-6 sm:h-8 aspect-square bg-primary-900"> </div>  <div class="h-6 sm:h-8 aspect-square bg-secondary-50"> </div> <div class="h-6 sm:h-8 aspect-square bg-secondary-100"> </div> <div class="h-6 sm:h-8 aspect-square bg-secondary-200"> </div> <div class="h-6 sm:h-8 aspect-square bg-secondary-300"> </div> <div class="h-6 sm:h-8 aspect-square bg-secondary-400"> </div> <div class="h-6 sm:h-8 aspect-square bg-secondary-500"> </div> <div class="h-6 sm:h-8 aspect-square bg-secondary-600"> </div> <div class="h-6 sm:h-8 aspect-square bg-secondary-700"> </div> <div class="h-6 sm:h-8 aspect-square bg-secondary-800"> </div> <div class="h-6 sm:h-8 aspect-square bg-secondary-900"> </div>  <div class="h-6 sm:h-8 aspect-square bg-tertiary-50"> </div> <div class="h-6 sm:h-8 aspect-square bg-tertiary-100"> </div> <div class="h-6 sm:h-8 aspect-square bg-tertiary-200"> </div> <div class="h-6 sm:h-8 aspect-square bg-tertiary-300"> </div> <div class="h-6 sm:h-8 aspect-square bg-tertiary-400"> </div> <div class="h-6 sm:h-8 aspect-square bg-tertiary-500"> </div> <div class="h-6 sm:h-8 aspect-square bg-tertiary-600"> </div> <div class="h-6 sm:h-8 aspect-square bg-tertiary-700"> </div> <div class="h-6 sm:h-8 aspect-square bg-tertiary-800"> </div> <div class="h-6 sm:h-8 aspect-square bg-tertiary-900"> </div>  <div class="h-6 sm:h-8 aspect-square bg-success-50"> </div> <div class="h-6 sm:h-8 aspect-square bg-success-100"> </div> <div class="h-6 sm:h-8 aspect-square bg-success-200"> </div> <div class="h-6 sm:h-8 aspect-square bg-success-300"> </div> <div class="h-6 sm:h-8 aspect-square bg-success-400"> </div> <div class="h-6 sm:h-8 aspect-square bg-success-500"> </div> <div class="h-6 sm:h-8 aspect-square bg-success-600"> </div> <div class="h-6 sm:h-8 aspect-square bg-success-700"> </div> <div class="h-6 sm:h-8 aspect-square bg-success-800"> </div> <div class="h-6 sm:h-8 aspect-square bg-success-900"> </div>  <div class="h-6 sm:h-8 aspect-square bg-warning-50"> </div> <div class="h-6 sm:h-8 aspect-square bg-warning-100"> </div> <div class="h-6 sm:h-8 aspect-square bg-warning-200"> </div> <div class="h-6 sm:h-8 aspect-square bg-warning-300"> </div> <div class="h-6 sm:h-8 aspect-square bg-warning-400"> </div> <div class="h-6 sm:h-8 aspect-square bg-warning-500"> </div> <div class="h-6 sm:h-8 aspect-square bg-warning-600"> </div> <div class="h-6 sm:h-8 aspect-square bg-warning-700"> </div> <div class="h-6 sm:h-8 aspect-square bg-warning-800"> </div> <div class="h-6 sm:h-8 aspect-square bg-warning-900"> </div>  <div class="h-6 sm:h-8 aspect-square bg-error-50"> </div> <div class="h-6 sm:h-8 aspect-square bg-error-100"> </div> <div class="h-6 sm:h-8 aspect-square bg-error-200"> </div> <div class="h-6 sm:h-8 aspect-square bg-error-300"> </div> <div class="h-6 sm:h-8 aspect-square bg-error-400"> </div> <div class="h-6 sm:h-8 aspect-square bg-error-500"> </div> <div class="h-6 sm:h-8 aspect-square bg-error-600"> </div> <div class="h-6 sm:h-8 aspect-square bg-error-700"> </div> <div class="h-6 sm:h-8 aspect-square bg-error-800"> </div> <div class="h-6 sm:h-8 aspect-square bg-error-900"> </div>  <div class="h-6 sm:h-8 aspect-square bg-surface-50"> </div> <div class="h-6 sm:h-8 aspect-square bg-surface-100"> </div> <div class="h-6 sm:h-8 aspect-square bg-surface-200"> </div> <div class="h-6 sm:h-8 aspect-square bg-surface-300"> </div> <div class="h-6 sm:h-8 aspect-square bg-surface-400"> </div> <div class="h-6 sm:h-8 aspect-square bg-surface-500"> </div> <div class="h-6 sm:h-8 aspect-square bg-surface-600"> </div> <div class="h-6 sm:h-8 aspect-square bg-surface-700"> </div> <div class="h-6 sm:h-8 aspect-square bg-surface-800"> </div> <div class="h-6 sm:h-8 aspect-square bg-surface-900"> </div></div>` : `${showcase === "dark-mode" ? `${validate_component(LightSwitch, "LightSwitch").$$render($$result, { width: "w-20", height: "h-10" }, {}, {})}` : ``}`}`}`;
        }
      }
    )}</div>  <div class="space-y-4"><h2 class="h2" data-svelte-h="svelte-rx7nuy">Enhanced with Tailwind CSS.</h2>  <p data-svelte-h="svelte-78yttd">Skeleton has been designed from the ground up to take advantage of <a class="anchor" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind&#39;s</a> unique utility class approach to CSS styling, allowing you to create or extend your own personal design system.</p>  ${validate_component(ListBox, "ListBox").$$render(
      $$result,
      {
        active: "variant-filled",
        hover: "hover:variant-soft",
        rounded: "rounded-container-token",
        padding: "!p-4"
      },
      {},
      {
        default: () => {
          return `${validate_component(ListBoxItem, "ListBoxItem").$$render(
            $$result,
            {
              name: "showcase",
              value: "elements",
              group: showcase
            },
            {
              group: ($$value) => {
                showcase = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `<div class="space-y-2" data-svelte-h="svelte-1lrz7bi"><h3 class="h3">Elements</h3> <p class="!text-sm">Common UI elements via HTML + CSS.</p></div>`;
              }
            }
          )} ${validate_component(ListBoxItem, "ListBoxItem").$$render(
            $$result,
            {
              name: "showcase",
              value: "colors",
              group: showcase
            },
            {
              group: ($$value) => {
                showcase = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `<div class="space-y-2" data-svelte-h="svelte-lm9qe4"><h3 class="h3">Theme Colors</h3> <p class="!text-sm">Includes an extensive palette of colors.</p></div>`;
              }
            }
          )} ${validate_component(ListBoxItem, "ListBoxItem").$$render(
            $$result,
            {
              name: "showcase",
              value: "dark-mode",
              group: showcase
            },
            {
              group: ($$value) => {
                showcase = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `<div class="space-y-2" data-svelte-h="svelte-1fmpvmm"><h3 class="h3">Dark Mode</h3> <p class="!text-sm">Toggle dark mode with the flip of a switch.</p></div>`;
              }
            }
          )}`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const HomeTheming = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let theme = "simple";
  const themeStyles = {
    simple: {
      base: "variant-soft-primary font-sans rounded-container-token",
      header: "bg-primary-500 p-4 grid grid-cols-3 gap-8 items-center rounded-tl-container-token rounded-tr-container-token",
      src: getImageLink({ id: "3vj6GJ_lTa8", w: 200, h: 200 }),
      img: "bg-black w-full aspect-square rounded-full",
      text1: "text-on-primary-token text-lg opacity-75",
      text2: "text-on-primary-token font-bold text-xl sm:text-3xl",
      text3: "text-on-primary-token text-lg sm:text-2xl",
      progressTrack: "bg-primary-400",
      progressMeter: "bg-white",
      footer: "p-10 grid grid-cols-5 gap-10 place-items-center rounded-tl-3xl rounded-tr-3xl",
      button: "btn-icon"
    },
    elegant: {
      base: "bg-white text-black font-serif shadow",
      header: "bg-neutral-100 p-4 grid grid-cols-3 gap-8 items-center",
      src: getImageLink({ id: "C5NOq1BKlAk", w: 200, h: 200 }),
      img: "bg-black bg-black/50 w-full aspect-square scale-110 transition-transform",
      text1: "text-lg opacity-50",
      text2: "text-xl sm:text-3xl",
      text3: "text-lg sm:text-2xl",
      progressTrack: "bg-black/5",
      progressMeter: "bg-black",
      footer: "p-10 grid grid-cols-5 gap-10 place-items-center",
      button: "btn-icon rounded-none text-black ring-[1px] ring-black/5"
    },
    playful: {
      base: "bg-blue-700 text-white font-sans rounded-3xl shadow-xl",
      header: "bg-blue-800 p-4 grid grid-cols-3 gap-8 items-center rounded-tl-3xl rounded-tr-3xl",
      src: getImageLink({ id: "wzj86-5JVcM", w: 200, h: 200 }),
      img: "bg-black w-full aspect-square rounded-3xl scale-110 -translate-x-4 -translate-y-4 transition-transform",
      text1: "text-lg text-amber-300",
      text2: "font-bold text-xl sm:text-3xl",
      text3: "text-lg sm:text-2xl",
      progressTrack: "bg-black/5",
      progressMeter: "bg-white",
      footer: "p-10 grid grid-cols-5 gap-10 place-items-center rounded-tl-3xl rounded-tr-3xl",
      button: "btn-icon bg-amber-300 text-blue-900"
    },
    brutalist: {
      base: "bg-black text-white font-mono overflow-hidden",
      header: "bg-white text-black p-4 grid grid-cols-3 gap-8 items-center",
      src: getImageLink({ id: "hTv8aaPziOQ", w: 200, h: 200 }),
      img: "bg-black w-full aspect-square transition-transform border-r-4 border-b-4 border-teal-300",
      text1: "text-lg text-teal-300",
      text2: "font-bold text-xl sm:text-3xl",
      text3: "italic text-lg sm:text-2xl",
      progressTrack: "bg-teal-300/75",
      progressMeter: "bg-teal-300",
      footer: "p-10 grid grid-cols-5 gap-10 place-items-center",
      button: "btn-icon rounded-none bg-teal-300 text-black ring ring-white"
    }
  };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10 items-center"> <div class="space-y-4 md:space-y-10"><div class="max-w-[640px] mx-auto space-y-4" data-svelte-h="svelte-1hr045k"><h2 class="h2">Adaptive Theming.</h2>  <p>Use Skeleton&#39;s <a class="anchor" href="/docs/tokens">design token system</a>, <a class="anchor" href="/docs/variants">variant styles</a>, and Tailwind utility classes to create custom components that match your overall theme and aesthetic.</p></div>  ${validate_component(TabGroup, "TabGroup").$$render(
      $$result,
      {
        active: "variant-filled",
        hover: "hover:variant-soft",
        flex: "flex-1 lg:flex-none",
        rounded: "rounded-container-token",
        border: "",
        regionList: "space-x-1",
        padding: "p-2 sm:p-4",
        class: "max-w-[640px] mx-auto"
      },
      {},
      {
        default: () => {
          return `${validate_component(Tab, "Tab").$$render(
            $$result,
            {
              name: "theme",
              value: "simple",
              class: "space-y-4 w-24",
              group: theme
            },
            {
              group: ($$value) => {
                theme = $$value;
                $$settled = false;
              }
            },
            {
              lead: () => {
                return `<i class="fa-solid fa-square text-2xl"></i>`;
              },
              default: () => {
                return `Simple`;
              }
            }
          )} ${validate_component(Tab, "Tab").$$render(
            $$result,
            {
              name: "theme",
              value: "elegant",
              class: "space-y-4 w-24",
              group: theme
            },
            {
              group: ($$value) => {
                theme = $$value;
                $$settled = false;
              }
            },
            {
              lead: () => {
                return `<i class="fa-solid fa-certificate text-2xl"></i>`;
              },
              default: () => {
                return `Elegant`;
              }
            }
          )} ${validate_component(Tab, "Tab").$$render(
            $$result,
            {
              name: "theme",
              value: "playful",
              class: "space-y-4 w-24",
              group: theme
            },
            {
              group: ($$value) => {
                theme = $$value;
                $$settled = false;
              }
            },
            {
              lead: () => {
                return `<i class="fa-solid fa-shapes text-2xl"></i>`;
              },
              default: () => {
                return `Playful`;
              }
            }
          )} ${validate_component(Tab, "Tab").$$render(
            $$result,
            {
              name: "theme",
              value: "brutalist",
              class: "space-y-4 w-24",
              group: theme
            },
            {
              group: ($$value) => {
                theme = $$value;
                $$settled = false;
              }
            },
            {
              lead: () => {
                return `<i class="fa-solid fa-diamond text-2xl"></i>`;
              },
              default: () => {
                return `Brutalist`;
              }
            }
          )}`;
        }
      }
    )}</div>  <div><div class="${"max-w-[640px] mx-auto transition ease-in-out duration-200 " + escape(themeStyles[theme].base, true)}"><header${add_attribute("class", themeStyles[theme].header, 0)}><img${add_attribute("src", themeStyles[theme].src, 0)}${add_attribute("class", themeStyles[theme].img, 0)} alt="Cover"> <div class="col-span-2 space-y-2"><div${add_attribute("class", themeStyles[theme].text1, 0)}>Mood Booster</div> <div${add_attribute("class", themeStyles[theme].text2, 0)}>Have It Your Way</div> <div${add_attribute("class", themeStyles[theme].text3, 0)}>The Skeleton Crew</div></div></header> ${validate_component(ProgressBar, "ProgressBar").$$render(
      $$result,
      {
        value: 75,
        max: 100,
        track: themeStyles[theme].progressTrack,
        meter: themeStyles[theme].progressMeter,
        rounded: "rounded-none"
      },
      {},
      {}
    )} <footer${add_attribute("class", themeStyles[theme].footer, 0)}><button${add_attribute("class", themeStyles[theme].button, 0)}><i class="fa-solid fa-shuffle text-2xl"></i></button> <button${add_attribute("class", themeStyles[theme].button, 0)}><i class="fa-solid fa-backward-fast text-2xl"></i></button> <button${add_attribute("class", themeStyles[theme].button, 0)}><i class="fa-solid fa-pause text-2xl"></i></button> <button${add_attribute("class", themeStyles[theme].button, 0)}><i class="fa-solid fa-forward-fast text-2xl"></i></button> <button${add_attribute("class", themeStyles[theme].button, 0)}><i class="fa-solid fa-heart text-2xl"></i></button></footer></div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const DocsLogoLabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg class="h-[20px] sm:h-[24px] md:h-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 325 40"><g fill="none"><path class="fill-white" d="M37.748 0c.211 0 .41.049.597.146.186.097.28.284.28.56a.4.4 0 0 1-.013.097.4.4 0 0 0-.012.098l-.876 8.445a842.583 842.583 0 0 1-.353 3.456 1805.483 1805.483 0 0 1-.61 5.773l-.06.555c-.097.908-.178 1.655-.243 2.239l1.68-1.85 2.726-3.188c.34-.39.673-.779.997-1.168.325-.39.617-.735.877-1.035.26-.3.47-.551.632-.754.163-.203.26-.32.292-.353l9.784-.682a.497.497 0 0 1 .158-.024h.159c.275 0 .413.073.413.22 0 .113-.17.364-.51.754l-7.618 8.518c-.341.373-.743.807-1.205 1.302-.463.495-.978 1.042-1.546 1.643l3.554 4.235 6.133 6.595a.446.446 0 0 0 .219.183c.097.04.19.077.28.11.089.032.17.068.243.109.073.04.11.101.11.182 0 .065-.012.114-.037.146a1.516 1.516 0 0 1-.231.195 7.512 7.512 0 0 1-.767.487 45.894 45.894 0 0 1-2.835 1.497 35.6 35.6 0 0 1-1.606.73c-.52.219-.998.397-1.436.535-.438.138-.78.207-1.023.207-.194 0-.385-.049-.571-.146-.187-.097-.394-.276-.621-.535a52.5 52.5 0 0 1-1.156-1.4 149.75 149.75 0 0 1-1.497-1.898 235.42 235.42 0 0 1-1.643-2.142 5278.108 5278.108 0 0 0-2.993-3.943 42.878 42.878 0 0 1-.962-1.302.953.953 0 0 1-.243.183c-.081.04-.158.093-.231.158a.853.853 0 0 0-.183.231.798.798 0 0 0-.073.377c0 .065-.016.248-.048.548-.033.3-.07.657-.11 1.07-.04.415-.085.857-.134 1.327s-.093.913-.134 1.327c-.04.413-.077.77-.11 1.07a7.85 7.85 0 0 0-.048.548c0 .114.004.207.012.28.008.073.012.142.012.207 0 .178-.06.312-.182.401-.122.09-.418.2-.888.329l-6.377 2.069a26.77 26.77 0 0 1-.706.243 2.687 2.687 0 0 1-.852.146 1.05 1.05 0 0 1-.596-.17c-.17-.114-.255-.325-.255-.633l3.066-35.071c0-.081-.008-.158-.024-.231a1.063 1.063 0 0 1-.025-.231c0-.146.061-.28.183-.402s.402-.24.84-.353L36.19.39c.178-.033.413-.106.705-.22.292-.113.576-.17.852-.17Zm57.17.462c.179 0 .268.082.268.244L92.022 35.46v.414a.427.427 0 0 1-.17.353c-.114.09-.382.19-.804.304l-6.376 2.337a5.985 5.985 0 0 1-.706.255c-.292.09-.576.134-.852.134a1.05 1.05 0 0 1-.596-.17c-.17-.114-.256-.308-.256-.584v-.146c.13-1.64.256-3.241.378-4.807a1021.263 1021.263 0 0 1 .84-10.161c.162-1.866.34-3.91.535-6.133s.353-4.422.474-6.596c.122-2.174.256-4.405.402-6.693.032-.535.085-.904.158-1.107.073-.203.256-.337.548-.402 1.509-.276 3.022-.556 4.539-.84A41.16 41.16 0 0 0 94.699.487a.738.738 0 0 1 .22-.025ZM14.213 2.117c.26 0 .65.029 1.169.086.519.056 1.09.15 1.715.28.625.13 1.262.308 1.911.535.649.227 1.241.52 1.777.876.178.13.32.26.426.39.105.13.174.332.206.608a162.7 162.7 0 0 1 .195 3.882c.049 1.274.114 2.624.195 4.052 0 .276-.057.458-.17.548a.688.688 0 0 1-.439.134c-.178 0-.316-.05-.413-.146-.47-.471-.958-.933-1.46-1.388a11.643 11.643 0 0 0-1.583-1.204 8.193 8.193 0 0 0-1.764-.84 6.315 6.315 0 0 0-2.032-.316 8 8 0 0 0-1.315.109 3.762 3.762 0 0 0-1.192.402 2.347 2.347 0 0 0-.864.803c-.22.34-.329.77-.329 1.29 0 .551.07 1.03.207 1.436.138.405.483.787 1.035 1.144l5.84 3.967c1.072.762 1.94 1.52 2.605 2.275.665.755 1.184 1.505 1.557 2.251.374.747.63 1.481.767 2.203.138.722.207 1.432.207 2.13a9.162 9.162 0 0 1-.56 3.212 10.732 10.732 0 0 1-1.533 2.787 12.396 12.396 0 0 1-2.276 2.288 15.652 15.652 0 0 1-2.786 1.728 14.97 14.97 0 0 1-3.08 1.095 13.553 13.553 0 0 1-3.127.377c-.795 0-1.577-.012-2.348-.036-.77-.025-1.521-.09-2.251-.195a12.962 12.962 0 0 1-2.118-.487 8.512 8.512 0 0 1-1.947-.912l-.414-8.69a.108.108 0 0 0-.012-.048.108.108 0 0 1-.012-.048c0-.276.146-.414.438-.414.146 0 .308.073.487.219.876.827 1.85 1.484 2.92 1.971 1.071.487 2.24.73 3.505.73.34 0 .73-.036 1.168-.11a5.228 5.228 0 0 0 1.242-.364c.389-.17.718-.394.985-.67.268-.275.402-.624.402-1.046a2.4 2.4 0 0 0-.34-1.266 3.134 3.134 0 0 0-.901-.949c-.146-.097-.366-.26-.658-.487l-.997-.778a65.892 65.892 0 0 1-1.169-.937l-1.156-.95c-.365-.3-.693-.572-.985-.815-.292-.243-.511-.43-.658-.56-.957-.714-1.715-1.436-2.275-2.166A8.67 8.67 0 0 1 .73 17.815a9.839 9.839 0 0 1-.56-2.47 28.67 28.67 0 0 1-.121-2.714c0-1.427.34-2.782 1.022-4.064.681-1.282 1.643-2.397 2.884-3.346 1.241-.95 2.73-1.704 4.466-2.264 1.736-.56 3.667-.84 5.792-.84Zm54.834 8.567c1.541 0 2.94.288 4.198.864 1.258.576 2.337 1.323 3.237 2.24a9.976 9.976 0 0 1 2.081 3.078c.487 1.136.73 2.272.73 3.408 0 1.006-.308 2.016-.925 3.03-.616 1.014-1.48 1.926-2.592 2.738-1.111.81-2.446 1.468-4.003 1.971-1.558.503-3.27.755-5.136.755-.973 0-1.995-.098-3.066-.293.065.698.268 1.298.608 1.801.341.503.771.917 1.29 1.242.52.324 1.108.564 1.765.718a8.87 8.87 0 0 0 2.032.23c.779 0 1.53-.068 2.251-.206.722-.138 1.416-.32 2.081-.548a22.548 22.548 0 0 0 1.923-.754c.616-.276 1.2-.552 1.752-.828.146-.032.272-.06.377-.085.106-.024.207-.036.305-.036l-.013.39c-.008.259-.012.624-.012 1.094 0 .47-.004 1.039-.012 1.704s-.02 1.404-.036 2.215a.765.765 0 0 1 .097.243c.016.081.024.146.024.195 0 .195-.178.406-.535.633a9.655 9.655 0 0 1-1.4.705c-.576.244-1.233.48-1.97.706-.74.227-1.49.434-2.252.62-.763.187-1.501.334-2.215.439-.714.105-1.339.158-1.874.158a14.6 14.6 0 0 1-5.099-.912 13.595 13.595 0 0 1-4.38-2.617c-1.274-1.136-2.292-2.515-3.055-4.137-.763-1.623-1.144-3.448-1.144-5.476 0-2.126.365-4.118 1.095-5.975.73-1.858 1.757-3.477 3.079-4.856 1.322-1.379 2.9-2.466 4.734-3.261 1.833-.795 3.853-1.193 6.06-1.193Zm42.932 0c1.542 0 2.941.288 4.198.864 1.258.576 2.337 1.323 3.237 2.24a9.976 9.976 0 0 1 2.081 3.078c.487 1.136.73 2.272.73 3.408 0 1.006-.308 2.016-.924 3.03-.617 1.014-1.48 1.926-2.592 2.738-1.112.81-2.446 1.468-4.004 1.971-1.558.503-3.27.755-5.135.755-.974 0-1.996-.098-3.067-.293.065.698.268 1.298.609 1.801.34.503.77.917 1.29 1.242a5.807 5.807 0 0 0 1.764.718 8.87 8.87 0 0 0 2.032.23c.779 0 1.53-.068 2.251-.206a15.18 15.18 0 0 0 2.081-.548 22.548 22.548 0 0 0 1.923-.754 45.05 45.05 0 0 0 1.752-.828c.146-.032.272-.06.378-.085.105-.024.207-.036.304-.036l-.012.39c-.007.216-.011.505-.012.868v.226c0 .47-.005 1.039-.013 1.704s-.02 1.404-.036 2.215a.765.765 0 0 1 .097.243c.016.081.025.146.025.195 0 .195-.179.406-.536.633a9.655 9.655 0 0 1-1.4.705 20.25 20.25 0 0 1-1.97.706 39.86 39.86 0 0 1-2.252.62c-.763.187-1.5.334-2.215.439-.714.105-1.338.158-1.874.158a14.6 14.6 0 0 1-5.099-.912 13.595 13.595 0 0 1-4.38-2.617c-1.274-1.136-2.292-2.515-3.055-4.137-.762-1.623-1.144-3.448-1.144-5.476 0-2.126.365-4.118 1.096-5.975.73-1.858 1.756-3.477 3.078-4.856 1.323-1.379 2.9-2.466 4.734-3.261 1.833-.795 3.854-1.193 6.06-1.193Zm27.6-7.13c.194 0 .292.064.292.194v.049c-.082.892-.207 2.133-.378 3.723-.17 1.59-.36 3.392-.572 5.403h6.523a.63.63 0 0 1 .377.134c.122.09.183.24.183.45 0 .082-.098.374-.292.877a48.44 48.44 0 0 1-.828 1.971l-.876 1.972c-.114.243-.231.421-.353.535-.122.114-.369.187-.742.219h-4.527a380.718 380.718 0 0 0-.645 5.099 55.648 55.648 0 0 0-.377 4.758c0 .633.048 1.16.146 1.582.097.422.24.754.426.998.186.243.41.418.669.523.26.105.552.158.876.158a7.07 7.07 0 0 0 1.704-.231 14.837 14.837 0 0 0 1.85-.596 5.02 5.02 0 0 1 .498-.183c.138-.04.256-.06.353-.06.163 0 .272.072.329.218.057.146.113.402.17.767.057.365.142.856.256 1.472.113.617.3 1.396.56 2.337.016.081.028.15.036.207.008.057.012.11.012.158 0 .227-.085.39-.255.487-.17.097-.45.21-.84.34-.665.228-1.367.459-2.105.694a50.63 50.63 0 0 1-2.19.645c-.723.195-1.416.353-2.082.475a9.893 9.893 0 0 1-1.752.182c-2.71 0-4.685-.673-5.926-2.02-1.241-1.347-1.862-3.4-1.862-6.157 0-.47.016-.954.049-1.449.032-.494.073-1.01.121-1.545.163-1.623.305-3.16.426-4.612.122-1.452.248-2.844.377-4.174h-2.555c-.876 0-1.509-.036-1.898-.11-.39-.073-.584-.223-.584-.45 0-.065.08-.24.243-.523.162-.284.369-.625.62-1.022.252-.398.524-.824.816-1.278.292-.454.572-.88.84-1.278l.693-1.034c.195-.292.317-.47.365-.536h1.728a279.932 279.932 0 0 0 .572-5.184c.057-.551.11-.977.158-1.277.049-.3.102-.524.159-.67.056-.146.13-.239.219-.28.089-.04.206-.077.352-.109.73-.146 1.436-.28 2.118-.402a180.58 180.58 0 0 0 2.044-.377 43.798 43.798 0 0 0 4.284-1.046.253.253 0 0 0 .097-.012.253.253 0 0 1 .097-.013Zm19.762 6.644c3.099 0 5.736.353 7.91 1.058 2.174.706 3.943 1.667 5.305 2.884 1.363 1.217 2.353 2.653 2.97 4.308.616 1.655.925 3.432.925 5.33 0 2.418-.406 4.576-1.217 6.474-.812 1.899-1.919 3.505-3.322 4.82-1.404 1.313-3.043 2.315-4.917 3.005-1.874.69-3.874 1.034-6 1.034-2.287 0-4.295-.373-6.023-1.12-1.728-.746-3.176-1.74-4.344-2.98a12.278 12.278 0 0 1-2.629-4.284 14.66 14.66 0 0 1-.876-5.026c0-1.736.284-3.387.852-4.953a14.161 14.161 0 0 1 2.385-4.21 13.64 13.64 0 0 1 3.675-3.116c1.428-.835 3.002-1.399 4.722-1.691.26-.016.39-.073.39-.17 0-.179-.021-.345-.062-.5a1.61 1.61 0 0 1-.06-.401c0-.178.032-.3.097-.365a.303.303 0 0 1 .219-.097Zm31.956-.268c.13 0 .207.02.23.06a.358.358 0 0 1 .037.183 1.3 1.3 0 0 1-.012.146c-.008.065-.032.211-.073.438-.04.228-.097.572-.17 1.035-.073.462-.175 1.107-.304 1.935a25.223 25.223 0 0 1 3.151-1.57 21.36 21.36 0 0 1 2.775-.925 16.445 16.445 0 0 1 2.446-.438c.763-.073 1.476-.11 2.142-.11 2.287 0 3.95.694 4.989 2.081 1.038 1.388 1.558 3.468 1.558 6.243 0 .39-.008.791-.025 1.205-.016.413-.048.84-.097 1.277l-1.12 10.466a21.06 21.06 0 0 0-.146 1.886 72.36 72.36 0 0 0-.024 2.008c0 .13.004.24.012.328.008.09.012.167.012.232 0 .146-.06.26-.182.34-.122.082-.394.187-.816.317l-5.914 1.655a9.725 9.725 0 0 0-.705.231 2.5 2.5 0 0 1-.852.158 1.05 1.05 0 0 1-.597-.17c-.17-.114-.255-.308-.255-.584v-.146c.097-.876.178-1.619.243-2.227.065-.609.126-1.16.183-1.655.057-.495.105-.99.146-1.485.04-.495.093-1.07.158-1.728l.231-2.336c.09-.9.199-2.024.329-3.371.08-.828.154-1.671.219-2.531.065-.86.097-1.655.097-2.385a7.69 7.69 0 0 0-.11-1.351 2.995 2.995 0 0 0-.389-1.071 1.865 1.865 0 0 0-.766-.694c-.325-.162-.739-.243-1.242-.243-.373 0-.888.081-1.545.243-.657.163-1.31.43-1.96.803a6.325 6.325 0 0 0-1.727 1.473c-.503.608-.787 1.359-.852 2.251-.097 1.2-.187 2.227-.268 3.079a157.12 157.12 0 0 1-.219 2.166l-.158 1.448c-.04.373-.069.69-.085.95a6 6 0 0 0-.073.535 97.682 97.682 0 0 0-.19 1.89l-.041.446c-.041.455-.082.885-.122 1.29-.04.406-.073.755-.098 1.047a9.89 9.89 0 0 0-.036.535c0 .13.004.24.012.329.008.089.012.174.012.255 0 .13-.06.24-.182.329-.122.089-.394.19-.816.304l-6.45 2.215c-.178.065-.413.146-.705.243a2.687 2.687 0 0 1-.852.146 1.05 1.05 0 0 1-.596-.17c-.17-.114-.256-.308-.256-.584l2.215-24.874c.049-.535.11-.904.183-1.107.073-.203.255-.337.547-.402 1.477-.292 2.994-.588 4.552-.888 1.557-.3 3.074-.686 4.55-1.156Zm-24.244 6.942a2.492 2.492 0 0 0-3.403.911l-2.207 3.82-3.82-2.205a2.492 2.492 0 0 0-3.403.912l-.084.158a2.49 2.49 0 0 0 .996 3.245l3.819 2.204-2.205 3.82-.084.158a2.49 2.49 0 0 0 4.399 2.333l2.206-3.82 3.82 2.205a2.492 2.492 0 0 0 2.492-4.314l-3.821-2.206 2.207-3.82.083-.156a2.49 2.49 0 0 0-.995-3.245Zm-96.747-2.287a1.474 1.474 0 0 0-2.014.54l-1.305 2.26-2.26-1.305a1.474 1.474 0 0 0-2.014.54l-.069.134a1.474 1.474 0 0 0 .608 1.88l2.26 1.304-1.304 2.26-.07.135a1.474 1.474 0 0 0 2.623 1.339l1.305-2.261 2.26 1.305a1.474 1.474 0 0 0 2.014-.54l.07-.134a1.474 1.474 0 0 0-.61-1.879l-2.26-1.305 1.306-2.26a1.474 1.474 0 0 0-.54-2.013Zm38.84.675a1.474 1.474 0 0 0-2.077-.181l-.111.103a1.474 1.474 0 0 0-.07 1.973l1.677 1.999-2 1.678-.11.103a1.474 1.474 0 0 0 2.006 2.155l1.999-1.678 1.678 2a1.474 1.474 0 0 0 2.077.181l.11-.103a1.474 1.474 0 0 0 .072-1.973l-1.678-2 2-1.677a1.474 1.474 0 1 0-1.896-2.258l-2 1.677Z"></path><path class="fill-white" d="M226.737 37.121V9.934h7.38v21.24h10.993v5.947zm28.409 0h-7.965l8.974-27.187h10.089l8.974 27.187h-7.965l-5.947-19.7h-.213l-5.947 19.7Zm-1.487-10.726h14.975v5.523h-14.975v-5.523Zm24.161 10.726V9.934h11.788c2.071 0 3.813.279 5.224.836 1.412.558 2.478 1.345 3.2 2.363.72 1.018 1.082 2.217 1.082 3.598 0 1-.22 1.911-.658 2.734a5.864 5.864 0 0 1-1.838 2.065c-.788.553-1.708.936-2.761 1.148v.266c1.168.044 2.23.338 3.186.882a6.17 6.17 0 0 1 2.283 2.244c.566.951.85 2.069.85 3.352 0 1.487-.388 2.81-1.162 3.97-.774 1.159-1.874 2.07-3.299 2.734-1.425.664-3.124.995-5.098.995H277.82Zm7.381-5.894h3.452c1.239 0 2.168-.232 2.787-.697.62-.464.93-1.152.93-2.064 0-.637-.146-1.177-.438-1.62-.292-.442-.706-.778-1.242-1.008-.535-.23-1.179-.346-1.931-.346H285.2v5.735Zm0-10.301h3.027c.646 0 1.217-.102 1.712-.306.496-.203.883-.497 1.162-.882.279-.385.418-.857.418-1.414 0-.841-.3-1.485-.903-1.932-.601-.447-1.363-.67-2.283-.67h-3.133v5.204Zm32.232-2.496c-.07-.885-.4-1.575-.989-2.071-.588-.496-1.48-.743-2.675-.743-.76 0-1.382.09-1.865.272-.482.181-.838.427-1.068.736-.23.31-.35.664-.359 1.062a1.67 1.67 0 0 0 .18.883c.137.261.356.496.657.704.3.208.685.396 1.154.564.47.168 1.027.319 1.673.451l2.23.478c1.505.319 2.793.74 3.864 1.262 1.07.522 1.947 1.135 2.628 1.838a6.726 6.726 0 0 1 1.507 2.37c.323.876.489 1.832.498 2.867-.01 1.788-.456 3.301-1.341 4.54-.885 1.24-2.149 2.182-3.79 2.828-1.642.646-3.613.97-5.914.97-2.363 0-4.423-.35-6.18-1.05-1.757-.699-3.12-1.776-4.089-3.232-.969-1.456-1.458-3.321-1.467-5.596h7.01c.044.832.252 1.531.624 2.098.371.566.896.995 1.573 1.287.677.293 1.484.439 2.422.439.788 0 1.447-.098 1.978-.292.531-.195.934-.465 1.208-.81a1.91 1.91 0 0 0 .425-1.182 1.723 1.723 0 0 0-.405-1.095c-.26-.314-.688-.597-1.28-.85-.594-.252-1.395-.489-2.404-.71l-2.708-.584c-2.407-.522-4.303-1.396-5.688-2.622-1.385-1.226-2.073-2.9-2.064-5.024-.01-1.726.453-3.237 1.387-4.534.934-1.297 2.23-2.308 3.89-3.033 1.659-.726 3.564-1.089 5.714-1.089 2.195 0 4.094.367 5.696 1.102 1.601.734 2.838 1.768 3.71 3.1.872 1.332 1.312 2.887 1.32 4.666h-7.062Z"></path></g></svg>`;
});
const HomeContributors = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { contributors } = $$props;
  if ($$props.contributors === void 0 && $$bindings.contributors && contributors !== void 0)
    $$bindings.contributors(contributors);
  contributors = contributors.slice(0, 100);
  return `<div class="space-y-10"> <div class="space-y-4 text-center" data-svelte-h="svelte-3tzx7"><h2 class="h2">Built by Awesome People.</h2> <p>Here are a few of the people responsible for creating and maintaining Skeleton.</p></div> <div class="flex justify-center"> <div class="card variant-soft-secondary overflow-hidden"><header class="variant-filled-secondary grid grid-cols-[1fr_auto_auto] gap-4 items-center p-4 md:p-8 md:py-8"><a href="https://skeletonlabs.co/" target="_blank" rel="noreferrer">${validate_component(DocsLogoLabs, "DocsLogoLabs").$$render($$result, {}, {}, {})}</a> <a class="btn-icon variant-filled" href="mailto:admin@skeleton.dev" data-svelte-h="svelte-etifpe"><i class="fa-solid fa-envelope"></i></a> <a class="btn-icon variant-filled" href="https://skeletonlabs.co/" target="_blank" rel="noreferrer" data-svelte-h="svelte-13vswik"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></header> <section class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 md:p-10"><div class="flex flex-col items-center gap-2">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      src: "https://avatars.githubusercontent.com/u/1509726?v=4",
      width: "w-32"
    },
    {},
    {}
  )} <h3 class="h3" data-svelte-h="svelte-u8s69f">Chris Simmons</h3> <p class="!text-sm" data-svelte-h="svelte-1t27362">Co-founder and core maintainer.</p></div> <div class="flex flex-col items-center gap-2">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      src: "https://avatars.githubusercontent.com/u/10255430?v=4",
      width: "w-32"
    },
    {},
    {}
  )} <h3 class="h3" data-svelte-h="svelte-sa7hv">Trey Weir</h3> <p class="!text-sm" data-svelte-h="svelte-16m4zuw">Co-founder and business relations.</p></div></section></div></div>  <div class="space-y-4 text-center lg:text-left"><div class="grid grid-cols-8 md:grid-cols-12 gap-4 max-w-4xl mx-auto">${each(contributors, (c) => {
    return `<a${add_attribute("href", c.html_url, 0)} target="_blank" rel="noreferrer"${add_attribute("title", c.login, 0)}>${validate_component(Avatar, "Avatar").$$render(
      $$result,
      {
        loading: "lazy",
        src: c.avatar_url,
        width: "w-full",
        background: "bg-black"
      },
      {},
      {}
    )} </a>`;
  })}</div></div></div>`;
});
const HomeBottomCta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="text-center space-y-4" data-svelte-h="svelte-1l1c6cn"> <h2 class="h2">Ready to Begin?</h2> <p class="!text-xl max-w-[320px] sm:max-w-none mx-auto">Create your first Skeleton project in seconds.</p>  <div class="flex justify-center gap-4"><a class="btn variant-filled" href="https://stackblitz.com/fork/github/skeletonlabs/repl/tree/main/welcome" target="_blank" rel="noreferrer"><i class="fa-solid fa-bolt"></i> <span>Via StackBlitz</span></a> <a href="/docs/get-started" class="btn variant-filled"><span>Install Skeleton</span> <i class="fa-solid fa-arrow-right-long"></i></a></div></div>`;
});
const css = {
  code: ".section-container.svelte-1fg2m4z{margin-left:auto;margin-right:auto;width:100%;max-width:80rem;padding:1rem;padding-top:4rem;padding-bottom:4rem}@media(min-width: 768px){.section-container.svelte-1fg2m4z{padding-top:6rem;padding-bottom:6rem}}.hero-gradient.svelte-1fg2m4z{background-image:radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),\n			radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%)}.sveltekit-gradient.svelte-1fg2m4z{background-image:radial-gradient(at 0% 100%, rgba(var(--color-secondary-500) / 0.50) 0px, transparent 50%)}.tailwind-gradient.svelte-1fg2m4z{background-image:radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.50) 0px, transparent 50%),\n			radial-gradient(at 100% 100%,  rgba(var(--color-primary-500) / 0.24) 0px, transparent 50%)}.features-gradient.svelte-1fg2m4z{background-image:radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),\n			radial-gradient(at 100% 0%,  rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%)}.sponsors-gradient.svelte-1fg2m4z{background-image:radial-gradient(at 0% 99%, rgba(var(--color-error-500) / 0.23) 0px, transparent 50%),\n		radial-gradient(at 100% 100%, rgba(var(--color-primary-500) / 0.19) 0px, transparent 50%)}.bottom-cta-gradient.svelte-1fg2m4z{--tw-bg-opacity:1;background-color:rgb(var(--color-primary-500) / var(--tw-bg-opacity));color:rgb(var(--on-primary));background-image:radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.75) 0px, transparent 40%),\n		radial-gradient(at 100% 100%, rgba(var(--color-secondary-500) / 0.75) 0px, transparent 40%)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let data;\\n$:\\n  ({ contributors } = data);\\nimport HomeFeatures from \\"./home-partials/HomeFeatures.svelte\\";\\nimport HomeHero from \\"./home-partials/HomeHero.svelte\\";\\nimport HomePlayground from \\"./home-partials/HomePlayground.svelte\\";\\nimport HomeSponsors from \\"./home-partials/HomeSponsors.svelte\\";\\nimport HomeStats from \\"./home-partials/HomeStats.svelte\\";\\nimport HomeSvelteKit from \\"./home-partials/HomeSvelteKit.svelte\\";\\nimport HomeTailwind from \\"./home-partials/HomeTailwind.svelte\\";\\nimport HomeTheming from \\"./home-partials/HomeTheming.svelte\\";\\nimport HomeContributors from \\"./home-partials/HomeContributors.svelte\\";\\nimport HomeBottomCta from \\"./home-partials/HomeBottomCta.svelte\\";\\n<\/script>\\n\\n<div>\\n\\t<!-- Promo Banner -->\\n\\t<!-- <div class=\\"variant-filled-primary p-4\\">\\n\\t\\t<div class=\\"w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4\\">\\n\\t\\t\\t<div class=\\"flex items-center gap-6\\">\\n\\t\\t\\t\\t<span class=\\"text-xl\\">🎉</span>\\n\\t\\t\\t\\t<p class=\\"text-lg\\">Skeleton v2.0 is now available!</p>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"flex gap-4\\">\\n\\t\\t\\t\\t<a class=\\"btn variant-filled\\" href=\\"https://github.com/skeletonlabs/skeleton/discussions/1945\\" target=\\"_blank\\">What's New?</a>\\n\\t\\t\\t\\t<a class=\\"btn variant-filled\\" href=\\"https://github.com/skeletonlabs/skeleton/discussions/1947\\" target=\\"_blank\\">Migration Guide</a>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div> -->\\n\\n\\t<!-- hero -->\\n\\t<header id=\\"hero\\" class=\\"bg-surface-100-800-token hero-gradient\\">\\n\\t\\t<div class=\\"section-container\\"><HomeHero /></div>\\n\\t</header>\\n\\n\\t<!-- playground -->\\n\\t<section id=\\"playground\\" class=\\"bg-surface-100-800-token\\">\\n\\t\\t<div class=\\"section-container\\"><HomePlayground /></div>\\n\\t</section>\\n\\n\\t<!-- sveltekit -->\\n\\t<section id=\\"sveltekit\\" class=\\"bg-surface-100-800-token sveltekit-gradient\\">\\n\\t\\t<div class=\\"section-container\\"><HomeSvelteKit /></div>\\n\\t</section>\\n\\n\\t<!-- tailwind -->\\n\\t<section id=\\"tailwind\\" class=\\"bg-surface-100-800-token tailwind-gradient\\">\\n\\t\\t<div class=\\"section-container\\"><HomeTailwind /></div>\\n\\t</section>\\n\\n\\t<!-- theming -->\\n\\t<section id=\\"theming\\" class=\\"bg-surface-50-900-token\\">\\n\\t\\t<div class=\\"section-container\\"><HomeTheming /></div>\\n\\t</section>\\n\\n\\t<!-- features -->\\n\\t<section id=\\"features\\" class=\\"bg-surface-100-800-token features-gradient\\">\\n\\t\\t<div class=\\"section-container\\"><HomeFeatures /></div>\\n\\t</section>\\n\\n\\t<!-- stats -->\\n\\t<section id=\\"stats\\" class=\\"bg-surface-100-800-token\\">\\n\\t\\t<div class=\\"section-container\\"><HomeStats /></div>\\n\\t</section>\\n\\n\\t<!-- sponsors -->\\n\\t<section id=\\"sponsors\\" class=\\"bg-surface-100-800-token sponsors-gradient\\">\\n\\t\\t<div class=\\"section-container\\"><HomeSponsors /></div>\\n\\t</section>\\n\\n\\t<!-- contributors -->\\n\\t<section id=\\"contributors\\" class=\\"bg-surface-50-900-token contributors-gradient\\">\\n\\t\\t<div class=\\"section-container\\"><HomeContributors {contributors} /></div>\\n\\t</section>\\n\\n\\t<!-- bottom-cta -->\\n\\t<section id=\\"bottom-cta\\" class=\\"bottom-cta-gradient\\">\\n\\t\\t<div class=\\"section-container\\"><HomeBottomCta /></div>\\n\\t</section>\\n</div>\\n\\n<style lang=\\"postcss\\">\\n\\t.section-container {\\n\\t\\tmargin-left:\\n\\t\\t\\tauto;\\n\\t\\tmargin-right:\\n\\t\\t\\tauto;\\n\\t\\twidth:\\n\\t\\t\\t100%;\\n\\t\\tmax-width:\\n\\t\\t\\t80rem;\\n\\t\\tpadding:\\n\\t\\t\\t1rem;\\n\\t\\tpadding-top:\\n\\t\\t\\t4rem;\\n\\t\\tpadding-bottom:\\n\\t\\t\\t4rem;\\n}\\n@media (min-width: 768px) {\\n\\t\\t.section-container {\\n\\t\\t\\t\\tpadding-top:\\n\\t\\t\\t6rem;\\n\\t\\t\\t\\tpadding-bottom:\\n\\t\\t\\t6rem;\\n\\t\\t}\\n}\\n\\t/* Hero Gradient */\\n\\t/* prettier-ignore */\\n\\t.hero-gradient {\\n\\t\\tbackground-image:\\n\\t\\t\\tradial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),\\n\\t\\t\\tradial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);\\n\\t}\\n\\t/* SvelteKit Gradient */\\n\\t/* prettier-ignore */\\n\\t.sveltekit-gradient {\\n\\t\\tbackground-image:\\n\\t\\t\\tradial-gradient(at 0% 100%, rgba(var(--color-secondary-500) / 0.50) 0px, transparent 50%);\\n\\t}\\n\\t/* SvelteKit Gradient */\\n\\t/* prettier-ignore */\\n\\t.tailwind-gradient {\\n\\t\\tbackground-image:\\n\\t\\t\\tradial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.50) 0px, transparent 50%),\\n\\t\\t\\tradial-gradient(at 100% 100%,  rgba(var(--color-primary-500) / 0.24) 0px, transparent 50%);\\n\\t}\\n\\t/* Features Gradient */\\n\\t/* prettier-ignore */\\n\\t.features-gradient {\\n\\t\\tbackground-image:\\n\\t\\t\\tradial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),\\n\\t\\t\\tradial-gradient(at 100% 0%,  rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%);\\n\\t}\\n\\t/* Sponsors Gradient */\\n\\t/* prettier-ignore */\\n\\t.sponsors-gradient {\\n\\t\\tbackground-image:\\n\\t\\tradial-gradient(at 0% 99%, rgba(var(--color-error-500) / 0.23) 0px, transparent 50%),\\n\\t\\tradial-gradient(at 100% 100%, rgba(var(--color-primary-500) / 0.19) 0px, transparent 50%);\\n\\t}\\n\\t/* Radial */\\n\\t/* prettier-ignore */\\n\\t.bottom-cta-gradient {\\n\\t\\t--tw-bg-opacity:\\n\\t\\t\\t1;\\n\\t\\tbackground-color:\\n\\t\\t\\trgb(var(--color-primary-500) / var(--tw-bg-opacity));\\n\\t\\tcolor:\\n\\t\\t\\trgb(var(--on-primary));\\n\\t\\tbackground-image:\\n\\t\\tradial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.75) 0px, transparent 40%),\\n\\t\\tradial-gradient(at 100% 100%, rgba(var(--color-secondary-500) / 0.75) 0px, transparent 40%);\\n}\\n</style>\\n"],"names":[],"mappings":"AAkFC,iCAAmB,CAClB,WAAW,CACV,IAAI,CACL,YAAY,CACX,IAAI,CACL,KAAK,CACJ,IAAI,CACL,SAAS,CACR,KAAK,CACN,OAAO,CACN,IAAI,CACL,WAAW,CACV,IAAI,CACL,cAAc,CACb,IACH,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,iCAAmB,CACjB,WAAW,CACZ,IAAI,CACH,cAAc,CACf,IACD,CACF,CAGC,6BAAe,CACd,gBAAgB,CACf,gBAAgB,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,KAAK,IAAI,qBAAqB,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,WAAW,CAAC,GAAG,CAAC,CAAC;AAC3F,GAAG,gBAAgB,EAAE,CAAC,GAAG,CAAC,EAAE,CAAC,CAAC,KAAK,IAAI,iBAAiB,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,WAAW,CAAC,GAAG,CACrF,CAGA,kCAAoB,CACnB,gBAAgB,CACf,gBAAgB,EAAE,CAAC,EAAE,CAAC,IAAI,CAAC,CAAC,KAAK,IAAI,qBAAqB,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,WAAW,CAAC,GAAG,CAC1F,CAGA,iCAAmB,CAClB,gBAAgB,CACf,gBAAgB,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,KAAK,IAAI,qBAAqB,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,WAAW,CAAC,GAAG,CAAC,CAAC;AAC3F,GAAG,gBAAgB,EAAE,CAAC,IAAI,CAAC,IAAI,CAAC,EAAE,KAAK,IAAI,mBAAmB,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,WAAW,CAAC,GAAG,CAC3F,CAGA,iCAAmB,CAClB,gBAAgB,CACf,gBAAgB,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,KAAK,IAAI,qBAAqB,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,WAAW,CAAC,GAAG,CAAC,CAAC;AAC3F,GAAG,gBAAgB,EAAE,CAAC,IAAI,CAAC,EAAE,CAAC,EAAE,KAAK,IAAI,mBAAmB,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,WAAW,CAAC,GAAG,CACzF,CAGA,iCAAmB,CAClB,gBAAgB,CAChB,gBAAgB,EAAE,CAAC,EAAE,CAAC,GAAG,CAAC,CAAC,KAAK,IAAI,iBAAiB,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,WAAW,CAAC,GAAG,CAAC,CAAC;AACvF,EAAE,gBAAgB,EAAE,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC,KAAK,IAAI,mBAAmB,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,WAAW,CAAC,GAAG,CACzF,CAGA,mCAAqB,CACpB,eAAe,CACd,CAAC,CACF,gBAAgB,CACf,IAAI,IAAI,mBAAmB,CAAC,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,CAAC,CACrD,KAAK,CACJ,IAAI,IAAI,YAAY,CAAC,CAAC,CACvB,gBAAgB,CAChB,gBAAgB,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,KAAK,IAAI,qBAAqB,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,WAAW,CAAC,GAAG,CAAC,CAAC;AAC1F,EAAE,gBAAgB,EAAE,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC,KAAK,IAAI,qBAAqB,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,WAAW,CAAC,GAAG,CAC5F"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let contributors;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ({ contributors } = data);
  return `<div>   <header id="hero" class="bg-surface-100-800-token hero-gradient svelte-1fg2m4z"><div class="section-container svelte-1fg2m4z">${validate_component(HomeHero, "HomeHero").$$render($$result, {}, {}, {})}</div></header>  <section id="playground" class="bg-surface-100-800-token"><div class="section-container svelte-1fg2m4z">${validate_component(HomePlayground, "HomePlayground").$$render($$result, {}, {}, {})}</div></section>  <section id="sveltekit" class="bg-surface-100-800-token sveltekit-gradient svelte-1fg2m4z"><div class="section-container svelte-1fg2m4z">${validate_component(HomeSvelteKit, "HomeSvelteKit").$$render($$result, {}, {}, {})}</div></section>  <section id="tailwind" class="bg-surface-100-800-token tailwind-gradient svelte-1fg2m4z"><div class="section-container svelte-1fg2m4z">${validate_component(HomeTailwind, "HomeTailwind").$$render($$result, {}, {}, {})}</div></section>  <section id="theming" class="bg-surface-50-900-token"><div class="section-container svelte-1fg2m4z">${validate_component(HomeTheming, "HomeTheming").$$render($$result, {}, {}, {})}</div></section>  <section id="features" class="bg-surface-100-800-token features-gradient svelte-1fg2m4z"><div class="section-container svelte-1fg2m4z">${validate_component(HomeFeatures, "HomeFeatures").$$render($$result, {}, {}, {})}</div></section>  <section id="stats" class="bg-surface-100-800-token"><div class="section-container svelte-1fg2m4z">${validate_component(HomeStats, "HomeStats").$$render($$result, {}, {}, {})}</div></section>  <section id="sponsors" class="bg-surface-100-800-token sponsors-gradient svelte-1fg2m4z"><div class="section-container svelte-1fg2m4z">${validate_component(HomeSponsors, "HomeSponsors").$$render($$result, {}, {}, {})}</div></section>  <section id="contributors" class="bg-surface-50-900-token contributors-gradient"><div class="section-container svelte-1fg2m4z">${validate_component(HomeContributors, "HomeContributors").$$render($$result, { contributors }, {}, {})}</div></section>  <section id="bottom-cta" class="bottom-cta-gradient svelte-1fg2m4z"><div class="section-container svelte-1fg2m4z">${validate_component(HomeBottomCta, "HomeBottomCta").$$render($$result, {}, {}, {})}</div></section> </div>`;
});
export {
  Page as default
};

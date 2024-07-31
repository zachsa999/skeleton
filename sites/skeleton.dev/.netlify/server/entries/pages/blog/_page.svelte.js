import { c as create_ssr_component, h as each, e as escape, d as add_attribute } from "../../../chunks/ssr.js";
import { g as getToastStore } from "../../../chunks/stores3.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { b as blogDateFormatter } from "../../../chunks/blog-service.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  getToastStore();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="page-container-wide page-padding"><header class="flex justify-between items-center"><div class="space-y-4" data-svelte-h="svelte-i189uo"><h2 class="h2">The Skeleton Blog</h2> <p>Keep up with the latest news, tutorials, and releases for Skeleton.</p></div>  <button class="btn-icon btn-icon-sm !bg-orange-500" data-svelte-h="svelte-1xamkba"><i class="fa-solid fa-square-rss text-xl"></i></button></header> <hr>  <section class="blog-list space-y-8">${each(data.posts, (post) => {
    return `<a class="block hover:card hover:variant-soft p-4 rounded-container-token" href="${"/blog/" + escape(post.slug, true)}" data-sveltekit-preload-data="hover"><article class="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-4 lg:gap-8"> ${post.feature_image ? `<img class="bg-black/50 w-full lg:max-w-sm aspect-video rounded-container-token shadow-xl bg-cover bg-center"${add_attribute("src", post.feature_image, 0)} alt="thumbnail">` : ``}  <div class="space-y-4"><time class="block">${escape(blogDateFormatter(post.updated_at))}</time> <h2 class="h2">${escape(post.title)}</h2> <p>${escape(post.excerpt)}</p> <div class="flex items-center space-x-4">${each(post.tags, (tag) => {
      return `<span class="text-xs font-bold opacity-50 capitalize">${escape(tag.slug)}</span>`;
    })}</div> <button class="btn variant-ghost-surface" data-svelte-h="svelte-n8w1rq">Read Article →</button> </div></article> </a>`;
  })}</section> <hr>  <footer class="flex justify-between items-center space-x-4"><div><small class="opacity-50">Page ${escape(data.meta.pagination.page)} of ${escape(data.meta.pagination.pages)}</small></div> <div class="flex items-center space-x-4"><button class="btn-icon variant-filled" ${!data.meta.pagination.prev ? "disabled" : ""}>←</button> <button class="btn variant-filled" ${!data.meta.pagination.next ? "disabled" : ""}>Next →</button></div></footer></div>`;
});
export {
  Page as default
};

import { c as create_ssr_component, e as escape, v as validate_component, d as add_attribute, h as each } from "../../../../chunks/ssr.js";
import { b as blogDateFormatter } from "../../../../chunks/blog-service.js";
import "../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { A as Avatar } from "../../../../chunks/Avatar.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const post = data.posts[0];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `  <div class="max-w-5xl mx-auto p-4 md:p-12 space-y-8"> <ol class="breadcrumb" data-svelte-h="svelte-e4vq45"><li class="crumb"><a class="anchor" href="/blog">Blog</a></li> <li class="crumb-separator" aria-hidden="true">›</li> <li>Article</li></ol>  <header class="space-y-4"> <div class="blog-meta flex justify-between items-center"><time class="time block">${escape(blogDateFormatter(post.updated_at))}</time> <span class="hidden md:block text-xs opacity-50">${escape(post.reading_time)} min read</span></div> <h1 class="h1">${escape(post.title)}</h1>  <div class="flex items-center space-x-4 py-4">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      src: post.primary_author.profile_image,
      alt: post.primary_author.slug
    },
    {},
    {}
  )} <div><span class="block">${escape(post.primary_author.name)}</span> <a class="anchor text-secondary-500 text-xs" href="${"https://twitter.com/" + escape(post.primary_author.twitter, true)}">${escape(post.primary_author.twitter)}</a></div></div>  ${post.feature_image ? `<img${add_attribute("src", post.feature_image, 0)}${add_attribute("alt", post.title, 0)} class="w-full aspect-video rounded-container-token shadow-xl">` : ``}</header>  <article class="prose lg:prose-xl max-w-full space-y-8 md:space-y-12"><!-- HTML_TAG_START -->${post.html}<!-- HTML_TAG_END --></article>  <footer class="card p-4 variant-glass-surface flex justify-between items-center mb-28"> <div class="flex items-center space-x-4">${each(post.tags, (tag) => {
    return `<span class="text-sm font-bold opacity-50 capitalize">${escape(tag.slug)}</span>`;
  })}</div>   <button class="btn variant-ghost-surface" data-svelte-h="svelte-lo2v9k">Scroll to Top ↑</button></footer> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" data-svelte-h="svelte-s7rlcr"><\/script></div>`;
});
export {
  Page as default
};

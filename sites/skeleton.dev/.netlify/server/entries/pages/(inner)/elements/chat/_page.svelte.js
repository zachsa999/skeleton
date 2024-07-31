import { c as create_ssr_component, v as validate_component, e as escape, h as each, d as add_attribute } from "../../../../../chunks/ssr.js";
import { faker } from "@faker-js/faker";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { A as Avatar } from "../../../../../chunks/Avatar.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Element,
    name: "Chat",
    description: "Create a custom chat feed or AI prompt interface using features provided by Skeleton and Tailwind."
  };
  let elemChat;
  const lorem = faker.lorem.paragraph();
  const people = [
    { id: 0, avatar: 14, name: "Michael" },
    { id: 1, avatar: 40, name: "Janet" },
    { id: 2, avatar: 31, name: "Susan" },
    { id: 3, avatar: 56, name: "Joey" },
    { id: 4, avatar: 24, name: "Lara" },
    { id: 5, avatar: 9, name: "Melissa" }
  ];
  let currentPersonId = people[0].id;
  let messageFeed = [
    {
      id: 0,
      host: true,
      avatar: 48,
      name: "Jane",
      timestamp: "Yesterday @ 2:30pm",
      message: lorem,
      color: "variant-soft-primary"
    },
    {
      id: 1,
      host: false,
      avatar: 14,
      name: "Michael",
      timestamp: "Yesterday @ 2:45pm",
      message: lorem,
      color: "variant-soft-primary"
    },
    {
      id: 2,
      host: true,
      avatar: 48,
      name: "Jane",
      timestamp: "Yesterday @ 2:50pm",
      message: lorem,
      color: "variant-soft-primary"
    },
    {
      id: 3,
      host: false,
      avatar: 14,
      name: "Michael",
      timestamp: "Yesterday @ 2:52pm",
      message: lorem,
      color: "variant-soft-primary"
    }
  ];
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return ` <p data-svelte-h="svelte-15hqrkt">If you wish to review the source for the complete example above, please tap the <em>Page Source</em> button near the top of the page. We&#39;ll
			cover each core principle in the sections below.</p> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-nkzw2s">Layout Columns</h2>  <p data-svelte-h="svelte-1h4qk5z">We recommend using <a class="anchor" href="https://tailwindcss.com/docs/grid-template-columns" target="_blank" rel="noreferrer">Tailwind&#39;s grid column utility classes</a> to define horizontal columns for your layout.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `<p data-svelte-h="svelte-10dp1c0">For a fix column width, replace <code class="code">auto</code> with a specific amount, such as
						<code class="code">320px</code>, then <code class="code">1fr</code> will fill remaining space.</p> <p class="font-bold" data-svelte-h="svelte-mf2ak8">Three Column Layout</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<div class="w-full grid grid-cols-[auto_1fr_auto] gap-1">
	<div class="bg-surface-500/30 p-4">(nav)</div>
	<div class="bg-surface-500/30 p-4">(feed)</div>
	<div class="bg-surface-500/30 p-4">(online)</div>
</div>
					`
            },
            {},
            {}
          )} <p class="font-bold" data-svelte-h="svelte-1crkc12">Two Column Layout</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<div class="w-full grid grid-cols-[auto_1fr] gap-1">
	<div class="bg-surface-500/30 p-4">(nav)</div>
	<div class="bg-surface-500/30 p-4">(feed)</div>
</div>
					`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="w-full space-y-4" data-svelte-h="svelte-shdoxz"><div class="w-full grid grid-cols-[auto_1fr_auto] gap-1"><div class="bg-surface-500/30 p-4">(nav)</div> <div class="bg-surface-500/30 p-4">(feed)</div> <div class="bg-surface-500/30 p-4">(online)</div></div> <div class="w-full grid grid-cols-[auto_1fr] gap-1"><div class="bg-surface-500/30 p-4">(nav)</div> <div class="bg-surface-500/30 p-4">(feed)</div></div></div>`;
        }
      })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-i6cc6c">Layout Rows</h2>  <p data-svelte-h="svelte-16zku8t">We recommend using <a class="anchor" href="https://tailwindcss.com/docs/grid-template-rows" target="_blank" rel="noreferrer">Tailwind&#39;s grid row utility classes</a> to define vertical layout rows for your layout.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `<p class="font-bold" data-svelte-h="svelte-dlrllm">Three Row Layout</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<div class="h-full grid grid-rows-[auto_1fr_auto] gap-1">
	<div class="bg-surface-500/30 p-4">(search)</div>
	<div class="bg-surface-500/30 p-4">(list)</div>
	<div class="bg-surface-500/30 p-4">(footer)</div>
</div>
					`
            },
            {},
            {}
          )} <p class="font-bold" data-svelte-h="svelte-bnd2rw">Two Row Layout</p> <p data-svelte-h="svelte-ljai5y">Note that we&#39;ve set <a class="anchor" href="https://tailwindcss.com/docs/overflow" target="_blank" rel="noreferrer">overflow-y-auto</a> for the chat feed element to enable vertical scrolling.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<div class="h-full grid grid-rows-[1fr_auto] gap-1">
	<div class="bg-surface-500/30 p-4 overflow-y-auto">(feed)</div>
	<div class="bg-surface-500/30 p-4">(prompt)</div>
</div>
					`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="w-full grid grid-cols-2 gap-10"><div class="h-[240px] grid grid-rows-[auto_1fr_auto] gap-1" data-svelte-h="svelte-mh8kmr"><div class="bg-surface-500/30 p-4">(search)</div> <div class="bg-surface-500/30 p-4">(list)</div> <div class="bg-surface-500/30 p-4">(footer)</div></div> <div class="h-[240px] grid grid-rows-[1fr_auto] gap-1"><div class="bg-surface-500/30 p-4 space-y-4 overflow-y-auto"><p data-svelte-h="svelte-s4vhxx">(feed)</p> <p>${escape(faker.lorem.paragraph(10))}</p></div> <div class="bg-surface-500/30 p-4" data-svelte-h="svelte-9z2wxw">(prompt)</div></div></div>`;
        }
      })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1rk2nz4">Message Feed</h2> <p data-svelte-h="svelte-nbq2ry">Within our feed element, we&#39;ll generate a feed of messages. Note that we&#39;ll replace the <em>pre</em> tags in the next section.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `<p data-svelte-h="svelte-cwfpvb">First, we need source data to work with. The following represents a trivial example with some preformatted fields, such as
						timestamps. In a real world example you might fetch this data from a server.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "ts",
              code: `
let messageFeed = [
	{
		id: 0,
		host: true,
		avatar: 48,
		name: 'Jane',
		timestamp: 'Yesterday @ 2:30pm',
		message: 'Some message text.',
		color: 'variant-soft-primary'
	},
	{
		id: 1,
		host: false,
		avatar: 14,
		name: 'Michael',
		timestamp: 'Yesterday @ 2:45pm',
		message: 'Some message text.',
		color: 'variant-soft-primary'
	}
];
					`
            },
            {},
            {}
          )} <p data-svelte-h="svelte-1hwfb50">We&#39;ll then iterate through our message feed, using a conditional to determine who is the host (read: you) and who is the guest
						you are speaking to. In this simple example we&#39;ll use a boolean value called <code class="code">host</code> to determine this.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<section class="w-full max-h-[400px] p-4 overflow-y-auto space-y-4">
	{#each messageFeed as bubble, i}
		{#if bubble.host === true}
			<!-- Host Message Bubble -->
			<pre>host: {JSON.stringify(bubble, null, 2)}</pre>
		{:else}
			<!-- Guest Message Bubble -->
			<pre>guest: {JSON.stringify(bubble, null, 2)}</pre>
		{/if}
	{/each}
</section>
					`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<section class="w-full max-h-[400px] p-4 overflow-y-auto space-y-4">${each(messageFeed.slice(0, 2), (bubble) => {
            return `${bubble.host === true ? `<pre class="pre">host: ${escape(JSON.stringify(bubble, null, 2))}</pre>` : `<pre class="pre">guest: ${escape(JSON.stringify(bubble, null, 2))}</pre>`}`;
          })}</section>`;
        }
      })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-11i1w6f">Message Bubbles</h2> <p data-svelte-h="svelte-1qjcrwk">By mixing Skeleton features with Tailwind styling, we can provided message bubble interfaces for each type of feed post.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `<p class="font-bold" data-svelte-h="svelte-9zqfsq">Host Bubble Template</p> <p data-svelte-h="svelte-cpbtpv">Note our use of the Avatar component and Card element here. We also use <code class="code">rounded-tl-none</code> to ensure the top-left
						corner is pointing at the avatar. This card uses a neutral background color.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<div class="grid grid-cols-[auto_1fr] gap-2">
	<Avatar src="https://i.pravatar.cc/?img={bubble.avatar}" width="w-12" />
	<div class="card p-4 variant-soft rounded-tl-none space-y-2">
		<header class="flex justify-between items-center">
			<p class="font-bold">{bubble.name}</p>
			<small class="opacity-50">{bubble.timestamp}</small>
		</header>
		<p>{bubble.message}</p>
	</div>
</div>
					`
            },
            {},
            {}
          )} <p class="font-bold" data-svelte-h="svelte-eapi9o">Guest Bubble Template</p> <p data-svelte-h="svelte-nlnvsb">We move the avatar to appear on the right and alter the matching corner border radius style. This card utilizes the color class
						provided from the message data.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<div class="grid grid-cols-[1fr_auto] gap-2">
	<div class="card p-4 rounded-tr-none space-y-2 {bubble.color}">
		<header class="flex justify-between items-center">
			<p class="font-bold">{bubble.name}</p>
			<small class="opacity-50">{bubble.timestamp}</small>
		</header>
		<p>{bubble.message}</p>
	</div>
	<Avatar src="https://i.pravatar.cc/?img={bubble.avatar}" width="w-12" />
</div>
					`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return ` <section class="max-h-[500px] p-4 overflow-y-auto space-y-4">${each(messageFeed.slice(0, 2), (bubble) => {
            return `${bubble.host === true ? `<div class="grid grid-cols-[auto_1fr] gap-2">${validate_component(Avatar, "Avatar").$$render(
              $$result,
              {
                src: "https://i.pravatar.cc/?img=" + bubble.avatar,
                width: "w-12"
              },
              {},
              {}
            )} <div class="card p-4 variant-soft rounded-tl-none space-y-2"><header class="flex justify-between items-center"><p class="font-bold">${escape(bubble.name)}</p> <small class="opacity-50">${escape(bubble.timestamp)}</small></header> <p>${escape(bubble.message)}</p></div> </div>` : `<div class="grid grid-cols-[1fr_auto] gap-2"><div class="${"card p-4 rounded-tr-none space-y-2 " + escape(bubble.color, true)}"><header class="flex justify-between items-center"><p class="font-bold">${escape(bubble.name)}</p> <small class="opacity-50">${escape(bubble.timestamp)}</small></header> <p>${escape(bubble.message)}</p></div> ${validate_component(Avatar, "Avatar").$$render(
              $$result,
              {
                src: "https://i.pravatar.cc/?img=" + bubble.avatar,
                width: "w-12"
              },
              {},
              {}
            )} </div>`}`;
          })}</section>`;
        }
      })}</section> <section class="space-y-4"> <h2 class="h2" id="prompt-field" data-svelte-h="svelte-1bi17qo">Prompt</h2> <p data-svelte-h="svelte-18wrj39">We can utilize a Skeleton <a class="anchor" href="/elements/forms">Input Group</a> to create a custom text prompt.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
        source: () => {
          return `${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "ts",
              code: `let currentMessage = '';`
            },
            {},
            {}
          )} ${validate_component(CodeBlock, "CodeBlock").$$render(
            $$result,
            {
              language: "html",
              code: `
<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token">
	<button class="input-group-shim">+</button>
	<textarea
		bind:value={currentMessage}
		class="bg-transparent border-0 ring-0"
		name="prompt"
		id="prompt"
		placeholder="Write a message..."
		rows="1"
	/>
	<button class="variant-filled-primary">Send</button>
</div>
					`
            },
            {},
            {}
          )} `;
        },
        preview: () => {
          return `<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token"><button class="input-group-shim" data-svelte-h="svelte-pe7l84">+</button> <textarea class="bg-transparent border-0 ring-0" name="prompt" id="prompt" placeholder="Write a message..." rows="1">${escape("")}</textarea> <button class="variant-filled-primary" data-svelte-h="svelte-1edk5ma">Send</button></div>`;
        }
      })}</section> <hr> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1epykzs">Scroll to Bottom</h2> <p data-svelte-h="svelte-16izwvc">Chat windows typically remain fixed at the bottom of the scrollable pane. This can be triggered on page load and when a new message
				is added.</p> <p data-svelte-h="svelte-1fjsp6l">Use <code class="code">bind:this</code> to bind your scrollable feed element.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `let elemChat: HTMLElement;`
        },
        {},
        {}
      )} ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<div bind:this={elemChat} class="overflow-y-auto">(chat)</div>`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-1lwqwmg">Then use Javascript&#39;s <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo" target="_blank" rel="noreferrer">scrollTo</a>
				method to scroll the binded element to the bottom on demand. You may also set smooth scrolling via
				<code class="code">behavior: &#39;smooth&#39;</code>.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `
function scrollChatBottom(behavior?: ScrollBehavior): void {
	elemChat.scrollTo({ top: elemChat.scrollHeight, behavior });
}
				`
        },
        {},
        {}
      )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-jf450o">Add a Message</h2> <p data-svelte-h="svelte-6ya0wo">Below we&#39;ll cover how to append the message feed with a new message from the host user.</p> <p data-svelte-h="svelte-elugsp">Per our above examples, we&#39;ll use the same <code class="code">messageFeed</code> data structure.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `let messageFeed = [ /* ...*/ ];`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-kn5k56">Then bind to the textarea for your prompt in order to capture any message typed by the user.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `let currentMessage = '';`
        },
        {},
        {}
      )} ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `
<textarea
	bind:value={currentMessage} name="prompt" id="prompt"
	placeholder="Write a message..."
/>
					`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-9l5g9k">Here&#39;s an example of how we might append a new message to the <code class="code">messageFeed</code> array.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "ts",
          code: `
function addMessage(): void {
	const newMessage = {
		id: messageFeed.length,
		host: true,
		avatar: 48,
		name: 'Jane',
		timestamp: new date(),
		message: currentMessage,
		color: 'variant-soft-primary'
	};
	// Append the new message to the message feed
	messageFeed = [...messageFeed, newMessage];
	// Clear the textarea message
	currentMessage = '';
	// Smoothly scroll to the bottom of the feed
	setTimeout(() => { scrollChatBottom('smooth'); }, 0);
}
					`
        },
        {},
        {}
      )} <p data-svelte-h="svelte-8k0qdo">This can be triggered when the prompt&#39;s SEND button is clicked.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "html",
          code: `<button ... on:click={addMessage}>Send</button>`
        },
        {},
        {}
      )}</section> `;
    },
    sandbox: () => {
      return ` <section class="card"><div class="chat w-full h-full grid grid-cols-1 lg:grid-cols-[30%_1fr]"> <div class="hidden lg:grid grid-rows-[auto_1fr_auto] border-r border-surface-500/30"> <header class="border-b border-surface-500/30 p-4" data-svelte-h="svelte-42jbsx"><input class="input" type="search" placeholder="Search..."></header>  <div class="p-4 space-y-4 overflow-y-auto"><small class="opacity-50" data-svelte-h="svelte-10c1zhb">Contacts</small> <div class="flex flex-col space-y-1">${each(people, (person) => {
        return `<button type="button" class="${"btn w-full flex items-center space-x-4 " + escape(
          person.id === currentPersonId ? "variant-filled-primary" : "bg-surface-hover-token",
          true
        )}">${validate_component(Avatar, "Avatar").$$render(
          $$result,
          {
            src: "https://i.pravatar.cc/?img=" + person.avatar,
            width: "w-8"
          },
          {},
          {}
        )} <span class="flex-1 text-start">${escape(person.name)}</span> </button>`;
      })}</div></div>  </div>  <div class="grid grid-row-[1fr_auto]"> <section class="max-h-[500px] p-4 overflow-y-auto space-y-4"${add_attribute("this", elemChat, 0)}>${each(messageFeed, (bubble) => {
        return `${bubble.host === true ? `<div class="grid grid-cols-[auto_1fr] gap-2">${validate_component(Avatar, "Avatar").$$render(
          $$result,
          {
            src: "https://i.pravatar.cc/?img=" + bubble.avatar,
            width: "w-12"
          },
          {},
          {}
        )} <div class="card p-4 variant-soft rounded-tl-none space-y-2"><header class="flex justify-between items-center"><p class="font-bold">${escape(bubble.name)}</p> <small class="opacity-50">${escape(bubble.timestamp)}</small></header> <p>${escape(bubble.message)}</p></div> </div>` : `<div class="grid grid-cols-[1fr_auto] gap-2"><div class="${"card p-4 rounded-tr-none space-y-2 " + escape(bubble.color, true)}"><header class="flex justify-between items-center"><p class="font-bold">${escape(bubble.name)}</p> <small class="opacity-50">${escape(bubble.timestamp)}</small></header> <p>${escape(bubble.message)}</p></div> ${validate_component(Avatar, "Avatar").$$render(
          $$result,
          {
            src: "https://i.pravatar.cc/?img=" + bubble.avatar,
            width: "w-12"
          },
          {},
          {}
        )} </div>`}`;
      })}</section>  <section class="border-t border-surface-500/30 p-4"><div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token"><button class="input-group-shim" data-svelte-h="svelte-pe7l84">+</button> <textarea class="bg-transparent border-0 ring-0" name="prompt" id="prompt" placeholder="Write a message..." rows="1">${escape("")}</textarea> <button${add_attribute(
        "class",
        "input-group-shim",
        0
      )}><i class="fa-solid fa-paper-plane"></i></button></div></section></div></div></section> `;
    },
    default: () => {
      return ` `;
    }
  })}`;
});
export {
  Page as default
};

import { c as create_ssr_component, v as validate_component, d as add_attribute, h as each, e as escape } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const movies = [
  {
    name: "The Flash",
    imageUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    url: "https://www.themoviedb.org/movie/298618-the-flash"
  },
  {
    name: "Guardians of the Galaxy Vol. 3",
    imageUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    url: "https://www.themoviedb.org/movie/447365-guardians-of-the-galaxy-vol-3"
  },
  {
    name: "Black Panther: Wakanda Forever",
    imageUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    url: "https://www.themoviedb.org/movie/505642-black-panther-wakanda-forever"
  },
  {
    name: "Avengers: Infinity War",
    imageUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    url: "https://www.themoviedb.org/movie/299536-avengers-infinity-war"
  },
  {
    name: "Spider-Man: No Way Home",
    imageUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    url: "https://www.themoviedb.org/movie/634649-spider-man-no-way-home"
  },
  {
    name: "The Batman",
    imageUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    url: "https://www.themoviedb.org/movie/414906-the-batman"
  },
  {
    name: "Iron Man",
    imageUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    url: "https://www.themoviedb.org/movie/1726-iron-man"
  },
  {
    name: "Venom: Let There Be Carnage",
    imageUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
    url: "https://www.themoviedb.org/movie/580489-venom-let-there-be-carnage"
  },
  {
    name: "Deadpool",
    imageUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3E53WEZJqP6aM84D8CckXx4pIHw.jpg",
    url: "https://www.themoviedb.org/movie/293660-deadpool"
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Element,
    name: "Scroll Containers",
    description: "Create scrolling containers using the scroll snap features from Tailwind."
  };
  const snapOptions = ["snap-start", "snap-end", "snap-center", "snap-align-none"];
  let currentSnap = snapOptions[0];
  let elemCarousel;
  const unsplashIds = [
    "vjUokUWbFOs",
    "1aJuPtQJX_I",
    "Jp6O3FFRdEI",
    "I3C_eojFVQY",
    "s0fXOuyTH1M",
    "z_X0PxmBuIQ"
  ];
  let elemMovies;
  return `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
    usage: () => {
      return `  <section class="space-y-4" data-svelte-h="svelte-2hqa4q"><h2 class="h2">Tailwind References</h2> <p>Use the following links to learn more about Tailwind&#39;s scroll behavior and snap features.</p> <div class="table-container"><table class="table"><thead><tr><th>Feature</th> <th>Description</th></tr></thead> <tbody><tr><td><a class="anchor" href="https://tailwindcss.com/docs/scroll-behavior" target="_blank">scroll-behavior</a></td> <td>Controls the scroll behavior of an element.</td></tr> <tr><td><a class="anchor" href="https://tailwindcss.com/docs/scroll-margin" target="_blank">scroll-margin</a></td> <td>Controls the scroll offset around items in a snap container.</td></tr> <tr><td><a class="anchor" href="https://tailwindcss.com/docs/scroll-padding" target="_blank">scroll-padding</a></td> <td>Controls an element&#39;s scroll offset within a snap container.</td></tr> <tr><td><a class="anchor" href="https://tailwindcss.com/docs/scroll-snap-align" target="_blank">scroll-snap-align</a></td> <td>Controls the scroll snap alignment of an element.</td></tr> <tr><td><a class="anchor" href="https://tailwindcss.com/docs/scroll-snap-stop" target="_blank">scroll-snap-stop</a></td> <td>Controls whether you can skip past possible snap positions.</td></tr> <tr><td><a class="anchor" href="https://tailwindcss.com/docs/scroll-snap-type" target="_blank">scroll-snap-type</a></td> <td>Controls how strictly snap points are enforced in a snap container.</td></tr></tbody></table></div></section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1iwe1do">Carousels</h2> <p data-svelte-h="svelte-f9p663">Using Scroll Containers, we can create a fully functional carousel, complete with thumbnail selection. This introduces javascript
				logic to control the carousel navigation on demand.</p> ${validate_component(DocsPreview, "DocsPreview").$$render(
        $$result,
        {
          regionPreview: "grid grid-cols-1 gap-4",
          background: "neutral"
        },
        {},
        {
          source: () => {
            return `<h2 class="h2" data-svelte-h="svelte-1ew9oe5">Carousel</h2> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
let elemCarousel: HTMLDivElement;
const unsplashIds = ['vjUokUWbFOs', '1aJuPtQJX_I', 'Jp6O3FFRdEI', 'I3C_eojFVQY', 's0fXOuyTH1M', 'z_X0PxmBuIQ'];
					`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
function carouselLeft(): void {
	const x =
		elemCarousel.scrollLeft === 0
			? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
			: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
	elemCarousel.scroll(x, 0);
}
					`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `

function carouselRight(): void {
	const x =
		elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
			? 0 // loop
			: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
	elemCarousel.scroll(x, 0);
}
					`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
	<!-- Button: Left -->
	<button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
		<i class="fa-solid fa-arrow-left" />
	</button>
	<!-- Full Images -->
	<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
		{#each unsplashIds as unsplashId}
			<img
				class="snap-center w-[1024px] rounded-container-token"
				src="https://source.unsplash.com/{unsplashId}/1024x768"
				alt={unsplashId}
				loading="lazy"
			/>
		{/each}
	</div>
	<!-- Button: Right -->
	<button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
		<i class="fa-solid fa-arrow-right" />
	</button>
</div>
`
              },
              {},
              {}
            )} <h2 class="h2" data-svelte-h="svelte-1r80x9w">Carousel Thumbnails</h2> ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
function carouselThumbnail(index: number) {
	elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
}
				`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<div class="card p-4 grid grid-cols-6 gap-4">
	{#each unsplashIds as unsplashId, i}
		<button type="button" on:click={() => carouselThumbnail(i)}>
			<img
				class="rounded-container-token"
				src="https://source.unsplash.com/{unsplashId}/256x256"
				alt={unsplashId}
				loading="lazy"
			/>
		</button>
	{/each}
</div>
`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return ` <div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center"> <button type="button" class="btn-icon variant-filled" data-svelte-h="svelte-kzmj5k"><i class="fa-solid fa-arrow-left"></i></button>  <div class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto"${add_attribute("this", elemCarousel, 0)}>${each(unsplashIds, (unsplashId) => {
              return `<img class="snap-center w-[1024px] rounded-container-token" src="${"https://source.unsplash.com/" + escape(unsplashId, true) + "/1024x768"}"${add_attribute("alt", unsplashId, 0)} loading="lazy">`;
            })}</div>  <button type="button" class="btn-icon variant-filled" data-svelte-h="svelte-18wo6ki"><i class="fa-solid fa-arrow-right"></i></button></div>  <div class="card p-4 grid grid-cols-6 gap-4">${each(unsplashIds, (unsplashId, i) => {
              return `<button type="button"><img class="rounded-container-token" src="${"https://source.unsplash.com/" + escape(unsplashId, true) + "/256x256"}"${add_attribute("alt", unsplashId, 0)} loading="lazy"> </button>`;
            })}</div>`;
          }
        }
      )}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-15hh80p">Multi-Column</h2> ${validate_component(DocsPreview, "DocsPreview").$$render(
        $$result,
        {
          background: "neutral",
          regionFooter: "text-center"
        },
        {},
        {
          footer: () => {
            return `<a class="btn btn-sm variant-soft" href="https://www.themoviedb.org/" target="_blank" data-svelte-h="svelte-1u2swwl">Attribution: TMDB</a> `;
          },
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "ts",
                code: `
let elemMovies: HTMLDivElement;

function multiColumnLeft(): void {
	let x = elemMovies.scrollWidth;
	if (elemMovies.scrollLeft !== 0) x = elemMovies.scrollLeft - elemMovies.clientWidth;
	elemMovies.scroll(x, 0);
}

function multiColumnRight(): void {
	let x = 0;
	// -1 is used because different browsers use different methods to round scrollWidth pixels.
	if (elemMovies.scrollLeft < elemMovies.scrollWidth - elemMovies.clientWidth - 1) x = elemMovies.scrollLeft + elemMovies.clientWidth;
	elemMovies.scroll(x, 0);
}
					`
              },
              {},
              {}
            )} ${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
	<!-- Button: Left -->
	<button type="button" class="btn-icon variant-filled" on:click={multiColumnLeft}>
		<i class="fa-solid fa-arrow-left" />
	</button>
	<!-- Carousel -->
	<div bind:this={elemMovies} class="snap-x snap-mandatory scroll-smooth flex gap-2 pb-2 overflow-x-auto">
		{#each moviesData.movies as movie}
			<a href={movie.url} target="_blank" class="shrink-0 w-[28%] snap-start">
				<img
					class="rounded-container-token hover:brightness-125"
					src={movie.imageUrl}
					alt={movie.name}
					title={movie.name}
					loading="lazy"
				/>
			</a>
		{/each}
	</div>
	<!-- Button-Right -->
	<button type="button" class="btn-icon variant-filled" on:click={multiColumnRight}>
		<i class="fa-solid fa-arrow-right" />
	</button>
</div>
					`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `<div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center"> <button type="button" class="btn-icon variant-filled" data-svelte-h="svelte-fxm1u9"><i class="fa-solid fa-arrow-left"></i></button>  <div class="snap-x snap-mandatory scroll-smooth flex gap-2 pb-2 overflow-x-auto"${add_attribute("this", elemMovies, 0)}>${each(movies, (movie) => {
              return `<a${add_attribute("href", movie.url, 0)} target="_blank" class="shrink-0 w-[28%] snap-start" data-svelte-h="svelte-1sfnsn8"><img class="rounded-container-token hover:brightness-125"${add_attribute("src", movie.imageUrl, 0)}${add_attribute("alt", movie.name, 0)}${add_attribute("title", movie.name, 0)} loading="lazy"> </a>`;
            })}</div>  <button type="button" class="btn-icon variant-filled" data-svelte-h="svelte-1cufeqz"><i class="fa-solid fa-arrow-right"></i></button></div>`;
          }
        }
      )}</section> `;
    },
    sandbox: () => {
      return ` ${validate_component(DocsPreview, "DocsPreview").$$render(
        $$result,
        {
          regionPreview: "text-token",
          regionViewport: "!p-0",
          regionFooter: "text-center"
        },
        {},
        {
          footer: () => {
            return `<div class="flex justify-between items-center gap-4"><select class="select w-auto">${each(snapOptions, (o) => {
              return `<option${add_attribute("value", o, 0)}>${escape(o)}</option>`;
            })}</select> <p data-svelte-h="svelte-v2m5wh">Scroll left or right to demo snapping.</p></div> `;
          },
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">
	{#each Array.from({ length: 8 }) as _, i}
		<div class="${currentSnap} shrink-0 card py-20 w-40 md:w-80 text-center">{i + 1}</div>
	{/each}
</div>
`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `<div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">${each({ length: 8 }, (_, i) => {
              return `<div class="${escape(currentSnap, true) + " shrink-0 card py-20 w-40 md:w-80 text-center"}">${escape(i + 1)}</div>`;
            })}</div>`;
          }
        }
      )} `;
    },
    default: () => {
      return ` `;
    }
  })}`;
});
export {
  Page as default
};

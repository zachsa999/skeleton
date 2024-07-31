export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/AbrilFatface.ttf","fonts/PlayfairDisplay-Italic.ttf","fonts/Quicksand.ttf","fonts/SpaceGrotesk.ttf"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.YzVG5g8n.js","app":"_app/immutable/entry/app.C-iFppM2.js","imports":["_app/immutable/entry/start.YzVG5g8n.js","_app/immutable/chunks/entry.Ds707NnM.js","_app/immutable/chunks/scheduler.DuiDmW8m.js","_app/immutable/chunks/index.CBfG0JP6.js","_app/immutable/entry/app.C-iFppM2.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.DuiDmW8m.js","_app/immutable/chunks/index.Dfge40-r.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js')),
			__memo(() => import('./nodes/21.js')),
			__memo(() => import('./nodes/22.js')),
			__memo(() => import('./nodes/23.js')),
			__memo(() => import('./nodes/24.js')),
			__memo(() => import('./nodes/25.js')),
			__memo(() => import('./nodes/26.js')),
			__memo(() => import('./nodes/27.js')),
			__memo(() => import('./nodes/28.js')),
			__memo(() => import('./nodes/29.js')),
			__memo(() => import('./nodes/30.js')),
			__memo(() => import('./nodes/31.js')),
			__memo(() => import('./nodes/32.js')),
			__memo(() => import('./nodes/33.js')),
			__memo(() => import('./nodes/34.js')),
			__memo(() => import('./nodes/35.js')),
			__memo(() => import('./nodes/36.js')),
			__memo(() => import('./nodes/37.js')),
			__memo(() => import('./nodes/38.js')),
			__memo(() => import('./nodes/39.js')),
			__memo(() => import('./nodes/40.js')),
			__memo(() => import('./nodes/41.js')),
			__memo(() => import('./nodes/42.js')),
			__memo(() => import('./nodes/43.js')),
			__memo(() => import('./nodes/44.js')),
			__memo(() => import('./nodes/45.js')),
			__memo(() => import('./nodes/46.js')),
			__memo(() => import('./nodes/47.js')),
			__memo(() => import('./nodes/48.js')),
			__memo(() => import('./nodes/49.js')),
			__memo(() => import('./nodes/50.js')),
			__memo(() => import('./nodes/51.js')),
			__memo(() => import('./nodes/52.js')),
			__memo(() => import('./nodes/53.js')),
			__memo(() => import('./nodes/54.js')),
			__memo(() => import('./nodes/55.js')),
			__memo(() => import('./nodes/56.js')),
			__memo(() => import('./nodes/57.js')),
			__memo(() => import('./nodes/58.js')),
			__memo(() => import('./nodes/59.js')),
			__memo(() => import('./nodes/60.js')),
			__memo(() => import('./nodes/61.js')),
			__memo(() => import('./nodes/62.js')),
			__memo(() => import('./nodes/63.js')),
			__memo(() => import('./nodes/64.js')),
			__memo(() => import('./nodes/65.js')),
			__memo(() => import('./nodes/66.js')),
			__memo(() => import('./nodes/67.js')),
			__memo(() => import('./nodes/68.js')),
			__memo(() => import('./nodes/69.js')),
			__memo(() => import('./nodes/70.js')),
			__memo(() => import('./nodes/71.js')),
			__memo(() => import('./nodes/72.js')),
			__memo(() => import('./nodes/73.js')),
			__memo(() => import('./nodes/74.js')),
			__memo(() => import('./nodes/75.js')),
			__memo(() => import('./nodes/76.js')),
			__memo(() => import('./nodes/77.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(inner)/actions/clipboard",
				pattern: /^\/actions\/clipboard\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(inner)/actions/filters",
				pattern: /^\/actions\/filters\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(inner)/actions/focus-trap",
				pattern: /^\/actions\/focus-trap\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 76 },
				endpoint: null
			},
			{
				id: "/blog/rss",
				pattern: /^\/blog\/rss\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/blog/rss/_server.ts.js'))
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 77 },
				endpoint: null
			},
			{
				id: "/(inner)/components/accordions",
				pattern: /^\/components\/accordions\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(inner)/components/app-bar",
				pattern: /^\/components\/app-bar\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(inner)/components/app-rail",
				pattern: /^\/components\/app-rail\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(inner)/components/app-shell",
				pattern: /^\/components\/app-shell\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(inner)/components/autocomplete",
				pattern: /^\/components\/autocomplete\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(inner)/components/avatars",
				pattern: /^\/components\/avatars\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(inner)/components/conic-gradients",
				pattern: /^\/components\/conic-gradients\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(inner)/components/file-buttons",
				pattern: /^\/components\/file-buttons\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(inner)/components/file-dropzone",
				pattern: /^\/components\/file-dropzone\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(inner)/components/input-chips",
				pattern: /^\/components\/input-chips\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(inner)/components/listboxes",
				pattern: /^\/components\/listboxes\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(inner)/components/paginators",
				pattern: /^\/components\/paginators\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(inner)/components/progress-bars",
				pattern: /^\/components\/progress-bars\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(inner)/components/progress-radials",
				pattern: /^\/components\/progress-radials\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(inner)/components/radio-groups",
				pattern: /^\/components\/radio-groups\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(inner)/components/range-sliders",
				pattern: /^\/components\/range-sliders\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(inner)/components/ratings",
				pattern: /^\/components\/ratings\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/(inner)/components/slide-toggles",
				pattern: /^\/components\/slide-toggles\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/(inner)/components/steppers",
				pattern: /^\/components\/steppers\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/(inner)/components/tables",
				pattern: /^\/components\/tables\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/(inner)/components/tabs",
				pattern: /^\/components\/tabs\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/(inner)/components/tree-views",
				pattern: /^\/components\/tree-views\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/(inner)/docs/colors",
				pattern: /^\/docs\/colors\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/(inner)/docs/contributing",
				pattern: /^\/docs\/contributing\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/(inner)/docs/contributing/documentation",
				pattern: /^\/docs\/contributing\/documentation\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/(inner)/docs/contributing/requirements",
				pattern: /^\/docs\/contributing\/requirements\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/(inner)/docs/contributing/style-guide",
				pattern: /^\/docs\/contributing\/style-guide\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/(inner)/docs/contributing/sveld",
				pattern: /^\/docs\/contributing\/sveld\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/(inner)/docs/dark-mode",
				pattern: /^\/docs\/dark-mode\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/(inner)/docs/figma",
				pattern: /^\/docs\/figma\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/(inner)/docs/generator",
				pattern: /^\/docs\/generator\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/(inner)/docs/get-started",
				pattern: /^\/docs\/get-started\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/(inner)/docs/introduction",
				pattern: /^\/docs\/introduction\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/(inner)/docs/purgecss",
				pattern: /^\/docs\/purgecss\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/(inner)/docs/quickstart",
				pattern: /^\/docs\/quickstart\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/(inner)/docs/sponsorship",
				pattern: /^\/docs\/sponsorship\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/(inner)/docs/sponsorship/licensing",
				pattern: /^\/docs\/sponsorship\/licensing\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/(inner)/docs/ssd",
				pattern: /^\/docs\/ssd\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/(inner)/docs/styling",
				pattern: /^\/docs\/styling\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 45 },
				endpoint: null
			},
			{
				id: "/(inner)/docs/tauri",
				pattern: /^\/docs\/tauri\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 46 },
				endpoint: null
			},
			{
				id: "/(inner)/docs/themes",
				pattern: /^\/docs\/themes\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 47 },
				endpoint: null
			},
			{
				id: "/(inner)/docs/tokens",
				pattern: /^\/docs\/tokens\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 48 },
				endpoint: null
			},
			{
				id: "/(inner)/docs/transitions",
				pattern: /^\/docs\/transitions\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 49 },
				endpoint: null
			},
			{
				id: "/(inner)/docs/variants",
				pattern: /^\/docs\/variants\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 50 },
				endpoint: null
			},
			{
				id: "/(inner)/elements/alerts",
				pattern: /^\/elements\/alerts\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 51 },
				endpoint: null
			},
			{
				id: "/(inner)/elements/badges",
				pattern: /^\/elements\/badges\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 52 },
				endpoint: null
			},
			{
				id: "/(inner)/elements/breadcrumbs",
				pattern: /^\/elements\/breadcrumbs\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 53 },
				endpoint: null
			},
			{
				id: "/(inner)/elements/buttons",
				pattern: /^\/elements\/buttons\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 54 },
				endpoint: null
			},
			{
				id: "/(inner)/elements/cards",
				pattern: /^\/elements\/cards\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 55 },
				endpoint: null
			},
			{
				id: "/(inner)/elements/chat",
				pattern: /^\/elements\/chat\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 56 },
				endpoint: null
			},
			{
				id: "/(inner)/elements/chips",
				pattern: /^\/elements\/chips\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 57 },
				endpoint: null
			},
			{
				id: "/(inner)/elements/core",
				pattern: /^\/elements\/core\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 58 },
				endpoint: null
			},
			{
				id: "/(inner)/elements/forms",
				pattern: /^\/elements\/forms\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 59 },
				endpoint: null
			},
			{
				id: "/(inner)/elements/gradient-headings",
				pattern: /^\/elements\/gradient-headings\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 60 },
				endpoint: null
			},
			{
				id: "/(inner)/elements/image-layouts",
				pattern: /^\/elements\/image-layouts\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 61 },
				endpoint: null
			},
			{
				id: "/(inner)/elements/lists",
				pattern: /^\/elements\/lists\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 62 },
				endpoint: null
			},
			{
				id: "/(inner)/elements/logo-clouds",
				pattern: /^\/elements\/logo-clouds\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 63 },
				endpoint: null
			},
			{
				id: "/(inner)/elements/placeholders",
				pattern: /^\/elements\/placeholders\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 64 },
				endpoint: null
			},
			{
				id: "/(inner)/elements/scroll-containers",
				pattern: /^\/elements\/scroll-containers\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 65 },
				endpoint: null
			},
			{
				id: "/(inner)/elements/tables",
				pattern: /^\/elements\/tables\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 66 },
				endpoint: null
			},
			{
				id: "/(inner)/elements/typography",
				pattern: /^\/elements\/typography\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 67 },
				endpoint: null
			},
			{
				id: "/(inner)/template",
				pattern: /^\/template\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 68 },
				endpoint: null
			},
			{
				id: "/(inner)/utilities/codeblocks",
				pattern: /^\/utilities\/codeblocks\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 69 },
				endpoint: null
			},
			{
				id: "/(inner)/utilities/drawers",
				pattern: /^\/utilities\/drawers\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 70 },
				endpoint: null
			},
			{
				id: "/(inner)/utilities/local-storage-stores",
				pattern: /^\/utilities\/local-storage-stores\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 71 },
				endpoint: null
			},
			{
				id: "/(inner)/utilities/modals",
				pattern: /^\/utilities\/modals\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 72 },
				endpoint: null
			},
			{
				id: "/(inner)/utilities/popups",
				pattern: /^\/utilities\/popups\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 73 },
				endpoint: null
			},
			{
				id: "/(inner)/utilities/table-of-contents",
				pattern: /^\/utilities\/table-of-contents\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 74 },
				endpoint: null
			},
			{
				id: "/(inner)/utilities/toasts",
				pattern: /^\/utilities\/toasts\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 75 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

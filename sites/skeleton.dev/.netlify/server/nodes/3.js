import * as universal from '../entries/pages/_page.ts.js';
import * as server from '../entries/pages/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.BtQeUWzZ.js","_app/immutable/chunks/scheduler.DuiDmW8m.js","_app/immutable/chunks/index.Dfge40-r.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.CfQAjzRZ.js","_app/immutable/chunks/index.CBfG0JP6.js","_app/immutable/chunks/images.C70YGO-b.js","_app/immutable/chunks/Avatar.CxiQ4YGV.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/ProgressRadial.DldY3xe1.js","_app/immutable/chunks/DocsPreview.iu2ggu5v.js","_app/immutable/chunks/index.CXSvr4HF.js","_app/immutable/chunks/SlideToggle.8oeGBo6G.js","_app/immutable/chunks/LightSwitch.CXr4MoH0.js","_app/immutable/chunks/popup.UKPPaKQe.js","_app/immutable/chunks/stores.Czbyzpqb.js","_app/immutable/chunks/Noir.BELBkdQz.js","_app/immutable/chunks/AccordionItem.BAU5CUGM.js","_app/immutable/chunks/transitions.FXurGCgU.js","_app/immutable/chunks/ListBoxItem.C_McYdOD.js","_app/immutable/chunks/ProgressBar.gpAUVWjX.js","_app/immutable/chunks/Tab.CFKlhsG9.js"];
export const stylesheets = ["_app/immutable/assets/3.DV2iKke9.css","_app/immutable/assets/ProgressBar.Cirlo5Z8.css"];
export const fonts = [];

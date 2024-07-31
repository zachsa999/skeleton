import { w as writable } from "./index.js";
import { l as localStorageStore } from "./ProgressBar.svelte_svelte_type_style_lang.js";
const storeVercelProductionMode = writable(false);
const storeTheme = writable("skeleton");
const storeOnboardMethod = localStorageStore("storeOnboardMethod", "cli");
export {
  storeVercelProductionMode as a,
  storeOnboardMethod as b,
  storeTheme as s
};

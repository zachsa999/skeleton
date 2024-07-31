import { c as create_ssr_component, h as each, e as escape, a as subscribe, o as set_store_value, v as validate_component, d as add_attribute } from "../../../../../chunks/ssr.js";
import { l as localStorageStore } from "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { P as ProgressBar } from "../../../../../chunks/ProgressBar.js";
import { S as SlideToggle } from "../../../../../chunks/SlideToggle.js";
import { L as LightSwitch } from "../../../../../chunks/LightSwitch.js";
import { s as storePreview } from "../../../../../chunks/stores6.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const tailwindNumbers = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
const semanticNames = ["primary", "secondary", "tertiary", "success", "warning", "error", "surface"];
const colorPropsArr = [];
semanticNames.forEach((colorName) => {
  return tailwindNumbers.forEach((colorShade) => {
    const colorLabel = colorName.charAt(0).toUpperCase() + colorName.slice(1);
    colorPropsArr.push({ label: `${colorLabel} ${colorShade}`, value: `var(--color-${colorName}-${colorShade})` });
  });
});
const inputSettings = {
  colorProps: [
    // Black
    { label: "Black", value: "0 0 0" },
    // White
    { label: "White", value: "255 255 255" },
    // Implement each available color shade
    ...colorPropsArr
  ],
  fonts: ["sans", "serif", "mono", "system"],
  rounded: ["0px", "2px", "4px", "6px", "8px", "12px", "16px", "24px"],
  border: ["0px", "1px", "2px", "4px", "6px", "8px"]
};
const fontSettings = {
  // Tailwind Sans-Serif
  sans: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
  // Tailwind Serif
  serif: `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
  // Tailwind Mono
  mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
  // System UI
  system: `system-ui`
};
const swatchColorClasses = {
  primary: {
    50: "bg-primary-50",
    100: "bg-primary-100",
    200: "bg-primary-200",
    300: "bg-primary-300",
    400: "bg-primary-400",
    500: "bg-primary-500 text-on-primary-token fill-on-primary-token",
    600: "bg-primary-600",
    700: "bg-primary-700",
    800: "bg-primary-800",
    900: "bg-primary-900"
  },
  secondary: {
    50: "bg-secondary-50",
    100: "bg-secondary-100",
    200: "bg-secondary-200",
    300: "bg-secondary-300",
    400: "bg-secondary-400",
    500: "bg-secondary-500 text-on-secondary-token fill-on-secondary-token",
    600: "bg-secondary-600",
    700: "bg-secondary-700",
    800: "bg-secondary-800",
    900: "bg-secondary-900"
  },
  tertiary: {
    50: "bg-tertiary-50",
    100: "bg-tertiary-100",
    200: "bg-tertiary-200",
    300: "bg-tertiary-300",
    400: "bg-tertiary-400",
    500: "bg-tertiary-500 text-on-tertiary-token fill-on-tertiary-token",
    600: "bg-tertiary-600",
    700: "bg-tertiary-700",
    800: "bg-tertiary-800",
    900: "bg-tertiary-900"
  },
  success: {
    50: "bg-success-50",
    100: "bg-success-100",
    200: "bg-success-200",
    300: "bg-success-300",
    400: "bg-success-400",
    500: "bg-success-500 text-on-success-token fill-on-success-token",
    600: "bg-success-600",
    700: "bg-success-700",
    800: "bg-success-800",
    900: "bg-success-900"
  },
  warning: {
    50: "bg-warning-50",
    100: "bg-warning-100",
    200: "bg-warning-200",
    300: "bg-warning-300",
    400: "bg-warning-400",
    500: "bg-warning-500 text-on-warning-token fill-on-warning-token",
    600: "bg-warning-600",
    700: "bg-warning-700",
    800: "bg-warning-800",
    900: "bg-warning-900"
  },
  error: {
    50: "bg-error-50",
    100: "bg-error-100",
    200: "bg-error-200",
    300: "bg-error-300",
    400: "bg-error-400",
    500: "bg-error-500 text-on-error-token fill-on-primary-token",
    600: "bg-error-600",
    700: "bg-error-700",
    800: "bg-error-800",
    900: "bg-error-900"
  },
  surface: {
    50: "bg-surface-50",
    100: "bg-surface-100",
    200: "bg-surface-200",
    300: "bg-surface-300",
    400: "bg-surface-400",
    500: "bg-surface-500 text-on-surface-token fill-on-surface-token",
    600: "bg-surface-600",
    700: "bg-surface-700",
    800: "bg-surface-800",
    900: "bg-surface-900"
  }
};
const Swatch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "primary" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<div class="grid grid-cols-11 gap-0">${each(Object.entries(swatchColorClasses[color]), ([shade, shadeClasses]) => {
    return `<div class="${["grid grid-rows-[1fr_40px] text-center", shade === "500" ? "col-span-2" : ""].join(" ").trim()}"> <div class="text-surface-700 dark:text-surface-300 text-sm">${escape(shade)}</div>  <div class="bg-black/5 dark:bg-white/5"><div class="${"h-full flex justify-center items-center " + escape(shadeClasses, true)}">${shade === "500" ? `<div class="grid grid-cols-[auto_1fr] gap-1.5 place-items-center" data-svelte-h="svelte-1bh50hg"><i class="fa-solid fa-skull"></i> <span class="hidden xl:inline-block">Text</span> </div>` : ``} </div></div> </div>`;
  })}</div>`;
});
function hexToRgb(hex) {
  const sanitizedHex = hex.replaceAll("##", "#");
  const colorParts = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(sanitizedHex);
  if (!colorParts)
    return null;
  const [, r, g, b] = colorParts;
  return {
    r: parseInt(r, 16),
    g: parseInt(g, 16),
    b: parseInt(b, 16)
  };
}
function hexToTailwindRgbString(hex) {
  const sanitizedHex = hex.replaceAll("##", "#");
  const colorParts = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(sanitizedHex);
  if (!colorParts)
    return "(invalid)";
  const [, r, g, b] = colorParts;
  return `${parseInt(r, 16)} ${parseInt(g, 16)} ${parseInt(b, 16)}`;
}
function rgbToHex(r, g, b) {
  const toHex = (c) => `0${c.toString(16)}`.slice(-2);
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
function generateA11yOnColor(hex) {
  const black = calculateRatio(hex, "#000000");
  const white = calculateRatio(hex, "#FFFFFF");
  return black < white ? "0 0 0" : "255 255 255";
}
function lighten(hex, intensity) {
  const color = hexToRgb(`#${hex}`);
  if (!color)
    return "";
  const r = Math.round(color.r + (255 - color.r) * intensity);
  const g = Math.round(color.g + (255 - color.g) * intensity);
  const b = Math.round(color.b + (255 - color.b) * intensity);
  return rgbToHex(r, g, b);
}
function darken(hex, intensity) {
  const color = hexToRgb(hex);
  if (!color)
    return "";
  const r = Math.round(color.r * intensity);
  const g = Math.round(color.g * intensity);
  const b = Math.round(color.b * intensity);
  return rgbToHex(r, g, b);
}
function generatePalette(baseColor) {
  const hexValidation = new RegExp(/^#[0-9a-f]{6}$/i);
  if (!hexValidation.test(baseColor))
    baseColor = "#CCCCCC";
  const hex500 = `#${baseColor}`.replace("##", "#");
  const response = {
    500: { hex: hex500, rgb: hexToTailwindRgbString(hex500), on: generateA11yOnColor(hex500) }
  };
  const intensityMap = {
    50: 0.85,
    100: 0.8,
    200: 0.75,
    300: 0.6,
    400: 0.3,
    600: 0.9,
    700: 0.75,
    800: 0.6,
    900: 0.49
  };
  [50, 100, 200, 300, 400].forEach((level) => {
    const hex = lighten(baseColor, intensityMap[level]);
    response[level] = { hex, rgb: hexToTailwindRgbString(hex), on: generateA11yOnColor(hex) };
  });
  [600, 700, 800, 900].forEach((level) => {
    const hex = darken(baseColor, intensityMap[level]);
    response[level] = { hex, rgb: hexToTailwindRgbString(hex), on: generateA11yOnColor(hex) };
  });
  return response;
}
const contrastLevels = {
  /** For text that is less than 18pt */
  small: {
    AA: 1 / 4.5,
    AAA: 1 / 7
  },
  /** For text that is at or is larger than 18pt */
  large: {
    AA: 1 / 3,
    AAA: 1 / 4.5
  }
};
function getLuminance(r, g, b) {
  const { _r, _g, _b } = typeof r === "object" ? { _r: r.r, _g: r.g, _b: r.b } : { _r: r, _g: g, _b: b };
  if (_r === void 0 || _g === void 0 || _b === void 0)
    throw new Error("Invalid RGB value!");
  const a = [_r, _g, _b].map(function(v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
function destringRgb(rgbString) {
  const rgb = rgbString.match(/(\d+),?\s*(\d+),?\s*(\d+)/);
  if (!rgb)
    throw new Error("Invalid RGB string!");
  return { r: parseInt(rgb[1], 10), g: parseInt(rgb[2], 10), b: parseInt(rgb[3], 10) };
}
function handleStringColor(colorString, returnType = "rgb") {
  if (colorString.includes("--")) {
    colorString = colorString.replace(/var\(|\)/g, "");
    const cssVarHydrated = getComputedStyle(document.documentElement).getPropertyValue(colorString).trim();
    return handleStringColor(cssVarHydrated, returnType);
  }
  if (colorString.includes(" ")) {
    const rgb = destringRgb(colorString);
    return returnType === "hex" ? rgbToHex(rgb.r, rgb.g, rgb.b) : rgb;
  }
  if (colorString.includes("#")) {
    const rgb = hexToRgb(colorString);
    if (!rgb)
      return "(invalid)";
    return returnType === "hex" ? colorString : rgb;
  }
  return colorString;
}
function calculateRatio(luminance1, luminance2) {
  const lum1 = typeof luminance1 === "string" ? getLuminance(handleStringColor(luminance1)) : luminance1;
  const lum2 = typeof luminance2 === "string" ? getLuminance(handleStringColor(luminance2)) : luminance2;
  if (lum1 === void 0 || lum2 === void 0)
    throw new Error("Luminance is undefined!");
  return lum1 > lum2 ? (lum2 + 0.05) / (lum1 + 0.05) : (lum1 + 0.05) / (lum2 + 0.05);
}
function textPasses(textColor, backgroundColor, size, level) {
  const ratio = calculateRatio(textColor, backgroundColor);
  return ratio <= contrastLevels[size][level];
}
function hexValueIsValid(textColor) {
  return /^#[0-9A-F]{6}$/i.test(textColor);
}
function getPassReport(textColor, backgroundColor) {
  const _textColor = handleStringColor(textColor, "hex");
  const _backgroundColor = handleStringColor(backgroundColor, "hex");
  const contrast = calculateRatio(_textColor, _backgroundColor);
  const smallAA = textPasses(_textColor, _backgroundColor, "small", "AA");
  const smallAAA = textPasses(_textColor, _backgroundColor, "small", "AAA");
  const largeAA = textPasses(_textColor, _backgroundColor, "large", "AA");
  const largeAAA = textPasses(_textColor, _backgroundColor, "large", "AAA");
  const fails = !smallAA && !smallAAA && !largeAA && !largeAAA;
  const AAAEmoji = '<i class="fa-solid fa-heart h-3"></i>';
  const AAEmoji = '<i class="fa-solid fa-star h-3"></i>';
  const largeAAEmoji = '<i class="fa-solid fa-star-half-stroke h-3"></i>';
  const failEmoji = '<i class="fa-solid fa-triangle-exclamation h-3"></i>';
  const report = {
    emoji: smallAAA ? AAAEmoji : smallAA ? AAEmoji : largeAA ? largeAAEmoji : failEmoji,
    note: `${_textColor} and ${_backgroundColor} ` + (smallAAA ? "has great contrast!" : smallAA ? "is satisfactory for larger text" : largeAA ? "has poor contrast" : "fail contrast guidelines")
  };
  return {
    textColor: _textColor,
    backgroundColor: _backgroundColor,
    contrast,
    report,
    smallAA,
    smallAAA,
    largeAA,
    largeAAA,
    fails
  };
}
const DocsThemer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let livePreviewStylesheet;
  let $storePreview, $$unsubscribe_storePreview;
  let $storeThemGenForm, $$unsubscribe_storeThemGenForm;
  $$unsubscribe_storePreview = subscribe(storePreview, (value) => $storePreview = value);
  const storeThemGenForm = localStorageStore("storeThemGenForm", {
    colors: [
      {
        key: "primary",
        label: "Primary",
        hex: "#0FBA81",
        rgb: "0 0 0",
        on: "0 0 0"
      },
      {
        key: "secondary",
        label: "Secondary",
        hex: "#4F46E5",
        rgb: "0 0 0",
        on: "255 255 255"
      },
      {
        key: "tertiary",
        label: "Tertiary",
        hex: "#0EA5E9",
        rgb: "0 0 0",
        on: "0 0 0"
      },
      {
        key: "success",
        label: "Success",
        hex: "#84cc16",
        rgb: "0 0 0",
        on: "0 0 0"
      },
      {
        key: "warning",
        label: "Warning",
        hex: "#EAB308",
        rgb: "0 0 0",
        on: "0 0 0"
      },
      {
        key: "error",
        label: "Error",
        hex: "#D41976",
        rgb: "0 0 0",
        on: "255 255 255"
      },
      {
        key: "surface",
        label: "Surface",
        hex: "#495a8f",
        rgb: "0 0 0",
        on: "255 255 255"
      }
    ],
    fontBase: "system",
    fontHeadings: "system",
    textColorLight: "0 0 0",
    textColorDark: "255 255 255",
    roundedBase: "9999px",
    roundedContainer: "8px",
    borderBase: "1px"
  });
  $$unsubscribe_storeThemGenForm = subscribe(storeThemGenForm, (value) => $storeThemGenForm = value);
  resetColorOnInvalidHex();
  let cssOutput = "";
  let conReports = getContrastReports();
  function resetColorOnInvalidHex() {
    const colorMapping = {
      primary: "#0FBA81",
      secondary: "#4F46E5",
      tertiary: "#0EA5E9",
      success: "#84cc16",
      warning: "#EAB308",
      error: "#D41976",
      surface: "#495a8f"
    };
    $storeThemGenForm.colors.forEach((color, i) => {
      if (hexValueIsValid(color.hex))
        return;
      if (color.key in colorMapping) {
        set_store_value(storeThemGenForm, $storeThemGenForm.colors[i].hex = colorMapping[color.key], $storeThemGenForm);
      }
    });
  }
  function generateColorCSS() {
    let newCSS = "";
    const newPalette = {};
    $storeThemGenForm.colors.forEach((color, i) => {
      const colorKey = color.key;
      newPalette[color.key] = generatePalette($storeThemGenForm.colors[i].hex);
      newCSS += `/* ${colorKey} | ${newPalette[colorKey][500].hex} */
	`;
      for (let [k, v] of Object.entries(newPalette[colorKey])) {
        newCSS += `--color-${colorKey}-${k}: ${v.rgb}; /* ⬅ ${v.hex} */
	`;
      }
    });
    return newCSS;
  }
  function generateColorCssInJS() {
    let newCssInJs = "";
    const newPalette = {};
    $storeThemGenForm.colors.forEach((color, i) => {
      const colorKey = color.key;
      newPalette[color.key] = generatePalette($storeThemGenForm.colors[i].hex);
      newCssInJs += `// ${colorKey} | ${newPalette[colorKey][500].hex} 
		`;
      for (let [k, v] of Object.entries(newPalette[colorKey])) {
        newCssInJs += `"--color-${colorKey}-${k}": "${v.rgb}", // ${v.hex}
		`;
      }
    });
    return newCssInJs;
  }
  function getContrastReports() {
    return $storeThemGenForm.colors.map((value) => ({
      ...value,
      contrastReport: getPassReport(value.hex, value.on)
    }));
  }
  const hexValuesAreValid = (colors) => {
    let valid = true;
    colors?.forEach((color) => {
      valid = valid && hexValueIsValid(color.hex);
    });
    return valid;
  };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (hexValuesAreValid($storeThemGenForm.colors)) {
        conReports = getContrastReports();
      }
    }
    {
      if ($storeThemGenForm && hexValuesAreValid($storeThemGenForm.colors)) {
        cssOutput = `
:root {
	/* =~= Theme Properties =~= */
	--theme-font-family-base: ${fontSettings[$storeThemGenForm.fontBase]};
	--theme-font-family-heading: ${fontSettings[$storeThemGenForm.fontHeadings]};
	--theme-font-color-base: ${$storeThemGenForm.textColorLight};
	--theme-font-color-dark: ${$storeThemGenForm.textColorDark};
	--theme-rounded-base: ${$storeThemGenForm.roundedBase};
	--theme-rounded-container: ${$storeThemGenForm.roundedContainer};
	--theme-border-base: ${$storeThemGenForm.borderBase};
	/* =~= Theme On-X Colors =~= */
	--on-primary: ${$storeThemGenForm.colors[0]?.on};
	--on-secondary: ${$storeThemGenForm.colors[1]?.on};
	--on-tertiary: ${$storeThemGenForm.colors[2]?.on};
	--on-success: ${$storeThemGenForm.colors[3]?.on};
	--on-warning: ${$storeThemGenForm.colors[4]?.on};
	--on-error: ${$storeThemGenForm.colors[5]?.on};
	--on-surface: ${$storeThemGenForm.colors[6]?.on};
	/* =~= Theme Colors  =~= */
	${generateColorCSS()}
}`;
        `
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": \`${fontSettings[$storeThemGenForm.fontBase]}\`,
		"--theme-font-family-heading": \`${fontSettings[$storeThemGenForm.fontHeadings]}\`,
		"--theme-font-color-base": "${$storeThemGenForm.textColorLight}",
		"--theme-font-color-dark": "${$storeThemGenForm.textColorDark}",
		"--theme-rounded-base": "${$storeThemGenForm.roundedBase}",
		"--theme-rounded-container": "${$storeThemGenForm.roundedContainer}",
		"--theme-border-base": "${$storeThemGenForm.borderBase}",
		// =~= Theme On-X Colors =~=
		"--on-primary": "${$storeThemGenForm.colors[0]?.on}",
		"--on-secondary": "${$storeThemGenForm.colors[1]?.on}",
		"--on-tertiary": "${$storeThemGenForm.colors[2]?.on}",
		"--on-success": "${$storeThemGenForm.colors[3]?.on}",
		"--on-warning": "${$storeThemGenForm.colors[4]?.on}",
		"--on-error": "${$storeThemGenForm.colors[5]?.on}",
		"--on-surface": "${$storeThemGenForm.colors[6]?.on}",
		// =~= Theme Colors  =~=
		${generateColorCssInJS()}
	}
}`;
      }
    }
    livePreviewStylesheet = $storePreview ? cssOutput : "";
    $$rendered = ` ${$$result.head += `<!-- HEAD_svelte-rmb33o_START --><!-- HTML_TAG_START -->${`<style>${livePreviewStylesheet}</style>`}<!-- HTML_TAG_END --><!-- HEAD_svelte-rmb33o_END -->`, ""} <div class="docs-themer space-y-4"><div class="card variant-glass p-4 flex justify-between items-center"><h2 class="h2" data-svelte-h="svelte-ppdk5a">Enable Preview</h2> ${validate_component(SlideToggle, "SlideToggle").$$render(
      $$result,
      { name: "preview", checked: $storePreview },
      {
        checked: ($$value) => {
          $storePreview = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="grid grid-cols-2 gap-4"> <section class="card col-span-2"> <header class="p-4 col-span-2 flex justify-between items-center"><div class="flex items-center space-x-4">${validate_component(LightSwitch, "LightSwitch").$$render($$result, {}, {}, {})}</div> <button class="btn variant-ghost-surface" ${!$storePreview ? "disabled" : ""}>Randomize Colors</button></header> <hr> <div class="p-4 grid grid-cols-1 gap-4">${each($storeThemGenForm.colors, (colorRow, i) => {
      return `<div class="grid grid-cols-1 lg:grid-cols-[170px_1fr_200px] gap-2 lg:gap-4"><label class="label"><span>${escape(colorRow.label)}</span> <div class="grid grid-cols-[auto_1fr] gap-4 place-items-end"><input class="input" type="color" ${!$storePreview ? "disabled" : ""}${add_attribute("value", colorRow.hex, 0)}> <input class="input" type="text" placeholder="#BADA55" ${!$storePreview ? "disabled" : ""}${add_attribute("value", colorRow.hex, 0)}> </div></label> ${validate_component(Swatch, "Swatch").$$render($$result, { color: colorRow.key }, {}, {})} <label><span data-svelte-h="svelte-sr1o91">Text &amp; Fill Color</span> <div class="flex"> <div class="input-group input-group-divider grid-cols-[1fr_auto]"> <select ${!$storePreview ? "disabled" : ""}>${each(inputSettings.colorProps, (c) => {
        return `<option${add_attribute("value", c.value, 0)}>${escape(c.label)}</option>`;
      })}</select>  ${$storePreview ? `<div class="${[
        "input-group-shim !px-3",
        (conReports[i].contrastReport.fails ? "!text-stone-900" : "") + " " + (conReports[i].contrastReport.fails ? "!bg-red-500" : "") + " " + (conReports[i].contrastReport.largeAA ? "!text-zinc-900" : "") + " " + (conReports[i].contrastReport.largeAA ? "!bg-amber-500" : "") + " " + (conReports[i].contrastReport.smallAAA || conReports[i].contrastReport.smallAA ? "!text-slate-900" : "") + " " + (conReports[i].contrastReport.smallAAA || conReports[i].contrastReport.smallAA ? "!bg-green-500" : "")
      ].join(" ").trim()}"><!-- HTML_TAG_START -->${conReports[i].contrastReport.report.emoji}<!-- HTML_TAG_END --> </div>` : ``}</div>  <div${add_attribute("data-popup", "popup-" + i, 0)} class="${[
        "text-xs card variant-filled p-2 whitespace-nowrap",
        (conReports[i].contrastReport.fails ? "!variant-filled-red-500" : "") + " " + (conReports[i].contrastReport.largeAA ? "!variant-filled-amber-500" : "") + " " + (conReports[i].contrastReport.smallAAA || conReports[i].contrastReport.smallAA ? "!variant-filled-green-500" : "")
      ].join(" ").trim()}">${escape(conReports[i].contrastReport.report.note)}  <div class="arrow variant-filled"></div></div> </div></label> </div>`;
    })}</div></section>  <section class="card p-4 grid grid-cols-2 gap-4 col-span-2 lg:col-span-1"> <h3 class="h3 col-span-2" data-toc-ignore data-svelte-h="svelte-1w6og72">Fonts</h3> <label class="label"><span data-svelte-h="svelte-17dx2gf">Base</span> <select class="select" ${!$storePreview ? "disabled" : ""}>${each(inputSettings.fonts, (f) => {
      return `<option${add_attribute("value", f, 0)}>${escape(f)}</option>`;
    })}</select></label> <label class="label"><span data-svelte-h="svelte-6msqql">Headings</span> <select class="select" ${!$storePreview ? "disabled" : ""}>${each(inputSettings.fonts, (f) => {
      return `<option${add_attribute("value", f, 0)}>${escape(f)}</option>`;
    })}</select></label>  <h3 class="h3 col-span-2" data-toc-ignore data-svelte-h="svelte-1povfyq">Text Color</h3> <label class="label"><span data-svelte-h="svelte-f30y99">Light Mode</span> <select class="select" ${!$storePreview ? "disabled" : ""}>${each(inputSettings.colorProps, (c) => {
      return `<option${add_attribute("value", c.value, 0)}>${escape(c.label)}</option>`;
    })}</select></label> <label class="label"><span data-svelte-h="svelte-ryd1tf">Dark Mode</span> <select class="select" ${!$storePreview ? "disabled" : ""}>${each(inputSettings.colorProps, (c) => {
      return `<option${add_attribute("value", c.value, 0)}>${escape(c.label)}</option>`;
    })}</select></label>  <h3 class="h3 col-span-2" data-toc-ignore data-svelte-h="svelte-lnr7eo">Border Radius</h3> <label class="label"><span data-svelte-h="svelte-17dx2gf">Base</span> <select class="select" ${!$storePreview ? "disabled" : ""}>${each(inputSettings.rounded, (r) => {
      return `<option${add_attribute("value", r, 0)}>${escape(r)}</option>`;
    })}<option value="9999px" data-svelte-h="svelte-dnx0hq">9999px</option></select></label> <label class="label"><span data-svelte-h="svelte-o47q2j">Container</span> <select class="select" ${!$storePreview ? "disabled" : ""}>${each(inputSettings.rounded, (r) => {
      return `<option${add_attribute("value", r, 0)}>${escape(r)}</option>`;
    })}</select></label>  <h3 class="h3 col-span-2" data-toc-ignore data-svelte-h="svelte-s9mfph">Border Size</h3> <label class="label"><span data-svelte-h="svelte-17dx2gf">Base</span> <select class="select" ${!$storePreview ? "disabled" : ""}>${each(inputSettings.border, (b) => {
      return `<option${add_attribute("value", b, 0)}>${escape(b)}</option>`;
    })}</select></label></section>  <section class="card variant-glass p-4 space-y-8 col-span-2 lg:col-span-1"><h3 class="h3" data-toc-ignore data-svelte-h="svelte-1jnj190">Preview</h3>  <div class="grid grid-cols-3 gap-4" data-svelte-h="svelte-1qniqp7"><button class="btn variant-filled-primary">primary</button> <button class="btn variant-filled-secondary">secondary</button> <button class="btn variant-filled-tertiary">tertiary</button> <button class="btn variant-filled-success">success</button> <button class="btn variant-filled-warning">warning</button> <button class="btn variant-filled-error">error</button></div> <hr class="opacity-50">  <div class="grid grid-cols-1 gap-4">${validate_component(ProgressBar, "ProgressBar").$$render(
      $$result,
      {
        meter: "bg-primary-500",
        track: "bg-primary-500/20",
        value: 66,
        max: 100
      },
      {},
      {}
    )} ${validate_component(ProgressBar, "ProgressBar").$$render(
      $$result,
      {
        meter: "bg-secondary-500",
        track: "bg-secondary-500/20",
        value: 50,
        max: 100
      },
      {},
      {}
    )} ${validate_component(ProgressBar, "ProgressBar").$$render(
      $$result,
      {
        meter: "bg-tertiary-500",
        track: "bg-tertiary-500/20",
        value: 33,
        max: 100
      },
      {},
      {}
    )}</div> <hr class="opacity-50">  <div class="grid grid-cols-4 gap-4 place-items-center" data-svelte-h="svelte-cxmtmv"><span class="badge variant-filled-surface">surface</span> <span class="badge variant-filled-primary">primary</span> <span class="badge variant-filled-secondary">secondary</span> <span class="badge variant-filled-tertiary">tertiary</span> <span class="badge badge-glass">glass</span> <span class="badge variant-filled-success">success</span> <span class="badge variant-filled-warning">warning</span> <span class="badge variant-filled-error">error</span></div> <hr class="opacity-50">  <div class="grid grid-cols-4 gap-4 place-items-center">${validate_component(SlideToggle, "SlideToggle").$$render(
      $$result,
      {
        name: "exampleSliderThree",
        checked: true
      },
      {},
      {}
    )} ${validate_component(SlideToggle, "SlideToggle").$$render(
      $$result,
      {
        name: "exampleSliderOne",
        active: "bg-primary-500",
        checked: true
      },
      {},
      {}
    )} ${validate_component(SlideToggle, "SlideToggle").$$render(
      $$result,
      {
        name: "exampleSliderTwo",
        active: "bg-secondary-500",
        checked: true
      },
      {},
      {}
    )} ${validate_component(SlideToggle, "SlideToggle").$$render(
      $$result,
      {
        name: "exampleSliderFour",
        active: "bg-tertiary-500",
        checked: true
      },
      {},
      {}
    )}</div></section>  <footer class="col-span-2 space-y-4">${``} <div class="card variant-glass p-4 text-center"> <button class="btn btn-lg variant-filled-primary font-bold" ${!$storePreview ? "disabled" : ""}>${escape("Show")} Theme Source</button></div></footer></div></div>`;
  } while (!$$settled);
  $$unsubscribe_storePreview();
  $$unsubscribe_storeThemGenForm();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="page-container"><header class="space-y-4" data-svelte-h="svelte-1f95z5g"><h1 class="h1">Theme Generator</h1> <p>Toggle the &quot;Enable Preview&quot; option to begin creating a new theme. The entire documentation site will update as you progress. You can
			navigate to different sections without losing your settings as long as you do not refresh the page. Disabling the preview will reset
			back to your original theme.</p></header> <hr>  ${validate_component(DocsThemer, "DocsThemer").$$render($$result, {}, {}, {})} <hr>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1rhorxl">How to Implement</h2>  <p data-svelte-h="svelte-1hmia8n">Generate your theme above, copy the source code, then paste this into a new file in the root of your project with a distinct name, such as: <code class="code">my-custom-theme.[ts|js]</code>. If you opt for the Javascript format, make sure to strip out any Typescript type information.</p>  <p data-svelte-h="svelte-xsa58n">Open <code class="code">tailwind.config.[ts|js|cjs]</code> found in the root of your project, and import your custom theme.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      language: "ts",
      code: `import { myCustomTheme } from './my-custom-theme'`
    },
    {},
    {}
  )} <p data-svelte-h="svelte-1hmsysl">Within this file, register your custom theme via the Skeleton Tailwind plugin settings.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      language: "ts",
      code: `

plugins: [
	skeleton({
		themes: {
			custom: [
				myCustomTheme
			]
		}
	})
]
				`
    },
    {},
    {}
  )} <p data-svelte-h="svelte-vgafp5">Open <code class="code">/src/app.html</code> and define your theme using the <code class="code">data-theme</code>
			attribute. The value should match the <code class="code">name</code> field set within your theme&#39;s source code.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      language: "html",
      code: `<body data-theme="my-custom-theme">`
    },
    {},
    {}
  )}  <p data-svelte-h="svelte-15hwv2n">Note that custom themes can be registered along with <a href="/docs/themes#register-themes" class="anchor">Skeleton&#39;s preset themes</a>, allowing you to switch between these as desired.</p></section> <hr> <section class="space-y-4" data-svelte-h="svelte-1kamg5h"><h2 class="h2">Migrate from v1 to v2</h2>  <aside class="alert variant-ghost"><div class="alert-message"><p>Need help migrating your theme from the <strong>v1 CSS format</strong> to the <strong>v2 CSS-in-JS format</strong>? Try this handy
					conversion tool.</p></div> <div class="alert-actions"> <a class="btn variant-filled" href="https://transform.tools/css-to-js" target="_blank">Conversion Tool →</a></div></aside></section> <hr>  <section class="space-y-4" data-svelte-h="svelte-3xo0g4"><h2 class="h2">Advanced Color Curation</h2> <p>Looking for deeper customization? We recommend using <a class="anchor" href="https://tailwind.simeongriggs.dev/blue/3B82F6" target="_blank" rel="noreferrer">Palette Generator</a>. This includes support for hue, saturation, and lightness adjustments. Pair this with the
			<a class="anchor" href="https://marketplace.visualstudio.com/items?itemName=dakshmiglani.hex-to-rgba" target="_blank" rel="noreferrer">Hex-To-RGB extension</a>
			to convert each Hex color value to RGB in bulk with VS Code.</p></section></div>`;
});
export {
  Page as default
};

import { c as create_ssr_component } from "./ssr.js";
const GreenFall = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg id="svg-filter-greenfall" class="filter absolute -left-full w-0 h-0"><filter id="GreenFall" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB"><feColorMatrix type="matrix" values="0.5 -0.4 0.3332 0 0
					0 0.4 0.3 0 0
					0 0 0.5 0 0
					0 0 0 500 -20" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix"></feColorMatrix></filter></svg>`;
});
const NoirLight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg id="svg-filter-noirlight" class="filter absolute -left-full w-0 h-0"><filter id="NoirLight" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB"><feColorMatrix type="saturate" values="0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix2"></feColorMatrix><feBlend mode="saturation" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" in2="colormatrix2" result="blend2"></feBlend><feBlend mode="screen" x="0%" y="0%" width="100%" height="100%" in="colormatrix2" in2="blend2" result="blend3"></feBlend><feColorMatrix type="luminanceToAlpha" x="0%" y="0%" width="100%" height="100%" in="blend3" result="colormatrix3"></feColorMatrix><feBlend mode="exclusion" x="0%" y="0%" width="100%" height="100%" in="blend3" in2="colormatrix3" result="blend5"></feBlend></filter></svg>`;
});
const Rustic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg id="svg-filter-rustic" class="filter absolute -left-full w-0 h-0"><filter id="Rustic" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" in="SourceGraphic" result="colormatrix" values="0.39215686274509803 0.39215686274509803 0.39215686274509803  0 0 
					0.3333333333333333 0.3333333333333333 0.3333333333333333  0 0 
					0.30980392156862746 0.30980392156862746 0.30980392156862746  0 0  
					0 0 0 1 0"></feColorMatrix></filter></svg>`;
});
const Summer84 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg id="svg-filter-summer84" class="filter absolute -left-full w-0 h-0"><filter id="Summer84" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="1.300 0.200 0.000 0.000 0.000 
					0.300 0.600 0.200 0.000 0.000 
					0.200 1.000 0.200 0.000 0.000 
					0.000 0.000 0.000 1.000 0.000"></feColorMatrix></filter></svg>`;
});
const XPro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg id="svg-filter-xpro" class="filter absolute -left-full w-0 h-0"><filter id="XPro" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="1.70 -0.20 0.00 0.00 0.00 
                    0.10 0.800 0.30 0.00 0.00 
                    0.20 0.300 0.50 0.00 0.00 
                    0.00 0.00 0.00 1.00 0.00"></feColorMatrix></filter></svg>`;
});
export {
  GreenFall as G,
  NoirLight as N,
  Rustic as R,
  Summer84 as S,
  XPro as X
};

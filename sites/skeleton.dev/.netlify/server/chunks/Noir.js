import { c as create_ssr_component } from "./ssr.js";
const Apollo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg id="svg-filter-apollo" class="filter absolute -left-full w-0 h-0"><filter id="Apollo" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feColorMatrix values="0.8 0.6 -0.4 0.1 0,
					0 1.2 0.05 0 0,
					0 -1 3 0.02 0,
					0 0 0 50 0" result="final" in="SourceGraphic"></feColorMatrix></filter></svg>`;
});
const BlueNight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg id="svg-filter-bluenight" class="filter absolute -left-full w-0 h-0"><filter id="BlueNight" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="1.000 0.000 0.000 0.000 0.000 
                    0.000 1.000 0.000 0.000 0.05 
                    0.000 0.000 1.000 0.000 0.400 
                    0.000 0.000 0.000 1.000 0.000"></feColorMatrix></filter></svg>`;
});
const Emerald = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg id="svg-filter-emerald" class="filter absolute -left-full w-0 h-0"><filter id="Emerald" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" in="SourceGraphic" result="colormatrix" values="
            .16 .185 .129 0 0
            .16 .185 .129 0 0
            .16 .185 .129 0 0
            0 0 0 0.33 0"></feColorMatrix><feComponentTransfer in="colormatrix" result="componentTransfer"><feFuncR type="table" tableValues="0.03 0.9"></feFuncR><feFuncG type="table" tableValues="0.57 1"></feFuncG><feFuncB type="table" tableValues="0.49 0.53"></feFuncB><feFuncA type="table" tableValues="0 1"></feFuncA></feComponentTransfer><feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"></feBlend></filter></svg>`;
});
const Noir = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg id="svg-filter-noir" class="filter absolute -left-full w-0 h-0"><filter id="Noir" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB"><feColorMatrix type="saturate" values="0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix1"></feColorMatrix><feBlend mode="lighten" x="0%" y="0%" width="100%" height="100%" in="colormatrix1" in2="colormatrix1" result="blend"></feBlend><feBlend mode="multiply" x="0%" y="0%" width="100%" height="100%" in="colormatrix1" in2="diffuseLighting" result="blend1"></feBlend></filter></svg>`;
});
export {
  Apollo as A,
  BlueNight as B,
  Emerald as E,
  Noir as N
};

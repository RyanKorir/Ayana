/* =========================================================
   AYANA HILL — illustrated placeholder art
   Generates an on-brand SVG illustration for a category so the
   site looks complete before real product photography is added.
   Swap any product's "image" field for a real photo at any time —
   see products-data.js for instructions.
   ========================================================= */

const PLACEHOLDER_BG = ['#F7DCE4','#F3CBD8','#F9E6EC'];

function scatterMotif(pathD, n, seed){
  let out = '';
  for(let i=0;i<n;i++){
    const rand = Math.abs(Math.sin(seed + i*12.9898) * 43758.5453) % 1;
    const rand2 = Math.abs(Math.sin(seed + i*78.233) * 12543.234) % 1;
    const x = 10 + rand*280;
    const y = 10 + rand2*280;
    const s = 0.25 + (rand2*0.3);
    const rot = rand*360;
    out += `<g transform="translate(${x.toFixed(1)},${y.toFixed(1)}) rotate(${rot.toFixed(0)}) scale(${s.toFixed(2)})" opacity="0.16">${pathD}</g>`;
  }
  return out;
}

const MOTIF = {
  perfume: `<path d="M-10 -18 h20 v6 h-6 v6 h6 a6 6 0 0 1 6 6 v18 a6 6 0 0 1 -6 6 h-20 a6 6 0 0 1 -6 -6 v-18 a6 6 0 0 1 6 -6 h6 v-6 h-6 z" fill="#B5405A"/>`,
  hair: `<path d="M0 -20 C 14 -14 16 4 8 16 C 4 22 -4 22 -8 16 C -16 4 -14 -14 0 -20 Z" fill="#8A2E44"/>`,
  skincare: `<path d="M-12 -8 a12 12 0 0 1 24 0 v18 a6 6 0 0 1 -6 6 h-12 a6 6 0 0 1 -6 -6 z" fill="#B5405A"/>`,
  sandal: `<path d="M-16 8 q16 -20 32 0 q-4 8 -16 8 q-12 0 -16 -8 Z" fill="#8A2E44"/>`
};

const HERO_ICON = {
  perfume: `
    <g transform="translate(150,150)">
      <rect x="-34" y="-10" width="68" height="86" rx="14" fill="#fff" stroke="#8A2E44" stroke-width="2.5"/>
      <rect x="-18" y="-34" width="36" height="26" rx="6" fill="#fff" stroke="#8A2E44" stroke-width="2.5"/>
      <rect x="-8" y="-48" width="16" height="16" rx="3" fill="#C7A24C"/>
      <path d="M-24 20 h48 M-24 34 h48 M-24 48 h48" stroke="#B5405A" stroke-width="2" opacity=".5"/>
    </g>`,
  hair: `
    <g transform="translate(150,150)">
      <path d="M0 -60 C 40 -40 48 10 24 46 C 12 64 -12 64 -24 46 C -48 10 -40 -40 0 -60 Z" fill="#fff" stroke="#8A2E44" stroke-width="2.5"/>
      <path d="M0 -60 C 40 -40 48 10 24 46" fill="none" stroke="#B5405A" stroke-width="2" opacity=".55"/>
      <path d="M-8 -46 C 6 -30 6 -6 -4 12" fill="none" stroke="#C7A24C" stroke-width="2" opacity=".7"/>
    </g>`,
  skincare: `
    <g transform="translate(150,150)">
      <rect x="-30" y="-8" width="60" height="66" rx="16" fill="#fff" stroke="#8A2E44" stroke-width="2.5"/>
      <path d="M-24 -8 a24 24 0 0 1 48 0" fill="none" stroke="#8A2E44" stroke-width="2.5"/>
      <circle cx="0" cy="26" r="14" fill="none" stroke="#B5405A" stroke-width="2" opacity=".6"/>
      <path d="M0 12 v28 M-14 26 h28" stroke="#B5405A" stroke-width="2" opacity=".5"/>
    </g>`,
  sandal: `
    <g transform="translate(150,150)">
      <path d="M-46 20 q46 -54 92 0 q-10 22 -46 22 q-36 0 -46 -22 Z" fill="#fff" stroke="#8A2E44" stroke-width="2.5"/>
      <path d="M-30 20 q30 -30 60 0" fill="none" stroke="#B5405A" stroke-width="2.5"/>
      <path d="M-30 42 h60" stroke="#8A2E44" stroke-width="3" stroke-linecap="round"/>
    </g>`
};

function placeholderArt(category, seed){
  const bg = PLACEHOLDER_BG[seed % PLACEHOLDER_BG.length];
  const motif = MOTIF[category] || MOTIF.perfume;
  const hero = HERO_ICON[category] || HERO_ICON.perfume;
  return `
  <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <rect width="300" height="300" fill="${bg}"/>
    ${scatterMotif(motif, 9, seed)}
    ${hero}
  </svg>`;
}

/* =========================================================
   AYANA HILL — global interactions
   ========================================================= */

// Scroll-reveal
function initReveals(){
  const items = document.querySelectorAll('.reveal');
  if(!items.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .15, rootMargin: '0px 0px -60px 0px' });
  items.forEach(i => io.observe(i));
}

// Back to top
function initBackToTop(){
  const btn = document.getElementById('backToTop');
  if(!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 500);
  }, { passive:true });
  btn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
}

// Falling cherry-blossom petals in the hero
function initPetals(){
  const field = document.getElementById('petalField');
  if(!field) return;
  const petalSVG = (color) => `
    <svg viewBox="0 0 30 30" width="100%" height="100%">
      <path d="M15 2 C20 6 20 12 15 15 C10 12 10 6 15 2Z" fill="${color}"/>
    </svg>`;
  const colors = ['#B5405A','#E8A9BC','#C7A24C'];
  const count = window.innerWidth < 700 ? 6 : 12;
  for(let i=0;i<count;i++){
    const p = document.createElement('div');
    p.className = 'petal';
    const size = 10 + Math.random()*14;
    p.style.width = size+'px';
    p.style.height = size+'px';
    p.style.left = Math.random()*100+'%';
    p.style.animationDuration = (9 + Math.random()*9)+'s';
    p.style.animationDelay = (Math.random()*10)+'s';
    p.innerHTML = petalSVG(colors[i % colors.length]);
    field.appendChild(p);
  }
}

// Signature interaction: the "detail lens" magnifier
// Literalizes the brand line "It's all in the details" — hovering a
// product/category illustration reveals a zoomed-in circular detail
// that follows the cursor.
function initMagnifyLenses(){
  document.querySelectorAll('.magnify').forEach(box => {
    const source = box.querySelector('svg');
    if(!source) return;
    const lens = document.createElement('div');
    lens.className = 'lens';
    const clone = source.cloneNode(true);
    clone.style.width = '340%';
    clone.style.height = '340%';
    clone.style.position = 'absolute';
    lens.appendChild(clone);
    box.appendChild(lens);

    box.addEventListener('mousemove', (e) => {
      const rect = box.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      lens.style.left = x + 'px';
      lens.style.top = y + 'px';
      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;
      clone.style.left = (-px * 2.4 + 50) + '%';
      clone.style.top = (-py * 2.4 + 50) + '%';
      clone.style.transform = 'translate(-50%,-50%)';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initReveals();
  initBackToTop();
  initPetals();
  initMagnifyLenses();
});

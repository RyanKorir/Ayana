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

// Touch/tap delight: a small burst of cherry-blossom petals falls from
// wherever the person taps or clicks — a playful, on-brand response that
// rewards interaction anywhere on the page.
function initTouchPetalBurst(){
  const colors = ['#B5405A','#E8A9BC','#C7A24C'];
  const petalPath = 'M15 2 C20 6 20 12 15 15 C10 12 10 6 15 2Z';

  function burst(x, y){
    const count = 5 + Math.floor(Math.random()*3);
    for(let i=0;i<count;i++){
      const p = document.createElement('div');
      p.className = 'tap-petal';
      const size = 9 + Math.random()*10;
      const drift = (Math.random()*90 - 45).toFixed(0);
      const fall = (90 + Math.random()*70).toFixed(0);
      const spin = (Math.random()*280 + 140).toFixed(0);
      const duration = (0.8 + Math.random()*0.6).toFixed(2);
      p.style.cssText = `
        left:${x}px; top:${y}px; width:${size}px; height:${size}px;
        --dx:${drift}px; --dy:${fall}px; --rot:${spin}deg;
        animation-duration:${duration}s;
      `;
      p.innerHTML = `<svg viewBox="0 0 30 30" width="100%" height="100%"><path d="${petalPath}" fill="${colors[i % colors.length]}"/></svg>`;
      document.body.appendChild(p);
      p.addEventListener('animationend', () => p.remove());
      setTimeout(() => p.remove(), 2200);
    }
  }

  let lastBurst = 0;
  document.addEventListener('pointerdown', (e) => {
    const now = Date.now();
    if(now - lastBurst < 90) return; // avoid spamming on fast multi-touch
    lastBurst = now;
    burst(e.clientX, e.clientY);
  });
}

// Touch/tap delight: a soft expanding ripple on every button tap,
// giving immediate tactile feedback (works for mouse clicks too).
function initButtonRipples(){
  document.querySelectorAll('.btn, .filter-btn').forEach(btn => {
    btn.style.position = btn.style.position || 'relative';
    btn.style.overflow = 'hidden';
    btn.addEventListener('pointerdown', (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height) * 1.6;
      ripple.className = 'btn-ripple';
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
      btn.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
      setTimeout(() => ripple.remove(), 900);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initReveals();
  initBackToTop();
  initPetals();
  initMagnifyLenses();
  initTouchPetalBurst();
  initButtonRipples();
});

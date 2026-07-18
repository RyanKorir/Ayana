/* =========================================================
   AYANA HILL — shared header / footer / icon partials
   Injected into every page via #site-header / #site-footer
   Edit contact details in ONE place: the CONTACT object below.
   ========================================================= */

const CONTACT = {
  brand: "Ayana Hill",
  tagline: "It's all in the details",
  address: "Mwalimu Building, Ground Floor, Shop 1",
  addressNote: "Next to Woodlands Hotel entrance, Kericho",
  hours: "Monday – Saturday, 9:00 AM – 6:00 PM",
  phone: "+254 700 000 000",          // TODO: replace with real number
  whatsapp: "254700000000",           // TODO: digits only, country code, no plus/spaces
  email: "hello@ayanahill.co.ke",     // TODO: replace with real email
  mapQuery: "Woodlands%20Hotel%2C%20Kericho%2C%20Kenya",
  instagram: "https://instagram.com/ayanahill",
  facebook: "https://facebook.com/ayanahill",
  tiktok: "https://tiktok.com/@ayanahill"
};

const ICONS = {
  pin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-7.1 7-12a7 7 0 1 0-14 0c0 4.9 7 12 7 12Z"/><circle cx="12" cy="9" r="2.6"/></svg>`,
  clock: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>`,
  phone: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2.2 2A17 17 0 0 1 2 6.2 2 2 0 0 1 4 4Z"/></svg>`,
  mail: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 6 8 7 8-7"/></svg>`,
  arrow: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h13M13 6l6 6-6 6"/></svg>`,
  instagram: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>`,
  facebook: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 9h3V6h-3a3 3 0 0 0-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9a1 1 0 0 1 1-1Z"/></svg>`,
  tiktok: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 4v10.5a3.5 3.5 0 1 1-3-3.46"/><path d="M14 4c.4 2.2 2 4 4.5 4.3"/></svg>`,
  truck: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 7h11v9H2z"/><path d="M13 10h4l4 3v3h-8z"/><circle cx="6" cy="18" r="1.7"/><circle cx="17.5" cy="18" r="1.7"/></svg>`,
  check: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg>`,
  bag: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8h12l1 12H5z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>`,
  heart: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 20s-7-4.4-9.4-9A5.4 5.4 0 0 1 12 6a5.4 5.4 0 0 1 9.4 5c-2.4 4.6-9.4 9-9.4 9Z"/></svg>`
};

function renderHeader(active){
  const el = document.getElementById('site-header');
  if(!el) return;
  const link = (href,label,key) => `<a href="${href}" class="${active===key?'active':''}">${label}</a>`;
  el.innerHTML = `
    <div class="container">
      <a href="index.html" class="brand">${CONTACT.brand}<small>Beauty &amp; Essentials</small></a>
      <div class="nav-backdrop" id="navBackdrop"></div>
      <nav class="nav-links" id="navLinks">
        ${link('index.html','Home','home')}
        ${link('products.html','Products','products')}
        ${link('about.html','About &amp; Contact','about')}
        <a href="about.html#visit" class="btn btn-sm mobile-only" style="margin-top:10px;">Visit the shop</a>
      </nav>
      <div class="nav-cta">
        <a href="about.html#visit" class="btn btn-sm">Visit the shop</a>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>`;

  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const backdrop = document.getElementById('navBackdrop');
  const closeNav = () => { toggle.classList.remove('open'); links.classList.remove('open'); backdrop.classList.remove('open'); };
  toggle.addEventListener('click', () => {
    const open = toggle.classList.toggle('open');
    links.classList.toggle('open', open);
    backdrop.classList.toggle('open', open);
  });
  backdrop.addEventListener('click', closeNav);
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

  const header = document.getElementById('site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive:true });
}

function renderFooter(){
  const el = document.getElementById('site-footer');
  if(!el) return;
  const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Hi Ayana Hill! I would like to know more about your products.')}`;
  el.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="brand">${CONTACT.brand}</div>
          <p>Your one-stop shop for premium beauty, self-care and everyday essentials — proudly serving Kericho and beyond.</p>
          <div class="social-row">
            <a href="${CONTACT.instagram}" aria-label="Instagram" target="_blank" rel="noopener">${ICONS.instagram}</a>
            <a href="${CONTACT.facebook}" aria-label="Facebook" target="_blank" rel="noopener">${ICONS.facebook}</a>
            <a href="${CONTACT.tiktok}" aria-label="TikTok" target="_blank" rel="noopener">${ICONS.tiktok}</a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="products.html">All products</a></li>
            <li><a href="about.html">Our story</a></li>
            <li><a href="about.html#visit">Visit us</a></li>
          </ul>
        </div>
        <div>
          <h4>Shop by category</h4>
          <ul class="footer-links">
            <li><a href="products.html#fragrances">Fragrances</a></li>
            <li><a href="products.html#hair">Hair &amp; hair products</a></li>
            <li><a href="products.html#skincare">Skincare &amp; body care</a></li>
            <li><a href="products.html#sandals">Sandals</a></li>
          </ul>
        </div>
        <div>
          <h4>Visit / Contact</h4>
          <ul class="footer-contact">
            <li>${ICONS.pin}<span>${CONTACT.address}, ${CONTACT.addressNote}</span></li>
            <li>${ICONS.clock}<span>${CONTACT.hours}</span></li>
            <li>${ICONS.phone}<a href="${wa}" target="_blank" rel="noopener">${CONTACT.phone} (WhatsApp)</a></li>
            <li>${ICONS.mail}<a href="mailto:${CONTACT.email}">${CONTACT.email}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} ${CONTACT.brand}. All rights reserved.</span>
        <span>Quality. Beauty. Confidence. — All in the details.</span>
      </div>
    </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader(document.body.dataset.page);
  renderFooter();
});

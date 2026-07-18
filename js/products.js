/* =========================================================
   AYANA HILL — products page rendering
   ========================================================= */

function cardMarkup(product, index){
  const art = product.image
    ? `<img src="${product.image}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;">`
    : placeholderArt(product.category, index);
  const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(`Hi! I'd like to enquire about the ${product.name}.`)}`;
  const catLabel = CATEGORIES.find(c => c.key === product.category)?.label || product.category;

  return `
    <article class="detail-card product-card" data-category="${product.category}">
      <div class="magnify">${art}</div>
      <div class="card-body">
        <span class="tag">${catLabel}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
      </div>
      <div class="card-cta">
        <span style="font-size:.78rem;color:var(--ink-soft);">${product.availability}</span>
        <a href="${wa}" target="_blank" rel="noopener">Enquire ${ICONS.arrow}</a>
      </div>
    </article>`;
}

function emptyStateMarkup(){
  return `
    <div class="empty-state">
      <div class="icon" style="color:var(--rose);">${ICONS.bag}</div>
      <h3>New arrivals on the way</h3>
      <p>We're adding items to this category soon. In the meantime, message us on WhatsApp and we'll help you find exactly what you need.</p>
      <a class="btn btn-sm" href="https://wa.me/${CONTACT.whatsapp}" target="_blank" rel="noopener">Chat with us</a>
    </div>`;
}

function renderProducts(activeCategory){
  const grid = document.getElementById('productGrid');
  if(!grid) return;
  const items = getProductsByCategory(activeCategory);

  if(!items.length){
    grid.innerHTML = emptyStateMarkup();
  } else {
    grid.innerHTML = items.map((p,i) => cardMarkup(p,i)).join('');
    grid.querySelectorAll('.product-card').forEach(c => c.classList.add('show'));
  }
  initMagnifyLenses();
  initReveals();
}

function renderFilters(){
  const row = document.getElementById('filterRow');
  if(!row) return;
  const all = [{ key:'all', label:'All Products' }, ...CATEGORIES];
  row.innerHTML = all.map(c =>
    `<button class="filter-btn${c.key==='all' ? ' active' : ''}" data-key="${c.key}">${c.label}</button>`
  ).join('');

  row.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      row.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.key);
      history.replaceState(null, '', btn.dataset.key === 'all' ? 'products.html' : `products.html#${btn.dataset.key}`);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderFilters();
  const hash = window.location.hash.replace('#','');
  const startKey = CATEGORIES.some(c => c.key === hash) ? hash : 'all';
  if(startKey !== 'all'){
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.key === startKey));
  }
  renderProducts(startKey);
});

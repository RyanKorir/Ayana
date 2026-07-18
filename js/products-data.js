/* =========================================================
   AYANA HILL — PRODUCT CATALOG
   =========================================================
   HOW TO ADD A NEW PRODUCT
   ------------------------
   1. Copy one of the objects below and paste it at the end
      of the matching category array (or start a brand-new
      category array and register it in CATEGORIES).
   2. Give it a unique "id".
   3. If you have a real photo, save it inside
      /images/products/  and set "image" to that file name,
      e.g. "image": "products/rose-mist-perfume.jpg".
      If you leave "image" as null, the site will automatically
      show an elegant illustrated placeholder instead — so the
      site never breaks while you're waiting on real photos.
   4. Save the file — the Products page updates automatically,
      no other code needs to change.
   ========================================================= */

const CATEGORIES = [
  { key: 'fragrances', label: 'Fragrances',            icon: 'perfume'  },
  { key: 'hair',       label: 'Hair & Hair Products',  icon: 'hair'     },
  { key: 'skincare',   label: 'Skincare & Body Care',  icon: 'skincare' },
  { key: 'sandals',    label: 'Sandals',               icon: 'sandal'   },
];

const PRODUCTS = [
  // ---------------- FRAGRANCES ----------------
  {
    id: 'frag-001',
    category: 'fragrances',
    name: 'Signature Eau de Parfum',
    description: 'A warm, long-lasting floral scent designed for everyday elegance.',
    image: null,
    availability: 'In store'
  },
  {
    id: 'frag-002',
    category: 'fragrances',
    name: 'Oud Rose Mist',
    description: 'A rich oud and rose blend with a deep, lingering finish.',
    image: null,
    availability: 'In store'
  },
  {
    id: 'frag-003',
    category: 'fragrances',
    name: 'Classic Black Bottle EDP',
    description: 'A timeless, elegant fragrance for evenings and special occasions.',
    image: null,
    availability: 'In store'
  },

  // ---------------- HAIR & HAIR PRODUCTS ----------------
  {
    id: 'hair-001',
    category: 'hair',
    name: 'Premium Lace Front Wig',
    description: 'Soft, natural-looking curls with a comfortable, breathable lace base.',
    image: null,
    availability: 'In store'
  },
  {
    id: 'hair-002',
    category: 'hair',
    name: 'Curl Care Shampoo & Conditioner Set',
    description: 'A gentle cleansing duo formulated to keep curls hydrated and defined.',
    image: null,
    availability: 'In store'
  },
  {
    id: 'hair-003',
    category: 'hair',
    name: 'Deep Moisture Hair Mask',
    description: 'An intensive weekly treatment that restores softness and shine.',
    image: null,
    availability: 'In store'
  },
  {
    id: 'hair-004',
    category: 'hair',
    name: 'Nourishing Hair & Scalp Oil',
    description: 'A lightweight oil blend that strengthens strands and soothes the scalp.',
    image: null,
    availability: 'In store'
  },

  // ---------------- SKINCARE & BODY CARE ----------------
  {
    id: 'skin-001',
    category: 'skincare',
    name: 'Brightening Facial Serum',
    description: 'A concentrated daily serum that targets dullness and uneven tone.',
    image: null,
    availability: 'In store'
  },
  {
    id: 'skin-002',
    category: 'skincare',
    name: 'Luxury Repair Face Cream',
    description: 'A rich, indulgent cream for deep hydration and a smooth, radiant finish.',
    image: null,
    availability: 'In store'
  },
  {
    id: 'skin-003',
    category: 'skincare',
    name: 'Whipped Shea Body Lotion',
    description: 'A fast-absorbing, non-greasy lotion that leaves skin soft all day.',
    image: null,
    availability: 'In store'
  },
  {
    id: 'skin-004',
    category: 'skincare',
    name: 'Deep Moisture Body Wash',
    description: 'A creamy, gentle cleanser that nourishes skin from the very first use.',
    image: null,
    availability: 'In store'
  },

  // ---------------- SANDALS ----------------
  {
    id: 'sand-001',
    category: 'sandals',
    name: 'Woven Strap Flat Sandals',
    description: 'Handfeel-soft woven straps on a comfortable, all-day flat sole.',
    image: null,
    availability: 'In store'
  },
  {
    id: 'sand-002',
    category: 'sandals',
    name: 'Studded Slide Sandals',
    description: 'A statement slide finished with delicate studded detailing.',
    image: null,
    availability: 'In store'
  },
];

/* Quick lookup helpers used by products.js — no need to edit below this line. */
function getProductsByCategory(key){
  return key === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === key);
}

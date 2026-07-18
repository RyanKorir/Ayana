# Ayana Hill — Website

A static, elegant marketing site for **Ayana Hill**, a Kericho-based beauty & cosmetics shop. Built with plain HTML, CSS and vanilla JavaScript — no build tools, no framework, no dependencies to install.

**Pages:** `/` (Home) · `/products` (catalog) · `/about` (story, hours, location, contact)

## Structure

```
AyanaShop/
├── index.html            Home page
├── products.html          Product catalog (filterable, data-driven)
├── about.html             Story, visit info, map, contact form
├── vercel.json            Clean URLs + caching + security headers for Vercel
├── css/
│   └── style.css          All styles — design tokens live at the top
├── js/
│   ├── shared.js           Header/footer + CONTACT details (edit this first!)
│   ├── products-data.js    The product catalog — add new items here
│   ├── placeholder-art.js  Illustrated placeholders until real photos are added
│   ├── products.js         Product grid rendering + category filters
│   └── main.js             Scroll reveals, back-to-top, petals, magnify lens
└── images/
    └── products/           Drop real product photos here
```

## Before going live

Open `js/shared.js` and fill in the `CONTACT` object with the real:
- WhatsApp number (`whatsapp` — digits only, country code, no `+` or spaces)
- Phone number (`phone`)
- Email address (`email`)
- Social links (optional)

## Adding real products

Open `js/products-data.js`. Each product is a plain object — copy one, change the fields, save. Leave `image: null` to keep the illustrated placeholder, or set it to a path like `"products/rose-mist.jpg"` once the photo is in `images/products/`.

## Deploying on Vercel

**Dashboard (no CLI needed)**
1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Other** — it's static, no build command or output directory needed.
4. Deploy. Vercel auto-detects `index.html` at the root.

**CLI**
```bash
npm i -g vercel
cd AyanaShop
vercel
```
Accept the defaults (static site, no build step).

`vercel.json` is included and sets:
- Clean URLs (`/about` instead of `/about.html`)
- Long-term caching for `css/`, `js/`, `images/`
- Basic security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`)

No environment variables or backend are required — the contact form opens a pre-filled WhatsApp or email draft on the visitor's device rather than submitting to a server.

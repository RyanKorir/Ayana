# Ayana Hill — Website

Static, no-build website for Ayana Hill, a beauty & cosmetics shop in Kericho, Kenya.

## Structure
- `index.html` — Home page
- `products.html` — Filterable product catalog
- `about.html` — Brand story, visit/contact info, map, contact form
- `css/style.css` — Design system & styles
- `js/` — Shared header/footer, product data, placeholder art, interactions
- `images/products/` — Drop real product photos here

## Adding products
Edit `js/products-data.js` — copy an existing product object, give it a
unique `id`, fill in the details, and (optionally) point `image` at a file
in `images/products/`. No other code needs to change.

## Editing contact details
Edit the `CONTACT` object at the top of `js/shared.js` (phone, WhatsApp
number, email, social links).

## Running locally
No build step — just open `index.html` in a browser, or serve the folder
with any static file server.

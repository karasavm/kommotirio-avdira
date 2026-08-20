# TODO — Κομμωτήριο Ελένη website

## Blocking (must do before launch)

- [ ] Replace `[DOMAIN]` with real domain in: `index.html`, `en/index.html`, `robots.txt`, `sitemap.xml`
- [ ] Add opening hours to both `index.html` and `en/index.html` (the `<table>` in the Ωράριο section)
- [ ] Add real services list — replace placeholder cards in both HTML files
- [ ] Fill in FAQ answers: appointment policy, services, parking, men's/children's cuts
- [ ] Create `favicon.ico` (32×32) from logo or favicon.svg
- [ ] Create `apple-touch-icon.png` (180×180)
- [ ] Create `og-image.jpg` (1200×630) for social sharing

## Content from client

- [ ] Real hero photo → export as AVIF + WebP + JPEG at 800×900 and 1600×900 px
- [ ] Gallery photos (4+) → 800×600 px, AVIF + WebP + JPEG, add to `images/gallery/`
- [ ] Real logo → SVG preferred; PNG fallback at 200×80 px → replace text logo in header
- [ ] Business description in owner's own words → update hero tagline and "Γιατί εμάς" section
- [ ] Real differentiators → replace placeholder why-cards in both HTML files
- [ ] Appointment or walk-in policy → fill in FAQ + "Υπηρεσίες" note
- [ ] Parking information → fill in FAQ answer
- [ ] Instagram URL (if available) → add to `js/site-config.js`, footer social links, and JSON-LD `sameAs`
- [ ] Google Business Profile URL → add to JSON-LD `sameAs` in both HTML files

## Technical / SEO

- [ ] Update `site-config.js` hours object with real values once known
- [ ] Once domain is live, verify JSON-LD at https://validator.schema.org
- [ ] Once domain is live, submit `sitemap.xml` to Google Search Console
- [ ] Add Google Business Profile → link to website and verify listing
- [ ] Test `tel:` links work on a real mobile device
- [ ] Check page renders correctly at 320px, 375px, 768px, 1024px, 1440px
- [ ] Confirm Lighthouse performance score ≥ 90 on mobile after real images are added
- [ ] Verify hreflang is correct once domain is set (check with hreflang validator)

## Optional / nice to have

- [ ] Add Instagram link if account exists
- [ ] Add real customer testimonials (only if real and with permission)
- [ ] Consider adding a static map screenshot (from Google Maps Static API) in the location section to replace the placeholder box
- [ ] Add `<link rel="preload">` for hero image once real filename is known
- [ ] Privacy policy page — required only if analytics or embeds are added later
- [ ] Consider adding Google Analytics or privacy-friendly alternative (Plausible, Fathom) after launch

## Done

- [x] Greek page (`index.html`) — all sections, JSON-LD, hreflang
- [x] English page (`en/index.html`) — all sections, JSON-LD, hreflang
- [x] CSS (`css/styles.css`) — mobile-first, dark mode, custom properties
- [x] JavaScript (`js/main.js`) — mobile nav, scroll header, fade-ins
- [x] Config file (`js/site-config.js`)
- [x] `robots.txt`
- [x] `sitemap.xml` with hreflang
- [x] `favicon.svg` placeholder
- [x] Phone number wired: +30 2541051109
- [x] Google Maps link wired (coordinates 40.9811198, 24.952211)
- [x] Facebook link wired: facebook.com/komot.eleni
- [x] Sticky mobile call bar
- [x] No cookie banner needed (no third-party scripts)

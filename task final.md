Project: Κομμωτήριο Ελένη στα Άβδηρα / Helen Haircut in Avdira

I want you to plan and implement a production-ready single-page website for a local hair salon in Άβδηρα, Ξάνθη, Greece.

Work as both:

- a senior frontend/web engineer
- a senior technical SEO and local SEO specialist
- a performance-focused web developer
- a UX/content strategist for small local businesses

The implementation should remain intentionally simple: plain HTML, CSS, and JavaScript only, with no frontend framework unless there is a very strong technical reason.

⸻

1. Business

Business name in Greek:

Κομμωτήριο Ελένη στα Άβδηρα

English name:

Helen Haircut in Avdira

Location:

Άβδηρα, Ξάνθη, Greece

This is a local hair salon serving people in and around Avdira and the wider Xanthi area.

⸻

2. Primary goals

The website should help the business:

1. Get discovered through Google Search.
2. Perform well for local searches around Άβδηρα and Ξάνθη.
3. Be understandable by AI search engines and answer engines.
4. Convert visitors into phone calls.
5. Make it extremely easy to understand:
   - what the business offers
   - where it is
   - why someone should choose it
   - how to call
   - how to get directions
6. Load extremely fast, especially on mobile devices.
7. Feel trustworthy, friendly, local, and human.

The primary conversion is:

Phone call

Do not add a contact form.

Secondary actions may include:

- Get directions
- View location on Google Maps
- Visit Facebook / social profile
- View photos/gallery

⸻

3. Target audience

Primary audience:

- Greek-speaking residents of Άβδηρα
- people living in nearby villages
- people in the wider Ξάνθη area
- visitors searching for a hairdresser near Avdira

Greek is the primary language.

English should also be supported.

Do not compromise the Greek experience just to accommodate English.

⸻

4. Before implementation

Before writing the final implementation, inspect the project/repository and create a clear implementation plan.

First identify:

- current files and project structure
- whether anything useful already exists
- what information is missing
- what information is required for SEO/local SEO
- what information can safely use placeholders
- which assumptions should NOT be made

Ask me only for information that materially affects the website.

Important information you should request if missing includes:

- exact phone number
- exact business address/location
- Google Maps link or coordinates
- Google Business Profile link
- Facebook link
- Instagram link, if applicable
- opening hours
- exact list of services
- whether appointments are required or walk-ins are accepted
- real logo
- real photos
- preferred business description
- any real differentiators
- whether there are verified reviews/testimonials we may legally display
- any accessibility or parking information
- service area, if relevant

Do not invent:

- reviews
- ratings
- years of experience
- prices
- certifications
- awards
- opening hours
- services
- business history
- claims such as “best hairdresser in Xanthi”
- accessibility information

Use clearly marked placeholder/mock values until I provide real information.

If some missing information does not block development, proceed with a sensible placeholder rather than stopping the entire project.

⸻

5. Technical requirements

Use:

- semantic HTML5
- modern CSS
- vanilla JavaScript
- no framework
- no unnecessary dependencies
- no build system unless it provides substantial value
- no large UI library

The website must be:

- mobile-first
- fully responsive
- excellent on phones
- excellent on tablets
- excellent on laptops/desktops
- fast on slower mobile networks
- usable with JavaScript disabled where practical

Keep the architecture easy for a non-expert to maintain.

Avoid overengineering.

⸻

6. Browser support

Use modern web standards appropriate for 2026 while maintaining sensible compatibility with current mainstream versions of:

- Chrome
- Safari
- Firefox
- Edge
- iOS Safari
- Android Chrome

Progressive enhancement is preferred.

Avoid unnecessary polyfills.

⸻

7. Performance requirements

Performance is a major priority.

Target excellent Core Web Vitals and Lighthouse performance.

Optimize for:

- LCP
- CLS
- INP
- render blocking resources
- image payload
- CSS size
- JS size
- font loading

Prefer system fonts or extremely lightweight font loading.

Avoid:

- large JavaScript bundles
- carousels requiring libraries
- unnecessary animation libraries
- icon libraries containing hundreds of unused icons
- excessive DOM elements
- autoplay video
- unnecessary third-party scripts

Animations should be subtle and should not reduce performance.

Respect:

prefers-reduced-motion

⸻

8. Image strategy

Initially use mock/placeholder images.

Create the HTML and styles so real images can easily replace them later.

Determine sensible image dimensions/aspect ratios for:

- hero
- gallery
- service imagery if used
- logo

Use modern responsive image practices where appropriate:

- <picture>
- srcset
- sizes
- explicit width and height
- lazy loading for below-the-fold images
- eager/high-priority loading only for genuine LCP imagery

Recommend suitable formats such as:

- AVIF
- WebP
- fallback format where needed

Prevent layout shift.

Do not load oversized desktop images on mobile.

Document the recommended exported sizes for the real images I should provide later.

⸻

9. Site structure

The site should be a single-page website.

Suggested sections:

1. Header / navigation
2. Hero
3. Services
4. Why choose Κομμωτήριο Ελένη
5. About / local business introduction
6. Gallery
7. Location / Άβδηρα
8. Opening hours
9. FAQ
10. Strong call-to-action section
11. Footer

You may add, remove, combine, or reorder sections when doing so improves:

- usability
- conversion
- local SEO
- content flow
- trust

Do not add filler sections just to make the website longer.

⸻

10. Hero section

The hero should immediately communicate:

- business name
- what the business is
- location
- primary value proposition
- prominent phone CTA
- optional directions CTA

The most important CTA should be clearly visible on mobile without requiring unnecessary scrolling.

Avoid generic marketing language.

⸻

11. Phone conversion

Calling the business is the primary goal.

Use properly formatted:

tel: links

Consider a sticky or persistent mobile call button if UX research/best practice supports it, but keep it tasteful and non-intrusive.

Calls to action should use natural Greek language.

Do not use manipulative urgency.

⸻

12. Navigation

Use a lightweight sticky header only if it improves usability.

Navigation should link to page sections using semantic anchors.

Examples:

- Υπηρεσίες
- Γιατί εμάς
- Gallery / Φωτογραφίες
- Τοποθεσία
- Συχνές ερωτήσεις
- Επικοινωνία

Keep the navigation simple.

Mobile navigation must be accessible.

⸻

13. Visual design

Design direction:

- clean
- minimal
- welcoming
- elegant
- local
- human
- trustworthy

Avoid making it look like:

- a generic SaaS landing page
- an overly luxurious beauty brand
- a template-heavy WordPress site
- an AI-generated landing page

Use:

- generous spacing
- readable typography
- restrained visual hierarchy
- subtle borders/shadows when useful
- small tasteful transitions/fades

Do not overuse:

- gradients
- animations
- glassmorphism
- floating elements
- oversized typography
- decorative effects

The user should enjoy scrolling, but the design should remain practical.

⸻

14. Accessibility

Follow modern accessibility best practices.

At minimum:

- semantic landmarks
- keyboard navigation
- visible focus states
- sufficient color contrast
- accessible mobile menu
- descriptive link labels
- useful alt text
- decorative imagery with appropriate empty alt attributes
- properly associated labels where relevant
- reduced-motion support
- minimum practical touch target sizes

Aim for WCAG 2.2 AA where reasonably possible.

⸻

15. Greek content style

Greek copy should sound like it was written by a real local business owner, not by an AI or advertising agency.

Tone:

- απλό
- ευγενικό
- άμεσο
- φιλικό
- εξυπηρετικό
- χωρίς υπερβολές
- χωρίς marketing jargon

The intent should be:

να εξυπηρετήσει τον κόσμο με προθυμία, ευγένεια και απλότητα.

Avoid phrases that sound artificial, exaggerated, or overly polished.

Do not keyword-stuff the Greek text.

Prefer natural phrases people would actually use.

⸻

16. Bilingual implementation

Primary content: Greek.

Secondary content: English.

Choose a simple, SEO-friendly implementation strategy.

Before implementing, explain the chosen bilingual approach and why.

Consider:

- how language switching works
- indexability
- canonical URLs
- hreflang
- whether language variants should use separate URLs/files
- avoiding duplicate-content problems

Do not hide all language content behind client-side JavaScript if that damages SEO or accessibility.

⸻

17. Content architecture

Structure the content semantically.

Use:

- exactly one meaningful H1 per language/page context
- logical H2/H3 hierarchy
- concise paragraphs
- scannable sections
- descriptive anchor text

Do not create headings only to insert keywords.

Consider whether an on-page contents/navigation component helps users. Only add one if it improves the experience.

⸻

18. SEO requirements

Implement strong technical and on-page SEO.

Include where appropriate:

- descriptive <title>
- meta description
- canonical URL
- robots directives
- Open Graph tags
- social sharing metadata
- favicon placeholders
- semantic headings
- descriptive image alt attributes
- sitemap strategy
- robots.txt
- clean internal anchor linking
- crawlable navigation
- structured data
- strong local business signals
- correct language metadata
- hreflang if appropriate

Do not use obsolete SEO techniques.

Do not keyword-stuff.

Do not add meta keywords.

⸻

19. Local SEO

The most important geographic focus is:

- Άβδηρα
- Ξάνθη
- Xanthi
- Avdira

Use location terminology naturally.

Potential search intent to research and incorporate naturally may include phrases such as:

Greek examples:

- κομμωτήριο Άβδηρα
- κομμωτήριο στα Άβδηρα
- κομμωτήριο Ξάνθη
- κομμώτρια Άβδηρα
- κούρεμα Άβδηρα
- γυναικείο κούρεμα Άβδηρα
- ανδρικό κούρεμα Άβδηρα

English examples:

- hair salon Avdira
- hairdresser Avdira
- haircut Avdira
- hair salon Xanthi

Do not blindly use these keywords.

Validate their relevance against the real services before incorporating them.

Use geographic terms naturally in:

- page title
- H1 where appropriate
- introductory content
- location section
- structured data
- metadata
- image metadata/alt text where genuinely descriptive

⸻

20. AI search / GEO / answer-engine optimization

Optimize the page so modern AI-powered search systems can clearly understand:

- who the business is
- what services it provides
- where it is located
- who it serves
- how it can be contacted
- when it is open
- common customer questions

Use clear factual language and structured information.

Prioritize:

- strong entity consistency
- semantic HTML
- structured data
- concise FAQ answers
- explicit location information
- consistent business name/address/phone details
- human-readable factual descriptions

Avoid gimmicks or unsupported claims about “ranking in AI.”

⸻

21. Structured data

Implement valid JSON-LD where appropriate.

Evaluate which schema.org types are most accurate.

Likely possibilities include:

- HairSalon
- LocalBusiness
- Organization
- WebSite
- BreadcrumbList, only if genuinely appropriate
- FAQ structured data only when appropriate and compliant with current search-engine guidance

Use the most specific correct type.

Include only factual fields for which we have real data.

Potential properties:

- name
- alternateName
- description
- url
- telephone
- image
- logo
- address
- geo
- openingHoursSpecification
- sameAs
- areaServed
- priceRange only if known

Do not fabricate structured data.

Validate JSON-LD syntax.

⸻

22. FAQ

Create an FAQ section designed primarily for visitors, not search engines.

Potential topics:

- Do I need an appointment?
- Where is the salon?
- What services are available?
- What are the opening hours?
- How can I call?
- Is there parking?
- Do you offer men’s/women’s/children’s haircuts?

Only include questions whose answers can be supported by real information.

Use placeholder wording when the answer has not been supplied.

Do not invent policies.

If FAQ schema is used, ensure visible FAQ content exactly matches the structured data.

⸻

23. Maps/location section

Include a useful location section with:

- business address
- location description
- directions CTA
- Google Maps link

Do not automatically embed a heavy Google Maps iframe if doing so significantly hurts page performance or creates unnecessary privacy/cookie requirements.

Evaluate whether a lightweight static location presentation + “Open in Google Maps” button is better.

If an embedded map is used, lazy-load it.

Explain the tradeoff.

⸻

24. Icons

Use the lightest sensible icon strategy.

Prefer one of:

- small inline SVG icons
- a tiny curated local icon set

Avoid loading a complete icon font/library just for a few icons.

Icons may be needed for:

- phone
- map/location
- Facebook
- Instagram
- opening hours
- menu

Keep SVG markup accessible and reusable.

⸻

25. Privacy and cookie consent

Determine whether cookie consent is actually required based on the implemented technologies.

Prefer a privacy-friendly implementation that does not require a cookie banner when possible.

Do not add a cookie popup automatically just because many websites have one.

Evaluate separately:

- embedded Google Maps
- analytics
- Facebook embeds/pixels
- other third-party scripts

If no non-essential cookies or tracking scripts are used, explain whether a consent banner is necessary.

Create placeholders/structure for:

- Privacy Policy
- Cookie Policy, only if relevant

Do not give definitive legal advice. Clearly flag items that should be reviewed for GDPR/ePrivacy compliance.

⸻

26. Analytics

Do not add analytics by default unless requested.

If recommending analytics, prioritize privacy-friendly and lightweight options.

Any analytics solution must not undermine page performance unnecessarily.

⸻

27. Maintainable content/settings architecture

A major requirement is making content easy to update.

Create a simple centralized configuration/content system.

For example:

site-config.js

It should contain editable values such as:

- business name
- alternate business name
- phone
- address
- coordinates
- Google Maps URL
- Google Business Profile URL
- Facebook URL
- Instagram URL
- opening hours
- services
- FAQs
- gallery image metadata
- SEO metadata
- language-specific copy where sensible

However, do not force critical SEO content to depend entirely on JavaScript rendering.

The final HTML delivered to search engines should contain the important textual content.

Choose an architecture that balances:

- maintainability
- SEO
- simplicity
- no-build operation

If necessary, separate content/configuration used for interactive elements from crawl-critical HTML content.

Explain this architectural choice in the implementation plan.

⸻

28. Suggested file organization

Keep it simple.

A reasonable structure might look like:

/
├── index.html
├── en/
│ └── index.html
├── css/
│ └── styles.css
├── js/
│ ├── site-config.js
│ └── main.js
├── images/
│ ├── placeholders/
│ └── gallery/
├── icons/
├── favicon.ico
├── robots.txt
└── sitemap.xml

This is only a suggestion.

Change it if a better structure meets the requirements more cleanly.

⸻

29. JavaScript

Use JavaScript only when necessary.

Possible uses:

- mobile navigation
- progressive enhancement
- language UX if appropriate
- subtle intersection-based animation
- configuration of non-critical UI values

Avoid JS for things HTML/CSS already handle well.

No jQuery.

No large dependency.

Code should be:

- readable
- modular
- documented only where documentation adds value
- easy to maintain

⸻

30. CSS

CSS should be:

- mobile-first
- organized
- concise
- reusable
- easy to understand
- based on CSS custom properties for shared design tokens

For example:

- colors
- font sizes
- spacing
- max widths
- radius
- shadows

Avoid utility-class explosion.

Avoid deeply nested selectors.

Avoid excessive specificity.

Do not create hundreds of tiny classes unless justified.

⸻

31. Security and robustness

Even though this is a static website:

- avoid unsafe inline JavaScript patterns
- safely handle external links
- use rel attributes appropriately
- avoid unnecessary third-party code
- avoid exposing secrets
- do not create dependencies that require API keys unless specifically requested

⸻

32. Internal linking

Since this is primarily a single-page website, internal linking should be meaningful section navigation.

Use descriptive anchors such as:

- #services
- #location
- #gallery
- #faq
- #contact

Do not create artificial “internal links” purely for SEO.

If separate English pages or policy pages exist, link them correctly.

⸻

33. Content placeholders

Where business information is not yet available, use clear placeholders such as:

[PHONE_NUMBER]

[GOOGLE_MAPS_URL]

[FACEBOOK_URL]

[OPENING_HOURS]

[ADDRESS]

Do not insert fake realistic values that could accidentally reach production.

Collect these placeholders in a README/checklist so replacing them is straightforward.

⸻

34. Deliverables

I want you to work in phases.

Phase 1 — Audit and plan

Inspect the repository and provide:

1. summary of existing state
2. proposed architecture
3. proposed section order
4. bilingual strategy
5. SEO/local SEO strategy
6. structured-data strategy
7. image/performance strategy
8. privacy/cookie strategy
9. information you still need from me
10. assumptions/placeholders you will use

Keep the plan concrete and implementation-focused.

⸻

Phase 2 — Implementation

After the plan, implement the site.

Create all required files.

Do not merely describe the code — actually implement it.

⸻

Phase 3 — Quality review

After implementation, review your own work for:

Functionality

- broken links
- navigation
- telephone links
- language switching
- mobile menu
- directions links

Responsive design

Check common widths around:

- 320px
- 375px
- 390px
- 768px
- 1024px
- 1440px

Accessibility

Check:

- keyboard navigation
- focus states
- headings
- ARIA usage
- color contrast
- reduced motion
- image alt text

SEO

Check:

- title
- description
- canonical
- hreflang
- robots
- sitemap
- heading hierarchy
- structured data
- local business information consistency
- social metadata

Performance

Check for:

- unnecessary JS
- unnecessary CSS
- oversized images
- render-blocking resources
- lazy loading
- layout shifts
- unnecessary third-party requests

Fix problems you discover instead of only listing them.

⸻

35. Final output

At the end, give me a concise project summary containing:

1. what was implemented
2. file structure
3. important architectural choices
4. SEO decisions
5. performance decisions
6. privacy/cookie decision
7. exact placeholders I still need to replace
8. recommended real image dimensions/formats
9. any remaining business information I should provide
10. suggested next steps before publishing

Also include a short pre-launch checklist.

⸻

36. Decision-making rules

When making implementation decisions, use this priority order:

1. usability
2. conversion to phone calls
3. accessibility
4. page speed
5. technical/local SEO
6. maintainability
7. visual polish

Do not sacrifice speed or usability for decorative effects.

Do not optimize for SEO in ways that make the page awkward for real visitors.

Do not add complexity unless the benefit is clear.

When multiple approaches are possible, choose the simplest robust solution and briefly explain why.

⸻

37. Important constraints

- Do not overengineer.
- Do not invent business facts.
- Do not invent testimonials or reviews.
- Do not use fake schema data.
- Do not add a contact form.
- Do not add a cookie banner unless it is actually needed.
- Do not add large frameworks.
- Do not make critical content dependent on client-side JS.
- Do not keyword-stuff.
- Do not generate generic AI-sounding Greek content.
- Do not use performance-heavy visual effects.
- Do not stop implementation because some non-critical business details are missing; use explicit placeholders instead.

The finished website should feel like a high-quality, fast, trustworthy local business website, not a generic template.

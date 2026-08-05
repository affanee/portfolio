# Affan Bin Emran — GTM & RevOps Consultant

A conversion-focused consulting portfolio. Zero build tools, zero dependencies —
three files and a browser. Deploys anywhere by dragging the folder.

---

## Open it right now

Double-click `index.html`. That's it. No server, no install.

> **After you edit CSS or JS**, your browser may show a cached copy.
> Either hard-reload (`Cmd + Shift + R`) or bump the `?v=3` numbers at the
> bottom and top of `index.html` to `?v=4`.

---

## The one file you edit

**`assets/js/content.js`** — every word, price, case study, and link on the site.
You never need to touch HTML, CSS, or the app code.

Open it in any text editor. Change a value between the quotes, save, refresh.

---

## Launch checklist

Nine things stand between this and going live. Roughly 30 minutes total.

### 1. Add your photo — 1 min
Save your formal photo as **`assets/img/affan.jpg`**.
Until you do, the hero shows an "AE" monogram placeholder.
Portrait orientation works best (roughly 4:5). Under 400KB keeps it fast.

### 2. Testimonials ✅ DONE
Three real testimonials are live: Naimuzzaman Shuvo, Zahidul Islam Tamim and
Pranay Khanna. Each name links out to their LinkedIn so a visitor can verify it.

Two notes. Their photos could not be downloaded because LinkedIn blocks access to
personal profiles, so the site shows their initials instead, which looks
deliberate. To add a real photo, save it to `assets/img/testimonials/` and put the
path in the `avatar` field. Also, the 5 star ratings were set by me since nobody
gave an actual score. Set `rating` lower or delete the stars block if you'd rather
not show them.

To add more later, copy one whole `{ ... }` block in `testimonials`.

### 3. Review every price — 10 min ⚠️ **Do not skip**
The numbers in `services`, `tiers`, and `calculator` are **market-rate anchors for
GTM/RevOps consultants, not your quoted rates.** I have no way to know what you
charge. Read every one and change it to your real number before this goes public.

Prices appear in three places — keep them consistent:
- `services[].price` — the per-service cards
- `tiers[].price` — the three headline pricing tiers
- `calculator.services[].base` — what drives the estimate calculator

### 4. Connect the contact form — 2 min
Right now the form validates and shows its success state but **doesn't send
anything** (an orange "Demo mode" note appears under it so you don't forget).

1. Sign up free at [formspree.io](https://formspree.io)
2. Create a form, copy the endpoint (`https://formspree.io/f/xxxxxxx`)
3. Paste it into `formEndpoint` in `content.js`

The demo-mode note disappears automatically once it's set.

### 5. Add your video intro — 2 min
Space is already reserved in the About section. In `content.js` → `video`:

```js
type: "youtube",  id: "your_video_id"      // from youtube.com/watch?v=THIS_PART
type: "vimeo",    id: "123456789"
type: "file",     src: "assets/video/intro.mp4"
```

### 6. Company logos ✅ DONE
All 12 logos were pulled from the LinkedIn company pages and saved into
`assets/img/logos/`. The wall shows 5 at a time and flips them one after another.

Each tile shows the logo mark next to the company name, because these marks are
square and mostly sit on white, which reads as a blank block on a dark page
without the name beside it.

To add another company: save the logo into `assets/img/logos/` and add a line to
`logos` in `content.js`. To swap a logo for a better quality file, just overwrite
the file and keep the name the same.

### 7. Check the Calendly link — 30 sec
Already wired to `https://calendly.com/affanbinemran/consultation-call-with-affan`.
Confirm it's live and that your availability is set.

### 8. Proofread the case studies — 5 min
Four case studies are built from your resume — CrewBloom, Starwebtek, Emran's
Heritage Home, and the multi-market demand gen work. Every metric came from your
resume. Confirm you're comfortable publishing each company name and number.

### 9. Deploy — 3 min
See below.

---

## Deploying

### Netlify (easiest)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the whole `affan-portfolio` folder onto the page
3. Live in ~10 seconds on a `*.netlify.app` URL

Add your own domain under **Site settings → Domain management**.

### Vercel
Same idea at [vercel.com/new](https://vercel.com/new), or `vercel` from the CLI.

### Pointing affanofficial.com at it
Whichever host you pick, add the custom domain in its dashboard, then update the
DNS records at your registrar to the values the host gives you. SSL is automatic.

---

## What's on the page

| Section | What it does for conversion |
|---|---|
| **Hero** | Problem-first headline, live availability badge, animated proof counters |
| **Logo wall** | 5 rotating slots — social proof before they've read anything |
| **Services** | Six offers, each expandable to full deliverables + a plain-English outcome |
| **Work** | Filterable case studies by type, industry, or skill |
| **Case study modal** | Situation → approach → before/after → results → stack → related work |
| **Process** | Four steps that remove "what am I actually buying?" anxiety |
| **Pricing** | Diagnose / Build / Operate value ladder |
| **Calculator** | Live estimate — no email gate, which builds more trust than it costs |
| **Testimonials** | Ratings + attribution, hidden until real ones exist |
| **About** | Your quota-carrying background, video, expertise, tool marquee, résumé |
| **FAQ** | Kills the six objections that stall consulting deals |
| **Contact** | Validated form + booking slots + four direct contact routes |

---

## Built-in behaviour worth knowing

- **Smart recommendations** — the modal scores every other case study by shared
  discipline, industry, and skills, then surfaces the closest three.
- **Calculator → form handoff** — "Get an exact quote" pre-fills the contact form
  with the visitor's exact selections, so you get context instead of "hi, interested".
- **Testimonial safety** — placeholders never render. This is deliberate.
- **Reduced motion** — all animation is disabled for visitors who ask their OS for it.
- **Keyboard accessible** — case study cards open with Enter/Space, `Esc` closes the modal.
- **No tracking, no cookies, no external JS.** Only Google Fonts loads from outside.

---

## Files

```
affan-portfolio/
├── index.html              Page structure
├── assets/
│   ├── css/styles.css      All styling and design tokens
│   ├── js/
│   │   ├── content.js      ← YOU EDIT THIS ONE
│   │   └── app.js          Rendering + interactions
│   ├── img/
│   │   ├── affan.jpg       ← ADD YOUR PHOTO HERE
│   │   └── logos/          ← ADD COMPANY LOGOS HERE
│   ├── video/              ← optional self-hosted intro video
│   └── Affan-Bin-Emran-Resume.pdf
└── README.md
```

---

## Changing the look

All colours, fonts, and spacing are CSS variables at the top of
`assets/css/styles.css` under `:root`. To change the accent colour across the
entire site, edit these three lines:

```css
--accent:      #3B82F6;
--accent-hi:   #60A5FA;
--grad-accent: linear-gradient(135deg, #2563EB 0%, #4D7CFF 100%);
```

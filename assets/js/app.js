/* ==========================================================================
   APP.JS — rendering + interactions.
   You shouldn't need to edit this file. All content lives in content.js
   ========================================================================== */
(function () {
  "use strict";

  const C = window.CONTENT;
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s == null ? "" : s)
    .replace(/&(?!(amp|lt|gt|quot|#\d+);)/g, "&amp;")
    .replace(/</g, "&lt;").replace(/>/g, "&gt;");

  /* ------------------------------------------------------------------
     ICONS
     ------------------------------------------------------------------ */
  const I = {
    arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
    arrowUpRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
    chevronDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>',
    database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg>',
    compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5.5-5.5 2 2-5.5z"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>',
    trendUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M21 7v5h-5"/></svg>',
    trendDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l6 6 4-4 8 8"/><path d="M21 17v-5h-5"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 1.9.6 2.8a2 2 0 01-.4 2.1L8 9.8a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.9.3 1.8.5 2.8.6a2 2 0 011.7 2z"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.3 18.3v-7.4H6v7.4h2.3zM7.1 9.8a1.34 1.34 0 100-2.7 1.34 1.34 0 000 2.7zM18 18.3v-4.2c0-2.1-1.1-3.1-2.6-3.1-1.2 0-1.8.7-2.1 1.2v-1H11v7.1h2.3v-4c0-.2 0-.4.1-.6.2-.4.6-.9 1.3-.9.9 0 1.2.7 1.2 1.7v3.8H18z"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 010 18 15 15 0 010-18z"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8z"/></svg>',
    alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16.5v.01"/></svg>',
    zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4.5 13H12l-1 9 8.5-11H13l1-9z"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    inbox: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5.1L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.5-6.9A2 2 0 0016.8 4H7.2a2 2 0 00-1.7 1.1z"/></svg>',
    quote: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>',
  };

  /* ------------------------------------------------------------------
     HEAD / META
     ------------------------------------------------------------------ */
  document.title = C.identity.siteTitle;
  const md = $('meta[name="description"]');
  if (md) md.setAttribute("content", C.identity.metaDescription);

  /* ------------------------------------------------------------------
     SCROLL REVEAL
     ------------------------------------------------------------------ */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          revealObserver.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );
  const observeReveals = () =>
    $$(".reveal:not(.visible), .reveal-stagger:not(.visible)").forEach((el) => revealObserver.observe(el));

  /* ------------------------------------------------------------------
     NAVIGATION
     ------------------------------------------------------------------ */
  function initNav() {
    const nav = $("#nav");
    const prog = $("#scrollProgress");
    const toggle = $("#navToggle");
    const drawer = $("#navMobile");

    const onScroll = () => {
      const y = window.scrollY;
      nav.classList.toggle("scrolled", y > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";

      let current = "";
      $$("section[id]").forEach((s) => {
        if (y >= s.offsetTop - 140) current = s.id;
      });
      $$(".nav-link").forEach((l) =>
        l.classList.toggle("active", l.getAttribute("href") === "#" + current)
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const closeDrawer = () => {
      toggle.classList.remove("open");
      drawer.classList.remove("open");
      document.body.classList.remove("no-scroll");
      toggle.setAttribute("aria-expanded", "false");
    };
    toggle.addEventListener("click", () => {
      const open = drawer.classList.toggle("open");
      toggle.classList.toggle("open", open);
      document.body.classList.toggle("no-scroll", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    $$("#navMobile a").forEach((a) => a.addEventListener("click", closeDrawer));
    window.addEventListener("resize", () => { if (window.innerWidth > 900) closeDrawer(); });
  }

  /* ------------------------------------------------------------------
     COUNTERS
     ------------------------------------------------------------------ */
  function animateCount(el, target, suffix) {
    const dur = 1800;
    const start = performance.now();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { el.textContent = target.toLocaleString() + suffix; return; }
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      el.textContent = Math.round(target * eased).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  function initMetrics() {
    const wrap = $("#metricsStrip");
    wrap.innerHTML = C.hero.metrics
      .map(
        (m) => `
      <div class="metric">
        <div class="metric-val" data-target="${m.value}" data-suffix="${esc(m.suffix)}">0${esc(m.suffix)}</div>
        <div class="metric-lab">${esc(m.label)}</div>
      </div>`
      )
      .join("");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          $$(".metric-val", e.target).forEach((v) =>
            animateCount(v, +v.dataset.target, v.dataset.suffix)
          );
          io.unobserve(e.target);
        });
      },
      { threshold: 0.4 }
    );
    io.observe(wrap);
  }

  /* ------------------------------------------------------------------
     HERO
     ------------------------------------------------------------------ */
  function initHero() {
    const h = C.hero;
    $("#heroAvail").textContent = h.availability;
    $("#heroHeadline").innerHTML = h.headline
      .map((line) => {
        const html = h.highlight && line.includes(h.highlight)
          ? esc(line).replace(esc(h.highlight), `<span class="grad-text">${esc(h.highlight)}</span>`)
          : esc(line);
        return `<span class="line"><span>${html}</span></span>`;
      })
      .join("");
    $("#heroSub").innerHTML = h.subhead;
    $("#heroPrimary").innerHTML = esc(h.primaryCta) + I.arrowRight;
    $("#heroPrimary").href = C.identity.calendly;
    $("#heroSecondary").innerHTML = esc(h.secondaryCta);

    $("#heroTrust").innerHTML = `${I.globe}<span>${esc(C.identity.timezone)}</span>`;

    // Portrait with graceful fallback
    const pw = $("#portrait");
    const img = new Image();
    img.onload = () => {
      pw.innerHTML = `<img src="${esc(C.identity.photo)}" alt="${esc(C.identity.name)}, ${esc(C.identity.role)}" width="800" height="1000">`;
      addFloatCard(pw);
    };
    img.onerror = () => {
      pw.innerHTML = `
        <div class="portrait-fallback">
          <div class="mono-initials">${esc(C.identity.initials)}</div>
          <div class="hint">Save your photo to<br>assets/img/affan.jpg</div>
        </div>`;
      addFloatCard(pw);
    };
    img.src = C.identity.photo;

    function addFloatCard(parent) {
      const m = C.hero.metrics[0];
      const card = document.createElement("div");
      card.className = "float-card";
      card.innerHTML = `<div class="fc-val">${m.value.toLocaleString()}${esc(m.suffix)}</div><div class="fc-lab">${esc(m.label)}</div>`;
      parent.parentElement.appendChild(card);
    }
  }

  /* ------------------------------------------------------------------
     LOGO WALL — 5 slots, staggered sequential flip
     ------------------------------------------------------------------ */
  function initLogos() {
    const wall = $("#logoWall");
    $("#logosHeading").textContent = C.logosHeading;

    const pool = C.logos.filter((l) => l && l.name);
    if (!pool.length) { wall.closest("section").style.display = "none"; return; }

    const SLOTS = 5;
    const state = [];

    const render = (item) => {
      if (item.logo) {
        return `<img src="assets/img/logos/${esc(item.logo)}" alt="${esc(item.name)}" loading="lazy"
                  onerror="this.parentElement.innerHTML='<span class=&quot;logo-word&quot;>${esc(item.name).replace(/'/g, "&#39;")}</span>'">`;
      }
      return `<span class="logo-word">${esc(item.name)}</span>`;
    };

    for (let i = 0; i < SLOTS; i++) {
      const slot = document.createElement("div");
      slot.className = "logo-slot";
      const idx = i % pool.length;
      slot.innerHTML = `<div class="logo-item in">${render(pool[idx])}</div>`;
      wall.appendChild(slot);
      state.push({ slot, index: idx });
    }

    if (pool.length <= SLOTS) return; // nothing to rotate through
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cursor = SLOTS % pool.length;
    let turn = 0;

    setInterval(() => {
      const s = state[turn % SLOTS];
      turn++;

      const next = pool[cursor % pool.length];
      cursor++;

      const old = s.slot.querySelector(".logo-item");
      const fresh = document.createElement("div");
      fresh.className = "logo-item";
      fresh.innerHTML = render(next);
      s.slot.appendChild(fresh);

      requestAnimationFrame(() => {
        old.classList.remove("in");
        old.classList.add("out");
        requestAnimationFrame(() => fresh.classList.add("in"));
      });
      setTimeout(() => old.remove(), 600);
    }, 1400);
  }

  /* ------------------------------------------------------------------
     SERVICES
     ------------------------------------------------------------------ */
  function initServices() {
    $("#servicesHeading").textContent = C.servicesHeading;
    $("#servicesSubhead").textContent = C.servicesSubhead;

    $("#servicesGrid").innerHTML = C.services
      .map(
        (s) => `
      <article class="card spotlight svc" data-svc="${esc(s.id)}">
        <div class="svc-top">
          <div class="svc-icon">${I[s.icon] || I.zap}</div>
          <span class="svc-tier">${esc(s.tier)}</span>
        </div>
        <h3>${esc(s.name)}</h3>
        <p class="svc-summary">${esc(s.summary)}</p>
        <div class="svc-price-row">
          <span class="svc-price">${esc(s.price)}</span>
          <span class="svc-price-note">${esc(s.priceNote)}</span>
        </div>
        <button class="svc-toggle" aria-expanded="false">
          <span>What's included</span>${I.chevronDown}
        </button>
        <div class="svc-details">
          <div><div class="svc-details-inner">
            <p class="svc-forwho"><strong>Best for:</strong> ${esc(s.forWho)}</p>
            <ul class="deliverables">
              ${s.deliverables.map((d) => `<li>${I.check}<span>${esc(d)}</span></li>`).join("")}
            </ul>
            <div class="svc-outcome"><strong>The outcome</strong>${esc(s.outcome)}</div>
          </div></div>
        </div>
      </article>`
      )
      .join("");

    $$(".svc-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".svc");
        const open = card.classList.toggle("open");
        btn.setAttribute("aria-expanded", String(open));
        btn.querySelector("span").textContent = open ? "Hide details" : "What's included";
      });
    });

    initSpotlight();
  }

  function initSpotlight() {
    $$(".card.spotlight").forEach((card) => {
      if (card.dataset.spot) return;
      card.dataset.spot = "1";
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", e.clientX - r.left + "px");
        card.style.setProperty("--my", e.clientY - r.top + "px");
      });
    });
  }

  /* ------------------------------------------------------------------
     WORK SHOWCASE + FILTERS
     ------------------------------------------------------------------ */
  let activeFilter = { key: "all", value: "all" };

  function initWork() {
    $("#workHeading").textContent = C.workHeading;
    $("#workSubhead").textContent = C.workSubhead;

    const types = [...new Set(C.caseStudies.map((c) => c.type))];
    const industries = [...new Set(C.caseStudies.map((c) => c.industry))];
    const skills = [...new Set(C.caseStudies.flatMap((c) => c.skills))];

    const chip = (key, val, label) =>
      `<button class="chip" data-key="${esc(key)}" data-val="${esc(val)}">${esc(label)}</button>`;

    $("#filterBar").innerHTML = `
      <div class="filter-group">
        <span class="filter-label">Type</span>
        <button class="chip active" data-key="all" data-val="all">All work</button>
        ${types.map((t) => chip("type", t, t)).join("")}
      </div>
      <div class="filter-group">
        <span class="filter-label">Industry</span>
        ${industries.map((i) => chip("industry", i, i)).join("")}
      </div>
      <div class="filter-group">
        <span class="filter-label">Skill</span>
        ${skills.slice(0, 8).map((s) => chip("skills", s, s)).join("")}
      </div>`;

    renderWork();

    $$("#filterBar .chip").forEach((c) => {
      c.addEventListener("click", () => {
        $$("#filterBar .chip").forEach((x) => x.classList.remove("active"));
        c.classList.add("active");
        activeFilter = { key: c.dataset.key, value: c.dataset.val };
        renderWork(true);
      });
    });
  }

  function matches(cs, f) {
    if (f.key === "all") return true;
    if (f.key === "skills") return cs.skills.includes(f.value);
    return cs[f.key] === f.value;
  }

  function renderWork(animate) {
    const grid = $("#workGrid");
    const list = C.caseStudies.filter((c) => matches(c, activeFilter));

    $("#workCount").textContent =
      list.length + (list.length === 1 ? " case study" : " case studies") +
      (activeFilter.key === "all" ? "" : ` · filtered by ${activeFilter.value}`);

    const paint = () => {
      if (!list.length) {
        grid.innerHTML = `<div class="empty-state">${I.search}<p>No case studies match that filter yet.</p></div>`;
        return;
      }
      grid.innerHTML = list
        .map(
          (cs) => `
        <article class="card work-card" data-id="${esc(cs.id)}" tabindex="0" role="button"
                 aria-label="Open case study: ${esc(cs.headline)}">
          <div class="work-visual">
            <span class="work-type-badge">${esc(cs.type)}</span>
            <span class="work-open-hint">${I.arrowUpRight}</span>
            <div class="work-bigmetric">
              <div class="v">${esc(cs.thumbMetric.value)}</div>
              <div class="l">${esc(cs.thumbMetric.label)}</div>
            </div>
          </div>
          <div class="work-body">
            <div class="work-meta">
              <span class="work-company">${esc(cs.company)}</span>
              <span class="dot"></span><span>${esc(cs.industry)}</span>
              <span class="dot"></span><span>${esc(cs.period)}</span>
            </div>
            <h3>${esc(cs.headline)}</h3>
            <p class="work-role">${esc(cs.role)}</p>
            <div class="work-tags">
              ${cs.skills.slice(0, 4).map((s) => `<span class="tag">${esc(s)}</span>`).join("")}
            </div>
          </div>
        </article>`
        )
        .join("");

      $$(".work-card").forEach((card) => {
        const open = () => openCase(card.dataset.id);
        card.addEventListener("click", open);
        card.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
        });
      });
      requestAnimationFrame(() => grid.classList.remove("filtering"));
    };

    if (animate) {
      grid.classList.add("filtering");
      setTimeout(paint, 200);
    } else paint();
  }

  /* ------------------------------------------------------------------
     CASE STUDY MODAL + RECOMMENDATIONS
     ------------------------------------------------------------------ */
  function related(cs) {
    // Score every other case study, then always return the top 3 so the
    // recommendation row never renders as a lonely stretched card.
    return C.caseStudies
      .filter((o) => o.id !== cs.id)
      .map((o) => {
        let score = 0;
        let why = "";
        if (o.type === cs.type) { score += 3; why = "Same discipline"; }
        if (o.industry === cs.industry) { score += 2; why = why || "Same industry"; }
        const shared = o.skills.filter((s) => cs.skills.includes(s));
        if (shared.length) { score += shared.length; why = why || `Also uses ${shared[0]}`; }
        return { cs: o, score, why: why || `${o.type} work` };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  }

  function openCase(id) {
    const cs = C.caseStudies.find((c) => c.id === id);
    if (!cs) return;
    const bd = $("#modalBackdrop");
    const rel = related(cs);
    const testi = cs.testimonialId ? validTestimonials().find((t) => t.id === cs.testimonialId) : null;

    bd.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div class="modal-hero">
          <button class="modal-close" id="modalClose" aria-label="Close case study">${I.x}</button>
          <div class="work-meta">
            <span class="work-company">${esc(cs.company)}</span>
            <span class="dot"></span><span>${esc(cs.industry)}</span>
            <span class="dot"></span><span>${esc(cs.period)}</span>
          </div>
          <h2 id="modalTitle">${esc(cs.headline)}</h2>
          <p class="text-muted">${esc(cs.role)}</p>
        </div>

        <div class="modal-body">
          <div class="modal-block">
            <h4>The situation</h4>
            <p>${esc(cs.challenge)}</p>
          </div>

          <div class="modal-block">
            <h4>What I did</h4>
            <ol class="approach-list">
              ${cs.approach.map((a) => `<li>${esc(a)}</li>`).join("")}
            </ol>
          </div>

          <div class="modal-block">
            <h4>Before → After</h4>
            <div class="ba-list">
              ${cs.beforeAfter.map((b) => `
                <div class="ba-row">
                  <div class="ba-metric">${esc(b.metric)}</div>
                  <div class="ba-val ba-before"><span class="ba-tag">Before</span>${esc(b.before)}</div>
                  <div class="ba-arrow">${I.arrowRight}</div>
                  <div class="ba-val ba-after"><span class="ba-tag">After</span>${esc(b.after)}</div>
                  <span class="ba-badge ${b.direction === "down" ? "down" : "up"}">
                    ${b.direction === "down" ? I.trendDown : I.trendUp}
                    ${b.direction === "down" ? "Reduced" : "Improved"}
                  </span>
                </div>`).join("")}
            </div>
          </div>

          <div class="modal-block">
            <h4>Results</h4>
            <div class="results-grid">
              ${cs.results.map((r) => `
                <div class="result-cell">
                  <div class="rv">${esc(r.value)}</div>
                  <div class="rl">${esc(r.label)}</div>
                </div>`).join("")}
            </div>
          </div>

          ${testi ? `
          <div class="modal-block">
            <h4>What they said</h4>
            <div class="card testi">
              <div class="stars">${Array(testi.rating).fill(I.star).join("")}</div>
              <p class="testi-quote">"${esc(testi.quote)}"</p>
              <div class="testi-person">
                <div class="testi-avatar">${esc(initialsOf(testi.name))}</div>
                <div>
                  <div class="testi-name">${esc(testi.name)}</div>
                  <div class="testi-title">${esc(testi.title)}${testi.company ? " · " + esc(testi.company) : ""}</div>
                </div>
              </div>
            </div>
          </div>` : ""}

          <div class="modal-block">
            <h4>Stack used</h4>
            <div class="tool-pills">
              ${cs.tools.map((t) => `<span class="tool-pill">${esc(t)}</span>`).join("")}
            </div>
          </div>

          ${rel.length ? `
          <div class="modal-block">
            <h4>You might also want to see</h4>
            <div class="related-grid">
              ${rel.map((r) => `
                <button class="related-card" data-goto="${esc(r.cs.id)}">
                  <div class="rc-why">${esc(r.why)}</div>
                  <div class="rc-title">${esc(r.cs.headline)}</div>
                  <div class="rc-meta">${esc(r.cs.company)} · ${esc(r.cs.thumbMetric.value)} ${esc(r.cs.thumbMetric.label)}</div>
                </button>`).join("")}
            </div>
          </div>` : ""}

          <div class="modal-cta">
            <p>Recognise any of this in your own funnel?
              <span>Book a free 30-minute diagnostic and we'll look at yours.</span></p>
            <a class="btn btn-primary" href="${esc(C.identity.calendly)}" target="_blank" rel="noopener">
              Book a call ${I.arrowRight}
            </a>
          </div>
        </div>
      </div>`;

    bd.classList.add("open");
    document.body.classList.add("no-scroll");
    bd.scrollTop = 0;

    $("#modalClose").addEventListener("click", closeCase);
    $$(".related-card", bd).forEach((b) =>
      b.addEventListener("click", () => openCase(b.dataset.goto))
    );
    setTimeout(() => $("#modalClose").focus(), 60);
  }

  function closeCase() {
    const bd = $("#modalBackdrop");
    bd.classList.remove("open");
    document.body.classList.remove("no-scroll");
    setTimeout(() => { if (!bd.classList.contains("open")) bd.innerHTML = ""; }, 320);
  }

  function initModal() {
    const bd = $("#modalBackdrop");
    bd.addEventListener("click", (e) => { if (e.target === bd) closeCase(); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && bd.classList.contains("open")) closeCase();
    });
  }

  /* ------------------------------------------------------------------
     PROCESS
     ------------------------------------------------------------------ */
  function initProcess() {
    $("#processHeading").textContent = C.processHeading;
    $("#processSubhead").textContent = C.processSubhead;
    $("#processGrid").innerHTML = C.process
      .map(
        (p) => `
      <div class="proc">
        <div class="proc-num">${esc(p.step)}</div>
        <h3>${esc(p.name)}</h3>
        <div class="proc-dur">${esc(p.duration)}</div>
        <p>${esc(p.body)}</p>
      </div>`
      )
      .join("");
  }

  /* ------------------------------------------------------------------
     PRICING
     ------------------------------------------------------------------ */
  function initPricing() {
    $("#pricingHeading").textContent = C.pricingHeading;
    $("#pricingSubhead").textContent = C.pricingSubhead;
    $("#pricingNote").textContent = C.pricingNote;

    $("#tiersGrid").innerHTML = C.tiers
      .map(
        (t) => `
      <article class="card tier${t.featured ? " featured" : ""}">
        ${t.badge ? `<span class="tier-badge">${esc(t.badge)}</span>` : ""}
        <div class="tier-name">${esc(t.name)}</div>
        <p class="tier-tagline">${esc(t.tagline)}</p>
        <div class="tier-price-row">
          <span class="tier-price">${esc(t.price)}</span>
          <span class="tier-unit">${esc(t.unit)}</span>
        </div>
        <div class="tier-duration">${esc(t.duration)}</div>
        <p class="tier-bestfor">${esc(t.bestFor)}</p>
        <ul class="tier-includes">
          ${t.includes.map((i) => `<li>${I.check}<span>${esc(i)}</span></li>`).join("")}
        </ul>
        <a class="btn ${t.featured ? "btn-primary" : "btn-ghost"} btn-block" href="#contact">
          ${esc(t.cta)} ${I.arrowRight}
        </a>
      </article>`
      )
      .join("");
  }

  /* ------------------------------------------------------------------
     ESTIMATE CALCULATOR
     ------------------------------------------------------------------ */
  const calc = { service: 0, size: 1, timeline: 0, addons: new Set() };

  function initCalculator() {
    const cc = C.calculator;
    $("#calcHeading").textContent = cc.heading;
    $("#calcSubhead").textContent = cc.subhead;

    $("#calcServices").innerHTML = cc.services
      .map((s, i) => `<button class="opt${i === 0 ? " active" : ""}" data-g="service" data-i="${i}">
          <span class="opt-label">${esc(s.label)}</span>
          <span class="opt-note">from $${s.base.toLocaleString()}</span>
        </button>`).join("");

    $("#calcSizes").innerHTML = cc.sizes
      .map((s, i) => `<button class="opt${i === 1 ? " active" : ""}" data-g="size" data-i="${i}">
          <span class="opt-label">${esc(s.label)}</span>
          <span class="opt-note">${esc(s.note)}</span>
        </button>`).join("");

    $("#calcTimelines").innerHTML = cc.timelines
      .map((t, i) => `<button class="opt${i === 0 ? " active" : ""}" data-g="timeline" data-i="${i}">
          <span class="opt-label">${esc(t.label)}</span>
          <span class="opt-note">${esc(t.note)}</span>
        </button>`).join("");

    $("#calcAddons").innerHTML = cc.addons
      .map((a, i) => `<button class="addon" data-i="${i}">
          <span class="addon-check">${I.check}</span>
          <span class="addon-name">${esc(a.label)}</span>
          <span class="addon-cost">+$${a.cost.toLocaleString()}</span>
        </button>`).join("");

    $$('#calcPanel .opt').forEach((b) => {
      b.addEventListener("click", () => {
        const g = b.dataset.g;
        $$(`#calcPanel .opt[data-g="${g}"]`).forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
        calc[g] = +b.dataset.i;
        updateEstimate();
      });
    });

    $$("#calcAddons .addon").forEach((b) => {
      b.addEventListener("click", () => {
        const i = +b.dataset.i;
        if (calc.addons.has(i)) calc.addons.delete(i);
        else calc.addons.add(i);
        b.classList.toggle("active", calc.addons.has(i));
        updateEstimate();
      });
    });

    $("#calcDisclaimer").textContent = cc.disclaimer;
    updateEstimate();

    $("#calcToContact").addEventListener("click", (e) => {
      e.preventDefault();
      const svc = C.calculator.services[calc.service];
      const sel = $("#projectType");
      if (sel) {
        const match = Array.from(sel.options).find((o) => o.value === svc.label || svc.label.startsWith(o.value));
        if (match) sel.value = match.value;
      }
      const details = $("#details");
      if (details && !details.value.trim()) {
        details.value =
          `Interested in: ${svc.label}\n` +
          `Company size: ${C.calculator.sizes[calc.size].label}\n` +
          `Timeline: ${C.calculator.timelines[calc.timeline].label}\n` +
          (calc.addons.size
            ? `Add-ons: ${[...calc.addons].map((i) => C.calculator.addons[i].label).join(", ")}\n`
            : "") +
          `Estimate shown: ${$("#estimateRange").textContent}\n\n`;
      }
      $("#contact").scrollIntoView({ behavior: "smooth" });
      setTimeout(() => $("#name") && $("#name").focus(), 700);
    });
  }

  function updateEstimate() {
    const cc = C.calculator;
    const svc = cc.services[calc.service];
    const size = cc.sizes[calc.size];
    const tl = cc.timelines[calc.timeline];

    const addonTotal = [...calc.addons].reduce((sum, i) => sum + cc.addons[i].cost, 0);
    const core = svc.base * size.mult * tl.mult;
    const total = core + addonTotal;

    const lo = Math.round((total * (1 - cc.spread)) / 100) * 100;
    const hi = Math.round((total * (1 + cc.spread)) / 100) * 100;

    const el = $("#estimateRange");
    el.classList.add("updating");
    setTimeout(() => {
      el.textContent = `$${lo.toLocaleString()} – $${hi.toLocaleString()}`;
      el.classList.remove("updating");
    }, 130);

    $("#estimateUnit").textContent =
      svc.id === "fractional" ? "per month · 3-month minimum" : "total project fee, fixed before kickoff";

    $("#calcSummary").innerHTML = `
      <div class="calc-line"><span class="cl-key">Service</span><span class="cl-val">${esc(svc.label)}</span></div>
      <div class="calc-line"><span class="cl-key">Company size</span><span class="cl-val">${esc(size.label)}</span></div>
      <div class="calc-line"><span class="cl-key">Timeline</span><span class="cl-val">${esc(tl.label)}</span></div>
      <div class="calc-line"><span class="cl-key">Add-ons</span><span class="cl-val">${
        calc.addons.size ? calc.addons.size + " selected · +$" + addonTotal.toLocaleString() : "None"
      }</span></div>`;
  }

  /* ------------------------------------------------------------------
     TESTIMONIALS
     ------------------------------------------------------------------ */
  const isPlaceholder = (t) =>
    ["quote", "name", "title", "company"].some(
      (k) => typeof t[k] === "string" && t[k].toUpperCase().includes("PLACEHOLDER")
    );
  const validTestimonials = () => C.testimonials.filter((t) => !isPlaceholder(t));
  const initialsOf = (n) =>
    String(n).trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

  function initTestimonials() {
    $("#testiHeading").textContent = C.testimonialsHeading;
    $("#testiSubhead").textContent = C.testimonialsSubhead;

    const list = validTestimonials();
    const grid = $("#testiGrid");

    if (!list.length) {
      grid.innerHTML = `
        <div class="testi-empty">
          ${I.quote}
          <strong>Testimonials aren't published yet</strong>
          <p>Real quotes go here. Open <code>assets/js/content.js</code>, find the
          <code>testimonials</code> section, and replace each PLACEHOLDER with the real words
          from your LinkedIn recommendation and your colleagues.</p>
          <p style="margin-top:12px;font-size:0.82rem;">Entries still marked PLACEHOLDER stay hidden,
          so nothing invented is ever shown to a visitor.</p>
        </div>`;
      return;
    }

    grid.innerHTML = list
      .map(
        (t) => `
      <article class="card spotlight testi">
        <div class="testi-quote-mark">"</div>
        <div class="stars" aria-label="${t.rating} out of 5">${Array(Math.max(1, Math.min(5, t.rating))).fill(I.star).join("")}</div>
        <p class="testi-quote">${esc(t.quote)}</p>
        <div class="testi-person">
          <div class="testi-avatar">${
            t.avatar ? `<img src="${esc(t.avatar)}" alt="${esc(t.name)}">` : esc(initialsOf(t.name))
          }</div>
          <div>
            <div class="testi-name">${esc(t.name)}</div>
            <div class="testi-title">${esc(t.title)}${t.company ? " · " + esc(t.company) : ""}</div>
          </div>
          ${t.relationship ? `<div class="testi-rel">${esc(t.relationship)}</div>` : ""}
        </div>
      </article>`
      )
      .join("");
    initSpotlight();
  }

  /* ------------------------------------------------------------------
     ABOUT + VIDEO
     ------------------------------------------------------------------ */
  function initAbout() {
    const a = C.about;
    $("#aboutHeading").textContent = a.heading;
    $("#aboutBody").innerHTML = a.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("") +
      `<p class="about-sig">${esc(a.signature)}</p>`;

    $("#expertiseGrid").innerHTML = a.expertise
      .map((e) => `<span class="exp-pill">${esc(e)}</span>`).join("");

    $("#eduCard").innerHTML = `
      <span class="mono">Education</span>
      <h4>${esc(a.education.degree)}</h4>
      <p>${esc(a.education.school)} · ${esc(a.education.period)}</p>`;

    $("#resumeCta").innerHTML = `
      <a class="btn btn-ghost" href="${esc(C.identity.resume)}" download>
        ${I.download} Download my résumé (PDF)
      </a>`;

    const doubled = a.tools.concat(a.tools);
    $("#toolsTrack").innerHTML = doubled
      .map((t) => `<span class="tool-chip">${esc(t)}</span>`).join("");

    // Video
    const v = C.video;
    const frame = $("#videoFrame");
    if (v.type === "youtube" && v.id) {
      frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${esc(v.id)}"
        title="${esc(v.title)}" allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
        allowfullscreen loading="lazy"></iframe>`;
    } else if (v.type === "vimeo" && v.id) {
      frame.innerHTML = `<iframe src="https://player.vimeo.com/video/${esc(v.id)}"
        title="${esc(v.title)}" allow="fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
    } else if (v.type === "file") {
      frame.innerHTML = `<video controls preload="metadata"${v.poster ? ` poster="${esc(v.poster)}"` : ""}>
        <source src="${esc(v.src)}" type="video/mp4">Your browser does not support video playback.</video>`;
    } else {
      frame.innerHTML = `
        <div class="video-placeholder">
          <div class="play-btn">${I.play}</div>
          <div class="vp-title">${esc(v.title)}</div>
          <div class="vp-note">Space reserved — add your intro in content.js</div>
        </div>`;
    }
    $("#videoCaption").innerHTML = `<h4>${esc(v.title)}</h4><p>${esc(v.blurb)}</p>`;
  }

  /* ------------------------------------------------------------------
     FAQ
     ------------------------------------------------------------------ */
  function initFaq() {
    $("#faqHeading").textContent = C.faqHeading;
    $("#faqList").innerHTML = C.faqs
      .map(
        (f, i) => `
      <div class="faq-item">
        <button class="faq-q" aria-expanded="false" aria-controls="faq-a-${i}">
          <span>${esc(f.q)}</span>
          <span class="faq-icon">${I.plus}</span>
        </button>
        <div class="faq-a" id="faq-a-${i}"><div><p>${esc(f.a)}</p></div></div>
      </div>`
      )
      .join("");

    $$(".faq-q").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        const open = item.classList.contains("open");
        $$(".faq-item").forEach((x) => {
          x.classList.remove("open");
          x.querySelector(".faq-q").setAttribute("aria-expanded", "false");
        });
        if (!open) {
          item.classList.add("open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  /* ------------------------------------------------------------------
     BOOKING SLOTS
     ------------------------------------------------------------------ */
  function initBooking() {
    const grid = $("#slotGrid");
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const today = new Date();
    let html = "";
    let added = 0;
    let offset = 1;

    while (added < 6 && offset < 20) {
      const d = new Date(today);
      d.setDate(today.getDate() + offset);
      offset++;
      const dow = d.getDay();
      if (dow === 0 || dow === 6) continue; // weekdays only
      const open = ((d.getDate() + dow) % 3) + 1; // deterministic, varies by date
      added++;
      html += `<button class="slot" data-date="${d.toDateString()}">
          <span class="slot-day">${days[dow]}</span>
          <span class="slot-date">${d.getDate()} ${d.toLocaleString("en", { month: "short" })}</span>
          <span class="slot-count">${open} slot${open > 1 ? "s" : ""}</span>
        </button>`;
    }
    grid.innerHTML = html;

    $$("#slotGrid .slot").forEach((s) =>
      s.addEventListener("click", () => window.open(C.identity.calendly, "_blank", "noopener"))
    );
  }

  /* ------------------------------------------------------------------
     CONTACT FORM
     ------------------------------------------------------------------ */
  function initContact() {
    const ct = C.contact;
    $("#contactHeading").textContent = ct.heading;
    $("#contactSubhead").textContent = ct.subhead;

    const fill = (id, arr, ph) => {
      $(id).innerHTML = `<option value="" disabled selected>${ph}</option>` +
        arr.map((o) => `<option value="${esc(o)}">${esc(o)}</option>`).join("");
    };
    fill("#projectType", ct.projectTypes, "Select what you need…");
    fill("#budget", ct.budgets, "Select a range…");
    fill("#timeline", ct.timelines, "When do you want to start?");

    // Contact methods
    $("#contactMethods").innerHTML = `
      <a class="contact-method" href="${esc(C.identity.calendly)}" target="_blank" rel="noopener">
        <span class="cm-icon">${I.calendar}</span>
        <span><span class="cm-label">Fastest route</span><span class="cm-value">Book a 30-min call</span></span>
        <span class="cm-arrow">${I.arrowUpRight}</span>
      </a>
      <a class="contact-method" href="mailto:${esc(C.identity.email)}">
        <span class="cm-icon">${I.mail}</span>
        <span><span class="cm-label">Email</span><span class="cm-value">${esc(C.identity.email)}</span></span>
        <span class="cm-arrow">${I.arrowUpRight}</span>
      </a>
      <a class="contact-method" href="tel:${esc(C.identity.phoneHref)}">
        <span class="cm-icon">${I.phone}</span>
        <span><span class="cm-label">Phone / WhatsApp</span><span class="cm-value">${esc(C.identity.phone)}</span></span>
        <span class="cm-arrow">${I.arrowUpRight}</span>
      </a>
      <a class="contact-method" href="${esc(C.identity.linkedin)}" target="_blank" rel="noopener">
        <span class="cm-icon">${I.linkedin}</span>
        <span><span class="cm-label">LinkedIn</span><span class="cm-value">Connect with me</span></span>
        <span class="cm-arrow">${I.arrowUpRight}</span>
      </a>`;

    $("#responsePromise").innerHTML = `${I.shield}<span>${esc(ct.responsePromise)}</span>`;

    // Demo-mode banner when no endpoint configured
    if (!C.formEndpoint) {
      $("#demoNote").innerHTML = `${I.alert}<span><strong>Demo mode.</strong> The form validates and
        shows its success state but doesn't send yet. Add your Formspree URL to
        <code>formEndpoint</code> in <code>content.js</code> to go live.</span>`;
      $("#demoNote").style.display = "flex";
    }

    // Character counter
    const details = $("#details");
    const counter = $("#detailsCount");
    const sync = () => { counter.textContent = details.value.length + " / 1500"; };
    details.addEventListener("input", sync); sync();

    // Validation
    const rules = {
      name:        (v) => (!v.trim() ? "Please tell me your name." : v.trim().length < 2 ? "That looks too short." : ""),
      email:       (v) => (!v.trim() ? "I need an email to reply to." : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "That email doesn't look right." : ""),
      company:     () => "",
      projectType: (v) => (!v ? "Pick the closest option — we can refine it on the call." : ""),
      budget:      (v) => (!v ? "A rough range helps me scope honestly." : ""),
      timeline:    () => "",
      details:     (v) => (!v.trim() ? "Tell me a bit about what's going on." : v.trim().length < 20 ? "A little more detail helps me prepare." : ""),
    };

    const showErr = (id, msg) => {
      const field = $("#" + id).closest(".field");
      field.classList.toggle("error", !!msg);
      let e = field.querySelector(".err-msg");
      if (msg) {
        if (!e) { e = document.createElement("div"); e.className = "err-msg"; field.appendChild(e); }
        e.innerHTML = I.alert + `<span>${esc(msg)}</span>`;
        $("#" + id).setAttribute("aria-invalid", "true");
      } else if (e) {
        e.remove();
        $("#" + id).removeAttribute("aria-invalid");
      }
    };

    Object.keys(rules).forEach((id) => {
      const el = $("#" + id);
      if (!el) return;
      el.addEventListener("blur", () => showErr(id, rules[id](el.value)));
      el.addEventListener("input", () => {
        if (el.closest(".field").classList.contains("error")) showErr(id, rules[id](el.value));
      });
      el.addEventListener("change", () => showErr(id, rules[id](el.value)));
    });

    const form = $("#contactForm");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      let firstBad = null;
      Object.keys(rules).forEach((id) => {
        const el = $("#" + id);
        if (!el) return;
        const msg = rules[id](el.value);
        showErr(id, msg);
        if (msg && !firstBad) firstBad = el;
      });
      if (firstBad) {
        firstBad.focus();
        firstBad.closest(".field").scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }

      const btn = $("#submitBtn");
      const original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = "Sending…";

      const data = Object.fromEntries(new FormData(form).entries());

      try {
        if (C.formEndpoint) {
          const res = await fetch(C.formEndpoint, {
            method: "POST",
            headers: { Accept: "application/json" },
            body: new FormData(form),
          });
          if (!res.ok) throw new Error("Submission failed");
        } else {
          await new Promise((r) => setTimeout(r, 900)); // demo mode
          console.info("[Demo mode] Form data captured:", data);
        }
        form.style.display = "none";
        $("#formSuccess").classList.add("show");
        $("#successName").textContent = String(data.name || "").split(" ")[0] || "there";
        $("#formSuccess").scrollIntoView({ behavior: "smooth", block: "center" });
      } catch (err) {
        btn.disabled = false;
        btn.innerHTML = original;
        let box = $("#formError");
        if (!box) {
          box = document.createElement("div");
          box.id = "formError";
          box.className = "err-msg";
          box.style.marginTop = "14px";
          form.appendChild(box);
        }
        box.innerHTML = I.alert +
          `<span>Something went wrong sending that. Please email me directly at
           <a href="mailto:${esc(C.identity.email)}" style="color:inherit;text-decoration:underline">${esc(C.identity.email)}</a>.</span>`;
      }
    });

    $("#resetForm").addEventListener("click", () => {
      form.reset();
      form.style.display = "";
      $("#formSuccess").classList.remove("show");
      $("#submitBtn").disabled = false;
      $("#submitBtn").innerHTML = "Send message " + I.arrowRight;
      sync();
    });
  }

  /* ------------------------------------------------------------------
     FINAL CTA + FOOTER
     ------------------------------------------------------------------ */
  function initClosing() {
    const f = C.finalCta;
    $("#ctaHeading").textContent = f.heading;
    $("#ctaBody").textContent = f.body;
    $("#ctaPrimary").innerHTML = esc(f.primary) + I.arrowRight;
    $("#ctaPrimary").href = C.identity.calendly;
    $("#ctaSecondary").textContent = f.secondary;

    $("#footerTagline").textContent = C.footer.tagline;
    $("#footerCredit").textContent = `© ${new Date().getFullYear()} ${C.identity.name}. ${C.footer.credit}`;

    $("#footerServices").innerHTML = C.services
      .map((s) => `<a href="#services">${esc(s.name)}</a>`).join("");

    $("#footerSocial").innerHTML = `
      <a class="social-btn" href="${esc(C.identity.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn">${I.linkedin}</a>
      <a class="social-btn" href="mailto:${esc(C.identity.email)}" aria-label="Email">${I.mail}</a>
      <a class="social-btn" href="tel:${esc(C.identity.phoneHref)}" aria-label="Phone">${I.phone}</a>
      <a class="social-btn" href="${esc(C.identity.calendly)}" target="_blank" rel="noopener" aria-label="Book a call">${I.calendar}</a>`;

    $$(".js-brand-name").forEach((e) => (e.textContent = C.identity.name));
    $$(".js-brand-role").forEach((e) => (e.textContent = C.identity.role));
    $$(".js-initials").forEach((e) => (e.textContent = C.identity.initials));
    $$(".js-calendly").forEach((e) => (e.href = C.identity.calendly));
    $("#footerLocation").textContent = C.identity.location;
  }

  /* ------------------------------------------------------------------
     BOOT
     ------------------------------------------------------------------ */
  function boot() {
    try {
      initNav();
      initHero();
      initMetrics();
      initLogos();
      initServices();
      initWork();
      initModal();
      initProcess();
      initPricing();
      initCalculator();
      initTestimonials();
      initAbout();
      initFaq();
      initBooking();
      initContact();
      initClosing();
      observeReveals();
    } catch (err) {
      console.error("Site init error:", err);
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();

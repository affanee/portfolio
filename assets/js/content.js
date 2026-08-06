/* ============================================================================
   CONTENT.JS — EDIT THIS FILE, NOT THE CODE.
   Everything you see on the website lives here: text, prices, case studies,
   testimonials, logos, links. Change a value, save, refresh the browser.

   RULES:
   - Keep the quotes " " and the commas , exactly where they are.
   - Anything marked  ⚠️ REPLACE  is a placeholder you need to fill in.

   HOUSE STYLE (keep it this way when you edit):
   - No em dashes. Use a full stop or the word "and".
   - No Oxford comma. Write "sales, marketing and ops" not "sales, marketing, and ops".
   - Short words beat clever words. Say the thing plainly.
   ========================================================================= */

const CONTENT = {

  /* ==========================================================================
     1. IDENTITY & LINKS
     ====================================================================== */
  identity: {
    name: "Affan Bin Emran",
    initials: "AE",
    role: "GTM & RevOps Consultant",
    siteTitle: "Affan Bin Emran | GTM & RevOps Consultant",
    metaDescription:
      "I help founders and small teams sort out the tools, data and handoffs between marketing, sales and support, so growth stops being chaotic.",
    email: "affanbinemran@gmail.com",
    phone: "+880 1814 648788",
    phoneHref: "+8801814648788",
    location: "Dhaka, Bangladesh. Working with teams in the US, UK, EU and APAC.",
    // Not shown on the page right now. Kept in case you want it back somewhere.
    timezone: "GMT+6. I overlap with US mornings and EU afternoons.",
    linkedin: "https://www.linkedin.com/in/affan-bin-emran/",
    website: "https://affanofficial.com/",
    calendly: "https://calendly.com/affanbinemran/consultation-call-with-affan",

    // Your photo. Save your formal photo to: assets/img/affan.jpg
    // If the file is missing, the site shows an initials monogram instead.
    photo: "assets/img/affan.jpg",

    resume: "assets/Affan-Bin-Emran-Resume.pdf",
  },

  /* ==========================================================================
     2. FORM BACKEND (Formspree)
     ----------------------------------------------------------------------
     SETUP (2 minutes):
     1. Go to https://formspree.io and sign up free
     2. Create a new form and copy the endpoint, like https://formspree.io/f/xyzabcd
     3. Paste the full URL below, replacing the empty quotes.
     Until you do, the form runs in DEMO MODE. It checks the fields and shows
     the success message but it does not send anything.
     ====================================================================== */
  formEndpoint: "", // ⚠️ REPLACE with your Formspree URL

  /* ==========================================================================
     3. HERO
     ====================================================================== */
  hero: {
    availability: "Open to new projects",
    // The big headline. Each line is one item in the list.
    headline: ["Hey, I'm Affan 👋🏻"],
    // This word gets the blue gradient treatment
    highlight: "Affan",
    subhead:
      "Most teams I meet are growing, but behind the scenes everything is a scramble. Too many tools, messy data and things falling between marketing, sales and support. I come in and quietly put it in order, so your team spends less time chasing and more time doing the work.",
    primaryCta: "Book a free call",
    secondaryCta: "See the work",

    // The 4 counters under the hero. All from real results.
    metrics: [
      { value: 2000, suffix: "+", label: "Leads turned into real pipeline" },
      { value: 25, suffix: "+", label: "Deals closed at $10K average size" },
      { value: 30, suffix: "%", label: "More outbound leads turned into deals" },
      { value: 22, suffix: "%", label: "Faster time to close" },
    ],
  },

  /* ==========================================================================
     4. VIDEO INTRO  (9:16 vertical, about 90 seconds)
     ----------------------------------------------------------------------
     Three ways to add your video. Pick ONE:

     A) YouTube:  type: "youtube",  id: "dQw4w9WgXcQ"   (the bit after v=)
        For a YouTube Short the id works the same way.
     B) Vimeo:    type: "vimeo",    id: "123456789"
     C) Own file: type: "file",     src: "assets/video/intro.mp4"

     Leave type as "none" to show the placeholder.
     ====================================================================== */
  video: {
    type: "none", // ⚠️ REPLACE with "youtube" | "vimeo" | "file"
    id: "",
    src: "assets/video/intro.mp4",
    poster: "",
    title: "Meet me in 90 seconds",
    blurb:
      "Who I am, the kind of mess I usually walk into and how working together actually goes.",
  },

  /* ==========================================================================
     5. COMPANY LOGO WALL
     ----------------------------------------------------------------------
     Shows 5 at a time. Each slot flips to a new company one after another.

     TO ADD REAL LOGOS: save each file into assets/img/logos/ and put the
     filename in "logo". If the file is missing or "logo" is empty, the site
     draws a clean text wordmark instead, which still looks intentional.
     ====================================================================== */
  logosHeading: "I have also worked with",
  logos: [
    { name: "CrewBloom",             logo: "crewbloom.jpeg" },
    { name: "Red Lantern",           logo: "red-lantern-digital-media.jpeg" },
    { name: "Rainmaker",             logo: "rainmaker-group-ltd.jpeg" },
    { name: "Polynize",              logo: "polynize.jpeg" },
    { name: "Eriscale",              logo: "eriscale.jpeg" },
    { name: "Actnovate",             logo: "actinovate-group.jpeg" },
    { name: "Text Only",             logo: "text-only.jpeg" },
    { name: "Emran's Heritage Home", logo: "lunch-at-emrans-heritage-home.jpeg" },
    { name: "Hype Technology",       logo: "hype-tech.jpeg" },
    { name: "Kampus Group",          logo: "kampus-group-education.jpeg" },
    { name: "YSSE",                  logo: "ysseglobal.jpeg" },
    { name: "Kuubiik",               logo: "kuubiikexperts.jpeg" },
  ],

  /* ==========================================================================
     6. SERVICES
     ====================================================================== */
  servicesHeading: "Six ways I plug into your revenue org",
  servicesSubhead:
    "Every project gets a fixed scope and a fixed price before it starts. You always know what you are getting, when it lands and what it costs.",

  services: [
    {
      id: "audit",
      tier: "Diagnose",
      name: "RevOps & CRM Audit",
      icon: "search",
      summary:
        "Find out why revenue keeps surprising you, before anyone spends money fixing the wrong thing.",
      price: "$1,200",
      priceNote: "one time · 1 to 2 weeks",
      forWho: "Teams who know something is off but cannot point at it.",
      deliverables: [
        "A full check of your CRM. Fields, pipelines, permissions and whether people actually use it",
        "A stage by stage look at your funnel showing exactly where deals go quiet",
        "A data report covering duplicates, dead records and missing company info",
        "How reliable your forecast has been across the last two quarters",
        "A ranked fix list for the next 30, 60 and 90 days, scored by effort against payoff",
        "A recorded walkthrough plus a live session with your leadership team",
      ],
      outcome: "You stop guessing. You get a ranked list of what is quietly costing you deals.",
    },
    {
      id: "crm",
      tier: "Build",
      name: "CRM Architecture & Cleanup",
      icon: "database",
      summary:
        "Rebuild your CRM so the data is trustworthy and the pipeline shows what is really happening.",
      price: "$3,000",
      priceNote: "starting · 4 to 6 weeks",
      forWho: "Teams whose CRM turned into a graveyard nobody trusts.",
      deliverables: [
        "Fields and pipelines rebuilt around how you actually sell, not how the org chart looks",
        "Your existing database cleaned, deduplicated and topped up with missing info",
        "Clear stages and handoff rules between marketing, SDRs, closers and support",
        "Automation for routing, tasks, stage rules and alerts so nothing slips",
        "Dashboards for leadership and for reps that people will actually open",
        "Written guides plus live team training so the cleanup does not undo itself",
      ],
      outcome: "A CRM your team updates because it helps them, not because you keep asking.",
    },
    {
      id: "outbound",
      tier: "Build",
      name: "Outbound GTM Engine",
      icon: "target",
      summary:
        "An outbound motion built end to end. Who to target, what to say, how to reach them and how to measure it.",
      price: "$4,000",
      priceNote: "starting · 6 to 8 weeks",
      forWho: "Teams whose outbound either does not exist or is quietly burning their domain.",
      deliverables: [
        "A clear picture of who is worth chasing, built from the deals you already won",
        "List building and data enrichment set up in Apollo, Clay and Sales Navigator",
        "Sequences written for email, LinkedIn and phone, split by who you are talking to",
        "Email setup done properly so your messages land in the inbox and not in spam",
        "Messaging written per segment plus a simple way to keep testing and improving it",
        "Reporting that shows cost per meeting, not just how many emails went out",
      ],
      outcome: "A meeting engine you can repeat, with costs and output you can predict.",
    },
    {
      id: "fractional",
      tier: "Operate",
      name: "Fractional Sales Ops / RevOps Lead",
      icon: "compass",
      summary:
        "Senior revenue ops ownership without paying for a senior full time hire.",
      price: "$3,000",
      priceNote: "per month · 3 month minimum",
      forWho: "Founder led teams who need someone to own this, not just advise on it.",
      deliverables: [
        "I own the CRM, the data and the reporting as part of your team",
        "Weekly pipeline reviews and deal support with your closers",
        "Monthly forecast build plus a clear read on why the numbers moved",
        "Ongoing automation and tooling work as you grow",
        "New rep onboarding, training and written process docs",
        "Direct Slack access plus a standing weekly call with leadership",
      ],
      outcome: "A sales team that runs on process instead of running on your memory.",
    },
    {
      id: "strategy",
      tier: "Diagnose",
      name: "GTM Strategy Sprint",
      icon: "map",
      summary:
        "Work out where to play and how to win before you pour budget into channels.",
      price: "$2,000",
      priceNote: "one time · 2 to 3 weeks",
      forWho: "Teams moving into a new market, segment or product line.",
      deliverables: [
        "Research on who your best buyers are, with named target account lists",
        "A straight look at your competitors and where you actually stand out",
        "A channel plan with the likely cost per customer and payback for each one",
        "Messaging built for each type of buyer instead of one message for everyone",
        "A quarter by quarter plan with owners, budget and the numbers to watch",
        "A board ready deck you can present without editing it first",
      ],
      outcome: "A plan you can defend for where next quarter's revenue is coming from.",
    },
    {
      id: "retention",
      tier: "Operate",
      name: "Account Management & Retention",
      icon: "refresh",
      summary:
        "Stop replacing customers you lost. Turn the ones you have into your cheapest growth.",
      price: "$2,000",
      priceNote: "starting · 4 weeks",
      forWho: "Teams winning new logos but losing them just as fast.",
      deliverables: [
        "Accounts sorted by value, risk and room to grow",
        "A review rhythm and account plan templates your team will actually use",
        "Upsell and cross sell playbooks tied to what customers really do in the product",
        "Early warning signals for churn wired into CRM alerts",
        "A renewal process with clear owners and clear dates",
        "A health score plus a retention dashboard",
      ],
      outcome: "Keeping customers becomes something you manage, not something you find out about.",
    },
  ],

  /* ==========================================================================
     7. PRICING TIERS
     ----------------------------------------------------------------------
     NOTE: the "from" price on each tier is the cheapest service inside it.
     If you change a service price above, check these still match.
     ====================================================================== */
  pricingHeading: "Simple, scoped, no surprises",
  pricingSubhead:
    "Three ways to work together. The scope and the price are agreed in writing before we start, so you never get an invoice you did not expect.",
  pricingNote:
    "All prices in USD. Fixed fee, half upfront and half on delivery. Monthly retainers are billed monthly and you can stop with 30 days notice.",

  tiers: [
    {
      name: "Diagnose",
      tagline: "Find out what is actually broken",
      price: "$1,200",
      unit: "from · one time",
      duration: "1 to 3 weeks",
      featured: false,
      bestFor: "First projects and teams who want a second opinion fast.",
      includes: [
        "RevOps and CRM audit, or a GTM strategy sprint",
        "A full read on your funnel and your data",
        "A ranked fix list for the next 30, 60 and 90 days",
        "A live findings session with your leadership team",
        "Fixed fee, taken off any build work you book within 60 days",
      ],
      cta: "Start with a diagnostic",
    },
    {
      name: "Build",
      tagline: "Ship the system that fixes it",
      price: "$3,000",
      unit: "from · per project",
      duration: "4 to 8 weeks",
      featured: true,
      badge: "Most people start here",
      bestFor: "Teams ready to rebuild the CRM, outbound or both properly.",
      includes: [
        "Everything in Diagnose, included",
        "CRM rebuilt and the existing data cleaned up",
        "Outbound engine built with proper email setup",
        "Automation, routing and dashboards live",
        "Team training, written guides and a recorded handover",
        "30 days of support after launch",
      ],
      cta: "Scope a build",
    },
    {
      name: "Operate",
      tagline: "Run it with me on the inside",
      price: "$2,000",
      unit: "per month",
      duration: "3 month minimum",
      featured: false,
      bestFor: "Companies who need this function owned end to end.",
      includes: [
        "A fractional sales ops lead embedded in your team",
        "Weekly pipeline reviews and deal support",
        "Monthly forecasting and a clear read on the numbers",
        "Ongoing system and automation work",
        "New rep onboarding and training",
        "Direct Slack access and a weekly leadership call",
      ],
      cta: "Discuss a retainer",
    },
  ],

  /* ==========================================================================
     8. CASE STUDIES
     ====================================================================== */
  workHeading: "The work, and what it changes for you",
  workSubhead:
    "Filter by what you are dealing with. Every number here came from real work. Open any one to see how it was done.",

  caseStudies: [
    {
      id: "crewbloom-revops",
      company: "CrewBloom",
      role: "RevOps Manager, then GTM Operations Manager",
      period: "Nov 2024 to Jun 2026",
      // "industry" is the one shown on the card. Add "industries" to make a case
      // study appear under more than one filter.
      industry: "B2B SaaS",
      industries: ["B2B SaaS", "Staffing"],
      type: "RevOps",
      skills: ["CRM Architecture", "Pipeline Optimization", "Forecasting", "Salesforce"],
      headline: "Rebuilt sales operations around a 2,000 lead pipeline and cut time to close by 22%",
      thumbMetric: { value: "+30%", label: "leads turned into deals" },

      challenge:
        "Plenty of leads were coming in but very few were turning into deals, and leadership could not forecast with any confidence. Lead data sat in different tools, nobody agreed on who the right buyer was and reps were spending weeks on accounts that were never going to close.",

      approach: [
        "Went through the whole CRM and rebuilt the pipeline around how deals really progressed, not how the org chart looked",
        "Worked out who the best buyers actually were by studying deals already won, then sorted all 2,000 leads against that",
        "Automated outreach across Apollo, Clay, Lemlist and LinkedIn, with routing rules feeding straight into Salesforce",
        "Put tracking on every stage so conversion and speed became visible every week instead of every quarter",
        "Used that data to tighten qualification at each stage so reps spent time on deals that could close",
      ],

      beforeAfter: [
        { metric: "Leads turning into deals", before: "Starting point", after: "30% better", direction: "up" },
        { metric: "Time to close a deal", before: "Starting point", after: "22% faster", direction: "down" },
        { metric: "Deals closed", before: "Hard to predict", after: "25+ at $10K each", direction: "up" },
        { metric: "Forecasting", before: "Guesswork", after: "Something you can plan on", direction: "up" },
      ],

      results: [
        { value: "+30%", label: "More leads turned into deals" },
        { value: "22%", label: "Faster time to close" },
        { value: "25+", label: "Deals closed at $10K each" },
        { value: "2,000+", label: "Leads under management" },
      ],

      tools: ["Salesforce", "Apollo", "Clay", "Lemlist", "LinkedIn Sales Navigator"],
      testimonialId: "",
    },

    {
      id: "starwebtek-ae",
      company: "Starwebtek",
      role: "Account Executive",
      period: "Jun 2024 to Oct 2024",
      industry: "B2B SaaS",
      type: "Outbound GTM",
      skills: ["Outbound Prospecting", "Cold Email", "Discovery", "Social Selling"],
      headline: "Opened four regions with outbound and turned 18% more qualified leads into deals",
      thumbMetric: { value: "+18%", label: "qualified leads into deals" },

      challenge:
        "The company needed pipeline from the US, UK, EU and APAC but had no repeatable way of getting it and no standard for deciding who was worth a demo. Reps were running demos for people who were never going to buy.",

      approach: [
        "Built outbound sequences split by region and by what each buyer actually cared about",
        "Ran cold email tuned per market instead of sending one global template everywhere",
        "Brought in proper qualification so bad fit deals got filtered out early instead of late",
        "Added competitor comparisons into the sales conversation to make the difference obvious",
        "Rebuilt product walkthroughs so every feature shown mapped to a problem the buyer had said out loud",
        "Posted targeted LinkedIn content so accounts already knew the name before the first email",
      ],

      beforeAfter: [
        { metric: "Qualified leads becoming deals", before: "Starting point", after: "18% better", direction: "up" },
        { metric: "LinkedIn engagement", before: "Starting point", after: "150% growth", direction: "up" },
        { metric: "Markets covered", before: "Limited", after: "US, UK, EU and APAC", direction: "up" },
        { metric: "Deal size", before: "All over the place", after: "$5,000 and up", direction: "up" },
      ],

      results: [
        { value: "+18%", label: "More qualified leads became deals" },
        { value: "+150%", label: "LinkedIn engagement growth" },
        { value: "$5K+", label: "Average deal size" },
        { value: "4", label: "Regions opened" },
      ],

      tools: ["Apollo", "Lemlist", "LinkedIn Sales Navigator", "HubSpot"],
      testimonialId: "",
    },

    {
      id: "heritage-account-mgmt",
      company: "Emran's Heritage Home",
      role: "SDR, then Account Executive, then Account Manager",
      period: "Mar 2022 to May 2024",
      industry: "Hospitality",
      type: "Account Management",
      skills: ["Account Management", "Retention", "Upsell & Cross-sell", "Team Leadership"],
      headline: "Grew monthly profit 42% by turning 6,000 one off buyers into repeat customers",
      thumbMetric: { value: "+42%", label: "monthly profit" },

      challenge:
        "A big customer base was being treated as a pile of one off sales. Nobody was sorted into groups, nobody was followed up with and there was no real reason for anyone to come back a second time.",

      approach: [
        "Sorted 6,000 customers by what they spent and how they behaved to find where the real growth was hiding",
        "Built upsell and cross sell into the normal customer conversation instead of leaving it to chance",
        "Set up follow up rhythms that made coming back the default rather than the exception",
        "Led and coached a team of 6 through the shift from taking orders to managing accounts",
        "Ran targeted offers at specific groups instead of blasting the whole list",
      ],

      beforeAfter: [
        { metric: "Monthly profit", before: "Starting point", after: "42% higher", direction: "up" },
        { metric: "Customers buying again", before: "Starting point", after: "32% more", direction: "up" },
        { metric: "How customers were handled", before: "One off sales", after: "Managed accounts", direction: "up" },
        { metric: "Recurring revenue", before: "Not tracked", after: "$2,500+ monthly", direction: "up" },
      ],

      results: [
        { value: "+42%", label: "Monthly profit" },
        { value: "+32%", label: "More repeat customers" },
        { value: "6,000+", label: "Customers managed" },
        { value: "$2.5K+", label: "Monthly recurring revenue" },
      ],

      tools: ["Zoho", "Mailchimp", "Google Analytics"],
      testimonialId: "",
    },

    {
      id: "demand-gen-engine",
      company: "Multi market demand generation",
      role: "GTM & Growth",
      period: "Ongoing",
      industry: "Digital Services",
      type: "Demand Generation",
      skills: ["Demand Generation", "CAC Optimization", "Paid & Organic", "Analytics"],
      headline: "Built campaigns bringing in 1,000+ leads a month at under $50 each",
      thumbMetric: { value: "<$50", label: "cost per customer" },

      challenge:
        "Lead volume needed to grow across several markets without the cost per customer running away. Usually volume goes up and quality falls off a cliff. The job was to get one without the other.",

      approach: [
        "Built campaigns across several channels instead of betting everything on one source",
        "Tracked cost per customer by channel and by segment so spend could be moved every week",
        "Tightened targeting as volume grew so quality did not slide",
        "Kept testing and improving landing pages and forms to lift conversion",
        "Lined up the handoff so leads from marketing got followed up properly by sales",
      ],

      beforeAfter: [
        { metric: "Monthly leads", before: "Starting point", after: "1,000+ a month", direction: "up" },
        { metric: "Cost per customer", before: "Not controlled", after: "Under $50", direction: "down" },
        { metric: "Channel visibility", before: "One blended guess", after: "Cost tracked per channel", direction: "up" },
        { metric: "Markets served", before: "One", after: "US, UK, EU and APAC", direction: "up" },
      ],

      results: [
        { value: "1,000+", label: "Leads per month" },
        { value: "<$50", label: "Cost per customer" },
        { value: "4", label: "Markets covered" },
        { value: "Live", label: "Tracking across every channel" },
      ],

      tools: ["Google Analytics (GA4)", "Instantly", "Phantombuster", "n8n", "Tableau"],
      testimonialId: "",
    },
  ],

  /* ==========================================================================
     9. TESTIMONIALS
     ----------------------------------------------------------------------
     ⚠️ These are EMPTY TEMPLATES. No testimonial text has been written for
     you, because made up reviews are the fastest way to lose a serious buyer.

     Replace each one with the real words from your LinkedIn recommendation
     and from the colleagues you mentioned. Any entry that still contains the
     word PLACEHOLDER is hidden automatically, so you can publish safely
     before you have collected them all.
     ====================================================================== */
  testimonialsHeading: "You're not the first one to love me",
  testimonialsSubhead:
    "Words from the managers, colleagues and teammates who worked next to me.",

  testimonials: [
    {
      id: "t1",
      quote:
        "Affan has a keen eye for business and he's one of the sharpest minds I've come across when it comes to sales strategies & GTM Ops. Aside from being a highly skilled operator, he's also super professional & a true gentleman. A true delight to work with!",
      name: "Naimuzzaman Shuvo",
      title: "Lead Frontend Engineer",
      company: "Datatailr",
      relationship: "Worked together",
      rating: 5,
      // To add their photo: save it as assets/img/testimonials/naimuzzaman.jpg
      // and put "assets/img/testimonials/naimuzzaman.jpg" below. Until then the
      // site shows their initials, which looks intentional.
      avatar: "",
      linkedin: "https://www.linkedin.com/in/naimuzzaman-sh/",
    },
    {
      id: "t2",
      quote:
        "Affan is always one step ahead of most people when it comes to having an idea and then executing it. I had the privilege of witnessing it first hand at Text Only, a brand we co-founded as Sophomores in University. His never-say-never attitude is something to admire.",
      name: "Zahidul Islam Tamim",
      title: "Investment Analyst",
      company: "BRAC EPL Investments Ltd",
      relationship: "Co-founder, Text Only",
      rating: 5,
      avatar: "",
      linkedin: "https://www.linkedin.com/in/zahidul-islam-tamim-b62563162/",
    },
    {
      id: "t3",
      quote:
        "I've collaborated with Affan on FIFA content for Bangladesh, and he has always been extremely diligent and genuinely passionate about Bangladesh football. I would definitely recommend working with him.",
      name: "Pranay Khanna",
      title: "Client Services Manager",
      company: "Red Lantern",
      relationship: "Client side",
      rating: 5,
      avatar: "",
      linkedin: "https://www.linkedin.com/in/pranay-khanna-21a4a71b9/",
    },
  ],

  /* ==========================================================================
     10. PROCESS
     ====================================================================== */
  processHeading: "How an engagement actually runs",
  processSubhead:
    "No endless discovery and no surprise invoices. Four steps from first call to a system your team owns.",

  process: [
    {
      step: "01",
      name: "A free call",
      duration: "30 minutes",
      body:
        "We look at your funnel, your CRM and how you sell right now. You leave with at least two things worth fixing whether you hire me or not.",
    },
    {
      step: "02",
      name: "Scope and price",
      duration: "2 to 3 days",
      body:
        "I send you a written scope. Exactly what gets built, what you get, how long it takes and one fixed price. Nothing starts until you approve it.",
    },
    {
      step: "03",
      name: "Build",
      duration: "1 to 8 weeks",
      body:
        "I work inside your tools and send written updates every week. You watch it come together instead of waiting for one big reveal at the end.",
    },
    {
      step: "04",
      name: "Handover",
      duration: "Final week plus 30 days",
      body:
        "Written guides, recorded walkthroughs and live training for your team. Then 30 days of support so the system survives real life.",
    },
  ],

  /* ==========================================================================
     11. ABOUT
     ====================================================================== */
  about: {
    heading: "A little about me.",
    paragraphs: [
      "I started in sales. SDR, then closer, then account manager, long before I touched anything called RevOps. That order matters. I have sat in the seat where a badly built CRM costs you a deal, where a sloppy handoff lets a hot lead go cold and where a forecast built on hope gets pulled apart in front of leadership.",
      "So when I rebuild a revenue system I am not designing it to look good in a diagram. I am designing it for the rep who has eleven minutes between calls and needs the next step to be obvious.",
      "Over 4 years across B2B SaaS, fintech, DeFi, martech, staffing, digital services and hospitality I have built outbound engines, rebuilt CRMs and got sales, marketing and ops pulling in the same direction for teams selling into the US, UK, EU and APAC. The pattern is almost always the same. The strategy is fine. The system underneath it is not.",
    ],
    signature: "Let's find out what yours is doing.",

    education: {
      degree: "Bachelor of Business Administration",
      school: "Institute of Business Administration, Jahangirnagar University",
      period: "2022 to 2025",
    },

    // Industries. Shown as pills under "Industries I have worked in".
    industries: [
      "B2B SaaS",
      "Fintech",
      "DeFi",
      "MarTech",
      "Staffing",
      "Digital Services",
      "Hospitality",
    ],

    expertise: [
      "GTM Strategy",
      "GTM Engineering",
      "Revenue Operations",
      "Sales Operations",
      "CRM Architecture",
      "CRM Management",
      "CRM Cleanup & Hygiene",
      "Demand Generation",
      "Pipeline Optimization",
      "Funnel Optimization",
      "Outbound Prospecting",
      "ICP Targeting",
      "Market Segmentation",
      "B2B SaaS Sales",
      "Revenue Growth",
      "Customer Acquisition",
      "Conversion Optimization",
      "Sales Forecasting",
      "Cross Functional GTM Alignment",
      "Account Management",
      "Growth Management",
      "Fractional Sales Ops",
    ],

    tools: [
      "Salesforce", "HubSpot", "Apollo", "Clay", "Lemlist", "LinkedIn Sales Navigator",
      "Zoho", "Mailchimp", "Zapier", "Notion", "Google Analytics (GA4)", "Instantly",
      "Phantombuster", "n8n", "Tableau", "Claude Code", "Monday.com",
    ],
  },

  /* ==========================================================================
     12. ESTIMATE CALCULATOR
     ----------------------------------------------------------------------
     The maths: base price × company size × how fast you need it, plus any
     extras. The base prices match the services above. Keep them in sync.
     ====================================================================== */
  calculator: {
    heading: "Work out roughly what it costs",
    subhead:
      "A straight answer in under a minute. No email gate and no hiding the number until you hand over your details.",
    disclaimer:
      "This is a ballpark, not a quote. The real price is fixed and confirmed in writing after our first call.",

    services: [
      { id: "audit", label: "RevOps & CRM Audit", base: 1200 },
      { id: "crm", label: "CRM Architecture & Cleanup", base: 3000 },
      { id: "outbound", label: "Outbound GTM Engine", base: 4000 },
      { id: "strategy", label: "GTM Strategy Sprint", base: 2000 },
      { id: "retention", label: "Account Management & Retention", base: 2000 },
      { id: "fractional", label: "Fractional RevOps Lead (monthly)", base: 3000 },
    ],

    sizes: [
      { label: "1 to 10 people", mult: 0.85, note: "Early stage" },
      { label: "11 to 50 people", mult: 1.0, note: "Growing" },
      { label: "51 to 200 people", mult: 1.35, note: "Established" },
      { label: "200+ people", mult: 1.75, note: "Enterprise" },
    ],

    timelines: [
      { label: "Standard", mult: 1.0, note: "Normal delivery" },
      { label: "Faster", mult: 1.25, note: "About a third quicker" },
      { label: "Urgent", mult: 1.5, note: "Front of the queue, starts now" },
    ],

    addons: [
      { label: "Move everything to a new CRM", cost: 1800 },
      { label: "Clean and enrich a large database", cost: 900 },
      { label: "Custom dashboards and reporting", cost: 1200 },
      { label: "Email setup so messages land in the inbox", cost: 800 },
      { label: "Team training workshops", cost: 700 },
      { label: "Monthly support for the first 3 months", cost: 2400 },
    ],

    spread: 0.15,
  },

  /* ==========================================================================
     13. CONTACT
     ====================================================================== */
  contact: {
    heading: "Let's find out what is leaking",
    subhead:
      "Tell me what is going on and I will come back within one working day. Or skip the form and put 30 minutes straight into my calendar.",

    projectTypes: [
      "RevOps & CRM Audit",
      "CRM Architecture & Cleanup",
      "Outbound GTM Engine",
      "GTM Strategy Sprint",
      "Account Management & Retention",
      "Fractional RevOps Lead",
      "Not sure yet, let's talk",
    ],

    budgets: [
      "Under $2,000",
      "$2,000 to $5,000",
      "$5,000 to $10,000",
      "$10,000 to $25,000",
      "$25,000+",
      "Monthly retainer",
      "Not sure yet",
    ],

    timelines: [
      "Ready to start now",
      "Within the next month",
      "This quarter",
      "Just looking around",
    ],

    responsePromise: "Every message gets a real reply within one working day.",

    // When you are open for calls. Each string is shown on its own line inside
    // the day tile, so keep them short.
    availability: {
      weekdays: ["7–9am", "6–8pm"],
      weekends: ["9am–5pm"],
      timezoneNote:
        "All times GMT. Pick a day and my calendar shows the exact times in your own timezone.",
    },
  },

  /* ==========================================================================
     14. FAQ
     ====================================================================== */
  faqHeading: "Questions worth asking before you hire anyone",
  faqs: [
    {
      q: "Why not just hire someone full time?",
      a: "Speed and cost. Finding a good senior ops hire takes two to four months and costs six figures a year. I start within a week for a fraction of that, and I have already made the mistakes your first hire would make on your budget. When you do hire full time later, they inherit a working system and proper documentation instead of a mess.",
    },
    {
      q: "Do you actually build things, or just advise?",
      a: "I build. Give me a seat in Salesforce, HubSpot or Zoho and I do the setup, the cleanup, the automations and the dashboards myself. Advice without someone doing the work is just an expensive document nobody opens twice.",
    },
    {
      q: "What if we do not know what we need yet?",
      a: "That is the normal starting point and it is exactly what the free call is for. If it turns out you need something I do not do, I will tell you on the call instead of selling you a project.",
    },
    {
      q: "How do timezones work?",
      a: "I am on GMT+6, which lines up well with EU afternoons and US mornings. I have run revenue operations for teams across the US, UK, EU and APAC. Written updates are standard on every project, so progress never waits for a meeting.",
    },
    {
      q: "What happens when the project ends?",
      a: "You own all of it. The system, the documentation and the recorded walkthroughs. Every build includes 30 days of support afterwards, and training your team is part of the scope on purpose so you are not stuck depending on me.",
    },
    {
      q: "Can you work with the tools we already have?",
      a: "Almost certainly. I work daily in Salesforce, HubSpot, Zoho, Apollo, Clay, Lemlist, Instantly, n8n, Zapier and Tableau among others. If you are on something I have not touched, the thinking underneath does not change. Only the buttons do.",
    },
  ],

  /* ==========================================================================
     15. FINAL CTA + FOOTER
     ====================================================================== */
  finalCta: {
    heading: "Next quarter is already being decided by the system you have today.",
    body:
      "Thirty minutes, no pitch. We look at your funnel together and you leave knowing what is costing you deals, whether you hire me or not.",
    primary: "Book your free call",
    secondary: "Send a message instead",
  },

  footer: {
    tagline: "GTM and revenue operations help for B2B teams who are done guessing.",
    credit: "Built with intent.",
  },
};

// Make available to the app
window.CONTENT = CONTENT;

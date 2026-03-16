<script>
  import logo from './assets/book-open-svgrepo-com.svg';
  import OutlineButton from './lib/OutlineButton.svelte';
  import FeatureCard from './lib/FeatureCard.svelte';

  function trackCtaClick(name, location, destination) {
    if (typeof window === 'undefined') {
      return;
    }

    const gtag = window['gtag'];
    if (typeof gtag !== 'function') {
      return;
    }

    gtag('event', 'mkt_cta_click', {
      cta_name: name,
      cta_location: location,
      cta_destination: destination
    });
  }



  /** @typedef {{ type: 'text', value: string }} TextFragment */
  /** @typedef {{ type: 'strong', value: string }} StrongFragment */
  /** @typedef {{ type: 'link', href: string, label: string }} LinkFragment */
  /** @typedef {TextFragment | StrongFragment | LinkFragment} FaqFragment */

  /** @param {string} value
   *  @returns {TextFragment}
   */
  const text = (value) => ({ type: 'text', value });

  /** @param {string} value
   *  @returns {StrongFragment}
   */
  const strong = (value) => ({ type: 'strong', value });

  /** @param {string} href
   *  @param {string} label
   *  @returns {LinkFragment}
   */
  const link = (href, label) => ({ type: 'link', href, label });

  const comparisonRows = [
    {
      name: 'Ward Program',
      link: null,
      isPrivate: true,
      hasQr: true,
      noApp: true,
      cost: 'Free for ward members — $2.99/mo for editing access with a 30 day free trial.',
      notes: 'Private sharing with built-in QR code and simple weekly editing.',
      featured: true
    },
    {
      name: 'WardBullet',
      link: 'https://www.wardbullet.com/',
      isPrivate: false,
      hasQr: true,
      noApp: false,
      cost: 'Free',
      notes: 'Ward data listed in a searchable public directory.',
      featured: false
    },
    {
      name: 'Ward Bulletin App',
      link: 'https://wardbulletin.app/home',
      isPrivate: false,
      hasQr: false,
      noApp: true,
      cost: 'Free',
      notes: 'Ward data listed in a searchable public directory; no built-in QR code.',
      featured: false
    },
    {
      name: 'Canva',
      link: null,
      isPrivate: null,
      hasQr: false,
      noApp: true,
      cost: 'Free–$15/mo',
      notes: 'General design tool; requires manual weekly setup and sharing.',
      featured: false
    },
    {
      name: 'Google Docs',
      link: null,
      isPrivate: null,
      hasQr: false,
      noApp: true,
      cost: 'Free',
      notes: 'Manual document workflow; no built-in QR code automation.',
      featured: false
    }
  ];

  const faqItems = [
    {
      question: 'What is Ward Program?',
      answer: [
        [
          text(
            'Ward Program is a privacy-first digital tool for creating and sharing weekly sacrament meeting programs for LDS wards and congregations. It gives your ward a clean, simple sacrament meeting program that members access via QR code or a private link — with none of your congregation data ever made public.'
          )
        ]
      ],
      open: true
    },
    {
      question: 'How is Ward Program different from WardBullet or Ward Bulletin App?',
      answer: [
        [
          text('The key difference is '),
          strong('privacy-first design'),
          text(
            '. Ward Program keeps your sacrament meeting program accessible through your private URL and custom QR code, rather than through a public listing. If you are evaluating alternatives, review each tool\'s directory visibility and searchability policies. Ward Program also requires no app download and works directly in any mobile browser.'
          )
        ]
      ],
      open: false
    },
    {
      question: 'How much does Ward Program cost?',
      answer: [
        [
          text(
            'Ward Program is free for ward members to view. Editing and publishing access for the ward costs $2.99 per month. This includes unlimited program editing, QR code generation, and private sharing. There are no hidden fees, no per-member charges, and no upsells.'
          )
        ]
      ],
      open: false
    },
    {
      question: 'Can I sponsor this for my ward?',
      answer: [
        [
          text(
            'Absolutely. Many wards do exactly that. Editing and publishing access is just $2.99 per month for the ward, while everyone can view the program for free with no login required. One person can sponsor it for the entire ward. Once you create the account, you can invite others to help edit, and only one paid subscription is needed.'
          )
        ]
      ],
      open: false
    },
    {
      question: 'Do members need to download an app?',
      answer: [
        [
          text(
            "No. Members simply scan the QR code displayed in your church building (or tap a shared link) to view the program in their phone's browser. They can also add it to their home screen for instant access each Sunday — no app store download required."
          )
        ]
      ],
      open: false
    },
    {
      question: 'Is my ward\'s information private and secure?',
      answer: [
        [
          text(
            "Yes. Ward Program does not publish your ward's data in a public directory. Your weekly sacrament meeting program is shared through your private URL and custom QR code, so it is not publicly discoverable by default. Traffic is encrypted in transit over HTTPS. Ward Program was built to give wards a safer alternative to publicly listed bulletin tools."
          )
        ]
      ],
      open: false
    },
    {
      question: 'How do I get started?',
      answer: [
        [
          text('Getting started usually takes 3 to 5 minutes. Visit the '),
          link('https://app.wardprogram.com/sign-up', 'sign-up page'),
          text(' to create your account, then use the editor to build your first sacrament meeting program. You can also '),
          link('https://app.wardprogram.com/demo/editor', 'try the editor demo'),
          text(' to see how it works before signing up.')
        ]
      ],
      open: false
    },
    {
      question: "Why isn't it free?",
      answer: [
        [
          text(
            "Ward Program requires servers, databases, and infrastructure that cost real money to run, and those costs grow with every ward that signs up. Rather than covering those expenses with ads, selling your data, or making your ward's information publicly searchable, Ward Program charges a straightforward "
          ),
          strong('$2.99 per month'),
          text(
            ". That keeps the lights on, ensures your data stays completely private, and allows continued development of new features. It's a small cost that a single member, the bishopric, or the ward council can easily cover — and it means Ward Program answers to your ward, not to advertisers."
          )
        ]
      ],
      open: false
    }
  ];
</script>

<div class="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-50">

  <!-- ── Top Banner ── -->
  <div class="bg-blue-950 text-white">
    <div class="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2.5 text-center text-sm tracking-wide">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 opacity-70"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      <span class="opacity-90">Privacy-first sacrament meeting programs — <strong class="font-semibold">$2.99/mo</strong> for your entire ward</span>
    </div>
  </div>

  <!-- ── Navigation ── -->
  <nav class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
      <a href="/" class="flex items-center gap-2.5 no-underline">
        <img src={logo} alt="Ward Program logo" class="block h-7 w-7" />
        <span class="text-lg font-semibold tracking-tight text-blue-950">Ward Program</span>
      </a>
      <div class="flex items-center gap-3">
        <a href="https://app.wardprogram.com/demo/program" rel="noopener noreferrer" class="hidden text-sm font-medium text-slate-600 no-underline transition-colors hover:text-blue-950 md:inline">View Demo</a>
        <OutlineButton
          href="https://app.wardprogram.com/login"
          text="Admin Login"
          size="sm"
          onClick={() => trackCtaClick('admin_login', 'nav', 'https://app.wardprogram.com/login')}
        />
      </div>
    </div>
  </nav>

  <main class="flex w-full flex-col text-slate-900">

    <!-- ── Hero ── -->
    <section class="px-4 pb-16 pt-16 md:px-8 md:pb-20 md:pt-20 lg:pb-24 lg:pt-24">
      <div class="mx-auto max-w-3xl text-center">
        <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
          Trusted by 50+ wards
        </div>
        <h1 class="mb-6 text-4xl font-bold leading-tight tracking-tight text-blue-950 md:text-5xl lg:text-6xl">The private sacrament meeting program your ward deserves</h1>
        <p class="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">Create, share, and manage your ward's weekly sacrament meeting program with complete privacy. No public listings. No app download required.</p>
        <div class="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <OutlineButton
            href="https://app.wardprogram.com/sign-up"
            text="Start Free Trial - No Card Required"
            variant="primary"
            size="lg"
            onClick={() => trackCtaClick('start_free_trial', 'hero', 'https://app.wardprogram.com/sign-up')}
          />
          <OutlineButton
            href="https://app.wardprogram.com/demo/program"
            rel="noopener noreferrer"
            text="View Program Demo"
            variant="outline"
            size="lg"
            onClick={() => trackCtaClick('view_program_demo', 'hero', 'https://app.wardprogram.com/demo/program')}
          />
        </div>
        <p class="mt-4 text-sm font-medium text-teal-700">No credit card required for your free 30-day trial.</p>
      </div>
    </section>

    <!-- ── Trust Strip ── -->
    <section class="border-y border-slate-200 bg-slate-50/80 px-4 py-5">
      <div class="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-slate-600">
        <span class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal-600"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          Private by default
        </span>
        <span class="hidden h-4 w-px bg-slate-300 sm:block" aria-hidden="true"></span>
        <span class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal-600"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
          Scan and view - no download
        </span>
        <span class="hidden h-4 w-px bg-slate-300 sm:block" aria-hidden="true"></span>
        <span class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal-600"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Ready in 3 to 5 minutes
        </span>
      </div>
    </section>

    <!-- ── Features ── -->
    <section class="px-4 py-16 md:px-8 md:py-20 lg:py-24">
      <div class="mx-auto max-w-6xl">
        <div class="mb-12 text-center">
          <h2 class="mb-3 text-3xl font-bold tracking-tight text-blue-950 md:text-4xl">Everything your ward needs</h2>
          <p class="mx-auto max-w-2xl text-base text-slate-600 md:text-lg">Simple tools built specifically for sacrament meeting programs — nothing more, nothing less.</p>
        </div>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          <FeatureCard
            title="Private and secure"
            body="Your congregation information is not publicly listed or searchable by default. Share access with your private link and QR code."
          >
            {#snippet icon()}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            {/snippet}
          </FeatureCard>
          <FeatureCard
            title="QR code sharing"
            body="Generate a custom QR code for your church building. Members scan and view — no account, no app download, no friction."
          >
            {#snippet icon()}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/><path d="M14 14h2v2h-2z"/><path d="M20 14h2v2h-2z"/><path d="M14 20h2v2h-2z"/><path d="M20 20h2v2h-2z"/><path d="M17 17h2v2h-2z"/></svg>
            {/snippet}
          </FeatureCard>
          <FeatureCard
            title="Works on any phone"
            body="Members get instant access in any mobile browser. They can save it to their home screen for each Sunday."
          >
            {#snippet icon()}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
            {/snippet}
          </FeatureCard>
        </div>
      </div>
    </section>

    <!-- ── Comparison Table ── -->
    <section class="bg-slate-50/80 px-4 py-16 md:px-8 md:py-20 lg:py-24">
      <div class="mx-auto max-w-5xl">
        <div class="mb-10 text-center">
          <h2 class="mb-3 text-3xl font-bold tracking-tight text-blue-950 md:text-4xl">Compare your options</h2>
          <p class="mx-auto max-w-2xl text-base text-slate-600 md:text-lg">See how Ward Program stacks up on privacy, features, and cost.</p>
        </div>

        <!-- Mobile: Comparison cards -->
        <div class="grid grid-cols-1 gap-4 md:hidden">
          {#each comparisonRows as row}
            <article class={`rounded-xl border p-5 ${row.featured ? 'border-teal-300 bg-teal-50/60 shadow-sm ring-1 ring-teal-200' : 'border-slate-200 bg-white'}`}>
              <div class="mb-4 flex items-center gap-2.5">
                {#if row.link}
                  <a href={row.link} rel="noopener noreferrer" class="text-base font-medium text-slate-800 underline decoration-slate-300 underline-offset-2 transition-colors hover:text-blue-900">{row.name}</a>
                {:else}
                  <h3 class={`m-0 text-base ${row.featured ? 'font-bold text-blue-950' : 'font-medium text-slate-900'}`}>{row.name}</h3>
                {/if}
                {#if row.featured}
                  <span class="rounded-full bg-teal-600 px-2.5 py-0.5 text-xs font-semibold text-white">Recommended</span>
                {/if}
              </div>
              <div class="mb-3 grid grid-cols-2 gap-3">
                <div class="flex items-center gap-2 text-sm">
                  {#if row.isPrivate === true}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-teal-600"><path d="M20 6 9 17l-5-5"/></svg>
                    <span class="text-slate-700">Private</span>
                  {:else if row.isPrivate === false}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-rose-500"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    <span class="text-slate-700">Not private</span>
                  {:else}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-amber-500"><path d="M5 12h14"/></svg>
                    <span class="text-slate-500">Varies</span>
                  {/if}
                </div>
                <div class="flex items-center gap-2 text-sm">
                  {#if row.hasQr}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-teal-600"><path d="M20 6 9 17l-5-5"/></svg>
                    <span class="text-slate-700">QR built-in</span>
                  {:else}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-rose-500"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    <span class="text-slate-700">No QR</span>
                  {/if}
                </div>
                <div class="flex items-center gap-2 text-sm">
                  {#if row.noApp}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-teal-600"><path d="M20 6 9 17l-5-5"/></svg>
                    <span class="text-slate-700">No app needed</span>
                  {:else}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-rose-500"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    <span class="text-slate-700">App required</span>
                  {/if}
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <span class="font-semibold text-slate-800">{row.cost}</span>
                </div>
              </div>
              <p class="m-0 text-sm leading-relaxed text-slate-500">{row.notes}</p>
            </article>
          {/each}
        </div>

        <!-- Desktop: Clean table -->
        <div class="hidden overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm md:block">
          <table class="w-full border-collapse text-left text-sm">
            <thead>
              <tr class="border-b border-slate-200 bg-slate-50">
                <th class="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Solution</th>
                <th class="px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">Private</th>
                <th class="px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">QR Code</th>
                <th class="px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">No App</th>
                <th class="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Cost</th>
                <th class="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Notes</th>
              </tr>
            </thead>
            <tbody>
              {#each comparisonRows as row, i}
                <tr class={`${i < comparisonRows.length - 1 ? 'border-b border-slate-100' : ''} ${row.featured ? 'bg-teal-50/50' : 'bg-white hover:bg-slate-50/50'} transition-colors`}>
                  <td class="px-5 py-4">
                    <div class="flex items-center gap-2.5">
                      {#if row.featured}
                        <span class="font-semibold text-blue-950">{row.name}</span>
                        <span class="rounded-full bg-teal-600 px-2 py-0.5 text-xs font-semibold text-white">Recommended</span>
                      {:else if row.link}
                        <a href={row.link} rel="noopener noreferrer" class="text-slate-700 underline decoration-slate-300 underline-offset-2 transition-colors hover:text-blue-900">{row.name}</a>
                      {:else}
                        <span class="text-slate-700">{row.name}</span>
                      {/if}
                    </div>
                  </td>
                  <td class="px-5 py-4 text-center">
                    {#if row.isPrivate === true}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto text-teal-600"><path d="M20 6 9 17l-5-5"/></svg>
                    {:else if row.isPrivate === false}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto text-rose-500"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    {:else}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto text-amber-500"><path d="M5 12h14"/></svg>
                    {/if}
                  </td>
                  <td class="px-5 py-4 text-center">
                    {#if row.hasQr}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto text-teal-600"><path d="M20 6 9 17l-5-5"/></svg>
                    {:else}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto text-rose-500"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    {/if}
                  </td>
                  <td class="px-5 py-4 text-center">
                    {#if row.noApp}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto text-teal-600"><path d="M20 6 9 17l-5-5"/></svg>
                    {:else}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto text-rose-500"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    {/if}
                  </td>
                  <td class="px-5 py-4">
                    <span class={row.featured ? 'font-semibold text-blue-950' : 'text-slate-700'}>{row.cost}</span>
                  </td>
                  <td class="px-5 py-4 text-slate-500">{row.notes}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ── How It Works ── -->
    <section class="px-4 py-16 md:px-8 md:py-20 lg:py-24">
      <div class="mx-auto max-w-4xl">
        <div class="mb-12 text-center">
          <h2 class="mb-3 text-3xl font-bold tracking-tight text-blue-950 md:text-4xl">Create your first program in 3 to 5 minutes</h2>
          <p class="mx-auto max-w-2xl text-base text-slate-600 md:text-lg">Three simple steps to a digital sacrament meeting program.</p>
        </div>
        <div class="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <div class="flex flex-col items-center text-center md:items-center">
            <div class="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-blue-950 text-lg font-bold text-white">1</div>
            <h3 class="mb-2 text-lg font-semibold text-blue-950">Create your program</h3>
            <p class="m-0 text-sm leading-relaxed text-slate-600">Log in to the editor and add your sacrament meeting details — speakers, hymns, announcements, and more.</p>
          </div>
          <div class="flex flex-col items-center text-center md:items-center">
            <div class="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-blue-950 text-lg font-bold text-white">2</div>
            <h3 class="mb-2 text-lg font-semibold text-blue-950">Share with your ward</h3>
            <p class="m-0 text-sm leading-relaxed text-slate-600">Print the generated QR code and display it in your church building, or share the private link directly.</p>
          </div>
          <div class="flex flex-col items-center text-center md:items-center">
            <div class="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-blue-950 text-lg font-bold text-white">3</div>
            <h3 class="mb-2 text-lg font-semibold text-blue-950">Members view on their phones</h3>
            <p class="m-0 text-sm leading-relaxed text-slate-600">Members scan the QR code — no app download needed. Save to home screen for instant access each week.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA Section ── -->
    <section class="bg-blue-950 px-4 py-16 md:px-8 md:py-20">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Make Sunday morning simpler for your ward</h2>
        <p class="mx-auto mb-8 max-w-xl text-lg text-blue-200">Join 50+ wards using a private, simple way to share each sacrament meeting program.</p>
        <p class="mt-2 mb-12 text-center text-sm text-blue-200">Free 30-day trial with no credit card required. Then $2.99/month to continue.</p>
        <div class="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <OutlineButton
            href="https://app.wardprogram.com/sign-up"
            text="Start Free Trial - No Card Required"
            variant="primary"
            size="lg"
            onClick={() => trackCtaClick('start_free_trial', 'bottom_cta', 'https://app.wardprogram.com/sign-up')}
          />
          <OutlineButton
            href="https://app.wardprogram.com/demo/editor"
            rel="noopener noreferrer"
            text="See Editor Demo"
            variant="outline-white"
            size="lg"
            onClick={() => trackCtaClick('see_editor_demo', 'bottom_cta', 'https://app.wardprogram.com/demo/editor')}
          />
        </div>
      </div>
    </section>

    <!-- ── FAQ ── -->
    <section class="px-4 py-16 md:px-8 md:py-20 lg:py-24">
      <div class="mx-auto max-w-3xl">
        <div class="mb-10 text-center">
          <h2 class="mb-3 text-3xl font-bold tracking-tight text-blue-950 md:text-4xl">Frequently asked questions</h2>
          <p class="mx-auto max-w-xl text-base text-slate-600 md:text-lg">Everything you need to know about Ward Program.</p>
        </div>
        <div class="space-y-3">
          {#each faqItems as item}
            <details class="group rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-sm" open={item.open}>
              <summary class="flex cursor-pointer items-center justify-between px-5 py-4 md:px-6 md:py-5">
                <h3 class="m-0 text-base font-semibold text-blue-950 md:text-lg">{item.question}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="faq-chevron shrink-0 text-slate-400"><path d="m6 9 6 6 6-6"/></svg>
              </summary>
              <div class="space-y-3 px-5 pb-5 md:px-6 md:pb-6">
                {#each item.answer as paragraph}
                  <p class="m-0 text-base leading-relaxed text-slate-600">
                    {#each paragraph as fragment}
                      {#if fragment.type === 'strong'}
                        <strong>{fragment.value}</strong>
                      {:else if fragment.type === 'link'}
                        <a
                          href={fragment.href}
                          class="font-medium text-teal-600 underline underline-offset-2 hover:text-teal-800"
                        >{fragment.label}</a>
                      {:else}
                        {fragment.value}
                      {/if}
                    {/each}
                  </p>
                {/each}
              </div>
            </details>
          {/each}
        </div>
      </div>
    </section>

    <!-- ── Footer ── -->
    <footer class="border-t border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500">
      <p class="m-0">Ward Program. All rights reserved. &copy; {new Date().getFullYear()}</p>
      <p class="m-0 mt-1">Not an official website of <span class="italic">The Church of Jesus Christ of Latter-day Saints</span>.</p>
    </footer>
  </main>
</div>

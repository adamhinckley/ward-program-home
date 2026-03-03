<script>
  import logo from './assets/book-open-svgrepo-com.svg';
  import OutlineButton from './lib/OutlineButton.svelte';
  import FeatureCard from './lib/FeatureCard.svelte';

  const comparisonRows = [
    {
      name: 'Ward Program',
      link: null,
      visibility: "Yes — your data is never made public. It's only accessible via your private URL and custom QR code.",
      cost: '$3 per month for your entire ward',
      qrCode: 'Yes',
      appDownload: 'No — easily added to home screen',
      convenience: '★★★★★',
      notes: 'Private and not searchable. Clean interface and easy to use.',
      featured: true
    },
    {
      name: 'WardBullet',
      link: 'https://www.wardbullet.com/',
      visibility: 'No — anyone can look up your ward and find private information.',
      cost: 'Free',
      qrCode: 'Yes',
      appDownload: 'Yes',
      convenience: '★★★★',
      notes: 'Simple and free, but searchable data can lead to doxing.',
      featured: false
    },
    {
      name: 'Ward Bulletin App',
      link: 'https://wardbulletin.app/home',
      visibility: 'No — anyone can look up your ward and find private information.',
      cost: 'Free',
      qrCode: 'Not built in (managed separately)',
      appDownload: 'No',
      convenience: '★★★',
      notes: 'Good solution overall, but searchable ward data can lead to doxing.',
      featured: false
    },
    {
      name: 'Canva',
      link: null,
      visibility: 'No public lookup (shared links or exported PDF access only).',
      cost: 'Free or $15/month for Pro',
      qrCode: 'Not built in (managed separately)',
      appDownload: 'No',
      convenience: '★★★',
      notes: 'Excellent templates, but setup and sharing management take more effort.  Lacks options without a pro subscription.',
      featured: false
    },
    {
      name: 'Google Docs',
      link: null,
      visibility: 'No public lookup (you manage shared links).',
      cost: 'Free',
      qrCode: 'Not built in (managed separately)',
      appDownload: 'No',
      convenience: '★★★',
      notes: 'Works well for documents, but more manual than purpose-built tools.',
      featured: false
    }
  ];
</script>

<div class="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-100">
  <main class="flex min-h-screen w-full max-w-full flex-col px-4 py-8 text-slate-900 md:px-8 md:py-12 lg:mx-auto lg:max-w-300 lg:px-12 lg:py-16">
    <header class="flex justify-end">
      <OutlineButton href="https://app.wardprogram.com/login" text="Admin Login" />
    </header>
    <section class="mb-12 mt-6 rounded-3xl border border-slate-200 bg-white/80 px-4 py-12 text-center backdrop-blur-sm md:mb-16 md:px-8 md:py-16 lg:mb-20 lg:px-8 lg:py-20">
      <div class="mb-4 flex items-center justify-center gap-3">
        <img src={logo} alt="Ward Program logo — private sacrament meeting program manager" class="block h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
        <span class="text-2xl font-normal tracking-[0.05em] text-slate-900 md:text-[1.75rem] lg:text-[2rem]">Ward Program</span>
      </div>
      <h1 class="mb-4 text-[2.5rem] leading-[1.2] font-light tracking-[0.05em] text-slate-900 md:text-[4rem] lg:text-[5rem]">plain like paper</h1>
      <p class="m-0 text-base font-normal text-slate-600 md:text-lg lg:text-xl">A private, simple sacrament meeting program for your ward.</p>
      <p class="m-0 mt-2 text-lg font-normal text-slate-500 md:text-xl lg:text-2xl">No need to be complicated.</p>
    </section>

    <section class="mb-12 grid grid-cols-1 gap-12 md:mb-16 md:grid-cols-3 md:gap-10 lg:gap-12">
      <FeatureCard
        title="Edit your weekly sacrament meeting program"
        body="Create and manage your LDS ward's weekly program in minutes. Simple, straightforward, and designed specifically for sacrament meeting programs."
      />

      <FeatureCard
        title="Private and secure — your data stays hidden"
        body="Unlike WardBullet and Ward Bulletin App, your congregation information is never made public or searchable. No one can look up your ward's details."
      />

      <FeatureCard
        title="QR code for your church building"
        body="Generate a custom QR code to display in your church building. Members scan it to access the program on their phones — no app download needed."
      />
    </section>

    <section class="mb-12 md:mb-16">
      <div class="mb-6 text-center">
        <h2 class="mb-2 text-3xl font-light tracking-[0.04em] text-slate-900 md:text-4xl">Compare Your Options</h2>
        <p class="m-0 text-base text-slate-600 md:text-lg">A side-by-side look at privacy, convenience, and cost.</p>
      </div>

      <div class="grid grid-cols-1 gap-4 md:hidden">
        {#each comparisonRows as row}
          <article class={`rounded-2xl border p-4 shadow-sm ${row.featured ? 'border-indigo-200 bg-indigo-50/70' : 'border-slate-200 bg-white'}`}>
            <div class="mb-3 flex items-center gap-2">
              {#if row.link}
                <a href={row.link} rel="noopener noreferrer" class="text-base text-slate-800 underline decoration-slate-400 underline-offset-2 transition-colors hover:text-indigo-700">{row.name}</a>
              {:else}
                <h3 class={`m-0 text-base ${row.featured ? 'font-semibold tracking-[0.02em] text-indigo-800' : 'font-medium text-slate-900'}`}>{row.name}</h3>
              {/if}
              {#if row.featured}
                <span class="rounded-full border border-indigo-200 bg-indigo-100 px-2 py-0.5 text-xs tracking-[0.04em] text-indigo-700">Best for privacy</span>
              {/if}
            </div>

            <dl class="m-0 grid grid-cols-1 gap-2 text-sm">
              <div>
                <dt class="text-xs tracking-[0.04em] text-slate-500 uppercase">Is it private?</dt>
                <dd class="m-0 text-slate-700">{row.visibility}</dd>
              </div>
              <div>
                <dt class="text-xs tracking-[0.04em] text-slate-500 uppercase">Cost</dt>
                <dd class="m-0 text-slate-700">{row.cost}</dd>
              </div>
              <div>
                <dt class="text-xs tracking-[0.04em] text-slate-500 uppercase">QR Code</dt>
                <dd class="m-0 text-slate-700">{row.qrCode}</dd>
              </div>
              <div>
                <dt class="text-xs tracking-[0.04em] text-slate-500 uppercase">Requires App Download</dt>
                <dd class="m-0 text-slate-700">{row.appDownload}</dd>
              </div>
              <div>
                <dt class="text-xs tracking-[0.04em] text-slate-500 uppercase">Convenience</dt>
                <dd class="m-0 text-amber-600">{row.convenience}</dd>
              </div>
              <div>
                <dt class="text-xs tracking-[0.04em] text-slate-500 uppercase">Details</dt>
                <dd class="m-0 text-slate-700">{row.notes}</dd>
              </div>
            </dl>
          </article>
        {/each}
      </div>

      <div class="hidden overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:block">
        <table class="w-full min-w-262.5 border-collapse text-left">
          <thead>
            <tr class="border-b border-slate-200 bg-slate-50 text-sm tracking-[0.03em] text-slate-700 md:text-base">
              <th class="px-4 py-3 font-normal">Solution</th>
              <th class="px-4 py-3 font-normal">Is it private?</th>
              <th class="px-4 py-3 font-normal">Cost</th>
              <th class="px-4 py-3 font-normal">QR Code</th>
              <th class="px-4 py-3 font-normal">Requires App Download</th>
              <th class="px-4 py-3 font-normal">Convenience</th>
              <th class="px-4 py-3 font-normal">Details</th>
            </tr>
          </thead>
          <tbody>
            {#each comparisonRows as row}
              <tr class={`border-b border-slate-200 align-top ${row.featured ? 'bg-indigo-50/70' : 'bg-white'}`}>
                <td class="px-4 py-4 text-sm md:text-base">
                  <div class="flex items-center gap-2">
                    {#if row.link}
                      <a href={row.link} rel="noopener noreferrer" class="text-slate-800 underline decoration-slate-400 underline-offset-2 transition-colors hover:text-indigo-700">{row.name}</a>
                    {:else}
                      <span class={row.featured ? 'font-semibold tracking-[0.02em] text-indigo-800' : 'text-slate-900'}>{row.name}</span>
                    {/if}
                    {#if row.featured}
                      <span class="rounded-full text-center border border-indigo-200 bg-indigo-100 px-2 py-0.5 text-xs tracking-[0.04em] text-indigo-700">Best for privacy</span>
                    {/if}
                  </div>
                </td>
                <td class="px-4 py-4 text-sm leading-normal text-slate-700 md:text-base">{row.visibility}</td>
                <td class="px-4 py-4 text-sm text-slate-700 md:text-base">{row.cost}</td>
                <td class="px-4 py-4 text-sm text-slate-700 md:text-base">{row.qrCode}</td>
                <td class="px-4 py-4 text-sm leading-normal text-slate-700 md:text-base">{row.appDownload}</td>
                <td class="px-4 py-4 text-sm text-amber-600 md:text-base">{row.convenience}</td>
                <td class="px-4 py-4 text-sm leading-normal text-slate-700 md:text-base">{row.notes}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </section>

    <section class="px-4 py-8 text-center">
      <div class="mb-8 flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-6">
        <OutlineButton href="https://app.wardprogram.com/demo/program" rel="noopener noreferrer" text="View Program Demo" />
        <OutlineButton href="https://app.wardprogram.com/demo/editor" rel="noopener noreferrer" text="View Editor Demo" />
      </div>
    </section>

    <section class="mb-12 md:mb-16">
      <div class="mb-8 text-center">
        <h2 class="mb-2 text-3xl font-light tracking-[0.04em] text-slate-900 md:text-4xl">How It Works</h2>
        <p class="m-0 text-base text-slate-600 md:text-lg">Get your ward's digital sacrament meeting program up and running in minutes.</p>
      </div>
      <div class="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        <div class="text-center">
          <div class="mb-3 text-3xl">1</div>
          <h3 class="mb-2 text-lg font-medium text-slate-900">Create your program</h3>
          <p class="m-0 text-sm text-slate-600">Log in to the editor and add your sacrament meeting details — speakers, hymns, announcements, and more.</p>
        </div>
        <div class="text-center">
          <div class="mb-3 text-3xl">2</div>
          <h3 class="mb-2 text-lg font-medium text-slate-900">Share with your ward</h3>
          <p class="m-0 text-sm text-slate-600">Print the generated QR code and display it in your church building, or share the private link directly.</p>
        </div>
        <div class="text-center">
          <div class="mb-3 text-3xl">3</div>
          <h3 class="mb-2 text-lg font-medium text-slate-900">Members view on their phones</h3>
          <p class="m-0 text-sm text-slate-600">Members scan the QR code — no app download needed. They can save it to their home screen for instant access each week.</p>
        </div>
      </div>
    </section>

    <section class="mb-12 md:mb-16">
      <div class="mb-8 text-center">
        <h2 class="mb-2 text-3xl font-light tracking-[0.04em] text-slate-900 md:text-4xl">Frequently Asked Questions</h2>
        <p class="m-0 text-base text-slate-600 md:text-lg">Everything you need to know about Ward Program.</p>
      </div>
      <div class="mx-auto max-w-3xl space-y-6">
        <details class="group rounded-2xl border border-slate-200 bg-white p-4 md:p-6" open>
          <summary class="cursor-pointer text-lg font-medium text-slate-900 md:text-xl">What is Ward Program?</summary>
          <p class="mt-3 text-base leading-relaxed text-slate-600">Ward Program is a privacy-first digital tool for creating and sharing weekly sacrament meeting programs for LDS wards and congregations. It gives your ward a clean, simple digital program that members access via QR code or a private link — with none of your congregation data ever made public.</p>
        </details>
        <details class="group rounded-2xl border border-slate-200 bg-white p-4 md:p-6">
          <summary class="cursor-pointer text-lg font-medium text-slate-900 md:text-xl">How is Ward Program different from WardBullet or Ward Bulletin App?</summary>
          <p class="mt-3 text-base leading-relaxed text-slate-600">The key difference is <strong>privacy</strong>. Both WardBullet and Ward Bulletin App publish ward information in searchable public directories — meaning anyone can look up your congregation and find details about members, speakers, and meetings. Ward Program never makes your data public. Your program is only accessible through a private URL and your custom QR code. Additionally, Ward Program requires no app download — it works directly in any mobile browser.</p>
        </details>
        <details class="group rounded-2xl border border-slate-200 bg-white p-4 md:p-6">
          <summary class="cursor-pointer text-lg font-medium text-slate-900 md:text-xl">How much does Ward Program cost?</summary>
          <p class="mt-3 text-base leading-relaxed text-slate-600">Ward Program costs <strong>$3 per month</strong> for your entire ward. This includes unlimited program editing, QR code generation, and private sharing for your entire ward. There are no hidden fees, no per-member charges, and no upsells.</p>
        </details>
          <details class="group rounded-2xl border border-slate-200 bg-white p-4 md:p-6">
          <summary class="cursor-pointer text-lg font-medium text-slate-900 md:text-xl">Can I sponsor this for my ward?</summary>
          <p class="mt-3 text-base leading-relaxed text-slate-600">Yes! You can sponsor Ward Program for your entire ward, covering the $3 per month cost. This ensures all members have access to the program without any individual charges.  The best way to do this is create an email address for your ward and sign up using that.  Then give access to that emaill address to the brother or sister in charge of managing program.</p>
        </details>
        <details class="group rounded-2xl border border-slate-200 bg-white p-4 md:p-6">
          <summary class="cursor-pointer text-lg font-medium text-slate-900 md:text-xl">Do members need to download an app?</summary>
          <p class="mt-3 text-base leading-relaxed text-slate-600">No. Members simply scan the QR code displayed in your church building (or tap a shared link) to view the program in their phone's browser. They can also add it to their home screen for instant access each Sunday — no app store download required.</p>
        </details>
        <details class="group rounded-2xl border border-slate-200 bg-white p-4 md:p-6">
          <summary class="cursor-pointer text-lg font-medium text-slate-900 md:text-xl">Is my ward's information private and secure?</summary>
          <p class="mt-3 text-base leading-relaxed text-slate-600">Yes. Ward Program never publishes your ward's data in any public directory. Your weekly program is only accessible via your private URL and custom QR code. No one outside your congregation can search for or discover your ward's information. This is the core reason Ward Program exists — to give wards a safe, private alternative to publicly-searchable bulletin tools.</p>
        </details>
        <details class="group rounded-2xl border border-slate-200 bg-white p-4 md:p-6">
          <summary class="cursor-pointer text-lg font-medium text-slate-900 md:text-xl">How do I get started?</summary>
          <p class="mt-3 text-base leading-relaxed text-slate-600">Getting started takes just a few minutes. Visit the <a href="https://app.wardprogram.com/login" class="text-indigo-600 underline underline-offset-2 hover:text-indigo-800">admin login</a> to create your account, then use the editor to build your first program. You can also <a href="https://app.wardprogram.com/demo/editor" class="text-indigo-600 underline underline-offset-2 hover:text-indigo-800">try the editor demo</a> to see how it works before signing up.</p>
        </details>
      </div>
    </section>

    <footer class="text-center text-slate-600">
      <p>This website is maintained by Ward Program. All rights reserved. &copy; {new Date().getFullYear()}</p>
      <p>Not an official website of <span class="italic">The Church of Jesus Christ of Latter-day Saints</span>.</p>
    </footer>
  </main>
</div>

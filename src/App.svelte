<script>
  import logo from './assets/book-open-svgrepo-com.svg';
  import OutlineButton from './lib/OutlineButton.svelte';
  import FeatureCard from './lib/FeatureCard.svelte';

  const comparisonRows = [
    {
      name: 'Ward Program',
      link: null,
      visibility: "Yes — your data is never made public. It's only accessible via your private URL and custom QR code.",
      cost: '$3 per month',
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
        <img src={logo} alt="Ward Program" class="block h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
        <span class="text-2xl font-normal tracking-[0.05em] text-slate-900 md:text-[1.75rem] lg:text-[2rem]">Ward Program</span>
      </div>
      <h1 class="mb-4 text-[2.5rem] leading-[1.2] font-light tracking-[0.05em] text-slate-900 md:text-[4rem] lg:text-[5rem]">plain like paper</h1>
      <p class="m-0 text-lg font-normal text-slate-600 md:text-xl lg:text-2xl">No need to be complicated.</p>
    </section>

    <section class="mb-12 grid grid-cols-1 gap-12 md:mb-16 md:grid-cols-3 md:gap-10 lg:gap-12">
      <FeatureCard
        title="Edit your weekly program"
        body="Create and manage your church congregation's weekly program. It's simple, straightforward, and easy to use."
      />

      <FeatureCard
        title="Private and secure"
        body="Your congregation information stays private. We don't make your details public or searchable by anyone."
      />

      <FeatureCard
        title="QR code for your church"
        body="Generate a QR code to display in your church. Members can scan it to access the program on their phones."
      />
    </section>

    <section class="mb-12 md:mb-16 ">
      <div class="mb-6 text-center">
        <h2 class="mb-2 text-3xl font-light tracking-[0.04em] text-slate-900 md:text-4xl">Compare Your Options</h2>
        <p class="m-0 text-base text-slate-600 md:text-lg">A side-by-side look at privacy, convenience, and cost.</p>
      </div>

      <div class="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
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

    <footer class="text-center text-slate-600">
      <p>This website is maintained by Ward Program. All rights reserved. &copy; {new Date().getFullYear()}</p>
      <p>Not an official church website.</p>
    </footer>
  </main>
</div>

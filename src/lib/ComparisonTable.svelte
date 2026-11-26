<script>
  import Mark from './Mark.svelte';
  import { comparisonRows } from '../content/comparison.js';

  /** @type {{ caption?: string }} */
  let { caption = 'Comparison of sacrament meeting program tools' } = $props();
</script>

<!-- Mobile: Comparison cards -->
<div class="grid grid-cols-1 gap-4 md:hidden">
  {#each comparisonRows as row (row.name)}
    <article class={`rounded-xl border p-5 ${row.featured ? 'border-navy-strong/40 bg-accent shadow-sm ring-1 ring-navy-strong/15' : 'border-line bg-white'}`}>
      <div class="mb-4 flex items-center gap-2.5">
        <p class={`m-0 text-base ${row.featured ? 'font-bold text-ink' : 'font-medium text-ink'}`}>
          {#if row.link}
            <a href={row.link} rel="noopener nofollow" class="text-ink underline decoration-line underline-offset-2 transition-colors hover:text-link">{row.name}</a>
          {:else}
            {row.name}
          {/if}
        </p>
        {#if row.featured}
          <span class="rounded-full bg-navy-strong px-2.5 py-0.5 text-xs font-semibold text-white">Recommended</span>
        {/if}
      </div>
      <div class="mb-3 grid grid-cols-2 gap-3">
        <div class="flex items-center gap-2 text-sm"><Mark value={row.isPrivate} yes="Private" no="Publicly searchable" showLabel /></div>
        <div class="flex items-center gap-2 text-sm"><Mark value={row.hasQr} yes="QR built-in" no="No QR" unknown="QR not advertised" showLabel /></div>
        <div class="flex items-center gap-2 text-sm"><Mark value={row.noApp} yes="No app needed" no="App required" showLabel /></div>
        <div class="flex items-center gap-2 text-sm"><span class="font-semibold text-ink">{row.cost}</span></div>
      </div>
      <p class="m-0 text-sm leading-relaxed text-muted">{row.notes}</p>
    </article>
  {/each}
</div>

<!-- Desktop: Clean table -->
<div class="hidden overflow-hidden rounded-xl border border-line bg-white shadow-sm md:block">
  <table class="w-full border-collapse text-left text-sm">
    <caption class="sr-only">{caption}</caption>
    <thead>
      <tr class="border-b border-line bg-page">
        <th scope="col" class="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-muted">Solution</th>
        <th scope="col" class="px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-muted">Private</th>
        <th scope="col" class="px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-muted">QR Code</th>
        <th scope="col" class="px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-muted">No App</th>
        <th scope="col" class="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-muted">Cost</th>
        <th scope="col" class="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-muted">Notes</th>
      </tr>
    </thead>
    <tbody>
      {#each comparisonRows as row, i (row.name)}
        <tr class={`${i < comparisonRows.length - 1 ? 'border-b border-line-soft' : ''} ${row.featured ? 'bg-accent/70' : 'bg-white hover:bg-panel'} transition-colors`}>
          <th scope="row" class="px-5 py-4 font-normal">
            <div class="flex items-center gap-2.5">
              {#if row.featured}
                <span class="whitespace-nowrap font-semibold text-ink">{row.name}</span>
                <span class="rounded-full bg-navy-strong px-2 py-0.5 text-xs font-semibold text-white">Recommended</span>
              {:else if row.link}
                <a href={row.link} rel="noopener nofollow" class="text-ink-soft underline decoration-line underline-offset-2 transition-colors hover:text-link">{row.name}</a>
              {:else}
                <span class="text-ink-soft">{row.name}</span>
              {/if}
            </div>
          </th>
          <td class="px-5 py-4 text-center"><Mark value={row.isPrivate} yes="Private" no="Publicly searchable" size={20} center /></td>
          <td class="px-5 py-4 text-center"><Mark value={row.hasQr} yes="QR code built in" no="No QR code" unknown="Not advertised" size={20} center /></td>
          <td class="px-5 py-4 text-center"><Mark value={row.noApp} yes="No app needed" no="App required" size={20} center /></td>
          <td class="px-5 py-4">
            <span class={row.featured ? 'font-semibold text-ink' : 'text-ink-soft'}>{row.cost}</span>
          </td>
          <td class="px-5 py-4 text-muted">{row.notes}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

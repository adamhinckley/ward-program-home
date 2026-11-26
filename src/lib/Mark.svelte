<script>
  // Yes / no / unknown icon with a text label, so screen readers and crawlers get the value too.
  /** @type {{ value: boolean | null, yes: string, no: string, unknown?: string, showLabel?: boolean, size?: number, center?: boolean }} */
  let { value, yes, no, unknown = 'Varies', showLabel = false, size = 18, center = false } = $props();

  const label = $derived(value === true ? yes : value === false ? no : unknown);
</script>

{#if value === true}
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class={['shrink-0 text-success', center && 'mx-auto']}><path d="M20 6 9 17l-5-5"/></svg>
{:else if value === false}
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class={['shrink-0 text-danger', center && 'mx-auto']}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
{:else}
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class={['shrink-0 text-warning', center && 'mx-auto']}><path d="M5 12h14"/></svg>
{/if}
<span class={showLabel ? (value === null ? 'text-muted' : 'text-ink-soft') : 'sr-only'}>{label}</span>

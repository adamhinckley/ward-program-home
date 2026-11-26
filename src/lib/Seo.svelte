<script>
  import { BRAND } from '../content/site.js';
  import { absoluteUrl, jsonLdScript } from './schema.js';

  /** @type {{ title: string, description: string, path: string, schema?: object[], noindex?: boolean }} */
  let { title, description, path, schema = [], noindex = false } = $props();

  const url = $derived(absoluteUrl(path));
  const image = absoluteUrl('/og-image.png');
  const imageAlt = 'Ward Program — private, simple sacrament meeting programs for LDS wards';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  {#if noindex}
    <meta name="robots" content="noindex" />
  {:else}
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
    <link rel="canonical" href={url} />
  {/if}

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={BRAND} />
  <meta property="og:locale" content="en_US" />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content={imageAlt} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
  <meta name="twitter:image:alt" content={imageAlt} />

  {#if schema.length}
    {@html jsonLdScript(schema)}
  {/if}
</svelte:head>

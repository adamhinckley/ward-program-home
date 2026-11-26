<script>
  import Layout from './lib/Layout.svelte';
  import { routeFor } from './routes.js';

  /** @type {{ path: string }} */
  let { path } = $props();

  const route = $derived(routeFor(path));
</script>

<Layout>
  <route.component meta={route.meta} />
</Layout>

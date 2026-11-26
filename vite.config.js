import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";

// Pages are rendered to static HTML after the client build by scripts/prerender.mjs.
// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), tailwindcss()],
});

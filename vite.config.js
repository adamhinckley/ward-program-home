import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import prerender from "@prerenderer/rollup-plugin";
import JSDOMRenderer from "@prerenderer/renderer-jsdom";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), tailwindcss()],
  build: {
    rollupOptions: {
      plugins: [
        prerender({
          routes: ["/"],
          renderer: new JSDOMRenderer(),
          rendererOptions: {
            renderAfterDocumentEvent: "app-ready",
          },
        }),
      ],
    },
  },
});

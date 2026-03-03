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
            renderAfterTime: 2000,
          },
          postProcess(renderedRoute) {
            // Ensure the prerendered HTML is minified-friendly
            renderedRoute.html = renderedRoute.html.replace(
              /<div id="app"><\/div>/,
              `<div id="app">${renderedRoute.html.match(/<div id="app">([\s\S]*?)<\/div>/)?.[1] || ""}</div>`,
            );
            return renderedRoute;
          },
        }),
      ],
    },
  },
});

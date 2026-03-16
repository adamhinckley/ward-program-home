import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import prerender from "@prerenderer/rollup-plugin";
import JSDOMRenderer from "@prerenderer/renderer-jsdom";
import { JSDOM } from "jsdom";

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
            const dom = new JSDOM(renderedRoute.html);
            const app = dom.window.document.querySelector("#app");
            if (app) {
              const appContent = app.innerHTML;
              app.innerHTML = appContent;
            }
            renderedRoute.html = dom.serialize();
            return renderedRoute;
          },
        }),
      ],
    },
  },
});

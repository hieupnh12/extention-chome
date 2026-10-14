import { cpSync } from "node:fs";
import { build, defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Chrome content scripts cannot be ES modules, and this Vite build cannot emit
// mixed formats from one Rollup pass. Bundle the content script on its own.
function buildContentScript() {
  return {
    name: "build-content-script",
    apply: "build",
    async closeBundle() {
      await build({
        configFile: false,
        plugins: [react()],
        build: {
          outDir: "dist",
          emptyOutDir: false,
          rollupOptions: {
            input: "src/content/content.jsx",
            output: {
              format: "iife",
              name: "EduNetContent",
              entryFileNames: "content/content.js",
              inlineDynamicImports: true,
              assetFileNames: "content/[name][extname]",
            },
          },
        },
      });
      cpSync("img", "dist/img", { recursive: true });
    },
  };
}

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    {
      name: "strip-crossorigin",
      transformIndexHtml(html) {
        return html.replace(/\s+crossorigin(?:="[^"]*")?/g, "");
      },
    },
    buildContentScript(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: "src/popup/index.html",
        background: "src/background/background.js",
      },
      output: {
        entryFileNames: (chunk) => {
          if (chunk.name === "background") return "background/background.js";
          if (chunk.name === "popup") return "popup/popup.js";
          return "assets/[name].js";
        },
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: "src/popup/index.html",
        content: "src/content/content.jsx",
        background: "src/background/background.js"
      },
      output: {
        entryFileNames: (chunk) => {
          if (chunk.name === "content") return "content/content.js";
          if (chunk.name === "background") return "background/background.js";
          return "popup/popup.js";
        }
      }
    }
  }
})

import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  build: {
    outDir: "./lib",
    cssCodeSplit: false, // only one css file , including async chunk's css
    // sourcemap: 'hidden'
    // sourcemap: true,
    // manifest: true,
    lib: {
      entry: "./src/ripplePlugin.ts",
      name: "RippleLite",
      // formats: ['es'], // esm
      // formats: ['umd'],
      formats: ["es", "umd"],
      fileName: "index",
    },
  },
  server: {
    host: true,
    port: 3030,
  },
  preview: {
    host: true, // all address , same as 0.0.0.0
    port: 3031,
  },
});

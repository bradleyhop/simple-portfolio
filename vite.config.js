import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import webfontDownload from "vite-plugin-webfont-dl";
import { createHtmlPlugin } from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    webfontDownload(),
    createHtmlPlugin({
      // minifies, removes comments from .html files only
      minify: true,
    }),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/assets/style/main.scss";
        `,
      },
    },
  },
});

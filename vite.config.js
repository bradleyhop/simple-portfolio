import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import webfontDownload from "vite-plugin-webfont-dl";
import { VitePluginRadar } from "vite-plugin-radar";
import { createHtmlPlugin } from "vite-plugin-html";
import pluginPurgeCSS from "@mojojoejo/vite-plugin-purgecss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    webfontDownload(),
    VitePluginRadar({
      // google analytics id
      analytics: {
        id: "G-PCJSPMG67T",
      },
    }),
    createHtmlPlugin({
      // minifies and removes comments from .html files only
      minify: true,
    }),
    // removes unused css
    pluginPurgeCSS(),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        // main.scss imports all other scss
        additionalData: `@import "@/assets/style/main.scss";`,
      },
    },
  },
});

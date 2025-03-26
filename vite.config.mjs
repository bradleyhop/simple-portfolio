import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import webfontDownload from "vite-plugin-webfont-dl";
import { VitePluginRadar } from "vite-plugin-radar";
import { createHtmlPlugin } from "vite-plugin-html";
// import pluginPurgeCSS from "@mojojoejo/vite-plugin-purgecss";
import pluginPurgeCss from "vite-plugin-purgecss-updated-v5";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
  },

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
    pluginPurgeCss(),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        // supposed to fix legacy-js issue, but no
        api: "modern-compiler",
        // migration from @import to @use
        additionsalData: `@use "src/assets/style/main" as *;`,
      },
    },
  },
});

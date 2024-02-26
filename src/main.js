import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
// import VueGtag from "vue-gtag";

createApp(App)
  .use(router)
  /*
   * .use(VueGtag, {
   *   config: { id: "G-PCJSPMG67T" },
   * })
   */
  .mount("#app");

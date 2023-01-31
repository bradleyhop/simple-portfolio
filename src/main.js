import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import VueGtag from "vue-gtag";

const app = createApp(App);

app.use(router).use(VueGtag, {
  config: { id: "G-PCJSPMG67T" },
});

app.mount("#app");

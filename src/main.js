import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

// to get Vue Router to work with Netlify, see:
// https://www.vuemastery.com/blog/vue-router-4-route-params-not-available-on-created-setup/
router.isReady().then(() => {
  app.mount("#app");
});

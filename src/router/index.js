import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
// import SitePortfolio from "@/views/SitePortfolio.vue";
// import ContactMe from "@/views/ContactMe.vue";

// Lazy loading
const SitePortfolio = () => import("../views/SitePortfolio.vue");
const ContactMe = () => import("../views/ContactMe.vue");

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/portfolio",
      name: "SitePortfolio",
      component: SitePortfolio,
    },
    {
      path: "/contact",
      name: "ContactMe",
      component: ContactMe,
    },
  ],
});

export default router;

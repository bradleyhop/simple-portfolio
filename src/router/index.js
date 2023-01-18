import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
// import SitePortfolio from "@/views/SitePortfolio.vue";
// import ContactMe from "@/views/ContactMe.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/portfolio",
      name: "SitePortfolio",
      // component: SitePortfolio,
      component: () => import("@/views/SitePortfolio.vue"),
    },
    {
      path: "/contact",
      name: "ContactMe",
      // component: ContactMe,
      component: () => import("@/views/ContactMe.vue"),
    },
  ],
});

export default router;

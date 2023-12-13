import { createRouter, createWebHistory } from "vue-router";
// load home view by default
import HomeView from "@/views/HomeView.vue";

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
      component: () => import("@/views/SitePortfolio.vue"),
    },
    {
      path: "/contact",
      name: "ContactMe",
      component: () => import("@/views/ContactMe.vue"),
    },
    // handle 404 with grace
    {
      path: "/404",
      name: "NotFound",
      component: () => import("@/views/NotFound.vue"),
    },
    // catch-all
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
    },
  ],
});

export default router;

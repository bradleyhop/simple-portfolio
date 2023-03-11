import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "HomeView",
      component: () => import("@/views/HomeView.vue"),
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

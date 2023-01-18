import { createRouter, createWebHistory } from "vue-router";

// save ourselves from manually importing every page view component;
// takes in page view file name, outputs path as string
const loadComponent = (view) => {
    return () => import(`../views/${view}.vue`);
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "HomeView",
      component: loadComponent('HomeView'),
    },
    {
      path: "/portfolio",
      name: "SitePortfolio",
      component: loadComponent('SitePortfolio'),
    },
    {
      path: "/contact",
      name: "ContactMe",
      component: loadComponent('ContactMe'),
    },
  ],
});

export default router;
